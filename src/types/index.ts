export interface Post {
  id: string;
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  publishedAt: string;
  status: 'published' | 'scheduled' | 'draft';
  metrics: PostMetrics;
}

export interface PostMetrics {
  impressions: number;
  likes: number;
  comments: number;
  shares: number;
  clicks: number;
}

export interface WeeklyReport {
  week: string;
  totalPosts: number;
  totalImpressions: number;
  totalEngagements: number;
  engagementRate: number;
}

export interface UpcomingPost {
  id: string;
  content: string;
  mediaType?: 'image' | 'video' | 'document' | 'none';
  scheduledFor: string;
}

export interface AutomationStatus {
  lastRun: string;
  nextRun: string;
  status: 'active' | 'paused' | 'error';
  errorMessage?: string;
}

export interface DashboardData {
  posts: Post[];
  weeklyReports: WeeklyReport[];
  upcomingPosts: UpcomingPost[];
  automationStatus: AutomationStatus;
  totals: {
    posts: number;
    impressions: number;
    engagements: number;
    averageEngagementRate: number;
  };
}