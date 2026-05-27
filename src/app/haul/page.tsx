// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'hauljs']) {
      window['init' + 'hauljs']();
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
<div class="product-title" style="color:var(--accent)">Preditech HAUL</div>
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
<div class="user-tag">TİCARİ / FİLO</div><h1>Şantiyenin<br>Beyni.</h1>
<p class="massive-hero-sub">Ekskavatör, kepçe ve endüstriyel iş makineleri için özel titreşim analizleri. Arıza kaynaklı duruş sürelerini (downtime) bitirin.</p>
<div style="font-size:140px;font-weight:900;color:var(--accent);opacity:0.05;position:absolute;top:30%;left:50%;transform:translate(-50%, -50%)">HAUL</div>
<img src="/assets/images/devices/preditech haul.png" alt="Preditech" class="corp-device-img">
</div>
</section>

<!-- TECH SPECS -->
<section class="tech-specs-section">
<div class="container">
<div style="padding:80px 0 40px"><h2 style="font-size:48px;letter-spacing:-1px">Teknik Özellikler.</h2></div>
<div class="spec-grid">
<div class="spec-category">İş Makinesi Dinamikleri</div>
<div class="spec-details">
<div class="spec-item"><h4>Bağlantı</h4><p>İş makinelerine özel J1939 ve Endüstriyel CAN portları</p></div>
<div class="spec-item"><h4>PTO ve Motor Saati</h4><p class="mono">Rölanti, aktif çalışma ve hidrolik pompa ölçümü</p></div>
<div class="spec-item"><h4>Çevresel Dayanım</h4><p>IP69K Tam Su ve Toz yalıtımı, Çamur/Toz koruması</p></div>
<div class="spec-item"><h4>Hırsızlık Koruması</h4><p>Akıllı uzaktan motor blokajı ve yakıt sensörü desteği</p></div>
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
<h2 style="font-size:32px;margin-bottom:40px;text-align:center">HAUL Modeli S.S.S.</h2>
<div class="faq-item">
<div class="faq-question">Soğuk zincir taşımacılığında dorse sıcaklık sensörleri nasıl bağlanır?<span class="faq-icon">+</span></div>
<div class="faq-answer">Haul modeli, dorse içindeki kablosuz Bluetooth (BLE) sıcaklık ve nem sensörleriyle eşleşir. Ani sıcaklık düşüş/artışlarında doğrudan merkeze acil durum uyarısı geçer.</div>
</div>
<div class="faq-item">
<div class="faq-question">Yakıt hırsızlığını nasıl engelliyor?<span class="faq-icon">+</span></div>
<div class="faq-answer">Haul, depo kapağı sensörleri ve CANbus yakıt seviyesi verilerini çapraz analiz eder. Araç rölantideyken veya park halindeyken olağandışı yakıt azalmalarında anında sabotaj alarmı verir.</div>
</div>
<div class="faq-item">
<div class="faq-question">Dorse eşleştirme (Trailer Matching) nasıl çalışır?<span class="faq-icon">+</span></div>
<div class="faq-answer">Hangi çekicinin hangi dorseyi aldığını Beacon sensörler aracılığıyla otomatik kaydeder. Yanlış dorse bağlantısında sürücüyü kabin içi buzzer ile uyarır.</div>
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
      <a href="kurumsal-satis.html?device=haul" class="btn btn-primary" style="width:100%; justify-content:center;">Toplu Satış Teklifi Al (Adet: 6.000₺)</a>
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
      
      <Script src="/js/haul.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'hauljs']) window['init' + 'hauljs'](); }} />
    </>
  );
}
