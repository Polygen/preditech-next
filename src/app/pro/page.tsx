// @ts-nocheck
'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  return (
    <>



<div className="sticky-buy-bar" id="buyBar">
<div className="container">
<div className="product-title" style={{ color: 'var(--accent)',  }}>Preditech PRO</div>
<div className="actions">
<span className="price">2.500₺</span>
<Link href="/erken-erisim" className="btn btn-primary">Ön Sipariş</Link>
</div>
</div>
</div>


<section className="massive-hero accent-title">
<div className="particles"></div>
<div className="container" style={{ zIndex: '2',  }}>
<div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px',  }}>DÜNYADA İLK: OBD + IMU FÜZYONU</div>
<div className="user-tag">BİREYSEL KULLANICI</div><h1>Hisseden<br />Teknoloji.</h1>
<p className="massive-hero-sub">Sadece elektronik kodları değil, motorun fiziksel titreşimlerini de analiz eden 6 eksenli sensörü ile arızaları haftalar öncesinden öngörün.</p>
<div style={{ fontSize: '160px', fontWeight: '900', color: 'var(--accent)', opacity: '0.05', position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',  }}>PRO</div>
<img src="/assets/images/devices/GREG.png" alt="Preditech Device" className="massive-device-img" />
</div>
</section>




<section className="tech-specs-section">
<div className="container">
<div style={{ padding: '80px 0 40px',  }}><h2 style={{ fontSize: '48px', letterSpacing: '-1px',  }}>Teknik Özellikler.</h2></div>

<div className="spec-grid">
<div className="spec-category">Sensör ve İşlemci</div>
<div className="spec-details">
<div className="spec-item"><h4>IMU Sensör</h4><p>Ultra hassas 6-Eksenli (3-eksen İvmeölçer, 3-eksen Jiroskop)</p></div>
<div className="spec-item"><h4>Örnekleme Hızı</h4><p className="mono">100 Hz (Saniyede 100 veri paketi)</p></div>
<div className="spec-item"><h4>Füzyon Algoritması</h4><p>Dahili NVH (Noise, Vibration, Harshness) eşleştirme motoru</p></div>
<div className="spec-item"><h4>G-Kuvveti Ölçümü</h4><p>Var (Viraj, Frenleme ve İvmelenme skorlaması)</p></div>
</div>
</div>

<div className="spec-grid">
<div className="spec-category">Bağlantı ve Güç</div>
<div className="spec-details">
<div className="spec-item"><h4>Bluetooth</h4><p>Bluetooth 5.0 Low Energy (Gelişmiş menzil ve hız)</p></div>
<div className="spec-item"><h4>OBD Desteği</h4><p>ISO 15765-4 (CAN), J1850 PWM/VPW, ISO 9141-2, KWP2000</p></div>
<div className="spec-item"><h4>Çalışma Voltajı</h4><p className="mono">9V - 16V</p></div>
<div className="spec-item"><h4>Güç Tüketimi (Uyku)</h4><p className="mono">&lt; 3mA (Akıllı uyku/uyanma döngüsü)</p></div>
</div>
</div>

<div className="spec-grid">
<div className="spec-category">Fiziksel Özellikler</div>
<div className="spec-details">
<div className="spec-item"><h4>Boyutlar</h4><p>42 x 35 x 22 mm</p></div>
<div className="spec-item"><h4>Ağırlık</h4><p>42 gram</p></div>
<div className="spec-item"><h4>Çalışma Sıcaklığı</h4><p className="mono">-40°C ~ +85°C</p></div>
<div className="spec-item"><h4>Kasa Materyali</h4><p>Endüstriyel sınıf ısıya dayanıklı polikarbon</p></div>
</div>
</div>

<div className="spec-grid">
<div className="spec-category">Kutu İçeriği</div>
<div className="spec-details" style={{ gridTemplateColumns: '1fr',  }}>
<div className="spec-item">
<ul style={{ listStyle: 'none', color: 'var(--text2)', lineHeight: '2',  }}>
<li>• Preditech PRO Cihazı</li>
<li>• Hızlı Başlangıç Kılavuzu</li>
<li>• 1 Yıllık Preditech App PRO Aboneliği (Predicto AI Dahil)</li>
<li>• Preditech Çıkartma Seti</li>
</ul>
</div>
</div>
</div>

</div>
</section>


<section className="app-bento-section">
  <div className="container">
    <div className="app-bento-header">
      <div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px', color: 'var(--accent)',  }}>PREDITECH APP PRO</div>
      <h2>Yapay Zeka Destekli Telemetri.</h2>
      <p>Arızalar gerçekleşmeden önce uyaran Predicto AI ve gerçek zamanlı NVH (titreşim) füzyon sistemi parmaklarınızın ucunda.</p>
    </div>
    
    <div className="bento-grid">
      
      <div className="bento-card bento-col-2 flip-card" style={{ minHeight: '240px',  }}>
        <div className="flip-card-inner">
          <div className="flip-card-front" style={{ background: 'linear-gradient(135deg, #0d1611 0%, #050806 100%)', border: '1px solid rgba(0, 255, 136, 0.08)',  }}>
            <div className="bc-header"><i className="ph-fill ph-brain bc-icon" style={{ color: '#00FF88',  }}></i><span>Predicto AI</span></div>
            <div className="bc-title">Motor Sağlık Skoru</div>
            <div className="bc-value" style={{ color: '#00FF88',  }}>98.5 <span className="bc-unit" style={{ color: '#00FF88',  }}>%</span></div>
            <div className="bc-progress-bg" style={{ background: 'rgba(255,255,255,0.04)',  }}><div className="bc-progress-fill" style={{ width: '98.5%', background: '#00FF88', boxShadow: '0 0 10px #00FF88',  }}></div></div>
            <div style={{ textAlign: 'right', fontSize: '12px', color: 'rgba(0, 255, 136, 0.6)', marginTop: '8px', fontFamily: 'monospace', fontWeight: '700',  }}>STABİL</div>
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-brain"></i> Motor Sağlık Skoru</h4>
            <p>OBD parametreleri ile 6 eksenli mekanik hareketlerin yapay zeka ile birleştirilmesi (Füzyon) sonucu hesaplanan, motorunuzun anlık genel kondisyon yüzdesidir.</p>
          </div>
        </div>
      </div>

      
      <div className="bento-card bento-col-2 flip-card" style={{ minHeight: '240px',  }}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="bc-header"><i className="ph-fill ph-wave-sine bc-icon"></i><span>NVH Füzyonu</span></div>
            <div className="bc-title">Titreşim Spektrum Analizi</div>
            <div className="bc-graph" style={{ background: 'transparent', border: 'none', padding: '0', flexDirection: 'column', justifyContent: 'center', gap: '8px',  }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '12px', color: 'var(--text2)',  }}><span>X Ekseni (Yanal)</span><span style={{ color: '#00FF88',  }}>Normal</span></div>
               <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px',  }}><div style={{ width: '20%', height: '100%', background: '#00FF88',  }}></div></div>
               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '12px', color: 'var(--text2)', marginTop: '4px',  }}><span>Y Ekseni (Dikey)</span><span style={{ color: 'var(--accent)',  }}>Orta Şiddet</span></div>
               <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px',  }}><div style={{ width: '55%', height: '100%', background: 'var(--accent)',  }}></div></div>
               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '12px', color: 'var(--text2)', marginTop: '4px',  }}><span>Z Ekseni (İleri)</span><span style={{ color: '#00FF88',  }}>Normal</span></div>
               <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px',  }}><div style={{ width: '15%', height: '100%', background: '#00FF88',  }}></div></div>
            </div>
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-wave-sine"></i> NVH Spektrumu</h4>
            <p>Dahili 6 eksenli IMU sensörü ile motorun 3 boyutlu mekanik titreşim dalgalarını ölçer. Standart dışı rezonansları izleyerek mekanik aşınmaları tespit eder.</p>
          </div>
        </div>
      </div>

      
      <div className="bento-card flip-card bento-col-2 bento-row-2">
        <div className="flip-card-inner">
          <div className="flip-card-front bento-alert">
            <i className="ph-fill ph-warning bc-icon"></i>
            <div className="bc-title" style={{ color: '#FF4444', letterSpacing: '2px', fontWeight: '800',  }}>KRİTİK UYARI</div>
            <div className="bc-value">P0106</div>
            <div style={{ color: 'var(--text)', fontWeight: '700', marginTop: '12px',  }}>Emme Manifoldu Mutlak Basınç Sorunu</div>
            <div className="bc-status-tag" style={{ background: 'rgba(255,68,68,0.2)', color: '#FF4444',  }}>Yapay Zeka Teyitli Arıza</div>
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-warning-circle"></i> OBD-II Kodları</h4>
            <p>Araç bilgisayarından (ECU) okunan kritik hata kodlarını saniyeler içinde çözümler ve anında uyarır.</p>
          </div>
        </div>
      </div>

      
      <div className="bento-card flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front premium-status-card">
            <div className="bc-premium-row">
              <div className="bc-premium-icon"><i className="ph-fill ph-clock-countdown" style={{ color: '#00ff88',  }}></i></div>
              <div className="bc-premium-info">
                <div className="bc-premium-title">Ateşleme Bobini</div>
                <div className="bc-premium-val">12 <span style={{ fontSize: '14px', color: 'var(--text2)', fontWeight: '600',  }}>% Yıpranma</span></div>
                <div className="bc-premium-bar">
                  <div className="bc-premium-bar-fill" style={{ width: '12%', background: '#00ff88', boxShadow: '0 0 8px #00ff88',  }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-clock-countdown"></i> Ateşleme Bobini</h4>
            <p>Bujilerin ateşleme rezonans dalgalarını yüksek frekansta analiz eder. Mikro gecikmeleri ölçerek ateşleme bobininin tahmini kalan ömrünü hesaplar.</p>
          </div>
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
          <div className="flip-card-front">
            <div className="bc-header"><i className="ph-fill ph-bluetooth-connected bc-icon"></i><span>Bağlı Araç</span></div>
            <div className="bc-title">Preditech Pro Bağlı</div>
            <div className="bc-value" style={{ fontSize: '20px',  }}>RX-8 (13B-MSP)</div>
            <div className="bc-status-tag online" style={{ marginTop: '16px',  }}><i className="ph-fill ph-circle"></i> 100Hz Veri Akışı</div>
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-bluetooth-connected"></i> Bağlantı Durumu</h4>
            <p>Preditech PRO donanımınızın yüksek bant genişlikli Bluetooth 5.0 üzerinden akıllı telefonunuza saniyede 100 veri paketiyle bağlı olduğunu gösterir.</p>
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

      
      <div className="bento-card flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="bc-header"><i className="ph-fill ph-gauge bc-icon"></i><span>Anlık Telemetri</span></div>
            <div className="bc-title">Motor Devri</div>
            <div className="bc-value">3.521 <span className="bc-unit">RPM</span></div>
            <div style={{ marginTop: '24px', color: 'var(--text2)', fontSize: '13px', display: 'flex', gap: '16px',  }}>
               <span>Su: <strong style={{ color: 'var(--text)',  }}>85 °C</strong></span>
               <span>Yağ: <strong style={{ color: 'var(--text)',  }}>90 °C</strong></span>
            </div>
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-gauge"></i> Motor Devri</h4>
            <p>Dakikadaki motor devrini (RPM) ve ECU'dan çekilen motor soğutma suyu ve yağ sıcaklıklarını anlık telemetri olarak görüntüler.</p>
          </div>
        </div>
      </div>

      
      <div className="bento-card flip-card" style={{ background: '#080808', borderColor: 'rgba(255,255,255,0.03)', minHeight: '240px', padding: '0',  }}>
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
                <path id="arcTop" d="M -5,75 A 80,80 0 0,1 155,75" />
                <path id="arcBottom" d="M -5,75 A 80,80 0 0,0 155,75" />
                <path id="arcLeft" d="M 75,155 A 80,80 0 0,1 75,-5" />
                <path id="arcRight" d="M 75,155 A 80,80 0 0,0 75,-5" />
              </defs>
              <text fill="rgba(255,255,255,0.35)" font-size="9" font-family="'Inter', sans-serif" font-weight="600" letter-spacing="2" text-anchor="middle">
                <textPath href="#arcTop" startOffset="50%">YAVAŞLAMA</textPath>
                <textPath href="#arcBottom" startOffset="50%">HIZLANMA</textPath>
                <textPath href="#arcLeft" startOffset="50%">SAĞA DÖNÜŞ</textPath>
                <textPath href="#arcRight" startOffset="50%">SOLA DÖNÜŞ</textPath>
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
            <p>OBD sensör sinyalleri ile IMU rezonans dalgalarının yapay zeka tarafından hibrit veri füzyonu ile nasıl harmanlandığını gösteren yüksek yoğunluklu dalga grafiğidir.</p>
          </div>
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
    <div className="extra-device-card" style={{ cursor: 'pointer',  }} onClick={() => { window.location.href='racebox' }}>
      <img src="/assets/images/devices/preditech racebox.png" alt="Racebox" style={{ objectFit: 'contain',  }} />
      <div className="extra-info">
        <h4><Link href="/racebox" style={{ color: 'inherit', textDecoration: 'none',  }}>RACEBOX</Link> <span className="hub-tag">EKLENTİ</span></h4>
        <p>Sensör okumalarınızı tek ekranda toplayan performans HUB'ı. Type-C ile bağlanır.</p>
        <div style={{ fontWeight: '700', color: 'var(--text)', marginTop: '8px', fontSize: '16px',  }}>3.500₺</div>
      </div>
    </div>
    <div className="extra-device-card" style={{ cursor: 'pointer',  }} onClick={() => { window.location.href='sentinel' }}>
      <img src="/assets/images/devices/preditech sentinel.png" alt="Sentinel" style={{ objectFit: 'contain',  }} />
      <div className="extra-info">
        <h4><Link href="/sentinel" style={{ color: 'inherit', textDecoration: 'none',  }}>SENTINEL</Link> <span className="hub-tag">EKLENTİ</span></h4>
        <p>OBD verilerini video üzerine yazan 4K akıllı Dashcam.</p>
        <div style={{ fontWeight: '700', color: 'var(--text)', marginTop: '8px', fontSize: '16px',  }}>5.500₺</div>
      </div>
    </div>
    <div className="extra-device-card" style={{ cursor: 'pointer',  }} onClick={() => { window.location.href='cursor' }}>
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
<h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center',  }}>PRO Modeli S.S.S.</h2>
<div className="faq-item">
<div className="faq-question">Kestirimci Bakım (AI) nasıl çalışır?<span className="faq-icon">+</span></div>
<div className="faq-answer">Preditech PRO içerisindeki 6 eksenli IMU sensörü, motorun çalışırken ürettiği titreşim dalgalarını saniyede 100 kez ölçer (100Hz). Bu fiziksel titreşim verisi, OBD'den gelen elektronik verilerle birleştirilir (NVH Data Fusion). Yapay zeka ağımız, "arıza öncesi yorgunluk" titreşimini tanıyarak, parça bozulmadan haftalar önce size uyarı gönderir.</div>
</div>
<div className="faq-item">
<div className="faq-question">Aracımın garantisini bozar mı?<span className="faq-icon">+</span></div>
<div className="faq-answer">Kesinlikle hayır. PRO modeli aracın ECU'suna yazma işlemi yapmaz. Güvenli "okuma" (Read-only) protokolleri kullandığı için %100 garanti dostudur.</div>
</div>
<div className="faq-item">
<div className="faq-question">Aylık ücret ödeyecek miyim?<span className="faq-icon">+</span></div>
<div className="faq-answer">Cihazı satın aldığınızda 1 yıllık Preditech App PRO aboneliği hediye edilir. 1 yılın sonunda, derin öğrenme sunucularının maliyeti için ufak bir yıllık abonelik ücreti yansıtılır. Abonelik yenilenmezse cihaz standart OBD tarayıcı olarak çalışmaya devam eder.</div>
</div>
<div className="faq-item">
<div className="faq-question">Hangi marka araçlarla uyumlu?<span className="faq-icon">+</span></div>
<div className="faq-answer">2001 sonrası üretilen benzinli ve 2004 sonrası üretilen dizel/hibrit tüm marka ve model araçlarla (OBD-II portuna sahip olan) uyumludur. Elektrikli araçlar (EV) için özel modülümüz geliştirme aşamasındadır.</div>
</div>
<div className="faq-item">
<div className="faq-question">Sürüş Skoru ne işe yarar?<span className="faq-icon">+</span></div>
<div className="faq-answer">Sürüş skoru, frenleme, ivmelenme ve viraj alma alışkanlıklarınızı analiz eder. Yüksek bir skor, aracınızı ne kadar az yıprattığınızı gösterir. Bu sayede hem yakıt tasarrufu sağlar hem de balata/disk gibi parçaların ömrünü uzatırsınız.</div>
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
        <button onClick={() => { alert('Bekleme listesine eklendiniz! %40 İndirim kodunuz çıkış tarihinde iletilecektir.') }}>Listeye Katıl</button>
      </div>
    </div>
  </div>
</div>
</section>




    </>
  );
}
