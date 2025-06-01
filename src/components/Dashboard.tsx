import React from 'react';
import DashboardHeader from './DashboardHeader';
import PerformanceChart from './PerformanceChart';
import RecentPosts from './RecentPosts';
import UpcomingSchedule from './UpcomingSchedule';
import WeeklyReportSummary from './WeeklyReportSummary';
import AutomationStatusCard from './AutomationStatusCard';
import { DashboardData } from '../types';

interface DashboardProps {
  data: DashboardData;
}

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  return (
    <div className="p-6 animate-fade-in">
      <DashboardHeader data={data} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <PerformanceChart posts={data.posts} />
        </div>
        <div>
          <AutomationStatusCard status={data.automationStatus} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentPosts posts={data.posts} />
        </div>
        <div className="space-y-6">
          <UpcomingSchedule upcomingPosts={data.upcomingPosts} />
          <WeeklyReportSummary reports={data.weeklyReports} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;