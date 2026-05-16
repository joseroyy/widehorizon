import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import GlobeCanvas from '../components/GlobeCanvas';
import Beams from '../components/Beams';
import TrustedBy from '../components/TrustedBy';
import { 
  PlaneTakeoff, 
  ShieldCheck, 
  Ticket, 
  BookText, 
  Fingerprint, 
  ShieldAlert, 
  Briefcase, 
  Coins, 
  GraduationCap, 
  Printer, 
  ChevronRight,
  Star,
  CheckCircle2
} from 'lucide-react';

const Home = () => {
  const svcRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
          }, i * 65);
        }
      });
    }, { threshold: 0.05 });

    svcRefs.current.forEach(el => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        obs.observe(el);
      }
    });

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Study Abroad & Visa Consultants in Aluva | Wide Horizon</title>
        <meta name="description" content="Wide Horizon is Aluva's trusted consultancy for study abroad, visas, certificate attestation, and flight tickets. Start your global journey with expert guidance today." />
        <link rel="canonical" href="https://www.widehorizonoverseas.com/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Wide Horizon Overseas",
              "image": "https://www.widehorizonoverseas.com/logo.png",
              "@id": "https://www.widehorizonoverseas.com/",
              "url": "https://www.widehorizonoverseas.com/",
              "telephone": "+917902621955",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Aluva",
                "addressLocality": "Aluva",
                "addressRegion": "Kerala",
                "postalCode": "683101",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "10.1004",
                "longitude": "76.3570"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:30",
                "closes": "18:00"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "835"
              }
            }
          `}
        </script>
      </Helmet>
      <motion.section 
        className="hero" 
        style={{ position: 'relative', overflow: 'hidden' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Beams
            beamWidth={4.2}
            beamHeight={30}
            beamNumber={10}
            lightColor="#2306fe"
            speed={1.5}
            noiseIntensity={1.95}
            scale={0.2}
            rotation={30}
          />
        </div>
        
        <div className="hero-container">
          <motion.div 
             className="hero-l"
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >

            <h1 style={{ fontSize: 'clamp(3.2rem, 5.5vw, 4.8rem)', color: 'var(--wh)', lineHeight: 1.05, marginBottom: '24px' }}>
              Study Abroad.<br/>
              <span style={{ color: 'var(--g)' }}>Work Abroad.</span><br/>
              <span style={{ color: 'var(--b)', fontStyle: 'italic', fontFamily: 'Syne' }}>Live Without Limits.</span>
            </h1>
            <p className="hero-desc">
              Turn your global dreams into reality with expert guidance from Aluva’s most trusted consultancy. From university admissions to visa approvals, we handle everything — so you can focus on your future.
            </p>

            <div className="hero-acts">
              <Link to="/contact" className="btn-glow btn-pulse">Start Your Abroad Journey</Link>
              <a href="https://wa.me/917902621955" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', color: '#25D366' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
          
          <motion.div 
             className="hero-r"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.5 }}
          >
            <GlobeCanvas />
          </motion.div>
        </div>

        <div className="scroll-h">
          <div className="sline"></div>
          <span>Scroll</span>
        </div>
      </motion.section>

      <div className="mq-wrap">
        <div className="mq-track">
          <div className="mq-item">Abroad Study</div><div className="mq-item">Visa Services</div><div className="mq-item">Certificate Attestation</div><div className="mq-item">Flight Tickets</div><div className="mq-item">Insurance</div><div className="mq-item">Education Loans</div><div className="mq-item">PCC</div><div className="mq-item">College Admissions</div><div className="mq-item">Stamp Making</div>
          <div className="mq-item">Abroad Study</div><div className="mq-item">Visa Services</div><div className="mq-item">Certificate Attestation</div><div className="mq-item">Flight Tickets</div><div className="mq-item">Insurance</div><div className="mq-item">Education Loans</div><div className="mq-item">PCC</div><div className="mq-item">College Admissions</div><div className="mq-item">Stamp Making</div>
        </div>
      </div>

      <TrustedBy />



      {/* WHY CHOOSE US SECTION */}
      <motion.section 
        className="mesh-bg" 
        style={{ padding: '120px 52px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ maxWidth: '1450px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '5fr 5fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div className="sec-lbl">Why Choose Us</div>
            <h2 className="sec-title glow-text" style={{ marginBottom: '24px' }}>Your Global Journey,<br/><em>Simplified</em></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', fontSize: '1.25rem', marginBottom: '40px' }}>
              At Wide Horizon, we don’t just provide services — we provide complete solutions. Whether you're a student, professional, or traveler, we ensure a smooth, transparent, and successful process from start to finish.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {[
                { title: 'Personalized counselling', icon: <CheckCircle2 size={18} color="var(--g)" /> },
                { title: 'High visa success rate', icon: <CheckCircle2 size={18} color="var(--g)" /> },
                { title: 'Fast documentation support', icon: <CheckCircle2 size={18} color="var(--g)" /> },
                { title: 'Affordable & transparent pricing', icon: <CheckCircle2 size={18} color="var(--g)" /> }
              ].map((item, i) => (
                <motion.div 
                   key={i} 
                   style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  {item.icon}
                  <span style={{ fontSize: '1.15rem', fontWeight: '500' }}>{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
             style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '550px', aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <img 
                src="/why-choose.png" 
                alt="Why Choose Wide Horizon" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(3, 12, 20, 0.8))' }}></div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="services" id="services" style={{ minHeight: 'auto' }}>
        <div className="svc-header" style={{ marginBottom: '50px' }}>
          <div>
            <div className="sec-lbl">Our Services</div>
            <h2 className="sec-title glow-text">Global<br/><em>Solutions</em></h2>
          </div>
          <p className="svc-subdesc">Everything you need for your global journey — handled with premium expertise and absolute care.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px', maxWidth: '1400px', margin: '0 auto' }}>
          {[
            { 
              name: 'Abroad Study', 
              icon: <GraduationCap size={28} color="var(--b)" />, 
              desc: 'Get admission into top universities across the globe with expert profiling, SOP guidance, and application support.',
              tags: ['Germany', 'UK', 'Canada', 'USA', 'Australia'],
              color: 'rgba(19, 168, 225, 0.15)',
              img: '/services/Abroad Study.png'
            },
            { 
              name: 'Visa Services', 
              icon: <BookText size={28} color="var(--g)" />, 
              desc: 'We simplify complex visa processes with expert documentation and high approval success.',
              tags: ['Student', 'Tourist', 'Business', 'Dependent'],
              color: 'rgba(205, 222, 58, 0.15)',
              img: '/services/Visa Services.png'
            },
            { 
              name: 'Certificate Attestation', 
              icon: <BookText size={32} color="#FFF" />, 
              desc: 'Fast and reliable attestation services for all types of documents like HRD, MEA, Embassy.',
              tags: ['HRD', 'MEA', 'Apostille', 'Notary'],
              color: 'rgba(255, 255, 255, 0.05)',
              img: '/services/Certificate Attestation.png'
            },
            { 
              name: 'Flight Ticketing', 
              icon: <Ticket size={32} color="var(--b)" />, 
              desc: 'Best price deals for domestic and international travel with flexible booking options.',
              tags: ['International', 'Domestic', 'Travel Planning'],
              color: 'rgba(19, 168, 225, 0.12)',
              img: '/services/Flight Ticketing.png'
            },
            { 
              name: 'Insurance Services', 
              icon: <ShieldAlert size={32} color="var(--g)" />, 
              desc: 'Protect your journey with complete insurance coverage for travel, health, and more.',
              tags: ['Travel', 'Health', 'Student'],
              color: 'rgba(205, 222, 58, 0.12)',
              img: '/services/Insurance Services.png'
            },
            { 
              name: 'Loans & Support', 
              icon: <Coins size={28} color="#FFF" />, 
              desc: 'Get financial assistance for education or personal needs with minimal hassle.',
              tags: ['Education', 'Personal', 'Business'],
              color: 'rgba(255, 255, 255, 0.08)',
              img: '/services/Loans & Support.png'
            },
            { 
              name: 'PCC (Police Clearance)', 
              icon: <Fingerprint size={28} color="var(--b)" />, 
              desc: 'Quick processing for all countries with proper documentation.',
              tags: ['Verification', 'Global', 'Documentation'],
              color: 'rgba(19, 168, 225, 0.15)',
              img: '/services/PCC (Police Clearance).png'
            },
            { 
              name: 'All India Admissions', 
              icon: <CheckCircle2 size={28} color="var(--g)" />, 
              desc: 'Secure your future with expert guidance across Indian colleges.',
              tags: ['Medical', 'Engineering', 'Arts', 'Science'],
              color: 'rgba(205, 222, 58, 0.15)',
              img: '/services/All India Admissions.png'
            },
            { 
              name: 'Stamp & Seal Making', 
              icon: <Printer size={28} color="#FFF" />, 
              desc: 'Custom-designed official stamps and seals for businesses.',
              tags: ['Official', 'Custom', 'Commercial'],
              color: 'rgba(255, 255, 255, 0.08)',
              img: '/services/Stamp & Seal Making.png'
            }
          ].map((s, i) => (
            <motion.div 
               key={i} 
               className="group" 
               style={{ 
                 padding: '0', 
                 overflow: 'hidden', 
                 display: 'flex', 
                 flexDirection: 'column', 
                 height: '100%',
                 background: '#59d102',
                 borderRadius: '16px',
                 border: '1px solid rgba(255,255,255,0.1)'
               }}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: (i % 3) * 0.15, duration: 0.6 }}
            >
              <div style={{ width: '100%', height: '220px', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={s.img} 
                  alt={s.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)' }} 
                  className="card-img-scale"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(7, 21, 37, 0.9))' }}></div>
              </div>
              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div>
                    {React.cloneElement(s.icon, { color: '#000', size: 32 })}
                  </div>
                  <div style={{ fontSize: '1.17rem', fontWeight: '800', fontFamily: 'Syne', color: 'rgba(0,0,0,0.1)', letterSpacing: '2px' }}>0{i+1}</div>
                </div>
                <h3 style={{ fontFamily: 'Syne', fontSize: '1.45rem', fontWeight: '800', marginBottom: '14px', letterSpacing: '-0.3px', color: '#000' }}>{s.name}</h3>
                <p style={{ color: 'rgba(0,0,0,0.6)', lineHeight: '1.75', marginBottom: '28px', fontSize: '1.17rem', flex: 1, fontWeight: '500' }}>{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
                  {s.tags.map(t => <span key={t} className="stag" style={{ border: 'none', background: 'rgba(0,0,0,0.05)', fontSize: '0.9rem', padding: '5px 12px', color: 'rgba(0,0,0,0.5)' }}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* EXPERIENCE CAROUSEL SECTION */}
      <section style={{ padding: '100px 0', background: 'var(--dk)', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1450px', margin: '0 auto 50px auto', padding: '0 52px' }}>
          <div className="sec-lbl">Success Stories</div>
          <h2 className="sec-title glow-text">Global <em>Journeys</em></h2>
        </div>
        
        <div style={{ position: 'relative', width: '100vw' }}>
          <motion.div 
            style={{ display: 'flex', gap: '30px', padding: '0 30px' }}
            animate={{ x: [0, -1200] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          >
            {[
              { n: 'Anu Jithin', s: 'Visa Services', d: 'I had a great experience with Wide Horizon. Their team was professional, knowledgeable, and highly supportive throughout the entire process. They provided clear guidance on documentation and requirements, making everything much less stressful.' },
              { n: 'Anjaly Vijayan', s: 'Visa Services', d: 'Great experience with Wide Horizon! Very professional team, friendly support, and fast service. Highly recommended.' },
              { n: 'Anupam Sankar', s: 'Abroad Study', d: 'Wide Horizon has been really helpful in helping me get the admission and was always quick in helping out with all the queries I had.' },
              { n: 'Aromal P', s: 'Abroad Study', d: 'Really good and efficient service. Highly satisfied with the overall experience.' },
              { n: 'Nitha P S', s: 'Abroad Study', d: 'Good experience and very helpful staff. Guided me well through the process.' },
              // Duplicating for seamless loop
              { n: 'Anu Jithin', s: 'Visa Services', d: 'I had a great experience with Wide Horizon. Their team was professional, knowledgeable, and highly supportive throughout the entire process.' },
              { n: 'Anjaly Vijayan', s: 'Visa Services', d: 'Great experience with Wide Horizon! Very professional team, friendly support, and fast service.' },
              { n: 'Anupam Sankar', s: 'Abroad Study', d: 'Wide Horizon has been really helpful in helping me get the admission and was always quick in helping out with all the queries I had.' }
            ].map((exp, i) => (
              <div key={i} className="glass-card" style={{ 
                minWidth: '420px', 
                padding: '35px', 
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <span style={{ fontSize: '1.0rem', color: 'var(--g)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>{exp.s}</span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, j) => <Star key={j} size={10} fill="var(--wh)" stroke="none" />)}
                  </div>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', fontSize: '1.2rem', marginBottom: '25px', minHeight: '100px' }}>
                  {exp.d}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '30px', height: '2px', background: 'var(--b)' }}></div>
                  <span style={{ fontFamily: 'Syne', fontWeight: '800', fontStyle: 'italic', fontSize: '1.15rem' }}>{exp.n}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* POSTERS CAROUSEL */}
        <div style={{ position: 'relative', width: '100vw', marginTop: '60px' }}>
          <motion.div 
            style={{ display: 'flex', gap: '20px', padding: '0 20px' }}
            animate={{ x: [-1200, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            {[
              'ANNA JIMMY.jpeg',
              'ANUPAM.jpeg',
              'AROMAL PUTHOORAM.jpeg',
              'MERLIN LAWRENCE.jpeg',
              'RINCHU GIREESH.jpeg',
              'RIO ROY.jpeg',
              'SHERIN K MARTIN.jpeg',
              // Duplicating for seamless loop
              'ANNA JIMMY.jpeg',
              'ANUPAM.jpeg',
              'AROMAL PUTHOORAM.jpeg',
              'MERLIN LAWRENCE.jpeg',
              'RINCHU GIREESH.jpeg'
            ].map((img, i) => (
              <div key={i} style={{ 
                minWidth: '300px', 
                height: '420px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}>
                <img 
                  src={`/posters/${img}`} 
                  alt="Success Poster" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>









      {/* FINAL CTA SECTION */}
      <section style={{ padding: '100px 52px', background: 'var(--dk)' }}>
         <div className="glass-card" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px', textAlign: 'center', background: 'linear-gradient(to right, rgba(19, 168, 225, 0.05), rgba(205, 222, 58, 0.05))', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="sec-lbl">Start Your Journey Today</div>
            <h2 className="sec-title glow-text" style={{ marginBottom: '24px' }}>Your global future starts with<br/><em>one step.</em> Let us guide you.</h2>
            <div style={{ display: 'flex', gap: '20px', marginTop: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
               <Link to="/contact" className="btn-glow" style={{ padding: '18px 44px' }}>Call Now: +91 79026 21955</Link>
               <Link to="/contact" className="btn-ghost" style={{ fontSize: '1.1rem' }}>Visit Us at Aluva <ChevronRight size={18} /></Link>
            </div>
         </div>
      </section>
    </>
  );
};

export default Home;

