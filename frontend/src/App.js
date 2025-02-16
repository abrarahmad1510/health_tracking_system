// src/App.js
import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import ProfileSidebar from './components/ProfileSidebar';
import RealTimeChart from './components/RealTimeChart';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div className="dashboard-container">
        <Navigation />
        <div className="main-content">
          <Dashboard />
          <RealTimeChart />
        </div>
        <ProfileSidebar />
      </div>
    </>
  );
};

export default App;

