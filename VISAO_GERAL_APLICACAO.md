# 📊 Documentação Geral do Projeto: EMI YouTube Analytics

> **Trabalho de Conclusão de Curso (TCC)**  
> **Título**: EMI YouTube Analytics — Análise automatizada de comentários com IA  
> **Instituição**: Universidade Paulista - UNIP (2026)  
> **Curso**: Bacharelado em Ciência da Computação  

---

## 🎯 1. Visão Geral e Contexto

O **EMI YouTube Analytics** é uma plataforma web voltada à coleta, ao processamento e à análise automatizada de comentários em vídeos e campanhas publicitárias veiculadas no YouTube. 

### O Problema
Pequenas e Médias Empresas (PMEs) brasileiras investem cada vez mais em anúncios digitais, porém realizam o monitoramento da repercussão de seus vídeos de forma manual ou com métricas superficiais (apenas likes e visualizações). As soluções corporativas existentes no mercado (como Brandwatch, Talkwalker e Hootsuite):
1. Possuem custos proibitivos (superiores a R$ 5.000 mensais).
2. Focam predominantemente no idioma inglês ou utilizam dicionários léxicos ultrapassados que não interpretam gírias, sarcasmo, ironias e o português brasileiro coloquial.
3. Exigem, em muitos casos, credenciais de administrador do canal, inviabilizando a análise competitiva de concorrentes ou influenciadores parceiros.

### A Solução
O **EMI YouTube Analytics** democratiza o *Social Listening* e a inteligência de mercado para PMEs através de:
- **Entrada simples via URL / Link do Vídeo**: Análise a partir do identificador público do vídeo, sem necessidade de login administrativo no YouTube.
- **Integração com a YouTube Data API**: Coleta estruturada de metadados (título, canal, visualizações, curtidas e comentários públicos).
- **Inteligência Artificial Generativa (Google Gemini API)**: Processamento de linguagem natural (PLN) avançado para:
  - Classificação de sentimento (*Positivo*, *Neutro*, *Negativo*).
  - Identificação de temas recorrentes (*Preço*, *Qualidade*, *Atendimento*, *Propaganda*, *Produto*).
  - Justificativa transparente para cada rótulo atribuído.
  - Síntese executiva do anúncio e geração de recomendações acionáveis para marketing e vendas.

---

## 🏗️ 2. Arquitetura Técnica do Front-end

A camada de interface foi estruturada no framework **Angular 21** seguindo os padrões mais modernos da indústria:

```
Emi_front_end/
├── src/
│   ├── app/
│   │   ├── core/                      # Camada de Negócio e Serviços
│   │   │   ├── models/                # Interfaces TypeScript tipadas (AnalysisModel, VideoMetadata, etc.)
│   │   │   └── services/              # AuthService e AnalysisService (com Signals reativos)
│   │   ├── layouts/                   # Estruturas de Casca da Aplicação
│   │   │   └── main-layout/           # Sidebar lateral escura (#12161B) + Topbar + Content Area
│   │   ├── shared/                    # Design System Atômico Reutilizável
│   │   │   └── components/
│   │   │       ├── button/            # emi-button (primário, dark, outline, estados de loading)
│   │   │       ├── input/             # emi-input (ícones prefixados, alternância de senha)
│   │   │       ├── card/              # emi-card (containers com sombras suaves e elevações)
│   │   │       ├── badge/             # emi-badge (status Ativo, Pendente, etc.)
│   │   │       ├── stat-card/         # emi-stat-card (cards dos 4 KPIs com tendências)
│   │   │       ├── sentiment-bar/     # emi-sentiment-bar (barras proporcionais de sentimentos)
│   │   │       ├── alert-banner/      # emi-alert-banner (avisos inteligentes da IA)
│   │   │       └── icon/              # emi-icon (17+ ícones vetoriais SVG inline ultraleves)
│   │   ├── features/                  # Módulos Funcionais
│   │   │   ├── auth/login/            # Tela de Login (Figura 7 do TCC)
│   │   │   ├── dashboard/home/        # Dashboard Principal (Figura 8 do TCC)
│   │   │   ├── analysis/              # Nova Seção: Análise Detalhada com IA
│   │   │   ├── models/                # Listagem e gestão de modelos
│   │   │   ├── executions/            # Histórico do pipeline de execuções
│   │   │   └── reports/               # Relatórios executivos e exportação
│   │   ├── app.routes.ts              # Mapeamento de rotas da aplicação
│   │   └── app.config.ts              # Configuração global de providers
│   ├── styles/
│   │   ├── _tokens.scss               # Design Tokens (paleta de cores, tipografia, sombras)
│   │   └── styles.scss                # Reset e estilos globais
├── start.ps1                          # Script de inicialização automática para Windows (PowerShell)
├── start.bat                          # Script de inicialização rápida com dois cliques (Windows)
├── start.sh                           # Script de inicialização para Linux / macOS
├── MANUAL_EXECUCAO_LOCAL.md           # Guia de instalação e testes locais
└── package.json                       # Dependências e scripts de build
```

---

## 🎨 3. Design System (Tokens e Identidade Visual)

Inspirado nas diretrizes do YouTube e na identidade visual documentada no TCC:
- **Cor Primária**: Vermelho YouTube/EMI (`#E50914`), transmitindo energia e foco no ambiente de vídeo.
- **Sidebar Escura**: `#12161B`, garantindo contraste nítido, sobriedade profissional e legibilidade prolongada.
- **Superfícies**: Fundo geral neutro suave (`#F4F6F8`) com cards em branco puro (`#FFFFFF`) e bordas delicadas (`#E2E8F0`).
- **Semântica de Sentimentos**:
  - *Positivo / Elogios*: `#10B981` (Verde Esmeralda)
  - *Neutro / Informativo*: `#F59E0B` (Âmbar)
  - *Negativo / Objeções*: `#EF4444` (Vermelho)
- **Tipografia**: Família moderna sem serifa (*Plus Jakarta Sans* e *Inter*).

---

## 🖥️ 4. Telas e Funcionalidades Implementadas

### A. Tela de Login (`/login`) — *Figura 7 do TCC*
- Card centralizado com elevação e gradiente de fundo sutil.
- Emblema vermelho com ícone de reprodução e logotipo **EMI YouTube Analytics**.
- Subtítulo acadêmico: *Análise automatizada de comentários com IA*.
- Campos reativos de **E-mail** e **Senha** (com alternador no ícone de olho para visualização segura).
- Validação automática de campos obrigatórios e botão com animação de carregamento que redireciona ao Dashboard.

---

### B. Dashboard de Análise (`/dashboard`) — *Figura 8 do TCC*
1. **Sidebar Lateral Escura**: Logotipo EMI, identificador de produto (*YouTube Social Listening*), links ativos de navegação, avatar do usuário autenticado e botão de encerramento de sessão.
2. **Header Principal**: Título *Dashboard de Análise*, descrição contextual e botão de ação rápida `+ Novo Modelo`.
3. **4 KPI Cards Métricos**:
   - *Comentários analisados*: `1.248`
   - *Sentimento positivo*: `62%` (com seta verde de tendência ascendente)
   - *Sentimento negativo*: `21%` (com seta vermelha de tendência de atenção)
   - *Execuções concluídas*: `8` (com selo azul de verificação)
4. **Painel Central**:
   - *Distribuição de Sentimentos*: Barras horizontais dinâmicas para Positivo (62%), Neutro (17%) e Negativo (21%).
   - *Temas Recorrentes*: Nuvem de tags interativas (*Preço*, *Qualidade*, *Atendimento*, *Propaganda*, *Produto*) e o banner de alerta em destaque: `⚠️ Atenção: Comentários negativos sobre preço`.
5. **Painel Inferior**:
   - *Criar Modelo de Análise*: Entrada principal para a **URL / Link do Vídeo no YouTube**, botão de busca com pré-visualização instantânea da thumbnail e estatísticas da API, filtros adicionais e botão de disparo da análise.
   - *Modelos Cadastrados*: Lista reativa atualizada em tempo real via **Angular Signals**, com thumbnail, canal, quantidade de vídeos/comentários e botão direto para a análise aprofundada da IA.

---

### C. Seção de Análise Detalhada com IA (`/analise/:id`)
Página de inteligência analítica que aprofunda os dados daquele vídeo específico:
1. **Banner do Vídeo (YouTube Data API)**:
   - Thumbnail em alta resolução com badge de reprodução.
   - Nome do canal criador, título completo da publicação e link direto para o vídeo oficial.
   - Indicadores consolidados de Visualizações, Curtidas, Comentários Coletados e Data de Postagem.
2. **Entendimento do Vídeo & Campanha (Gemini)**:
   - Resumo executivo do conteúdo publicitário.
   - Identificação do objetivo da campanha (ex: conversão, pré-venda, reconhecimento).
   - Tom da narrativa (inovador, enérgico, aspiracional) e público-alvo detectado.
3. **Diagnóstico das Reações do Público**:
   - Clima emocional geral da audiência.
   - Cartões verdes com os **Principais Elogios** do público.
   - Cartões vermelhos com as **Dores e Objeções Mais Citadas** (ex: percepção de preço alto, dúvidas sobre entregas).
4. **Insights Acionáveis para a Empresa**:
   - Recomendações estratégicas e práticas numeradas orientando a tomada de decisão da equipe de marketing (ex: reforçar campanhas de trade-in/parcelamento, criar vídeos curtos de provas reais de câmera, etc.).
5. **Feed de Auditoria dos Comentários**:
   - Filtros dinâmicos por polaridade (*Todos*, *Positivos*, *Neutros*, *Negativos*).
   - Card individual de cada comentário contendo autor, tempo decorrido, badge de sentimento, tema classificado e uma **Caixa de Justificativa da IA**, detalhando o raciocínio semântico que levou o Gemini àquela classificação.

---

### D. Módulos Complementares de Navegação
- **Modelos (`/modelos`)**: Visão em cards de todos os modelos de monitoramento cadastrados.
- **Execuções (`/execucoes`)**: Log do pipeline de coleta e processamento de comentários.
- **Relatórios (`/relatorios`)**: Painel de síntese e simulação de exportação de relatórios gerenciais em PDF.

---

## 🔮 5. Próximos Passos (Roadmap de Continuidade)

Conforme documentado nas etapas metodológicas do TCC:
1. **Conexão com o Back-end**: Substituir os serviços mockados por chamadas HTTP REST (`HttpClient`) apontando para a API em Node.js / Python FastAPI.
2. **Integração Real de Credenciais**: Configuração das chaves de API (`YOUTUBE_API_KEY` e `GEMINI_API_KEY`) no back-end para consumo em tempo real.
3. **Persistência de Dados**: Integração com o banco de dados PostgreSQL estruturado (Tabelas de Usuários, Modelos, Execuções, Vídeos, Comentários e Análise de Sentimento).
4. **Hospedagem em Nuvem**: Deploy do front-end (Vercel ou AWS S3/CloudFront) e do back-end em container/instância gerenciada (Render, Railway ou AWS EC2).

