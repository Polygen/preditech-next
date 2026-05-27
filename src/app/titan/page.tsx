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
<div class="product-title" style="color:var(--accent)">Preditech TITAN</div>
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
<div class="user-tag">TİCARİ / FİLO</div><h1>Ağır Yükler,<br>Akıllı Kararlar.</h1>
<p class="massive-hero-sub">Tırlar ve ağır vasıtalar için geliştirilmiş, en zorlu şartlara dayanıklı kestirimci bakım ve telematik sistemi.</p>
<div style="font-size:140px;font-weight:900;color:var(--accent);opacity:0.05;position:absolute;top:30%;left:50%;transform:translate(-50%, -50%)">TITAN</div>
<img src="/assets/images/devices/preditech titan.png" alt="Preditech" class="corp-device-img">
</div>
</section>

<!-- TECH SPECS -->
<section class="tech-specs-section">
<div class="container">
<div style="padding:80px 0 40px"><h2 style="font-size:48px;letter-spacing:-1px">Teknik Özellikler.</h2></div>
<div class="spec-grid">
<div class="spec-category">Ağır Vasıta Telemetrisi</div>
<div class="spec-details">
<div class="spec-item"><h4>Protokol Desteği</h4><p>J1939, J1708, FMS (Tır ve Kamyon Standartları)</p></div>
<div class="spec-item"><h4>Takograf Uyumu</h4><p class="mono">Uzaktan .ddd indirme ve canlı sürüş süresi ölçümü</p></div>
<div class="spec-item"><h4>Çalışma Voltajı</h4><p>12V - 24V - 36V Geniş Voltaj Desteği</p></div>
<div class="spec-item"><h4>Dayanıklılık</h4><p>Titreşime ve darbelere karşı ekstra zırhlı dış kasa</p></div>
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
<h2 style="font-size:32px;margin-bottom:40px;text-align:center">TITAN Modeli S.S.S.</h2>
<div class="faq-item">
<div class="faq-question">Ağır vasıtalarda (Tır) neden Titan modeli öneriliyor?<span class="faq-icon">+</span></div>
<div class="faq-answer">Titan, 24V sistemlerle %100 uyumludur ve standart OBD-II yerine J1939 protokollerini destekler. Dorse soğutucu üniteleri gibi ek donanımların verilerini de okuyabilir.</div>
</div>
<div class="faq-item">
<div class="faq-question">Takograf verilerini uzaktan indirebilir miyim?<span class="faq-icon">+</span></div>
<div class="faq-answer">Evet, Titan modeli sayesinde filonuzdaki tüm araçların yasal sürüş sürelerini (.ddd formatında) uzaktan, araç ofise gelmeden indirebilirsiniz.</div>
</div>
<div class="faq-item">
<div class="faq-question">Geofence ve Rota İhlali uyarıları ne kadar hızlı?<span class="faq-icon">+</span></div>
<div class="faq-answer">Sıfır gecikme (zero-latency) altyapımızla ihlal gerçekleştiği saniye merkez operasyon ekranına ve ilgili yetkiliye anlık bildirim (SMS/Email/Push) iletilir.</div>
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
      <a href="kurumsal-satis.html?device=titan" class="btn btn-primary" style="width:100%; justify-content:center;">Toplu Satış Teklifi Al (Adet: 6.000₺)</a>
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
      
      <Script src="/js/titan.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'titanjs']) window['init' + 'titanjs'](); }} />
    </>
  );
}
