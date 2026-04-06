import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      className="service-card"
      style={{
        backgroundColor: 'var(--bg-white)',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        border: '1px solid rgba(0,0,0,0.05)',
        height: '100%'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div 
        className="icon-container" 
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          backgroundColor: 'rgba(19, 168, 225, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--primary-blue)',
          marginBottom: '1.5rem'
        }}
      >
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
