import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Target, Rocket, Globe, Zap, Users, Award, CheckCircle2 } from 'lucide-react';

const AnimatedStat = ({ value, label, color }) => {
  const [displayValue, setDisplayValue] = React.useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  React.useEffect(() => {
    let animationFrame;
    let timeoutId;
    
    const startAnimation = () => {
      let startTime = null;
      const duration = 2000;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function for smoother finish
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(easedProgress * numericValue));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          timeoutId = setTimeout(() => {
            setDisplayValue(0);
            startAnimation();
          }, 4000);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
    };

    startAnimation();

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeoutId);
    };
  }, [numericValue]);

  return (
    <div style={{ textAlign: 'center' }}>
       <div style={{ fontSize: '2.8rem', fontWeight: '800', color: color, fontFamily: 'Syne', lineHeight: 1 }}>
          {displayValue}{suffix}
       </div>
       <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '3px', color: 'rgba(255,255,255,0.3)', marginTop: '14px' }}>
          {label}
       </div>
    </div>
  );
};

const About = () => {
  const [showPhone, setShowPhone] = useState(false);
  const phoneNumber = "+91 79026 21955";

  const handlePhoneClick = () => {
    setShowPhone(true);
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      window.location.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
    }
  };

  return (
    <>
      <Helmet>
        <title>About Wide Horizon Overseas | Study Abroad Consultants in Aluva</title>
        <meta name="description" content="Learn about Wide Horizon Overseas, Aluva's trusted global consultancy. Guided by Vidya K P, we help students navigate international education and visas." />
        <link rel="canonical" href="https://www.widehorizonoverseas.com/about" />
      </Helmet>
      <motion.section 
        className="why-sec mesh-bg" 
        id="why" 
        style={{ paddingTop: '160px', minHeight: 'auto' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="globe-wrap">
          <div className="orb"><div className="orb-d"></div></div>
          <div className="orb2"><div className="orb-d2"></div></div>
          <svg viewBox="0 0 400 400" fill="none" role="img" aria-labelledby="about-svg-title about-svg-desc">
            <title id="about-svg-title">Wide Horizon Logo and Mission</title>
            <desc id="about-svg-desc">Visual representation of Wide Horizon's global consultancy services with the company logo at the center.</desc>
            <defs>
              <radialGradient id="gg" cx="38%" cy="32%">
                <stop offset="0%" stopColor="#1fc0f0" stopOpacity=".55" />
                <stop offset="100%" stopColor="#030c14" stopOpacity=".5" />
              </radialGradient>
              <clipPath id="cc"><circle cx="200" cy="200" r="178" /></clipPath>
            </defs>
            <circle cx="200" cy="200" r="178" fill="#071525" />
            <circle cx="200" cy="200" r="178" fill="url(#gg)" />
            <g clipPath="url(#cc)">
              <path d="M80 140 Q130 90 200 110 Q272 130 298 180 Q316 224 285 260 Q248 300 196 298 Q138 296 100 256 Q58 214 80 140Z" fill="#cdde3a" opacity=".88" />
              <path d="M208 68 Q248 74 270 106 Q280 130 260 148 Q236 136 220 112Z" fill="#b5cc1e" opacity=".65" />
              <image href="/logo.png" x="100" y="100" width="200" height="200" opacity="0.9" />
            </g>
            <circle cx="200" cy="200" r="178" fill="none" stroke="#13a8e1" strokeWidth="6" />
            <circle cx="200" cy="200" r="178" fill="none" stroke="#cdde3a" strokeWidth="2" strokeDasharray="22 12" opacity=".28" />
          </svg>
        </div>
        <div className="why-txt">
          <div className="sec-lbl">Who We Are</div>
          <h2 className="sec-title glow-text">One Roof.<br /><em>Endless Opportunities.</em></h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginTop: '20px' }}>
            Wide Horizon is a trusted global consultancy based in Aluva, helping students and professionals achieve international success.
            We combine local expertise with global knowledge to deliver seamless services in abroad education, visa processing, documentation, and financial assistance.
          </p>
          <div className="why-pts" style={{ marginTop: '40px' }}>
            <div className="res-grid-1-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
               <motion.div 
                  className="glass-card" 
                  style={{ padding: '24px' }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
               >
                  <Target size={24} color="var(--g)" style={{ marginBottom: '16px' }} />
                  <h4 style={{ fontFamily: 'Syne', marginBottom: '8px' }}>Our Mission</h4>
                  <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.4)', lineHeight: '1.6' }}>
                    To simplify global opportunities and make international dreams accessible to everyone through honest, transparent, and expert guidance.
                  </p>
               </motion.div>
               <motion.div 
                  className="glass-card" 
                  style={{ padding: '24px' }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
               >
                  <Rocket size={24} color="var(--b)" style={{ marginBottom: '16px' }} />
                  <h4 style={{ fontFamily: 'Syne', marginBottom: '8px' }}>Our Vision</h4>
                  <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.4)', lineHeight: '1.6' }}>
                    To become Kerala’s most trusted and result-driven global service provider, transforming lives through international exposure.
                  </p>
               </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
         className="res-padding"
         style={{ padding: '100px 52px' }}
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 1 }}
      >
         <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
            <div className="sec-lbl">Why We Stand Out</div>
            <h2 className="sec-title glow-text" style={{ marginBottom: '50px' }}>The Wide Horizon<br/><em>Advantage</em></h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
               {[
                 { title: 'Global Reach, Local Understanding', icon: <Globe size={24} />, desc: 'We bridge the gap between local aspirations and international requirements.' },
                 { title: 'Fast Processing & Accurate Documentation', icon: <Zap size={24} />, desc: 'Minimized delays with high-precision document handling and visa support.' },
                 { title: 'Transparent & Trusted Service', icon: <ShieldCheck size={24} />, desc: 'No hidden costs. No false promises. Just honest, expert guidance.' },
                 { title: 'Student-Centric Approach', icon: <Users size={24} />, desc: 'Every counseling session is tailored to the individual goals of our students.' }
               ].map((item, i) => (
                 <motion.div 
                    key={i} 
                    className="glass-card" 
                    style={{ padding: '30px' }}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                 >
                    <div style={{ color: i % 2 === 0 ? 'var(--b)' : 'var(--g)', marginBottom: '20px' }}>{item.icon}</div>
                    <h4 style={{ fontFamily: 'Syne', fontSize: '1.1rem', marginBottom: '12px' }}>{item.title}</h4>
                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.4)', lineHeight: '1.6' }}>{item.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </motion.section>

      <motion.section 
        className="dir-sec silk-bg res-padding" 
        style={{ display: 'flex', flexDirection: 'column', padding: '120px 52px' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ maxWidth: '1450px', width: '100%', margin: '0 auto' }}>
          <div className="sec-lbl">The Visionary Mind</div>
          <motion.h2 
             className="sec-title glow-text" 
             style={{ marginBottom: '80px' }}
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
          >Beyond Boundaries, <em>Into Futures</em></motion.h2>
          
          <div className="res-grid-1-2" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '40px', alignItems: 'start' }}>
            
            {/* LEFT: Identity Card */}
            <motion.div 
               style={{ position: 'relative' }}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
               <div style={{ 
                  aspectRatio: '1/1.2', 
                  background: 'rgba(19, 168, 225, 0.04)', 
                  borderRadius: '32px', 
                  overflow: 'hidden',
                  boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(19, 168, 225, 0.15)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%'
               }}>
                  <div style={{ 
                     position: 'absolute', fontSize: '25rem', fontFamily: 'Syne', fontWeight: '900', 
                     color: 'rgba(255,255,255,0.012)', userSelect: 'none', pointerEvents: 'none'
                  }}>WH</div>

                  <div className="glass-card" style={{ 
                     padding: '50px 40px', backdropFilter: 'blur(40px)', background: 'rgba(10, 30, 50, 0.65)',
                     border: '1px solid rgba(19,168,225,0.3)', borderRadius: '24px',
                     textAlign: 'center', position: 'relative', zIndex: 2
                  }}>
                     <div style={{ fontSize: '0.75rem', letterSpacing: '6px', textTransform: 'uppercase', color: 'var(--b)', marginBottom: '16px', fontWeight: '800' }}>Directorial Insight</div>
                     <h3 className="res-title" style={{ fontFamily: 'Syne', fontSize: '3rem', fontWeight: '800', lineHeight: 1.0, marginBottom: '24px' }}>
                        Vidya <br/><span style={{ color: 'var(--g)' }}>K P</span>
                     </h3>
                     <div style={{ width: '40px', height: '2px', background: 'var(--g)', margin: '0 auto 30px' }}></div>
                     
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                        <div style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', fontWeight: '400' }}>Managing Director</div>
                        <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
                           <span style={{ color: 'var(--b)' }}>📍</span> UC College, Aluva
                        </div>
                      </div>

                     <div style={{ display: 'flex', gap: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        {showPhone ? (
                          <>
                            <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} style={{ color: 'var(--wh)', fontSize: '1.2rem', fontWeight: '800', textDecoration: 'none' }}>{phoneNumber}</a>
                            <a href="mailto:info@widehorizonoverseas.com" style={{ color: 'var(--g)', fontSize: '1.2rem', textDecoration: 'none' }}>✉️</a>
                          </>
                        ) : (
                          <button onClick={handlePhoneClick} style={{ background: 'var(--b)', color: '#fff', border: 'none', padding: '10px 22px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '800' }}>Call / Show Number</button>
                        )}
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* RIGHT: Narrative */}
            <motion.div 
               style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
               <div style={{ background: 'rgba(19, 168, 225, 0.03)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(19, 168, 225, 0.1)' }}>
                  <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.9', fontSize: '1.4rem', fontWeight: '300' }}>
                    Vidya K P believes that every individual has a unique story and potential. Her mission is to provide the right direction, support, and opportunities to succeed on a global stage.
                  </p>
               </div>

               <div className="res-grid-1-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                  <div className="glass-card" style={{ padding: '32px', borderLeft: '4px solid var(--g)' }}>
                     <h4 style={{ fontFamily: 'Syne', color: 'var(--g)', marginBottom: '16px', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>Philosophy</h4>
                     <p style={{ fontSize: '1.25rem', fontStyle: 'italic', fontWeight: '500', lineHeight: '1.6' }}>“We don’t just process applications — we build futures.”</p>
                  </div>
                  <div className="glass-card" style={{ padding: '32px', borderLeft: '4px solid var(--b)' }}>
                     <h4 style={{ fontFamily: 'Syne', color: 'var(--b)', marginBottom: '16px', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>Background</h4>
                     <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', fontWeight: '300' }}>Over 8+ years of dedicated expertise in global education.</p>
                  </div>
               </div>

               <div style={{ marginTop: '20px' }}>
                  <h3 style={{ fontFamily: 'Syne', fontSize: '1.4rem', marginBottom: '25px', letterSpacing: '-0.5px' }}>Directorial Excellence</h3>
                  <div className="res-grid-1-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                     {[
                       'Personalized Consultations',
                       'High Success Rate',
                       'Global Partner Network',
                       'Ethical Transparency',
                       'Post-Placement Care'
                     ].map((text, i) => (
                       <motion.div 
                          key={i} 
                          style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05, duration: 0.3 }}
                       >
                          <CheckCircle2 size={16} color="var(--g)" />
                          <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)' }}>{text}</span>
                       </motion.div>
                     ))}
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Achievement Bar Footer */}
          <motion.div 
             className="res-grid-2"
             style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '50px 40px', marginTop: '80px' }}
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
          >
             {[
               { v: '2000+', l: 'Success Stories', c: 'var(--wh)' },
               { v: '50+', l: 'Countries Served', c: 'var(--g)' },
               { v: '10+', l: 'Specialized Services', c: 'var(--b)' },
               { v: '8+', l: 'Years of Trust', c: 'var(--wh)' }
             ].map((s, i) => (
               <AnimatedStat key={i} value={s.v} label={s.l} color={s.c} />
             ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
