import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import HealthGauge from './HealthGauge';
import './Dashboard.css'; // Ensure you have appropriate styles

const data = [/* Your formatted health data */];

export default function Dashboard() {
  return (
    <div className="dashboard-grid">
      <div className="metric-card vitals-glance">
        <h3>Current Vitals</h3>
        <div className="vitals-grid">
          <HealthGauge 
            value={72} 
            label="BPM" 
            color="#00f2c3"
            min={40}
            max={120}
          />
          <HealthGauge
            value={98}
            label="SpO2"
            color="#4dabf7"
            min={85}
            max={100}
          />
        </div>
      </div>

      <div className="metric-card health-timeline">
        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
          colors={['#00f2c3']}
          enableSlices="x"
        />
      </div>
    </div>
  );
}
