// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'haber1js']) {
      window['init' + 'haber1js']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `` }} />
      <div dangerouslySetInnerHTML={{ __html: `
<!-- NAVBAR -->

<section class="section" style="padding-top:160px; min-height:80vh;">
<div class="container" style="max-width:800px">
  <a href="/haberler" style="color:var(--accent);text-decoration:none;font-weight:700;margin-bottom:24px;display:inline-block">← Haberlere Dön</a>
  <span style="display:block;color:var(--text2);margin-bottom:16px">21 Mayıs 2026</span>
  <h1 style="font-size:clamp(32px,5vw,48px);margin-bottom:40px;line-height:1.2">TÜBİTAK BİGG 1812 Yatırımını Başarıyla Tamamladık</h1>
  <img src="/assets/images/general/preditechlogo.png" alt="TÜBİTAK BİGG 1812 Yatırımını Başarıyla Tamamladık" style="width:100%;border-radius:24px;margin-bottom:40px;background:#000;object-fit:contain;padding:40px;max-height:400px;">
  <div style="font-size:18px;line-height:1.8;color:var(--text)">
    Preditech olarak Ar-Ge süreçlerimizi hızlandıracak ve donanım altyapımızı global standartlara taşıyacak olan TÜBİTAK BİGG 1812 yatırımını resmi olarak başarıyla tamamladığımızı duyurmaktan gurur duyuyoruz.<br><br>Bu yatırım ile birlikte yapay zeka tabanlı kestirimci bakım algoritmalarımız (Predicto AI) ve 6 eksenli titreşim sensörümüz çok daha hızlı ve hassas hale gelecek. Türkiye'den çıkan bir otomotiv teknolojisi markası olarak küresel pazara açılma hedeflerimizde bu büyük adımı tüm paydaşlarımızla paylaşıyoruz.
  </div>
</div>
</section>




` }} />
      
      <Script src="/js/haber-1.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'haber1js']) window['init' + 'haber1js'](); }} />
    </>
  );
}
