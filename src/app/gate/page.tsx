// @ts-nocheck
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function GatePage() {
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
          <div className="product-title" style={{color:'var(--accent)'}}>Gate</div>
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
          <h1>Tam<br/>Güvenlik.</h1>
          <p className="massive-hero-sub">Lojistik araçları için geliştirilmiş kapı ve dorse sensörü. Yükünüzün ne zaman ve nerede açıldığını saniye saniye merkezden takip edin.</p>
          <div style={{fontSize:'140px',fontWeight:900,color:'var(--accent)',opacity:0.05,position:'absolute',top:'30%',left:'50%',transform:'translate(-50%, -50%)'}}>GATE</div>
          <img src="/assets/images/devices/preditech gate.png" alt="Gate" className="massive-device-img" style={{maxWidth:'450px',marginTop:'20px',filter:'drop-shadow(0 40px 80px rgba(255,215,0,0.15))'}} />
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="tech-specs-section">
        <div className="container">
          <div style={{padding:'80px 0 40px'}}><h2 style={{fontSize:'48px',letterSpacing:'-1px'}}>Teknik Özellikler.</h2></div>
          <div className="spec-grid">
            <div className="spec-category">Sensör ve Güvenlik</div>
            <div className="spec-details">
              <div className="spec-item"><h4>Sensör Tipi</h4><p>Endüstriyel Manyetik Kontak ve Mesafe Sensörü</p></div>
              <div className="spec-item"><h4>Bağlantı Teknolojisi</h4><p className="mono">Bluetooth 5.0 BLE / RF (Titan/Watchdog ile eşleşir)</p></div>
              <div className="spec-item"><h4>Pil Ömrü</h4><p>Dahili pil ile 3+ yıl operasyon süresi</p></div>
              <div className="spec-item"><h4>Dayanıklılık</h4><p>IP67 Su ve Toz Geçirmez</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" style={{background:'var(--surface2)'}}>
        <div className="container">
          <h2 style={{fontSize:'32px',marginBottom:'40px',textAlign:'center'}}>GATE S.S.S.</h2>
          <div className="faq-item">
            <div className="faq-question">Nasıl çalışır?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Gate, dorse veya kargo bölümünün kapılarına yerleştirilen akıllı bir sensördür. Kapının açılıp kapandığı anları saniyesi saniyesine ve GPS konumu ile birlikte Watchdog veya Titan cihazı üzerinden merkeze raporlar.</div>
          </div>
        </div>
      </section>
    </>
  );
}
