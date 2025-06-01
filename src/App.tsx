import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Analytics from './pages/Analytics';
import ContentCalendar from './pages/ContentCalendar';
import MediaLibrary from './pages/MediaLibrary';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import { mockDashboardData } from './data/mockData';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-50">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard data={mockDashboardData} />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/calendar" element={<ContentCalendar />} />
              <Route path="/media" element={<MediaLibrary />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/\" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App