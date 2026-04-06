import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mesh-bg-footer" style={{ padding: '100px 24px 60px', borderTop: 'none', textAlign: 'center' }}>
      <div className="ft" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '60px', marginBottom: '80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link to="/" className="logo" style={{ justifyContent: 'center' }}>
            <div className="logo-mark">
              <img src="/logo.png" alt="Wide Horizon Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <div className="logo-wh">WIDE HORIZON</div>
              <div className="logo-tag">Global Services</div>
            </div>
          </Link>
          <p className="ft-p" style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '400px', margin: '20px auto 0' }}>Your complete gateway to the world — from Aluva, Kerala. Trusted, experienced and always on your side.</p>
        </div>

        <div style={{ width: '100%' }}>
          <div className="ft-h" style={{ color: 'rgba(255,255,255,0.7)', textShadow: '0 0 10px rgba(255,255,255,0.2)', marginBottom: '32px' }}>Professional Services</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            {[
              'Abroad Study', 'Visa Services', 'Certificate Attestation',
              'Flight Ticketing', 'Insurance Services', 'Loans & Support',
              'PCC (Police Clearance)', 'All India Admissions', 'Stamp & Seal Making'
            ].map((s, i) => (
              <div key={i} style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.05rem' }}>{s}</div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="ft-h" style={{ color: 'rgba(255,255,255,0.7)', textShadow: '0 0 10px rgba(255,255,255,0.2)', marginBottom: '32px' }}>Contact Information</div>
          <ul className="ft-ul" style={{ alignItems: 'center' }}>
            <li><a href="tel:+917902621955" style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--wh)' }}>+91 79026 21955</a></li>
            <li><a href="mailto:widehorizon2025@gmail.com" style={{ fontSize: '1.1rem' }}>widehorizon2025@gmail.com</a></li>
            <li><Link to="/contact" style={{ display: 'block', marginTop: '10px', fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)' }}>13 KUZHIKADAVU, Near UC College, Aluva, KL 683102</Link></li>
          </ul>
        </div>
      </div>

      <div className="fb" style={{ borderTop: '1px solid rgba(19,168,225,0.1)', paddingTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem', letterSpacing: '2px' }}>© 2025 WIDE HORIZON · GLOBAL SERVICES · ALUVA</p>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.85rem' }}>
           Designed and Developed by <a href="https://www.linkedin.com/in/jose-roy1/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--b)', textDecoration: 'none', fontWeight: '700' }}>Jose Roy</a>
        </p>
        <div className="fbars">
          <div className="fbar" style={{ background: '#13a8e1', width: '38px', boxShadow: '0 0 10px #13a8e1' }}></div>
          <div className="fbar" style={{ background: '#cdde3a', width: '22px', boxShadow: '0 0 10px #cdde3a' }}></div>
          <div className="fbar" style={{ background: 'rgba(255,255,255,.15)', width: '12px' }}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
