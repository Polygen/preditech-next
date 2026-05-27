// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'projs']) {
      window['init' + 'projs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- NAVBAR -->


<!-- STICKY BUY BAR -->
<div class="sticky-buy-bar" id="buyBar">
<div class="container">
<div class="product-title" style="color:var(--accent)">Preditech PRO</div>
<div class="actions">
<span class="price">2.500₺</span>
<a href="/erken-erisim" class="btn btn-primary">Ön Sipariş</a>
</div>
</div>
</div>

<!-- MASSIVE HERO -->
<section class="massive-hero accent-title">
<div class="particles"></div>
<div class="container" style="z-index:2">
<div class="section-label" style="justify-content:center;margin-bottom:24px">DÜNYADA İLK: OBD + IMU FÜZYONU</div>
<div class="user-tag">BİREYSEL KULLANICI</div><h1>Hisseden<br>Teknoloji.</h1>
<p class="massive-hero-sub">Sadece elektronik kodları değil, motorun fiziksel titreşimlerini de analiz eden 6 eksenli sensörü ile arızaları haftalar öncesinden öngörün.</p>
<div style="font-size:160px;font-weight:900;color:var(--accent);opacity:0.05;position:absolute;top:30%;left:50%;transform:translate(-50%, -50%)">PRO</div>
<img src="/assets/images/devices/GREG.png" alt="Preditech Device" class="massive-device-img">
</div>
</section>



<!-- TECH SPECS -->
<section class="tech-specs-section">
<div class="container">
<div style="padding:80px 0 40px"><h2 style="font-size:48px;letter-spacing:-1px">Teknik Özellikler.</h2></div>

<div class="spec-grid">
<div class="spec-category">Sensör ve İşlemci</div>
<div class="spec-details">
<div class="spec-item"><h4>IMU Sensör</h4><p>Ultra hassas 6-Eksenli (3-eksen İvmeölçer, 3-eksen Jiroskop)</p></div>
<div class="spec-item"><h4>Örnekleme Hızı</h4><p class="mono">100 Hz (Saniyede 100 veri paketi)</p></div>
<div class="spec-item"><h4>Füzyon Algoritması</h4><p>Dahili NVH (Noise, Vibration, Harshness) eşleştirme motoru</p></div>
<div class="spec-item"><h4>G-Kuvveti Ölçümü</h4><p>Var (Viraj, Frenleme ve İvmelenme skorlaması)</p></div>
</div>
</div>

<div class="spec-grid">
<div class="spec-category">Bağlantı ve Güç</div>
<div class="spec-details">
<div class="spec-item"><h4>Bluetooth</h4><p>Bluetooth 5.0 Low Energy (Gelişmiş menzil ve hız)</p></div>
<div class="spec-item"><h4>OBD Desteği</h4><p>ISO 15765-4 (CAN), J1850 PWM/VPW, ISO 9141-2, KWP2000</p></div>
<div class="spec-item"><h4>Çalışma Voltajı</h4><p class="mono">9V - 16V</p></div>
<div class="spec-item"><h4>Güç Tüketimi (Uyku)</h4><p class="mono">< 3mA (Akıllı uyku/uyanma döngüsü)</p></div>
</div>
</div>

<div class="spec-grid">
<div class="spec-category">Fiziksel Özellikler</div>
<div class="spec-details">
<div class="spec-item"><h4>Boyutlar</h4><p>42 x 35 x 22 mm</p></div>
<div class="spec-item"><h4>Ağırlık</h4><p>42 gram</p></div>
<div class="spec-item"><h4>Çalışma Sıcaklığı</h4><p class="mono">-40°C ~ +85°C</p></div>
<div class="spec-item"><h4>Kasa Materyali</h4><p>Endüstriyel sınıf ısıya dayanıklı polikarbon</p></div>
</div>
</div>

<div class="spec-grid">
<div class="spec-category">Kutu İçeriği</div>
<div class="spec-details" style="grid-template-columns:1fr">
<div class="spec-item">
<ul style="list-style:none;color:var(--text2);line-height:2">
<li>• Preditech PRO Cihazı</li>
<li>• Hızlı Başlangıç Kılavuzu</li>
<li>• 1 Yıllık Preditech App PRO Aboneliği (Predicto AI Dahil)</li>
<li>• Preditech Çıkartma Seti</li>
</ul>
</div>
</div>
</div>

</div>
</div>
</section>

<!-- APP BENTO GRID (PRO KESTİRİMCİ BAKIM) -->
<section class="app-bento-section">
  <div class="container">
    <div class="app-bento-header">
      <div class="section-label" style="justify-content:center;margin-bottom:24px;color:var(--accent)">PREDITECH APP PRO</div>
      <h2>Yapay Zeka Destekli Telemetri.</h2>
      <p>Arızalar gerçekleşmeden önce uyaran Predicto AI ve gerçek zamanlı NVH (titreşim) füzyon sistemi parmaklarınızın ucunda.</p>
    </div>
    
    <div class="bento-grid">
      <!-- Card 1: Araç Sağlık Skoru -->
      <div class="bento-card bento-col-2 flip-card" style="min-height: 240px;">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="background: linear-gradient(135deg, #0d1611 0%, #050806 100%); border: 1px solid rgba(0, 255, 136, 0.08);">
            <div class="bc-header"><i class="ph-fill ph-brain bc-icon" style="color: #00FF88;"></i><span>Predicto AI</span></div>
            <div class="bc-title">Motor Sağlık Skoru</div>
            <div class="bc-value" style="color: #00FF88;">98.5 <span class="bc-unit" style="color: #00FF88;">%</span></div>
            <div class="bc-progress-bg" style="background: rgba(255,255,255,0.04);"><div class="bc-progress-fill" style="width: 98.5%; background: #00FF88; box-shadow: 0 0 10px #00FF88;"></div></div>
            <div style="text-align:right; font-size:12px; color:rgba(0, 255, 136, 0.6); margin-top:8px; font-family:monospace; font-weight: 700;">STABİL</div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-brain"></i> Motor Sağlık Skoru</h4>
            <p>OBD parametreleri ile 6 eksenli mekanik hareketlerin yapay zeka ile birleştirilmesi (Füzyon) sonucu hesaplanan, motorunuzun anlık genel kondisyon yüzdesidir.</p>
          </div>
        </div>
      </div>

      <!-- Card 2: NVH Titreşim Spektrum -->
      <div class="bento-card bento-col-2 flip-card" style="min-height: 240px;">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-wave-sine bc-icon"></i><span>NVH Füzyonu</span></div>
            <div class="bc-title">Titreşim Spektrum Analizi</div>
            <div class="bc-graph" style="background:transparent; border:none; padding:0; flex-direction:column; justify-content:center; gap:8px;">
               <div style="display:flex; justify-content:space-between; width:100%; font-size:12px; color:var(--text2);"><span>X Ekseni (Yanal)</span><span style="color:#00FF88">Normal</span></div>
               <div style="width:100%; height:4px; background:rgba(255,255,255,0.05); border-radius:2px;"><div style="width:20%; height:100%; background:#00FF88;"></div></div>
               <div style="display:flex; justify-content:space-between; width:100%; font-size:12px; color:var(--text2); margin-top:4px;"><span>Y Ekseni (Dikey)</span><span style="color:var(--accent)">Orta Şiddet</span></div>
               <div style="width:100%; height:4px; background:rgba(255,255,255,0.05); border-radius:2px;"><div style="width:55%; height:100%; background:var(--accent);"></div></div>
               <div style="display:flex; justify-content:space-between; width:100%; font-size:12px; color:var(--text2); margin-top:4px;"><span>Z Ekseni (İleri)</span><span style="color:#00FF88">Normal</span></div>
               <div style="width:100%; height:4px; background:rgba(255,255,255,0.05); border-radius:2px;"><div style="width:15%; height:100%; background:#00FF88;"></div></div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-wave-sine"></i> NVH Spektrumu</h4>
            <p>Dahili 6 eksenli IMU sensörü ile motorun 3 boyutlu mekanik titreşim dalgalarını ölçer. Standart dışı rezonansları izleyerek mekanik aşınmaları tespit eder.</p>
          </div>
        </div>
      </div>

      <!-- Card 3: Kritik Arıza Uyarısı -->
      <div class="bento-card flip-card bento-col-2 bento-row-2">
        <div class="flip-card-inner">
          <div class="flip-card-front bento-alert">
            <i class="ph-fill ph-warning bc-icon"></i>
            <div class="bc-title" style="color:#FF4444; letter-spacing:2px; font-weight:800;">KRİTİK UYARI</div>
            <div class="bc-value">P0106</div>
            <div style="color:var(--text); font-weight:700; margin-top:12px;">Emme Manifoldu Mutlak Basınç Sorunu</div>
            <div class="bc-status-tag" style="background:rgba(255,68,68,0.2); color:#FF4444;">Yapay Zeka Teyitli Arıza</div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-warning-circle"></i> OBD-II Kodları</h4>
            <p>Araç bilgisayarından (ECU) okunan kritik hata kodlarını saniyeler içinde çözümler ve anında uyarır.</p>
          </div>
        </div>
      </div>

      <!-- Card 4: Erken Uyarı Tahmini -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front premium-status-card">
            <div class="bc-premium-row">
              <div class="bc-premium-icon"><i class="ph-fill ph-clock-countdown" style="color: #00ff88;"></i></div>
              <div class="bc-premium-info">
                <div class="bc-premium-title">Ateşleme Bobini</div>
                <div class="bc-premium-val">12 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">% Yıpranma</span></div>
                <div class="bc-premium-bar">
                  <div class="bc-premium-bar-fill" style="width: 12%; background: #00ff88; box-shadow: 0 0 8px #00ff88;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-clock-countdown"></i> Ateşleme Bobini</h4>
            <p>Bujilerin ateşleme rezonans dalgalarını yüksek frekansta analiz eder. Mikro gecikmeleri ölçerek ateşleme bobininin tahmini kalan ömrünü hesaplar.</p>
          </div>
        </div>
      </div>

      <!-- Card 4b: Buji Sağlığı -->
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

      <!-- Card 5: Bağlantı Durumu -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-bluetooth-connected bc-icon"></i><span>Bağlı Araç</span></div>
            <div class="bc-title">Preditech Pro Bağlı</div>
            <div class="bc-value" style="font-size:20px;">RX-8 (13B-MSP)</div>
            <div class="bc-status-tag online" style="margin-top: 16px;"><i class="ph-fill ph-circle"></i> 100Hz Veri Akışı</div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-bluetooth-connected"></i> Bağlantı Durumu</h4>
            <p>Preditech PRO donanımınızın yüksek bant genişlikli Bluetooth 5.0 üzerinden akıllı telefonunuza saniyede 100 veri paketiyle bağlı olduğunu gösterir.</p>
          </div>
        </div>
      </div>

      <!-- Card 5b: Şanzıman Sağlığı -->
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

      <!-- Card 6: Motor Devri (Dial) -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-gauge bc-icon"></i><span>Anlık Telemetri</span></div>
            <div class="bc-title">Motor Devri</div>
            <div class="bc-value">3.521 <span class="bc-unit">RPM</span></div>
            <div style="margin-top:24px; color:var(--text2); font-size:13px; display:flex; gap:16px;">
               <span>Su: <strong style="color:var(--text)">85 °C</strong></span>
               <span>Yağ: <strong style="color:var(--text)">90 °C</strong></span>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-gauge"></i> Motor Devri</h4>
            <p>Dakikadaki motor devrini (RPM) ve ECU'dan çekilen motor soğutma suyu ve yağ sıcaklıklarını anlık telemetri olarak görüntüler.</p>
          </div>
        </div>
      </div>

      <!-- Card 8: G-Force (Redesigned Radar) -->
      <div class="bento-card flip-card" style="background: #080808; border-color: rgba(255,255,255,0.03); min-height: 240px; padding: 0;">
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
      
      <!-- Card 7: Canlı Hibrit Füzyon Dalga Formu -->
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
            <p>OBD sensör sinyalleri ile IMU rezonans dalgalarının yapay zeka tarafından hibrit veri füzyonu ile nasıl harmanlandığını gösteren yüksek yoğunluklu dalga grafiğidir.</p>
          </div>
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
<h2 style="font-size:32px;margin-bottom:40px;text-align:center">PRO Modeli S.S.S.</h2>
<div class="faq-item">
<div class="faq-question">Kestirimci Bakım (AI) nasıl çalışır?<span class="faq-icon">+</span></div>
<div class="faq-answer">Preditech PRO içerisindeki 6 eksenli IMU sensörü, motorun çalışırken ürettiği titreşim dalgalarını saniyede 100 kez ölçer (100Hz). Bu fiziksel titreşim verisi, OBD'den gelen elektronik verilerle birleştirilir (NVH Data Fusion). Yapay zeka ağımız, "arıza öncesi yorgunluk" titreşimini tanıyarak, parça bozulmadan haftalar önce size uyarı gönderir.</div>
</div>
<div class="faq-item">
<div class="faq-question">Aracımın garantisini bozar mı?<span class="faq-icon">+</span></div>
<div class="faq-answer">Kesinlikle hayır. PRO modeli aracın ECU'suna yazma işlemi yapmaz. Güvenli "okuma" (Read-only) protokolleri kullandığı için %100 garanti dostudur.</div>
</div>
<div class="faq-item">
<div class="faq-question">Aylık ücret ödeyecek miyim?<span class="faq-icon">+</span></div>
<div class="faq-answer">Cihazı satın aldığınızda 1 yıllık Preditech App PRO aboneliği hediye edilir. 1 yılın sonunda, derin öğrenme sunucularının maliyeti için ufak bir yıllık abonelik ücreti yansıtılır. Abonelik yenilenmezse cihaz standart OBD tarayıcı olarak çalışmaya devam eder.</div>
</div>
<div class="faq-item">
<div class="faq-question">Hangi marka araçlarla uyumlu?<span class="faq-icon">+</span></div>
<div class="faq-answer">2001 sonrası üretilen benzinli ve 2004 sonrası üretilen dizel/hibrit tüm marka ve model araçlarla (OBD-II portuna sahip olan) uyumludur. Elektrikli araçlar (EV) için özel modülümüz geliştirme aşamasındadır.</div>
</div>
<div class="faq-item">
<div class="faq-question">Sürüş Skoru ne işe yarar?<span class="faq-icon">+</span></div>
<div class="faq-answer">Sürüş skoru, frenleme, ivmelenme ve viraj alma alışkanlıklarınızı analiz eder. Yüksek bir skor, aracınızı ne kadar az yıprattığınızı gösterir. Bu sayede hem yakıt tasarrufu sağlar hem de balata/disk gibi parçaların ömrünü uzatırsınız.</div>
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
      
      <Script src="/js/pro.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'projs']) window['init' + 'projs'](); }} />
    </>
  );
}
