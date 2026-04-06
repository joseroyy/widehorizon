import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, dx: 0, dy: 0, gx: 0, gy: 0 });
  const reqRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };

    const animate = () => {
      // Faster following for the dot
      pos.current.dx += (pos.current.mx - pos.current.dx) * 0.35;
      pos.current.dy += (pos.current.my - pos.current.dy) * 0.35;
      
      // Slower, fluid lag for the glow
      pos.current.gx += (pos.current.mx - pos.current.gx) * 0.08;
      pos.current.gy += (pos.current.my - pos.current.gy) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.dx}px, ${pos.current.dy}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.gx}px, ${pos.current.gy}px, 0)`;
      }
      
      reqRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    reqRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  useEffect(() => {
    const onEnter = () => {
      if (glowRef.current) {
        glowRef.current.style.width = '100px';
        glowRef.current.style.height = '100px';
        glowRef.current.style.background = 'rgba(205, 222, 58, 0.15)';
        glowRef.current.style.border = '1px solid rgba(205, 222, 58, 0.3)';
      }
      if (dotRef.current) {
        dotRef.current.style.width = '30px';
        dotRef.current.style.height = '30px';
        dotRef.current.style.background = 'rgba(255, 255, 255, 0.1)';
        dotRef.current.style.backdropFilter = 'blur(4px)';
      }
    };
    const onLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.width = '40px';
        glowRef.current.style.height = '40px';
        glowRef.current.style.background = 'transparent';
        glowRef.current.style.border = '1.5px solid rgba(19, 168, 225, 0.4)';
      }
      if (dotRef.current) {
        dotRef.current.style.width = '8px';
        dotRef.current.style.height = '8px';
        dotRef.current.style.background = 'var(--g)';
        dotRef.current.style.backdropFilter = 'none';
      }
    };

    const interactive = document.querySelectorAll('a, button, .glass-card, input, select, textarea');
    interactive.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      interactive.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [location.pathname]);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99999 }}>
      {/* Sharp Center Dot */}
      <div 
        ref={dotRef}
        style={{
          position: 'absolute',
          top: -4, left: -4,
          width: '8px', height: '8px',
          background: 'var(--g)',
          borderRadius: '50%',
          transition: 'width 0.3s, height 0.3s, background 0.3s',
          pointerEvents: 'none'
        }}
      />
      {/* Soft Lagging Glow */}
      <div 
        ref={glowRef}
        style={{
          position: 'absolute',
          top: -20, left: -20,
          width: '40px', height: '40px',
          border: '1.5px solid rgba(19, 168, 225, 0.4)',
          borderRadius: '50%',
          transition: 'width 0.3s, height 0.3s, background 0.3s, border 0.3s',
          pointerEvents: 'none',
          boxShadow: '0 0 20px rgba(19, 168, 225, 0.1)'
        }}
      />
    </div>
  );
};

export default CustomCursor;
