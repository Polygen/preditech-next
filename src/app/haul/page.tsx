// @ts-nocheck
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HaulPage() {
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
          <div className="product-title" style={{color:'var(--accent)'}}>Preditech HAUL</div>
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
          <div className="user-tag">TİCARİ / FİLO</div><h1>Şantiyenin<br/>Beyni.</h1>
          <p className="massive-hero-sub">Ekskavatör, kepçe ve endüstriyel iş makineleri için özel titreşim analizleri. Arıza kaynaklı duruş sürelerini (downtime) bitirin.</p>
          <div style={{fontSize:'140px',fontWeight:900,color:'var(--accent)',opacity:0.05,position:'absolute',top:'30%',left:'50%',transform:'translate(-50%, -50%)'}}>HAUL</div>
          <img src="/assets/images/devices/preditech haul.png" alt="Preditech" className="corp-device-img" />
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="tech-specs-section">
        <div className="container">
          <div style={{padding:'80px 0 40px'}}><h2 style={{fontSize:'48px',letterSpacing:'-1px'}}>Teknik Özellikler.</h2></div>
          <div className="spec-grid">
            <div className="spec-category">İş Makinesi Dinamikleri</div>
            <div className="spec-details">
              <div className="spec-item"><h4>Bağlantı</h4><p>İş makinelerine özel J1939 ve Endüstriyel CAN portları</p></div>
              <div className="spec-item"><h4>PTO ve Motor Saati</h4><p className="mono">Rölanti, aktif çalışma ve hidrolik pompa ölçümü</p></div>
              <div className="spec-item"><h4>Çevresel Dayanım</h4><p>IP69K Tam Su ve Toz yalıtımı, Çamur/Toz koruması</p></div>
              <div className="spec-item"><h4>Hırsızlık Koruması</h4><p>Akıllı uzaktan motor blokajı ve yakıt sensörü desteği</p></div>
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
          <h2 style={{fontSize:'32px',marginBottom:'40px',textAlign:'center'}}>HAUL Modeli S.S.S.</h2>
          <div className="faq-item">
            <div className="faq-question">Soğuk zincir taşımacılığında dorse sıcaklık sensörleri nasıl bağlanır?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Haul modeli, dorse içindeki kablosuz Bluetooth (BLE) sıcaklık ve nem sensörleriyle eşleşir. Ani sıcaklık düşüş/artışlarında doğrudan merkeze acil durum uyarısı geçer.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Yakıt hırsızlığını nasıl engelliyor?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Haul, depo kapağı sensörleri ve CANbus yakıt seviyesi verilerini çapraz analiz eder. Araç rölantideyken veya park halindeyken olağandışı yakıt azalmalarında anında sabotaj alarmı verir.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Dorse eşleştirme (Trailer Matching) nasıl çalışır?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Hangi çekicinin hangi dorseyi aldığını Beacon sensörler aracılığıyla otomatik kaydeder. Yanlış dorse bağlantısında sürücüyü kabin içi buzzer ile uyarır.</div>
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
              <Link href="/kurumsal-satis?device=haul" className="btn btn-primary" style={{width:'100%', justifyContent:'center'}}>Toplu Satış Teklifi Al (Adet: 6.000₺)</Link>
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
