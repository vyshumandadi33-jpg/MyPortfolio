@echo off
title B.Tech IT Portfolio - Dev Server
echo ========================================================
echo   Launching B.Tech Information Technology Portfolio
echo   React + Vite (Dark Blue and Purple Theme)
echo ========================================================
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not found in your system PATH!
    echo Please download and install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b
)

if not exist node_modules (
    echo [INFO] Installing required dependencies...
    call npm install
)

echo [INFO] Starting Vite development server...
echo [INFO] The website will automatically open at http://localhost:5173
echo.
start http://localhost:5173
call npm run dev

pause
