// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'siparistakipjs']) {
      window['init' + 'siparistakipjs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  body { background: var(--bg); color: var(--text); padding-bottom: 100px; }
  .order-container { max-width: 700px; margin: 160px auto 0; text-align: center; }
  .order-pill { display: inline-flex; align-items: center; gap: 8px; color: var(--accent); font-size: 11px; font-weight: 800; letter-spacing: 1.5px; margin-bottom: 24px; }
  .order-card { background: #111; border: 1px solid rgba(255,255,255,0.05); border-radius: 24px; padding: 40px; text-align: left; margin-top: 48px; }
  
  .status-pill { background: rgba(255, 215, 0, 0.1); color: var(--accent); padding: 8px 16px; border-radius: 20px; font-size: 11px; font-weight: 800; letter-spacing: 1px; }
  
  .timeline { display: flex; justify-content: space-between; align-items: flex-start; position: relative; margin: 48px 0; }
  .timeline::before { content: ''; position: absolute; top: 20px; left: 12.5%; right: 12.5%; height: 1px; background: rgba(255,255,255,0.1); z-index: 1; }
  .timeline::after { content: ''; position: absolute; top: 19px; left: 12.5%; width: 25%; height: 3px; background: linear-gradient(to right, #00FF88, var(--accent)); z-index: 1; border-radius: 2px; }
  
  .tl-item { position: relative; z-index: 2; text-align: center; flex: 1; }
  .tl-icon { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-size: 20px; color: #fff; background: #222; }
  .tl-item.completed .tl-icon { background: #00FF88; color: #000; }
  .tl-item.active .tl-icon { background: var(--accent); color: #000; box-shadow: 0 0 15px rgba(255,215,0,0.4); }
  
  .tl-title { font-size: 13px; font-weight: 800; margin-bottom: 4px; color: #fff; }
  .tl-sub { font-size: 11px; color: var(--text2); }
  
  .divider { height: 1px; background: rgba(255,255,255,0.05); margin: 32px 0; border: none; border-bottom: 1px dashed rgba(255,255,255,0.1); }
  
  .item-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 20px; display: flex; align-items: center; gap: 24px; margin-top: 16px; }
` }} />
      <div dangerouslySetInnerHTML={{ __html: `



<div class="container">
  <div class="order-container reveal">
    <div class="order-pill">
      <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--accent);"></div>
      SİPARİŞ #PRD-2026-8942
    </div>
    <h1 style="font-size: 40px; font-weight: 900; line-height: 1.1;">
      Erken Erişim Programına<br>
      <span style="color: var(--accent);">Katıldınız!</span>
    </h1>
    <p style="color: var(--text2); margin-top: 24px; font-size: 15px; max-width: 500px; margin-left: auto; margin-right: auto; line-height: 1.6;">
      Tebrikler. Dünyanın ilk OBD + IMU hibrit kestirimci bakım teknolojisine sahip olan sınırlı sayıdaki kullanıcılardan birisiniz.
    </p>
    
    <div class="order-card">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap:wrap; gap:12px;">
        <h3 style="font-size: 18px; font-weight: 800;">Teşekkürler</h3>
        <div class="status-pill" style="white-space:nowrap;">DESTEĞİNİZLE GELİŞTİRİYORUZ</div>
      </div>
      
      <div class="timeline">
        <div class="tl-item completed">
          <div class="tl-icon"><i class="ph-fill ph-check-circle"></i></div>
          <div class="tl-title">Sipariş Alındı</div>
          <div class="tl-sub">12 Mayıs 2026, 14:32</div>
        </div>
        <div class="tl-item active">
          <div class="tl-icon"><i class="ph-fill ph-hand-heart"></i></div>
          <div class="tl-title">Teşekkürler</div>
          <div class="tl-sub">Desteğinizle Birlikte Cihazı Geliştiriyoruz</div>
        </div>
        <div class="tl-item">
          <div class="tl-icon"><i class="ph-fill ph-truck"></i></div>
          <div class="tl-title">Kargoya Verildi</div>
          <div class="tl-sub">Tahmini: Aralık 2026</div>
        </div>
        <div class="tl-item">
          <div class="tl-icon"><i class="ph-fill ph-house"></i></div>
          <div class="tl-title">Teslim Edildi</div>
          <div class="tl-sub">Bekleniyor</div>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <h3 style="font-size: 14px; font-weight: 800;">Sipariş Detayı</h3>
      
      <div class="item-card">
        <div style="width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; background: #000; border-radius: 12px;">
          <img id="st-device-img" src="/assets/images/devices/GREG.png" alt="Cihaz" style="height:50px; object-fit:contain;" />
        </div>
        <div style="flex: 1;">
          <h4 style="font-size: 16px; font-weight: 800; margin-bottom: 4px;" id="st-device">Preditech Cihazı</h4>
          <p style="font-size: 12px; color: var(--text2); margin-bottom: 8px;">Erken Erişim Kurucu Sürümü • 1 Aylık AI Aboneliği Dahil</p>
          <div style="display: inline-block; padding: 4px 12px; background: rgba(255,255,255,0.05); border-radius: 12px; font-size: 11px; color: var(--text2);">Adet: 1</div>
        </div>
        <div style="font-size: 18px; font-weight: 800; color: var(--accent);" id="st-price">950₺</div>
      </div>
      
      <div class="divider"></div>
      
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h3 style="font-size: 16px; font-weight: 800;">Genel Toplam</h3>
        <div style="font-size: 20px; font-weight: 900; color: var(--accent);" id="st-total-price">950₺</div>
      </div>
      
    </div>
  </div>
</div>


` }} />
      
      <Script src="/js/siparis-takip.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'siparistakipjs']) window['init' + 'siparistakipjs'](); }} />
    </>
  );
}
