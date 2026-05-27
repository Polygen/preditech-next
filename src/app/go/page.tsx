'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function GoPage() {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const buyBarRef = useRef<HTMLDivElement>(null);

  const handleJoinWaitlist = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

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
          <div className="product-title">Preditech GO</div>
          <div className="actions">
            <span className="price">950₺</span>
            <Link href="/erken-erisim" className="btn btn-primary">Ön Sipariş</Link>
          </div>
        </div>
      </div>

      {/* MASSIVE HERO */}
      <section className="massive-hero">
        <div className="particles"></div>
        <div className="grid-overlay"></div>
        <div className="container" style={{zIndex:2}}>
          <div className="section-label" style={{justifyContent:'center',marginBottom:'24px'}}>GÜNLÜK SÜRÜCÜNÜN ASİSTANI</div>
          <div className="user-tag">BİREYSEL KULLANICI</div><h1>Aracınızla<br/>Tanışın.</h1>
          <p className="massive-hero-sub">OBD-II portuna saniyeler içinde takın, anlık yakıt tüketimini izleyin, motor hata kodlarını kendi başınıza silin. Güç artık sizin elinizde.</p>
          <div style={{fontSize:'120px',fontWeight:900,color:'var(--text2)',opacity:0.1,position:'absolute',top:'30%',left:'50%',transform:'translate(-50%, -50%)'}}>GO</div>
          <img src="/assets/images/general/predB.png" alt="Preditech Device" className="massive-device-img" />
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="tech-specs-section">
        <div className="container">
          <div style={{padding:'80px 0 40px'}}><h2 style={{fontSize:'48px',letterSpacing:'-1px'}}>Teknik Özellikler.</h2></div>

          <div className="spec-grid">
            <div className="spec-category">Bağlantı ve Sensörler</div>
            <div className="spec-details">
              <div className="spec-item"><h4>Bluetooth</h4><p>Bluetooth 5.0 Low Energy (BLE)</p></div>
              <div className="spec-item"><h4>OBD Desteği</h4><p>ISO 15765-4 (CAN), ISO 14230-4 (KWP2000), ISO 9141-2</p></div>
              <div className="spec-item"><h4>Sensörler</h4><p>Yok (Yalnızca OBD okuma)</p></div>
              <div className="spec-item"><h4>Örnekleme Hızı</h4><p className="mono">1 Hz</p></div>
            </div>
          </div>

          <div className="spec-grid">
            <div className="spec-category">Güç ve Fiziksel</div>
            <div className="spec-details">
              <div className="spec-item"><h4>Çalışma Voltajı</h4><p className="mono">9V - 16V</p></div>
              <div className="spec-item"><h4>Güç Tüketimi (Uyku)</h4><p className="mono">&lt; 3mA (Akü dostu)</p></div>
              <div className="spec-item"><h4>Boyutlar</h4><p>42 x 35 x 22 mm</p></div>
              <div className="spec-item"><h4>Ağırlık</h4><p>38 gram</p></div>
            </div>
          </div>

          <div className="spec-grid">
            <div className="spec-category">Kutu İçeriği</div>
            <div className="spec-details" style={{gridTemplateColumns:'1fr'}}>
              <div className="spec-item">
                <ul style={{listStyle:'none',color:'var(--text2)',lineHeight:2}}>
                  <li>• Preditech GO Cihazı</li>
                  <li>• Hızlı Başlangıç Kılavuzu</li>
                  <li>• 1 Yıllık Preditech App Basic Aboneliği</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* APP BENTO GRID */}
      <section className="app-bento-section">
        <div className="container">
          <div className="app-bento-header">
            <div className="section-label" style={{justifyContent:'center',marginBottom:'24px'}}>PREDITECH APP</div>
            <h2>Avucunuzun İçindeki Güç.</h2>
            <p>Aracınızın motor beynine (ECU) saniyeler içinde bağlanın, kendi arıza kodlarınızı silin ve anlık yakıt tüketimini cebinizden izleyin.</p>
          </div>

          <div className="bento-grid">
            {/* Card 1: ECO Mode */}
            <div className="bento-card bento-col-2 flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{background: 'linear-gradient(135deg, #0d1611 0%, #050806 100%)', border: '1px solid rgba(0, 255, 136, 0.08)'}}>
                  <div className="bc-header"><i className="ph-fill ph-leaf bc-icon" style={{color: '#00FF88'}}></i><span>Güncel Verimlilik</span></div>
                  <div className="bc-title">Sürüş Modu</div>
                  <div className="bc-value" style={{color: '#00FF88'}}>ECO <span className="bc-unit" style={{color: '#00FF88'}}>MODE</span></div>
                  <div className="bc-progress-bg" style={{background: 'rgba(255,255,255,0.04)'}}><div className="bc-progress-fill" style={{width: '85%', background: '#00FF88', boxShadow: '0 0 10px #00FF88'}}></div></div>
                  <div style={{textAlign:'right', fontSize:'12px', color:'rgba(0, 255, 136, 0.6)', marginTop:'8px', fontFamily:'monospace', fontWeight: 700}}>AKTİF</div>
                </div>
                <div className="flip-card-back">
                  <h4><i className="ph-fill ph-leaf"></i> Sürüş Modu</h4>
                  <p>Yakıt verimliliğinizi anlık olarak analiz eder. Sürüş stilinizi çevre dostu (ECO) tüketim aralığında tutarak yakıt tasarrufunuzu maksimuma çıkarır.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Motor Sıcaklığı */}
            <div className="bento-card flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front premium-status-card">
                  <div className="bc-premium-row">
                    <div className="bc-premium-icon"><i className="ph-fill ph-battery-charging" style={{color: '#00ff88'}}></i></div>
                    <div className="bc-premium-info">
                      <div className="bc-premium-title">Motor Sıcaklığı</div>
                      <div className="bc-premium-val">85 <span style={{fontSize: '14px', color: 'var(--text2)', fontWeight: 600}}>°C</span></div>
                      <div className="bc-premium-bar">
                        <div className="bc-premium-bar-fill" style={{width: '75%', background: '#00ff88', boxShadow: '0 0 8px #00ff88'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4><i className="ph-fill ph-battery-charging"></i> Motor Sıcaklığı</h4>
                  <p>Motor soğutma sıvısının anlık sıcaklığını ölçer. İdeal çalışma aralığının korunmasını sağlayarak aşırı ısınma ve hararet riskini engeller.</p>
                </div>
              </div>
            </div>

            {/* Card 3: Araba Marka / Profil */}
            <div className="bento-card flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="bc-header"><i className="ph-fill ph-car-profile bc-icon"></i><span>Bağlı Araç</span></div>
                  <div className="bc-title">Motor Kodu</div>
                  <div className="bc-value" style={{fontSize:'24px'}}>1.6 T-GDI</div>
                  <div className="bc-status-tag online" style={{marginTop: '20px'}}>Go Bağlı</div>
                </div>
                <div className="flip-card-back">
                  <h4><i className="ph-fill ph-car-profile"></i> Bağlı Araç</h4>
                  <p>Preditech GO cihazınızın aracın OBD-II portuna takılı ve Bluetooth üzerinden uygulamanıza kesintisiz olarak bağlı olduğunu doğrular.</p>
                </div>
              </div>
            </div>

            {/* Card 4: Kritik Arıza Uyarısı (Alert) */}
            <div className="bento-card bento-col-2 bento-alert">
              <i className="ph-fill ph-warning bc-icon"></i>
              <div className="bc-title" style={{color:'#FF4444', letterSpacing:'2px', fontWeight:800}}>KRİTİK SEVİYE</div>
              <div className="bc-value">P0106</div>
              <div style={{color:'var(--accent)', fontWeight:700, marginTop:'12px', letterSpacing:'1px'}}>MOTOR YÖNETİMİ</div>
              <p>Emme Manifoldu Mutlak Basınç Performans Sorunu</p>
            </div>

            {/* Card 5: Anlık Tüketim */}
            <div className="bento-card bento-col-2 flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="bc-header"><i className="ph-fill ph-gas-pump bc-icon"></i><span>Optimizasyon</span></div>
                  <div className="bc-title">Anlık Tüketim</div>
                  <div className="bc-value">4.4 <span className="bc-unit">L/100km</span></div>
                  <div className="bc-graph">
                    <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M0,35 Q10,32 20,34 T40,25 T60,28 T80,18 T100,12" fill="none" stroke="var(--accent)" strokeWidth="0.8" strokeLinecap="round"/>
                      <path d="M0,35 Q10,32 20,34 T40,25 T60,28 T80,18 T100,12 L100,40 L0,40 Z" fill="rgba(249,212,35,0.08)" />
                    </svg>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4><i className="ph-fill ph-gas-pump"></i> Anlık Tüketim</h4>
                  <p>ECU enjeksiyon sürelerinden hesaplanan, o anki anlık yakıt sarfiyatınızdır. Gaz pedalı tepkilerinizi ayarlamanıza imkan tanır.</p>
                </div>
              </div>
            </div>

            {/* Card 6: Hız Grafiği */}
            <div className="bento-card flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{overflow: 'hidden', borderRadius: '20px'}}>
                  <div className="bc-header"><i className="ph-fill ph-gauge bc-icon"></i><span>Telemetri</span></div>
                  <div className="bc-title">Hızınız</div>
                  <div className="bc-value">110 <span className="bc-unit">km/h</span></div>
                </div>
                <div className="flip-card-back">
                  <h4><i className="ph-fill ph-gauge"></i> Hızınız</h4>
                  <p>Sürüş boyunca anlık hız değişimlerinizi yüksek sıklıklı ince çizgilerle göstererek hızlanma kararlılığınızı raporlar.</p>
                </div>
              </div>
            </div>

            {/* Card 8: Akü Voltajı */}
            <div className="bento-card flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front premium-status-card" style={{background: 'linear-gradient(135deg, #0f1316 0%, #050708 100%)', border: '1px solid rgba(0, 191, 255, 0.08)'}}>
                  <div className="bc-premium-row">
                    <div className="bc-premium-icon"><i className="ph-fill ph-lightning" style={{color: '#00bfff', filter: 'drop-shadow(0 0 8px rgba(0, 191, 255, 0.3))'}}></i></div>
                    <div className="bc-premium-info">
                      <div className="bc-premium-title">Akü Voltajı</div>
                      <div className="bc-premium-val" style={{color: '#00bfff'}}>13.8 <span style={{fontSize: '14px', color: 'var(--text2)', fontWeight: 600}}>V</span></div>
                      <div className="bc-premium-bar">
                        <div className="bc-premium-bar-fill" style={{width: '86%', background: '#00bfff', boxShadow: '0 0 8px #00bfff'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4><i className="ph-fill ph-lightning"></i> Akü Voltajı</h4>
                  <p>Aracınızın alternatörünün ürettiği şarj voltajını anlık ölçer. Akünüzün ömrünü ve şarj dinamosunun sağlığını kontrol altında tutar.</p>
                </div>
              </div>
            </div>

            {/* Card 8b: Buji Sağlığı */}
            <div className="bento-card flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front premium-status-card">
                  <div className="bc-premium-row">
                    <div className="bc-premium-icon"><i className="ph-fill ph-lightning" style={{color: '#00ff88'}}></i></div>
                    <div className="bc-premium-info">
                      <div className="bc-premium-title">Buji Sağlığı</div>
                      <div className="bc-premium-val">15 <span style={{fontSize: '14px', color: 'var(--text2)', fontWeight: 600}}>% Yıpranma</span></div>
                      <div className="bc-premium-bar">
                        <div className="bc-premium-bar-fill" style={{width: '15%', background: '#00ff88', boxShadow: '0 0 8px #00ff88'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4><i className="ph-fill ph-lightning"></i> Buji Sağlığı</h4>
                  <p>Ateşleme sistemi verimliliğini ölçerek bujilerinizin ne kadar yıprandığını gösterir ve olası güç kayıplarını engeller.</p>
                </div>
              </div>
            </div>

            {/* Card 8c: Şanzıman Sağlığı */}
            <div className="bento-card flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front premium-status-card">
                  <div className="bc-premium-row">
                    <div className="bc-premium-icon"><i className="ph-fill ph-gear" style={{color: '#F9D423'}}></i></div>
                    <div className="bc-premium-info">
                      <div className="bc-premium-title">Şanzıman Sağlığı</div>
                      <div className="bc-premium-val">42 <span style={{fontSize: '14px', color: 'var(--text2)', fontWeight: 600}}>% Yıpranma</span></div>
                      <div className="bc-premium-bar">
                        <div className="bc-premium-bar-fill" style={{width: '42%', background: '#F9D423', boxShadow: '0 0 8px #F9D423'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4><i className="ph-fill ph-gear"></i> Şanzıman Sağlığı</h4>
                  <p>Şanzıman devir değişimlerindeki mekanik vuruntuları analiz ederek kavrama ömrünüzü tahmin eder.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXTRA DEVICES */}
      <section className="extra-devices">
        <div className="container">
          <div className="section-label" style={{justifyContent:'center',marginBottom:'24px'}}>TİP-C YARDIMCI CİHAZLAR</div>
          <h2 style={{textAlign:'center',marginBottom:'60px'}}>Daha Fazlasını İsteyenlere.</h2>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'32px'}}>
            <div className="extra-device-card" style={{cursor:'pointer'}} onClick={() => { if (typeof window !== 'undefined') router.push('/racebox'); }}>
              <img src="/assets/images/devices/preditech racebox.png" alt="Racebox" style={{objectFit:'contain'}} />
              <div className="extra-info">
                <h4><Link href="/racebox" style={{color:'inherit',textDecoration:'none'}}>RACEBOX</Link> <span className="hub-tag">EKLENTİ</span></h4>
                <p>Sensör okumalarınızı tek ekranda toplayan performans HUB&apos;ı. Type-C ile bağlanır.</p>
                <div style={{fontWeight:700, color:'var(--text)', marginTop:'8px', fontSize:'16px'}}>3.500₺</div>
              </div>
            </div>
            <div className="extra-device-card" style={{cursor:'pointer'}} onClick={() => { if (typeof window !== 'undefined') router.push('/sentinel'); }}>
              <img src="/assets/images/devices/preditech sentinel.png" alt="Sentinel" style={{objectFit:'contain'}} />
              <div className="extra-info">
                <h4><Link href="/sentinel" style={{color:'inherit',textDecoration:'none'}}>SENTINEL</Link> <span className="hub-tag">EKLENTİ</span></h4>
                <p>OBD verilerini video üzerine yazan 4K akıllı Dashcam.</p>
                <div style={{fontWeight:700, color:'var(--text)', marginTop:'8px', fontSize:'16px'}}>5.500₺</div>
              </div>
            </div>
            <div className="extra-device-card" style={{cursor:'pointer'}} onClick={() => { if (typeof window !== 'undefined') router.push('/cursor'); }}>
              <img src="/assets/images/devices/preditech cursor.png" alt="Cursor" style={{objectFit:'contain'}} />
              <div className="extra-info">
                <h4><Link href="/cursor" style={{color:'inherit',textDecoration:'none'}}>CURSOR</Link> <span className="hub-tag">EKLENTİ</span></h4>
                <p>AFR ve EGR verilerini dijital olarak gösteren akıllı gösterge (Gauge).</p>
                <div style={{fontWeight:700, color:'var(--text)', marginTop:'8px', fontSize:'16px'}}>2.200₺</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" style={{background:'var(--surface2)'}}>
        <div className="container">
          <h2 style={{fontSize:'32px',marginBottom:'40px',textAlign:'center'}}>GO Modeli S.S.S.</h2>
          <div className="faq-item">
            <div className="faq-question">Aracımın garantisini bozar mı?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Hayır. Preditech cihazları aracınızın beynine (ECU) yazılım atmaz veya kalıcı bir değişiklik yapmaz. Sadece &quot;okuma&quot; (Read-only) protokolleri üzerinden veri çektiği için hiçbir markanın resmi garantisini etkilemez.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">GO modeli ile PRO modelinin farkı nedir?<span className="faq-icon">+</span></div>
            <div className="faq-answer">GO modeli standart bir arıza okuma (OBD) cihazıdır. Sadece halihazırda oluşmuş elektronik arıza kodlarını (DTC) gösterir. PRO modelinde ise 100Hz IMU (Titreşim) sensörü ve yapay zeka bulunur; bu sayede arıza henüz kod olarak ECU&apos;ya düşmeden haftalar önce mekanik titreşimden tespit edilebilir.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Akü tüketimi nasıl?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Cihazlarımızda ultra düşük güç tüketen (3mA altı) akıllı uyku modu mevcuttur. Aracınızı stop ettiğinizde cihaz uykuya geçer, aylar sonra bile akünüzü bitirmez.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Kurulumu ben yapabilir miyim?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Evet! Aracınızın direksiyonunun altında yer alan standart OBD-II portuna cihazı bir USB bellek takar gibi takmanız yeterlidir. Hiçbir usta veya alet gerekmez, sadece 5 saniyenizi alır.</div>
          </div>
          <div className="faq-item">
            <div className="faq-question">Arıza kodlarını kendim silebilecek miyim?<span className="faq-icon">+</span></div>
            <div className="faq-answer">Kesinlikle. Uygulama üzerinden Check Engine (Motor Arıza) lambasına sebep olan hata kodlarını anında silebilir, geçici hatalar için servise gitmekten kurtulabilirsiniz.</div>
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
              <Link href="/erken-erisim" className="btn btn-primary" style={{width:'100%', justifyContent:'center'}}>Erken Erişime Katıl</Link>
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
