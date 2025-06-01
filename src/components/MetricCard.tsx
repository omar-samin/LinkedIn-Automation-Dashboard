import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: number | string;
  change?: number;
  icon: React.ReactNode;
  formatter?: (value: number | string) => string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  icon,
  formatter = (val) => val.toString()
}) => {
  const getChangeIndicator = () => {
    if (!change) return <Minus className="w-4 h-4 text-gray-400" />;
    
    if (change > 0) {
      return (
        <div className="flex items-center text-success-DEFAULT">
          <TrendingUp className="w-4 h-4 mr-1" />
          <span>{change}%</span>
        </div>
      );
    } 
    
    return (
      <div className="flex items-center text-error-DEFAULT">
        <TrendingDown className="w-4 h-4 mr-1" />
        <span>{Math.abs(change)}%</span>
      </div>
    );
  };

  return (
    <div className="card animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-linkedin-light">
          {icon}
        </div>
        <div>
          {getChangeIndicator()}
        </div>
      </div>
      <h3 className="text-sm font-medium text-slate-500 mb-1">{title}</h3>
      <div className="metric-value">{formatter(value)}</div>
    </div>
  );
};

export default MetricCard;