import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ children, to, href, onClick, variant = 'primary', className = '', glow = false }) => {
  const baseStyle = {
    padding: '0.8rem 1.8rem',
    borderRadius: '9999px',
    fontWeight: '600',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 1,
    border: 'none',
    fontSize: '1rem',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--primary-blue)',
      color: '#ffffff',
    },
    outline: {
      backgroundColor: 'transparent',
      border: '2px solid var(--primary-blue)',
      color: 'var(--primary-blue)',
    }
  };

  const styleStyle = { ...baseStyle, ...variants[variant] };
  const combinedClassName = `${className} ${glow ? 'glow-btn' : ''}`;

  const innerContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = 'var(--accent-green)';
          e.currentTarget.style.color = 'var(--text-dark)';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = 'var(--primary-blue)';
          e.currentTarget.style.color = '#ffffff';
        }
      }}
      style={styleStyle}
      className={combinedClassName}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (to) {
    return <Link to={to} style={{ textDecoration: 'none', display: 'inline-block' }}>{innerContent}</Link>;
  }
  
  if (href) {
    return <a href={href} style={{ textDecoration: 'none', display: 'inline-block' }}>{innerContent}</a>;
  }

  return (
    <div style={{ display: 'inline-block' }}>
      {innerContent}
    </div>
  );
};

export default Button;
