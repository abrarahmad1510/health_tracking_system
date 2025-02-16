// RealTimeChart.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Line } from 'react-chartjs-2';

const socket = io();

const RealTimeChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'GSR (Voltage)',
        data: [],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'PPG (BPM)',
        data: [],
        borderColor: 'rgba(255,99,132,1)',
        fill: false,
      },
    ],
  });

  useEffect(() => {
    socket.on('sensorData', (sensorData) => {
      setData((prevData) => {
        const time = new Date().toLocaleTimeString();
        const newLabels = [...prevData.labels, time].slice(-10); // Keep last 10 labels
        const newGsrData = [...prevData.datasets[0].data, sensorData.gsr].slice(-10);
        const newPpgData = [...prevData.datasets[1].data, sensorData.ppg].slice(-10);

        return {
          labels: newLabels,
          datasets: [
            { ...prevData.datasets[0], data: newGsrData },
            { ...prevData.datasets[1], data: newPpgData },
          ],
        };
      });
    });

    return () => socket.off('sensorData');
  }, []);

  return (
    <div>
      <h2>Real-Time Sensor Data</h2>
      <Line data={data} />
    </div>
  );
};

export default RealTimeChart;

