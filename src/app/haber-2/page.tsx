// @ts-nocheck
'use client';

import Script from 'next/script';

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `` }} />
      <div dangerouslySetInnerHTML={{ __html: `
<!-- NAVBAR -->

<section class="section" style="padding-top:160px; min-height:80vh;">
<div class="container" style="max-width:800px">
  <a href="/haberler" style="color:var(--accent);text-decoration:none;font-weight:700;margin-bottom:24px;display:inline-block">← Haberlere Dön</a>
  <span style="display:block;color:var(--text2);margin-bottom:16px">10 Nisan 2026</span>
  <h1 style="font-size:clamp(32px,5vw,48px);margin-bottom:40px;line-height:1.2">Ağır Vasıtalar İçin Devrim: Preditech TITAN Ön Siparişte</h1>
  <img src="/assets/images/devices/preditech titan.png" alt="Ağır Vasıtalar İçin Devrim: Preditech TITAN Ön Siparişte" style="width:100%;border-radius:24px;margin-bottom:40px;background:#000;object-fit:contain;padding:20px;max-height:400px;">
  <div style="font-size:18px;line-height:1.8;color:var(--text)">
    Ağır vasıta operasyonlarındaki devrim niteliğindeki yeni donanımımız Titan, lojistik maliyetlerini düşürmeyi hedefliyor. Artık tır filoları, yolda kalma (downtime) sürelerini tamamen ortadan kaldıracak kestirimci bakım verilerine gerçek zamanlı olarak erişebilecek.<br><br>Titan modeli, en zorlu hava koşullarına ve titreşimlere dayanacak şekilde endüstriyel sınıf polikarbon kasa ile üretilmiştir. Filo yöneticileri artık araçlarının motor sağlığını masalarından anlık olarak izleyebilecek.
  </div>
</div>
</section>




` }} />
      
      <Script src="/js/haber-2.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'haber2js']) window['init' + 'haber2js'](); }} />
    </>
  );
}
