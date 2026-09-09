# ==============================================================================
# EMI YouTube Analytics - Script de Inicialização Automatizada (Windows PowerShell)
# ==============================================================================

Write-Host ""
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   🚀 EMI YOUTUBE ANALYTICS - INICIALIZADOR DO FRONT-END  " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Verifica se o Node.js está instalado
Write-Host "🔍 [1/3] Verificando se o Node.js está instalado..." -ForegroundColor Yellow
try {
    $nodeVersion = node -v
    Write-Host "   ✅ Node.js detectado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "   ❌ Node.js NÃO foi encontrado na sua máquina!" -ForegroundColor Red
    Write-Host "   👉 Por favor, faça o download e instale o Node.js (v18 ou superior):" -ForegroundColor Yellow
    Write-Host "      https://nodejs.org/" -ForegroundColor Cyan
    Write-Host ""
    
    # Tenta verificar se o winget está disponível para instalação automática no Windows
    if (Get-Command winget -ErrorAction SilentlyContinue) {
        $installChoice = Read-Host "   Deseja tentar instalar o Node.js automaticamente via winget? (S/N)"
        if ($installChoice -eq 'S' -or $installChoice -eq 's') {
            Write-Host "   Instalando Node.js LTS via winget..." -ForegroundColor Yellow
            winget install OpenJS.NodeJS.LTS
            Write-Host "   Instalação finalizada. Reinicie este terminal e execute o script novamente." -ForegroundColor Green
            exit
        }
    }
    pause
    exit 1
}

# 2. Verifica se o npm está instalado
try {
    $npmVersion = npm -v
    Write-Host "   ✅ npm detectado: v$npmVersion" -ForegroundColor Green
} catch {
    Write-Host "   ❌ npm não encontrado." -ForegroundColor Red
    exit 1
}

# 3. Verifica se as dependências (node_modules) já estão instaladas
Write-Host ""
Write-Host "📦 [2/3] Verificando dependências do projeto..." -ForegroundColor Yellow
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $scriptDir

if (-not (Test-Path "node_modules")) {
    Write-Host "   ⚠️  Pasta node_modules não encontrada. Instalando pacotes com npm install..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "   ❌ Erro ao instalar dependências via npm." -ForegroundColor Red
        pause
        exit $LASTEXITCODE
    }
    Write-Host "   ✅ Dependências instaladas com sucesso!" -ForegroundColor Green
} else {
    Write-Host "   ✅ Dependências já instaladas (node_modules presente)." -ForegroundColor Green
}

# 4. Inicia a aplicação Angular
Write-Host ""
Write-Host "🚀 [3/3] Iniciando o servidor de desenvolvimento Angular..." -ForegroundColor Yellow
Write-Host "   🌐 Acesse no navegador: http://localhost:4200" -ForegroundColor Cyan
Write-Host "   Pressione Ctrl+C para encerrar o servidor a qualquer momento." -ForegroundColor Gray
Write-Host ""

# Abre o navegador automaticamente após 3 segundos em background
Start-Job -ScriptBlock {
    Start-Sleep -Seconds 3
    Start-Process "http://localhost:4200"
} | Out-Null

npm start

