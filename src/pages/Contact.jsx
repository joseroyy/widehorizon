import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [showPhone, setShowPhone] = useState(false);
  const phoneNumber = "+91 79026 21955";

  const handlePhoneClick = () => {
    setShowPhone(true);
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      window.location.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
    }
  };

  const [btnText, setBtnText] = useState('Send Enquiry →');
  const [btnStyle, setBtnStyle] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnText('Sending...');
    
    const formData = new FormData(e.target);
    formData.append("access_key", "6ae3c01b-5995-4292-9b43-5eaa62baaf92");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();

      if (result.success) {
        setBtnText('Message Sent ✓');
        setBtnStyle({ background: 'linear-gradient(135deg,#cdde3a,#a8ba10)' });
        e.target.reset();
        setTimeout(() => {
          setBtnText('Send Enquiry →');
          setBtnStyle({});
        }, 5000);
      } else {
        setBtnText('Error ✗');
        setBtnStyle({ background: '#ff4444' });
        setTimeout(() => {
          setBtnText('Send Enquiry →');
          setBtnStyle({});
        }, 3000);
      }
    } catch (error) {
      setBtnText('Error ✗');
      setBtnStyle({ background: '#ff4444' });
      setTimeout(() => {
        setBtnText('Send Enquiry →');
        setBtnStyle({});
      }, 3000);
    }
  };

  return (
    <>
      <section className="contact-sec" id="contact" style={{ paddingTop: '160px' }}>
        <div className="cg">
          <motion.div 
            className="cl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="sec-lbl">Let’s Connect</div>
            <h2 className="sec-title">Start Your Journey<br/><em>With Confidence</em></h2>
            <p style={{ marginTop: '20px', fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)' }}>
              Have questions? Need guidance? Our experts are ready to help you choose the right path and turn your global dreams into reality.
            </p>
            
            <div className="cinfo" style={{ marginTop: '50px' }}>
              <motion.div 
                className="glass-card" 
                style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '16px' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div style={{ padding: '12px', background: 'rgba(19, 168, 225, 0.1)', borderRadius: '10px', color: 'var(--b)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="ci-lbl" style={{ marginBottom: '6px' }}>Office Address</div>
                  <div className="ci-v" style={{ fontSize: '1.2rem' }}>Parambil Buildings, First floor<br/>Uc college p.o, Aluva<br/>Pincode 683102</div>
                </div>
              </motion.div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                 <motion.div 
                   className="glass-card" 
                   style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3, duration: 0.5 }}
                 >
                   <div style={{ padding: '12px', background: 'rgba(205, 222, 58, 0.1)', borderRadius: '10px', color: 'var(--g)' }}>
                     <Phone size={24} />
                   </div>
                   <div>
                     <div className="ci-lbl" style={{ marginBottom: '6px' }}>Phone</div>
                     <div className="ci-v">
                       {showPhone ? (
                         <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--wh)' }}>{phoneNumber}</a>
                       ) : (
                         <button onClick={handlePhoneClick} style={{ background: 'var(--b)', color: '#fff', border: 'none', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '800' }}>Call / Show Number</button>
                       )}
                     </div>
                   </div>
                 </motion.div>
                 
                 <motion.div 
                   className="glass-card" 
                   style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.4, duration: 0.5 }}
                 >
                   <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px', color: '#FFF' }}>
                     <Mail size={24} />
                   </div>
                   <div>
                     <div className="ci-lbl" style={{ marginBottom: '6px' }}>Email Address</div>
                     <div className="ci-v"><a href="mailto:info@widehorizonoverseas.com" style={{ fontSize: '1.15rem', color: '#fff', textShadow: '0 0 15px rgba(255,255,255,0.2)', fontWeight: '500' }}>info@widehorizonoverseas.com</a></div>
                   </div>
                 </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="cform"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="cform-title">Send Us a <span>Message</span></div>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.4)', marginBottom: '30px' }}>Tell us your requirement and we’ll get back to you quickly.</p>
            <form onSubmit={handleSubmit}>
              <div className="frow">
                <div className="fg"><label>Full Name</label><input type="text" name="name" placeholder="Your name" required /></div>
                <div className="fg"><label>Phone Number</label><input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required /></div>
              </div>
              <div className="fg"><label>Email Address</label><input type="email" name="email" placeholder="you@email.com" required /></div>
              <div className="fg">
                <label>Service Required</label>
                <select name="service" required>
                  <option value="">Select a service...</option>
                  <option value="Abroad Study">🎓 Abroad Study</option>
                  <option value="Visa Services">🛂 Visa Services</option>
                  <option value="Certificate Attestation">📄 Certificate Attestation</option>
                  <option value="Flight Ticketing">✈️ Flight Ticketing</option>
                  <option value="Insurance">🛡️ Insurance Services</option>
                  <option value="Loans">💰 Loans & Financial Support</option>
                  <option value="PCC">🧾 PCC (Police Clearance)</option>
                  <option value="Stamp / Seal Making">🔖 Stamp & Seal Making</option>
                  <option value="All India College Admission">🏫 All India College Admissions</option>
                </select>
              </div>
              <div className="fg"><label>Message</label><textarea name="message" placeholder="Tell us more about your requirements..." required></textarea></div>
              <button type="submit" className="sbtn" style={btnStyle}>
                <span className="sbtn-txt" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  {btnText} {btnText.includes('Send') && <Send size={16} />}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
        
        {/* Interactive Location Card */}
        <div style={{ marginTop: '80px', maxWidth: '1450px', margin: '80px auto 0' }}>
           <motion.div 
              className="glass-card" 
              style={{ padding: '30px', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
           >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                 <div>
                    <div className="sec-lbl" style={{ marginBottom: '5px' }}>Visit Us</div>
                    <h3 style={{ fontFamily: 'Syne', fontSize: '1.8rem', fontWeight: '800' }}>Office <span style={{ color: 'var(--b)' }}>Location</span></h3>
                 </div>
                 <a 
                   href="https://maps.app.goo.gl/p7G5YByQUn6A6Y2Y7" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{ 
                     background: 'rgba(255,255,255,0.05)', 
                     border: '1px solid rgba(255,255,255,0.1)', 
                   padding: '12px 24px', 
                    borderRadius: '100px', 
                    color: 'var(--wh)', 
                    fontSize: '0.9rem', 
                    fontWeight: '700', 
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}
                  className="btn-hover-glow"
                >
                  Open in Maps ↗
                </a>
             </div>
             
             <motion.div 
                 style={{ 
                    height: 'clamp(300px, 50vh, 450px)', 
                    width: '100%', 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    border: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(0,0,0,0.2)'
                 }}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
             >
                <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.9137537367375!2d76.3262696759714!3d10.126058071295287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0808cf7051a86b%3A0x6b63ca043fba8e67!2sUnion%20Christian%20College%2C%20Aluva!5e1!3m2!1sen!2sin!4v1743954600000!5m2!1sen!2sin" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(1.2) opacity(0.85)' }} 
                   allowFullScreen="" 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade">
                </iframe>
             </motion.div>
             
             <div style={{ marginTop: '30px', display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <MapPin size={18} color="var(--g)" />
                   <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>Near UC College campus entrance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <MapPin size={18} color="var(--b)" />
                   <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>Available 9:00 AM — 6:00 PM</span>
                </div>
             </div>
          </motion.div>
       </div>
      </section>
    </>
  );
};

export default Contact;
