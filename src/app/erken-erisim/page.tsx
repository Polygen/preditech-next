// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'erkenerisimjs']) {
      window['init' + 'erkenerisimjs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- NAVBAR -->


<div class="page-header" style="padding-top:160px;padding-bottom:40px">
<div class="particles"></div>
<div class="container">
<h1 style="font-size:clamp(32px,4vw,48px)">Geleceğe <span>İlk Adımı</span> Atın.</h1>
<p style="font-size:15px">Sınırlı sayıdaki MVP cihazlarımız için ön sipariş vererek, ürüne herkesten önce sahip olun ve test ekibimizin bir parçası olun.</p>
</div>
</div>

<section class="section" style="padding-top:0">
<div class="container">
<div class="checkout-grid" style="align-items:start">
<div class="checkout-form">
<h3 style="font-size:24px;margin-bottom:24px">1. Cihazınızı Seçin</h3>

<div class="device-select-grid" id="deviceSelect">
  <div class="device-card" data-device="WISHLIST" data-price="Ücretsiz">
    <h4>İstek Listesi</h4>
    <span>Ücretsiz Katıl</span>
  </div>
  <div class="device-card active" data-device="GO" data-price="950₺">
    <h4>GO</h4>
    <span>950₺</span>
  </div>
  <div class="device-card" data-device="PRO" data-price="2.500₺">
    <h4>PRO</h4>
    <span>2.500₺</span>
  </div>
  <div class="device-card" data-device="GT" data-price="9.800₺">
    <h4>GT</h4>
    <span>9.800₺</span>
  </div>
  <div class="device-card shimmer-effect" data-device="CUSTOM" data-price="Özel Teklif">
    <div class="gift-badge">Seni hediye bekliyor!</div>
    <h4>Destek Olmak İstiyorum</h4>
    <span>Özel Bütçe</span>
  </div>
</div>
<div id="customBudgetContainer" style="display:none; margin-top:20px;">
  <div class="form-group">
    <label style="color:var(--accent)">Destek olmak istediğiniz bütçeyi seçin (₺)</label>
    <input type="number" id="customBudgetInput" placeholder="Örn: 15000" class="sporty-input" style="font-size:24px; font-weight:800; text-align:center;">
  </div>
</div>
<div id="giftPackageContainer" style="display:none; margin-top:24px; padding:24px; background:linear-gradient(145deg, rgba(255,215,0,0.1), transparent); border:1px solid var(--accent); border-radius:16px; text-align:center;">
  <h4 style="color:var(--accent); font-size:20px; margin-bottom:16px;" id="giftPackageTitle">🎁 10.000₺ Üzeri Desteklere Özel Hediye Paketiniz!</h4>
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
  <h4 style="color:var(--success); font-size:20px; margin-bottom:16px;">🏆 İnanılmaz Desteğiniz İçin Sonsuz Teşekkürler!</h4>
  <p style="color:var(--text2); font-size:14px; margin-bottom:0;">40.000₺ ve üzeri bu eşsiz katkınız onuruna, sadece size özel, isminize kayıtlı tamamen <strong>ÖZEL ÜRETİM</strong> bir Preditech cihazı tasarlanıp adresinize gönderilecektir.</p>
</div>


<div id="addonsSection" style="margin-top:40px;">
  <h3 style="font-size:24px;margin-bottom:24px;display:flex;align-items:center;gap:8px">
    <i class="ph-fill ph-plugs-connected" style="color:var(--accent)"></i> İsteğe Bağlı Eklentiler
  </h3>
  <p style="font-size:13px; color:var(--text2); margin-bottom:20px;">Ana cihazınıza ek olarak sisteminizi güçlendirecek çevre birimlerini siparişinize dahil edebilirsiniz. (Go modeli desteklemez)</p>
  
  
  <div class="addon-card-container" style="display:flex; flex-direction:column; gap:16px;">
    <!-- Racebox -->
    <label class="addon-card" style="display:flex; align-items:center; justify-content:space-between; background:var(--surface2); border:1px solid rgba(255,255,255,0.05); padding:16px 20px; border-radius:16px; cursor:pointer;">
      <div style="display:flex; align-items:center; gap:16px;">
        <img src="/assets/images/devices/preditech racebox.png" alt="Racebox" style="width:50px; height:50px; object-fit:contain;">
        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <h4 style="font-size:16px; margin:0; font-weight:800;">Racebox Eklentisi</h4>
            <div class="addon-info-btn">
              <i class="ph-fill ph-info"></i>
              <div class="addon-info-tooltip">
                <strong>Racebox Nedir?</strong><br>
                Gelişmiş performans sensörleri sayesinde 0-100 km/s hızlanma, frenleme mesafesi ve G-Force verilerinizi GPS bazlı %99 hassasiyetle ölçer. Pist günleri ve performans takibi için vazgeçilmezdir.
              </div>
            </div>
          </div>
          <span style="font-size:14px; color:var(--text2); font-weight:500;">Tip-C Performans Hub'ı</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:16px;">
        <span style="font-size:16px; color:var(--text); font-weight:800;">+ 3.500₺</span>
        <input type="checkbox" id="addon-racebox" class="addon-checkbox-input" value="3500" data-name="Racebox Eklentisi" style="display:none;">
        <div class="addon-custom-checkbox"><i class="ph-bold ph-check"></i></div>
      </div>
    </label>

    <!-- Sentinel -->
    <label class="addon-card" style="display:flex; align-items:center; justify-content:space-between; background:var(--surface2); border:1px solid rgba(255,255,255,0.05); padding:16px 20px; border-radius:16px; cursor:pointer;">
      <div style="display:flex; align-items:center; gap:16px;">
        <img src="/assets/images/devices/preditech sentinel.png" alt="Sentinel" style="width:50px; height:50px; object-fit:contain;">
        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <h4 style="font-size:16px; margin:0; font-weight:800;">Sentinel Eklentisi</h4>
            <div class="addon-info-btn">
              <i class="ph-fill ph-info"></i>
              <div class="addon-info-tooltip">
                <strong>Sentinel Nedir?</strong><br>
                Yapay zeka destekli akıllı araç içi kamerası (Dashcam). OBD-II'den gelen telemetri verilerini doğrudan 4K videonun üzerine yazarak kaza anında kanıt sağlar ve şerit takibi yapar.
              </div>
            </div>
          </div>
          <span style="font-size:14px; color:var(--text2); font-weight:500;">4K Akıllı Dashcam</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:16px;">
        <span style="font-size:16px; color:var(--text); font-weight:800;">+ 5.500₺</span>
        <input type="checkbox" id="addon-sentinel" class="addon-checkbox-input" value="5500" data-name="Sentinel Eklentisi" style="display:none;">
        <div class="addon-custom-checkbox"><i class="ph-bold ph-check"></i></div>
      </div>
    </label>

    <!-- Cursor -->
    <label class="addon-card" style="display:flex; align-items:center; justify-content:space-between; background:var(--surface2); border:1px solid rgba(255,255,255,0.05); padding:16px 20px; border-radius:16px; cursor:pointer;">
      <div style="display:flex; align-items:center; gap:16px;">
        <img src="/assets/images/devices/preditech cursor.png" alt="Cursor" style="width:50px; height:50px; object-fit:contain;">
        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <h4 style="font-size:16px; margin:0; font-weight:800;">Cursor Eklentisi</h4>
            <div class="addon-info-btn">
              <i class="ph-fill ph-info"></i>
              <div class="addon-info-tooltip">
                <strong>Cursor Nedir?</strong><br>
                Özelleştirilebilir dijital ek gösterge paneli (Gauge). Turbo basıncı (Boost), AFR, EGR sıcaklığı gibi telefonunuza bakmadan görmek istediğiniz anlık verileri direksiyon arkasında sunar.
              </div>
            </div>
          </div>
          <span style="font-size:14px; color:var(--text2); font-weight:500;">Akıllı Gösterge Paneli</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:16px;">
        <span style="font-size:16px; color:var(--text); font-weight:800;">+ 2.200₺</span>
        <input type="checkbox" id="addon-cursor" class="addon-checkbox-input" value="2200" data-name="Cursor Eklentisi" style="display:none;">
        <div class="addon-custom-checkbox"><i class="ph-bold ph-check"></i></div>
      </div>
    </label>
  </div>
</div>

<h3 style="font-size:24px;margin-bottom:24px;margin-top:40px">2. Teslimat Bilgileri</h3>
<form id="preorderForm">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px">
    <div class="form-group"><label>Ad</label><input type="text" class="sporty-input" style="width:100%;box-sizing:border-box" required></div>
    <div class="form-group"><label>Soyad</label><input type="text" class="sporty-input" style="width:100%;box-sizing:border-box" required></div>
  </div>
  <div class="form-group" style="margin-bottom:20px"><label>E-posta</label><input type="email" class="sporty-input" style="width:100%;box-sizing:border-box" required></div>
  <div class="form-group" style="margin-bottom:20px">
    <label>Telefon</label>
    <div style="display:flex; gap:12px; align-items:center; margin-top:4px;">
      <div style="position:relative; display:flex; align-items:center; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.1); border-radius:6px; padding-left:14px; height: 50px;">
        <img id="countryFlagImg" src="https://flagcdn.com/24x18/tr.png" alt="" style="width:24px; height:18px; border-radius:2px;">
        <select id="countrySelect" style="background:transparent; border:none; padding:0 8px 0 8px; font-weight:700; outline:none; color:var(--text); cursor:pointer; width:140px; appearance:none; font-family:'Inter', sans-serif;">
          <option value="tr" data-code="+90" style="background:#000; color:#fff;">Türkiye (+90)</option>
          <option value="us" data-code="+1" style="background:#000; color:#fff;">United States (+1)</option>
          <option value="gb" data-code="+44" style="background:#000; color:#fff;">United Kingdom (+44)</option>
          <option value="de" data-code="+49" style="background:#000; color:#fff;">Germany (+49)</option>
          <option value="fr" data-code="+33" style="background:#000; color:#fff;">France (+33)</option>
          <option value="it" data-code="+39" style="background:#000; color:#fff;">Italy (+39)</option>
          <option value="es" data-code="+34" style="background:#000; color:#fff;">Spain (+34)</option>
          <option value="nl" data-code="+31" style="background:#000; color:#fff;">Netherlands (+31)</option>
          <option value="jp" data-code="+81" style="background:#000; color:#fff;">Japan (+81)</option>
          <option value="kr" data-code="+82" style="background:#000; color:#fff;">South Korea (+82)</option>
        </select>
      </div>
      <input type="tel" class="sporty-input" style="flex:1;box-sizing:border-box;margin-top:0;height:50px" placeholder="5XX XXX XX XX" pattern="[0-9 ]+" required>
    </div>
  </div>
  <div class="form-group" style="margin-bottom:20px">
    <label>Teslimat Adresi</label>
    <textarea class="sporty-input" style="width:100%;box-sizing:border-box;resize:none" rows="3" required></textarea>
  </div>
  <button id="submitBtn" type="submit" class="btn btn-primary" style="width:100%;justify-content:center;padding:16px;font-size:16px">Ödeme Sayfasına Geç</button>
</form>
</div>

<div>
<div class="checkout-summary" style="position: sticky; top: 120px;">
  <h3 style="font-size:24px;margin-bottom:24px">Sipariş Özeti</h3>
  <div style="display:flex; justify-content:center; margin-bottom:24px;">
    <img id="summaryDeviceImg" src="/assets/images/general/predB.png" alt="Cihaz" style="height:120px; object-fit:contain;" />
  </div>
  <div class="summary-row"><span>Cihaz</span><span id="summaryDevice">Preditech GT</span></div>
  <div class="summary-row"><span>1 Aylık Uygulama Aboneliği</span><span style="color:var(--accent); font-weight:700;">Hediye</span></div>
  <div class="summary-row"><span>Kargo (Aralık 2026)</span><span>Ücretsiz</span></div>
  <div class="summary-total"><span>Toplam</span><span id="summaryPrice">9.800₺</span></div>
  <p style="font-size:12px;color:var(--text2);margin-top:24px;line-height:1.6">* Erken erişim siparişleri sıraya alınır. Teslimatlar Aralık 2026'da başlayacaktır. Ödeme şu an alınacaktır.</p>
  <p style="font-size:12px;color:var(--text2);margin-top:8px;line-height:1.6">* Cihazlarımız donanımına kadar kendi üretimimiz olduğu için üretime geçişimizin ardından yaklaşık 1 ay sonra üretim hattından size ulaşmaktadır. Tüm üretim ve teslimat süreci şeffaf bir şekilde yürütülecek olup, e-posta bültenlerimiz ve Preditech sosyal medya hesaplarımızdan anlık olarak paylaşılacaktır.</p>
  <p style="font-size:12px;color:var(--text2);margin-top:8px;line-height:1.6">* Erken ödeme ile sipariş verdiğiniz cihazlar tarafınıza öncelikli olarak gönderilecektir. Belirtilen bu rakamlar sadece erken erişim programına özel destek fiyatlarıdır.</p>
</div>
</div>

</div>
</div>
</section>
` }} />
      
      <Script src="/js/erken-erisim.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'erkenerisimjs']) window['init' + 'erkenerisimjs'](); }} />
    </>
  );
}
