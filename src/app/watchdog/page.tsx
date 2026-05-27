// @ts-nocheck
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function WatchdogPage() {
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
          <div className="product-title" style={{color:'var(--accent)'}}>Preditech WATCHDOG</div>
          <div className="actions">
            <span className="price">Teklif Alın</span>
            <Link href="/erken-erisim" className="btn btn-primary">Ön Sipariş</Link>
          </div>
        </div>
      </div>

      {/* MASSIVE HERO */}
      <section className="massive-hero accent-title">
        <div className="particles"></div>
        <div className="container" style={{zIndex:2}}>
          <div className="section-label" style={{justifyContent:'center',marginBottom:'24px'}}>YENİ NESİL ÇÖZÜM</div>
          <div className="user-tag">TİCARİ / FİLO</div><h1>Filonuzun<br/>Gözcüsü.</h1>
          <p className="massive-hero-sub">Araçlarınızı 7/24 izleyin. Kestirimci bakım ile yolda kalmaları engelleyin ve filo giderlerinizi minimize edin.</p>
          <div style={{fontSize:'140px',fontWeight:900,color:'var(--accent)',opacity:0.05,position:'absolute',top:'30%',left:'50%',transform:'translate(-50%, -50%)'}}>WATCHDOG</div>
          <img src="/assets/images/devices/preditech watchdog.png" alt="Preditech" className="corp-device-img" />
        </div>
      </section>

      {/* NOTE: watchdog.html has stray closing divs after hero (lines 89-90), we skip those */}

      {/* TECH SPECS */}
      <section className="tech-specs-section">
        <div className="container">
          <div style={{padding:'80px 0 40px'}}><h2 style={{fontSize:'48px',letterSpacing:'-1px'}}>Teknik Özellikler.</h2></div>
          <div className="spec-grid">
            <div className="spec-category">Filo Optimizasyonu</div>
            <div className="spec-details">
              <div className="spec-item"><h4>Bağlantı Teknolojisi</h4><p>4G LTE / 5G Ready Kesintisiz Veri Aktarımı</p></div>
              <div className="spec-item"><h4>GPS Çipi</h4><p className="mono">U-Blox Yüksek Hassasiyetli (1 Metre Sapma)</p></div>
              <div className="spec-item"><h4>Sürücü Analizi</h4><p>Ani fren, ivmelenme ve sert viraj skorlaması</p></div>
              <div className="spec-item"><h4>Dahili Pil</h4><p>Aküsüz durumda bile 12 saat lokasyon iletme</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* APP BENTO GRID (WATCHDOG FİLO) */}
      <section className="app-bento-section">
        <div className="container">
          <div className="app-bento-header">
            <div className="section-label" style={{justifyContent:'center',marginBottom:'24px',color:'var(--accent)'}}>FİLO YÖNETİMİ</div>
            <h2>Yönetim Ekranı.</h2>
            <p>Tüm araçlarınızı tek bir ekrandan kontrol edin. Sürücü skorları, anlık yakıt harcamaları ve API entegrasyonu.</p>
          </div>

          <div className="bento-grid">
            {/* Card 1: Filo Aracı Seçimi */}
            <div className="bento-card bento-col-2">
              <div className="bc-header"><i className="ph-fill ph-car-profile bc-icon"></i><span>Araç Yönetimi</span></div>
              <div className="bc-title">Filo Aracı Seçimi</div>
              <div className="bc-value" style={{fontSize:'24px'}}>34 PRD 2026</div>
              <p style={{color:'var(--text2)', fontSize:'13px', marginTop:'8px'}}>Şasi: WBA33XXXXX0001</p>
              <div className="bc-status-tag online">Watchdog Aktif</div>
            </div>

            {/* Card 2: Yakıt Gideri */}
            <div className="bento-card bento-col-2">
              <div className="bc-header"><i className="ph-fill ph-currency-circle-dollar bc-icon"></i><span>Finansal Rapor</span></div>
              <div className="bc-title">Haftalık Yakıt Gideri</div>
              <div className="bc-value">3.540 <span className="bc-unit">TL</span></div>
              <div className="bc-graph">
                <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <rect x="0" y="20" width="10" height="20" fill="rgba(255,255,255,0.1)" />
                  <rect x="15" y="15" width="10" height="25" fill="rgba(255,255,255,0.1)" />
                  <rect x="30" y="25" width="10" height="15" fill="rgba(255,255,255,0.1)" />
                  <rect x="45" y="10" width="10" height="30" fill="var(--accent)" />
                  <rect x="60" y="20" width="10" height="20" fill="rgba(255,255,255,0.1)" />
                  <rect x="75" y="5" width="10" height="35" fill="rgba(255,255,255,0.1)" />
                  <rect x="90" y="15" width="10" height="25" fill="rgba(255,255,255,0.1)" />
                </svg>
              </div>
            </div>

            {/* Card 3: Anlık Tüketim */}
            <div className="bento-card">
              <div className="bc-header"><i className="ph-fill ph-gas-pump bc-icon"></i><span>Canlı Veri</span></div>
              <div className="bc-title">Anlık Tüketim</div>
              <div className="bc-value">4.4 <span className="bc-unit">L/100km</span></div>
              <div className="bc-status-tag" style={{background:'rgba(0,255,136,0.1)', color:'#00FF88', display:'inline-block', maxWidth:'max-content', marginTop:'12px'}}>Eco Sürüş</div>
            </div>

            {/* Card 4: Optimizasyon Tasarrufu */}
            <div className="bento-card bento-col-3">
              <div className="bc-header"><i className="ph-fill ph-trend-down bc-icon"></i><span>Yapay Zeka Önerisi</span></div>
              <div className="bc-title">Sürüş Optimizasyonu</div>
              <p style={{color:'var(--text2)', fontSize:'14px', marginBottom:'16px'}}>Vites atışları yapay zeka önerisine göre ayarlanırsa motor torku daha verimli kullanılabilir.</p>
              <div style={{display:'flex', gap:'24px', background:'rgba(255,255,255,0.02)', padding:'16px', borderRadius:'12px'}}>
                <div style={{flex:1}}>
                  <div style={{fontSize:'12px', color:'var(--text2)', textTransform:'uppercase'}}>Yakıt Sarfiyatı</div>
                  <div style={{fontSize:'24px', fontWeight:800, color:'#FF4444'}}>12 %</div>
                </div>
                <div style={{width:'1px', background:'rgba(255,255,255,0.05)'}}></div>
                <div style={{flex:1}}>
                  <div style={{fontSize:'12px', color:'var(--text2)', textTransform:'uppercase'}}>Potansiyel Tasarruf</div>
                  <div style={{fontSize:'24px', fontWeight:800, color:'#00FF88'}}>420 ₺</div>
                </div>
              </div>
            </div>

            {/* Card 5: Sürücü Skoru */}
            <div className="bento-card bento-col-2">
              <div className="bc-header"><i className="ph-fill ph-star bc-icon"></i><span>Performans</span></div>
              <div className="bc-title">Sürücü Skoru (Ali Turgut)</div>
              <div className="bc-value" style={{color:'var(--accent)'}}>88 <span className="bc-unit">/100</span></div>
              <div className="bc-progress-bg"><div className="bc-progress-fill" style={{width: '88%'}}></div></div>
              <div style={{display:'flex', justifyContent:'space-between', marginTop:'12px', fontSize:'12px', color:'var(--text2)'}}>
                <span>Frenleme: %95</span>
                <span>İvmelenme: %80</span>
              </div>
            </div>

            {/* Card 6: Plan Durumu */}
            <div className="bento-card bento-col-2">
              <div className="bc-header"><i className="ph-fill ph-shield-check bc-icon"></i><span>Kurumsal API</span></div>
              <div className="bc-title">Plan Durumu</div>
              <div className="bc-value" style={{fontSize:'24px'}}>Kurumsal PRO Plan</div>
              <ul style={{listStyle:'none', color:'var(--text2)', marginTop:'16px', fontSize:'13px', lineHeight:2}}>
                <li><i className="ph-fill ph-check-circle" style={{color:'#00FF88'}}></i> 7/24 Kesintisiz Telemetri</li>
                <li><i className="ph-fill ph-check-circle" style={{color:'#00FF88'}}></i> Web Dashboard Erişimi</li>
                <li><i className="ph-fill ph-check-circle" style={{color:'#00FF88'}}></i> Detaylı Raporlama Sistemi</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* EXTRA DEVICES */}
      <section className="extra-devices">
        <div className="container">
          <div className="section-label" style={{justifyContent:'center',marginBottom:'24px'}}>TİP-C YARDIMCI CİHAZLAR</div>
          <h2 style={{textAlign:'center',marginBottom:'60px'}}>Tam Güvenlik ve Kontrol.</h2>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(350px,1fr))',gap:'32px'}}>
            <div className="extra-device-card" style={{cursor:'pointer'}} onClick={() => { if (typeof window !== 'undefined') window.location.href = '/gate'; }}>
              <img src="/assets/images/devices/preditech gate.png" alt="Gate" style={{objectFit:'contain',height:'200px'}} />
              <div className="extra-info">
                <h4><Link href="/gate" style={{color:'inherit',textDecoration:'none'}}>GATE</Link> <span className="hub-tag">EKLENTİ</span></h4>
                <p>Lojistik araçları için kapı ve dorse sensörü.</p>
              </div>
            </div>
            <div className="extra-device-card" style={{cursor:'pointer'}} onClick={() => { if (typeof window !== 'undefined') window.location.href = '/signal'; }}>
              <img src="/assets/images/devices/preditech signal.png" alt="Signal" style={{objectFit:'contain',height:'200px'}} />
              <div className="extra-info">
                <h4><Link href="/signal" style={{color:'inherit',textDecoration:'none'}}>SIGNAL</Link> <span className="hub-tag">EKLENTİ</span></h4>
                <p>Acil durumlar için sürücü kabininde SOS butonu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" style={{background:'var(--surface2)'}}>
        <div className="container">
          <h2 style={{fontSize:'32px',marginBottom:'40px',textAlign:'center'}}>WATCHDOG Modeli S.S.S.</h2>
          <div className="faq-item">
            <div className="faq-question">Watchdog cihazını kiralık filo araçlarına takabilir miyiz?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Kesinlikle. Gizli montaj imkanı ve dahili bataryası sayesinde cihaz söküldüğünde bile merkeze son konumunu ve sabotaj uyarısını iletir.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Sürücü skorlama sistemi hangi metrikleri baz alır?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Ani hızlanma, sert fren, virajlara hızlı girme ve gereksiz rölanti gibi parametreler 100Hz ivmeölçer ile ölçülüp yapay zeka tarafından 100 üzerinden puanlanır.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Yetkisiz kullanım durumunda motoru nasıl durdururum?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Watchdog, opsiyonel röle bağlantısıyla merkezden gönderilen tek bir komutla (araç güvenli hıza düştüğünde) motor blokajı (Immobilizer) yapabilmektedir.</div>
          </div>
        </div>
      </section>

      {/* WISHLIST & CTA SECTION */}
      <section className="section wishlist-cta-section" style={{background:'linear-gradient(180deg, var(--bg), var(--surface))', borderTop:'1px solid var(--border)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(350px,1fr))',gap:'40px',alignItems:'center'}}>
            <div className="card" style={{background:'rgba(255,215,0,0.05)', borderColor:'var(--accent)'}}>
              <h3 style={{fontSize:'24px', color:'var(--accent)', marginBottom:'12px'}}>Premium Deneyim</h3>
              <p style={{color:'var(--text2)', marginBottom:'24px', fontSize:'15px'}}>Öncelikli teslimat avantajından yararlanın. Erken sipariş vererek Preditech ekosistemine ilk adımı atın.</p>
              <Link href="/kurumsal-satis?device=watchdog" className="btn btn-primary" style={{width:'100%', justifyContent:'center'}}>Toplu Satış Teklifi Al (Adet: 6.000₺)</Link>
            </div>

            <div className="card" style={{background:'var(--surface2)'}}>
              <h3 style={{fontSize:'24px', marginBottom:'12px'}}>Ücretsiz Bekleme Listesi</h3>
              <p style={{color:'var(--text2)', marginBottom:'24px', fontSize:'15px'}}>Şimdi sadece kayıt olun, resmi satışa çıktığımızda %40 özel indirim kuponunuzu e-posta adresinize gönderelim.</p>
              <div className="newsletter-box" style={{margin:0}}>
                <input type="email" placeholder="E-posta adresiniz" />
                <button onClick={() => alert('Bekleme listesine eklendiniz! %40 İndirim kodunuz çıkış tarihinde iletilecektir.')}>Listeye Katıl</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
