import React from 'react';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';
import { mockDashboardData } from '../data/mockData';

const ContentCalendar: React.FC = () => {
  const { upcomingPosts } = mockDashboardData;

  return (
    <div className="p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Content Calendar</h1>
          <p className="text-slate-600">Schedule and manage your LinkedIn posts</p>
        </div>
        <button className="btn btn-primary flex items-center">
          <Plus size={20} className="mr-2" />
          New Post
        </button>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Upcoming Posts</h2>
          <div className="flex space-x-2">
            <button className="btn btn-secondary">Month</button>
            <button className="btn btn-secondary">Week</button>
            <button className="btn btn-secondary">List</button>
          </div>
        </div>

        <div className="space-y-4">
          {upcomingPosts.map((post) => (
            <div key={post.id} className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
              <CalendarIcon size={20} className="text-linkedin-primary mr-4" />
              <div className="flex-1">
                <p className="font-medium">{post.content}</p>
                <p className="text-sm text-slate-500 mt-1">Scheduled for: {post.scheduledFor}</p>
              </div>
              <button className="btn btn-secondary">Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCalendar