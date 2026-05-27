'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  const handleJoinWaitlist = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>



<div className="sticky-buy-bar" id="buyBar">
<div className="container">
<div className="product-title" style={{ color: 'var(--text)',  }}>Preditech GT</div>
<div className="actions">
<span className="price">9.800₺</span>
<Link href="/erken-erisim" className="btn btn-ghost">Ön Sipariş</Link>
</div>
</div>
</div>


<section className="massive-hero">
<div className="particles"></div>
<div className="container" style={{ zIndex: '2',  }}>
<div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px', color: 'var(--text)',  }}>PİST GÜNLERİ İÇİN ÜRETİLDİ</div>
<h1 style={{ background: 'linear-gradient(180deg,#FFF 20%,#888 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',  }}>Saliseleri<br />Sayın.</h1>
<p className="massive-hero-sub">Dahili 100Hz GNSS/GPS, süre ölçümleri, sektör zamanları ve liderlik tablosu ile profesyonel telemetri cebinizde.</p>
<div style={{ fontSize: '160px', fontWeight: '900', color: 'var(--text2)', opacity: '0.1', position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',  }}>GT</div>
<img src="/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158%202.png" alt="Preditech GT" className="massive-device-img" style={{ maxWidth: '400px',  }} />
</div>
</section>




<section className="tech-specs-section">
<div className="container">
<div style={{ padding: '80px 0 40px',  }}><h2 style={{ fontSize: '48px', letterSpacing: '-1px',  }}>Teknik Özellikler.</h2></div>

<div className="spec-grid">
<div className="spec-category">Konum ve Telemetri</div>
<div className="spec-details">
<div className="spec-item"><h4>Dahili GPS/GNSS</h4><p>U-Blox M10 Serisi, GPS, Galileo, GLONASS, BeiDou eşzamanlı çekim</p></div>
<div className="spec-item"><h4>Konum Örnekleme Hızı</h4><p className="mono">100 Hz (Saniyede 100 konum verisi)</p></div>
<div className="spec-item"><h4>Performans Ölçümleri</h4><p>0-100, 100-200, 1/4 Mil, Fren Mesafesi (60-0, 100-0)</p></div>
<div className="spec-item"><h4>Pist Modu</h4><p>Otomatik sektör zamanları tespiti, tur karşılaştırması</p></div>
</div>
</div>

<div className="spec-grid">
<div className="spec-category">Sensör ve İşlemci</div>
<div className="spec-details">
<div className="spec-item"><h4>IMU Sensör</h4><p>Ultra hassas 6-Eksenli (100Hz Örnekleme)</p></div>
<div className="spec-item"><h4>Kestirimci Bakım</h4><p>PRO modelindeki tüm yapay zeka hata tespit özellikleri dahil</p></div>
<div className="spec-item"><h4>Dahili Hafıza</h4><p>50 saate kadar internetsiz tur kaydı (Flash bellek)</p></div>
</div>
</div>

<div className="spec-grid">
<div className="spec-category">Bağlantı ve Fiziksel</div>
<div className="spec-details">
<div className="spec-item"><h4>Bağlantı</h4><p>Bluetooth 5.0 LE + Dahili Wi-Fi (Veri aktarımı için)</p></div>
<div className="spec-item"><h4>Boyutlar ve Ağırlık</h4><p>62 x 40 x 24 mm, 58 gram</p></div>
</div>
</div>

<div className="spec-grid">
<div className="spec-category">Kutu İçeriği</div>
<div className="spec-details" style={{ gridTemplateColumns: '1fr',  }}>
<div className="spec-item">
<ul style={{ listStyle: 'none', color: 'var(--text2)', lineHeight: '2',  }}>
<li>• Preditech GT Cihazı</li>
<li>• Manyetik Ön Cam GPS Anten Bağlantısı</li>
<li>• 1 Yıllık Preditech App GT (Track Mode) Aboneliği</li>
<li>• Özel Taşıma Kesesi</li>
</ul>
</div>
</div>
</div>

</div>
</section>


<section className="app-bento-section">
  <div className="container">
    <div className="app-bento-header">
      <div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px',  }}>GT TELEMETRİ</div>
      <h2>Pist Süreleri Artık Cebinizde.</h2>
      <p>100Hz dahili GPS modülü ile 0-100 süreleri, tur zamanları, G kuvveti ve arkadaşlarınızla yarış liderlik tabloları uygulamanızda.</p>
    </div>
    
    <div className="bento-grid">
      
      <div className="bento-card bento-col-2 flip-card" style={{ minHeight: '300px',  }}>
        <div className="flip-card-inner">
          <div className="flip-card-front" style={{ background: 'linear-gradient(135deg, #1b1c09 0%, #080803 100%)', border: '1px solid rgba(232, 255, 0, 0.08)',  }}>
            <div className="bc-header"><i className="ph-fill ph-timer bc-icon" style={{ color: '#e8ff00',  }}></i><span>Hızlanma Testi</span></div>
            <div className="bc-title">0-100 Km/h Testi</div>
            <div className="bc-value" style={{ color: '#e8ff00', fontSize: '40px',  }}>3,87 <span className="bc-unit" style={{ color: '#e8ff00',  }}>s</span></div>
            <div className="bc-status-tag" style={{ background: 'rgba(232,255,0,0.1)', color: '#e8ff00', display: 'inline-block', maxWidth: 'max-content', marginTop: '12px',  }}><i className="ph-fill ph-trophy"></i> Kişisel Rekor</div>
            <div className="bc-list" style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '32px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)',  }}>
               <div><div style={{ fontSize: '11px', color: 'var(--text2)',  }}>Maks. G</div><div style={{ fontWeight: '700', fontSize: '16px',  }}>1,6 G</div></div>
               <div><div style={{ fontSize: '11px', color: 'var(--text2)',  }}>Maks. Devir</div><div style={{ fontWeight: '700', fontSize: '16px',  }}>6.200 RPM</div></div>
            </div>
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-timer"></i> Hızlanma Testi</h4>
            <p>100Hz GNSS/GPS alıcısı ile 0-100 km/s hızlanma sürenizi milisaniye doğruluğunda ölçer. Kişisel rekorlarınızı ve motor performansınızı kaydeder.</p>
          </div>
        </div>
      </div>

      
      <div className="bento-card flip-card" style={{ minHeight: '300px',  }}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="bc-header"><i className="ph-fill ph-flag-checkered bc-icon"></i><span>En Yakın Pist</span></div>
            <div className="bc-title">İstanbulPark Pisti</div>
            <div style={{ color: 'var(--text2)', fontSize: '13px',  }}>5,34 km - F1 Pisti</div>
            <img src="/assets/images/general/f1pist.png" alt="İstanbulPark Pisti" className="bc-track-map" style={{ width: '100%', height: 'auto', maxHeight: '160px', objectFit: 'contain', marginTop: '16px', filter: 'drop-shadow(0 0 10px rgba(249, 212, 35, 0.25))',  }} />
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-flag-checkered"></i> İstanbulPark Pisti</h4>
            <p>5.338 km uzunluğu, 14 teknik virajı ve meşhur 8. virajı ile dünyanın en heyecan verici ve zorlu Formula 1 yarış pistlerinden biridir.</p>
          </div>
        </div>
      </div>

      
      <div className="bento-card flip-card" style={{ background: '#080808', borderColor: 'rgba(255,255,255,0.03)', minHeight: '300px', padding: '0',  }}>
        <div className="flip-card-inner">
          <div className="flip-card-front" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
            <div className="gforce-radar-container" style={{ transform: 'scale(1.3)',  }}>
          <div className="gforce-radar">
            
            <div className="radar-ring outer"></div>
            <div className="radar-ring mid"></div>
            <div className="radar-ring inner"></div>
            
            <div className="gforce-radar-axis-h"></div>
            <div className="gforce-radar-axis-v"></div>
            
            <div className="radar-axis-text g1">1G</div>
            <div className="radar-axis-text g2">2G</div>
            
            <svg width="150" height="150" style={{ position: 'absolute', top: '0', left: '0', pointerEvents: 'none', overflow: 'visible', zIndex: '3',  }}>
              <defs>
                <path id="arcTop2" d="M -5,75 A 80,80 0 0,1 155,75" />
                <path id="arcBottom2" d="M -5,75 A 80,80 0 0,0 155,75" />
                <path id="arcLeft2" d="M 75,155 A 80,80 0 0,1 75,-5" />
                <path id="arcRight2" d="M 75,155 A 80,80 0 0,0 75,-5" />
              </defs>
              <text fill="rgba(255,255,255,0.35)" font-size="9" font-family="'Inter', sans-serif" font-weight="600" letter-spacing="2" text-anchor="middle">
                <textPath href="#arcTop2" startOffset="50%">YAVAŞLAMA</textPath>
                <textPath href="#arcBottom2" startOffset="50%">HIZLANMA</textPath>
                <textPath href="#arcLeft2" startOffset="50%">SAĞA DÖNÜŞ</textPath>
                <textPath href="#arcRight2" startOffset="50%">SOLA DÖNÜŞ</textPath>
              </text>
            </svg>
            
            <canvas className="gforce-radar-trail" width="150" height="150" style={{ position: 'absolute', top: '0', left: '0', pointerEvents: 'none', zIndex: '4',  }}></canvas>
            <div className="gforce-radar-dot"></div>
            
            <div className="gforce-radar-value">0.00 G</div>
          </div>
        </div>
          </div>
          <div className="flip-card-back" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',  }}>
            <h4><i className="ph-fill ph-compass"></i> G-Kuvveti Ölçer</h4>
            <p>100Hz ivmeölçer verileri ile aracınızın maruz kaldığı tüm yanal ve doğrusal ivmeleri gerçek zamanlı olarak izler.</p>
          </div>
        </div>
      </div>

      
      <div className="bento-card bento-col-2 bc-race-card flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%',  }}>
            <div className="bc-race-header">
          <i className="ph-fill ph-users"></i>
          <span>Canlı Yarış</span>
        </div>
        <div className="bc-race-title">Rakip Süresi (Ali Turgut)</div>
        
        
        <div className="bc-race-bar-container">
          <div className="bc-race-bar-fill" style={{ width: '65%',  }}>
            <div className="bc-race-avatar">
              <img src="https://i.pravatar.cc/150?img=33" alt="Ali Turgut" />
            </div>
          </div>
        </div>
        
        <div className="bc-race-stats">
          <div className="bc-race-stat-col">
            <span className="bc-race-stat-label">Senin Süren</span>
            <span className="bc-race-stat-val green">4,01s</span>
          </div>
          <div className="bc-race-stat-col right">
            <span className="bc-race-stat-label">Rakiple Fark</span>
            <span className="bc-race-stat-val red">-0,59s</span>
          </div>
        </div>
          </div>
          <div className="flip-card-back" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',  }}>
            <h4><i className="ph-fill ph-users"></i> Canlı Yarış</h4>
            <p>Seçtiğiniz hayalet rakiplerin sürelerine karşı anlık ilerlemenizi ve milisaniyelik farkları kesintisiz gösterir.</p>
          </div>
        </div>
      </div>

      
      <div className="bento-card flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="bc-header"><i className="ph-fill ph-cloud-sun bc-icon"></i><span>Pist Şartları</span></div>
            <div className="bc-title">Pist Hava Durumu</div>
            <table className="bc-table" style={{ marginTop: '4px',  }}>
              <tr><td style={{ padding: '10px 0',  }}><i className="ph-fill ph-drop" style={{ color: '#3388FF',  }}></i> Nem</td><td style={{ padding: '10px 0',  }}>% 70</td></tr>
              <tr><td style={{ padding: '10px 0',  }}><i className="ph-fill ph-wind" style={{ color: '#00FF88',  }}></i> Rüzgar</td><td style={{ padding: '10px 0',  }}>15 km/h</td></tr>
              <tr><td style={{ padding: '10px 0',  }}><i className="ph-fill ph-thermometer" style={{ color: 'var(--accent)',  }}></i> Sıcaklık</td><td style={{ padding: '10px 0',  }}>25 °C</td></tr>
              <tr><td style={{ padding: '10px 0', borderBottom: 'none',  }}><i className="ph-fill ph-mountains" style={{ color: '#aaa',  }}></i> Rakım</td><td style={{ padding: '10px 0', borderBottom: 'none',  }}>130 m</td></tr>
            </table>
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-cloud-sun"></i> Pist Şartları</h4>
            <p>Tur zamanlarını doğrudan etkileyen pist sıcaklığı, rüzgar hızı ve hava nem oranını anlık ölçerek ideal sürüş koşullarını hesaplar.</p>
          </div>
        </div>
      </div>

      
      <div className="bento-card flip-card" style={{ minHeight: '280px',  }}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="bc-header"><i className="ph-fill ph-ranking bc-icon"></i><span>Sosyal</span></div>
            <div className="bc-title">Liderlik Tablosu</div>
            <div className="bc-list">
              <div className="bc-list-item">
                 <div className="bc-list-item-left"><div className="bc-avatar"><img src="https://i.pravatar.cc/150?img=11" /></div> Siz</div>
                 <div className="bc-list-item-right" style={{ color: 'var(--accent)', fontWeight: '700',  }}>1.</div>
              </div>
              <div className="bc-list-item">
                 <div className="bc-list-item-left"><div className="bc-avatar"><img src="https://i.pravatar.cc/150?img=33" /></div> Ali T.</div>
                 <div className="bc-list-item-right">2.</div>
              </div>
              <div className="bc-list-item">
                 <div className="bc-list-item-left"><div className="bc-avatar"><img src="https://i.pravatar.cc/150?img=15" /></div> Emre B.</div>
                 <div className="bc-list-item-right">3.</div>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-ranking"></i> Liderlik Tablosu</h4>
            <p>Aynı pistte süre ölçümü yapan diğer Preditech kullanıcıları arasındaki sıralamanızı anlık olarak günceller ve rekabeti canlı tutar.</p>
          </div>
        </div>
      </div>
      
      <div className="bento-card bento-col-2 flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="bc-header"><i className="ph-fill ph-activity bc-icon"></i><span>Hibrit Veri Füzyonu</span></div>
            <div className="bc-title">NVH Grafiği</div>
            <div className="bc-graph" style={{ overflow: 'hidden',  }}>
               <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none" style={{ overflow: 'visible',  }}>
                <g className="infinite-fusion-wave">
                  
                  <path d="M0,20 Q2,15 4,20 T10,20 Q12,25 14,20 T20,20 Q22,12 24,20 T30,20 Q32,28 34,20 T40,20 Q42,16 44,20 T50,20 Q52,24 54,20 T60,20 Q62,10 64,20 T70,20 Q72,28 74,20 T80,20 Q82,15 84,20 T90,20 Q92,25 94,20 T100,20 Q102,15 104,20 T110,20 Q112,25 114,20 T120,20 Q122,12 124,20 T130,20 Q132,28 134,20 T140,20 Q142,16 144,20 T150,20 Q152,24 154,20 T160,20 Q162,10 164,20 T170,20 Q172,28 174,20 T180,20 Q182,15 184,20 T190,20 Q192,25 194,20 T200,20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6"/>
                  
                  <path d="M0,20 Q2,28 5,20 T10,20 Q12,12 15,20 T20,20 Q22,25 25,20 T30,20 Q32,15 35,20 T40,20 Q42,28 45,20 T50,20 Q52,10 55,20 T60,20 Q62,24 65,20 T70,20 Q72,16 75,20 T80,20 Q82,28 85,20 T90,20 Q92,12 95,20 T100,20 Q102,28 105,20 T110,20 Q112,12 115,20 T120,20 Q122,25 125,20 T130,20 Q132,15 135,20 T140,20 Q142,28 145,20 T150,20 Q152,10 155,20 T160,20 Q162,24 165,20 T170,20 Q172,16 175,20 T180,20 Q182,28 185,20 T190,20 Q192,12 195,20 T200,20" fill="none" stroke="var(--accent)" strokeWidth="0.8"/>
                </g>
              </svg>
            </div>
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-activity"></i> Hibrit Veri Füzyonu</h4>
            <p>100Hz frekansındaki CAN-bus ve ivmeölçer verilerini birleştirerek motorunuzdaki ve yürüyen aksamdaki anomalileri analiz eder.</p>
          </div>
        </div>
      </div>

      
      <div className="bento-card bento-col-2 bento-row-2 bento-alert" style={{ justifyContent: 'center', textAlign: 'center', padding: '24px', background: 'radial-gradient(circle at center, #1A1A1A 0%, #060606 100%)', border: '1px solid rgba(255,68,68,0.15)',  }}>
        <i className="ph-fill ph-warning bc-icon" style={{ color: '#FF4444', fontSize: '48px', margin: '0 auto 16px auto',  }}></i>
        <div className="bc-title" style={{ color: '#FF4444', letterSpacing: '2px', fontWeight: '800', textAlign: 'center', fontSize: '14px',  }}>KRİTİK SEVİYE</div>
        <div className="bc-value" style={{ textAlign: 'center', fontSize: '64px', fontWeight: '900', color: '#FF4444', margin: '8px 0',  }}>P0106</div>
        <div style={{ color: 'var(--accent)', fontWeight: '800', marginTop: '16px', fontSize: '16px', letterSpacing: '1px', textAlign: 'center',  }}>MOTOR YÖNETİMİ</div>
        <p style={{ textAlign: 'center', color: 'var(--text2)', marginTop: '8px', fontSize: '14px',  }}>Emme Manifoldu Mutlak Basınç Performans Sorunu</p>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap',  }}>
          <div style={{ background: 'rgba(255,68,68,0.1)', border: '1px solid rgba(255,68,68,0.2)', padding: '8px 12px', borderRadius: '8px', fontSize: '11px', color: '#FF4444', fontWeight: '600',  }}>Kablolama Temassızlığı</div>
          <div style={{ background: 'rgba(255,68,68,0.1)', border: '1px solid rgba(255,68,68,0.2)', padding: '8px 12px', borderRadius: '8px', fontSize: '11px', color: '#FF4444', fontWeight: '600',  }}>Vakum Kaçağı</div>
          <div style={{ background: 'rgba(255,68,68,0.1)', border: '1px solid rgba(255,68,68,0.2)', padding: '8px 12px', borderRadius: '8px', fontSize: '11px', color: '#FF4444', fontWeight: '600',  }}>Arızalı MAP Sensörü</div>
        </div>
      </div>

      
      <div className="bento-card flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front premium-status-card">
            <div className="bc-premium-row">
              <div className="bc-premium-icon"><i className="ph-fill ph-lightning" style={{ color: '#00ff88',  }}></i></div>
              <div className="bc-premium-info">
                <div className="bc-premium-title">Buji Sağlığı</div>
                <div className="bc-premium-val">15 <span style={{ fontSize: '14px', color: 'var(--text2)', fontWeight: '600',  }}>% Yıpranma</span></div>
                <div className="bc-premium-bar">
                  <div className="bc-premium-bar-fill" style={{ width: '15%', background: '#00ff88', boxShadow: '0 0 8px #00ff88',  }}></div>
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

      
      <div className="bento-card flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front premium-status-card">
            <div className="bc-premium-row">
              <div className="bc-premium-icon"><i className="ph-fill ph-gear" style={{ color: '#F9D423',  }}></i></div>
              <div className="bc-premium-info">
                <div className="bc-premium-title">Şanzıman Sağlığı</div>
                <div className="bc-premium-val">42 <span style={{ fontSize: '14px', color: 'var(--text2)', fontWeight: '600',  }}>% Yıpranma</span></div>
                <div className="bc-premium-bar">
                  <div className="bc-premium-bar-fill" style={{ width: '42%', background: '#F9D423', boxShadow: '0 0 8px #F9D423',  }}></div>
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


<section className="section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '80px 0',  }}>
  <div className="container">
    <div className="app-bento-header">
      <div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px', color: 'var(--accent)',  }}>YARIŞ VE TELEMETRİ EKRANLARI</div>
      <h2>Yarış Hakkında Her Şey Burada.</h2>
      <p>0-100 hızlanma testleriniz, yarış öncesi hava ve pist şartları, detaylı yolculuk telemetrileriniz ve sanal hayalet rakiplerinize karşı yarışabileceğiniz interaktif simülatörünüz parmaklarınızın ucunda.</p>
    </div>
    
    <div className="gt-features-deck">
      
      <div className="deck-card deck-card-1">
        <div className="deck-card-tooltip">
          <h3>Yarış Simülatörü</h3>
          <p>Kendi kaydettiğiniz 0-100 sürelerinizi arkadaşlarınızın en iyi skorlarıyla canlı olarak yarıştırın.</p>
        </div>
        <div className="sim-section" style={{ padding: '0', background: 'transparent', border: 'none', boxShadow: 'none', alignItems: 'center', justifyContent: 'center', height: '100%',  }}>
          <div className="telematics-phone-screen" style={{ width: '100%', maxWidth: '390px', height: '833px', padding: '0', display: 'flex', flexDirection: 'column', background: '#060606', margin: '0 auto', borderRadius: '40px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(255, 255, 255, 0.05)',  }}>
          <div style={{ flex: '1', overflow: 'hidden', padding: '24px 20px 24px 20px',  }}>
        
        <div style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px',  }}>Yarışçılar</div>
        
        
        <div className="sim-vs-container">
          
          <div className="sim-racer-card green">
            <div className="sim-racer-avatar-big">
              <img src="https://i.pravatar.cc/150?img=11" alt="Noyan Ş." />
            </div>
            <div className="sim-racer-name">Noyan Ş.</div>
            <div className="sim-racer-car">Mazda MX-5</div>
            <div className="sim-racer-dropdown">Mazda MX-5</div>
            <div className="sim-racer-best">
              <div className="lbl">En İyi</div>
              <div className="val green">8,01s</div>
              <div className="date">1 Mar 2025</div>
            </div>
          </div>
          
          <div className="sim-vs-badge">VS</div>
          
          
          <div className="sim-racer-card red">
            <div className="sim-racer-avatar-big" style={{ borderColor: '#FF4444', boxShadow: '0 0 15px rgba(255,68,68,0.25)',  }}>
              <img src="https://i.pravatar.cc/150?img=33" alt="Ali T." />
            </div>
            <div className="sim-racer-name">Ali T.</div>
            <div className="sim-racer-car">Lancer Evo X</div>
            <div className="sim-racer-dropdown">Lancer Evo X</div>
            <div className="sim-racer-best">
              <div className="lbl">En İyi</div>
              <div className="val red">7,21s</div>
              <div className="date">1 Mar 2025</div>
            </div>
          </div>
        </div>
        
        <div style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px',  }}>Sanal Yarışma Simülasyonu</div>
        
        
        <div className="sim-timeline-container">
          <div className="sim-timeline-header">
            <span>Başlangıç</span>
            <span style={{ color: 'var(--accent)',  }}>0 km/h → 100 km/h</span>
            <span style={{ color: '#FF4444',  }}>Bitiş</span>
          </div>
          <div className="sim-timeline-bar-bg">
            <div className="sim-track-ali" id="simTrackAli"></div>
            <div className="sim-track-noyan" id="simTrackNoyan"></div>
            
            <div className="sim-timeline-avatar" id="avatarSiz" style={{ left: '0%', borderColor: '#F9D423', zIndex: '3',  }}>
              <img src="https://i.pravatar.cc/150?img=11" alt="Siz" />
            </div>
            
            <div className="sim-timeline-avatar" id="avatarRakip" style={{ left: '0%', borderColor: '#FF4444', zIndex: '2',  }}>
              <img src="https://i.pravatar.cc/150?img=33" alt="Ali" />
            </div>
          </div>
        </div>
        
        <button className="sim-replay-btn" id="startSimBtn">Tekrar Oynat</button>
        
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px',  }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.03)',  }}>
            <div style={{ fontSize: '12px', color: 'var(--text2)', textTransform: 'uppercase',  }}>Süre</div>
            <div style={{ fontSize: '21px', fontWeight: '800', color: '#00ff88', marginTop: '4px',  }} id="simSüre">8,01s</div>
            <div style={{ fontSize: '11px', color: '#00ff88', marginTop: '2px',  }}>2. Sıra</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.03)',  }}>
            <div style={{ fontSize: '12px', color: 'var(--text2)', textTransform: 'uppercase',  }}>Fark</div>
            <div style={{ fontSize: '21px', fontWeight: '800', color: '#ff4444', marginTop: '4px', whiteSpace: 'nowrap',  }} id="simFark">-0,80s</div>
            <div style={{ fontSize: '11px', color: '#ff4444', marginTop: '2px',  }}>Ali Önde</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.03)',  }}>
            <div style={{ fontSize: '12px', color: 'var(--text2)', textTransform: 'uppercase',  }}>Rakip Süresi</div>
            <div style={{ fontSize: '21px', fontWeight: '800', color: '#ff4444', marginTop: '4px',  }} id="simRakipSüre">7,21s</div>
            <div style={{ fontSize: '11px', color: '#ff4444', marginTop: '2px',  }}>Ali Birinci</div>
          </div>
        </div>
        
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px',  }}>
          <span style={{ fontSize: '12px', fontWeight: '700', color: '#fff',  }}>Hızınız</span>
          <span className="sim-racer-btn" style={{ width: 'auto', margin: '0', padding: '4px 10px', fontSize: '10px',  }}>Mazda MX-5</span>
        </div>
        
        <div className="bc-graph" style={{ background: 'rgba(0,0,0,0.4)', borderColor: 'rgba(255,255,255,0.03)', minHeight: '105px', padding: '8px',  }}>
          <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
            
            <path d="M 0,38 Q 10,38 18,30 L 22,30 Q 30,25 35,20 L 40,20 Q 50,15 55,10 L 60,11 Q 75,5 100,2" fill="none" stroke="#F9D423" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" id="graphSizPath" strokeDasharray="150" strokeDashoffset="150"/>
            
            <path d="M 0,38 Q 8,36 15,25 L 18,25 Q 26,18 32,14 L 35,14 Q 45,8 50,5 L 53,6 Q 70,2 100,0.5" fill="none" stroke="#FF4444" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" id="graphAliPath" strokeDasharray="150" strokeDashoffset="150"/>
          </svg>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', marginTop: '12px', fontSize: '11px', justifyContent: 'center',  }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px',  }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F9D423',  }}></span> Siz (Noyan Şen)</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px',  }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF4444',  }}></span> Ali Turgut</span>
        </div>
          </div>
        </div>
      </div>
      </div>
      
      
      <div className="deck-card deck-card-2">
        <div className="deck-card-tooltip">
          <h3>Yolculuk Haritası</h3>
          <p>Tüm seyahatlerinizin detaylı telemetri haritalarını, hızlanma ve frenleme noktalarını inceleyin.</p>
        </div>
        <div className="telematics-phone-screen" style={{ width: '100%', maxWidth: '390px', height: '833px', margin: '0 auto', padding: '0', boxShadow: 'none', border: 'none', background: 'transparent',  }}>
           <img src="/assets/images/app/yolculuk detayları.png" alt="Yolculuk Detayları" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '40px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(255, 255, 255, 0.05)',  }} />
        </div>
      </div>
      
      
      <div className="deck-card deck-card-3">
        <div className="deck-card-tooltip">
          <h3>Hızlanma Testi</h3>
          <p>0-100 ve ara hızlanmalarınızdaki G-kuvveti dağılımını milisaniye hassasiyetinde görüntüleyin.</p>
        </div>
        <div className="telematics-phone-screen" style={{ width: '100%', maxWidth: '390px', height: '833px', margin: '0 auto', padding: '0', boxShadow: 'none', border: 'none', background: 'transparent',  }}>
           <img src="/assets/images/general/hızlanma testi.png" alt="Hızlanma Testi" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '40px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(255, 255, 255, 0.05)',  }} />
        </div>
      </div>
      
      
      <div className="deck-card deck-card-4">
        <div className="deck-card-tooltip">
          <h3>Pist Verileri</h3>
          <p>Pist verilerinizi saklayın ve pistteki diğer kişilerle kıyasıya yarışın.</p>
        </div>
        <div className="telematics-phone-screen" style={{ width: '100%', maxWidth: '390px', height: '833px', margin: '0 auto', padding: '0', boxShadow: 'none', border: 'none', background: 'transparent',  }}>
           <img src="/assets/images/app/pist yaris oncesi.png" alt="Pist Yarış Öncesi" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '40px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(255, 255, 255, 0.05)',  }} />
        </div>
      </div>
    </div>
  </div>
</section>



<section className="extra-devices">
<div className="container">
  <div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px',  }}>TİP-C YARDIMCI CİHAZLAR</div>
  <h2 style={{ textAlign: 'center', marginBottom: '60px',  }}>Daha Fazlasını İsteyenlere.</h2>
  
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '32px',  }}>
    <div className="extra-device-card" style={{ cursor: 'pointer',  }} onClick={() => { router.push('racebox') }}>
      <img src="/assets/images/devices/preditech racebox.png" alt="Racebox" style={{ objectFit: 'contain',  }} />
      <div className="extra-info">
        <h4><Link href="/racebox" style={{ color: 'inherit', textDecoration: 'none',  }}>RACEBOX</Link> <span className="hub-tag">EKLENTİ</span></h4>
        <p>Sensör okumalarınızı tek ekranda toplayan performans HUB'ı. Type-C ile bağlanır.</p>
        <div style={{ fontWeight: '700', color: 'var(--text)', marginTop: '8px', fontSize: '16px',  }}>3.500₺</div>
      </div>
    </div>
    <div className="extra-device-card" style={{ cursor: 'pointer',  }} onClick={() => { router.push('sentinel') }}>
      <img src="/assets/images/devices/preditech sentinel.png" alt="Sentinel" style={{ objectFit: 'contain',  }} />
      <div className="extra-info">
        <h4><Link href="/sentinel" style={{ color: 'inherit', textDecoration: 'none',  }}>SENTINEL</Link> <span className="hub-tag">EKLENTİ</span></h4>
        <p>OBD verilerini video üzerine yazan 4K akıllı Dashcam.</p>
        <div style={{ fontWeight: '700', color: 'var(--text)', marginTop: '8px', fontSize: '16px',  }}>5.500₺</div>
      </div>
    </div>
    <div className="extra-device-card" style={{ cursor: 'pointer',  }} onClick={() => { router.push('cursor') }}>
      <img src="/assets/images/devices/preditech cursor.png" alt="Cursor" style={{ objectFit: 'contain',  }} />
      <div className="extra-info">
        <h4><Link href="/cursor" style={{ color: 'inherit', textDecoration: 'none',  }}>CURSOR</Link> <span className="hub-tag">EKLENTİ</span></h4>
        <p>AFR ve EGR verilerini dijital olarak gösteren akıllı gösterge (Gauge).</p>
        <div style={{ fontWeight: '700', color: 'var(--text)', marginTop: '8px', fontSize: '16px',  }}>2.200₺</div>
      </div>
    </div>
  </div>
</div>
</section>

<section className="faq-section" style={{ background: 'var(--surface2)',  }}>
<div className="container">
<h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center',  }}>GT Modeli S.S.S.</h2>
<div className="faq-item">
<div className="faq-question">GPS doğruluğu akıllı telefonlardan neden farklı?<span className="faq-icon">+</span></div>
<div className="faq-answer">Akıllı telefonların dahili GPS alıcıları genellikle 1Hz (Saniyede 1 kez) konum günceller. Pist sürelerinde bu saniyede 30 metre sapma demektir. Preditech GT, içindeki U-Blox M10 çipi ile saniyede 100 kez (100Hz) konum günceller. Bu sayede süre ve fren mesafesi ölçümleriniz milisaniye hassasiyetindedir.</div>
</div>
<div className="faq-item">
<div className="faq-question">PRO modelinin AI özelliklerini içeriyor mu?<span className="faq-icon">+</span></div>
<div className="faq-answer">Evet. GT modeli, amiral gemisi donanımımızdır. PRO modelinde bulunan 6 eksenli titreşim (IMU) ve yapay zeka kestirimci bakım (NVH Fusion) özelliklerinin tamamını barındırır. Performans tutkunları için ek olarak 100Hz Telemetri modülü entegre edilmiştir.</div>
</div>
<div className="faq-item">
<div className="faq-question">Pist günleri (Track Day) dışında günlük kullanılabilir mi?<span className="faq-icon">+</span></div>
<div className="faq-answer">Kesinlikle. Cihaz sürekli aracınızda takılı kalabilir. Normal sürüşlerinizde Predicto AI ve Kestirimci Bakım devrededir, piste veya performans testine (0-100 vb.) çıktığınızda uygulamadan "Pist Modu"nu (Track Mode) aktif etmeniz yeterlidir.</div>
</div>
<div className="faq-item">
<div className="faq-question">Pist sürelerini arkadaşlarımla paylaşabilir miyim?<span className="faq-icon">+</span></div>
<div className="faq-answer">Evet! GT versiyonunun uygulamasında Liderlik Tablosu (Leaderboard) özelliği bulunur. Aynı pistte sürüş yaptığınız arkadaşlarınızla derecelerinizi karşılaştırabilir, sosyal medyada G-kuvveti grafiklerinizle paylaşabilirsiniz.</div>
</div>
<div className="faq-item">
<div className="faq-question">Araç kamerasını (GoPro vb.) entegre edebilir miyim?<span className="faq-icon">+</span></div>
<div className="faq-answer">Şu an için test aşamasında olan "Video Telemetri" özelliği sayesinde, sürüş videolarınızın üzerine hız, G-Kuvveti ve süre verilerinizi overlay (katman) olarak ekleme güncellemesi çok yakında kullanıma sunulacaktır.</div>
</div>
</div>
</section>



<section className="section wishlist-cta-section" style={{ background: 'linear-gradient(180deg, var(--bg), var(--surface))', borderTop: '1px solid var(--border)',  }}>
<div className="container">
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(350px,1fr))', gap: '40px', alignItems: 'center',  }}>
    <div className="card" style={{ background: 'rgba(255,215,0,0.05)', borderColor: 'var(--accent)',  }}>
      <h3 style={{ fontSize: '24px', color: 'var(--accent)', marginBottom: '12px',  }}>Premium Deneyim</h3>
      <p style={{ color: 'var(--text2)', marginBottom: '24px', fontSize: '15px',  }}>Öncelikli teslimat avantajından yararlanın. Erken sipariş vererek Preditech ekosistemine ilk adımı atın.</p>
      <Link href="/erken-erisim" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center',  }}>Erken Erişime Katıl</Link>
    </div>
    
    <div className="card" style={{ background: 'var(--surface2)',  }}>
      <h3 style={{ fontSize: '24px', marginBottom: '12px',  }}>Ücretsiz Bekleme Listesi</h3>
      <p style={{ color: 'var(--text2)', marginBottom: '24px', fontSize: '15px',  }}>Şimdi sadece kayıt olun, resmi satışa çıktığımızda %40 özel indirim kuponunuzu e-posta adresinize gönderelim.</p>
      <div className="newsletter-box" style={{ margin: '0',  }}>
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
