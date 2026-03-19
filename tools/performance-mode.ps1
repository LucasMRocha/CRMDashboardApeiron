param(
  [ValidateSet('status','on','off')]
  [string]$Mode = 'status',
  [switch]$IncludeBrowsers,
  [switch]$Force
)

$ErrorActionPreference = "Stop"

$StateFile = Join-Path $PSScriptRoot "performance-mode.state.json"
$OcrPort = 8008
$OcrApiPath = "C:\AI_WORKSPACE\05_AUTOMATIONS\python\ocr_api\app.py"

function Write-Section([string]$title) {
  Write-Host ""
  Write-Host ("=== " + $title + " ===")
}

function Get-RamSnapshot {
  $os = Get-CimInstance Win32_OperatingSystem
  [PSCustomObject]@{
    TotalGB = [math]::Round($os.TotalVisibleMemorySize / 1MB, 2)
    FreeGB  = [math]::Round($os.FreePhysicalMemory / 1MB, 2)
    UsedGB  = [math]::Round(($os.TotalVisibleMemorySize - $os.FreePhysicalMemory) / 1MB, 2)
  }
}

function Get-ProcessMemoryMB([string]$name) {
  $procs = Get-Process -Name $name -ErrorAction SilentlyContinue
  if (!$procs) { return 0 }
  return [math]::Round((($procs | Measure-Object -Property WorkingSet64 -Sum).Sum / 1MB), 1)
}

function Get-OcrApiPids {
  try {
    $pids = Get-NetTCPConnection -LocalAddress "127.0.0.1" -LocalPort $OcrPort -State Listen -ErrorAction Stop |
      Select-Object -ExpandProperty OwningProcess -Unique
    return @($pids)
  } catch {
    return @()
  }
}

function Stop-NamedProcess([string]$name, [switch]$forceStop) {
  $procs = Get-Process -Name $name -ErrorAction SilentlyContinue
  if (!$procs) { return 0 }
  foreach ($p in $procs) {
    if ($forceStop) {
      Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue
    } else {
      Stop-Process -Id $p.Id -ErrorAction SilentlyContinue
    }
  }
  return $procs.Count
}

function Stop-ProcessByPid([int[]]$pids, [switch]$forceStop) {
  if (!$pids -or $pids.Count -eq 0) { return 0 }
  $count = 0
  foreach ($pid in $pids) {
    if (Get-Process -Id $pid -ErrorAction SilentlyContinue) {
      if ($forceStop) {
        Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
      } else {
        Stop-Process -Id $pid -ErrorAction SilentlyContinue
      }
      $count++
    }
  }
  return $count
}

function Start-Ollama {
  $ollamaCmd = Get-Command ollama -ErrorAction SilentlyContinue
  if (!$ollamaCmd) {
    Write-Host "Ollama command not found in PATH."
    return $false
  }
  Start-Process -FilePath $ollamaCmd.Source -ArgumentList "serve" -WindowStyle Hidden
  Start-Sleep -Milliseconds 800
  return ((Get-Process -Name "ollama" -ErrorAction SilentlyContinue | Measure-Object).Count -gt 0)
}

function Start-AnythingLLM {
  $candidates = @(@(
    (Join-Path $env:LOCALAPPDATA "Programs\AnythingLLM\AnythingLLM.exe"),
    (Join-Path $env:ProgramFiles "AnythingLLM\AnythingLLM.exe"),
    (Join-Path ${env:ProgramFiles(x86)} "AnythingLLM\AnythingLLM.exe")
  ) | Where-Object { $_ -and (Test-Path $_) })

  if ($candidates.Count -gt 0) {
    try {
      Start-Process -FilePath $candidates[0] -ErrorAction Stop
      Start-Sleep -Milliseconds 1000
      return ((Get-Process -Name "AnythingLLM" -ErrorAction SilentlyContinue | Measure-Object).Count -gt 0)
    } catch {
      Write-Host ("Could not start AnythingLLM from path: " + $candidates[0])
      Write-Host ("Reason: " + $_.Exception.Message)
      return $false
    }
  }

  $cmd = Get-Command AnythingLLM -ErrorAction SilentlyContinue
  if ($cmd) {
    Start-Process -FilePath $cmd.Source
    return $true
  }

  Write-Host "AnythingLLM executable not found."
  return $false
}

function Start-OcrApi {
  if (!(Test-Path $OcrApiPath)) {
    Write-Host "OCR API file not found: $OcrApiPath"
    return $false
  }
  $pythonCmd = Get-Command python -ErrorAction SilentlyContinue
  if (!$pythonCmd) {
    Write-Host "Python command not found. Could not start OCR API."
    return $false
  }
  Start-Process -FilePath $pythonCmd.Source -ArgumentList "`"$OcrApiPath`"" -WindowStyle Minimized
  Start-Sleep -Milliseconds 1200
  return ((Get-OcrApiPids).Count -gt 0)
}

function Show-Status {
  Write-Section "Performance Snapshot"
  $ram = Get-RamSnapshot
  Write-Host ("RAM Total: {0} GB | Used: {1} GB | Free: {2} GB" -f $ram.TotalGB, $ram.UsedGB, $ram.FreeGB)

  $tracked = @("ollama","AnythingLLM","python","chrome","msedge","Code","claude")
  $rows = foreach ($name in $tracked) {
    $procs = Get-Process -Name $name -ErrorAction SilentlyContinue
    [PSCustomObject]@{
      Process = $name
      Count = @($procs).Count
      WorkingSetMB = if ($procs) { [math]::Round((($procs | Measure-Object WorkingSet64 -Sum).Sum / 1MB), 1) } else { 0 }
    }
  }
  $rows | Sort-Object WorkingSetMB -Descending | Format-Table -AutoSize

  $ocrPids = Get-OcrApiPids
  if ($ocrPids.Count -gt 0) {
    Write-Host ("OCR API (port {0}) listening on PID(s): {1}" -f $OcrPort, ($ocrPids -join ", "))
  } else {
    Write-Host ("OCR API (port {0}) not detected." -f $OcrPort)
  }
}

switch ($Mode) {
  "status" {
    Show-Status
    break
  }
  "on" {
    Write-Section "Enabling Light Mode"
    $state = [ordered]@{
      ts = (Get-Date).ToString("s")
      stopped = [ordered]@{
        ollama = $false
        anythingllm = $false
        ocr_api = $false
        browsers = $false
      }
    }

    $ocrPids = Get-OcrApiPids
    if ($ocrPids.Count -gt 0) {
      $killed = Stop-ProcessByPid -pids $ocrPids -forceStop:$Force
      if ($killed -gt 0) {
        $state.stopped.ocr_api = $true
        Write-Host ("Stopped OCR API process(es): " + $killed)
      }
    }

    $stoppedAnything = Stop-NamedProcess -name "AnythingLLM" -forceStop:$Force
    if ($stoppedAnything -gt 0) {
      $state.stopped.anythingllm = $true
      Write-Host ("Stopped AnythingLLM process(es): " + $stoppedAnything)
    }

    $stoppedOllama = Stop-NamedProcess -name "ollama" -forceStop:$Force
    if ($stoppedOllama -gt 0) {
      $state.stopped.ollama = $true
      Write-Host ("Stopped Ollama process(es): " + $stoppedOllama)
    }

    if ($IncludeBrowsers) {
      $stoppedChrome = Stop-NamedProcess -name "chrome" -forceStop:$Force
      $stoppedEdge = Stop-NamedProcess -name "msedge" -forceStop:$Force
      if (($stoppedChrome + $stoppedEdge) -gt 0) {
        $state.stopped.browsers = $true
      }
      Write-Host ("Stopped browser process(es): " + ($stoppedChrome + $stoppedEdge))
    }

    $state | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath $StateFile -Encoding UTF8
    Write-Host ("Saved state to: " + $StateFile)
    Show-Status
    break
  }
  "off" {
    Write-Section "Disabling Light Mode"
    if (!(Test-Path $StateFile)) {
      Write-Host "State file not found. Starting core services anyway."
      $state = [ordered]@{
        stopped = [ordered]@{
          ollama = $true
          anythingllm = $true
          ocr_api = $true
          browsers = $false
        }
      }
    } else {
      $state = Get-Content -Raw -LiteralPath $StateFile | ConvertFrom-Json
    }

    if ($state.stopped.ollama -and (Get-Process -Name "ollama" -ErrorAction SilentlyContinue | Measure-Object).Count -eq 0) {
      if (Start-Ollama) { Write-Host "Started Ollama." }
    }
    if ($state.stopped.anythingllm -and (Get-Process -Name "AnythingLLM" -ErrorAction SilentlyContinue | Measure-Object).Count -eq 0) {
      if (Start-AnythingLLM) { Write-Host "Started AnythingLLM." }
    }
    if ($state.stopped.ocr_api -and (Get-OcrApiPids).Count -eq 0) {
      if (Start-OcrApi) { Write-Host "Started OCR API." }
    }

    Show-Status
    break
  }
}
