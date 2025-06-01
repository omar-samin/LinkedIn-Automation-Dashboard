import React from 'react';
import { Download, Mail } from 'lucide-react';
import { mockDashboardData } from '../data/mockData';

const Reports: React.FC = () => {
  const { weeklyReports } = mockDashboardData;

  return (
    <div className="p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Reports</h1>
          <p className="text-slate-600">View and export your LinkedIn performance reports</p>
        </div>
        <div className="flex space-x-2">
          <button className="btn btn-secondary flex items-center">
            <Mail size={20} className="mr-2" />
            Email Report
          </button>
          <button className="btn btn-primary flex items-center">
            <Download size={20} className="mr-2" />
            Export Report
          </button>
        </div>
      </div>

      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Weekly Reports</h2>
        <div className="space-y-4">
          {weeklyReports.map((report, index) => (
            <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{report.week}</h3>
                <button className="btn btn-secondary text-sm">View Details</button>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <p className="text-sm text-slate-500">Posts</p>
                  <p className="font-semibold">{report.totalPosts}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Impressions</p>
                  <p className="font-semibold">{report.totalImpressions.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Engagement Rate</p>
                  <p className="font-semibold">{report.engagementRate}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};