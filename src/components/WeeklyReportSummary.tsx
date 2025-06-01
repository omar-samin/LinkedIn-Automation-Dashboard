import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WeeklyReport } from '../types';
import { ArrowUpRight, Download, Mail } from 'lucide-react';

interface WeeklyReportSummaryProps {
  reports: WeeklyReport[];
}

const WeeklyReportSummary: React.FC<WeeklyReportSummaryProps> = ({ reports }) => {
  // Sort reports chronologically
  const sortedReports = [...reports].sort((a, b) => {
    const weekA = parseInt(a.week.split(':')[0].replace('Week ', ''));
    const weekB = parseInt(b.week.split(':')[0].replace('Week ', ''));
    return weekA - weekB;
  });

  // Calculate improvement from previous week for the most recent report
  const latestReport = sortedReports[sortedReports.length - 1];
  const previousReport = sortedReports[sortedReports.length - 2];
  
  const engagementImprovement = previousReport 
    ? ((latestReport.engagementRate - previousReport.engagementRate) / previousReport.engagementRate * 100).toFixed(1)
    : null;

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Weekly Report Summary</h2>
        <div className="flex space-x-2">
          <button className="p-2 rounded hover:bg-gray-100 transition-colors" title="Download Report">
            <Download size={18} />
          </button>
          <button className="p-2 rounded hover:bg-gray-100 transition-colors" title="Email Report">
            <Mail size={18} />
          </button>
        </div>
      </div>

      {latestReport && (
        <div className="mb-6 p-4 bg-linkedin-light rounded-lg animate-fade-in">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-linkedin-dark">{latestReport.week}</h3>
              <p className="text-sm text-slate-600 mt-1">
                {latestReport.totalPosts} posts • {latestReport.totalImpressions.toLocaleString()} impressions
              </p>
            </div>
            {engagementImprovement && parseFloat(engagementImprovement) > 0 && (
              <div className="bg-success-light text-success-dark text-sm font-medium px-2 py-1 rounded-full flex items-center">
                <ArrowUpRight size={16} className="mr-1" /> {engagementImprovement}%
              </div>
            )}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-500">Engagement Rate</p>
              <p className="text-xl font-semibold text-linkedin-dark">{latestReport.engagementRate}%</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Total Engagements</p>
              <p className="text-xl font-semibold text-linkedin-dark">{latestReport.totalEngagements.toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sortedReports}
            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="week" 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => value.split(':')[0]}
              axisLine={false}
            />
            <YAxis 
              yAxisId="left"
              orientation="left"
              tickFormatter={(value) => `${value}%`}
              domain={[0, 'dataMax + 2']}
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #f0f0f0', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}
            />
            <Bar 
              yAxisId="left"
              dataKey="engagementRate" 
              fill="#0A66C2" 
              radius={[4, 4, 0, 0]}
              name="Engagement Rate (%)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyReportSummary;