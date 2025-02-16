import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import io from 'socket.io-client';
import { ThemeProvider } from '@mui/material/styles';
import { medTheme } from './theme';
import './App.css'; // Import the CSS file

// Component imports (fixed case sensitivity)
import Heartbeat from './components/Heartbeat';
import SweatReport from './components/SweatReport'; // Fixed case
import Temperature from './components/Temperature';
import OxygenSaturation from './components/OxygenSaturation';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard'; // Ensure the case matches the file name

Chart.register(...registerables);

function App() {
  const [vitals, setVitals] = useState({});

  useEffect(() => {
    const socket = io('http://localhost:4000'); // Adjust the URL as needed

    socket.on('vitals', (data) => {
      setVitals(data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <ThemeProvider theme={medTheme}>
      <Router>
        <div className="app-container">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/heartbeat" component={Heartbeat} />
            <Route path="/sweat" component={SweatReport} />
            <Route path="/temperature" component={Temperature} />
            <Route path="/oxygen-saturation" component={OxygenSaturation} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
