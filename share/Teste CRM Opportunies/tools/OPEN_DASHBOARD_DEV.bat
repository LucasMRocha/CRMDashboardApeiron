@echo off
setlocal
set "TOOLS_DIR=%~dp0"
for %%I in ("%TOOLS_DIR%..") do set "ROOT=%%~fI\"
set "PS=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
"%PS%" -NoProfile -ExecutionPolicy Bypass -File "%TOOLS_DIR%ABRIR_DASHBOARD_TESTE.ps1" -Root "%ROOT%"
if errorlevel 1 pause
