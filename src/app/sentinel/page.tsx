'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function SentinelPage() {
  const buyBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const bar = buyBarRef.current;
      if (!bar) return;
      if (window.scrollY > 300) bar.classList.add('visible');
      else bar.classList.remove('visible');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* STICKY BUY BAR */}
      <div className="sticky-buy-bar" id="buyBar" ref={buyBarRef}>
        <div className="container">
          <div className="product-title" style={{color:'var(--accent)'}}>Sentinel</div>
          <div className="actions">
            <span className="price">Yakında</span>
            <Link href="/erken-erisim" className="btn btn-primary">Ön Sipariş</Link>
          </div>
        </div>
      </div>

      {/* MASSIVE HERO */}
      <section className="massive-hero accent-title">
        <div className="particles"></div>
        <div className="container" style={{zIndex:2}}>
          <div className="section-label" style={{justifyContent:'center',marginBottom:'24px'}}>YARDIMCI CİHAZ</div>
          <h1>Yolu<br/>Okuyun.</h1>
          <p className="massive-hero-sub">Yalnızca yolu kaydetmekle kalmaz, aracınızın OBD verilerini anlık olarak videonun üzerine işler. Type-C ile ana cihazınıza tam entegre çalışır.</p>
          <div style={{fontSize:'140px',fontWeight:900,color:'var(--accent)',opacity:0.05,position:'absolute',top:'30%',left:'50%',transform:'translate(-50%, -50%)'}}>SENTINEL</div>
          <img src="/assets/images/devices/preditech sentinel.png" alt="Sentinel" className="massive-device-img" style={{maxWidth:'450px',marginTop:'20px',filter:'drop-shadow(0 40px 80px rgba(255,215,0,0.15))'}} />
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="tech-specs-section">
        <div className="container">
          <div style={{padding:'80px 0 40px'}}><h2 style={{fontSize:'48px',letterSpacing:'-1px'}}>Teknik Özellikler.</h2></div>
          <div className="spec-grid">
            <div className="spec-category">Kamera ve Görüntü</div>
            <div className="spec-details">
              <div className="spec-item"><h4>Çözünürlük</h4><p>4K Ultra HD Ön Kamera, 1080p Araç İçi</p></div>
              <div className="spec-item"><h4>Görüş Açısı</h4><p className="mono">170 Derece Geniş Açı</p></div>
              <div className="spec-item"><h4>OBD Overlay</h4><p>Hız, Devir ve Fren verilerini doğrudan videoya işler</p></div>
              <div className="spec-item"><h4>Gece Görüşü</h4><p>Gelişmiş Sony STARVIS sensör</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" style={{background:'var(--surface2)'}}>
        <div className="container">
          <h2 style={{fontSize:'32px',marginBottom:'40px',textAlign:'center'}}>SENTINEL S.S.S.</h2>
          <div className="faq-item">
            <div className="faq-question">Sentinel{`'`}in farkı nedir?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Sentinel standart bir yol kamerası değildir. Aracın OBD portundan (Preditech ana cihazı üzerinden) gelen anlık hız, devir, frenleme ve G-Kuvveti verilerini canlı olarak videonun üzerine telemetri şeklinde işler.</div>
          </div>
        </div>
      </section>
    </>
  );
}
