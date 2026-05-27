'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TitanPage() {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
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

  const handleJoinWaitlist = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      {/* STICKY BUY BAR */}
      <div className="sticky-buy-bar" id="buyBar" ref={buyBarRef}>
        <div className="container">
          <div className="product-title" style={{color:'var(--accent)'}}>Preditech TITAN</div>
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
          <div className="user-tag">TİCARİ / FİLO</div><h1>Ağır Yükler,<br/>Akıllı Kararlar.</h1>
          <p className="massive-hero-sub">Tırlar ve ağır vasıtalar için geliştirilmiş, en zorlu şartlara dayanıklı kestirimci bakım ve telematik sistemi.</p>
          <div style={{fontSize:'140px',fontWeight:900,color:'var(--accent)',opacity:0.05,position:'absolute',top:'30%',left:'50%',transform:'translate(-50%, -50%)'}}>TITAN</div>
          <img src="/assets/images/devices/preditech titan.png" alt="Preditech" className="corp-device-img" />
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="tech-specs-section">
        <div className="container">
          <div style={{padding:'80px 0 40px'}}><h2 style={{fontSize:'48px',letterSpacing:'-1px'}}>Teknik Özellikler.</h2></div>
          <div className="spec-grid">
            <div className="spec-category">Ağır Vasıta Telemetrisi</div>
            <div className="spec-details">
              <div className="spec-item"><h4>Protokol Desteği</h4><p>J1939, J1708, FMS (Tır ve Kamyon Standartları)</p></div>
              <div className="spec-item"><h4>Takograf Uyumu</h4><p className="mono">Uzaktan .ddd indirme ve canlı sürüş süresi ölçümü</p></div>
              <div className="spec-item"><h4>Çalışma Voltajı</h4><p>12V - 24V - 36V Geniş Voltaj Desteği</p></div>
              <div className="spec-item"><h4>Dayanıklılık</h4><p>Titreşime ve darbelere karşı ekstra zırhlı dış kasa</p></div>
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
            <div className="extra-device-card" style={{cursor:'pointer'}} onClick={() => { if (typeof window !== 'undefined') router.push('/gate'); }}>
              <img src="/assets/images/devices/preditech gate.png" alt="Gate" style={{objectFit:'contain',height:'200px'}} />
              <div className="extra-info">
                <h4><Link href="/gate" style={{color:'inherit',textDecoration:'none'}}>GATE</Link> <span className="hub-tag">EKLENTİ</span></h4>
                <p>Lojistik araçları için kapı ve dorse sensörü.</p>
              </div>
            </div>
            <div className="extra-device-card" style={{cursor:'pointer'}} onClick={() => { if (typeof window !== 'undefined') router.push('/signal'); }}>
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
          <h2 style={{fontSize:'32px',marginBottom:'40px',textAlign:'center'}}>TITAN Modeli S.S.S.</h2>
          <div className="faq-item">
            <div className="faq-question">Ağır vasıtalarda (Tır) neden Titan modeli öneriliyor?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Titan, 24V sistemlerle %100 uyumludur ve standart OBD-II yerine J1939 protokollerini destekler. Dorse soğutucu üniteleri gibi ek donanımların verilerini de okuyabilir.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Takograf verilerini uzaktan indirebilir miyim?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Evet, Titan modeli sayesinde filonuzdaki tüm araçların yasal sürüş sürelerini (.ddd formatında) uzaktan, araç ofise gelmeden indirebilirsiniz.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Geofence ve Rota İhlali uyarıları ne kadar hızlı?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Sıfır gecikme (zero-latency) altyapımızla ihlal gerçekleştiği saniye merkez operasyon ekranına ve ilgili yetkiliye anlık bildirim (SMS/Email/Push) iletilir.</div>
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
              <Link href="/kurumsal-satis?device=titan" className="btn btn-primary" style={{width:'100%', justifyContent:'center'}}>Toplu Satış Teklifi Al (Adet: 6.000₺)</Link>
            </div>

            <div className="card" style={{background:'var(--surface2)'}}>
              <h3 style={{fontSize:'24px', marginBottom:'12px'}}>Ücretsiz Bekleme Listesi</h3>
              <p style={{color:'var(--text2)', marginBottom:'24px', fontSize:'15px'}}>Şimdi sadece kayıt olun, resmi satışa çıktığımızda %40 özel indirim kuponunuzu e-posta adresinize gönderelim.</p>
              <div className="newsletter-box" style={{margin:0}}>
                <input type="email" placeholder="E-posta adresiniz" />
                <button onClick={handleJoinWaitlist}>Listeye Katıl</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showToast && (
        <div style={{
          position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
          background: 'var(--success)', color: '#000', padding: '12px 24px', borderRadius: '8px',
          fontWeight: 600, zIndex: 9999, boxShadow: '0 4px 12px rgba(0,255,136,0.3)'
        }}>
          Bekleme listesine eklendiniz! %40 İndirim kodunuz çıkış tarihinde iletilecektir.
        </div>
      )}
    </>
  );
}
