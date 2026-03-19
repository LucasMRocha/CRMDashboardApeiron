$ErrorActionPreference = "Stop"

$root = "C:\Users\LucasMartinsRocha\OneDrive - Apeiron Pte Ltd\CRM\Commercial Dashboard"
$sourceHtml = Join-Path $root "APEIRON BRASIL - Commercial Leads Hub.html"
if (!(Test-Path $sourceHtml)) {
  throw "Source HTML not found: $sourceHtml"
}

$srcDir = Join-Path $root "src\dashboard"
$dataDir = Join-Path $srcDir "data"
$assetsDir = Join-Path $srcDir "assets"
$distDir = Join-Path $root "dist"
$toolsDir = Join-Path $root "tools"
$legacyDir = Join-Path $root "legacy"
New-Item -ItemType Directory -Force -Path $srcDir, $dataDir, $assetsDir, $distDir, $toolsDir, $legacyDir | Out-Null

$html = Get-Content -Raw -Path $sourceHtml

# Extract style into styles.css
$styleMatch = [regex]::Match($html, "<style>([\s\S]*?)</style>")
if (!$styleMatch.Success) {
  throw "Could not find <style> block."
}
$css = $styleMatch.Groups[1].Value.Trim()
Set-Content -Path (Join-Path $srcDir "styles.css") -Value $css -Encoding UTF8

# Extract final inline app script into app.js
$scriptMatch = [regex]::Match($html, "<script>\s*([\s\S]*?)\s*</script>\s*<div id=`"pref-toast`">")
if (!$scriptMatch.Success) {
  throw "Could not find final inline <script> block."
}
$js = $scriptMatch.Groups[1].Value

# Extract RAW_DATA into data/leads.js
$rawDataMatch = [regex]::Match($js, "const\s+RAW_DATA\s*=\s*(\[[\s\S]*?\]);\s*//\s*[^\r\n]*CONSTANTS")
if (!$rawDataMatch.Success) {
  throw "Could not extract RAW_DATA block from script."
}
$arrayLiteral = $rawDataMatch.Groups[1].Value
$leadsJs = "window.RAW_DATA = $arrayLiteral;`r`n"
Set-Content -Path (Join-Path $dataDir "leads.js") -Value $leadsJs -Encoding UTF8

# Replace RAW_DATA declaration inside app.js
$js2 = [regex]::Replace(
  $js,
  "const\s+RAW_DATA\s*=\s*\[[\s\S]*?\];\s*//\s*[^\r\n]*CONSTANTS",
  "const RAW_DATA = window.RAW_DATA || [];`r`n// CONSTANTS",
  1
)
Set-Content -Path (Join-Path $srcDir "app.js") -Value $js2.Trim() -Encoding UTF8

# Build new index.html
$newHtml = $html
$newHtml = [regex]::Replace($newHtml, "<style>[\s\S]*?</style>", "<link rel=`"stylesheet`" href=`"./styles.css`">", 1)
$newHtml = [regex]::Replace(
  $newHtml,
  "<img\s+src=`"data:image/jpeg;base64,[^`"]+`"\s+class=`"logo-img`"\s+alt=`"Apeiron`">",
  "<img src=`"./assets/logo.jpg`" class=`"logo-img`" alt=`"Apeiron`">",
  1
)
$replacementScript = @'
<script src="./data/leads.js"></script>
<script src="./app.js"></script>
<div id="pref-toast">
'@
$newHtml = [regex]::Replace(
  $newHtml,
  "<script>\s*[\s\S]*?\s*</script>\s*<div id=`"pref-toast`">",
  $replacementScript,
  1
)
Set-Content -Path (Join-Path $srcDir "index.html") -Value $newHtml -Encoding UTF8

# Copy logo asset
$logoSrc = Join-Path $root "Logo\Logo Apeiron.jpg.jpeg"
if (Test-Path $logoSrc) {
  Copy-Item -Path $logoSrc -Destination (Join-Path $assetsDir "logo.jpg") -Force
}

# Keep monolithic backup in legacy
Copy-Item -Path $sourceHtml -Destination (Join-Path $legacyDir "Pipeline Comercial Brasil - Follow-up Review.monolithic.backup.html") -Force

# Launcher for dev dashboard
$launcher = @'
@echo off
setlocal
set "ROOT=%~dp0"
set "INDEX=%ROOT%src\dashboard\index.html"

if not exist "%INDEX%" (
  echo Dashboard file not found:
  echo %INDEX%
  pause
  exit /b 1
)

if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" --app="file:///%INDEX:\=/%"
  exit /b 0
)

if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" --app="file:///%INDEX:\=/%"
  exit /b 0
)

start "" "%INDEX%"
'@
Set-Content -Path (Join-Path $root "OPEN_DASHBOARD_DEV.bat") -Value $launcher -Encoding ASCII

# Single-file build script for later
$buildPs1 = @'
param(
  [string]$Root = (Split-Path -Parent $PSScriptRoot)
)

$ErrorActionPreference = "Stop"
$src = Join-Path $Root "src\dashboard"
$dist = Join-Path $Root "dist"
New-Item -ItemType Directory -Force -Path $dist | Out-Null

$indexPath = Join-Path $src "index.html"
$cssPath = Join-Path $src "styles.css"
$appPath = Join-Path $src "app.js"
$dataPath = Join-Path $src "data\leads.js"
$logoPath = Join-Path $src "assets\logo.jpg"

foreach ($p in @($indexPath, $cssPath, $appPath, $dataPath, $logoPath)) {
  if (!(Test-Path $p)) { throw "Missing required file: $p" }
}

$html = Get-Content -Raw -Path $indexPath
$css = Get-Content -Raw -Path $cssPath
$app = Get-Content -Raw -Path $appPath
$data = Get-Content -Raw -Path $dataPath
$logoB64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes($logoPath))

$html = $html -replace '<link rel="stylesheet" href="\./styles\.css">', ("<style>`r`n" + $css + "`r`n</style>")
$html = $html -replace '<img src="\./assets/logo\.jpg" class="logo-img" alt="Apeiron">', ('<img src="data:image/jpeg;base64,' + $logoB64 + '" class="logo-img" alt="Apeiron">')
$html = $html -replace '<script src="\./data/leads\.js"></script>\s*<script src="\./app\.js"></script>', ("<script>`r`n" + $data + "`r`n" + $app + "`r`n</script>")

$outPath = Join-Path $dist "Dashboard_Apeiron_single_file.html"
Set-Content -Path $outPath -Value $html -Encoding UTF8
Write-Host "Built:" $outPath
'@
Set-Content -Path (Join-Path $toolsDir "build-single-file.ps1") -Value $buildPs1 -Encoding UTF8

$buildBat = @'
@echo off
setlocal
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0tools\build-single-file.ps1"
if errorlevel 1 (
  echo Failed to build single-file dashboard.
  pause
  exit /b 1
)
echo.
echo Build complete.
pause
'@
Set-Content -Path (Join-Path $root "BUILD_SINGLE_FILE.bat") -Value $buildBat -Encoding ASCII

Write-Host "Reorganization complete."
