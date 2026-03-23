@echo off
setlocal
set "ROOT=%~dp0"
set "PS=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
"%PS%" -NoProfile -ExecutionPolicy Bypass -File "%ROOT%tools\ABRIR_DASHBOARD_TESTE.ps1" -Root "%ROOT%"
if errorlevel 1 pause
