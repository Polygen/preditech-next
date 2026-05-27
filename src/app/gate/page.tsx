// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'gatejs']) {
      window['init' + 'gatejs']();
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
<div class="product-title" style="color:var(--accent)">Gate</div>
<div class="actions">
<span class="price">Yakında</span>
<a href="/erken-erisim" class="btn btn-primary">Ön Sipariş</a>
</div>
</div>
</div>

<!-- MASSIVE HERO -->
<section class="massive-hero accent-title">
<div class="particles"></div>
<div class="container" style="z-index:2">
<div class="section-label" style="justify-content:center;margin-bottom:24px">YARDIMCI CİHAZ</div>
<h1>Tam<br>Güvenlik.</h1>
<p class="massive-hero-sub">Lojistik araçları için geliştirilmiş kapı ve dorse sensörü. Yükünüzün ne zaman ve nerede açıldığını saniye saniye merkezden takip edin.</p>
<div style="font-size:140px;font-weight:900;color:var(--accent);opacity:0.05;position:absolute;top:30%;left:50%;transform:translate(-50%, -50%)">GATE</div>
<img src="/assets/images/devices/preditech gate.png" alt="Gate" class="massive-device-img" style="max-width:450px;margin-top:20px;filter:drop-shadow(0 40px 80px rgba(255,215,0,0.15))">
</div>
</section>

<!-- TECH SPECS -->
<section class="tech-specs-section">
<div class="container">
<div style="padding:80px 0 40px"><h2 style="font-size:48px;letter-spacing:-1px">Teknik Özellikler.</h2></div>
<div class="spec-grid">
<div class="spec-category">Sensör ve Güvenlik</div>
<div class="spec-details">
<div class="spec-item"><h4>Sensör Tipi</h4><p>Endüstriyel Manyetik Kontak ve Mesafe Sensörü</p></div>
<div class="spec-item"><h4>Bağlantı Teknolojisi</h4><p class="mono">Bluetooth 5.0 BLE / RF (Titan/Watchdog ile eşleşir)</p></div>
<div class="spec-item"><h4>Pil Ömrü</h4><p>Dahili pil ile 3+ yıl operasyon süresi</p></div>
<div class="spec-item"><h4>Dayanıklılık</h4><p>IP67 Su ve Toz Geçirmez</p></div>
</div>
</div>
</div>
</section>

<!-- FAQ SECTION -->
<section class="faq-section" style="background:var(--surface2)">
<div class="container">
<h2 style="font-size:32px;margin-bottom:40px;text-align:center">GATE S.S.S.</h2>
<div class="faq-item">
<div class="faq-question">Nasıl çalışır?<span class="faq-icon">+</span></div>
<div class="faq-answer">Gate, dorse veya kargo bölümünün kapılarına yerleştirilen akıllı bir sensördür. Kapının açılıp kapandığı anları saniyesi saniyesine ve GPS konumu ile birlikte Watchdog veya Titan cihazı üzerinden merkeze raporlar.</div>
</div>
</div>
</section>

<!-- FOOTER -->
<!-- FOOTER -->




` }} />
      
      <Script src="/js/gate.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'gatejs']) window['init' + 'gatejs'](); }} />
    </>
  );
}
