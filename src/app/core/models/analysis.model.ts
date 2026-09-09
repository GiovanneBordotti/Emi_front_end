export type ModelStatus = 'Ativo' | 'Pendente' | 'Concluído' | 'Processando' | 'Erro';
export type SentimentType = 'Positivo' | 'Neutro' | 'Negativo';

export interface VideoMetadata {
  videoId: string;
  videoUrl: string;
  title: string;
  channelTitle: string;
  thumbnailUrl: string;
  publishedAt: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
}

export interface CommentItem {
  id: string;
  author: string;
  authorAvatar?: string;
  text: string;
  publishedAt: string;
  sentiment: SentimentType;
  theme: string;
  aiJustification: string;
  likes: number;
}

export interface VideoUnderstanding {
  summary: string;
  campaignGoal: string;
  detectedTone: string;
  targetAudience: string;
}

export interface AudienceReactions {
  generalTone: string;
  positiveHighlights: string[];
  negativeObjections: string[];
}

export interface AiDetailedAnalysis {
  videoUnderstanding: VideoUnderstanding;
  audienceReactions: AudienceReactions;
  actionableInsights: string[];
  comments: CommentItem[];
}

export interface AnalysisModel {
  id: string;
  name: string;
  searchTerm: string;
  videoUrl?: string;
  videoType: string;
  minViews: number;
  maxVideos: number;
  excludedWords?: string;
  excludedChannels?: string;
  videoCount: number;
  status: ModelStatus;
  createdAt: Date;
  videoMetadata?: VideoMetadata;
  detailedAnalysis?: AiDetailedAnalysis;
}

export interface SentimentDistribution {
  positive: number;
  neutral: number;
  negative: number;
}

export interface DashboardMetrics {
  totalAnalyzedComments: number;
  positivePercent: number;
  negativePercent: number;
  completedExecutions: number;
  sentimentDistribution: SentimentDistribution;
  recurringTopics: string[];
  alert?: {
    type: 'warning' | 'danger' | 'info';
    message: string;
  };
}
