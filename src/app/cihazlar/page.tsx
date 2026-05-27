// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'cihazlarjs']) {
      window['init' + 'cihazlarjs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* Devices Deck */
  .device-deck {
    position: relative; width: 480px; height: 300px; z-index: 2; margin-top: 40px; margin-bottom: 20px;
    cursor: pointer;
  }
  .device-deck img {
    position: absolute; width: 480px;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.8));
    transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .device-deck .dev-gt { z-index: 5; width: 300px; bottom: 0; left: 90px; transform: translateY(0); opacity: 1; }
  .device-deck .dev-pro { z-index: 4; width: 480px; bottom: 30px; left: 0px; opacity: 0; pointer-events: none; }
  .device-deck .dev-go { z-index: 3; width: 480px; bottom: 30px; left: 0px; opacity: 0; pointer-events: none; }
    
  .device-deck:hover .dev-gt { transform: scale(1.1) translateY(-10px); z-index: 10; filter: drop-shadow(0 30px 60px rgba(255, 68, 68, 0.5)); }
  .device-deck:hover .dev-pro { transform: translateX(-200px); opacity: 1; filter: drop-shadow(0 20px 40px rgba(0, 255, 136, 0.3)); pointer-events: auto; }
  .device-deck:hover .dev-go { transform: translateX(200px); opacity: 1; filter: drop-shadow(0 20px 40px rgba(249, 212, 35, 0.3)); pointer-events: auto; }

  @media(max-width: 768px) {
    .device-deck { transform: scale(0.7); left: -15%; }
  }
` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- NAVBAR -->


<div class="page-header" style="padding-top:120px;padding-bottom:40px; position:relative; overflow:hidden;">
<div class="particles"></div>
<div class="container" style="display:flex; flex-direction:column; align-items:center; text-align:center;">
<h1 id="hero-heading" style="font-size:clamp(36px,5vw,56px); transition: all 0.3s ease;">Size Göre Bir<br><span>Preditech</span> Var.</h1>
<p class="hero-sub" style="transition: all 0.3s ease;">Her sürücü profili için özel olarak geliştirilmiş donanım seçenekleri.</p>

<style>
  /* Devices Deck */
  .device-deck {
    position: relative; width: 480px; height: 300px; z-index: 2; margin-top: 40px; margin-bottom: 20px;
    cursor: pointer;
  }
  .device-deck img {
    position: absolute; width: 480px;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.8));
    transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .device-deck .dev-gt { z-index: 5; width: 300px; bottom: 0; left: 90px; transform: translateY(0); opacity: 1; }
  .device-deck .dev-pro { z-index: 4; width: 480px; bottom: 30px; left: 0px; opacity: 0; pointer-events: none; }
  .device-deck .dev-go { z-index: 3; width: 480px; bottom: 30px; left: 0px; opacity: 0; pointer-events: none; }
    
  .device-deck:hover .dev-gt { transform: scale(1.1) translateY(-10px); z-index: 10; filter: drop-shadow(0 30px 60px rgba(255, 68, 68, 0.5)); }
  .device-deck:hover .dev-pro { transform: translateX(-200px); opacity: 1; filter: drop-shadow(0 20px 40px rgba(0, 255, 136, 0.3)); pointer-events: auto; }
  .device-deck:hover .dev-go { transform: translateX(200px); opacity: 1; filter: drop-shadow(0 20px 40px rgba(249, 212, 35, 0.3)); pointer-events: auto; }

  @media(max-width: 768px) {
    .device-deck { transform: scale(0.7); left: -15%; }
  }
</style>

<div class="device-deck">
    <img src="/assets/images/devices/FB.png" alt="Preditech GO" class="dev-go hero-interactive" onclick="window.location.href="/go"" data-title="Maliyeti Düşürün, Kontrolü Artırın." data-desc="GO ile standart bir sürüşü akıllı ve tasarruflu bir deneyime dönüştürün.">
    <img src="/assets/images/devices/GREG.png" alt="Preditech PRO" class="dev-pro hero-interactive" onclick="window.location.href="/pro"" data-title="Geleceği Bugünden Yakalayın." data-desc="PRO ile profesyonel seviyede araç analitiği ve detaylı performans verileri elinizin altında.">
    <img src="/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" alt="Preditech GT" class="dev-gt hero-interactive" onclick="window.location.href="/gt"" data-title="Pistlerin Yeni Hakimi." data-desc="Saniyenin onda biri fark yaratır. GT ile sınırları zorlayın ve aracınızın maksimum potansiyeline ulaşın.">
</div>

</div>
</div>

<!-- GO SECTION -->
<section class="section" id="go" style="border-bottom:1px solid var(--border)">
<div class="container">
<div class="compare-grid reveal">
<div class="device-deck-mini deck-go" style="margin:0;background:var(--surface);border-radius:var(--radius);border:1px solid var(--border)">
  <div style="font-size:80px;font-weight:900;color:var(--text2);opacity:0.2;position:absolute">GO</div>
  <img src="/assets/images/devices/FB.png" alt="Preditech GO" class="dev-go hero-interactive" onclick="window.location.href="/go"">
  <img src="/assets/images/devices/GREG.png" alt="Preditech PRO" class="dev-pro hero-interactive" onclick="window.location.href="/pro"">
  <img src="/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" alt="Preditech GT" class="dev-gt hero-interactive" onclick="window.location.href="/gt"">
</div>
<div>
<div class="section-label">G�NL�K S�R�C� ���N</div>
<h2>Preditech <span>GO</span></h2>
<p class="subtitle" style="margin-bottom:24px">Temel ara� sa�l��� takibi ve hata kodu te�hisi i�in tasarland�. OBD-II portuna tak�p an�nda veri almaya ba�lay�n.</p>
<div class="product-price" style="margin-bottom:24px">950?</div>
<ul class="feature-list" style="margin-bottom:32px">
<li><span class="yes">?</span> T�m standart OBD-II protokollerini destekler</li>
<li><span class="yes">?</span> DTC (Hata Kodu) okuma ve silme</li>
<li><span class="yes">?</span> Anl�k yak�t t�ketimi ve motor s�cakl��� takibi</li>
<li><span class="yes">?</span> Basit, anla��l�r mobil aray�z bildirimleri</li>
</ul>
<a href="/erken-erisim" class="btn btn-ghost">�n Sipari� Ver</a>
</div>
</div>
</div>
</section>

<!-- PRO SECTION -->
<section class="section" id="pro" style="border-bottom:1px solid var(--border);background:rgba(255,215,0,0.02)">
<div class="container">
<div class="compare-grid reveal">
<div style="order:2">
<div class="device-deck-mini deck-pro" style="margin:0;background:var(--card);border-radius:var(--radius);border:1px solid var(--border-accent);height:100%">
  <div style="font-size:80px;font-weight:900;color:var(--accent);opacity:0.1;position:absolute">PRO</div>
  <img src="/assets/images/devices/FB.png" alt="Preditech GO" class="dev-go hero-interactive" onclick="window.location.href="/go"">
  <img src="/assets/images/devices/GREG.png" alt="Preditech PRO" class="dev-pro hero-interactive" onclick="window.location.href="/pro"">
  <img src="/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" alt="Preditech GT" class="dev-gt hero-interactive" onclick="window.location.href="/gt"">
</div>
</div>
<div style="order:1">
<div class="popular-badge" style="position:relative;display:inline-block;top:0;left:0;transform:none;margin-bottom:16px">EN POP�LER</div>
<h2>Preditech <span>PRO</span></h2>
<p class="subtitle" style="margin-bottom:24px">D�nyan�n ilk Hibrit Veri F�zyonu cihaz�. OBD verilerini 6 eksenli IMU sens�r� ile birle�tirerek ar�zalar� �nceden tahmin eder.</p>
<div class="product-price" style="margin-bottom:24px">2.500?</div>
<ul class="feature-list" style="margin-bottom:32px">
<li><span class="yes" style="color:var(--accent)">?</span> GO'nun t�m �zelliklerini kapsar</li>
<li><span class="yes" style="color:var(--accent)">?</span> 6-eksenli IMU Sens�r� (Titre�im/Rezonans Analizi)</li>
<li><span class="yes" style="color:var(--accent)">?</span> Kestirimci Bak�m AI (Ar�zay� 30 g�n �nceden hisseder)</li>
<li><span class="yes" style="color:var(--accent)">?</span> Detayl� S�r�� Skoru (Frenleme, Viraj G-Kuvveti)</li>
<li><span class="yes" style="color:var(--accent)">?</span> Predicto AI Chatbot Deste�i</li>
</ul>
<a href="/erken-erisim" class="btn btn-primary">�n Sipari� Ver</a>
</div>
</div>
</div>
</section>

<!-- GT SECTION -->
<section class="section" id="gt">
<div class="container">
<div class="compare-grid reveal">
<div class="device-deck-mini deck-gt" style="margin:0;background:var(--surface);border-radius:var(--radius);border:1px solid var(--border)">
  <div style="font-size:80px;font-weight:900;color:var(--danger);opacity:0.1;position:absolute">GT</div>
  <img src="/assets/images/devices/FB.png" alt="Preditech GO" class="dev-go hero-interactive" onclick="window.location.href="/go"">
  <img src="/assets/images/devices/GREG.png" alt="Preditech PRO" class="dev-pro hero-interactive" onclick="window.location.href="/pro"">
  <img src="/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" alt="Preditech GT" class="dev-gt hero-interactive" onclick="window.location.href="/gt"">
</div>
<div>
<div class="section-label">PERFORMANS TUTKUNLARINA</div>
<h2>Preditech <span>GT</span></h2>
<p class="subtitle" style="margin-bottom:24px">Pist g�nleri ve y�ksek performans i�in �retildi. 100Hz dahili GPS ve hassas telemetri verileri ile her saliseyi �l��n.</p>
<div class="product-price" style="margin-bottom:24px">9.800?</div>
<ul class="feature-list" style="margin-bottom:32px">
<li><span class="yes">?</span> PRO'nun t�m �zelliklerini kapsar</li>
<li><span class="yes">?</span> 100Hz Hassas Dahili GPS</li>
<li><span class="yes">?</span> 0-100 km/s ve 100-200 km/s S�re �l��mleri</li>
<li><span class="yes">?</span> Pist Modu ve Sekt�r Zamanlar� Takibi</li>
<li><span class="yes">?</span> Fren Mesafesi Testleri ve Liderlik Tablosu</li>
</ul>
<a href="/erken-erisim" class="btn btn-ghost">�n Sipari� Ver</a>
</div>
</div>
</div>
</section>

<!-- FOOTER -->
<!-- FOOTER -->



` }} />
      
      <Script src="/js/cihazlar.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'cihazlarjs']) window['init' + 'cihazlarjs'](); }} />
    </>
  );
}
