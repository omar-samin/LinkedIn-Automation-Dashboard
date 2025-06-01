import React, { useState } from 'react';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';
import { mockDashboardData } from '../data/mockData';
import CreatePostModal from '../components/CreatePostModal';
import { format, parseISO } from 'date-fns';

type ViewMode = 'month' | 'week' | 'list';

const ContentCalendar: React.FC = () => {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [editingPost, setEditingPost] = useState<string | null>(null);
  const { upcomingPosts } = mockDashboardData;

  const handleCreatePost = (postData: any) => {
    console.log('New post data:', postData);
    alert('Post scheduled successfully!');
    setIsCreatePostModalOpen(false);
  };

  const handleEditPost = (postId: string) => {
    setEditingPost(postId);
    // In a real app, you would fetch the post data and open the edit modal
    alert('Edit functionality would open a modal with the post data');
  };

  const renderPosts = () => {
    switch (viewMode) {
      case 'month':
        return (
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 31 }, (_, i) => (
              <div key={i} className="border rounded-lg p-2 min-h-[100px]">
                <div className="text-sm font-medium mb-2">{i + 1}</div>
                {upcomingPosts
                  .filter(post => new Date(post.scheduledFor).getDate() === i + 1)
                  .map(post => (
                    <div key={post.id} className="text-xs p-1 bg-linkedin-light rounded">
                      {post.content.substring(0, 20)}...
                    </div>
                  ))}
              </div>
            ))}
          </div>
        );
      case 'week':
        return (
          <div className="space-y-4">
            {Array.from({ length: 7 }, (_, i) => (
              <div key={i} className="flex border rounded-lg p-4">
                <div className="w-24 font-medium">
                  {format(new Date().setDate(new Date().getDate() + i), 'EEE, MMM d')}
                </div>
                <div className="flex-1">
                  {upcomingPosts
                    .filter(post => {
                      const postDate = new Date(post.scheduledFor);
                      const today = new Date();
                      return postDate.getDate() === today.getDate() + i;
                    })
                    .map(post => (
                      <div key={post.id} className="p-2 bg-linkedin-light rounded mb-2">
                        {post.content}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="space-y-4">
            {upcomingPosts.map((post) => (
              <div key={post.id} className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <CalendarIcon size={20} className="text-linkedin-primary mr-4" />
                <div className="flex-1">
                  <p className="font-medium">{post.content}</p>
                  <p className="text-sm text-slate-500 mt-1">
                    {format(parseISO(post.scheduledFor), 'MMM d, h:mm a')}
                  </p>
                </div>
                <button 
                  className="btn btn-secondary"
                  onClick={() => handleEditPost(post.id)}
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Content Calendar</h1>
          <p className="text-slate-600">Schedule and manage your LinkedIn posts</p>
        </div>
        <button 
          className="btn btn-primary flex items-center"
          onClick={() => setIsCreatePostModalOpen(true)}
        >
          <Plus size={20} className="mr-2" />
          New Post
        </button>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Upcoming Posts</h2>
          <div className="flex space-x-2">
            <button 
              className={`btn ${viewMode === 'month' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setViewMode('month')}
            >
              Month
            </button>
            <button 
              className={`btn ${viewMode === 'week' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setViewMode('week')}
            >
              Week
            </button>
            <button 
              className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setViewMode('list')}
            >
              List
            </button>
          </div>
        </div>

        {renderPosts()}
      </div>

      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={() => setIsCreatePostModalOpen(false)}
        onSubmit={handleCreatePost}
      />
    </div>
  );
};

export default ContentCalendar;