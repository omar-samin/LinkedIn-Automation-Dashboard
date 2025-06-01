import React from 'react';
import { Clock, Heart, MessageSquare, Share, Eye } from 'lucide-react';
import { Post } from '../types';
import { format, parseISO } from 'date-fns';

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  // Take only the 5 most recent posts
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5);

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Posts</h2>
        <button className="btn btn-secondary text-sm">View All</button>
      </div>
      <div className="space-y-6">
        {recentPosts.map(post => (
          <div key={post.id} className="border-b border-gray-100 pb-4 last:border-0 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {post.imageUrl ? (
                  <img 
                    src={post.imageUrl} 
                    alt="Post image" 
                    className="h-16 w-16 object-cover rounded-lg"
                  />
                ) : (
                  <div className="h-16 w-16 bg-linkedin-light rounded-lg flex items-center justify-center">
                    <span className="text-linkedin-primary text-xs">No image</span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 line-clamp-2 mb-2">
                  {post.content}
                </p>
                <div className="flex items-center text-xs text-slate-500">
                  <Clock size={14} className="mr-1" />
                  <span>
                    {format(parseISO(post.publishedAt), 'MMM d, yyyy')}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="flex items-center text-xs">
                <Eye size={14} className="mr-1 text-slate-400" />
                <span>{post.metrics.impressions.toLocaleString()}</span>
              </div>
              <div className="flex items-center text-xs">
                <Heart size={14} className="mr-1 text-slate-400" />
                <span>{post.metrics.likes.toLocaleString()}</span>
              </div>
              <div className="flex items-center text-xs">
                <MessageSquare size={14} className="mr-1 text-slate-400" />
                <span>{post.metrics.comments.toLocaleString()}</span>
              </div>
              <div className="flex items-center text-xs">
                <Share size={14} className="mr-1 text-slate-400" />
                <span>{post.metrics.shares.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;