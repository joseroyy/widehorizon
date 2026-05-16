import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Fingerprint, Clock, FileCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PoliceClearance = () => {
  return (
    <>
      <Helmet>
        <title>PCC (Police Clearance Certificate) Services in Aluva | Wide Horizon</title>
        <meta name="description" content="Fast and reliable Police Clearance Certificate (PCC) assistance for visa and employment purposes in Aluva, Kerala." />
        <link rel="canonical" href="https://www.widehorizonoverseas.com/pcc-police-clearance" />
      </Helmet>

      <motion.section className="hero" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '0 52px' }}>
          <div className="sec-lbl">Clearance Services</div>
          <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.1, marginBottom: '24px', color: 'var(--wh)' }}>
            Quick PCC Assistance in <br/><span style={{ color: 'var(--g)', fontStyle: 'italic', fontFamily: 'Syne' }}>Aluva</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '40px' }}>
            A Police Clearance Certificate is critical for long-term visas and foreign employment. We assist you with the documentation and application process to ensure zero delays.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
             <Link to="/contact" className="btn-glow">Apply for PCC</Link>
          </div>
        </div>
      </motion.section>

      <section style={{ padding: '80px 52px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1450px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Visa & Employment', icon: <FileCheck size={32} color="var(--g)" />, desc: 'Mandatory documentation for work visas, PR applications, and long-term studies.' },
              { title: 'Fast Processing', icon: <Clock size={32} color="var(--b)" />, desc: 'We guide you through the exact steps to expedite your local and passport office clearance.' },
              { title: 'Global Validation', icon: <Fingerprint size={32} color="var(--g)" />, desc: 'Guidance on apostille and attestation of your PCC for foreign embassy acceptance.' }
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
export default PoliceClearance;
