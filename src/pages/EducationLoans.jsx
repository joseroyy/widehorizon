import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Banknote, PercentCircle, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationLoans = () => {
  return (
    <>
      <Helmet>
        <title>Education Loan Assistance for Study Abroad | Wide Horizon</title>
        <meta name="description" content="Fast and easy education loan assistance in Aluva, Kerala. Low interest rates, collateral & non-collateral loans for studying abroad." />
        <link rel="canonical" href="https://www.widehorizonoverseas.com/education-loans" />
      </Helmet>

      <motion.section className="hero" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '0 52px' }}>
          <div className="sec-lbl">Financial Assistance</div>
          <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.1, marginBottom: '24px', color: 'var(--wh)' }}>
            Hassle-Free Education <br/><span style={{ color: 'var(--b)', fontStyle: 'italic', fontFamily: 'Syne' }}>Loans</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '40px' }}>
            Don't let finances hold back your international education dreams. We partner with top banks to offer fast, low-interest education loans.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
             <Link to="/contact" className="btn-glow">Check Eligibility</Link>
          </div>
        </div>
      </motion.section>

      <section style={{ padding: '80px 52px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1450px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Non-Collateral Loans', icon: <Banknote size={32} color="var(--g)" />, desc: 'Access unsecured education loans based on your academic profile and co-applicant.' },
              { title: 'Low Interest Rates', icon: <PercentCircle size={32} color="var(--b)" />, desc: 'We negotiate the best interest rates from nationalized and private banks.' },
              { title: 'Minimal Paperwork', icon: <FileText size={32} color="var(--g)" />, desc: 'Our team handles the heavy lifting of documentation and bank liaising.' }
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
export default EducationLoans;
