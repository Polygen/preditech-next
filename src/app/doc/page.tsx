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
<div class="product-title" style="color:var(--accent)">Preditech DOC</div>
<div class="actions">
<span class="price">2.900₺</span>
<a href="/erken-erisim" class="btn btn-primary">Ön Sipariş</a>
</div>
</div>
</div>

<!-- MASSIVE HERO -->
<section class="massive-hero accent-title">
<div class="particles"></div>
<div class="container" style="z-index:2">
<div class="section-label" style="justify-content:center;margin-bottom:24px">YENİ NESİL ÇÖZÜM</div>
<h1>Anında<br>Teşhis.</h1>
<p class="massive-hero-sub">Araç alım satımlarında, saniyeler içinde gizli arızaları görün. Xper'e göre daha hızlı, bireysel kullanıma uygun pratik çözüm.</p>
<div style="font-size:140px;font-weight:900;color:var(--accent);opacity:0.05;position:absolute;top:30%;left:50%;transform:translate(-50%, -50%)">DOC</div>
<img src="/assets/images/devices/preditech watchdog.png" alt="Preditech DOC" class="corp-device-img">
</div>
</section>

<!-- TECH SPECS -->
<section class="tech-specs-section">
<div class="container">
<div style="padding:80px 0 40px"><h2 style="font-size:48px;letter-spacing:-1px">Teknik Özellikler.</h2></div>
<div class="spec-grid">
<div class="spec-category">Hızlı Teşhis ve Donanım</div>
<div class="spec-details">
<div class="spec-item"><h4>Bağlantı</h4><p>Bluetooth 5.0 üzerinden akıllı telefonla anında eşleşme</p></div>
<div class="spec-item"><h4>Arıza Okuma</h4><p class="mono">Tüm marka/model hata kodları (DTC) okuma ve silme</p></div>
<div class="spec-item"><h4>Kullanım Amacı</h4><p>Al-Satçılar, galericiler için 1 dakikada motor sağlık tespiti</p></div>
<div class="spec-item"><h4>Ebatlar</h4><p>Cep boyutunda, minimal ve pratik tak-çıkar tasarım</p></div>
</div>
</div>
</div>
</section>

<!-- FAQ SECTION -->

<section class="faq-section" style="background:var(--surface2)">
<div class="container">
<h2 style="font-size:32px;margin-bottom:40px;text-align:center">DOC Modeli S.S.S.</h2>
<div class="faq-item">
<div class="faq-question">Servis atölyeleri için neden Doc modeli şart?<span class="faq-icon">+</span></div>
<div class="faq-answer">Doc, standart arıza tespit cihazlarının (Diagnostic Tool) aksine sürekli titreşim analizi (NVH) yapabilen ilk atölye ekipmanıdır. Motor yatak sesini grafiğe döker.</div>
</div>
<div class="faq-item">
<div class="faq-question">Hangi araç markalarıyla uyumlu?<span class="faq-icon">+</span></div>
<div class="faq-answer">Preditech Doc, binek ve hafif ticari araçların %95'i ile (2000 model ve sonrası OBD2 destekli araçlar) doğrudan haberleşebilir ve marka/modele özel kronik arıza veritabanına erişebilir.</div>
</div>
<div class="faq-item">
<div class="faq-question">Müşterilerime 'Kestirimci Bakım Raporu' verebilir miyim?<span class="faq-icon">+</span></div>
<div class="faq-answer">Evet, test sürüşü sonrasında Doc platformu üzerinden müşterinize 'Gelecek 6 ay içinde olası %78 DPF tıkanıklığı riski' gibi detaylı, kurumsal logolu bir PDF rapor sunabilirsiniz.</div>
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
      <a href="kurumsal-satis.html?device=doc" class="btn btn-primary" style="width:100%; justify-content:center;">Toplu Satış Teklifi Al (Adet: 6.000₺)</a>
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
      
      <Script src="/js/doc.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'docjs']) window['init' + 'docjs'](); }} />
    </>
  );
}
