import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CtaSection from './components/CtaSection';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import StudyAbroad from './pages/StudyAbroad';
import VisaServices from './pages/VisaServices';
import CertificateAttestation from './pages/CertificateAttestation';
import FlightTicketing from './pages/FlightTicketing';
import InsuranceServices from './pages/InsuranceServices';
import EducationLoans from './pages/EducationLoans';
import PoliceClearance from './pages/PoliceClearance';
import IndiaAdmissions from './pages/IndiaAdmissions';
import StampMaking from './pages/StampMaking';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulated Loading
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {loading && (
        <div className={`preloader ${!loading ? 'hidden' : ''}`}>
           <div className="preloader-logo">
              <img src="/logo.png" alt="Wide Horizon" style={{ width: '80px', height: '80px', objectFit: 'contain', animation: 'logo-pulse 2s ease-in-out infinite' }} />
           </div>
           <div className="preloader-bar">
              <div className="preloader-progress" style={{ width: `${progress}%` }}></div>
           </div>
           <div style={{ marginTop: '20px', fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
              Wide Horizon Is Loading...
           </div>
        </div>
      )}
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/visa-services" element={<VisaServices />} />
          <Route path="/certificate-attestation" element={<CertificateAttestation />} />
          <Route path="/flight-ticketing" element={<FlightTicketing />} />
          <Route path="/insurance-services" element={<InsuranceServices />} />
          <Route path="/education-loans" element={<EducationLoans />} />
          <Route path="/pcc-police-clearance" element={<PoliceClearance />} />
          <Route path="/all-india-admissions" element={<IndiaAdmissions />} />
          <Route path="/stamp-seal-making" element={<StampMaking />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <CtaSection />
      <FloatingWhatsApp />
      <Footer />
    </Router>
  );
}

export default App;
