// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'raceboxjs']) {
      window['init' + 'raceboxjs']();
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
<div class="product-title" style="color:var(--accent)">Racebox</div>
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
<h1>Pistlerin<br>Hakimi.</h1>
<p class="massive-hero-sub">AFR, EGT, Boost ve daha fazlası. Ekstra sensörlerinizi Preditech ekosistemine bağlayan Type-C performans aktarım merkezi.</p>
<div style="font-size:140px;font-weight:900;color:var(--accent);opacity:0.05;position:absolute;top:30%;left:50%;transform:translate(-50%, -50%)">RACEBOX</div>
<img src="/assets/images/devices/preditech racebox.png" alt="Racebox" class="massive-device-img" style="max-width:450px;margin-top:20px;filter:drop-shadow(0 40px 80px rgba(255,215,0,0.15))">
</div>
</section>

<!-- TECH SPECS -->
<section class="tech-specs-section">
<div class="container">
<div style="padding:80px 0 40px"><h2 style="font-size:48px;letter-spacing:-1px">Teknik Özellikler.</h2></div>
<div class="spec-grid">
<div class="spec-category">Bağlantı ve Güç</div>
<div class="spec-details">
<div class="spec-item"><h4>Ana Bağlantı</h4><p>Type-C (Preditech PRO/GT ile doğrudan haberleşme)</p></div>
<div class="spec-item"><h4>Sensör Girişleri</h4><p class="mono">Analog 0-5V / O2 / EGT Portları</p></div>
<div class="spec-item"><h4>Veri Aktarım Hızı</h4><p>Gerçek zamanlı gecikmesiz aktarım</p></div>
<div class="spec-item"><h4>Çalışma Voltajı</h4><p class="mono">9V - 16V (OBD Üzerinden Besleme)</p></div>
</div>
</div>
</div>
</section>

<!-- FAQ SECTION -->
<section class="faq-section" style="background:var(--surface2)">
<div class="container">
<h2 style="font-size:32px;margin-bottom:40px;text-align:center">RACEBOX S.S.S.</h2>
<div class="faq-item">
<div class="faq-question">Racebox tek başına teşhis yapar mı?<span class="faq-icon">+</span></div>
<div class="faq-answer">Hayır. Racebox bir teşhis cihazı değil, akıllı bir veri aktarım merkezidir (Dock/Hub). Araca eklenen AFR, EGT, Boost gibi harici sensörlerin verilerini toplayarak Preditech ana cihazınıza (PRO, GT) Type-C üzerinden aktarır.</div>
</div>
</div>
</section>

<!-- FOOTER -->
<!-- FOOTER -->




` }} />
      
      <Script src="/js/racebox.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'raceboxjs']) window['init' + 'raceboxjs'](); }} />
    </>
  );
}
