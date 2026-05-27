// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'iletisimjs']) {
      window['init' + 'iletisimjs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `` }} />
      <div dangerouslySetInnerHTML={{ __html: `



<div class="page-header">
<div class="particles"></div>
<div class="container">
<div class="section-label" style="justify-content:center;margin-bottom:24px">HAKKIMIZDA</div>
<h1 style="font-size:clamp(40px,6vw,80px)"><span>Hakkımızda.</span></h1>
<p style="font-size:18px;max-width:800px;margin:0 auto">Yapay zeka ve özel donanım çözümlerimizle, arızaları önceden tespit edip araç sahiplerini yolda kalmaktan kurtarıyoruz.</p>
</div>
</div>

<section class="section" style="padding-top:0">
<div class="container">
<div class="mission reveal" style="margin:0 auto 60px;text-align:center;border-left:none;border-bottom:3px solid var(--accent);padding-bottom:32px">"Her araç sahibinin, teknik bilgisi ne olursa olsun, aracının sağlık durumunu önceden bilme ve masraflarını öngörme hakkı vardır."</div>
<div class="expertise-grid reveal">
<div class="expertise-card"><h4>Donanım (PCB) Geliştirme</h4><p>IMU entegrasyonu, OBD arayüzü, endüstriyel tasarım</p></div>
<div class="expertise-card"><h4>Yapay Zeka Mimarisi</h4><p>NVH füzyonu, kestirimci bakım algoritmaları</p></div>
<div class="expertise-card"><h4>Yazılım & Uygulama</h4><p>iOS/Android, Bluetooth 5.0, API altyapısı</p></div>
<div class="expertise-card"><h4>Operasyon</h4><p>Kurumsal satış ve ölçeklendirme stratejisi</p></div>
</div>

<div class="stats-grid reveal" style="margin-top:60px; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
<div class="stat-card"><div class="stat-number" data-target="30" data-suffix="">0</div><div class="stat-label" style="font-size:14px; margin-top:8px;">Farklı Markada Test Edildi</div></div>
<div class="stat-card"><div class="stat-number" data-target="47943" data-suffix="">0</div><div class="stat-label" style="font-size:14px; margin-top:8px;">Araç Modeli Veri Tabanı</div></div>
<div class="stat-card"><div class="stat-number" data-target="13433" data-suffix="">0</div><div class="stat-label" style="font-size:14px; margin-top:8px;">Farklı Araç Verisiyle Eğitilmiş Yapay Zeka</div></div>
<div class="stat-card"><div style="font-size:clamp(24px,4vw,32px); font-weight:800; font-family:monospace; line-height:1.2; padding:16px 0;">Made in<br><span style="color:var(--accent);">Türkiye</span></div><div class="stat-label" style="font-size:14px; margin-top:8px;">Türkiye'de Geliştirilen Özel Donanım</div></div>
</div>

<div class="reveal" style="margin-top:80px; text-align:center;">
<img src="/assets/images/general/acc-ing-26.png" alt="İTÜ Çekirdek Acceleration Startup" style="max-width:100%; width:350px; border-radius:16px; margin:0 auto; filter:grayscale(100%); opacity:0.8; transition:all 0.3s ease; border: 1px solid var(--border);" onmouseover="this.style.filter='grayscale(0%)'; this.style.opacity='1';" onmouseout="this.style.filter='grayscale(100%)'; this.style.opacity='0.8';">
</div>
</div>
</section>

<!-- FOOTER -->
<!-- FOOTER -->



` }} />
      
      <Script src="/js/iletisim.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'iletisimjs']) window['init' + 'iletisimjs'](); }} />
    </>
  );
}
