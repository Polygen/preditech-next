// @ts-nocheck
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CursorPage() {
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
          <div className="product-title" style={{color:'var(--accent)'}}>Cursor</div>
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
          <h1>Veriler<br/>Gözünüzün Önünde.</h1>
          <p className="massive-hero-sub">Standart analog saatleri unutun. Racebox veya OBD üzerinden gelen verileri dijital ve keskin bir şekilde anlık olarak sürücüye gösteren akıllı gösterge.</p>
          <div style={{fontSize:'140px',fontWeight:900,color:'var(--accent)',opacity:0.05,position:'absolute',top:'30%',left:'50%',transform:'translate(-50%, -50%)'}}>CURSOR</div>
          <img src="/assets/images/devices/preditech cursor.png" alt="Cursor" className="massive-device-img" style={{maxWidth:'450px',marginTop:'20px',filter:'drop-shadow(0 40px 80px rgba(255,215,0,0.15))'}} />
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="tech-specs-section">
        <div className="container">
          <div style={{padding:'80px 0 40px'}}><h2 style={{fontSize:'48px',letterSpacing:'-1px'}}>Teknik Özellikler.</h2></div>
          <div className="spec-grid">
            <div className="spec-category">Ekran ve Gösterge</div>
            <div className="spec-details">
              <div className="spec-item"><h4>Ekran Tipi</h4><p>Yüksek Parlaklıklı OLED Gösterge</p></div>
              <div className="spec-item"><h4>Gösterge Türleri</h4><p className="mono">AFR, EGR, Boost, Sıcaklık</p></div>
              <div className="spec-item"><h4>Bağlantı</h4><p>Type-C (Racebox veya Ana Cihaz Hub Bağlantısı)</p></div>
              <div className="spec-item"><h4>Tepkime Süresi</h4><p>&lt; 5ms (Anlık yansıma)</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" style={{background:'var(--surface2)'}}>
        <div className="container">
          <h2 style={{fontSize:'32px',marginBottom:'40px',textAlign:'center'}}>CURSOR S.S.S.</h2>
          <div className="faq-item">
            <div className="faq-question">Cursor göstergesi ne işe yarar?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Cursor, doğrudan sürücünün görüş alanına yerleştirilen dijital bir AFR/EGR gösterge panelidir (Gauge). Analog saatlerin aksine, doğrudan Racebox üzerinden okunan kesin değerleri kesintisiz ve şık bir arayüzle sunar.</div>
          </div>
        </div>
      </section>
    </>
  );
}
