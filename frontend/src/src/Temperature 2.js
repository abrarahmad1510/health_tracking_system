import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Temperature = ({ tempData }) => {
  const data = {
    labels: tempData.map((_, index) => `Time ${index * 5}s`),
    datasets: [{
      label: 'Temperature (°C)',
      data: tempData,
      borderColor: '#FF9800', // Orange color
      tension: 0.4,
    }]
  };

  return (
    <div className="chart">
      <h2>Temperature</h2>
      <Line data={data} />
    </div>
  );
};

export default Temperature;
