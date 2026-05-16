import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Printer, PenTool, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const StampMaking = () => {
  return (
    <>
      <Helmet>
        <title>Custom Stamp & Seal Making Services in Aluva | Wide Horizon</title>
        <meta name="description" content="High-quality, custom rubber stamps and official seals for businesses, institutions, and professionals in Aluva, Kerala." />
        <link rel="canonical" href="https://www.widehorizonoverseas.com/stamp-seal-making" />
      </Helmet>

      <motion.section className="hero" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '0 52px' }}>
          <div className="sec-lbl">Corporate Services</div>
          <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.1, marginBottom: '24px', color: 'var(--wh)' }}>
            Custom Stamp & Seal <br/><span style={{ color: 'var(--g)', fontStyle: 'italic', fontFamily: 'Syne' }}>Making</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '40px' }}>
            We design and manufacture high-quality, durable official seals, rubber stamps, and self-inking stamps for businesses and professionals in Aluva.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
             <Link to="/contact" className="btn-glow">Order Now</Link>
          </div>
        </div>
      </motion.section>

      <section style={{ padding: '80px 52px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1450px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Self-Inking Stamps', icon: <Printer size={32} color="var(--g)" />, desc: 'Modern, mess-free, and highly durable stamps suitable for daily high-volume office use.' },
              { title: 'Custom Designs', icon: <PenTool size={32} color="var(--b)" />, desc: 'Incorporate your company logo, signature, or custom typography perfectly.' },
              { title: 'Official Seals', icon: <CheckCircle2 size={32} color="var(--g)" />, desc: 'Government, notary, and institutional seals crafted with strict compliance and precision.' }
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
export default StampMaking;
