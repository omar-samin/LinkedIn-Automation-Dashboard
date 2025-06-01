import React from 'react';
import { Calendar, Image, Video, FileText, Clock } from 'lucide-react';
import { UpcomingPost } from '../types';
import { format, parseISO } from 'date-fns';

interface UpcomingScheduleProps {
  upcomingPosts: UpcomingPost[];
}

const UpcomingSchedule: React.FC<UpcomingScheduleProps> = ({ upcomingPosts }) => {
  // Get media icon based on type
  const getMediaIcon = (type?: 'image' | 'video' | 'document' | 'none') => {
    switch (type) {
      case 'image':
        return <Image size={16} className="text-linkedin-primary" />;
      case 'video':
        return <Video size={16} className="text-linkedin-primary" />;
      case 'document':
        return <FileText size={16} className="text-linkedin-primary" />;
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Upcoming Schedule</h2>
        <button className="btn btn-secondary text-sm">Manage</button>
      </div>
      
      <div className="space-y-4">
        {upcomingPosts.map((post, index) => (
          <div 
            key={post.id} 
            className="flex items-center p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors duration-200 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="p-2 rounded-lg bg-linkedin-light mr-4">
              <Calendar size={20} className="text-linkedin-primary" />
            </div>
            
            <div className="flex-1">
              <p className="text-sm font-medium line-clamp-1">{post.content}</p>
              <div className="flex items-center mt-1 text-xs text-slate-500">
                <Clock size={14} className="mr-1" />
                <span>{format(parseISO(post.scheduledFor), 'MMM d, h:mm a')}</span>
                
                {post.mediaType && post.mediaType !== 'none' && (
                  <>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      {getMediaIcon(post.mediaType)}
                      <span className="ml-1 capitalize">{post.mediaType}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div>
              <button className="text-linkedin-primary hover:text-linkedin-dark p-1 rounded-full hover:bg-linkedin-light transition-colors">
                <FileText size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button className="btn btn-primary text-sm">
          + Schedule New Post
        </button>
      </div>
    </div>
  );
};

export default UpcomingSchedule;