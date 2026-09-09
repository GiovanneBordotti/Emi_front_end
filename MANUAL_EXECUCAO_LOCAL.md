# 📘 Manual de Instruções: Como Rodar a Aplicação Localmente

Este manual fornece o passo a passo completo para que qualquer membro da equipe, professor orientador ou avaliador da banca consiga configurar, verificar e executar o **EMI YouTube Analytics (Front-end)** em qualquer computador (Windows, Linux ou macOS).

---

## 📋 1. Pré-requisitos Mínimos

Antes de iniciar, certifique-se de que a máquina possui:

- **Node.js**: Versão `18.x`, `20.x` ou `22+` (recomendado **LTS**)
  - Para verificar se já está instalado, abra o terminal e digite:
    ```bash
    node -v
    ```
  - Se não estiver instalado, faça o download gratuito em: [https://nodejs.org/](https://nodejs.org/)
- **npm**: Versão `9.x` ou superior (instalado automaticamente junto com o Node.js)
  - Para verificar:
    ```bash
    npm -v
    ```
- **Navegador Web Moderno**: Google Chrome, Microsoft Edge, Brave, Firefox ou Safari.
- *(Opcional)* **Git**: Para clonar o repositório.

> [!NOTE]
> **Não é necessário instalar o Angular CLI globalmente**. O projeto utiliza o Angular CLI local incluído no arquivo `package.json`.

---

## ⚡ 2. Execução Rápida (Scripts Automatizados)

Criamos scripts que realizam todo o trabalho pesado por você: **verificam os pré-requisitos, instalam as dependências (`npm install`) caso seja a primeira vez e iniciam o servidor abrindo o navegador**.

### Opção A: No Windows via PowerShell (Recomendado)
1. Abra o terminal **PowerShell** na pasta do projeto (`Emi_front_end`).
2. Execute o comando:
   ```powershell
   ./start.ps1
   ```
   *(Caso o Windows exiba aviso de política de execução na primeira vez, execute o comando abaixo antes de rodar o script):*
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   ./start.ps1
   ```

### Opção B: No Windows por Duplo Clique (Sem abrir terminal)
1. Abra a pasta do projeto no **Explorador de Arquivos do Windows**.
2. Dê um **duplo clique** no arquivo:
   👉 **`start.bat`**
3. Uma janela preta do prompt abrirá automaticamente, validará o ambiente e iniciará a aplicação.

### Opção C: No Linux ou macOS
1. Abra o terminal na pasta do projeto.
2. Dê permissão de execução e inicie o script:
   ```bash
   chmod +x start.sh
   ./start.sh
   ```

---

## 🛠️ 3. Execução Manual (Passo a Passo via Terminal)

Se preferir executar manualmente os comandos padrão do ecossistema Node:

1. **Abra o terminal** na raiz do projeto (`c:\...\Emi_front_end`).
2. **Instale as dependências** do projeto:
   ```bash
   npm install
   ```
   *(Este comando lerá o arquivo `package-lock.json` e baixará a versão exata de cada biblioteca necessária).*
3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```
4. **Abra o navegador** e acesse:
   👉 **[http://localhost:4200](http://localhost:4200)**

---

## 🧭 4. O que testar e rotas disponíveis

Assim que o servidor iniciar, você poderá interagir com as seguintes telas:

| Rota | Descrição | Destaques Interativos |
| :--- | :--- | :--- |
| **`/dashboard`** | **Dashboard Principal** *(Figura 8 do TCC)* | - 4 Cards com métricas de comentários e sentimentos.<br>- Distribuição gráfica (Positivo, Neutro, Negativo).<br>- Nuvem de temas recorrentes e alertas.<br>- Formulário por URL do vídeo no YouTube com pré-visualização instantânea.<br>- Lista de modelos com badges de status e acesso à IA. |
| **`/analise/mod-1`** | **Análise Detalhada com IA** | - Banner de dados da YouTube Data API (views, likes, comentários).<br>- Entendimento do vídeo pelo Gemini.<br>- Diagnóstico das reações do público (elogios vs. dores).<br>- Insights acionáveis para PMEs.<br>- Auditoria dos comentários com justificativas da IA e filtros. |
| **`/login`** | **Tela de Login** *(Figura 7 do TCC)* | - Card centralizado com identidade visual EMI.<br>- Inputs com ícones de envelope e cadeado.<br>- Alternador para mostrar/ocultar senha no ícone de olho.<br>- Botão estilizado com redirecionamento ao Dashboard. |
| **`/modelos`** | **Lista Geral de Modelos** | Visão expandida de todos os modelos cadastrados no sistema. |
| **`/execucoes`** | **Histórico de Execuções** | Tabela com log de processamento de vídeos e comentários. |
| **`/relatorios`** | **Relatórios Estratégicos** | Consolidação dos indicadores para exportação em PDF. |

---

## ❓ 5. Solução de Problemas Comuns (Troubleshooting)

### A. Porta 4200 já está em uso (`Port 4200 is already in use`)
- Isso ocorre se você já tiver outra instância do Angular rodando.
- **Solução**: Você pode rodar em outra porta usando:
  ```bash
  npm start -- --port 4300
  ```
  E acessar em `http://localhost:4300`.

### B. Erro `node: command not found`
- O Node.js não está instalado ou não foi adicionado ao PATH do Windows.
- **Solução**: Instale o Node.js LTS em [https://nodejs.org/](https://nodejs.org/) e marque a opção "Add to PATH" durante a instalação. Em seguida, reinicie o terminal.

### C. Como parar a aplicação?
- Pressione `Ctrl + C` na janela do terminal e confirme digitando `S` (ou `Y`).

