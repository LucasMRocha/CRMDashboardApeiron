param(
  [string]$Root,
  [string]$HtmlFile = 'Pipeline Opportunities Brasil_TESTE.html',
  [string]$Launcher = 'opportunities_test'
)

$ErrorActionPreference = 'Stop'

if (-not $Root) {
  $toolsDir = Split-Path -Parent $MyInvocation.MyCommand.Path
  $Root = Split-Path -Parent $toolsDir
}

$rootPath = [System.IO.Path]::GetFullPath($Root)
$htmlPath = Join-Path $rootPath $HtmlFile
$logPath = Join-Path $rootPath 'launcher.log'

function Write-Log {
  param([string]$Msg)
  "[$(Get-Date -Format s)] $Msg" | Out-File -FilePath $logPath -Append -Encoding UTF8
}

try {
  if (-not (Test-Path $htmlPath)) {
    Write-Log "ERROR: dashboard not found -> $htmlPath"
    Write-Host "Dashboard file not found:`n$htmlPath"
    exit 1
  }

  $uri = ([System.Uri]::new($htmlPath)).AbsoluteUri
  $appUri = "${uri}?launcher=$Launcher"

  Write-Log "ROOT=$rootPath"
  Write-Log "APP_URI=$appUri"

  $edgeCandidates = @(
    "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
    "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
    "$env:LocalAppData\Microsoft\Edge\Application\msedge.exe"
  ) | Where-Object { $_ -and (Test-Path $_) }

  $edgeExe = $edgeCandidates | Select-Object -First 1
  if ($edgeExe) {
    Write-Log "Open with Edge: $edgeExe"
    Start-Process -FilePath $edgeExe -ArgumentList @('--new-window', "--app=$appUri") -WorkingDirectory $rootPath
    exit 0
  }

  $msedgeCmd = Get-Command msedge -ErrorAction SilentlyContinue
  if ($msedgeCmd) {
    Write-Log 'Open with msedge from PATH'
    Start-Process -FilePath 'msedge' -ArgumentList @('--new-window', "--app=$appUri") -WorkingDirectory $rootPath
    exit 0
  }

  $chromeCmd = Get-Command chrome -ErrorAction SilentlyContinue
  if ($chromeCmd) {
    Write-Log 'Open with chrome from PATH'
    Start-Process -FilePath 'chrome' -ArgumentList @('--new-window', "--app=$appUri") -WorkingDirectory $rootPath
    exit 0
  }

  Write-Log 'Fallback: open html directly'
  Start-Process -FilePath $htmlPath -WorkingDirectory $rootPath
  exit 0
}
catch {
  Write-Log "EXCEPTION: $($_.Exception.Message)"
  Write-Host "Erro ao abrir dashboard: $($_.Exception.Message)"
  exit 1
}
