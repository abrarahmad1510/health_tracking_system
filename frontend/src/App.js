import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

function App() {
  const [heartRate, setHeartRate] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [fallDetected, setFallDetected] = useState(false);

  useEffect(() => {
    socket.on('new_data', (data) => {
      setHeartRate(data.heart_rate);
      setTemperature(data.temperature);
      setFallDetected(data.fall_detected);
    });
  }, []);

  const chartData = {
    labels: ['Heart Rate', 'Temperature'],
    datasets: [{
      label: 'Vitals',
      data: [heartRate, temperature],
      backgroundColor: ['#FF6384', '#36A2EB'],
    }]
  };

  return (
    <div className="App">
      <h1>Patient Health Dashboard</h1>
      {fallDetected && <div className="alert">FALL DETECTED!</div>}
      <Line data={chartData} />
      <p>Heart Rate: {heartRate} BPM</p>
      <p>Temperature: {temperature}°C</p>
    </div>
  );
}

export default App;
