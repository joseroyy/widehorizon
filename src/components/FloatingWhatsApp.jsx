import React from 'react';

const FloatingWhatsApp = () => {
  const phoneNumber = "917902621955";
  const message = "Hello Wide Horizon, I need some assistance.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#25D366',
        color: '#ffffff',
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.7)',
        zIndex: 9990,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        animation: 'waPulse 2s infinite'
      }}
      className="wa-btn"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(37, 211, 102, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(37, 211, 102, 0.4)';
      }}
    >
      <style>
        {`
          @keyframes waPulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
          }
        `}
      </style>
      <svg viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
