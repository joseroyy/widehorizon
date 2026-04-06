import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="cta-sec mesh-bg" style={{ padding: '100px 52px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <h2 className="glow-text" style={{ fontFamily: 'Syne', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '800', lineHeight: 1.1, marginBottom: '24px' }}>
          Start Your <span style={{ color: 'var(--b)' }}>Journey</span> Today
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', marginBottom: '40px', fontWeight: '300', maxWidth: '500px', margin: '0 auto 40px auto' }}>
          Get in touch with our experts. Whether it's abroad study or visa processing, we handle it all with a local touch.
        </p>
        <Link to="/contact" className="btn-glow btn-pulse" style={{ padding: '18px 46px', fontSize: '0.9rem', textDecoration: 'none' }}>
           Visit Us at Aluva
        </Link>
      </div>
      
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(19,168,225,0.05) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }}></div>
    </section>
  );
};

export default CtaSection;
