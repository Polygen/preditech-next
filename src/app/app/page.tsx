// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'appjs']) {
      window['init' + 'appjs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- NAVBAR -->


<!-- MASSIVE HERO -->
<section class="massive-hero">
<div class="particles"></div>
<div class="container" style="z-index:2">
<div class="section-label" style="justify-content:center;margin-bottom:24px">SADECE BİR UYGULAMA DEĞİL</div>
<h1 style="font-size:clamp(50px,8vw,100px)">Aracınızın Dijital<br>İkizi.</h1>
<p class="massive-hero-sub" style="margin-bottom: 40px;">Yapay zeka asistanı Predicto, oyunlaştırılmış sürüş skoru ve detaylı telemetri analizleriyle aracınızın tüm kontrolünü avucunuzun içine alın.</p>

<div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin-bottom: 80px;">
  <!-- App Store -->
  <a href="#" style="text-decoration: none; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
    <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000&amp;h=7e7b68fad19738b5649a1bfb78ff46e9" alt="Download on the App Store" style="height:48px;">
  </a>
  <!-- Google Play -->
  <a href="#" style="text-decoration: none; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style="height:48px;">
  </a>
  <!-- App Gallery -->
  <a href="#" style="text-decoration: none; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
    <div style="height:48px; display:flex; align-items:center; background:#000; border:1px solid #a6a6a6; border-radius:6px; padding:0 16px; gap:8px;">
      <i class="ph-fill ph-bag" style="font-size:24px; color:#E60012;"></i>
      <div style="text-align:left; line-height:1;">
        <div style="color:#fff; font-size:10px; font-family:sans-serif;">EXPLORE IT ON</div>
        <div style="color:#fff; font-size:16px; font-weight:bold; font-family:sans-serif;">AppGallery</div>
      </div>
    </div>
  </a>
</div>

<div class="bento-grid reveal" style="text-align:left">

  <!-- Card 1: Predicto AI Chat -->
  <div class="bento-card bento-col-2 bento-row-2">
    <div class="bc-header"><i class="ph-fill ph-robot bc-icon"></i><span>Predicto AI Chat</span></div>
    <p style="color: var(--text2); margin-bottom: 24px; line-height: 1.6; font-size: 16px;">Aracınız size ne söylemek istiyor? Ona sorun. "Bugün motordan ses geldi, sorun nedir?" yazın ve anında analiz alın.</p>
    
    
    <div class="chat-ui-container" style="background:#0a0a0a; border-radius:16px; border:1px solid rgba(255,255,255,0.1); display:flex; flex-direction:column; overflow:hidden; min-height: 250px;">
  <div style="padding:12px 16px; background:rgba(255,255,255,0.03); border-bottom:1px solid rgba(255,255,255,0.05); display:flex; align-items:center; gap:12px;">
    <div style="width:28px; height:28px; background:var(--accent); border-radius:50%; display:flex; align-items:center; justify-content:center; color:#000;"><i class="ph-bold ph-robot"></i></div>
    <div style="font-weight:600; font-size:14px;">Predicto AI</div>
  </div>
  <div style="padding:16px; display:flex; flex-direction:column; gap:12px; flex-grow:1;">
    <div style="display:flex; gap:8px; align-items:flex-end;">
      <div style="background:rgba(255,255,255,0.05); padding:12px 16px; border-radius:16px; border-bottom-left-radius:4px; font-size:13px; color:var(--text); max-width:85%; border:1px solid rgba(249, 212, 35, 0.2);">
        <i class="ph-fill ph-warning" style="color:var(--accent); margin-right:4px;"></i> Uyarı: Turbo manifoldunda ufak bir basınç kaçağı tespit ettim. Yakıt tüketiminiz artabilir.
      </div>
    </div>
    <div style="display:flex; justify-content:flex-end;">
      <div style="background:var(--accent); color:#000; padding:12px 16px; border-radius:16px; border-bottom-right-radius:4px; font-size:13px; font-weight:600; max-width:85%;">
        Bu acil bir durum mu? Aracı kullanmaya devam edebilir miyim?
      </div>
    </div>
    <div style="display:flex; gap:8px; align-items:flex-end;">
      <div style="background:rgba(255,255,255,0.05); padding:12px 16px; border-radius:16px; border-bottom-left-radius:4px; font-size:13px; color:var(--text); max-width:85%;">
        Şu an için kritik değil (Tahmini ömür: %85). Ancak 500 km içinde servise göstermenizi öneririm. Size en yakın yetkili servisten randevu oluşturmamı ister misiniz?
      </div>
    </div>
  </div>
</div>
  </div>
  <!-- Card 2: Sürüş Skoru -->
  <div class="bento-card bento-row-2 flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front premium-status-card" style="background: radial-gradient(circle at center, #0a0e0c 0%, #050806 100%); border: 1px solid rgba(0, 255, 136, 0.08);">
        <div class="bc-premium-row" style="flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 16px; padding-top:16px;">
          <div style="font-size: 72px; font-weight: 900; color: #00ff88; line-height: 1;">92<span style="font-size: 32px;">%</span></div>
          <div class="bc-title" style="color:var(--text2); letter-spacing:2px; font-weight:800; text-align: center; font-size: 14px;">SÜRÜŞ SKORU</div>
          <div class="bc-premium-bar" style="width: 80%; margin: 8px 0; background:rgba(255,255,255,0.05); height:6px; border-radius:3px; overflow:hidden;">
             <div class="bc-premium-bar-fill" style="width: 92%; background: #00ff88; box-shadow: 0 0 15px #00ff88; height:100%;"></div>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px; width: 100%; margin-top: 16px;">
            <div style="display:flex; justify-content:space-between; font-size:13px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px;"><span style="color:var(--text2)">Pürüzsüz İvmelenme</span> <span style="color:#00ff88; font-weight:700">+10p</span></div>
            <div style="display:flex; justify-content:space-between; font-size:13px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px;"><span style="color:var(--text2)">Optimum Vites</span> <span style="color:#00ff88; font-weight:700">+15p</span></div>
            <div style="display:flex; justify-content:space-between; font-size:13px;"><span style="color:var(--text2)">Sert Viraj Alma</span> <span style="color:#ff4444; font-weight:700">-5p</span></div>
          </div>
        </div>
      </div>
      <div class="flip-card-back">
        <h4><i class="ph-fill ph-trophy"></i> Sürüş Skoru</h4>
        <p>Frenleme, viraj alma ve ivmelenme verileriniz analiz edilerek günlük olarak hesaplanır.</p>
      </div>
    </div>
  </div>

  <!-- Card 3: Pist Modu -->
  <div class="bento-card bento-row-2 flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front" style="background: linear-gradient(135deg, #1a0b0b 0%, #050806 100%); border: 1px solid rgba(255, 68, 68, 0.08); overflow:hidden; border-radius:20px;">
        <div class="bc-header"><i class="ph-fill ph-flag-checkered bc-icon" style="color: #ff4444;"></i><span>Yarış Telemetrisi</span></div>
        <div class="bc-title">Maksimum Yanal G</div>
        <div class="bc-value" style="color: #ff4444; font-size: 28px;">1.2 <span class="bc-unit" style="color: #ff4444;">G</span></div>
        <div class="bc-graph">
          <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,20 Q20,10 40,30 T80,15 T100,20" fill="none" stroke="#ff4444" stroke-width="0.8" stroke-linecap="round"/>
            <path d="M0,20 Q20,10 40,30 T80,15 T100,20 L100,40 L0,40 Z" fill="rgba(255,68,68,0.08)" />
          </svg>
        </div>
        <div class="bc-title" style="margin-top:16px;">Yarış Hız Grafiği</div>
        <div class="bc-graph" style="height:32px; margin-top:8px;">
          <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,30 Q10,30 20,15 T40,5 T60,25 T80,10 T100,10" fill="none" stroke="#2196F3" stroke-width="0.8" stroke-linecap="round"/>
            <path d="M0,30 Q10,30 20,15 T40,5 T60,25 T80,10 T100,10 L100,40 L0,40 Z" fill="rgba(33,150,243,0.08)" />
          </svg>
        </div>
        <div style="position:absolute; bottom:20px; right:20px; text-align:right;">
          <div style="color:var(--text2); font-size:11px;">EN İYİ TUR</div>
          <div style="color:#fff; font-family:monospace; font-weight:700; font-size:16px;">2:18.421</div>
        </div>
      </div>
      <div class="flip-card-back">
        <h4><i class="ph-fill ph-flag-checkered"></i> Pist Modu</h4>
        <p>Tur zamanlarınızı, G-kuvveti grafiklerini ve hızlanmanızı profesyonel bir pilot gibi analiz edin.</p>
      </div>
    </div>
  </div>

</div>
</div>
</section>

<!-- HEALTH & TELEMETRY CARDS SECTION -->
<section style="padding: 100px 0; background: var(--bg);">
  <div class="container">
    <div class="section-label" style="justify-content:center;margin-bottom:24px">CİHAZ ÖZELLİKLERİ VE KESTİRİMCİ BAKIM</div>
    <h2 style="text-align:center;margin-bottom:60px">Aracınızın Gerçek Zamanlı Check-Up Raporu</h2>
    
    <div class="bento-grid reveal">
      
      <!-- Card 1: ECO Mode -->
      <div class="bento-card bento-col-2 flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="background: linear-gradient(135deg, #0d1611 0%, #050806 100%); border: 1px solid rgba(0, 255, 136, 0.08);">
            <div class="bc-header"><i class="ph-fill ph-leaf bc-icon" style="color: #00FF88;"></i><span>Güncel Verimlilik</span></div>
            <div class="bc-title">Sürüş Modu</div>
            <div class="bc-value" style="color: #00FF88;">ECO <span class="bc-unit" style="color: #00FF88;">MODE</span></div>
            <div class="bc-progress-bg" style="background: rgba(255,255,255,0.04);"><div class="bc-progress-fill" style="width: 85%; background: #00FF88; box-shadow: 0 0 10px #00FF88;"></div></div>
            <div style="text-align:right; font-size:12px; color:rgba(0, 255, 136, 0.6); margin-top:8px; font-family:monospace; font-weight: 700;">AKTİF</div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-leaf"></i> Sürüş Modu</h4>
            <p>Yakıt verimliliğinizi anlık olarak analiz eder. Sürüş stilinizi çevre dostu (ECO) tüketim aralığında tutarak yakıt tasarrufunuzu maksimuma çıkarır.</p>
          </div>
        </div>
      </div>

      <!-- Card 2: Motor Sıcaklığı -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front premium-status-card">
            <div class="bc-premium-row">
              <div class="bc-premium-icon"><i class="ph-fill ph-battery-charging" style="color: #00ff88;"></i></div>
              <div class="bc-premium-info">
                <div class="bc-premium-title">Motor Sıcaklığı</div>
                <div class="bc-premium-val">85 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">°C</span></div>
                <div class="bc-premium-bar">
                  <div class="bc-premium-bar-fill" style="width: 75%; background: #00ff88; box-shadow: 0 0 8px #00ff88;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-battery-charging"></i> Motor Sıcaklığı</h4>
            <p>Motor soğutma sıvısının anlık sıcaklığını ölçer. İdeal çalışma aralığının korunmasını sağlayarak aşırı ısınma ve hararet riskini engeller.</p>
          </div>
        </div>
      </div>

      <!-- Card 3: Araba Marka / Profil -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-car-profile bc-icon"></i><span>Bağlı Araç</span></div>
            <div class="bc-title">Motor Kodu</div>
            <div class="bc-value" style="font-size:24px">1.6 T-GDI</div>
            <div class="bc-status-tag online" style="margin-top: 20px;">Go Bağlı</div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-car-profile"></i> Bağlı Araç</h4>
            <p>Preditech GO cihazınızın aracın OBD-II portuna takılı ve Bluetooth üzerinden uygulamanıza kesintisiz olarak bağlı olduğunu doğrular.</p>
          </div>
        </div>
      </div>

      <!-- Card 4: P0106 Alert -->
      <div class="bento-card bento-col-2 bento-row-2 bento-alert" style="justify-content: center; text-align: center; padding: 24px; background: radial-gradient(circle at center, #1A1A1A 0%, #060606 100%); border: 1px solid rgba(255,68,68,0.15);">
        <i class="ph-fill ph-warning bc-icon" style="color: #FF4444; font-size: 48px; margin: 0 auto 16px auto;"></i>
        <div class="bc-title" style="color:#FF4444; letter-spacing:2px; font-weight:800; text-align: center; font-size: 14px;">KRİTİK SEVİYE</div>
        <div class="bc-value" style="text-align: center; font-size: 64px; font-weight: 900; color: #FF4444; margin: 8px 0;">P0106</div>
        <div style="color:var(--accent); font-weight:800; margin-top:16px; font-size: 16px; letter-spacing:1px; text-align: center;">MOTOR YÖNETİMİ</div>
        <p style="text-align: center; color: var(--text2); margin-top: 8px; font-size: 14px;">Emme Manifoldu Mutlak Basınç Performans Sorunu</p>
        <div style="display: flex; gap: 8px; justify-content: center; margin-top: 24px; flex-wrap: wrap;">
          <div style="background: rgba(255,68,68,0.1); border: 1px solid rgba(255,68,68,0.2); padding: 8px 12px; border-radius: 8px; font-size: 11px; color: #FF4444; font-weight: 600;">Kablolama Temassızlığı</div>
          <div style="background: rgba(255,68,68,0.1); border: 1px solid rgba(255,68,68,0.2); padding: 8px 12px; border-radius: 8px; font-size: 11px; color: #FF4444; font-weight: 600;">Vakum Kaçağı</div>
          <div style="background: rgba(255,68,68,0.1); border: 1px solid rgba(255,68,68,0.2); padding: 8px 12px; border-radius: 8px; font-size: 11px; color: #FF4444; font-weight: 600;">Arızalı MAP Sensörü</div>
        </div>
      </div>

      <!-- Card 5: Anlık Tüketim -->
      <div class="bento-card bento-col-2 bento-row-2 flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="overflow: hidden; border-radius: 20px;">
            <div class="bc-header"><i class="ph-fill ph-gas-pump bc-icon"></i><span>Optimizasyon</span></div>
            <div class="bc-title">Anlık Tüketim</div>
            <div class="bc-value">4.4 <span class="bc-unit">L/100km</span></div>
            <div class="bc-graph">
          <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,20 Q20,10 40,30 T80,15 T100,20" fill="none" stroke="#ff4444" stroke-width="0.8" stroke-linecap="round"/>
            <path d="M0,20 Q20,10 40,30 T80,15 T100,20 L100,40 L0,40 Z" fill="rgba(255,68,68,0.08)" />
          </svg>
        </div>
        <div class="bc-title" style="margin-top:16px;">Yarış Hız Grafiği</div>
        <div class="bc-graph" style="height:32px; margin-top:8px;">
          <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,30 Q10,30 20,15 T40,5 T60,25 T80,10 T100,10" fill="none" stroke="#2196F3" stroke-width="0.8" stroke-linecap="round"/>
            <path d="M0,30 Q10,30 20,15 T40,5 T60,25 T80,10 T100,10 L100,40 L0,40 Z" fill="rgba(33,150,243,0.08)" />
          </svg>
        </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-gas-pump"></i> Anlık Tüketim</h4>
            <p>ECU enjeksiyon sürelerinden hesaplanan, o anki anlık yakıt sarfiyatınızdır. Gaz pedalı tepkilerinizi ayarlamanıza imkan tanır.</p>
          </div>
        </div>
      </div>

      <!-- Card 6: Hızınız -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="overflow: hidden; border-radius: 20px;">
            <div class="bc-header"><i class="ph-fill ph-gauge bc-icon"></i><span>Telemetri</span></div>
            <div class="bc-title">Hızınız</div>
            <div class="bc-value">110 <span class="bc-unit">km/h</span></div>
            
        <div class="bc-title" style="margin-top:16px;">Yarış Hız Grafiği</div>
        <div class="bc-graph" style="height:32px; margin-top:8px;">
          <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,30 Q10,30 20,15 T40,5 T60,25 T80,10 T100,10" fill="none" stroke="#2196F3" stroke-width="0.8" stroke-linecap="round"/>
            <path d="M0,30 Q10,30 20,15 T40,5 T60,25 T80,10 T100,10 L100,40 L0,40 Z" fill="rgba(33,150,243,0.08)" />
          </svg>
        </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-gauge"></i> Hızınız</h4>
            <p>Sürüş boyunca anlık hız değişimlerinizi yüksek sıklıklı ince çizgilerle göstererek hızlanma kararlılığınızı raporlar.</p>
          </div>
        </div>
      </div>

      <!-- Card 7: Akü Voltajı -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front premium-status-card" style="background: linear-gradient(135deg, #0f1316 0%, #050708 100%); border: 1px solid rgba(0, 191, 255, 0.08);">
            <div class="bc-premium-row">
              <div class="bc-premium-icon"><i class="ph-fill ph-lightning" style="color: #00bfff; filter: drop-shadow(0 0 8px rgba(0, 191, 255, 0.3));"></i></div>
              <div class="bc-premium-info">
                <div class="bc-premium-title">Akü Voltajı</div>
                <div class="bc-premium-val" style="color: #00bfff;">13.8 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">V</span></div>
                <div class="bc-premium-bar">
                  <div class="bc-premium-bar-fill" style="width: 86%; background: #00bfff; box-shadow: 0 0 8px #00bfff;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-lightning"></i> Akü Voltajı</h4>
            <p>Aracınızın alternatörünün ürettiği şarj voltajını anlık ölçer. Akünüzün ömrünü ve şarj dinamosunun sağlığını kontrol altında tutar.</p>
          </div>
        </div>
      </div>

      <!-- Card 8: Buji Sağlığı -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front premium-status-card">
            <div class="bc-premium-row">
              <div class="bc-premium-icon"><i class="ph-fill ph-lightning" style="color: #00ff88;"></i></div>
              <div class="bc-premium-info">
                <div class="bc-premium-title">Buji Sağlığı</div>
                <div class="bc-premium-val">15 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">% Yıpranma</span></div>
                <div class="bc-premium-bar">
                  <div class="bc-premium-bar-fill" style="width: 15%; background: #00ff88; box-shadow: 0 0 8px #00ff88;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-lightning"></i> Buji Sağlığı</h4>
            <p>Ateşleme sistemi verimliliğini ölçerek bujilerinizin ne kadar yıprandığını gösterir ve olası güç kayıplarını engeller.</p>
          </div>
        </div>
      </div>

      <!-- Card 9: Şanzıman Sağlığı -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front premium-status-card">
            <div class="bc-premium-row">
              <div class="bc-premium-icon"><i class="ph-fill ph-gear" style="color: #F9D423;"></i></div>
              <div class="bc-premium-info">
                <div class="bc-premium-title">Şanzıman Sağlığı</div>
                <div class="bc-premium-val">42 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">% Yıpranma</span></div>
                <div class="bc-premium-bar">
                  <div class="bc-premium-bar-fill" style="width: 42%; background: #F9D423; box-shadow: 0 0 8px #F9D423;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-gear"></i> Şanzıman Sağlığı</h4>
            <p>Şanzıman devir değişimlerindeki mekanik vuruntuları analiz ederek kavrama ömrünüzü tahmin eder.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- FAQ SECTION -->
<section class="faq-section" style="background:var(--surface2)">
<div class="container">
<h2 style="font-size:32px;margin-bottom:40px;text-align:center">Uygulama Hakkında S.S.S.</h2>
<div class="faq-item">
<div class="faq-question">Uygulama tüm telefonlarla uyumlu mu?<span class="faq-icon">+</span></div>
<div class="faq-answer">Evet. Preditech App, iOS 14.0 ve üzeri ile Android 8.0 ve üzeri tüm akıllı telefonlarla tam uyumlu olarak çalışır.</div>
</div>
<div class="faq-item">
<div class="faq-question">İnternet bağlantısı olmadan çalışır mı?<span class="faq-icon">+</span></div>
<div class="faq-answer">Cihazdan anlık verileri (OBD/IMU) almak için sadece Bluetooth bağlantısı yeterlidir. Ancak Predicto AI ile sohbet etmek ve bulut tabanlı risk analizi yapmak için aktif bir internet bağlantısına ihtiyacınız vardır.</div>
</div>
<div class="faq-item">
<div class="faq-question">Çoklu araç (Garaj Modu) ekstra ücretli mi?<span class="faq-icon">+</span></div>
<div class="faq-answer">Hayır. Tek bir Preditech hesabı altında birden fazla Preditech cihazını ücretsiz olarak yönetebilirsiniz. Her aracın sağlık durumu ve sürüş skoru ayrı ayrı hesaplanır.</div>
</div>
</div>
</section>

<!-- FOOTER -->
<!-- FOOTER -->



` }} />
      
      <Script src="/js/app.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'appjs']) window['init' + 'appjs'](); }} />
    </>
  );
}
