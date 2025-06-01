import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BarChart2, Calendar, Image, FileText, Settings, HelpCircle } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to }) => (
  <li>
    <NavLink 
      to={to}
      className={({ isActive }) => `
        flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
        ${isActive 
          ? 'bg-linkedin-light text-linkedin-primary font-medium' 
          : 'text-slate-600 hover:bg-gray-100'
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  </li>
);

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:block w-64 border-r border-gray-200 h-[calc(100vh-4rem)]">
      <div className="py-6 px-4">
        <nav>
          <ul className="space-y-1">
            <NavItem 
              icon={<LayoutDashboard size={20} />} 
              label="Dashboard" 
              to="/"
            />
            <NavItem 
              icon={<BarChart2 size={20} />} 
              label="Analytics" 
              to="/analytics"
            />
            <NavItem 
              icon={<Calendar size={20} />} 
              label="Content Calendar" 
              to="/calendar"
            />
            <NavItem 
              icon={<Image size={20} />} 
              label="Media Library" 
              to="/media"
            />
            <NavItem 
              icon={<FileText size={20} />} 
              label="Reports" 
              to="/reports"
            />
          </ul>

          <div className="mt-8 pt-4 border-t border-gray-200">
            <ul className="space-y-1">
              <NavItem 
                icon={<Settings size={20} />} 
                label="Settings" 
                to="/settings"
              />
              <NavItem 
                icon={<HelpCircle size={20} />} 
                label="Help & Support" 
                to="/help"
              />
            </ul>
          </div>
        </nav>

        <div className="mt-12 pt-4 border-t border-gray-200">
          <div className="bg-linkedin-light rounded-lg p-4">
            <h3 className="font-medium text-linkedin-primary mb-2">Automation Status</h3>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-success-DEFAULT mr-2"></div>
              <p className="text-sm text-slate-700">Running smoothly</p>
            </div>
            <p className="text-xs text-slate-500 mt-2">Last check: 10 minutes ago</p>
          </div>
        </div>
      </div>
    </aside>
  );
};