import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Post } from '../types';

interface PerformanceChartProps {
  posts: Post[];
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ posts }) => {
  // Process data for the chart
  const chartData = posts.map(post => ({
    date: post.publishedAt,
    impressions: post.metrics.impressions,
    engagements: post.metrics.likes + post.metrics.comments + post.metrics.shares,
    clicks: post.metrics.clicks
  })).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="card h-[350px]">
      <h2 className="text-lg font-semibold mb-4">Performance Trends</h2>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => {
              const date = new Date(value);
              return `${date.getMonth() + 1}/${date.getDate()}`;
            }}
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #f0f0f0', 
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}
            labelFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="impressions" 
            stroke="#0A66C2" 
            strokeWidth={2}
            dot={{ r: 3, fill: '#0A66C2' }}
            activeDot={{ r: 5 }}
          />
          <Line 
            type="monotone" 
            dataKey="engagements" 
            stroke="#10B981" 
            strokeWidth={2}
            dot={{ r: 3, fill: '#10B981' }}
            activeDot={{ r: 5 }}
          />
          <Line 
            type="monotone" 
            dataKey="clicks" 
            stroke="#F59E0B" 
            strokeWidth={2}
            dot={{ r: 3, fill: '#F59E0B' }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;