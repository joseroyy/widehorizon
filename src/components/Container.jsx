import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }} className={className}>
      {children}
    </div>
  );
};

export default Container;
