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
<div class="container">
  <div class="section-label" style="justify-content:center;margin-bottom:24px">YAZILIM ÇÖZÜMLERİMİZ</div>
  <h1 style="text-align:center;font-size:clamp(40px,6vw,64px);margin-bottom:60px">Tüm İhtiyaçlarınız,<br><span style="color:var(--accent)">Tek Platformda.</span></h1>
  
  <div class="sol-grid" id="solGrid"></div>
</div>
</section>


<!-- Modal -->
<div class="modal-overlay" id="solModal">
  <div class="modal-content">
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="sol-icon" id="mIcon"></div>
    <div class="modal-title" id="mTitle"></div>
    <div class="modal-desc" id="mDesc"></div>
  </div>
</div>

<!-- FOOTER -->




` }} />
      
      <Script src="/js/cozumler.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'cozumlerjs']) window['init' + 'cozumlerjs'](); }} />
    </>
  );
}
