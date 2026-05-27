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
  <span style="display:block;color:var(--text2);margin-bottom:16px">15 Mart 2026</span>
  <h1 style="font-size:clamp(32px,5vw,48px);margin-bottom:40px;line-height:1.2">Predicto AI 2.0: Arabanızla Artık Gerçekten Konuşun</h1>
  <img src="/assets/images/app/predicto AI chatbot.png" alt="Predicto AI 2.0: Arabanızla Artık Gerçekten Konuşun" style="width:100%;border-radius:24px;margin-bottom:40px;object-fit:cover;max-height:400px;">
  <div style="font-size:18px;line-height:1.8;color:var(--text)">
    Aracınızla artık gerçekten konuşabilirsiniz! Predicto AI Chatbot sistemi, yeni Doğal Dil İşleme (NLP) entegrasyonu sayesinde çok daha akıllı ve insani yanıtlar veriyor.<br><br>Artık "Bugün arabanın altından tık tık ses geldi, sorun ne olabilir?" gibi günlük dildeki soruları, anlık OBD verileriyle çapraz analiz ederek yanıtlayabiliyor. Üstelik karmaşık teknik terimler yerine herkesin anlayabileceği şekilde mekanik danışmanlık yapıyor.
  </div>
</div>
</section>




` }} />
      
      <Script src="/js/haber-3.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'haber3js']) window['init' + 'haber3js'](); }} />
    </>
  );
}
