@echo off
title EMI YouTube Analytics - Front-end
chcp 65001 > nul

echo ==========================================================
echo    🚀 EMI YOUTUBE ANALYTICS - INICIALIZADOR AUTOMATIZADO
echo ==========================================================
echo.

:: 1. Verifica se o Node.js está instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERRO] Node.js nao foi encontrado no sistema!
    echo Por favor, instale o Node.js em: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js detectado.

:: 2. Verifica se a pasta node_modules existe
if not exist "node_modules" (
    echo.
    echo [INFO] Pasta node_modules nao encontrada.
    echo [INFO] Instalando dependencias necessarias com npm install...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo [ERRO] Falha na instalacao das dependencias.
        pause
        exit /b %errorlevel%
    )
    echo [OK] Dependencias instaladas com sucesso!
) else (
    echo [OK] Dependencias ja instaladas.
)

:: 3. Inicia o servidor Angular
echo.
echo ==========================================================
echo  Iniciando servidor na porta 4200...
echo  Abra no seu navegador: http://localhost:4200
echo ==========================================================
echo.

call npm start

