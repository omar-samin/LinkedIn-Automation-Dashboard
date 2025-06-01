import React from 'react';
import { BarChart3, Users, Zap, Activity } from 'lucide-react';
import MetricCard from './MetricCard';
import { DashboardData } from '../types';

interface DashboardHeaderProps {
  data: DashboardData;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ data }) => {
  const { totals } = data;
  
  // Format numbers with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">LinkedIn Automation Dashboard</h1>
          <p className="text-slate-500">Overview of your automated LinkedIn activity</p>
        </div>
        
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="btn btn-secondary">
            Export Data
          </button>
          <button className="btn btn-primary">
            Create Post
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <MetricCard 
          title="Total Posts" 
          value={totals.posts}
          change={8}
          icon={<BarChart3 className="h-6 w-6 text-linkedin-primary" />}
        />
        <MetricCard 
          title="Total Impressions" 
          value={totals.impressions}
          change={12}
          icon={<Users className="h-6 w-6 text-linkedin-primary" />}
          formatter={formatNumber}
        />
        <MetricCard 
          title="Total Engagements" 
          value={totals.engagements}
          change={-3}
          icon={<Activity className="h-6 w-6 text-linkedin-primary" />}
          formatter={formatNumber}
        />
        <MetricCard 
          title="Avg. Engagement Rate" 
          value={totals.averageEngagementRate}
          change={5}
          icon={<Zap className="h-6 w-6 text-linkedin-primary" />}
          formatter={(val) => `${val}%`}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;