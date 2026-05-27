// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'kurumsalsatisjs']) {
      window['init' + 'kurumsalsatisjs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- NAVBAR -->


<section class="section" style="padding-top:160px; min-height:100vh;">
<div class="container">
  <div class="checkout-grid reveal" style="align-items:start">
    
    <div class="checkout-form">
      <div class="section-label">KURUMSAL SATIŞ TALEBİ</div>
      <h1 style="font-size:36px;margin-bottom:16px">Toplu Sipariş <span style="color:var(--accent)">Avantajı.</span></h1>
      <p style="color:var(--text2);margin-bottom:32px;">Filolarınızın verimliliğini artırmak ve güvenliğini sağlamak için doğru adrestesiniz. Sipariş detaylarınızı belirleyin, uzman ekibimiz en kısa sürede sizinle iletişime geçsin.</p>
      
      <div style="background:rgba(255,215,0,0.05); border:1px solid var(--border-accent); border-radius:12px; padding:20px; display:flex; gap:24px; align-items:center; margin-bottom:40px;">
        <img id="selectedDeviceImg" src="/assets/images/general/preditechlogo.png" alt="Device" style="height:80px; object-fit:contain; border-radius:8px;">
        <div>
          <h3 style="font-size:24px; font-weight:800; margin-bottom:4px;" id="selectedDeviceName">Preditech Cihazı</h3>
          <p style="color:var(--text2); font-size:14px;">Birim Fiyat: <strong style="color:var(--text);">6.000₺</strong> + KDV</p>
        </div>
      </div>

      <form id="corporateForm" onsubmit="event.preventDefault(); document.getElementById('successMsg').style.display='block'; this.style.display='none';">
        <h3 style="font-size:20px;margin-bottom:20px">1. İhtiyacınızı Belirleyin</h3>
        <div class="form-group">
          <label>Cihaz Adedi (Minimum 5 Adet Önerilir)</label>
          <input type="number" id="deviceCount" min="1" value="10" required class="sporty-input" style="font-size:24px; font-weight:800;">
        </div>

        <h3 style="font-size:20px;margin-bottom:20px;margin-top:40px">2. Şirket Bilgileri</h3>
        <div class="form-group"><label>Şirket Ünvanı</label><input type="text" required class="sporty-input"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
          <div class="form-group"><label>Yetkili Adı Soyadı</label><input type="text" required class="sporty-input"></div>
          <div class="form-group"><label>Kurumsal E-posta</label><input type="email" required class="sporty-input"></div>
        </div>
        <div class="form-group"><label>Telefon Numarası</label><input type="tel" required class="sporty-input"></div>
        
        <button type="submit" class="btn btn-primary sporty-btn" style="width:100%;justify-content:center;padding:16px;font-size:16px;margin-top:20px;">TEKLİF TALEBİ OLUŞTUR</button>
      </form>

      <div id="successMsg" style="display:none; text-align:center; padding:40px 20px; background:rgba(0,255,136,0.1); border:1px solid var(--success); border-radius:16px;">
        <i class="ph ph-check-circle" style="font-size:64px; color:var(--success); margin-bottom:16px;"></i>
        <h3 style="color:var(--success); font-size:24px; margin-bottom:12px;">Talebiniz Alındı!</h3>
        <p style="color:var(--text2);">Kurumsal satış yöneticimiz belirttiğiniz iletişim bilgileri üzerinden en kısa sürede size özel teklifimizle ulaşacaktır.</p>
        <button class="btn btn-ghost" style="margin-top:24px;" onclick="window.location='index.html'">Ana Sayfaya Dön</button>
      </div>
    </div>

    <div class="checkout-summary" style="position:sticky; top:120px;">
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:24px; padding-bottom:24px; border-bottom:1px solid var(--border);">
        <i class="ph ph-shield-check" style="font-size:32px; color:var(--success);"></i>
        <div>
          <div style="font-weight:700;">%100 Güvenli Süreç</div>
          <div style="font-size:12px; color:var(--text2);">Ödeme hemen alınmaz.</div>
        </div>
      </div>

      <h3 style="font-size:20px;margin-bottom:24px">Tahmini Maliyet Tablosu</h3>
      <div class="summary-row"><span>Birim Fiyat</span><span>6.000₺</span></div>
      <div class="summary-row"><span>Adet</span><span id="sumCount">10</span></div>
      <div class="summary-row"><span>Yazılım Kurulumu</span><span>Ücretsiz</span></div>
      <div class="summary-total" style="font-size:20px;"><span>Ara Toplam</span><span id="sumTotal">60.000₺</span></div>
      <div class="summary-total" style="font-size:14px; margin-top:0; color:var(--text2);"><span>+ %20 KDV</span><span id="sumTax">12.000₺</span></div>
      
      <div style="margin-top:32px; padding:16px; background:var(--card); border-radius:12px; border:1px dashed var(--border-accent);">
        <h4 style="font-size:14px; color:var(--accent); margin-bottom:8px;"><i class="ph ph-headset"></i> Özel Proje Yönetimi</h4>
        <p style="font-size:12px; color:var(--text2); line-height:1.5;">50 adet ve üzeri alımlarda firmanıza özel API entegrasyonu ve yerinde kurulum hizmeti ücretsiz sağlanmaktadır.</p>
      </div>
    </div>

  </div>
</div>
</section>

<!-- FOOTER -->



` }} />
      
      <Script src="/js/kurumsal-satis.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'kurumsalsatisjs']) window['init' + 'kurumsalsatisjs'](); }} />
    </>
  );
}
