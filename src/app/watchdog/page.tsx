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
<div class="product-title" style="color:var(--accent)">Preditech WATCHDOG</div>
<div class="actions">
<span class="price">Teklif Alın</span>
<a href="/erken-erisim" class="btn btn-primary">Ön Sipariş</a>
</div>
</div>
</div>

<!-- MASSIVE HERO -->
<section class="massive-hero accent-title">
<div class="particles"></div>
<div class="container" style="z-index:2">
<div class="section-label" style="justify-content:center;margin-bottom:24px">YENİ NESİL ÇÖZÜM</div>
<div class="user-tag">TİCARİ / FİLO</div><h1>Filonuzun<br>Gözcüsü.</h1>
<p class="massive-hero-sub">Araçlarınızı 7/24 izleyin. Kestirimci bakım ile yolda kalmaları engelleyin ve filo giderlerinizi minimize edin.</p>
<div style="font-size:140px;font-weight:900;color:var(--accent);opacity:0.05;position:absolute;top:30%;left:50%;transform:translate(-50%, -50%)">WATCHDOG</div>
<img src="/assets/images/devices/preditech watchdog.png" alt="Preditech" class="corp-device-img">
</div>
</section>



  </div>
</div>

<!-- TECH SPECS -->
<section class="tech-specs-section">
<div class="container">
<div style="padding:80px 0 40px"><h2 style="font-size:48px;letter-spacing:-1px">Teknik Özellikler.</h2></div>
<div class="spec-grid">
<div class="spec-category">Filo Optimizasyonu</div>
<div class="spec-details">
<div class="spec-item"><h4>Bağlantı Teknolojisi</h4><p>4G LTE / 5G Ready Kesintisiz Veri Aktarımı</p></div>
<div class="spec-item"><h4>GPS Çipi</h4><p class="mono">U-Blox Yüksek Hassasiyetli (1 Metre Sapma)</p></div>
<div class="spec-item"><h4>Sürücü Analizi</h4><p>Ani fren, ivmelenme ve sert viraj skorlaması</p></div>
<div class="spec-item"><h4>Dahili Pil</h4><p>Aküsüz durumda bile 12 saat lokasyon iletme</p></div>
</div>
</div>
</div>
</div>
</section>

<!-- APP BENTO GRID (WATCHDOG FİLO) -->
<section class="app-bento-section">
  <div class="container">
    <div class="app-bento-header">
      <div class="section-label" style="justify-content:center;margin-bottom:24px;color:var(--accent)">FİLO YÖNETİMİ</div>
      <h2>Yönetim Ekranı.</h2>
      <p>Tüm araçlarınızı tek bir ekrandan kontrol edin. Sürücü skorları, anlık yakıt harcamaları ve API entegrasyonu.</p>
    </div>
    
    <div class="bento-grid">
      <!-- Card 1: Filo Aracı Seçimi -->
      <div class="bento-card bento-col-2">
        <div class="bc-header"><i class="ph-fill ph-car-profile bc-icon"></i><span>Araç Yönetimi</span></div>
        <div class="bc-title">Filo Aracı Seçimi</div>
        <div class="bc-value" style="font-size:24px;">34 PRD 2026</div>
        <p style="color:var(--text2); font-size:13px; margin-top:8px;">Şasi: WBA33XXXXX0001</p>
        <div class="bc-status-tag online">Watchdog Aktif</div>
      </div>

      <!-- Card 2: Yakıt Gideri -->
      <div class="bento-card bento-col-2">
        <div class="bc-header"><i class="ph-fill ph-currency-circle-dollar bc-icon"></i><span>Finansal Rapor</span></div>
        <div class="bc-title">Haftalık Yakıt Gideri</div>
        <div class="bc-value">3.540 <span class="bc-unit">TL</span></div>
        <div class="bc-graph">
           <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
             <rect x="0" y="20" width="10" height="20" fill="rgba(255,255,255,0.1)" />
             <rect x="15" y="15" width="10" height="25" fill="rgba(255,255,255,0.1)" />
             <rect x="30" y="25" width="10" height="15" fill="rgba(255,255,255,0.1)" />
             <rect x="45" y="10" width="10" height="30" fill="var(--accent)" />
             <rect x="60" y="20" width="10" height="20" fill="rgba(255,255,255,0.1)" />
             <rect x="75" y="5" width="10" height="35" fill="rgba(255,255,255,0.1)" />
             <rect x="90" y="15" width="10" height="25" fill="rgba(255,255,255,0.1)" />
           </svg>
        </div>
      </div>

      <!-- Card 3: Anlık Tüketim -->
      <div class="bento-card">
        <div class="bc-header"><i class="ph-fill ph-gas-pump bc-icon"></i><span>Canlı Veri</span></div>
        <div class="bc-title">Anlık Tüketim</div>
        <div class="bc-value">4.4 <span class="bc-unit">L/100km</span></div>
        <div class="bc-status-tag" style="background:rgba(0,255,136,0.1); color:#00FF88; display:inline-block; max-width:max-content; margin-top:12px;">Eco Sürüş</div>
      </div>

      <!-- Card 4: Optimizasyon Tasarrufu -->
      <div class="bento-card bento-col-3">
        <div class="bc-header"><i class="ph-fill ph-trend-down bc-icon"></i><span>Yapay Zeka Önerisi</span></div>
        <div class="bc-title">Sürüş Optimizasyonu</div>
        <p style="color:var(--text2); font-size:14px; margin-bottom:16px;">Vites atışları yapay zeka önerisine göre ayarlanırsa motor torku daha verimli kullanılabilir.</p>
        <div style="display:flex; gap:24px; background:rgba(255,255,255,0.02); padding:16px; border-radius:12px;">
           <div style="flex:1;">
             <div style="font-size:12px; color:var(--text2); text-transform:uppercase;">Yakıt Sarfiyatı</div>
             <div style="font-size:24px; font-weight:800; color:#FF4444;">12 %</div>
           </div>
           <div style="width:1px; background:rgba(255,255,255,0.05);"></div>
           <div style="flex:1;">
             <div style="font-size:12px; color:var(--text2); text-transform:uppercase;">Potansiyel Tasarruf</div>
             <div style="font-size:24px; font-weight:800; color:#00FF88;">420 ₺</div>
           </div>
        </div>
      </div>

      <!-- Card 5: Sürücü Skoru -->
      <div class="bento-card bento-col-2">
        <div class="bc-header"><i class="ph-fill ph-star bc-icon"></i><span>Performans</span></div>
        <div class="bc-title">Sürücü Skoru (Ali Turgut)</div>
        <div class="bc-value" style="color:var(--accent);">88 <span class="bc-unit">/100</span></div>
        <div class="bc-progress-bg"><div class="bc-progress-fill" style="width: 88%;"></div></div>
        <div style="display:flex; justify-content:space-between; margin-top:12px; font-size:12px; color:var(--text2);">
          <span>Frenleme: %95</span>
          <span>İvmelenme: %80</span>
        </div>
      </div>

      <!-- Card 6: Plan Durumu -->
      <div class="bento-card bento-col-2">
        <div class="bc-header"><i class="ph-fill ph-shield-check bc-icon"></i><span>Kurumsal API</span></div>
        <div class="bc-title">Plan Durumu</div>
        <div class="bc-value" style="font-size:24px;">Kurumsal PRO Plan</div>
        <ul style="list-style:none; color:var(--text2); margin-top:16px; font-size:13px; line-height:2;">
           <li><i class="ph-fill ph-check-circle" style="color:#00FF88;"></i> 7/24 Kesintisiz Telemetri</li>
           <li><i class="ph-fill ph-check-circle" style="color:#00FF88;"></i> Web Dashboard Erişimi</li>
           <li><i class="ph-fill ph-check-circle" style="color:#00FF88;"></i> Detaylı Raporlama Sistemi</li>
        </ul>
      </div>

    </div>
  </div>
</section>


<!-- EXTRA DEVICES -->
<section class="extra-devices">
<div class="container">
  <div class="section-label" style="justify-content:center;margin-bottom:24px">TİP-C YARDIMCI CİHAZLAR</div>
  <h2 style="text-align:center;margin-bottom:60px">Tam Güvenlik ve Kontrol.</h2>
  
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:32px">
    <div class="extra-device-card" style="cursor:pointer;" onclick="window.location='gate.html'">
      <img src="/assets/images/devices/preditech gate.png" alt="Gate" style="object-fit:contain;height:200px;">
      <div class="extra-info">
        <h4><a href="/gate" style="color:inherit;text-decoration:none">GATE</a> <span class="hub-tag">EKLENTİ</span></h4>
        <p>Lojistik araçları için kapı ve dorse sensörü.</p>
      </div>
    </div>
    <div class="extra-device-card" style="cursor:pointer;" onclick="window.location='signal.html'">
      <img src="/assets/images/devices/preditech signal.png" alt="Signal" style="object-fit:contain;height:200px;">
      <div class="extra-info">
        <h4><a href="/signal" style="color:inherit;text-decoration:none">SIGNAL</a> <span class="hub-tag">EKLENTİ</span></h4>
        <p>Acil durumlar için sürücü kabininde SOS butonu.</p>
      </div>
    </div>
  </div>
</div>
</section>
<!-- FAQ SECTION -->
<section class="faq-section" style="background:var(--surface2)">
<div class="container">
<h2 style="font-size:32px;margin-bottom:40px;text-align:center">WATCHDOG Modeli S.S.S.</h2>
<div class="faq-item">
<div class="faq-question">Watchdog cihazını kiralık filo araçlarına takabilir miyiz?<span class="faq-icon">+</span></div>
<div class="faq-answer">Kesinlikle. Gizli montaj imkanı ve dahili bataryası sayesinde cihaz söküldüğünde bile merkeze son konumunu ve sabotaj uyarısını iletir.</div>
</div>
<div class="faq-item">
<div class="faq-question">Sürücü skorlama sistemi hangi metrikleri baz alır?<span class="faq-icon">+</span></div>
<div class="faq-answer">Ani hızlanma, sert fren, virajlara hızlı girme ve gereksiz rölanti gibi parametreler 100Hz ivmeölçer ile ölçülüp yapay zeka tarafından 100 üzerinden puanlanır.</div>
</div>
<div class="faq-item">
<div class="faq-question">Yetkisiz kullanım durumunda motoru nasıl durdururum?<span class="faq-icon">+</span></div>
<div class="faq-answer">Watchdog, opsiyonel röle bağlantısıyla merkezden gönderilen tek bir komutla (araç güvenli hıza düştüğünde) motor blokajı (Immobilizer) yapabilmektedir.</div>
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
      <a href="kurumsal-satis.html?device=watchdog" class="btn btn-primary" style="width:100%; justify-content:center;">Toplu Satış Teklifi Al (Adet: 6.000₺)</a>
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
      
      <Script src="/js/watchdog.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'watchdogjs']) window['init' + 'watchdogjs'](); }} />
    </>
  );
}
