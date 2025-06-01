import React, { useState } from 'react';
import { Image, Upload } from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  name: string;
  uploadDate: string;
}

const MediaLibrary: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [mediaItems] = useState<MediaItem[]>([
    {
      id: '1',
      type: 'image',
      url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      name: 'Team Meeting',
      uploadDate: '2024-03-15'
    },
    {
      id: '2',
      type: 'image',
      url: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
      name: 'Product Launch',
      uploadDate: '2024-03-14'
    },
    // Add more mock media items as needed
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      alert(`File "${file.name}" uploaded successfully!`);
    }
  };

  const handleViewDetails = (item: MediaItem) => {
    alert(`
Media Details:
Name: ${item.name}
Type: ${item.type}
Upload Date: ${new Date(item.uploadDate).toLocaleDateString()}
    `);
  };

  return (
    <div className="p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Media Library</h1>
          <p className="text-slate-600">Manage your images and videos for LinkedIn posts</p>
        </div>
        <div>
          <input
            type="file"
            id="media-upload"
            className="hidden"
            accept="image/*,video/*"
            onChange={handleFileUpload}
          />
          <label
            htmlFor="media-upload"
            className="btn btn-primary flex items-center cursor-pointer"
          >
            <Upload size={20} className="mr-2" />
            Upload Media
          </label>
        </div>
      </div>

      <div className="card">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaItems.map((item) => (
            <div key={item.id} className="relative group">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button 
                  className="btn btn-secondary text-sm"
                  onClick={() => handleViewDetails(item)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaLibrary;