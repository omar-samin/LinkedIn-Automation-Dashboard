import React, { useState } from 'react';
import { AutomationStatus } from '../types';
import { CheckCircle, XCircle, Clock, RefreshCw } from 'lucide-react';
import { format, parseISO } from 'date-fns';

interface AutomationStatusCardProps {
  status: AutomationStatus;
}

const AutomationStatusCard: React.FC<AutomationStatusCardProps> = ({ status: initialStatus }) => {
  const [status, setStatus] = useState(initialStatus);
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setStatus({
        ...status,
        lastRun: new Date().toISOString(),
      });
      setIsLoading(false);
      alert('Status refreshed successfully!');
    }, 1000);
  };

  const handleStatusChange = () => {
    const newStatus = status.status === 'active' ? 'paused' : 'active';
    setStatus({
      ...status,
      status: newStatus,
    });
    alert(`Automation ${newStatus === 'active' ? 'resumed' : 'paused'} successfully!`);
  };

  const getStatusIndicator = () => {
    switch (status.status) {
      case 'active':
        return (
          <div className="flex items-center text-success-DEFAULT">
            <CheckCircle size={18} className="mr-1" />
            <span className="font-medium">Active</span>
          </div>
        );
      case 'paused':
        return (
          <div className="flex items-center text-warning-DEFAULT">
            <Clock size={18} className="mr-1" />
            <span className="font-medium">Paused</span>
          </div>
        );
      case 'error':
        return (
          <div className="flex items-center text-error-DEFAULT">
            <XCircle size={18} className="mr-1" />
            <span className="font-medium">Error</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`card border-l-4 ${
      status.status === 'active' ? 'border-l-success-DEFAULT' : 
      status.status === 'paused' ? 'border-l-warning-DEFAULT' : 
      'border-l-error-DEFAULT'
    }`}>
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold">Automation Status</h2>
        {getStatusIndicator()}
      </div>
      
      <div className="mt-4 space-y-3">
        <div>
          <p className="text-sm text-slate-500">Last run:</p>
          <p className="font-medium">
            {format(parseISO(status.lastRun), 'MMM d, yyyy h:mm a')}
          </p>
        </div>
        
        <div>
          <p className="text-sm text-slate-500">Next scheduled run:</p>
          <p className="font-medium">
            {format(parseISO(status.nextRun), 'MMM d, yyyy h:mm a')}
          </p>
        </div>
        
        {status.status === 'error' && status.errorMessage && (
          <div className="p-3 bg-error-light text-error-dark rounded-lg text-sm">
            {status.errorMessage}
          </div>
        )}
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <button 
          className={`btn btn-secondary flex items-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleRefresh}
          disabled={isLoading}
        >
          <RefreshCw size={16} className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh Status
        </button>
        
        {status.status === 'paused' ? (
          <button className="btn btn-primary" onClick={handleStatusChange}>Resume</button>
        ) : status.status === 'error' ? (
          <button className="btn btn-primary" onClick={handleStatusChange}>Retry</button>
        ) : (
          <button className="btn btn-secondary" onClick={handleStatusChange}>Pause</button>
        )}
      </div>
    </div>
  );
};

export default AutomationStatusCard;