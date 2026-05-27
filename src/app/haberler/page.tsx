// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'haberlerjs']) {
      window['init' + 'haberlerjs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `` }} />
      <div dangerouslySetInnerHTML={{ __html: `
<!-- NAVBAR -->


  <section class="section" style="padding-top:160px; min-height:80vh;">
  <div class="container">
    <div class="section-label" style="justify-content:center;margin-bottom:24px">BİZDEN HABERLER</div>
    <h1 style="text-align:center;font-size:clamp(40px,6vw,64px);margin-bottom:60px">Gelişmeleri<br><span style="color:var(--accent)">Takip Edin.</span></h1>
    
    <div class="news-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px;">
      <a href="/haber-1" class="news-card" style="text-decoration:none;color:inherit;">
        <img src="/assets/images/general/preditechlogo.png" class="news-img" alt="Preditech Yatırım" style="background:#000;object-fit:contain;padding:40px;width:100%;height:250px;border-radius:24px 24px 0 0;">
        <div class="news-content" style="padding:24px;">
          <span class="news-date" style="color:var(--text2);font-size:14px;">21 Mayıs 2026</span>
          <h3 class="news-title" style="margin:12px 0;">TÜBİTAK BİGG 1812 Destekli Projemiz Resmi Olarak Başladı</h3>
          <p class="news-excerpt" style="color:var(--text2);">Ar-Ge süreçlerimizi hızlandıracak ve donanım altyapımızı global standartlara taşıyacak olan yatırım...</p>
        </div>
      </a>
      
      <a href="/haber-2" class="news-card" style="text-decoration:none;color:inherit;">
        <img src="/assets/images/devices/preditech titan.png" class="news-img" alt="Titan Lansmanı" style="background:#000;object-fit:contain;padding:20px;width:100%;height:250px;border-radius:24px 24px 0 0;">
        <div class="news-content" style="padding:24px;">
          <span class="news-date" style="color:var(--text2);font-size:14px;">10 Nisan 2026</span>
          <h3 class="news-title" style="margin:12px 0;">Ağır Vasıtalar İçin Devrim: TITAN Ön Siparişte</h3>
          <p class="news-excerpt" style="color:var(--text2);">Tır ve kamyon filolarının en büyük problemi olan arıza kaynaklı duruş sürelerini (downtime) bitirecek donanım...</p>
        </div>
      </a>
      
      <a href="/haber-3" class="news-card" style="text-decoration:none;color:inherit;">
        <img src="/assets/images/app/predicto AI chatbot.png" class="news-img" alt="Predicto AI" style="width:100%;height:250px;object-fit:cover;border-radius:24px 24px 0 0;">
        <div class="news-content" style="padding:24px;">
          <span class="news-date" style="color:var(--text2);font-size:14px;">15 Mart 2026</span>
          <h3 class="news-title" style="margin:12px 0;">Predicto AI 2.0: Arabanızla Artık Gerçekten "Konuşun"</h3>
          <p class="news-excerpt" style="color:var(--text2);">Derin öğrenme algoritmamız Predicto AI, yeni NLP entegrasyonu sayesinde arızaları çok daha insansı raporluyor...</p>
        </div>
      </a>
    </div>
  </div>
  </section>
  
<!-- FOOTER -->
<!-- FOOTER -->



` }} />
      
      <Script src="/js/haberler.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'haberlerjs']) window['init' + 'haberlerjs'](); }} />
    </>
  );
}
