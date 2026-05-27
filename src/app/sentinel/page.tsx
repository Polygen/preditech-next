// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'sentineljs']) {
      window['init' + 'sentineljs']();
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
<div class="product-title" style="color:var(--accent)">Sentinel</div>
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
<h1>Yolu<br>Okuyun.</h1>
<p class="massive-hero-sub">Yalnızca yolu kaydetmekle kalmaz, aracınızın OBD verilerini anlık olarak videonun üzerine işler. Type-C ile ana cihazınıza tam entegre çalışır.</p>
<div style="font-size:140px;font-weight:900;color:var(--accent);opacity:0.05;position:absolute;top:30%;left:50%;transform:translate(-50%, -50%)">SENTINEL</div>
<img src="/assets/images/devices/preditech sentinel.png" alt="Sentinel" class="massive-device-img" style="max-width:450px;margin-top:20px;filter:drop-shadow(0 40px 80px rgba(255,215,0,0.15))">
</div>
</section>

<!-- TECH SPECS -->
<section class="tech-specs-section">
<div class="container">
<div style="padding:80px 0 40px"><h2 style="font-size:48px;letter-spacing:-1px">Teknik Özellikler.</h2></div>
<div class="spec-grid">
<div class="spec-category">Kamera ve Görüntü</div>
<div class="spec-details">
<div class="spec-item"><h4>Çözünürlük</h4><p>4K Ultra HD Ön Kamera, 1080p Araç İçi</p></div>
<div class="spec-item"><h4>Görüş Açısı</h4><p class="mono">170 Derece Geniş Açı</p></div>
<div class="spec-item"><h4>OBD Overlay</h4><p>Hız, Devir ve Fren verilerini doğrudan videoya işler</p></div>
<div class="spec-item"><h4>Gece Görüşü</h4><p>Gelişmiş Sony STARVIS sensör</p></div>
</div>
</div>
</div>
</section>

<!-- FAQ SECTION -->
<section class="faq-section" style="background:var(--surface2)">
<div class="container">
<h2 style="font-size:32px;margin-bottom:40px;text-align:center">SENTINEL S.S.S.</h2>
<div class="faq-item">
<div class="faq-question">Sentinel'in farkı nedir?<span class="faq-icon">+</span></div>
<div class="faq-answer">Sentinel standart bir yol kamerası değildir. Aracın OBD portundan (Preditech ana cihazı üzerinden) gelen anlık hız, devir, frenleme ve G-Kuvveti verilerini canlı olarak videonun üzerine telemetri şeklinde işler.</div>
</div>
</div>
</section>

<!-- FOOTER -->
<!-- FOOTER -->




` }} />
      
      <Script src="/js/sentinel.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'sentineljs']) window['init' + 'sentineljs'](); }} />
    </>
  );
}
