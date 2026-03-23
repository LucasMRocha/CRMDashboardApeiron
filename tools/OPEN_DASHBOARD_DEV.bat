@echo off
setlocal
set "TOOLS_DIR=%~dp0"
for %%I in ("%TOOLS_DIR%..") do set "ROOT=%%~fI\"
set "INDEX=%ROOT%Pipeline Opportunities Brasil.html"

if not exist "%INDEX%" set "INDEX=%ROOT%APEIRON BRASIL - Opportunities Leads Hub.html"

if not exist "%INDEX%" (
  echo Dashboard file not found:
  echo %INDEX%
  pause
  exit /b 1
)

set "INDEX_URL=file:///%INDEX:\=/%"
set "ROOT_URL=%ROOT:\=/%"
set "ROOT_URL=%ROOT_URL: =%%20%"
set "LAUNCH_ARGS=?launcher=opportunities^&launcherDir=%ROOT_URL%"

if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
  start "" /D "%ROOT%" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" --app="%INDEX_URL%%LAUNCH_ARGS%"
  exit /b 0
)

if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
  start "" /D "%ROOT%" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" --app="%INDEX_URL%%LAUNCH_ARGS%"
  exit /b 0
)

start "" /D "%ROOT%" "%INDEX%"
