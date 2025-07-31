import React from 'react';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/Dashboard';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex font-sans">
      <Sidebar />
      <DashboardPage />
    </div>
  );
}

export default App;