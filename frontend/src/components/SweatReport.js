import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const SweatReport = ({ sweatData }) => {
  const data = {
    labels: sweatData.map((_, index) => `Time ${index * 5}s`),
    datasets: [{
      label: 'Sweat Level',
      data: sweatData,
      borderColor: '#4CAF50', // Green color
      tension: 0.4,
    }]
  };

  return (
    <div className="chart">
      <h2>Sweat Report</h2>
      <Line data={data} />
    </div>
  );
};

export default SweatReport;
