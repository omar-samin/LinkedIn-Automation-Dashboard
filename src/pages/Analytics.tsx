import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockDashboardData } from '../data/mockData';

const Analytics: React.FC = () => {
  const data = mockDashboardData.posts.map(post => ({
    date: post.publishedAt,
    impressions: post.metrics.impressions,
    engagements: post.metrics.likes + post.metrics.comments + post.metrics.shares,
    clicks: post.metrics.clicks
  }));

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
            <LineChart data={data}>
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
          <h2 className="text-lg font-semibold mb-4">Top Performing Posts</h2>
          {/* Add top posts content */}
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Engagement Breakdown</h2>
          {/* Add engagement breakdown content */}
        </div>
      </div>
    </div>
  );
};

export default Analytics