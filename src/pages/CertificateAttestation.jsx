import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Stamp, BookOpen, Building2, Languages, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CertificateAttestation = () => {
  return (
    <>
      <Helmet>
        <title>Certificate Attestation Services in Aluva | Wide Horizon</title>
        <meta name="description" content="Fast and secure certificate attestation, HRD, MEA, and Embassy legalization services in Aluva. Get your educational & non-educational documents attested easily." />
        <link rel="canonical" href="https://www.widehorizonoverseas.com/certificate-attestation" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Service",
              "serviceType": "Document Attestation Service",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Wide Horizon Overseas",
                "url": "https://www.widehorizonoverseas.com/"
              },
              "areaServed": {
                "@type": "City",
                "name": "Aluva"
              },
              "description": "Secure and fast certificate attestation services for degree certificates, marriage certificates, and birth certificates for GCC and European countries."
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
            <div className="sec-lbl" style={{ margin: '0 auto 20px' }}>Legalization Services</div>
            <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.1, marginBottom: '24px', color: 'var(--wh)' }}>
              Secure Certificate Attestation in <br/><span style={{ color: 'var(--g)', fontStyle: 'italic', fontFamily: 'Syne' }}>Aluva</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '40px' }}>
              We provide fast, reliable, and secure document attestation, apostille, and translation services for all GCC and European countries. Your documents are safe with us.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
               <Link to="/contact" className="btn-glow">Request a Quote</Link>
               <a href="https://wa.me/917902621955" className="btn-ghost">WhatsApp Us</a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section style={{ padding: '100px 52px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
          <div className="sec-lbl">Our Expertise</div>
          <h2 className="sec-title glow-text" style={{ marginBottom: '50px' }}>Complete Document<br/><em>Legalization Solutions</em></h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Educational Certificates', icon: <BookOpen size={32} color="var(--g)" />, desc: 'Degree, Diploma, PG, Nursing, and SSLC/HSC certificate attestation from HRD, MEA, and Embassies.' },
              { title: 'Non-Educational Documents', icon: <Stamp size={32} color="var(--b)" />, desc: 'Marriage, Birth, Experience, and Medical certificate attestation for family visas and employment.' },
              { title: 'Embassy Attestation & Apostille', icon: <Building2 size={32} color="var(--g)" />, desc: 'Specialized apostille services for Hague Convention countries and embassy legalization for UAE, Qatar, Kuwait, etc.' },
              { title: 'Authorized Translation', icon: <Languages size={32} color="var(--b)" />, desc: 'Accurate and legally accepted translation of documents into Arabic, German, French, and other languages.' }
            ].map((service, i) => (
              <motion.div 
                 key={i}
                 className="glass-card"
                 style={{ padding: '30px' }}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                 <div style={{ marginBottom: '20px' }}>{service.icon}</div>
                 <h3 style={{ fontFamily: 'Syne', fontSize: '1.4rem', marginBottom: '12px' }}>{service.title}</h3>
                 <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '100px 52px' }}>
         <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
            <div className="res-grid-1-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
               <div>
                  <div className="sec-lbl">Trust & Security</div>
                  <h2 className="sec-title glow-text" style={{ marginBottom: '30px' }}>Why Entrust Us With<br/><em>Your Original Documents?</em></h2>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '40px' }}>
                    We understand the value of your original educational and personal certificates. Our process is built entirely around security and transparency.
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                     {[
                       '100% Safety Guarantee for Original Documents',
                       'Fast & Express Processing Options',
                       'Free Pickup and Drop Facility (Terms Apply)',
                       'Online Tracking of Document Status',
                       'Direct Submission to Embassies',
                       'No Hidden Charges'
                     ].map((point, i) => (
                        <motion.div 
                           key={i}
                           style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1, duration: 0.4 }}
                        >
                           <CheckCircle2 color="var(--b)" />
                           <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{point}</span>
                        </motion.div>
                     ))}
                  </div>
               </div>
               
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               >
                  <div style={{ aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--dk)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     {/* Using the generic placeholder image format if a specific one isn't available, but we can try to load one if it exists */}
                     <img src="/services/Certificate attestation.png" alt="Certificate Attestation in Kerala" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'; }} />
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
    </>
  );
};

export default CertificateAttestation;
