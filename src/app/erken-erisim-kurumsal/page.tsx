// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'erkenerisimkurumsaljs']) {
      window['init' + 'erkenerisimkurumsaljs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- NAVBAR -->


<div class="page-header" style="padding-top:120px;padding-bottom:40px">
<div class="particles"></div>
<div class="container">
<h1 style="font-size:clamp(32px,4vw,48px)">Geleceğe <span>İlk Adımı</span> Atın.</h1>
<p style="font-size:15px">Sınırlı sayıdaki MVP cihazlarımız için ön sipariş vererek, ürüne herkesten önce sahip olun ve test ekibimizin bir parçası olun.</p>
</div>
</div>

<section class="section" style="padding-top:0">
<div class="container">
<div class="checkout-grid reveal" style="align-items:start">
<div class="checkout-form">
<h3 style="font-size:24px;margin-bottom:24px">1. Cihazınızı Seçin</h3>

<div class="device-select-grid" id="deviceSelect">
  <div class="device-card" data-device="WISHLIST" data-price="Ücretsiz">
    <h4>İstek Listesi</h4>
    <span>Ücretsiz Katıl</span>
  </div>
  <div class="device-card active" data-device="Watchdog" data-price="8.000₺">
    <h4>Watchdog (Filo)</h4>
    <span>8.000₺ / 2 Yıl</span>
  </div>
  <div class="device-card" data-device="Titan" data-price="10.000₺">
    <h4>Titan (Tır)</h4>
    <span>10.000₺ / 2 Yıl</span>
  </div>
  <div class="device-card" data-device="Haul" data-price="12.000₺">
    <h4>Haul (İş Makinesi)</h4>
    <span>12.000₺ / 2 Yıl</span>
  </div>
  <div class="device-card" data-device="Xper" data-price="6.000₺">
    <h4>Xper (Ekspertiz)</h4>
    <span>6.000₺ / Cihaz</span>
  </div>
  <div class="device-card" data-device="Doc" data-price="15.000₺">
    <h4>Doc (Servis)</h4>
    <span>15.000₺ / Cihaz</span>
  </div>
  <div class="device-card shimmer-effect" data-device="CUSTOM" data-price="Özel Teklif">
    <div class="gift-badge">Toplu Alım</div>
    <h4>Kurumsal Toplu Alım</h4>
    <span>Teklif Alın</span>
  </div>
</div>
<div id="customBudgetContainer" style="display:none; margin-top:20px;">
  <div class="form-group">
    <label style="color:var(--accent)">Destek olmak istediğiniz bütçeyi seçin (₺)</label>
    <input type="number" id="customBudgetInput" placeholder="Örn: 15000" class="sporty-input" style="font-size:24px; font-weight:800; text-align:center;">
  </div>
</div>
<div id="giftPackageContainer" style="display:none; margin-top:24px; padding:24px; background:linear-gradient(145deg, rgba(255,215,0,0.1), transparent); border:1px solid var(--accent); border-radius:16px; text-align:center;">
  <h4 style="color:var(--accent); font-size:20px; margin-bottom:16px;" id="giftPackageTitle">ğŸ 10.000₺ Üzeri Desteklere Özel Hediye Paketiniz!</h4>
  <p style="color:var(--text2); font-size:14px; margin-bottom:24px;" id="giftPackageDesc">Piyasa değeri <strong style="color:var(--text);">20.800₺</strong> olan bu muazzam pakete, 10.000₺ ve üzeri desteklerinizde anında sahip olun!</p>
  <div style="display:flex; align-items:center; justify-content:center; gap:16px; flex-wrap:wrap;">
    <div style="background:var(--card); border-radius:12px; padding:12px; border:1px solid var(--border);">
      <img src="/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" alt="GT" style="height:80px; object-fit:contain;">
      <div style="font-size:12px; font-weight:700; margin-top:8px;">GT</div>
    </div>
    <i class="ph ph-plus" style="font-size:24px; color:var(--text2);"></i>
    <div style="background:var(--card); border-radius:12px; padding:12px; border:1px solid var(--border);">
      <img src="/assets/images/devices/preditech racebox.png" alt="Racebox" style="height:80px; object-fit:contain;">
      <div style="font-size:12px; font-weight:700; margin-top:8px;">Racebox</div>
    </div>
    <i class="ph ph-plus" style="font-size:24px; color:var(--text2);"></i>
    <div style="background:var(--card); border-radius:12px; padding:12px; border:1px solid var(--border);">
      <img src="/assets/images/devices/preditech cursor.png" alt="Cursor" style="height:80px; object-fit:contain;">
      <div style="font-size:12px; font-weight:700; margin-top:8px;">Cursor</div>
    </div>
  </div>
</div>

<div id="specialDeviceNotice" style="display:none; margin-top:24px; padding:24px; background:linear-gradient(145deg, rgba(0,255,136,0.1), transparent); border:1px solid var(--success); border-radius:16px; text-align:center;">
  <h4 style="color:var(--success); font-size:20px; margin-bottom:16px;">ğŸ† İnanılmaz Desteğiniz İçin Sonsuz Teşekkürler!</h4>
  <p style="color:var(--text2); font-size:14px; margin-bottom:0;">40.000₺ ve üzeri bu eşsiz katkınız onuruna, sadece size özel, isminize kayıtlı tamamen <strong>ÖZEL ÜRETİM</strong> bir Preditech cihazı tasarlanıp adresinize gönderilecektir.</p>
</div>

<h3 style="font-size:24px;margin-bottom:24px;margin-top:40px">2. Teslimat Bilgileri</h3>
<form onsubmit="event.preventDefault();alert('Ön sipariş talebiniz alınmıştır!');window.location='index.html'">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px">
<div class="form-group"><label>Ad</label><input type="text" required></div>
<div class="form-group"><label>Soyad</label><input type="text" required></div>
</div>
<div class="form-group" style="margin-bottom:20px"><label>E-posta</label><input type="email" required></div>
<div class="form-group" style="margin-bottom:20px"><label>Telefon</label><input type="tel" required></div>
<div class="form-group" style="margin-bottom:20px"><label>Teslimat Adresi</label><textarea rows="3" required></textarea></div>
<button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;padding:16px;font-size:16px">Ön Siparişi Tamamla</button>
</form>
</div>
<div class="checkout-summary">
<h3 style="font-size:24px;margin-bottom:24px">Sipariş Özeti</h3>
<div class="summary-row"><span>Cihaz</span><span id="summaryDevice">Preditech PRO</span></div>
<div class="summary-row"><span>1 Yıllık Uygulama Aboneliği</span><span>Hediye</span></div>
<div class="summary-row"><span>Kargo (Haziran 2026)</span><span>Ücretsiz</span></div>
<div class="summary-total"><span>Toplam</span><span id="summaryPrice">950₺</span></div>
<p style="font-size:12px;color:var(--text2);margin-top:24px;line-height:1.6">* Erken erişim siparişleri sıraya alınır. Teslimatlar 2026 3. çeyrekte başlayacaktır. Ödeme şu an alınmayacaktır.</p>
<p style="font-size:12px;color:var(--accent);margin-top:8px;line-height:1.6;font-weight:700;">* DİKKAT: Bu cihazların erken sipariş/istek alımı, cihazın resmi çıkışıyla birlikte tamamen kapanacak ve bir daha sipariş alınmayacaktır.</p>
</div>
</div>
</div>
</section>

<!-- FOOTER -->
<!-- FOOTER -->




` }} />
      
      <Script src="/js/erken-erisim-kurumsal.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'erkenerisimkurumsaljs']) window['init' + 'erkenerisimkurumsaljs'](); }} />
    </>
  );
}
