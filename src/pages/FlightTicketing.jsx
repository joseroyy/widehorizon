import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Plane, CalendarCheck, ShieldCheck, CreditCard, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const FlightTicketing = () => {
  return (
    <>
      <Helmet>
        <title>International & Domestic Flight Ticketing in Aluva | Wide Horizon</title>
        <meta name="description" content="Get the best prices on international and domestic flight tickets from Aluva, Kerala. Expert booking assistance for students, tourists, and professionals." />
        <link rel="canonical" href="https://www.widehorizonoverseas.com/flight-ticketing" />
      </Helmet>

      <motion.section className="hero" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '0 52px' }}>
          <div className="sec-lbl">Travel Services</div>
          <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.1, marginBottom: '24px', color: 'var(--wh)' }}>
            Hassle-Free Flight Booking in <br/><span style={{ color: 'var(--b)', fontStyle: 'italic', fontFamily: 'Syne' }}>Kerala</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '40px' }}>
            Whether you're a student flying to university for the first time or a family going on vacation, we guarantee the best routes at the most competitive prices.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
             <Link to="/contact" className="btn-glow">Get a Quote</Link>
          </div>
        </div>
      </motion.section>

      <section style={{ padding: '80px 52px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1450px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Student Fares', icon: <Plane size={32} color="var(--g)" />, desc: 'Exclusive extra baggage allowance and discounted fares for international students.' },
              { title: 'Flexible Booking', icon: <CalendarCheck size={32} color="var(--b)" />, desc: 'Easy date changes and cancellation support to give you peace of mind.' },
              { title: 'Best Price Guarantee', icon: <CreditCard size={32} color="var(--g)" />, desc: 'We compare multiple airlines to find you the most cost-effective travel itinerary.' }
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
export default FlightTicketing;
