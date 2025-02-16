import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import io from 'socket.io-client';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title
);

// Styled components
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 20px;
  background-color: #f4f4f9;
  height: 100vh; /* Full viewport height */
  overflow: hidden; /* Prevent scrolling */
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
`;

const Card = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 0 5px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const GraphContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 40vh; /* Each graph takes 40% of viewport height */
  margin-bottom: 20px;
`;

const Dashboard = () => {
  const [heartRateData, setHeartRateData] = useState(Array(100).fill(null));
  const [gsrData, setGsrData] = useState(Array(100).fill(null));
  const [labels, setLabels] = useState(Array.from({ length: 100 }, (_, i) => i * 100)); // 0ms, 100ms, ..., 9900ms

  useEffect(() => {
    const socket = io('http://localhost:3000'); // Adjust the URL if different

    socket.on('sensorData', ({ heartRate, gsrValue }) => {
      setHeartRateData((prev) => [...prev.slice(1), heartRate]);
      setGsrData((prev) => [...prev.slice(1), gsrValue]);
      setLabels((prev) => [...prev.slice(1), new Date().toLocaleTimeString()]);
    });

    return () => socket.disconnect();
  }, []);

  const gsrChartData = {
    labels,
    datasets: [
      {
        label: 'GSR Voltage (mV)',
        data: gsrData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const heartRateChartData = {
    labels,
    datasets: [
      {
        label: 'Heart Rate (BPM)',
        data: heartRateData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
    ],
  };

  return (
    <DashboardContainer>
      <Stats>
        <Card>
          <h3>Temperature</h3>
          <p>98.6°F</p>
        </Card>
        <Card>
          <h3>Oxygen Levels</h3>
          <p>97%</p>
        </Card>
        <Card>
          <h3>Sweat Levels</h3>
          <p>Normal</p>
        </Card>
      </Stats>
      <GraphContainer>
        <Line
          data={gsrChartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'GSR Voltage Over Time',
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Time (ms)',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Voltage (mV)',
                },
                suggestedMin: 0.5,
                suggestedMax: 1.0,
              },
            },
          }}
        />
      </GraphContainer>
      <GraphContainer>
        <Line
          data={heartRateData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Heart Rate Over Time',
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Time (ms)',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Beats Per Minute (BPM)',
                },
                suggestedMin: 60,
                suggestedMax: 100,
              },
            },
          }}
        />
      </GraphContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

