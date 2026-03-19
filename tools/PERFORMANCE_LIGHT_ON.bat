@echo off
setlocal
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0performance-mode.ps1" -Mode on -Force
echo.
pause
