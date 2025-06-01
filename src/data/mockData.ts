import { DashboardData, Post, UpcomingPost, WeeklyReport } from '../types';
import { addDays, subDays, format } from 'date-fns';

// Helper function to generate random metrics
const generateRandomMetrics = (base: number) => ({
  impressions: Math.floor(Math.random() * 1000) + base,
  likes: Math.floor(Math.random() * 50) + Math.floor(base / 20),
  comments: Math.floor(Math.random() * 20) + Math.floor(base / 40),
  shares: Math.floor(Math.random() * 10) + Math.floor(base / 80),
  clicks: Math.floor(Math.random() * 30) + Math.floor(base / 30),
});

// Generate mock posts
const generatePosts = (): Post[] => {
  const posts: Post[] = [];
  
  for (let i = 0; i < 10; i++) {
    const daysAgo = i * 3;
    const date = subDays(new Date(), daysAgo);
    const base = 1000 - (i * 100);
    
    posts.push({
      id: `post-${i}`,
      content: i % 2 === 0 
        ? `LinkedIn post about automation and workflow efficiency. #automation #productivity #n8n #${i}`
        : `Sharing insights about leveraging LinkedIn for professional growth and networking. #linkedin #professional #growth #${i}`,
      imageUrl: i % 3 === 0 ? `https://images.pexels.com/photos/${3000 + i * 111}/pexels-photo-${3000 + i * 111}.jpeg?auto=compress&cs=tinysrgb&w=600` : undefined,
      videoUrl: i % 5 === 0 ? `https://example.com/video-${i}.mp4` : undefined,
      publishedAt: format(date, 'yyyy-MM-dd'),
      status: 'published',
      metrics: generateRandomMetrics(base),
    });
  }
  
  return posts;
};

// Generate weekly reports
const generateWeeklyReports = (): WeeklyReport[] => {
  const reports: WeeklyReport[] = [];
  
  for (let i = 0; i < 4; i++) {
    const weekStart = subDays(new Date(), (i + 1) * 7);
    const totalImpressions = Math.floor(Math.random() * 5000) + 1000;
    const totalEngagements = Math.floor(Math.random() * 500) + 100;
    
    reports.push({
      week: `Week ${4 - i}: ${format(weekStart, 'MMM d')} - ${format(addDays(weekStart, 6), 'MMM d')}`,
      totalPosts: Math.floor(Math.random() * 3) + 2,
      totalImpressions,
      totalEngagements,
      engagementRate: parseFloat((totalEngagements / totalImpressions * 100).toFixed(1)),
    });
  }
  
  return reports;
};

// Generate upcoming posts
const generateUpcomingPosts = (): UpcomingPost[] => {
  const posts: UpcomingPost[] = [];
  const mediaTypes: Array<'image' | 'video' | 'document' | 'none'> = ['image', 'video', 'document', 'none'];
  
  for (let i = 0; i < 5; i++) {
    const daysAhead = i + 1;
    const date = addDays(new Date(), daysAhead);
    
    posts.push({
      id: `upcoming-${i}`,
      content: i % 2 === 0 
        ? `Scheduled post about LinkedIn automation strategies and best practices. #linkedin #automation #${i}`
        : `Future post sharing case studies of successful LinkedIn engagement campaigns. #casestudy #engagement #${i}`,
      mediaType: mediaTypes[i % 4],
      scheduledFor: format(date, 'yyyy-MM-dd HH:mm'),
    });
  }
  
  return posts;
};

// Create mock dashboard data
export const mockDashboardData: DashboardData = {
  posts: generatePosts(),
  weeklyReports: generateWeeklyReports(),
  upcomingPosts: generateUpcomingPosts(),
  automationStatus: {
    lastRun: format(subDays(new Date(), 1), 'yyyy-MM-dd HH:mm'),
    nextRun: format(addDays(new Date(), 1), 'yyyy-MM-dd HH:mm'),
    status: 'active',
  },
  totals: {
    posts: 32,
    impressions: 45678,
    engagements: 3456,
    averageEngagementRate: 7.6,
  },
};