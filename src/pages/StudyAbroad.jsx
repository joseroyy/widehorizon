import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, MapPin, CheckCircle2, Globe, FileText, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudyAbroad = () => {
  return (
    <>
      <Helmet>
        <title>Top Study Abroad Consultants in Aluva, Kerala | Wide Horizon</title>
        <meta name="description" content="Looking to study overseas? Our Aluva-based study abroad consultants offer expert guidance for UK, Canada, Germany & Australia admissions. Free counseling!" />
        <link rel="canonical" href="https://www.widehorizonoverseas.com/study-abroad" />
        <script type="application/ld+json">
          {`
            [
              {
                "@context": "https://schema.org/",
                "@type": "Service",
                "serviceType": "Study Abroad Consulting",
                "provider": {
                  "@type": "EducationalOrganization",
                  "name": "Wide Horizon Overseas",
                  "url": "https://www.widehorizonoverseas.com/"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Aluva"
                },
                "description": "Expert study abroad consulting services for students in Kerala. Admissions guidance for UK, USA, Canada, Germany, and Australia."
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Do you provide counseling for Germany?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we provide end-to-end assistance for studying in Germany, including university selection, blocked account setup, and visa processing from our Aluva office."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you help with education loans?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. We assist students from Kerala in securing education loans with minimal documentation through our partnered financial institutions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need IELTS to study abroad?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "While IELTS is required for many countries like the UK and Canada, some universities in the UK and Europe offer waivers based on your 12th-grade English scores. We can guide you based on your profile."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does the admission process take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The admission process typically takes 2-4 weeks after submitting all documents. We recommend starting the process at least 6 months before the intake."
                    }
                  }
                ]
              }
            ]
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
            <div className="sec-lbl" style={{ margin: '0 auto 20px' }}>Study Abroad Services</div>
            <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.1, marginBottom: '24px', color: 'var(--wh)' }}>
              Best Study Abroad Agency in <br/><span style={{ color: 'var(--b)', fontStyle: 'italic', fontFamily: 'Syne' }}>Aluva, Kerala</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '40px' }}>
              Turn your international education dreams into reality. We provide end-to-end guidance from university selection to visa approval and pre-departure support for students across Kerala.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
               <Link to="/contact" className="btn-glow">Book Free Counseling</Link>
               <a href="https://wa.me/917902621955" className="btn-ghost">Chat on WhatsApp</a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Popular Destinations */}
      <section style={{ padding: '100px 52px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
          <div className="sec-lbl">Global Reach</div>
          <h2 className="sec-title glow-text" style={{ marginBottom: '50px' }}>Popular Study Destinations<br/><em>for Kerala Students</em></h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { name: 'United Kingdom', icon: '🇬🇧', desc: 'World-class universities with 2-year post-study work rights.' },
              { name: 'Canada', icon: '🇨🇦', desc: 'Affordable tuition, high quality of life, and excellent PR pathways.' },
              { name: 'Germany', icon: '🇩🇪', desc: 'Free or low-cost education with strong engineering & IT programs.' },
              { name: 'Australia', icon: '🇦🇺', desc: 'High standard of living, beautiful campuses, and robust job market.' },
              { name: 'USA', icon: '🇺🇸', desc: 'Ivy League institutions and unmatched global career opportunities.' },
              { name: 'New Zealand', icon: '🇳🇿', desc: 'Safe environment with research-focused academic excellence.' }
            ].map((country, i) => (
              <motion.div 
                 key={i}
                 className="glass-card"
                 style={{ padding: '30px' }}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                 <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{country.icon}</div>
                 <h3 style={{ fontFamily: 'Syne', fontSize: '1.4rem', marginBottom: '12px' }}>{country.name}</h3>
                 <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{country.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section style={{ padding: '100px 52px' }}>
         <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
            <div className="res-grid-1-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
               <div>
                  <div className="sec-lbl">How We Help</div>
                  <h2 className="sec-title glow-text" style={{ marginBottom: '30px' }}>Our University<br/><em>Admission Process</em></h2>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '40px' }}>
                    From the moment you walk into our Aluva office to the day you board your flight, we are with you every step of the way.
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                     {[
                       { title: 'Profile Evaluation & Counseling', icon: <GraduationCap color="var(--b)" /> },
                       { title: 'University & Course Selection', icon: <Globe color="var(--g)" /> },
                       { title: 'Application & SOP Assistance', icon: <FileText color="var(--b)" /> },
                       { title: 'Offer Letter Acceptance', icon: <CheckCircle2 color="var(--g)" /> },
                       { title: 'Visa Processing & Interview Prep', icon: <MapPin color="var(--b)" /> },
                       { title: 'Education Loan Assistance', icon: <Banknote color="var(--g)" /> }
                     ].map((step, i) => (
                        <motion.div 
                           key={i}
                           style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1, duration: 0.4 }}
                        >
                           <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              {step.icon}
                           </div>
                           <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{i + 1}. {step.title}</span>
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
                  <div style={{ aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                     <img src="/services/Abroad Study.png" alt="Study Abroad Consulting in Aluva" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '100px 52px', background: 'var(--dk)' }}>
         <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="sec-lbl" style={{ textAlign: 'center', margin: '0 auto 20px' }}>Questions & Answers</div>
            <h2 className="sec-title glow-text" style={{ textAlign: 'center', marginBottom: '60px' }}>Study Abroad <em>FAQs</em></h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
               {[
                 { q: 'Do you provide counseling for Germany?', a: 'Yes, we provide end-to-end assistance for studying in Germany, including university selection, blocked account setup, and visa processing from our Aluva office.' },
                 { q: 'Can you help with education loans?', a: 'Absolutely. We assist students from Kerala in securing education loans with minimal documentation through our partnered financial institutions.' },
                 { q: 'Do I need IELTS to study abroad?', a: 'While IELTS is required for many countries like the UK and Canada, some universities in the UK and Europe offer waivers based on your 12th-grade English scores. We can guide you based on your profile.' },
                 { q: 'How long does the admission process take?', a: 'The admission process typically takes 2-4 weeks after submitting all documents. We recommend starting the process at least 6 months before the intake.' }
               ].map((faq, i) => (
                  <div key={i} className="glass-card" style={{ padding: '30px' }}>
                     <h3 style={{ fontFamily: 'Syne', fontSize: '1.2rem', marginBottom: '12px', color: 'var(--b)' }}>{faq.q}</h3>
                     <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </>
  );
};

export default StudyAbroad;
