import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav style={{ padding: '28px 52px' }}>
      <Link to="/" className="logo">
        <div className="logo-mark">
          <img src="/logo.png" alt="Wide Horizon Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div>
          <div className="logo-wh">WIDE HORIZON</div>
          <div className="logo-tag">Global Services · Aluva</div>
        </div>
      </Link>
      
      <div className="nav-r">
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
        
        <a href="tel:7902621955" className="nav-btn btn-pulse desktop-only" style={{ background: 'var(--b)', color: '#fff', border: 'none', padding: '12px 26px', boxShadow: '0 0 20px rgba(19, 168, 225, 0.4)' }}>
          Call Now
        </a>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
           {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
