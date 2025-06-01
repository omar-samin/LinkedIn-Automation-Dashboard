import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { mockDashboardData } from '../data/mockData';
import { Post } from '../types';

const Analytics: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<'impressions' | 'engagements'>('impressions');
  const { posts } = mockDashboardData;

  const chartData = posts.map(post => ({
    date: post.publishedAt,
    impressions: post.metrics.impressions,
    engagements: post.metrics.likes + post.metrics.comments + post.metrics.shares,
    clicks: post.metrics.clicks
  }));

  const getTopPosts = (metric: keyof Post['metrics']): Post[] => {
    return [...posts]
      .sort((a, b) => b.metrics[metric] - a.metrics[metric])
      .slice(0, 5);
  };

  const getEngagementBreakdown = () => {
    return posts.reduce((acc, post) => {
      acc.likes += post.metrics.likes;
      acc.comments += post.metrics.comments;
      acc.shares += post.metrics.shares;
      return acc;
    }, { likes: 0, comments: 0, shares: 0 });
  };

  const topPosts = getTopPosts(selectedMetric === 'impressions' ? 'impressions' : 'likes');
  const engagementData = getEngagementBreakdown();
  const engagementChartData = [
    { type: 'Likes', value: engagementData.likes },
    { type: 'Comments', value: engagementData.comments },
    { type: 'Shares', value: engagementData.shares },
  ];

  return (
    <div className="p-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Analytics Overview</h1>
        <p className="text-slate-600">Detailed insights into your LinkedIn performance</p>
      </div>

      <div className="card mb-6">
        <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="impressions" stroke="#0A66C2" />
              <Line type="monotone" dataKey="engagements" stroke="#10B981" />
              <Line type="monotone" dataKey="clicks" stroke="#F59E0B" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Top Performing Posts</h2>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value as 'impressions' | 'engagements')}
              className="border rounded-lg px-3 py-1"
            >
              <option value="impressions">By Impressions</option>
              <option value="engagements">By Engagements</option>
            </select>
          </div>
          <div className="space-y-4">
            {topPosts.map((post, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <p className="text-sm line-clamp-2 mb-2">{post.content}</p>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>👁️ {post.metrics.impressions.toLocaleString()}</span>
                  <span>❤️ {post.metrics.likes.toLocaleString()}</span>
                  <span>💬 {post.metrics.comments.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Engagement Breakdown</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#0A66C2" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;