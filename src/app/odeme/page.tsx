// @ts-nocheck
'use client';

import Script from 'next/script';

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  .checkout-container { max-width: 1200px; margin: 120px auto 80px; display: grid; grid-template-columns: 1fr 400px; gap: 40px; }
  .checkout-card { background: var(--card); border: 1px solid var(--border); border-radius: 24px; padding: 40px; }
  
  .form-row { display: flex; gap: 16px; margin-bottom: 16px; }
  .form-row > div { flex: 1; }
  .form-group label { display: block; margin-bottom: 8px; font-size: 13px; color: var(--text2); font-weight: 500; }
  
  .summary-item { display: flex; justify-content: space-between; margin-bottom: 16px; font-size: 14px; color: var(--text2); }
  .summary-item strong { color: var(--text); }
  
  @media(max-width: 992px) {
    .checkout-container { grid-template-columns: 1fr; }
  }
` }} />
      <div dangerouslySetInnerHTML={{ __html: `



<div class="container">
  <div class="checkout-container reveal">
    
    <!-- Left: Forms -->
    <div>
      <h2 style="font-size: 28px; margin-bottom: 32px;">Ödeme Bilgileri</h2>
      
      <div class="checkout-card" style="margin-bottom: 24px;">
        <h3 style="font-size: 18px; margin-bottom: 24px; display: flex; align-items: center; gap: 8px;"><i class="ph-fill ph-map-pin" style="color:var(--accent);"></i> Teslimat Adresi</h3>
        
        <div class="form-row">
          <div class="form-group">
            <label>Ad</label>
            <input type="text" class="sporty-input" style="width:100%; box-sizing:border-box;" placeholder="Adınız">
          </div>
          <div class="form-group">
            <label>Soyad</label>
            <input type="text" class="sporty-input" style="width:100%; box-sizing:border-box;" placeholder="Soyadınız">
          </div>
        </div>
        
        <div class="form-group" style="margin-bottom: 16px;">
          <label>Açık Adres</label>
          <textarea class="sporty-input" style="width:100%; box-sizing:border-box; height: 80px; resize: none;" placeholder="Mahalle, sokak, bina no..."></textarea>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label>İl</label>
            <input type="text" class="sporty-input" style="width:100%; box-sizing:border-box;" placeholder="İl">
          </div>
          <div class="form-group">
            <label>İlçe</label>
            <input type="text" class="sporty-input" style="width:100%; box-sizing:border-box;" placeholder="İlçe">
          </div>
        </div>
      </div>
      
      <div class="checkout-card">
        <h3 style="font-size: 18px; margin-bottom: 24px; display: flex; align-items: center; gap: 8px;"><i class="ph-fill ph-credit-card" style="color:var(--accent);"></i> Kart Bilgileri</h3>
        
        <div class="form-group" style="margin-bottom: 16px;">
          <label>Kart Üzerindeki İsim</label>
          <input type="text" class="sporty-input" style="width:100%; box-sizing:border-box;" placeholder="İSİM SOYİSİM">
        </div>
        
        <div class="form-group" style="margin-bottom: 16px;">
          <label>Kart Numarası</label>
          <input type="text" class="sporty-input" style="width:100%; box-sizing:border-box;" placeholder="0000 0000 0000 0000" maxlength="19">
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label>Son Kullanma (AA/YY)</label>
            <input type="text" class="sporty-input" style="width:100%; box-sizing:border-box;" placeholder="12/26" maxlength="5">
          </div>
          <div class="form-group">
            <label>CVV</label>
            <input type="text" class="sporty-input" style="width:100%; box-sizing:border-box;" placeholder="123" maxlength="3">
          </div>
        </div>
      </div>
      
    </div>
    
    <!-- Right: Summary -->
    <div>
      <div class="checkout-card" style="position: sticky; top: 120px;">
        <h3 style="font-size: 18px; margin-bottom: 24px;">Sipariş Özeti</h3>
        
        <div style="display: flex; gap: 16px; margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.05);">
          <img src="/assets/images/devices/GREG.png" alt="Preditech PRO" style="width: 80px; height: 80px; object-fit: contain;">
          <div>
            <h4 style="font-size: 16px; margin-bottom: 4px;">Preditech PRO</h4>
            <p style="font-size: 12px; color: var(--text2);">Erken Erişim Sürümü</p>
          </div>
        </div>
        
        <div class="summary-item">
          <span>Ara Toplam</span>
          <strong>12.500₺</strong>
        </div>
        <div class="summary-item">
          <span>Kargo Ücreti</span>
          <strong style="color: #22c55e;">Ücretsiz</strong>
        </div>
        <div class="summary-item">
          <span>Vergiler (KDV)</span>
          <strong>Dahil</strong>
        </div>
        
        <div style="display: flex; justify-content: space-between; margin: 24px 0; padding-top: 24px; border-top: 1px dashed rgba(255,255,255,0.1); font-size: 18px; font-weight: 700;">
          <span>Genel Toplam</span>
          <span style="color: var(--accent); font-family: monospace; font-size: 24px;">12.500₺</span>
        </div>
        
        <button type="button" onclick="window.location.href="/siparis-takip"" class="btn btn-primary sporty-btn" style="width: 100%; justify-content: center; background: var(--accent); color: #000; font-weight: 800; padding: 20px; font-size: 16px;">GÜVENLİ ÖDEME YAP</button>
        <p style="text-align: center; margin-top: 16px; font-size: 12px; color: var(--text2); display: flex; align-items: center; justify-content: center; gap: 4px;">
          <i class="ph-fill ph-lock-key"></i> 256-bit SSL ile güvendesiniz.
        </p>
      </div>
    </div>
    
  </div>
</div>




` }} />
      
      <Script src="/js/odeme.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'odemejs']) window['init' + 'odemejs'](); }} />
    </>
  );
}
