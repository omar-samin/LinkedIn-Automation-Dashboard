import React from 'react';
import { Save } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="p-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Settings</h1>
        <p className="text-slate-600">Manage your automation preferences and account settings</p>
      </div>

      <div className="space-y-6">
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Automation Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Post Frequency
              </label>
              <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-linkedin-primary focus:ring focus:ring-linkedin-light">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Custom</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Best Time to Post
              </label>
              <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-linkedin-primary focus:ring focus:ring-linkedin-light">
                <option>Morning (9 AM - 11 AM)</option>
                <option>Afternoon (2 PM - 4 PM)</option>
                <option>Evening (7 PM - 9 PM)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-slate-500">Receive updates about your posts</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-linkedin-light rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-linkedin-primary"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary flex items-center">
            <Save size={20} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings