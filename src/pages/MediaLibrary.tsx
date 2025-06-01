import React from 'react';
import { Image, Upload } from 'lucide-react';

const MediaLibrary: React.FC = () => {
  return (
    <div className="p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Media Library</h1>
          <p className="text-slate-600">Manage your images and videos for LinkedIn posts</p>
        </div>
        <button className="btn btn-primary flex items-center">
          <Upload size={20} className="mr-2" />
          Upload Media
        </button>
      </div>

      <div className="card">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square bg-linkedin-light rounded-lg flex items-center justify-center">
                <Image size={32} className="text-linkedin-primary" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="btn btn-secondary text-sm">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaLibrary