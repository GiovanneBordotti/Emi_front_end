# EMI YouTube Analytics - Front-end (Angular)

Interface web moderna desenvolvida para o projeto de TCC **"EMI YouTube Analytics (Análise automatizada de comentários com IA)"** - UNIP 2026.

---

## 🚀 Tecnologias Utilizadas

- **Angular 21** (Standalone Components, Signals reativos, Control Flow moderno `@if` / `@for`)
- **SCSS Modular** com Design System baseado em Design Tokens
- **Reactive Forms** com validação visual e feedback ao usuário
- **HTML5 Semântico & SVG Inline** para ícones leves e de alta definição

---

## 🎨 Design System & Protótipos Alinhados ao TCC

A aplicação foi desenhada com base estrita nos protótipos visuais documentados:

1. **Tela de Login (`/login`) - Figura 7 (Página 37 do TCC):**
   - Card centralizado com identidade visual EMI.
   - Logo estilizado com ícone play.
   - Inputs com ícones de envelope (e-mail) e cadeado (senha com botão de exibir/ocultar).
   - Botão de ação primária em vermelho YouTube (`Entrar no sistema`).

2. **Dashboard / Menu Inicial (`/dashboard`) - Figura 8 (Página 38 do TCC):**
   - **Sidebar Lateral Escura (`#12161B`):** Navegação entre Dashboard, Modelos, Execuções e Relatórios, perfil de usuário e botão de logout.
   - **Header:** Título da página, descrição e botão de ação rápida `+ Novo Modelo`.
   - **4 KPI Cards:** Comentários analisados (`1.248`), Sentimento positivo (`62%`), Sentimento negativo (`21%`) e Execuções concluídas (`8`).
   - **Distribuição de Sentimentos:** Barras proporcionais de sentimentos positivo, neutro e negativo.
   - **Temas Recorrentes:** Nuvem de chips/tags e banner de alerta inteligente de sentimento negativo sobre preço.
   - **Criar Modelo de Análise:** Formulário para configuração de termos, tipo de vídeo e filtros de corte.
   - **Modelos Cadastrados:** Lista interativa com contagem de vídeos e badges de status (*Ativo*, *Pendente*).

---

## 💻 Como Executar o Projeto

Você tem duas formas muito simples de rodar a aplicação:

### Opção 1: Inicialização Automática (Recomendada)
O projeto conta com scripts que **verificam se o Node.js está instalado**, instalam as dependências (`npm install`) caso necessário e sobem o front-end automaticamente:

- **No Windows (PowerShell):**
  ```powershell
  ./start.ps1
  ```
- **No Windows (Dois cliques / Prompt de Comando):**
  Basta dar um duplo-clique no arquivo `start.bat`.

- **No Linux / macOS:**
  ```bash
  chmod +x start.sh
  ./start.sh
  ```

---

### Opção 2: Manual via Terminal
1. Instalar as dependências (caso ainda não estejam instaladas):
   ```bash
   npm install
   ```

2. Iniciar o servidor de desenvolvimento:
   ```bash
   npm start
   ```

3. Acesse no navegador:
   ```
   http://localhost:4200
   ```
