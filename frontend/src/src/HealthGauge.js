import React from 'react';
import { motion } from 'framer-motion';
import './HealthGauge.css'; // Ensure you have appropriate styles

export default function HealthGauge({ value, label, color, min, max }) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <motion.div 
      className="gauge-container"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <div className="gauge-background" />
      <div 
        className="gauge-fill"
        style={{
          background: `conic-gradient(${color} ${percentage}%, transparent ${percentage}% 100%)`
        }}
      />
      <div className="gauge-text">
        <h2>{value}</h2>
        <span>{label}</span>
      </div>
    </motion.div>
  );
}
