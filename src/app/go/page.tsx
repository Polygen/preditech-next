// @ts-nocheck
'use client';

import Script from 'next/script';

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- NAVBAR -->


<!-- STICKY BUY BAR -->
<div class="sticky-buy-bar" id="buyBar">
<div class="container">
<div class="product-title">Preditech GO</div>
<div class="actions">
<span class="price">950₺</span>
<a href="/erken-erisim" class="btn btn-primary">Ön Sipariş</a>
</div>
</div>
</div>

<!-- MASSIVE HERO -->
<section class="massive-hero">
<div class="particles"></div>
<div class="grid-overlay"></div>
<div class="container" style="z-index:2">
<div class="section-label" style="justify-content:center;margin-bottom:24px">GÜNLÜK SÜRÜCÜNÜN ASİSTANI</div>
<div class="user-tag">BİREYSEL KULLANICI</div><h1>Aracınızla<br>Tanışın.</h1>
<p class="massive-hero-sub">OBD-II portuna saniyeler içinde takın, anlık yakıt tüketimini izleyin, motor hata kodlarını kendi başınıza silin. Güç artık sizin elinizde.</p>
<div style="font-size:120px;font-weight:900;color:var(--text2);opacity:0.1;position:absolute;top:30%;left:50%;transform:translate(-50%, -50%)">GO</div>
<img src="/assets/images/general/predB.png" alt="Preditech Device" class="massive-device-img">
</div>
</section>

<!-- TECH SPECS -->
<section class="tech-specs-section">
<div class="container">
<div style="padding:80px 0 40px"><h2 style="font-size:48px;letter-spacing:-1px">Teknik Özellikler.</h2></div>

<div class="spec-grid">
<div class="spec-category">Bağlantı ve Sensörler</div>
<div class="spec-details">
<div class="spec-item"><h4>Bluetooth</h4><p>Bluetooth 5.0 Low Energy (BLE)</p></div>
<div class="spec-item"><h4>OBD Desteği</h4><p>ISO 15765-4 (CAN), ISO 14230-4 (KWP2000), ISO 9141-2</p></div>
<div class="spec-item"><h4>Sensörler</h4><p>Yok (Yalnızca OBD okuma)</p></div>
<div class="spec-item"><h4>Örnekleme Hızı</h4><p class="mono">1 Hz</p></div>
</div>
</div>

<div class="spec-grid">
<div class="spec-category">Güç ve Fiziksel</div>
<div class="spec-details">
<div class="spec-item"><h4>Çalışma Voltajı</h4><p class="mono">9V - 16V</p></div>
<div class="spec-item"><h4>Güç Tüketimi (Uyku)</h4><p class="mono">< 3mA (Akü dostu)</p></div>
<div class="spec-item"><h4>Boyutlar</h4><p>42 x 35 x 22 mm</p></div>
<div class="spec-item"><h4>Ağırlık</h4><p>38 gram</p></div>
</div>
</div>

<div class="spec-grid">
<div class="spec-category">Kutu İçeriği</div>
<div class="spec-details" style="grid-template-columns:1fr">
<div class="spec-item">
<ul style="list-style:none;color:var(--text2);line-height:2">
<li>• Preditech GO Cihazı</li>
<li>• Hızlı Başlangıç Kılavuzu</li>
<li>• 1 Yıllık Preditech App Basic Aboneliği</li>
</ul>
</div>
</div>
</div>

</div>
</div>
</section>

<!-- APP BENTO GRID -->
<section class="app-bento-section">
  <div class="container">
    <div class="app-bento-header">
      <div class="section-label" style="justify-content:center;margin-bottom:24px">PREDITECH APP</div>
      <h2>Avucunuzun İçindeki Güç.</h2>
      <p>Aracınızın motor beynine (ECU) saniyeler içinde bağlanın, kendi arıza kodlarınızı silin ve anlık yakıt tüketimini cebinizden izleyin.</p>
    </div>
    
    <div class="bento-grid">
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

      <!-- Card 4: Kritik Arıza Uyarısı (Alert) -->
      <div class="bento-card bento-col-2 bento-alert">
        <i class="ph-fill ph-warning bc-icon"></i>
        <div class="bc-title" style="color:#FF4444; letter-spacing:2px; font-weight:800;">KRİTİK SEVİYE</div>
        <div class="bc-value">P0106</div>
        <div style="color:var(--accent); font-weight:700; margin-top:12px; letter-spacing:1px;">MOTOR YÖNETİMİ</div>
        <p>Emme Manifoldu Mutlak Basınç Performans Sorunu</p>
      </div>

      <!-- Card 5: Anlık Tüketim -->
      <div class="bento-card bento-col-2 flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-gas-pump bc-icon"></i><span>Optimizasyon</span></div>
            <div class="bc-title">Anlık Tüketim</div>
            <div class="bc-value">4.4 <span class="bc-unit">L/100km</span></div>
            <div class="bc-graph">
              <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path d="M0,35 Q10,32 20,34 T40,25 T60,28 T80,18 T100,12" fill="none" stroke="var(--accent)" stroke-width="0.8" stroke-linecap="round"/>
                <path d="M0,35 Q10,32 20,34 T40,25 T60,28 T80,18 T100,12 L100,40 L0,40 Z" fill="rgba(249,212,35,0.08)" />
              </svg>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-gas-pump"></i> Anlık Tüketim</h4>
            <p>ECU enjeksiyon sürelerinden hesaplanan, o anki anlık yakıt sarfiyatınızdır. Gaz pedalı tepkilerinizi ayarlamanıza imkan tanır.</p>
          </div>
        </div>
      </div>

      <!-- Card 6: Hız Grafiği -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="overflow: hidden; border-radius: 20px;">
            <div class="bc-header"><i class="ph-fill ph-gauge bc-icon"></i><span>Telemetri</span></div>
            <div class="bc-title">Hızınız</div>
            <div class="bc-value">110 <span class="bc-unit">km/h</span></div>
            
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-gauge"></i> Hızınız</h4>
            <p>Sürüş boyunca anlık hız değişimlerinizi yüksek sıklıklı ince çizgilerle göstererek hızlanma kararlılığınızı raporlar.</p>
          </div>
        </div>
      </div>

      <!-- Card 8: Akü Voltajı -->
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

      <!-- Card 8b: Buji Sağlığı -->
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

      <!-- Card 8c: Şanzıman Sağlığı -->
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
<h2 style="font-size:32px;margin-bottom:40px;text-align:center">GO Modeli S.S.S.</h2>
<div class="faq-item">
<div class="faq-question">Aracımın garantisini bozar mı?<span class="faq-icon">+</span></div>
<div class="faq-answer">Hayır. Preditech cihazları aracınızın beynine (ECU) yazılım atmaz veya kalıcı bir değişiklik yapmaz. Sadece "okuma" (Read-only) protokolleri üzerinden veri çektiği için hiçbir markanın resmi garantisini etkilemez.</div>
</div>
<div class="faq-item">
<div class="faq-question">GO modeli ile PRO modelinin farkı nedir?<span class="faq-icon">+</span></div>
<div class="faq-answer">GO modeli standart bir arıza okuma (OBD) cihazıdır. Sadece halihazırda oluşmuş elektronik arıza kodlarını (DTC) gösterir. PRO modelinde ise 100Hz IMU (Titreşim) sensörü ve yapay zeka bulunur; bu sayede arıza henüz kod olarak ECU'ya düşmeden haftalar önce mekanik titreşimden tespit edilebilir.</div>
</div>
<div class="faq-item">
<div class="faq-question">Akü tüketimi nasıl?<span class="faq-icon">+</span></div>
<div class="faq-answer">Cihazlarımızda ultra düşük güç tüketen (3mA altı) akıllı uyku modu mevcuttur. Aracınızı stop ettiğinizde cihaz uykuya geçer, aylar sonra bile akünüzü bitirmez.</div>
</div>
<div class="faq-item">
<div class="faq-question">Kurulumu ben yapabilir miyim?<span class="faq-icon">+</span></div>
<div class="faq-answer">Evet! Aracınızın direksiyonunun altında yer alan standart OBD-II portuna cihazı bir USB bellek takar gibi takmanız yeterlidir. Hiçbir usta veya alet gerekmez, sadece 5 saniyenizi alır.</div>
</div>
<div class="faq-item">
<div class="faq-question">Arıza kodlarını kendim silebilecek miyim?<span class="faq-icon">+</span></div>
<div class="faq-answer">Kesinlikle. Uygulama üzerinden Check Engine (Motor Arıza) lambasına sebep olan hata kodlarını anında silebilir, geçici hatalar için servise gitmekten kurtulabilirsiniz.</div>
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
      
      <Script src="/js/go.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'gojs']) window['init' + 'gojs'](); }} />
    </>
  );
}
