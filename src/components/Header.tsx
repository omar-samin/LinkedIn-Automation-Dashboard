import React from 'react';
import { Linkedin, Menu, Bell, Settings } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Linkedin className="h-8 w-8 text-linkedin-primary" />
        <h1 className="text-xl font-semibold">LinkedIn Automation</h1>
      </div>
      
      <div className="md:hidden">
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Menu size={24} />
        </button>
      </div>
      
      <div className="hidden md:flex items-center space-x-4">
        <button className="relative p-2 rounded-lg hover:bg-gray-100">
          <Bell size={20} />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-linkedin-primary"></span>
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Settings size={20} />
        </button>
        <div className="h-8 w-8 bg-linkedin-primary text-white rounded-full flex items-center justify-center">
          <span className="font-medium text-sm">JD</span>
        </div>
      </div>
    </header>
  );
};

export default Header;