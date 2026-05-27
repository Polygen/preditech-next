// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'beklemelistesijs']) {
      window['init' + 'beklemelistesijs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `` }} />
      <div dangerouslySetInnerHTML={{ __html: `



<div class="page-header">
<div class="particles"></div>
<div class="container">
<div class="section-label" style="justify-content:center;margin-bottom:24px">ÜCRETSİZ BEKLEME LİSTESİ</div>
<h1 style="font-size:clamp(40px,6vw,80px)">Geleceğin Teknolojisi<br><span>İçin Sıraya Girin.</span></h1>
<p style="font-size:18px;max-width:800px;margin:0 auto">Erken erişime açıldığında ilk sizin haberiniz olsun. Tamamen ücretsiz olarak bültene katılın ve size özel avantajlardan yararlanın.</p>
</div>
</div>

<section class="section">
<div class="container">
<form onsubmit="event.preventDefault(); alert('Tebrikler! Bekleme listesine ve e-bültene başarıyla katıldınız.'); window.location.href="/index";" style="max-width:600px; margin:0 auto; background:var(--card); padding:clamp(20px, 5vw, 40px); border-radius:24px; border:1px solid var(--border);">
<div class="form-group" style="margin-bottom:24px">
<label style="display:block; margin-bottom:8px; color:var(--text2)">E-Posta Adresiniz</label>
<input type="email" required placeholder="ornek@sirket.com" style="width:100%; padding:16px; background:var(--surface2); border:1px solid var(--border); border-radius:12px; color:var(--text); font-family:inherit">
</div>
<div class="form-group" style="margin-bottom:24px">
<label style="display:block; margin-bottom:8px; color:var(--text2)">İlgilendiğiniz Cihaz (İsteğe Bağlı)</label>
<select style="width:100%; padding:16px; background:var(--surface2); border:1px solid var(--border); border-radius:12px; color:var(--text); font-family:inherit">
<option value="">Seçim Yapın...</option>
<option value="go">Preditech GO</option>
<option value="pro">Preditech PRO</option>
<option value="gt">Preditech GT</option>
<option value="doc">Preditech DOC</option>
<option value="watchdog">Watchdog (Kurumsal)</option>
<option value="titan">Titan (Kurumsal)</option>
<option value="haul">Haul (Kurumsal)</option>
<option value="xper">Xper (Ekspertiz)</option>
</select>
</div>
<div class="form-group" style="margin-bottom:32px">
<label style="display:flex; align-items:flex-start; gap:12px; cursor:pointer; color:var(--text2); font-size:14px; line-height:1.5;">
<input type="checkbox" required style="width:20px; height:20px; margin-top:2px; accent-color:var(--accent)">
E-bültene katılmayı ve ürün/erken erişim güncellemeleri hakkında bilgilendirme mailleri almayı kabul ediyorum.
</label>
</div>
<button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; padding:16px; font-size:16px">Ücretsiz Listeye Katıl</button>
</form>
</div>
</section>

<!-- FOOTER -->
<!-- FOOTER -->



` }} />
      
      <Script src="/js/bekleme-listesi.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'beklemelistesijs']) window['init' + 'beklemelistesijs'](); }} />
    </>
  );
}
