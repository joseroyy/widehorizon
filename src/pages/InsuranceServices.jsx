import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { HeartPulse, ShieldAlert, Luggage, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsuranceServices = () => {
  return (
    <>
      <Helmet>
        <title>Student & Travel Insurance in Aluva | Wide Horizon</title>
        <meta name="description" content="Comprehensive travel and health insurance services for students and travelers going abroad from Kerala. Stay protected globally." />
        <link rel="canonical" href="https://www.widehorizonoverseas.com/insurance-services" />
      </Helmet>

      <motion.section className="hero" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '0 52px' }}>
          <div className="sec-lbl">Protection & Safety</div>
          <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.1, marginBottom: '24px', color: 'var(--wh)' }}>
            Global Travel & Health <br/><span style={{ color: 'var(--g)', fontStyle: 'italic', fontFamily: 'Syne' }}>Insurance</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '40px' }}>
            Travel with complete peace of mind. We provide comprehensive insurance coverage tailored for international students and frequent travelers.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
             <Link to="/contact" className="btn-glow">Explore Plans</Link>
          </div>
        </div>
      </motion.section>

      <section style={{ padding: '80px 52px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1450px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Medical Emergencies', icon: <HeartPulse size={32} color="var(--g)" />, desc: 'Coverage for unexpected hospital visits and medical treatments abroad.' },
              { title: 'Baggage Loss', icon: <Luggage size={32} color="var(--b)" />, desc: 'Compensation for lost, stolen, or delayed checked baggage.' },
              { title: 'Trip Interruption', icon: <ShieldAlert size={32} color="var(--g)" />, desc: 'Financial protection if your trip gets cancelled due to unforeseen circumstances.' }
            ].map((feature, i) => (
              <motion.div key={i} className="glass-card" style={{ padding: '30px' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                 <div style={{ marginBottom: '20px' }}>{feature.icon}</div>
                 <h3 style={{ fontFamily: 'Syne', fontSize: '1.4rem', marginBottom: '12px' }}>{feature.title}</h3>
                 <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{feature.desc}</p>
              </motion.div>
            ))}
        </div>
      </section>
    </>
  );
};
export default InsuranceServices;
