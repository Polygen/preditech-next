// @ts-nocheck
'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  return (
    <>



<section className="massive-hero">
<div className="particles"></div>
<div className="container" style={{ zIndex: '2',  }}>
<div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px',  }}>SADECE BİR UYGULAMA DEĞİL</div>
<h1 style={{ fontSize: 'clamp(50px,8vw,100px)',  }}>Aracınızın Dijital<br />İkizi.</h1>
<p className="massive-hero-sub" style={{ marginBottom: '40px',  }}>Yapay zeka asistanı Predicto, oyunlaştırılmış sürüş skoru ve detaylı telemetri analizleriyle aracınızın tüm kontrolünü avucunuzun içine alın.</p>

<div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '80px',  }}>
  
  <a href="#" style={{ textDecoration: 'none', transition: 'transform 0.3s ease',  }} onMouseOver="this.style.transform='scale(1.05)'" onMouseOut="this.style.transform='scale(1)'">
    <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000&amp;h=7e7b68fad19738b5649a1bfb78ff46e9" alt="Download on the App Store" style={{ height: '48px',  }} />
  </a>
  
  <a href="#" style={{ textDecoration: 'none', transition: 'transform 0.3s ease',  }} onMouseOver="this.style.transform='scale(1.05)'" onMouseOut="this.style.transform='scale(1)'">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ height: '48px',  }} />
  </a>
  
  <a href="#" style={{ textDecoration: 'none', transition: 'transform 0.3s ease',  }} onMouseOver="this.style.transform='scale(1.05)'" onMouseOut="this.style.transform='scale(1)'">
    <div style={{ height: '48px', display: 'flex', alignItems: 'center', background: '#000', border: '1px solid #a6a6a6', borderRadius: '6px', padding: '0 16px', gap: '8px',  }}>
      <i className="ph-fill ph-bag" style={{ fontSize: '24px', color: '#E60012',  }}></i>
      <div style={{ textAlign: 'left', lineHeight: '1',  }}>
        <div style={{ color: '#fff', fontSize: '10px', fontFamily: 'sans-serif',  }}>EXPLORE IT ON</div>
        <div style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold', fontFamily: 'sans-serif',  }}>AppGallery</div>
      </div>
    </div>
  </a>
</div>

<div className="bento-grid reveal" style={{ textAlign: 'left',  }}>

  
  <div className="bento-card bento-col-2 bento-row-2">
    <div className="bc-header"><i className="ph-fill ph-robot bc-icon"></i><span>Predicto AI Chat</span></div>
    <p style={{ color: 'var(--text2)', marginBottom: '24px', lineHeight: '1.6', fontSize: '16px',  }}>Aracınız size ne söylemek istiyor? Ona sorun. "Bugün motordan ses geldi, sorun nedir?" yazın ve anında analiz alın.</p>
    
    
    <div className="chat-ui-container" style={{ background: '#0a0a0a', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: '250px',  }}>
  <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px',  }}>
    <div style={{ width: '28px', height: '28px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000',  }}><i className="ph-bold ph-robot"></i></div>
    <div style={{ fontWeight: '600', fontSize: '14px',  }}>Predicto AI</div>
  </div>
  <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: '1',  }}>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end',  }}>
      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px 16px', borderRadius: '16px', borderBottomLeftRadius: '4px', fontSize: '13px', color: 'var(--text)', maxWidth: '85%', border: '1px solid rgba(249, 212, 35, 0.2)',  }}>
        <i className="ph-fill ph-warning" style={{ color: 'var(--accent)', marginRight: '4px',  }}></i> Uyarı: Turbo manifoldunda ufak bir basınç kaçağı tespit ettim. Yakıt tüketiminiz artabilir.
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'flex-end',  }}>
      <div style={{ background: 'var(--accent)', color: '#000', padding: '12px 16px', borderRadius: '16px', borderBottomRightRadius: '4px', fontSize: '13px', fontWeight: '600', maxWidth: '85%',  }}>
        Bu acil bir durum mu? Aracı kullanmaya devam edebilir miyim?
      </div>
    </div>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end',  }}>
      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px 16px', borderRadius: '16px', borderBottomLeftRadius: '4px', fontSize: '13px', color: 'var(--text)', maxWidth: '85%',  }}>
        Şu an için kritik değil (Tahmini ömür: %85). Ancak 500 km içinde servise göstermenizi öneririm. Size en yakın yetkili servisten randevu oluşturmamı ister misiniz?
      </div>
    </div>
  </div>
</div>
  </div>
  
  <div className="bento-card bento-row-2 flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front premium-status-card" style={{ background: 'radial-gradient(circle at center, #0a0e0c 0%, #050806 100%)', border: '1px solid rgba(0, 255, 136, 0.08)',  }}>
        <div className="bc-premium-row" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '16px', paddingTop: '16px',  }}>
          <div style={{ fontSize: '72px', fontWeight: '900', color: '#00ff88', lineHeight: '1',  }}>92<span style={{ fontSize: '32px',  }}>%</span></div>
          <div className="bc-title" style={{ color: 'var(--text2)', letterSpacing: '2px', fontWeight: '800', textAlign: 'center', fontSize: '14px',  }}>SÜRÜŞ SKORU</div>
          <div className="bc-premium-bar" style={{ width: '80%', margin: '8px 0', background: 'rgba(255,255,255,0.05)', height: '6px', borderRadius: '3px', overflow: 'hidden',  }}>
             <div className="bc-premium-bar-fill" style={{ width: '92%', background: '#00ff88', boxShadow: '0 0 15px #00ff88', height: '100%',  }}></div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', marginTop: '16px',  }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '6px',  }}><span style={{ color: 'var(--text2)',  }}>Pürüzsüz İvmelenme</span> <span style={{ color: '#00ff88', fontWeight: '700',  }}>+10p</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '6px',  }}><span style={{ color: 'var(--text2)',  }}>Optimum Vites</span> <span style={{ color: '#00ff88', fontWeight: '700',  }}>+15p</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px',  }}><span style={{ color: 'var(--text2)',  }}>Sert Viraj Alma</span> <span style={{ color: '#ff4444', fontWeight: '700',  }}>-5p</span></div>
          </div>
        </div>
      </div>
      <div className="flip-card-back">
        <h4><i className="ph-fill ph-trophy"></i> Sürüş Skoru</h4>
        <p>Frenleme, viraj alma ve ivmelenme verileriniz analiz edilerek günlük olarak hesaplanır.</p>
      </div>
    </div>
  </div>

  
  <div className="bento-card bento-row-2 flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front" style={{ background: 'linear-gradient(135deg, #1a0b0b 0%, #050806 100%)', border: '1px solid rgba(255, 68, 68, 0.08)', overflow: 'hidden', borderRadius: '20px',  }}>
        <div className="bc-header"><i className="ph-fill ph-flag-checkered bc-icon" style={{ color: '#ff4444',  }}></i><span>Yarış Telemetrisi</span></div>
        <div className="bc-title">Maksimum Yanal G</div>
        <div className="bc-value" style={{ color: '#ff4444', fontSize: '28px',  }}>1.2 <span className="bc-unit" style={{ color: '#ff4444',  }}>G</span></div>
        <div className="bc-graph">
          <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,20 Q20,10 40,30 T80,15 T100,20" fill="none" stroke="#ff4444" strokeWidth="0.8" strokeLinecap="round"/>
            <path d="M0,20 Q20,10 40,30 T80,15 T100,20 L100,40 L0,40 Z" fill="rgba(255,68,68,0.08)" />
          </svg>
        </div>
        <div className="bc-title" style={{ marginTop: '16px',  }}>Yarış Hız Grafiği</div>
        <div className="bc-graph" style={{ height: '32px', marginTop: '8px',  }}>
          <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,30 Q10,30 20,15 T40,5 T60,25 T80,10 T100,10" fill="none" stroke="#2196F3" strokeWidth="0.8" strokeLinecap="round"/>
            <path d="M0,30 Q10,30 20,15 T40,5 T60,25 T80,10 T100,10 L100,40 L0,40 Z" fill="rgba(33,150,243,0.08)" />
          </svg>
        </div>
        <div style={{ position: 'absolute', bottom: '20px', right: '20px', textAlign: 'right',  }}>
          <div style={{ color: 'var(--text2)', fontSize: '11px',  }}>EN İYİ TUR</div>
          <div style={{ color: '#fff', fontFamily: 'monospace', fontWeight: '700', fontSize: '16px',  }}>2:18.421</div>
        </div>
      </div>
      <div className="flip-card-back">
        <h4><i className="ph-fill ph-flag-checkered"></i> Pist Modu</h4>
        <p>Tur zamanlarınızı, G-kuvveti grafiklerini ve hızlanmanızı profesyonel bir pilot gibi analiz edin.</p>
      </div>
    </div>
  </div>

</div>
</div>
</section>


<section style={{ padding: '100px 0', background: 'var(--bg)',  }}>
  <div className="container">
    <div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px',  }}>CİHAZ ÖZELLİKLERİ VE KESTİRİMCİ BAKIM</div>
    <h2 style={{ textAlign: 'center', marginBottom: '60px',  }}>Aracınızın Gerçek Zamanlı Check-Up Raporu</h2>
    
    <div className="bento-grid reveal">
      
      
      <div className="bento-card bento-col-2 flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front" style={{ background: 'linear-gradient(135deg, #0d1611 0%, #050806 100%)', border: '1px solid rgba(0, 255, 136, 0.08)',  }}>
            <div className="bc-header"><i className="ph-fill ph-leaf bc-icon" style={{ color: '#00FF88',  }}></i><span>Güncel Verimlilik</span></div>
            <div className="bc-title">Sürüş Modu</div>
            <div className="bc-value" style={{ color: '#00FF88',  }}>ECO <span className="bc-unit" style={{ color: '#00FF88',  }}>MODE</span></div>
            <div className="bc-progress-bg" style={{ background: 'rgba(255,255,255,0.04)',  }}><div className="bc-progress-fill" style={{ width: '85%', background: '#00FF88', boxShadow: '0 0 10px #00FF88',  }}></div></div>
            <div style={{ textAlign: 'right', fontSize: '12px', color: 'rgba(0, 255, 136, 0.6)', marginTop: '8px', fontFamily: 'monospace', fontWeight: '700',  }}>AKTİF</div>
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-leaf"></i> Sürüş Modu</h4>
            <p>Yakıt verimliliğinizi anlık olarak analiz eder. Sürüş stilinizi çevre dostu (ECO) tüketim aralığında tutarak yakıt tasarrufunuzu maksimuma çıkarır.</p>
          </div>
        </div>
      </div>

      
      <div className="bento-card flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front premium-status-card">
            <div className="bc-premium-row">
              <div className="bc-premium-icon"><i className="ph-fill ph-battery-charging" style={{ color: '#00ff88',  }}></i></div>
              <div className="bc-premium-info">
                <div className="bc-premium-title">Motor Sıcaklığı</div>
                <div className="bc-premium-val">85 <span style={{ fontSize: '14px', color: 'var(--text2)', fontWeight: '600',  }}>°C</span></div>
                <div className="bc-premium-bar">
                  <div className="bc-premium-bar-fill" style={{ width: '75%', background: '#00ff88', boxShadow: '0 0 8px #00ff88',  }}></div>
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

      
      <div className="bento-card flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="bc-header"><i className="ph-fill ph-car-profile bc-icon"></i><span>Bağlı Araç</span></div>
            <div className="bc-title">Motor Kodu</div>
            <div className="bc-value" style={{ fontSize: '24px',  }}>1.6 T-GDI</div>
            <div className="bc-status-tag online" style={{ marginTop: '20px',  }}>Go Bağlı</div>
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-car-profile"></i> Bağlı Araç</h4>
            <p>Preditech GO cihazınızın aracın OBD-II portuna takılı ve Bluetooth üzerinden uygulamanıza kesintisiz olarak bağlı olduğunu doğrular.</p>
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

      
      <div className="bento-card bento-col-2 bento-row-2 flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front" style={{ overflow: 'hidden', borderRadius: '20px',  }}>
            <div className="bc-header"><i className="ph-fill ph-gas-pump bc-icon"></i><span>Optimizasyon</span></div>
            <div className="bc-title">Anlık Tüketim</div>
            <div className="bc-value">4.4 <span className="bc-unit">L/100km</span></div>
            <div className="bc-graph">
          <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,20 Q20,10 40,30 T80,15 T100,20" fill="none" stroke="#ff4444" strokeWidth="0.8" strokeLinecap="round"/>
            <path d="M0,20 Q20,10 40,30 T80,15 T100,20 L100,40 L0,40 Z" fill="rgba(255,68,68,0.08)" />
          </svg>
        </div>
        <div className="bc-title" style={{ marginTop: '16px',  }}>Yarış Hız Grafiği</div>
        <div className="bc-graph" style={{ height: '32px', marginTop: '8px',  }}>
          <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,30 Q10,30 20,15 T40,5 T60,25 T80,10 T100,10" fill="none" stroke="#2196F3" strokeWidth="0.8" strokeLinecap="round"/>
            <path d="M0,30 Q10,30 20,15 T40,5 T60,25 T80,10 T100,10 L100,40 L0,40 Z" fill="rgba(33,150,243,0.08)" />
          </svg>
        </div>
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-gas-pump"></i> Anlık Tüketim</h4>
            <p>ECU enjeksiyon sürelerinden hesaplanan, o anki anlık yakıt sarfiyatınızdır. Gaz pedalı tepkilerinizi ayarlamanıza imkan tanır.</p>
          </div>
        </div>
      </div>

      
      <div className="bento-card flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front" style={{ overflow: 'hidden', borderRadius: '20px',  }}>
            <div className="bc-header"><i className="ph-fill ph-gauge bc-icon"></i><span>Telemetri</span></div>
            <div className="bc-title">Hızınız</div>
            <div className="bc-value">110 <span className="bc-unit">km/h</span></div>
            
        <div className="bc-title" style={{ marginTop: '16px',  }}>Yarış Hız Grafiği</div>
        <div className="bc-graph" style={{ height: '32px', marginTop: '8px',  }}>
          <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,30 Q10,30 20,15 T40,5 T60,25 T80,10 T100,10" fill="none" stroke="#2196F3" strokeWidth="0.8" strokeLinecap="round"/>
            <path d="M0,30 Q10,30 20,15 T40,5 T60,25 T80,10 T100,10 L100,40 L0,40 Z" fill="rgba(33,150,243,0.08)" />
          </svg>
        </div>
          </div>
          <div className="flip-card-back">
            <h4><i className="ph-fill ph-gauge"></i> Hızınız</h4>
            <p>Sürüş boyunca anlık hız değişimlerinizi yüksek sıklıklı ince çizgilerle göstererek hızlanma kararlılığınızı raporlar.</p>
          </div>
        </div>
      </div>

      
      <div className="bento-card flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front premium-status-card" style={{ background: 'linear-gradient(135deg, #0f1316 0%, #050708 100%)', border: '1px solid rgba(0, 191, 255, 0.08)',  }}>
            <div className="bc-premium-row">
              <div className="bc-premium-icon"><i className="ph-fill ph-lightning" style={{ color: '#00bfff', filter: 'drop-shadow(0 0 8px rgba(0, 191, 255, 0.3))',  }}></i></div>
              <div className="bc-premium-info">
                <div className="bc-premium-title">Akü Voltajı</div>
                <div className="bc-premium-val" style={{ color: '#00bfff',  }}>13.8 <span style={{ fontSize: '14px', color: 'var(--text2)', fontWeight: '600',  }}>V</span></div>
                <div className="bc-premium-bar">
                  <div className="bc-premium-bar-fill" style={{ width: '86%', background: '#00bfff', boxShadow: '0 0 8px #00bfff',  }}></div>
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


<section className="faq-section" style={{ background: 'var(--surface2)',  }}>
<div className="container">
<h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center',  }}>Uygulama Hakkında S.S.S.</h2>
<div className="faq-item">
<div className="faq-question">Uygulama tüm telefonlarla uyumlu mu?<span className="faq-icon">+</span></div>
<div className="faq-answer">Evet. Preditech App, iOS 14.0 ve üzeri ile Android 8.0 ve üzeri tüm akıllı telefonlarla tam uyumlu olarak çalışır.</div>
</div>
<div className="faq-item">
<div className="faq-question">İnternet bağlantısı olmadan çalışır mı?<span className="faq-icon">+</span></div>
<div className="faq-answer">Cihazdan anlık verileri (OBD/IMU) almak için sadece Bluetooth bağlantısı yeterlidir. Ancak Predicto AI ile sohbet etmek ve bulut tabanlı risk analizi yapmak için aktif bir internet bağlantısına ihtiyacınız vardır.</div>
</div>
<div className="faq-item">
<div className="faq-question">Çoklu araç (Garaj Modu) ekstra ücretli mi?<span className="faq-icon">+</span></div>
<div className="faq-answer">Hayır. Tek bir Preditech hesabı altında birden fazla Preditech cihazını ücretsiz olarak yönetebilirsiniz. Her aracın sağlık durumu ve sürüş skoru ayrı ayrı hesaplanır.</div>
</div>
</div>
</section>




    </>
  );
}
