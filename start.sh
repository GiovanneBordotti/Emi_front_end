#!/usr/bin/env bash

# ==============================================================================
# EMI YouTube Analytics - Script de Inicialização Automatizada (Linux / macOS)
# ==============================================================================

echo ""
echo "=========================================================="
echo "   🚀 EMI YOUTUBE ANALYTICS - INICIALIZADOR DO FRONT-END  "
echo "=========================================================="
echo ""

# 1. Verifica Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não foi encontrado!"
    echo "👉 Instale o Node.js em: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js detectado: $(node -v)"
echo "✅ npm detectado: $(npm -v)"

# 2. Verifica node_modules
if [ ! -d "node_modules" ]; then
    echo ""
    echo "📦 Instalando dependências (npm install)..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Erro ao instalar dependências."
        exit 1
    fi
    echo "✅ Dependências instaladas com sucesso!"
else
    echo "✅ Dependências já instaladas."
fi

# 3. Inicia o servidor
echo ""
echo "🚀 Iniciando o servidor de desenvolvimento Angular..."
echo "🌐 Acesse: http://localhost:4200"
echo ""

npm start

