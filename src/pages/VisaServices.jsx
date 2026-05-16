import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PlaneTakeoff, ShieldCheck, Clock, FileCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisaServices = () => {
  return (
    <>
      <Helmet>
        <title>Fast & Reliable Visa Services in Aluva | Wide Horizon</title>
        <meta name="description" content="Get expert visa assistance in Aluva for Student, Tourist, Work, and Dependent visas. High success rate, transparent process, and fast processing." />
        <link rel="canonical" href="https://www.widehorizonoverseas.com/visa-services" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Service",
              "serviceType": "Visa Consulting Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Wide Horizon Overseas",
                "url": "https://www.widehorizonoverseas.com/"
              },
              "areaServed": {
                "@type": "City",
                "name": "Aluva"
              },
              "description": "Expert visa assistance for students, tourists, and professionals. High approval rates for UK, USA, Canada, and Schengen visas."
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        className="hero" 
        style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ maxWidth: '1450px', margin: '0 auto', padding: '0 52px', position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
          >
            <div className="sec-lbl" style={{ margin: '0 auto 20px' }}>Global Visa Solutions</div>
            <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.1, marginBottom: '24px', color: 'var(--wh)' }}>
              Expert Visa Consultants in <br/><span style={{ color: 'var(--g)', fontStyle: 'italic', fontFamily: 'Syne' }}>Aluva, Kerala</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '40px' }}>
              We simplify the complex visa application process. With our high success rate and meticulous attention to detail, getting your visa approved has never been easier.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
               <Link to="/contact" className="btn-glow">Start Your Application</Link>
               <a href="https://wa.me/917902621955" className="btn-ghost">Speak to a Visa Expert</a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Types of Visas */}
      <section style={{ padding: '100px 52px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
          <div className="sec-lbl">Visa Categories</div>
          <h2 className="sec-title glow-text" style={{ marginBottom: '50px' }}>Visas We Handle<br/><em>With Precision</em></h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Student Visa', icon: <FileCheck size={32} color="var(--g)" />, desc: 'End-to-end support for F1, Tier 4, Subclass 500, and other international student visas.' },
              { title: 'Tourist / Visit Visa', icon: <PlaneTakeoff size={32} color="var(--b)" />, desc: 'Hassle-free tourist and visitor visa processing for families and individuals traveling abroad.' },
              { title: 'Dependent Visa', icon: <ShieldCheck size={32} color="var(--g)" />, desc: 'Bring your loved ones with you. We handle spouse and child dependent visa applications.' },
              { title: 'Work Visa', icon: <Clock size={32} color="var(--b)" />, desc: 'Guidance and document preparation for skilled worker and post-study work visas.' }
            ].map((visa, i) => (
              <motion.div 
                 key={i}
                 className="glass-card"
                 style={{ padding: '30px' }}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                 <div style={{ marginBottom: '20px' }}>{visa.icon}</div>
                 <h3 style={{ fontFamily: 'Syne', fontSize: '1.4rem', marginBottom: '12px' }}>{visa.title}</h3>
                 <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{visa.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Visa */}
      <section style={{ padding: '100px 52px' }}>
         <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
            <div className="res-grid-1-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               >
                  <div style={{ aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                     <img src="/services/Visa services.png" alt="Visa Processing Services in Kerala" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
               </motion.div>
               
               <div>
                  <div className="sec-lbl">The Wide Horizon Difference</div>
                  <h2 className="sec-title glow-text" style={{ marginBottom: '30px' }}>Why Process Your Visa<br/><em>With Us?</em></h2>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '40px' }}>
                    A single mistake on a visa application can lead to a rejection. Trust our experts to get it right the first time.
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                     {[
                       '98% Visa Success Rate',
                       'Rigorous Document Verification',
                       'Mock Interview Preparation',
                       'Transparent Fee Structure',
                       'Real-time Application Tracking',
                       'Expertise in Schengen, UK, USA & Canada'
                     ].map((point, i) => (
                        <motion.div 
                           key={i}
                           style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}
                           initial={{ opacity: 0, x: 20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1, duration: 0.4 }}
                        >
                           <CheckCircle2 color="var(--g)" />
                           <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{point}</span>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Common Mistakes Warning */}
      <section style={{ padding: '80px 52px', background: 'rgba(19, 168, 225, 0.05)', borderTop: '1px solid rgba(19, 168, 225, 0.1)', borderBottom: '1px solid rgba(19, 168, 225, 0.1)' }}>
         <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <AlertCircle size={48} color="var(--b)" style={{ margin: '0 auto 20px' }} />
            <h3 style={{ fontFamily: 'Syne', fontSize: '2rem', marginBottom: '20px' }}>Avoid Costly Rejections</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              Visa rejections stay on your permanent travel record. Incomplete documentation, incorrect financial statements, and poor interview performance are the top reasons for denial. Let Wide Horizon's experienced team handle your file professionally.
            </p>
         </div>
      </section>
    </>
  );
};

export default VisaServices;
