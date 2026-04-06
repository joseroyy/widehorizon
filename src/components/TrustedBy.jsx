import React from 'react';

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
       <div style={{ fontFamily: 'Syne', fontSize: '2.5rem', fontWeight: '800', color: color, marginBottom: '5px' }}>
          {displayValue}{suffix}
       </div>
       <div style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
          {label}
       </div>
    </div>
  );
};

const TrustedBy = () => {
  return (
    <section className="trusted-sec mesh-bg" style={{ padding: '80px 52px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="sec-lbl" style={{ textAlign: 'center' }}>Social Proof</div>
        <h2 className="sec-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Trusted by <br/><em>Thousands</em></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          
          <div className="glass-card" style={{ padding: '30px' }}>
            <div style={{ color: 'var(--g)', fontSize: '1.5rem', marginBottom: '16px' }}>"</div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '20px', fontWeight: '300' }}>
              Wide Horizon made my student visa process incredibly fast and stress-free. Highly expert team in Aluva!
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(19,168,225,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--b)', fontWeight: 'bold' }}>A</div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>Aswin Kumar</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>Student Visa</div>
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '30px' }}>
            <div style={{ color: 'var(--g)', fontSize: '1.5rem', marginBottom: '16px' }}>"</div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '20px', fontWeight: '300' }}>
              From university admission to ticketing, they provided amazing end-to-end guidance. Truly exceptional service.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(205,222,58,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--g)', fontWeight: 'bold' }}>M</div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>Meenakshi V.</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>Abroad Study</div>
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '30px' }}>
            <div style={{ color: 'var(--g)', fontSize: '1.5rem', marginBottom: '16px' }}>"</div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '20px', fontWeight: '300' }}>
              Quickest document attestation I've ever experienced. Very reliable and completely transparent pricing.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.8)', fontWeight: 'bold' }}>R</div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>Rahul Menon</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>Certificate Attestation</div>
              </div>
            </div>
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
          <AnimatedStat value="2000+" label="Clients Served" color="var(--g)" />
          <AnimatedStat value="50+" label="Countries" color="var(--wh)" />
          <AnimatedStat value="8+" label="Years Exp." color="var(--b)" />
        </div>

      </div>
    </section>
  );
};

export default TrustedBy;
