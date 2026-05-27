// @ts-nocheck
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function RaceboxPage() {
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
          <div className="product-title" style={{color:'var(--accent)'}}>Racebox</div>
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
          <h1>Pistlerin<br/>Hakimi.</h1>
          <p className="massive-hero-sub">AFR, EGT, Boost ve daha fazlası. Ekstra sensörlerinizi Preditech ekosistemine bağlayan Type-C performans aktarım merkezi.</p>
          <div style={{fontSize:'140px',fontWeight:900,color:'var(--accent)',opacity:0.05,position:'absolute',top:'30%',left:'50%',transform:'translate(-50%, -50%)'}}>RACEBOX</div>
          <img src="/assets/images/devices/preditech racebox.png" alt="Racebox" className="massive-device-img" style={{maxWidth:'450px',marginTop:'20px',filter:'drop-shadow(0 40px 80px rgba(255,215,0,0.15))'}} />
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="tech-specs-section">
        <div className="container">
          <div style={{padding:'80px 0 40px'}}><h2 style={{fontSize:'48px',letterSpacing:'-1px'}}>Teknik Özellikler.</h2></div>
          <div className="spec-grid">
            <div className="spec-category">Bağlantı ve Güç</div>
            <div className="spec-details">
              <div className="spec-item"><h4>Ana Bağlantı</h4><p>Type-C (Preditech PRO/GT ile doğrudan haberleşme)</p></div>
              <div className="spec-item"><h4>Sensör Girişleri</h4><p className="mono">Analog 0-5V / O2 / EGT Portları</p></div>
              <div className="spec-item"><h4>Veri Aktarım Hızı</h4><p>Gerçek zamanlı gecikmesiz aktarım</p></div>
              <div className="spec-item"><h4>Çalışma Voltajı</h4><p className="mono">9V - 16V (OBD Üzerinden Besleme)</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" style={{background:'var(--surface2)'}}>
        <div className="container">
          <h2 style={{fontSize:'32px',marginBottom:'40px',textAlign:'center'}}>RACEBOX S.S.S.</h2>
          <div className="faq-item">
            <div className="faq-question">Racebox tek başına teşhis yapar mı?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Hayır. Racebox bir teşhis cihazı değil, akıllı bir veri aktarım merkezidir (Dock/Hub). Araca eklenen AFR, EGT, Boost gibi harici sensörlerin verilerini toplayarak Preditech ana cihazınıza (PRO, GT) Type-C üzerinden aktarır.</div>
          </div>
        </div>
      </section>
    </>
  );
}
