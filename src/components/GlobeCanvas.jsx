import React, { useRef, useEffect } from 'react';

const GlobeCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 800;

    const CX = 400, CY = 400, R = 318;
    let angle = 0;
    let animationFrameId;

    const logo = new Image();
    logo.src = '/logo.png';
    let logoLoaded = false;
    logo.onload = () => { logoLoaded = true; };
    
    let glarePos = -400; // Tightened start (logo is 580 wide)
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0, rootMargin: '600px' });
    observer.observe(canvas);

    // Generate dots (Aggressively optimized)
    const dots = [];
    const dotCount = 150; 
    for (let i = 0; i < dotCount; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / dotCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      dots.push({
        phi,
        theta,
        r: Math.random() > 0.93 ? 2.0 : Math.random() > 0.72 ? 1.0 : 0.7,
        bright: Math.random()
      });
    }

    // Generate routes (Aggressively optimized)
    const routes = [];
    for (let i = 0; i < 6; i++) {
        routes.push({
            t1: Math.random() * Math.PI * 2,
            p1: 0.3 + Math.random() * 2.2,
            t2: Math.random() * Math.PI * 2,
            p2: 0.3 + Math.random() * 2.2,
            prog: Math.random(),
            spd: 0.003 + Math.random() * 0.004
        });
    }

    function proj(phi, theta, rot) {
      const x = Math.sin(phi) * Math.cos(theta + rot);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta + rot);
      return { x: CX + x * R, y: CY - y * R, z, vis: z > -0.08 };
    }

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function draw() {
      ctx.clearRect(0, 0, 800, 800);

      // grid
      ctx.strokeStyle = 'rgba(19, 168, 225, 0.7)';
      ctx.lineWidth = 0.6;
      for (let la = 0; la < 180; la += 18) {
        const ph = la * Math.PI / 180;
        ctx.beginPath();
        let f = true;
        for (let lo = 0; lo <= 360; lo += 3) {
          const p = proj(ph, lo * Math.PI / 180, angle);
          if (!p.vis) {
            f = true;
            continue;
          }
          f ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
          f = false;
        }
        ctx.stroke();
      }
      for (let lo = 0; lo < 360; lo += 18) {
        const th = lo * Math.PI / 180;
        ctx.beginPath();
        let f = true;
        for (let la = 0; la <= 180; la += 3) {
          const p = proj(la * Math.PI / 180, th, angle);
          if (!p.vis) {
            f = true;
            continue;
          }
          f ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
          f = false;
        }
        ctx.stroke();
      }

      // logo inside
      if (logoLoaded) {
        ctx.save();
        ctx.globalAlpha = 1.0; // consistently bright
        const logoSize = 580;
        ctx.drawImage(logo, CX - logoSize / 2, CY - logoSize / 2, logoSize, logoSize);
        
        // Glare effect
        ctx.globalCompositeOperation = 'source-atop';
        glarePos += 12; // increased speed for more impact
        if (glarePos > 1200) glarePos = -600; // tighter loop for frequency
        
        const grad = ctx.createLinearGradient(
          CX - logoSize / 2 + glarePos - 200, 
          CY - logoSize / 2, 
          CX - logoSize / 2 + glarePos, 
          CY + logoSize / 2
        );
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(0.5, 'rgba(255,255,255,0.75)'); // Much brighter
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        
        ctx.fillStyle = grad;
        ctx.fillRect(CX - logoSize / 2, CY - logoSize / 2, logoSize, logoSize);
        ctx.restore();
      }

      // dots
      dots.forEach((d) => {
        const p = proj(d.phi, d.theta, angle);
        if (!p.vis) return;
        const br = 0.3 + d.bright * 0.7;
        const isG = d.phi > 1 && d.phi < 2.5 && (d.theta % 1.6 < 0.8);
        ctx.beginPath();
        ctx.arc(p.x, p.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = isG ? `rgba(205, 222, 58, ${0.4 + br * 0.6})` : `rgba(19, 168, 225, ${0.4 + br * 0.6})`;
        ctx.fill();
      });

      // routes
      routes.forEach((r) => {
        r.prog += r.spd;
        if (r.prog > 1.4) {
          r.prog = 0;
          r.t1 = Math.random() * Math.PI * 2;
          r.p1 = 0.3 + Math.random() * 2.2;
          r.t2 = Math.random() * Math.PI * 2;
          r.p2 = 0.3 + Math.random() * 2.2;
        }
        const t = Math.min(r.prog, 1), steps = 40;
        ctx.beginPath();
        let f = true;
        for (let i = 0; i <= steps * t; i++) {
          const s = i / steps, phi = lerp(r.p1, r.p2, s), theta = lerp(r.t1, r.t2, s);
          const p = proj(phi, theta, angle);
          if (!p.vis) {
            f = true;
            continue;
          }
          f ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
          f = false;
        }
        const fade = 1 - Math.abs(r.prog - 0.7) / 0.7;
        ctx.strokeStyle = `rgba(205, 222, 58, ${Math.max(0, 1.0 * fade)})`;
        ctx.lineWidth = 1.1;
        ctx.stroke();
        
        if (t >= 1 && r.prog < 1.4) {
          const tail = (r.prog - 1) / 0.4;
          const p = proj(lerp(r.p1, r.p2, 1 - tail * 0.08), lerp(r.t1, r.t2, 1 - tail * 0.08), angle);
          if (p.vis) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(205, 222, 58, 0.9)';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(205, 222, 58, 0.12)';
            ctx.fill();
          }
        }
      });

      // rim
      const rim = ctx.createRadialGradient(CX, CY, R - 10, CX, CY, R + 10);
      rim.addColorStop(0, 'rgba(19, 168, 225, 0.85)');
      rim.addColorStop(1, 'rgba(19, 168, 225, 0)');
      ctx.strokeStyle = rim;
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.stroke();
      
      angle += 0.0038;
      if (isVisible) {
        animationFrameId = requestAnimationFrame(draw);
      } else {
        setTimeout(() => {
          if (isVisible) draw();
          else animationFrameId = requestAnimationFrame(draw); 
        }, 500);
      }
    }

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="gc" ref={canvasRef}></canvas>;
};

export default GlobeCanvas;
