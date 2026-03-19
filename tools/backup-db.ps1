$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$dbName = "Dashboard Comercial Brasil.xlsx"
$dbPath = Join-Path $root $dbName

if (!(Test-Path -LiteralPath $dbPath)) {
  throw "DB not found: $dbPath"
}

$ts = Get-Date -Format "yyyyMMdd_HHmmss"
$backupPath = Join-Path $root ("Dashboard_Comercial_Brasil_backup_{0}.xlsx" -f $ts)

Copy-Item -LiteralPath $dbPath -Destination $backupPath -Force

$allBackups = Get-ChildItem -LiteralPath $root -Filter "Dashboard_Comercial_Brasil_backup_*.xlsx" |
  Sort-Object LastWriteTime -Descending

$toDelete = $allBackups | Select-Object -Skip 2
foreach ($f in $toDelete) {
  Remove-Item -LiteralPath $f.FullName -Force
  Write-Output ("Deleted old backup: " + $f.Name)
}

Write-Output ("Created backup: " + [IO.Path]::GetFileName($backupPath))
Get-ChildItem -LiteralPath $root -Filter "Dashboard_Comercial_Brasil_backup_*.xlsx" |
  Sort-Object LastWriteTime -Descending |
  Select-Object Name, LastWriteTime |
  Format-Table -AutoSize
