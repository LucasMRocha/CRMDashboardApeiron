param(
  [switch]$DryRun,
  [switch]$Overwrite,
  [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$scriptPath = Join-Path $root "tools\sync-zoho-to-db.py"

if (!(Test-Path -LiteralPath $scriptPath)) {
  throw "Sync script not found: $scriptPath"
}

$argsList = @($scriptPath)
if ($DryRun) { $argsList += "--dry-run" }
if ($Overwrite) { $argsList += "--overwrite" }
if ($SkipBuild) { $argsList += "--skip-build" }

python @argsList
