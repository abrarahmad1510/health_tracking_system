import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiHeartBeats, GiThermometer, GiLungs } from 'react-icons/gi';
import { MdWaterDrop } from 'react-icons/md';
import './Navigation.css'; // Ensure you have appropriate styles

export default function Navigation() {
  const navItems = [
    { path: '/', icon: <GiHeartBeats />, label: 'Vitals' },
    { path: '/heart', icon: <GiHeartBeats />, label: 'Heart' },
    { path: '/temperature', icon: <GiThermometer />, label: 'Temp' },
    { path: '/oxygen', icon: <GiLungs />, label: 'O2' },
    { path: '/sweat', icon: <MdWaterDrop />, label: 'Sweat' },
  ];

  return (
    <motion.nav 
      className="glass-nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      {navItems.map((item) => (
        <motion.div whileHover={{ scale: 1.1 }} key={item.path}>
          <Link to={item.path} className="nav-item">
            {item.icon}
            <span>{item.label}</span>
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
}
