// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'kurumsaljs']) {
      window['init' + 'kurumsaljs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<div class="page-header" style="padding-top:160px;padding-bottom:40px">
<div class="particles"></div>
<div class="container">
<h1 style="font-size:clamp(32px,4vw,48px)">Kurumsal <span>Filo & Servis</span> Çözümleri</h1>
<p style="font-size:15px">Toplu alım ve kurumsal entegrasyon talepleriniz için aşağıdaki formu doldurun. Ekibimiz sizinle en kısa sürede toplantı planlayacaktır.</p>
</div>
</div>

<section class="section" style="padding-top:0">
<div class="container">
<div class="checkout-grid" style="align-items:start">
<div class="checkout-form">
<h3 style="font-size:24px;margin-bottom:24px">1. İlgilendiğiniz Ürünü Seçin</h3>

<div class="device-select-grid" id="deviceSelect">
  <div class="device-card active" data-device="WATCHDOG" data-price="Teklif Al">
    <h4>Watchdog</h4>
    <span>Filo Takip</span>
  </div>
  <div class="device-card" data-device="TITAN" data-price="Teklif Al">
    <h4>Titan</h4>
    <span>Tır / Ağır Vasıta</span>
  </div>
  <div class="device-card" data-device="HAUL" data-price="Teklif Al">
    <h4>Haul</h4>
    <span>İş Makinesi</span>
  </div>
  <div class="device-card" data-device="XPER" data-price="Teklif Al">
    <h4>Xper</h4>
    <span>Ekspertiz OBD</span>
  </div>
</div>

<h3 style="font-size:24px;margin-bottom:24px;margin-top:40px">2. Şirket & İletişim Bilgileri</h3>
<form id="kurumsalForm">
  <div class="form-group" style="margin-bottom:20px">
    <label>Şirket Adı</label>
    <input type="text" class="sporty-input" style="width:100%;box-sizing:border-box" required>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px">
    <div class="form-group"><label>Yetkili Ad</label><input type="text" class="sporty-input" style="width:100%;box-sizing:border-box" required></div>
    <div class="form-group"><label>Yetkili Soyad</label><input type="text" class="sporty-input" style="width:100%;box-sizing:border-box" required></div>
  </div>
  <div class="form-group" style="margin-bottom:20px"><label>Kurumsal E-posta</label><input type="email" class="sporty-input" style="width:100%;box-sizing:border-box" required></div>
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
        </select>
      </div>
      <input type="tel" class="sporty-input" style="flex:1;box-sizing:border-box;margin-top:0;height:50px" placeholder="5XX XXX XX XX" pattern="[0-9 ]+" required>
    </div>
  </div>
  
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px">
    <div class="form-group">
      <label>Tahmini Cihaz Adedi</label>
      <input type="number" class="sporty-input" style="width:100%;box-sizing:border-box" placeholder="Örn: 50" min="1" required>
    </div>
    <div class="form-group">
      <label>Kullanım Alanı</label>
      <select class="sporty-input" style="width:100%;box-sizing:border-box;height:50px;cursor:pointer;">
        <option value="" style="background:#000; color:#fff;">Seçiniz...</option>
        <option value="filo" style="background:#000; color:#fff;">Filo Yönetimi</option>
        <option value="lojistik" style="background:#000; color:#fff;">Lojistik & Kargo</option>
        <option value="insaat" style="background:#000; color:#fff;">İnşaat & İş Makinesi</option>
        <option value="ekspertiz" style="background:#000; color:#fff;">Oto Ekspertiz</option>
        <option value="sigorta" style="background:#000; color:#fff;">Sigorta & Hasar</option>
        <option value="kiralama" style="background:#000; color:#fff;">Araç Kiralama</option>
        <option value="belediye" style="background:#000; color:#fff;">Belediye / Kamu</option>
        <option value="diger" style="background:#000; color:#fff;">Diğer</option>
      </select>
    </div>
  </div>

  <div class="form-group" style="margin-bottom:20px">
    <label>Ek Talepleriniz <span style="color:var(--text2); font-weight:400;">(opsiyonel)</span></label>
    <textarea class="sporty-input" style="width:100%;box-sizing:border-box;resize:none" rows="4" placeholder="API entegrasyonu, özel raporlama, SLA gereksinimleri vb. taleplerinizi buraya yazabilirsiniz..."></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;padding:16px;font-size:16px">
    <i class="ph-fill ph-calendar-check" style="font-size:20px;"></i> Toplantı Talep Et
  </button>
</form>
</div>

<div>
<div class="checkout-summary" style="position: sticky; top: 120px;">
  <h3 style="font-size:24px;margin-bottom:24px">Talep Özeti</h3>
  <div style="display:flex; justify-content:center; margin-bottom:24px;">
    <img id="summaryDeviceImg" src="/assets/images/devices/preditech watchdog.png" alt="Cihaz" style="height:120px; object-fit:contain;" />
  </div>
  <div class="summary-row"><span>Ürün</span><span id="summaryDevice">Preditech Watchdog</span></div>
  <div class="summary-row"><span>Fiyatlandırma</span><span style="color:var(--accent); font-weight:700;">Kurumsal Teklif</span></div>
  <div class="summary-row"><span>Teslimat</span><span>Ücretsiz Kurulum</span></div>
  
  <div style="margin-top:32px; padding:20px; background:rgba(255,215,0,0.05); border:1px solid rgba(255,215,0,0.15); border-radius:16px;">
    <h4 style="font-size:15px; font-weight:800; color:var(--accent); margin-bottom:12px; display:flex; align-items:center; gap:8px;">
      <i class="ph-fill ph-handshake" style="font-size:20px;"></i> Kurumsal Avantajlar
    </h4>
    <div style="display:flex; flex-direction:column; gap:10px;">
      <div style="display:flex; align-items:center; gap:8px; font-size:13px; color:var(--text2);">
        <i class="ph-fill ph-check-circle" style="color:#00FF88; font-size:16px;"></i> Toplu alıma özel fiyat teklifi
      </div>
      <div style="display:flex; align-items:center; gap:8px; font-size:13px; color:var(--text2);">
        <i class="ph-fill ph-check-circle" style="color:#00FF88; font-size:16px;"></i> Öncelikli teknik destek (SLA)
      </div>
      <div style="display:flex; align-items:center; gap:8px; font-size:13px; color:var(--text2);">
        <i class="ph-fill ph-check-circle" style="color:#00FF88; font-size:16px;"></i> Özel API entegrasyonu
      </div>
      <div style="display:flex; align-items:center; gap:8px; font-size:13px; color:var(--text2);">
        <i class="ph-fill ph-check-circle" style="color:#00FF88; font-size:16px;"></i> Ücretsiz kurulum ve eğitim
      </div>
      <div style="display:flex; align-items:center; gap:8px; font-size:13px; color:var(--text2);">
        <i class="ph-fill ph-check-circle" style="color:#00FF88; font-size:16px;"></i> Filo yönetim paneli dahil
      </div>
    </div>
  </div>
  
  <p style="font-size:12px;color:var(--text2);margin-top:24px;line-height:1.6">* Talepleriniz incelendikten sonra ekibimiz 1 iş günü içinde sizinle iletişime geçerek online toplantı planlayacaktır.</p>
  <p style="font-size:12px;color:var(--text2);margin-top:8px;line-height:1.6">* Bu aşamada herhangi bir ödeme alınmamaktadır. Fiyat teklifi toplantıda sunulacaktır.</p>
</div>
</div>

</div>
</div>
</section>
` }} />
      
      <Script src="/js/kurumsal.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'kurumsaljs']) window['init' + 'kurumsaljs'](); }} />
    </>
  );
}
