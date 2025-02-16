import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const OxygenSaturation = ({ oxygenData }) => {
  const data = {
    labels: oxygenData.map((_, index) => `Time ${index * 5}s`),
    datasets: [{
      label: 'Oxygen Saturation (%)',
      data: oxygenData,
      borderColor: '#2196F3', // Blue color
      tension: 0.4,
    }]
  };

  return (
    <div className="chart">
      <h2>Oxygen Saturation</h2>
      <Line data={data} />
    </div>
  );
};

export default OxygenSaturation;
