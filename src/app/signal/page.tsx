// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'signaljs']) {
      window['init' + 'signaljs']();
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
<div class="product-title" style="color:var(--accent)">Signal</div>
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
<h1>Anında<br>Müdahale.</h1>
<p class="massive-hero-sub">Kaza, gasp veya acil sağlık durumlarında sürücünün merkeze tek tuşla anında konum ve alarm göndermesini sağlayan Type-C acil durum modülü.</p>
<div style="font-size:140px;font-weight:900;color:var(--accent);opacity:0.05;position:absolute;top:30%;left:50%;transform:translate(-50%, -50%)">SIGNAL</div>
<img src="/assets/images/devices/preditech signal.png" alt="Signal" class="massive-device-img" style="max-width:450px;margin-top:20px;filter:drop-shadow(0 40px 80px rgba(255,215,0,0.15))">
</div>
</section>

<!-- TECH SPECS -->
<section class="tech-specs-section">
<div class="container">
<div style="padding:80px 0 40px"><h2 style="font-size:48px;letter-spacing:-1px">Teknik Özellikler.</h2></div>
<div class="spec-grid">
<div class="spec-category">Tasarım ve İletişim</div>
<div class="spec-details">
<div class="spec-item"><h4>Tasarım</h4><p>Gizli montajlanabilir, LED aydınlatmalı fiziksel buton</p></div>
<div class="spec-item"><h4>Tetikleme Türü</h4><p class="mono">Manuel basım, Anında Acil Durum Sinyali</p></div>
<div class="spec-item"><h4>Bağlantı</h4><p>Type-C ile doğrudan ana telematik cihazına bağlıdır</p></div>
<div class="spec-item"><h4>Aksiyon</h4><p>Merkeze "Acil" kodlu konum ve araç verisi yollar</p></div>
</div>
</div>
</div>
</section>

<!-- FAQ SECTION -->
<section class="faq-section" style="background:var(--surface2)">
<div class="container">
<h2 style="font-size:32px;margin-bottom:40px;text-align:center">SIGNAL S.S.S.</h2>
<div class="faq-item">
<div class="faq-question">Ne işe yarar?<span class="faq-icon">+</span></div>
<div class="faq-answer">Signal, acil durumlarda (kaza, saldırı vb.) sürücünün kolayca erişebileceği fiziksel bir SOS butonudur. Basıldığı an operasyon merkezine "ACİL DURUM" uyarısı ve canlı konum gönderilir.</div>
</div>
</div>
</section>

<!-- FOOTER -->
<!-- FOOTER -->




` }} />
      
      <Script src="/js/signal.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'signaljs']) window['init' + 'signaljs'](); }} />
    </>
  );
}
