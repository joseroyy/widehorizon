import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, Map, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndiaAdmissions = () => {
  return (
    <>
      <Helmet>
        <title>All India College Admissions Consultants in Aluva | Wide Horizon</title>
        <meta name="description" content="Expert admission guidance for Medical, Engineering, Nursing, and Arts colleges across India. Based in Aluva, Kerala." />
        <link rel="canonical" href="https://www.widehorizonoverseas.com/all-india-admissions" />
      </Helmet>

      <motion.section className="hero" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '0 52px' }}>
          <div className="sec-lbl">Domestic Education</div>
          <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.1, marginBottom: '24px', color: 'var(--wh)' }}>
            All India College <br/><span style={{ color: 'var(--b)', fontStyle: 'italic', fontFamily: 'Syne' }}>Admissions</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '40px' }}>
            We don't just look abroad. We help students secure seats in top-tier colleges across India for Medicine, Engineering, Management, and Nursing.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
             <Link to="/contact" className="btn-glow">Consult an Expert</Link>
          </div>
        </div>
      </motion.section>

      <section style={{ padding: '80px 52px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1450px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Top Institutions', icon: <Award size={32} color="var(--g)" />, desc: 'Direct admission guidance for NAAC A+ and NIRF ranked colleges across the country.' },
              { title: 'Pan-India Reach', icon: <Map size={32} color="var(--b)" />, desc: 'Specialized placement in Karnataka, Tamil Nadu, Maharashtra, and Delhi NCR.' },
              { title: 'Multiple Streams', icon: <GraduationCap size={32} color="var(--g)" />, desc: 'From MBBS, B.Tech, and B.Sc Nursing to MBA and specialized design courses.' }
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
export default IndiaAdmissions;
