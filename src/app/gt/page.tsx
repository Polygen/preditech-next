// @ts-nocheck
'use client';

import Script from 'next/script';

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
    /* OVERRIDE CACHED DECK STYLES */
    .deck-card {
      position: absolute !important;
      top: 50% !important;
      left: 50% !important;
      margin-top: -416px !important;
      margin-left: -195px !important;
      height: 833px !important;
      width: 390px !important;
      transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
      transform-origin: center center !important;
      cursor: pointer !important;
      border-radius: 40px !important;
      filter: grayscale(40%) brightness(0.6) !important;
    }
    
    /* KARTLARIN BASE DURUMU: Üst üste (tam merkezde, deste kapalı) */
    .deck-card-1 { transform: translateX(-60px) translateY(20px) rotate(-6deg) scale(0.85) !important; z-index: 1 !important; }
    .deck-card-2 { transform: translateX(-20px) translateY(10px) rotate(-2deg) scale(0.85) !important; z-index: 2 !important; }
    .deck-card-3 { transform: translateX(20px) translateY(10px) rotate(2deg) scale(0.85) !important; z-index: 3 !important; }
    .deck-card-4 { transform: translateX(60px) translateY(20px) rotate(6deg) scale(0.85) !important; z-index: 4 !important; }

    /* DESTE ALANINA FARE İLE GİRİLDİĞİNDE: Kartlar yelpaze gibi birbirinden ayrılır (fan out) */
    .gt-features-deck:hover .deck-card-1 { transform: translateX(-280px) translateY(20px) rotate(-8deg) scale(0.85) !important; }
    .gt-features-deck:hover .deck-card-2 { transform: translateX(-90px) translateY(10px) rotate(-2deg) scale(0.85) !important; }
    .gt-features-deck:hover .deck-card-3 { transform: translateX(90px) translateY(10px) rotate(2deg) scale(0.85) !important; }
    .gt-features-deck:hover .deck-card-4 { transform: translateX(280px) translateY(20px) rotate(8deg) scale(0.85) !important; }

    /* TEK BİR KARTIN ÜZERİNE GELİNDİĞİNDE: Sadece o kart büyür, dikleşir ve renklenir */
    .gt-features-deck:hover .deck-card-1:hover { transform: translateX(-280px) translateY(-30px) rotate(0deg) scale(0.95) !important; z-index: 20 !important; filter: grayscale(0%) brightness(1) !important; }
    .gt-features-deck:hover .deck-card-2:hover { transform: translateX(-90px) translateY(-30px) rotate(0deg) scale(0.95) !important; z-index: 20 !important; filter: grayscale(0%) brightness(1) !important; }
    .gt-features-deck:hover .deck-card-3:hover { transform: translateX(90px) translateY(-30px) rotate(0deg) scale(0.95) !important; z-index: 20 !important; filter: grayscale(0%) brightness(1) !important; }
    .gt-features-deck:hover .deck-card-4:hover { transform: translateX(280px) translateY(-30px) rotate(0deg) scale(0.95) !important; z-index: 20 !important; filter: grayscale(0%) brightness(1) !important; }

    /* TOOLTIP YAZILARI (Tanıtma kartı) */
    .deck-card-tooltip { width: 340px !important; bottom: 103% !important; padding: 20px 24px !important; }
    .deck-card-tooltip h3 { font-size: 22px !important; margin-bottom: 8px !important; }
    .deck-card-tooltip p { font-size: 15px !important; line-height: 1.5 !important; }

    .gt-features-deck:hover .deck-card:not(:hover) {
      opacity: 0.4 !important;
      filter: grayscale(80%) blur(5px) brightness(0.3) !important;
    }

    @media (max-width: 1024px) {
      .gt-features-deck {
        height: auto !important;
        flex-direction: column !important;
        gap: 40px !important;
        margin: 40px 0 !important;
      }
      .deck-card {
        position: relative !important;
        top: auto !important;
        left: auto !important;
        margin: 0 auto !important;
        transform: none !important;
        filter: none !important;
        opacity: 1 !important;
        z-index: 1 !important;
      }
      .deck-card-tooltip { display: none !important; }
    }
  ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- NAVBAR -->


<!-- STICKY BUY BAR -->
<div class="sticky-buy-bar" id="buyBar">
<div class="container">
<div class="product-title" style="color:var(--text)">Preditech GT</div>
<div class="actions">
<span class="price">9.800₺</span>
<a href="/erken-erisim" class="btn btn-ghost">Ön Sipariş</a>
</div>
</div>
</div>

<!-- MASSIVE HERO -->
<section class="massive-hero">
<div class="particles"></div>
<div class="container" style="z-index:2">
<div class="section-label" style="justify-content:center;margin-bottom:24px;color:var(--text)">PİST GÜNLERİ İÇİN ÜRETİLDİ</div>
<h1 style="background:linear-gradient(180deg,#FFF 20%,#888 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Saliseleri<br>Sayın.</h1>
<p class="massive-hero-sub">Dahili 100Hz GNSS/GPS, süre ölçümleri, sektör zamanları ve liderlik tablosu ile profesyonel telemetri cebinizde.</p>
<div style="font-size:160px;font-weight:900;color:var(--text2);opacity:0.1;position:absolute;top:30%;left:50%;transform:translate(-50%, -50%)">GT</div>
<img src="/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158%202.png" alt="Preditech GT" class="massive-device-img" style="max-width: 400px;">
</div>
</section>



<!-- TECH SPECS -->
<section class="tech-specs-section">
<div class="container">
<div style="padding:80px 0 40px"><h2 style="font-size:48px;letter-spacing:-1px">Teknik Özellikler.</h2></div>

<div class="spec-grid">
<div class="spec-category">Konum ve Telemetri</div>
<div class="spec-details">
<div class="spec-item"><h4>Dahili GPS/GNSS</h4><p>U-Blox M10 Serisi, GPS, Galileo, GLONASS, BeiDou eşzamanlı çekim</p></div>
<div class="spec-item"><h4>Konum Örnekleme Hızı</h4><p class="mono">100 Hz (Saniyede 100 konum verisi)</p></div>
<div class="spec-item"><h4>Performans Ölçümleri</h4><p>0-100, 100-200, 1/4 Mil, Fren Mesafesi (60-0, 100-0)</p></div>
<div class="spec-item"><h4>Pist Modu</h4><p>Otomatik sektör zamanları tespiti, tur karşılaştırması</p></div>
</div>
</div>

<div class="spec-grid">
<div class="spec-category">Sensör ve İşlemci</div>
<div class="spec-details">
<div class="spec-item"><h4>IMU Sensör</h4><p>Ultra hassas 6-Eksenli (100Hz Örnekleme)</p></div>
<div class="spec-item"><h4>Kestirimci Bakım</h4><p>PRO modelindeki tüm yapay zeka hata tespit özellikleri dahil</p></div>
<div class="spec-item"><h4>Dahili Hafıza</h4><p>50 saate kadar internetsiz tur kaydı (Flash bellek)</p></div>
</div>
</div>

<div class="spec-grid">
<div class="spec-category">Bağlantı ve Fiziksel</div>
<div class="spec-details">
<div class="spec-item"><h4>Bağlantı</h4><p>Bluetooth 5.0 LE + Dahili Wi-Fi (Veri aktarımı için)</p></div>
<div class="spec-item"><h4>Boyutlar ve Ağırlık</h4><p>62 x 40 x 24 mm, 58 gram</p></div>
</div>
</div>

<div class="spec-grid">
<div class="spec-category">Kutu İçeriği</div>
<div class="spec-details" style="grid-template-columns:1fr">
<div class="spec-item">
<ul style="list-style:none;color:var(--text2);line-height:2">
<li>• Preditech GT Cihazı</li>
<li>• Manyetik Ön Cam GPS Anten Bağlantısı</li>
<li>• 1 Yıllık Preditech App GT (Track Mode) Aboneliği</li>
<li>• Özel Taşıma Kesesi</li>
</ul>
</div>
</div>
</div>

</div>
</div>
</section>

<!-- APP BENTO GRID (GT RACING) -->
<section class="app-bento-section">
  <div class="container">
    <div class="app-bento-header">
      <div class="section-label" style="justify-content:center;margin-bottom:24px">GT TELEMETRİ</div>
      <h2>Pist Süreleri Artık Cebinizde.</h2>
      <p>100Hz dahili GPS modülü ile 0-100 süreleri, tur zamanları, G kuvveti ve arkadaşlarınızla yarış liderlik tabloları uygulamanızda.</p>
    </div>
    
    <div class="bento-grid">
      <!-- Card 1: 0-100 Km/h -->
      <div class="bento-card bento-col-2 flip-card" style="min-height: 300px;">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="background: linear-gradient(135deg, #1b1c09 0%, #080803 100%); border: 1px solid rgba(232, 255, 0, 0.08);">
            <div class="bc-header"><i class="ph-fill ph-timer bc-icon" style="color: #e8ff00;"></i><span>Hızlanma Testi</span></div>
            <div class="bc-title">0-100 Km/h Testi</div>
            <div class="bc-value" style="color: #e8ff00; font-size: 40px;">3,87 <span class="bc-unit" style="color: #e8ff00;">s</span></div>
            <div class="bc-status-tag" style="background:rgba(232,255,0,0.1); color:#e8ff00; display:inline-block; max-width:max-content; margin-top:12px;"><i class="ph-fill ph-trophy"></i> Kişisel Rekor</div>
            <div class="bc-list" style="flex-direction:row; justify-content:space-between; margin-top:32px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.05);">
               <div><div style="font-size:11px;color:var(--text2);">Maks. G</div><div style="font-weight:700;font-size:16px;">1,6 G</div></div>
               <div><div style="font-size:11px;color:var(--text2);">Maks. Devir</div><div style="font-weight:700;font-size:16px;">6.200 RPM</div></div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-timer"></i> Hızlanma Testi</h4>
            <p>100Hz GNSS/GPS alıcısı ile 0-100 km/s hızlanma sürenizi milisaniye doğruluğunda ölçer. Kişisel rekorlarınızı ve motor performansınızı kaydeder.</p>
          </div>
        </div>
      </div>

      <!-- Card 2: Pist Adı & Harita -->
      <div class="bento-card flip-card" style="min-height: 300px;">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-flag-checkered bc-icon"></i><span>En Yakın Pist</span></div>
            <div class="bc-title">İstanbulPark Pisti</div>
            <div style="color:var(--text2); font-size:13px;">5,34 km - F1 Pisti</div>
            <img src="/assets/images/general/f1pist.png" alt="İstanbulPark Pisti" class="bc-track-map" style="width: 100%; height: auto; max-height: 160px; object-fit: contain; margin-top: 16px; filter: drop-shadow(0 0 10px rgba(249, 212, 35, 0.25));">
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-flag-checkered"></i> İstanbulPark Pisti</h4>
            <p>5.338 km uzunluğu, 14 teknik virajı ve meşhur 8. virajı ile dünyanın en heyecan verici ve zorlu Formula 1 yarış pistlerinden biridir.</p>
          </div>
        </div>
      </div>

      <!-- Card 3: G-Force (Redesigned Radar) -->
      <div class="bento-card flip-card" style="background: #080808; border-color: rgba(255,255,255,0.03); min-height: 300px; padding: 0;">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="display: flex; justify-content: center; align-items: center;">
            <div class="gforce-radar-container" style="transform: scale(1.3);">
          <div class="gforce-radar">
            <!-- Radar rings -->
            <div class="radar-ring outer"></div>
            <div class="radar-ring mid"></div>
            <div class="radar-ring inner"></div>
            <!-- Axis lines -->
            <div class="gforce-radar-axis-h"></div>
            <div class="gforce-radar-axis-v"></div>
            <!-- Axis text -->
            <div class="radar-axis-text g1">1G</div>
            <div class="radar-axis-text g2">2G</div>
            <!-- Curved Axis text -->
            <svg width="150" height="150" style="position:absolute; top:0; left:0; pointer-events:none; overflow:visible; z-index:3;">
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
            <!-- Canvas for trailing yellow line -->
            <canvas class="gforce-radar-trail" width="150" height="150" style="position:absolute; top:0; left:0; pointer-events:none; z-index:4;"></canvas>
            <div class="gforce-radar-dot"></div>
            <!-- Center dynamic G value -->
            <div class="gforce-radar-value">0.00 G</div>
          </div>
        </div>
          </div>
          <div class="flip-card-back" style="display: flex; flex-direction: column; justify-content: center;">
            <h4><i class="ph-fill ph-compass"></i> G-Kuvveti Ölçer</h4>
            <p>100Hz ivmeölçer verileri ile aracınızın maruz kaldığı tüm yanal ve doğrusal ivmeleri gerçek zamanlı olarak izler.</p>
          </div>
        </div>
      </div>

      <!-- Card 4: Canlı Yarış (Redesigned) -->
      <div class="bento-card bento-col-2 bc-race-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
            <div class="bc-race-header">
          <i class="ph-fill ph-users"></i>
          <span>Canlı Yarış</span>
        </div>
        <div class="bc-race-title">Rakip Süresi (Ali Turgut)</div>
        
        <!-- Thick progress bar with competitor's face inside it -->
        <div class="bc-race-bar-container">
          <div class="bc-race-bar-fill" style="width: 65%;">
            <div class="bc-race-avatar">
              <img src="https://i.pravatar.cc/150?img=33" alt="Ali Turgut">
            </div>
          </div>
        </div>
        
        <div class="bc-race-stats">
          <div class="bc-race-stat-col">
            <span class="bc-race-stat-label">Senin Süren</span>
            <span class="bc-race-stat-val green">4,01s</span>
          </div>
          <div class="bc-race-stat-col right">
            <span class="bc-race-stat-label">Rakiple Fark</span>
            <span class="bc-race-stat-val red">-0,59s</span>
          </div>
        </div>
          </div>
          <div class="flip-card-back" style="display: flex; flex-direction: column; justify-content: center;">
            <h4><i class="ph-fill ph-users"></i> Canlı Yarış</h4>
            <p>Seçtiğiniz hayalet rakiplerin sürelerine karşı anlık ilerlemenizi ve milisaniyelik farkları kesintisiz gösterir.</p>
          </div>
        </div>
      </div>

      <!-- Card 5: Pist Hava Durumu -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-cloud-sun bc-icon"></i><span>Pist Şartları</span></div>
            <div class="bc-title">Pist Hava Durumu</div>
            <table class="bc-table" style="margin-top:4px;">
              <tr><td style="padding: 10px 0;"><i class="ph-fill ph-drop" style="color:#3388FF;"></i> Nem</td><td style="padding: 10px 0;">% 70</td></tr>
              <tr><td style="padding: 10px 0;"><i class="ph-fill ph-wind" style="color:#00FF88;"></i> Rüzgar</td><td style="padding: 10px 0;">15 km/h</td></tr>
              <tr><td style="padding: 10px 0;"><i class="ph-fill ph-thermometer" style="color:var(--accent);"></i> Sıcaklık</td><td style="padding: 10px 0;">25 °C</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: none;"><i class="ph-fill ph-mountains" style="color:#aaa;"></i> Rakım</td><td style="padding: 10px 0; border-bottom: none;">130 m</td></tr>
            </table>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-cloud-sun"></i> Pist Şartları</h4>
            <p>Tur zamanlarını doğrudan etkileyen pist sıcaklığı, rüzgar hızı ve hava nem oranını anlık ölçerek ideal sürüş koşullarını hesaplar.</p>
          </div>
        </div>
      </div>

      <!-- Card 6: Liderlik Tablosu -->
      <div class="bento-card flip-card" style="min-height: 280px;">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-ranking bc-icon"></i><span>Sosyal</span></div>
            <div class="bc-title">Liderlik Tablosu</div>
            <div class="bc-list">
              <div class="bc-list-item">
                 <div class="bc-list-item-left"><div class="bc-avatar"><img src="https://i.pravatar.cc/150?img=11"></div> Siz</div>
                 <div class="bc-list-item-right" style="color:var(--accent);font-weight:700;">1.</div>
              </div>
              <div class="bc-list-item">
                 <div class="bc-list-item-left"><div class="bc-avatar"><img src="https://i.pravatar.cc/150?img=33"></div> Ali T.</div>
                 <div class="bc-list-item-right">2.</div>
              </div>
              <div class="bc-list-item">
                 <div class="bc-list-item-left"><div class="bc-avatar"><img src="https://i.pravatar.cc/150?img=15"></div> Emre B.</div>
                 <div class="bc-list-item-right">3.</div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-ranking"></i> Liderlik Tablosu</h4>
            <p>Aynı pistte süre ölçümü yapan diğer Preditech kullanıcıları arasındaki sıralamanızı anlık olarak günceller ve rekabeti canlı tutar.</p>
          </div>
        </div>
      </div>
      <!-- Card 7: Canlı Hibrit Füzyon Dalga Formu (Yapay Zeka Ağları) -->
      <div class="bento-card bento-col-2 flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-activity bc-icon"></i><span>Hibrit Veri Füzyonu</span></div>
            <div class="bc-title">NVH Grafiği</div>
            <div class="bc-graph" style="overflow: hidden;">
               <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none" style="overflow: visible;">
                <g class="infinite-fusion-wave">
                  <!-- OBD Dalga -->
                  <path d="M0,20 Q2,15 4,20 T10,20 Q12,25 14,20 T20,20 Q22,12 24,20 T30,20 Q32,28 34,20 T40,20 Q42,16 44,20 T50,20 Q52,24 54,20 T60,20 Q62,10 64,20 T70,20 Q72,28 74,20 T80,20 Q82,15 84,20 T90,20 Q92,25 94,20 T100,20 Q102,15 104,20 T110,20 Q112,25 114,20 T120,20 Q122,12 124,20 T130,20 Q132,28 134,20 T140,20 Q142,16 144,20 T150,20 Q152,24 154,20 T160,20 Q162,10 164,20 T170,20 Q172,28 174,20 T180,20 Q182,15 184,20 T190,20 Q192,25 194,20 T200,20" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.6"/>
                  <!-- NVH Dalga -->
                  <path d="M0,20 Q2,28 5,20 T10,20 Q12,12 15,20 T20,20 Q22,25 25,20 T30,20 Q32,15 35,20 T40,20 Q42,28 45,20 T50,20 Q52,10 55,20 T60,20 Q62,24 65,20 T70,20 Q72,16 75,20 T80,20 Q82,28 85,20 T90,20 Q92,12 95,20 T100,20 Q102,28 105,20 T110,20 Q112,12 115,20 T120,20 Q122,25 125,20 T130,20 Q132,15 135,20 T140,20 Q142,28 145,20 T150,20 Q152,10 155,20 T160,20 Q162,24 165,20 T170,20 Q172,16 175,20 T180,20 Q182,28 185,20 T190,20 Q192,12 195,20 T200,20" fill="none" stroke="var(--accent)" stroke-width="0.8"/>
                </g>
              </svg>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-activity"></i> Hibrit Veri Füzyonu</h4>
            <p>100Hz frekansındaki CAN-bus ve ivmeölçer verilerini birleştirerek motorunuzdaki ve yürüyen aksamdaki anomalileri analiz eder.</p>
          </div>
        </div>
      </div>

      <!-- Card 7b: P0106 Hata Kodu (Alert) -->
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

      <!-- Card 7c: Buji Sağlığı (from PRO) -->
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

      <!-- Card 7d: Şanzıman Sağlığı (from PRO) -->
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

<!-- SANAL YARIŞ SİMÜLASYONU BÖLÜMÜ -->
<section class="section" style="background: var(--bg); border-top: 1px solid var(--border); padding: 80px 0;">
  <div class="container">
    <div class="app-bento-header">
      <div class="section-label" style="justify-content:center;margin-bottom:24px;color:var(--accent)">YARIŞ VE TELEMETRİ EKRANLARI</div>
      <h2>Yarış Hakkında Her Şey Burada.</h2>
      <p>0-100 hızlanma testleriniz, yarış öncesi hava ve pist şartları, detaylı yolculuk telemetrileriniz ve sanal hayalet rakiplerinize karşı yarışabileceğiniz interaktif simülatörünüz parmaklarınızın ucunda.</p>
    </div>
    
    <div class="gt-features-deck">
      <!-- 1. Sol Panel: Sanal Yarışma Simülasyonu -->
      <div class="deck-card deck-card-1">
        <div class="deck-card-tooltip">
          <h3>Yarış Simülatörü</h3>
          <p>Kendi kaydettiğiniz 0-100 sürelerinizi arkadaşlarınızın en iyi skorlarıyla canlı olarak yarıştırın.</p>
        </div>
        <div class="sim-section" style="padding:0; background:transparent; border:none; box-shadow:none; align-items:center; justify-content:center; height:100%;">
          <div class="telematics-phone-screen" style="width:100%; max-width:390px; height:833px; padding:0; display:flex; flex-direction:column; background:#060606; margin:0 auto; border-radius:40px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(255, 255, 255, 0.05);">
          <div style="flex:1; overflow:hidden; padding:24px 20px 24px 20px;">
        
        <div style="font-size: 11px; color: var(--accent); font-weight: 700; text-transform: uppercase; margin-bottom: 20px; letter-spacing: 1px;">Yarışçılar</div>
        
        <!-- Racers VS Box -->
        <div class="sim-vs-container">
          <!-- Noyan Şen -->
          <div class="sim-racer-card green">
            <div class="sim-racer-avatar-big">
              <img src="https://i.pravatar.cc/150?img=11" alt="Noyan Ş.">
            </div>
            <div class="sim-racer-name">Noyan Ş.</div>
            <div class="sim-racer-car">Mazda MX-5</div>
            <div class="sim-racer-dropdown">Mazda MX-5</div>
            <div class="sim-racer-best">
              <div class="lbl">En İyi</div>
              <div class="val green">8,01s</div>
              <div class="date">1 Mar 2025</div>
            </div>
          </div>
          
          <div class="sim-vs-badge">VS</div>
          
          <!-- Ali Turgut -->
          <div class="sim-racer-card red">
            <div class="sim-racer-avatar-big" style="border-color: #FF4444; box-shadow: 0 0 15px rgba(255,68,68,0.25);">
              <img src="https://i.pravatar.cc/150?img=33" alt="Ali T.">
            </div>
            <div class="sim-racer-name">Ali T.</div>
            <div class="sim-racer-car">Lancer Evo X</div>
            <div class="sim-racer-dropdown">Lancer Evo X</div>
            <div class="sim-racer-best">
              <div class="lbl">En İyi</div>
              <div class="val red">7,21s</div>
              <div class="date">1 Mar 2025</div>
            </div>
          </div>
        </div>
        
        <div style="font-size: 11px; color: var(--accent); font-weight: 700; text-transform: uppercase; margin-bottom: 12px; letter-spacing: 1px;">Sanal Yarışma Simülasyonu</div>
        
        <!-- Sim Progress Bar -->
        <div class="sim-timeline-container">
          <div class="sim-timeline-header">
            <span>Başlangıç</span>
            <span style="color: var(--accent);">0 km/h → 100 km/h</span>
            <span style="color: #FF4444;">Bitiş</span>
          </div>
          <div class="sim-timeline-bar-bg">
            <div class="sim-track-ali" id="simTrackAli"></div>
            <div class="sim-track-noyan" id="simTrackNoyan"></div>
            <!-- Noyan Avatar -->
            <div class="sim-timeline-avatar" id="avatarSiz" style="left: 0%; border-color: #F9D423; z-index: 3;">
              <img src="https://i.pravatar.cc/150?img=11" alt="Siz">
            </div>
            <!-- Ali Avatar -->
            <div class="sim-timeline-avatar" id="avatarRakip" style="left: 0%; border-color: #FF4444; z-index: 2;">
              <img src="https://i.pravatar.cc/150?img=33" alt="Ali">
            </div>
          </div>
        </div>
        
        <button class="sim-replay-btn" id="startSimBtn">Tekrar Oynat</button>
        
        <!-- Live Metrics Boxes -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px;">
          <div style="background: rgba(255,255,255,0.02); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.03);">
            <div style="font-size: 12px; color: var(--text2); text-transform: uppercase;">Süre</div>
            <div style="font-size: 21px; font-weight: 800; color: #00ff88; margin-top: 4px;" id="simSüre">8,01s</div>
            <div style="font-size: 11px; color: #00ff88; margin-top: 2px;">2. Sıra</div>
          </div>
          <div style="background: rgba(255,255,255,0.02); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.03);">
            <div style="font-size: 12px; color: var(--text2); text-transform: uppercase;">Fark</div>
            <div style="font-size: 21px; font-weight: 800; color: #ff4444; margin-top: 4px; white-space: nowrap;" id="simFark">-0,80s</div>
            <div style="font-size: 11px; color: #ff4444; margin-top: 2px;">Ali Önde</div>
          </div>
          <div style="background: rgba(255,255,255,0.02); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.03);">
            <div style="font-size: 12px; color: var(--text2); text-transform: uppercase;">Rakip Süresi</div>
            <div style="font-size: 21px; font-weight: 800; color: #ff4444; margin-top: 4px;" id="simRakipSüre">7,21s</div>
            <div style="font-size: 11px; color: #ff4444; margin-top: 2px;">Ali Birinci</div>
          </div>
        </div>
        
        <!-- Speed Graph (Denser and Thinner) -->
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px;">
          <span style="font-size: 12px; font-weight: 700; color:#fff;">Hızınız</span>
          <span class="sim-racer-btn" style="width: auto; margin:0; padding: 4px 10px; font-size: 10px;">Mazda MX-5</span>
        </div>
        
        <div class="bc-graph" style="background: rgba(0,0,0,0.4); border-color: rgba(255,255,255,0.03); min-height: 105px; padding: 8px;">
          <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
            <!-- Siz (Noyan Şen) - Yellow smoother graph -->
            <path d="M 0,38 Q 10,38 18,30 L 22,30 Q 30,25 35,20 L 40,20 Q 50,15 55,10 L 60,11 Q 75,5 100,2" fill="none" stroke="#F9D423" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" id="graphSizPath" stroke-dasharray="150" stroke-dashoffset="150"/>
            <!-- Ali Turgut - Red smoother graph -->
            <path d="M 0,38 Q 8,36 15,25 L 18,25 Q 26,18 32,14 L 35,14 Q 45,8 50,5 L 53,6 Q 70,2 100,0.5" fill="none" stroke="#FF4444" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" id="graphAliPath" stroke-dasharray="150" stroke-dashoffset="150"/>
          </svg>
        </div>
        
        <div style="display: flex; gap: 16px; margin-top: 12px; font-size: 11px; justify-content: center;">
          <span style="display:flex; align-items:center; gap:6px;"><span style="width:8px; height:8px; border-radius:50%; background:#F9D423;"></span> Siz (Noyan Şen)</span>
          <span style="display:flex; align-items:center; gap:6px;"><span style="width:8px; height:8px; border-radius:50%; background:#FF4444;"></span> Ali Turgut</span>
        </div>
          </div>
        </div>
      </div>
      </div>
      
      <!-- 2. Sağ Panel: Yolculuklar ve Yarış Haritası -->
      <div class="deck-card deck-card-2">
        <div class="deck-card-tooltip">
          <h3>Yolculuk Haritası</h3>
          <p>Tüm seyahatlerinizin detaylı telemetri haritalarını, hızlanma ve frenleme noktalarını inceleyin.</p>
        </div>
        <div class="telematics-phone-screen" style="width:100%; max-width:390px; height:833px; margin:0 auto; padding: 0; box-shadow: none; border: none; background: transparent;">
           <img src="/assets/images/app/yolculuk detayları.png" alt="Yolculuk Detayları" style="width: 100%; height: 100%; object-fit: cover; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(255, 255, 255, 0.05);">
        </div>
      </div>
      
      <!-- 3. Sağ Panel: Hızlanma Testi -->
      <div class="deck-card deck-card-3">
        <div class="deck-card-tooltip">
          <h3>Hızlanma Testi</h3>
          <p>0-100 ve ara hızlanmalarınızdaki G-kuvveti dağılımını milisaniye hassasiyetinde görüntüleyin.</p>
        </div>
        <div class="telematics-phone-screen" style="width:100%; max-width:390px; height:833px; margin:0 auto; padding: 0; box-shadow: none; border: none; background: transparent;">
           <img src="/assets/images/general/hızlanma testi.png" alt="Hızlanma Testi" style="width: 100%; height: 100%; object-fit: cover; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(255, 255, 255, 0.05);">
        </div>
      </div>
      
      <!-- 4. Sağ Panel: Pist Yarış Öncesi -->
      <div class="deck-card deck-card-4">
        <div class="deck-card-tooltip">
          <h3>Pist Verileri</h3>
          <p>Pist verilerinizi saklayın ve pistteki diğer kişilerle kıyasıya yarışın.</p>
        </div>
        <div class="telematics-phone-screen" style="width:100%; max-width:390px; height:833px; margin:0 auto; padding: 0; box-shadow: none; border: none; background: transparent;">
           <img src="/assets/images/app/pist yaris oncesi.png" alt="Pist Yarış Öncesi" style="width: 100%; height: 100%; object-fit: cover; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(255, 255, 255, 0.05);">
        </div>
      </div>
    </div>
  </div>
</section>


<!-- EXTRA DEVICES -->
<section class="extra-devices">
<div class="container">
  <div class="section-label" style="justify-content:center;margin-bottom:24px">TİP-C YARDIMCI CİHAZLAR</div>
  <h2 style="text-align:center;margin-bottom:60px">Daha Fazlasını İsteyenlere.</h2>
  
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px">
    <div class="extra-device-card" style="cursor:pointer;" onclick="window.location='racebox.html'">
      <img src="/assets/images/devices/preditech racebox.png" alt="Racebox" style="object-fit:contain;">
      <div class="extra-info">
        <h4><a href="/racebox" style="color:inherit;text-decoration:none">RACEBOX</a> <span class="hub-tag">EKLENTİ</span></h4>
        <p>Sensör okumalarınızı tek ekranda toplayan performans HUB'ı. Type-C ile bağlanır.</p>
        <div style="font-weight:700; color:var(--text); margin-top:8px; font-size:16px;">3.500₺</div>
      </div>
    </div>
    <div class="extra-device-card" style="cursor:pointer;" onclick="window.location='sentinel.html'">
      <img src="/assets/images/devices/preditech sentinel.png" alt="Sentinel" style="object-fit:contain;">
      <div class="extra-info">
        <h4><a href="/sentinel" style="color:inherit;text-decoration:none">SENTINEL</a> <span class="hub-tag">EKLENTİ</span></h4>
        <p>OBD verilerini video üzerine yazan 4K akıllı Dashcam.</p>
        <div style="font-weight:700; color:var(--text); margin-top:8px; font-size:16px;">5.500₺</div>
      </div>
    </div>
    <div class="extra-device-card" style="cursor:pointer;" onclick="window.location='cursor.html'">
      <img src="/assets/images/devices/preditech cursor.png" alt="Cursor" style="object-fit:contain;">
      <div class="extra-info">
        <h4><a href="/cursor" style="color:inherit;text-decoration:none">CURSOR</a> <span class="hub-tag">EKLENTİ</span></h4>
        <p>AFR ve EGR verilerini dijital olarak gösteren akıllı gösterge (Gauge).</p>
        <div style="font-weight:700; color:var(--text); margin-top:8px; font-size:16px;">2.200₺</div>
      </div>
    </div>
  </div>
</div>
</section>
<!-- FAQ SECTION -->
<section class="faq-section" style="background:var(--surface2)">
<div class="container">
<h2 style="font-size:32px;margin-bottom:40px;text-align:center">GT Modeli S.S.S.</h2>
<div class="faq-item">
<div class="faq-question">GPS doğruluğu akıllı telefonlardan neden farklı?<span class="faq-icon">+</span></div>
<div class="faq-answer">Akıllı telefonların dahili GPS alıcıları genellikle 1Hz (Saniyede 1 kez) konum günceller. Pist sürelerinde bu saniyede 30 metre sapma demektir. Preditech GT, içindeki U-Blox M10 çipi ile saniyede 100 kez (100Hz) konum günceller. Bu sayede süre ve fren mesafesi ölçümleriniz milisaniye hassasiyetindedir.</div>
</div>
<div class="faq-item">
<div class="faq-question">PRO modelinin AI özelliklerini içeriyor mu?<span class="faq-icon">+</span></div>
<div class="faq-answer">Evet. GT modeli, amiral gemisi donanımımızdır. PRO modelinde bulunan 6 eksenli titreşim (IMU) ve yapay zeka kestirimci bakım (NVH Fusion) özelliklerinin tamamını barındırır. Performans tutkunları için ek olarak 100Hz Telemetri modülü entegre edilmiştir.</div>
</div>
<div class="faq-item">
<div class="faq-question">Pist günleri (Track Day) dışında günlük kullanılabilir mi?<span class="faq-icon">+</span></div>
<div class="faq-answer">Kesinlikle. Cihaz sürekli aracınızda takılı kalabilir. Normal sürüşlerinizde Predicto AI ve Kestirimci Bakım devrededir, piste veya performans testine (0-100 vb.) çıktığınızda uygulamadan "Pist Modu"nu (Track Mode) aktif etmeniz yeterlidir.</div>
</div>
<div class="faq-item">
<div class="faq-question">Pist sürelerini arkadaşlarımla paylaşabilir miyim?<span class="faq-icon">+</span></div>
<div class="faq-answer">Evet! GT versiyonunun uygulamasında Liderlik Tablosu (Leaderboard) özelliği bulunur. Aynı pistte sürüş yaptığınız arkadaşlarınızla derecelerinizi karşılaştırabilir, sosyal medyada G-kuvveti grafiklerinizle paylaşabilirsiniz.</div>
</div>
<div class="faq-item">
<div class="faq-question">Araç kamerasını (GoPro vb.) entegre edebilir miyim?<span class="faq-icon">+</span></div>
<div class="faq-answer">Şu an için test aşamasında olan "Video Telemetri" özelliği sayesinde, sürüş videolarınızın üzerine hız, G-Kuvveti ve süre verilerinizi overlay (katman) olarak ekleme güncellemesi çok yakında kullanıma sunulacaktır.</div>
</div>
</div>
</section>


<!-- WISHLIST & CTA SECTION -->
<section class="section wishlist-cta-section" style="background:linear-gradient(180deg, var(--bg), var(--surface)); border-top:1px solid var(--border);">
<div class="container">
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:40px;align-items:center;">
    <div class="card" style="background:rgba(255,215,0,0.05); border-color:var(--accent);">
      <h3 style="font-size:24px; color:var(--accent); margin-bottom:12px;">Premium Deneyim</h3>
      <p style="color:var(--text2); margin-bottom:24px; font-size:15px;">Öncelikli teslimat avantajından yararlanın. Erken sipariş vererek Preditech ekosistemine ilk adımı atın.</p>
      <a href="/erken-erisim" class="btn btn-primary" style="width:100%; justify-content:center;">Erken Erişime Katıl</a>
    </div>
    
    <div class="card" style="background:var(--surface2);">
      <h3 style="font-size:24px; margin-bottom:12px;">Ücretsiz Bekleme Listesi</h3>
      <p style="color:var(--text2); margin-bottom:24px; font-size:15px;">Şimdi sadece kayıt olun, resmi satışa çıktığımızda %40 özel indirim kuponunuzu e-posta adresinize gönderelim.</p>
      <div class="newsletter-box" style="margin:0;">
        <input type="email" placeholder="E-posta adresiniz">
        <button onclick="alert('Bekleme listesine eklendiniz! %40 İndirim kodunuz çıkış tarihinde iletilecektir.')">Listeye Katıl</button>
      </div>
    </div>
  </div>
</div>
</section>

<!-- FOOTER -->
<!-- FOOTER -->





` }} />
      
      <Script src="/js/gt.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'gtjs']) window['init' + 'gtjs'](); }} />
    </>
  );
}
