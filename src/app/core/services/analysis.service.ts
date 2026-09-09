import { Injectable, signal } from '@angular/core';
import {
  AnalysisModel,
  DashboardMetrics,
  VideoMetadata,
  AiDetailedAnalysis,
} from '../models/analysis.model';

@Injectable({
  providedIn: 'root',
})
export class AnalysisService {
  // Modelo inicial 1 com metadados do YouTube Data API e Análise do Gemini
  private readonly defaultDetailedAnalysis1: AiDetailedAnalysis = {
    videoUnderstanding: {
      summary:
        'Anúncio publicitário de lançamento do novo smartphone topo de linha, destacando o sensor fotográfico noturno, acabamento em titânio e recursos de IA generativa integrados ao sistema.',
      campaignGoal:
        'Posicionamento de marca no mercado premium e conversão direta para a pré-venda com brindes.',
      detectedTone: 'Inovador, aspiracional e dinâmico.',
      targetAudience: 'Entusiastas de fotografia móvel, criadores de conteúdo e profissionais multitarefa.',
    },
    audienceReactions: {
      generalTone:
        'Repercussão predominantemente positiva sobre as especificações de câmera e acabamento, com objeção recorrente em relação ao preço sugerido.',
      positiveHighlights: [
        'Nitidez impressionante das fotos em baixa luminosidade',
        'Design refinado e redução de peso com bordas de titânio',
        'Trilha sonora e edição visual da campanha publicitária',
      ],
      negativeObjections: [
        'Preço de lançamento considerado elevado para o consumidor médio',
        'Retirada de acessórios da caixa (carregador de tomada)',
      ],
    },
    actionableInsights: [
      'Reforçar campanhas de mídia paga destacando programas de troca (trade-in) e parcelamento em 24x sem juros para quebrar a barreira do preço.',
      'Produzir vídeos curtos (Shorts) focados em testes reais de câmera comparativa para comprovar a superioridade técnica citada nos comentários.',
      'Alinhar o time de Social Media para esclarecer dúvidas de suporte técnico e disponibilidade em lojas físicas com respostas padronizadas ágeis.',
    ],
    comments: [
      {
        id: 'c-1',
        author: 'Carlos Eduardo',
        text: 'A evolução desse sensor noturno ficou surreal! Fazia tempo que um comercial não me convencia tanto a trocar de aparelho.',
        publishedAt: 'Há 2 horas',
        sentiment: 'Positivo',
        theme: 'Qualidade',
        aiJustification:
          'Elogio explícito à capacidade técnica da câmera e à eficácia persuasiva da propaganda.',
        likes: 42,
      },
      {
        id: 'c-2',
        author: 'Mariana Lima',
        text: 'Lindo demais, porém 8 mil reais não dá. O produto parece excelente mas o preço no Brasil é surreal de caro.',
        publishedAt: 'Há 4 horas',
        sentiment: 'Negativo',
        theme: 'Preço',
        aiJustification:
          'Expressão de frustração com o custo de aquisição, configurando objeção financeira primária.',
        likes: 128,
      },
      {
        id: 'c-3',
        author: 'Felipe Santos',
        text: 'Alguém que comprou na pré-venda sabe qual o prazo médio de entrega para São Paulo?',
        publishedAt: 'Há 5 horas',
        sentiment: 'Neutro',
        theme: 'Atendimento',
        aiJustification:
          'Consulta informativa sobre logística e prazos, sem juízo de valor emocional direto.',
        likes: 3,
      },
      {
        id: 'c-4',
        author: 'Beatriz Rocha',
        text: 'Parabéns à equipe de marketing, essa propaganda prendeu minha atenção do início ao fim! Trilha sonora nota 10.',
        publishedAt: 'Há 6 horas',
        sentiment: 'Positivo',
        theme: 'Propaganda',
        aiJustification:
          'Aprovação da estética do anúncio e experiência sensorial proporcionada pelo vídeo.',
        likes: 19,
      },
      {
        id: 'c-5',
        author: 'Rafael Mendes',
        text: 'Cobrar esse valor todo e não mandar nem o carregador na caixa é um absurdo tremendo.',
        publishedAt: 'Há 8 horas',
        sentiment: 'Negativo',
        theme: 'Produto',
        aiJustification:
          'Descontentamento com a política de periféricos e integridade do pacote do produto.',
        likes: 87,
      },
    ],
  };

  private readonly _models = signal<AnalysisModel[]>([
    {
      id: 'mod-1',
      name: 'campanha smartphone',
      searchTerm: 'smartphone lançamento 2026 propaganda',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      videoType: 'Propaganda / Campanha',
      minViews: 50000,
      maxVideos: 15,
      videoCount: 15,
      status: 'Ativo',
      createdAt: new Date(),
      videoMetadata: {
        videoId: 'dQw4w9WgXcQ',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: 'Novo Galaxy Ultra 2026 - O Futuro nas Suas Mãos (Comercial Oficial)',
        channelTitle: 'Tech Brasil Oficial',
        thumbnailUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80',
        publishedAt: '05/09/2026',
        viewCount: 1450200,
        likeCount: 84200,
        commentCount: 1248,
      },
      detailedAnalysis: this.defaultDetailedAnalysis1,
    },
    {
      id: 'mod-2',
      name: 'vale-refeição',
      searchTerm: 'benefício vale refeição corporativo',
      videoUrl: 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
      videoType: 'Institucional',
      minViews: 20000,
      maxVideos: 10,
      videoCount: 8,
      status: 'Pendente',
      createdAt: new Date(Date.now() - 86400000),
      videoMetadata: {
        videoId: 'kXYiU_JCYtU',
        videoUrl: 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
        title: 'Como o Benefício Flexível Transforma a Retenção de Talentos',
        channelTitle: 'RH Estratégico & Gestão',
        thumbnailUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80',
        publishedAt: '08/09/2026',
        viewCount: 68400,
        likeCount: 4200,
        commentCount: 384,
      },
      detailedAnalysis: {
        videoUnderstanding: {
          summary: 'Vídeo institucional voltado a decisores de RH com foco em retenção de talentos através de vale-refeição flexível.',
          campaignGoal: 'Geração de leads B2B corporativos.',
          detectedTone: 'Profissional e acolhedor.',
          targetAudience: 'Gestores de Pessoas, CEOs de PMEs e analistas de benefícios.',
        },
        audienceReactions: {
          generalTone: 'Alto engajamento de colaboradores validando a importância da aceitação ampla nos restaurantes.',
          positiveHighlights: ['Aceitação em aplicativos de delivery', 'Facilidade de gestão via app'],
          negativeObjections: ['Taxas cobradas dos estabelecimentos comerciais parceiros'],
        },
        actionableInsights: [
          'Criar simulador de economia fiscal para gestores de RH no site de destino da campanha.',
          'Evidenciar depoimentos reais de PMEs para gerar prova social.',
        ],
        comments: [
          {
            id: 'c-201',
            author: 'Juliana Paiva',
            text: 'Ter liberdade de escolher onde gastar o vale faz toda a diferença na motivação da equipe.',
            publishedAt: 'Há 1 dia',
            sentiment: 'Positivo',
            theme: 'Qualidade',
            aiJustification: 'Reconhecimento positivo do impacto do benefício no bem-estar corporativo.',
            likes: 15,
          },
        ],
      },
    },
  ]);

  private readonly _metrics = signal<DashboardMetrics>({
    totalAnalyzedComments: 1248,
    positivePercent: 62,
    negativePercent: 21,
    completedExecutions: 8,
    sentimentDistribution: {
      positive: 62,
      neutral: 17,
      negative: 21,
    },
    recurringTopics: ['Preço', 'Qualidade', 'Atendimento', 'Propaganda', 'Produto'],
    alert: {
      type: 'warning',
      message: 'Atenção: Comentários negativos sobre preço',
    },
  });

  readonly models = this._models.asReadonly();
  readonly metrics = this._metrics.asReadonly();

  getModelById(id: string): AnalysisModel | undefined {
    return this._models().find((m) => m.id === id);
  }

  // Extrai o ID do vídeo do YouTube a partir de múltiplos formatos de URL
  extractVideoId(url: string): string {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : 'dQw4w9WgXcQ';
  }

  // Simulação de busca dos dados públicos via YouTube Data API
  fetchYouTubeVideoData(videoUrl: string): VideoMetadata {
    const videoId = this.extractVideoId(videoUrl);
    return {
      videoId,
      videoUrl,
      title: 'Campanha Publicitária do Vídeo Analisado (YouTube)',
      channelTitle: 'Canal Oficial da Marca',
      thumbnailUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80',
      publishedAt: '09/09/2026',
      viewCount: 185300,
      likeCount: 12400,
      commentCount: 450,
    };
  }

  addModel(
    modelData: Omit<AnalysisModel, 'id' | 'createdAt' | 'videoCount' | 'status'>
  ): AnalysisModel {
    const videoMeta = modelData.videoUrl
      ? this.fetchYouTubeVideoData(modelData.videoUrl)
      : undefined;

    const newModel: AnalysisModel = {
      ...modelData,
      id: `mod-${Date.now()}`,
      videoCount: videoMeta ? 1 : 1,
      videoMetadata: videoMeta,
      status: 'Ativo',
      createdAt: new Date(),
      detailedAnalysis: {
        videoUnderstanding: {
          summary: `Análise automatizada dos dados públicos do vídeo "${modelData.name}". Conteúdo com foco em engajamento e percepção da campanha publicitária.`,
          campaignGoal: 'Engajamento de público e fortalecimento de presença de marca.',
          detectedTone: 'Direto, promocional e envolvente.',
          targetAudience: 'Público ativo em redes sociais e consumidores potenciais da categoria.',
        },
        audienceReactions: {
          generalTone: 'Reações majoritariamente favoráveis à abordagem criativa.',
          positiveHighlights: ['Engajamento elevado', 'Comentários com validação do formato do anúncio'],
          negativeObjections: ['Dúvidas pontuais sobre custo e prazos'],
        },
        actionableInsights: [
          'Monitorar os picos de comentários nas primeiras 48h de veiculação.',
          'Interagir com os principais comentários com respostas bem humoradas e direcionamento para a landing page.',
        ],
        comments: [
          {
            id: `c-${Date.now()}-1`,
            author: 'Comentário da Coleta',
            text: 'Gostei muito da iniciativa dessa campanha, passou muita credibilidade!',
            publishedAt: 'Recente',
            sentiment: 'Positivo',
            theme: 'Propaganda',
            aiJustification: 'Validação da proposta e confiabilidade transmitida pelo conteúdo.',
            likes: 8,
          },
        ],
      },
    };

    this._models.update((prev) => [newModel, ...prev]);

    this._metrics.update((prev) => ({
      ...prev,
      totalAnalyzedComments: prev.totalAnalyzedComments + (videoMeta ? videoMeta.commentCount : 100),
      completedExecutions: prev.completedExecutions + 1,
    }));

    return newModel;
  }

  deleteModel(id: string): void {
    this._models.update((prev) => prev.filter((m) => m.id !== id));
  }
}
