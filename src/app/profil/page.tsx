// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  body { background: var(--bg); color: var(--text); overflow-x: hidden; }
  
  .dashboard-wrapper { display: block; }
  
  /* Sidebar */
  .sidebar { width: 280px; background: var(--surface); border-left: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); padding: 32px 24px; display: flex; flex-direction: column; gap: 8px; }
  .sidebar-link { display: flex; align-items: center; gap: 12px; padding: 14px 16px; border-radius: 12px; color: var(--text2); font-weight: 600; text-decoration: none; transition: all 0.2s ease; cursor: pointer; }
  .sidebar-link:hover { background: rgba(255,255,255,0.03); color: #fff; }
  .sidebar-link.active { background: rgba(255,215,0,0.1); color: var(--accent); border-left: 3px solid var(--accent); }
  .sidebar-link i { font-size: 20px; }
  
  /* Main Content */
  .main-content { flex: 1; padding: 40px; overflow-y: auto; }
  .dashboard-section { display: none; animation: fadeIn 0.4s ease; }
  .dashboard-section.active { display: block; }
  
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  
  .section-header { margin-bottom: 32px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 16px; }
  .section-title { font-size: 28px; font-weight: 800; margin-bottom: 8px; }
  .section-desc { color: var(--text2); font-size: 14px; }
  
  /* Panels */
  .panel-card { background: rgba(20,20,20,0.8); backdrop-filter: blur(10px); border-radius: 20px; padding: 32px; border: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; position: relative; overflow: hidden; }
  .panel-header { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 700; margin-bottom: 24px; }
  .panel-header i { font-size: 18px; }
  .panel-value { font-size: 48px; font-weight: 900; margin-bottom: 8px; line-height: 1; }
  .panel-label { font-size: 11px; font-weight: 700; color: var(--text2); letter-spacing: 1px; margin-bottom: 24px; text-transform: uppercase; }
  
  /* Cihazlar */
  .device-large { width: 380px; filter: drop-shadow(0 30px 50px rgba(0,0,0,0.8)); margin-right: 60px; }
  .action-btn { padding: 10px 24px; font-size: 13px; font-weight: 700; border-radius: 20px; cursor: pointer; text-decoration: none; display: inline-block; transition: all 0.2s ease; border: none; }
  .btn-white { background: #fff; color: #000; }
  .btn-white:hover { background: #eee; }
  .btn-red { background: rgba(255, 68, 68, 0.1); color: var(--danger); border: 1px solid var(--danger); }
  .btn-red:hover { background: rgba(255, 68, 68, 0.2); }
  .btn-blue { background: rgba(0, 150, 255, 0.1); color: #0096FF; border: 1px solid #0096FF; }
  .btn-blue:hover { background: rgba(0, 150, 255, 0.2); }
  
  /* Profile Settings */
  .settings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
  .profile-avatar-large { width: 100px; height: 100px; border-radius: 50%; border: 3px solid var(--accent); background: #222; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; cursor: pointer; }
  .profile-avatar-large:hover::after { content: 'Düzenle'; position: absolute; inset: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: #fff; }
  
  .pref-row { display: flex; justify-content: space-between; align-items: center; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
  .pref-toggle { width: 44px; height: 24px; background: rgba(255,255,255,0.1); border-radius: 12px; position: relative; cursor: pointer; transition: 0.3s; }
  .pref-toggle.active { background: var(--accent); }
  .pref-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: #fff; border-radius: 50%; transition: 0.3s; }
  .pref-toggle.active::after { transform: translateX(20px); }
  
  .clickable-card { cursor: pointer; transition: all 0.2s ease; }
  .clickable-card:hover { border-color: var(--accent); transform: translateY(-2px); }
  
  /* Telemetry Hologram */
  @keyframes shimmerPulse { 
    0% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.5); opacity: 0.4; }
    100% { transform: scale(1); opacity: 0.8; }
  }


/* GT STYLES */

    /* OVERRIDE CACHED DECK STYLES */
    .deck-card {
      position: absolute !important;
      top: 50% !important;
      left: 50% !important;
      margin-top: -416px !important;
      margin-left: -195px !important;
      height: 833px !important;
      width: 390px !important;
      transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
      transform-origin: center center !important;
      cursor: pointer !important;
      border-radius: 40px !important;
      filter: grayscale(40%) brightness(0.6) !important;
    }
    
    /* KARTLARIN BASE DURUMU: Üst üste (tam merkezde, deste kapalı) */
    .deck-card-1 { transform: translateX(-60px) translateY(20px) rotate(-6deg) scale(0.85) !important; z-index: 1 !important; }
    .deck-card-2 { transform: translateX(-20px) translateY(10px) rotate(-2deg) scale(0.85) !important; z-index: 2 !important; }
    .deck-card-3 { transform: translateX(20px) translateY(10px) rotate(2deg) scale(0.85) !important; z-index: 3 !important; }
    .deck-card-4 { transform: translateX(60px) translateY(20px) rotate(6deg) scale(0.85) !important; z-index: 4 !important; }

    /* DESTE ALANINA FARE İLE GİRİLDİĞİNDE: Kartlar yelpaze gibi birbirinden ayrılır (fan out) */
    .gt-features-deck:hover .deck-card-1 { transform: translateX(-280px) translateY(20px) rotate(-8deg) scale(0.85) !important; }
    .gt-features-deck:hover .deck-card-2 { transform: translateX(-90px) translateY(10px) rotate(-2deg) scale(0.85) !important; }
    .gt-features-deck:hover .deck-card-3 { transform: translateX(90px) translateY(10px) rotate(2deg) scale(0.85) !important; }
    .gt-features-deck:hover .deck-card-4 { transform: translateX(280px) translateY(20px) rotate(8deg) scale(0.85) !important; }

    /* TEK BİR KARTIN ÜZERİNE GELİNDİĞİNDE: Sadece o kart büyür, dikleşir ve renklenir */
    .gt-features-deck:hover .deck-card-1:hover { transform: translateX(-280px) translateY(-30px) rotate(0deg) scale(0.95) !important; z-index: 20 !important; filter: grayscale(0%) brightness(1) !important; }
    .gt-features-deck:hover .deck-card-2:hover { transform: translateX(-90px) translateY(-30px) rotate(0deg) scale(0.95) !important; z-index: 20 !important; filter: grayscale(0%) brightness(1) !important; }
    .gt-features-deck:hover .deck-card-3:hover { transform: translateX(90px) translateY(-30px) rotate(0deg) scale(0.95) !important; z-index: 20 !important; filter: grayscale(0%) brightness(1) !important; }
    .gt-features-deck:hover .deck-card-4:hover { transform: translateX(280px) translateY(-30px) rotate(0deg) scale(0.95) !important; z-index: 20 !important; filter: grayscale(0%) brightness(1) !important; }

    /* TOOLTIP YAZILARI (Tanıtma kartı) */
    .deck-card-tooltip { width: 340px !important; bottom: 103% !important; padding: 20px 24px !important; }
    .deck-card-tooltip h3 { font-size: 22px !important; margin-bottom: 8px !important; }
    .deck-card-tooltip p { font-size: 15px !important; line-height: 1.5 !important; }

    .gt-features-deck:hover .deck-card:not(:hover) {
      opacity: 0.4 !important;
      filter: grayscale(80%) blur(5px) brightness(0.3) !important;
    }

    @media (max-width: 1024px) {
      .gt-features-deck {
        height: auto !important;
        flex-direction: column !important;
        gap: 40px !important;
        margin: 40px 0 !important;
      }
      .deck-card {
        position: relative !important;
        top: auto !important;
        left: auto !important;
        margin: 0 auto !important;
        transform: none !important;
        filter: none !important;
        opacity: 1 !important;
        z-index: 1 !important;
      }
      .deck-card-tooltip { display: none !important; }
    }
  
/* PRO STYLES */

/* GO STYLES */

` }} />
      <div dangerouslySetInnerHTML={{ __html: `



<div class="dashboard-wrapper">
  <div class="container" style="display: flex; min-height: calc(100vh - 80px); width: 100%; padding: 0;">
    <!-- SIDEBAR -->
    <aside class="sidebar">
      <div style="margin-bottom: 32px; padding: 0 16px;">
        <div style="font-size: 11px; color: var(--text2); letter-spacing: 1px; font-weight: 700; margin-bottom: 12px;">DASHBOARD</div>
      </div>
      
      <a class="sidebar-link active" onclick="switchTab('karsilama-ekrani', this)">
        <i class="ph ph-house"></i> Anasayfa
      </a>
      <a class="sidebar-link" onclick="switchTab('arac-verilerim', this)">
        <i class="ph ph-steering-wheel"></i> Araç Verilerim
      </a>
      <a class="sidebar-link" onclick="switchTab('cihazlarim', this)">
        <i class="ph ph-cpu"></i> Cihazlarım
      </a>
      <a class="sidebar-link" onclick="switchTab('abonelikler', this)">
        <i class="ph ph-star"></i> Aboneliklerim
      </a>
      <a class="sidebar-link" onclick="switchTab('siparisler', this)">
        <i class="ph ph-package"></i> Siparişlerim
      </a>
      <div style="height: 1px; background: rgba(255,255,255,0.05); margin: 16px 0;"></div>
      <a class="sidebar-link" onclick="switchTab('hesap-ayarlari', this)">
        <i class="ph ph-user-gear"></i> Hesap Ayarları
      </a>
      <a href="javascript:void(0)" onclick="handleLogout()" class="sidebar-link" style="color: var(--danger); margin-top: auto;">
        <i class="ph ph-sign-out"></i> Çıkış Yap
      </a>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="main-content">
      
      <!-- KARŞILAMA EKRANI TAB -->
      <section id="karsilama-ekrani" class="dashboard-section active">
        <div style="background: linear-gradient(135deg, rgba(232, 255, 0, 0.05) 0%, rgba(0, 0, 0, 0) 100%); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 24px; padding: 40px; margin-bottom: 40px; display: flex; align-items: center; justify-content: space-between; position: relative; overflow: hidden;">
          <div style="position: relative; z-index: 2;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
              <div style="width: 48px; height: 48px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255, 255, 255, 0.2);">
                <i class="ph-fill ph-user" style="font-size: 24px; color: #fff;"></i>
              </div>
              <h2 style="font-size: 32px; font-weight: 800; margin: 0;">Merhaba Ahmet</h2>
            </div>
            <p style="font-size: 16px; color: var(--text2); max-width: 500px; line-height: 1.6; margin-bottom: 24px;">Ben <strong>Predicto</strong>. Aracının durumu şu an mükemmel görünüyor. Sana ne konuda yardımcı olabilirim?</p>
            <div style="display: flex; gap: 12px;">
              <button onclick="document.querySelectorAll('.sidebar-link')[1].click()" class="btn btn-primary" style="padding: 12px 24px; border-radius: 12px; font-weight: 700; font-size: 14px;"><i class="ph ph-steering-wheel"></i> Son Sürüşümü İncele</button>
              <button onclick="document.querySelectorAll('.sidebar-link')[5].click()" class="btn btn-ghost" style="padding: 12px 24px; border-radius: 12px; font-weight: 700; font-size: 14px; border: 1px solid rgba(255,255,255,0.1);"><i class="ph ph-user-gear"></i> Profilimi Düzenle</button>
              <button onclick="document.querySelectorAll('.sidebar-link')[2].click()" class="btn btn-ghost" style="padding: 12px 24px; border-radius: 12px; font-weight: 700; font-size: 14px; border: 1px solid rgba(255,255,255,0.1);"><i class="ph ph-cpu"></i> Cihaz Ekle</button>
            </div>
          </div>
          <i class="ph-fill ph-sparkle" style="position: absolute; right: 40px; top: 50%; transform: translateY(-50%); font-size: 180px; color: rgba(232, 255, 0, 0.05); z-index: 1;"></i>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px;">
          <!-- Quick Status Card -->
          <div class="bento-card" style="padding: 24px; border-radius: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <div style="font-size: 14px; font-weight: 700; color: var(--text2);"><i class="ph ph-car"></i> Araç Durumu</div>
              <span style="padding: 4px 12px; background: rgba(0, 255, 136, 0.1); color: #00FF88; border-radius: 6px; font-size: 11px; font-weight: 700;">Sorunsuz</span>
            </div>
            <h3 style="font-size: 20px; font-weight: 800; margin-bottom: 8px;">BMW M4 Competition</h3>
            <p style="font-size: 13px; color: var(--text2);">Son senkronizasyon: 5 dk önce</p>
          </div>

          <!-- Quick Score Card -->
          <div class="bento-card" style="padding: 24px; border-radius: 20px; background: linear-gradient(185deg, rgba(232, 255, 0, 0.05) 0%, rgba(0, 0, 0, 0) 100%);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <div style="font-size: 14px; font-weight: 700; color: var(--text2);"><i class="ph ph-trend-up"></i> Son Sürüş Puanı</div>
              <span style="padding: 4px 12px; background: rgba(232, 255, 0, 0.1); color: #e8ff00; border-radius: 6px; font-size: 11px; font-weight: 700;">Harika</span>
            </div>
            <h3 style="font-size: 32px; font-weight: 900; color: #e8ff00; margin-bottom: 4px;">98<span style="font-size: 16px; color: var(--text2); font-weight: 600;">/100</span></h3>
            <p style="font-size: 13px; color: var(--text2);">Bugün Kadıköy rotasında</p>
          </div>

          <!-- Subscription -->
          <div class="bento-card" style="padding: 24px; border-radius: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <div style="font-size: 14px; font-weight: 700; color: var(--text2);"><i class="ph ph-star"></i> Abonelik Durumu</div>
              <span style="padding: 4px 12px; background: rgba(255, 255, 255, 0.1); color: #fff; border-radius: 6px; font-size: 11px; font-weight: 700;">GT Plan</span>
            </div>
            <h3 style="font-size: 20px; font-weight: 800; margin-bottom: 8px;">Aktif</h3>
            <p style="font-size: 13px; color: var(--text2);">Sonraki ödeme: 15 Haz 2026</p>
          </div>
        </div>
      </section>

      <!-- ARAÇ VERİLERİM TAB -->
      <section id="arac-verilerim" class="dashboard-section">
        <div class="section-header">
          <h2 class="section-title">Araç Verilerim</h2>
          <p class="section-desc">BMW M4 Competition • 34 PRD 2026</p>
        </div>

<h3 style="font-size: 24px; font-weight: 800; margin: 40px 0 24px;">Preditech GT Verileri</h3>
<div class="bento-grid">
      <!-- Card 1: 0-100 Km/h -->
      <div class="bento-card bento-col-2 flip-card" style="min-height: 300px;">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="background: linear-gradient(135deg, #1b1c09 0%, #080803 100%); border: 1px solid rgba(232, 255, 0, 0.08);">
            <div class="bc-header"><i class="ph-fill ph-timer bc-icon" style="color: #e8ff00;"></i><span>Hızlanma Testi</span></div>
            <div class="bc-title">0-100 Km/h Testi</div>
            <div class="bc-value" style="color: #e8ff00; font-size: 40px;">3,87 <span class="bc-unit" style="color: #e8ff00;">s</span></div>
            <div class="bc-status-tag" style="background:rgba(232,255,0,0.1); color:#e8ff00; display:inline-block; max-width:max-content; margin-top:12px;"><i class="ph-fill ph-trophy"></i> Kişisel Rekor</div>
            <div class="bc-list" style="flex-direction:row; justify-content:space-between; margin-top:32px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.05);">
               <div><div style="font-size:11px;color:var(--text2);">Maks. G</div><div style="font-weight:700;font-size:16px;">1,6 G</div></div>
               <div><div style="font-size:11px;color:var(--text2);">Maks. Devir</div><div style="font-weight:700;font-size:16px;">6.200 RPM</div></div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-timer"></i> Hızlanma Testi</h4>
            <p>100Hz GNSS/GPS alıcısı ile 0-100 km/s hızlanma sürenizi milisaniye doğruluğunda ölçer. Kişisel rekorlarınızı ve motor performansınızı kaydeder.</p>
          </div>
        </div>
      </div>

      <!-- Card 2: Pist Adı & Harita -->
      <div class="bento-card flip-card" style="min-height: 300px;">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-flag-checkered bc-icon"></i><span>En Yakın Pist</span></div>
            <div class="bc-title">İstanbulPark Pisti</div>
            <div style="color:var(--text2); font-size:13px;">5,34 km - F1 Pisti</div>
            <img src="/assets/images/general/f1pist.png" alt="İstanbulPark Pisti" class="bc-track-map" style="width: 100%; height: auto; max-height: 160px; object-fit: contain; margin-top: 16px; filter: drop-shadow(0 0 10px rgba(249, 212, 35, 0.25));">
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-flag-checkered"></i> İstanbulPark Pisti</h4>
            <p>5.338 km uzunluğu, 14 teknik virajı ve meşhur 8. virajı ile dünyanın en heyecan verici ve zorlu Formula 1 yarış pistlerinden biridir.</p>
          </div>
        </div>
      </div>

      <!-- Card 3: G-Force (Redesigned Radar) -->
      <div class="bento-card flip-card" style="background: #080808; border-color: rgba(255,255,255,0.03); min-height: 300px; padding: 0;">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="display: flex; justify-content: center; align-items: center;">
            <div class="gforce-radar-container" style="transform: scale(1.3);">
          <div class="gforce-radar">
            <!-- Radar rings -->
            <div class="radar-ring outer"></div>
            <div class="radar-ring mid"></div>
            <div class="radar-ring inner"></div>
            <!-- Axis lines -->
            <div class="gforce-radar-axis-h"></div>
            <div class="gforce-radar-axis-v"></div>
            <!-- Axis text -->
            <div class="radar-axis-text g1">1G</div>
            <div class="radar-axis-text g2">2G</div>
            <!-- Curved Axis text -->
            <svg width="150" height="150" style="position:absolute; top:0; left:0; pointer-events:none; overflow:visible; z-index:3;">
              <defs>
                <path id="arcTop2" d="M -5,75 A 80,80 0 0,1 155,75" />
                <path id="arcBottom2" d="M -5,75 A 80,80 0 0,0 155,75" />
                <path id="arcLeft2" d="M 75,155 A 80,80 0 0,1 75,-5" />
                <path id="arcRight2" d="M 75,155 A 80,80 0 0,0 75,-5" />
              </defs>
              <text fill="rgba(255,255,255,0.35)" font-size="9" font-family="'Inter', sans-serif" font-weight="600" letter-spacing="2" text-anchor="middle">
                <textPath href="#arcTop2" startOffset="50%">YAVAŞLAMA</textPath>
                <textPath href="#arcBottom2" startOffset="50%">HIZLANMA</textPath>
                <textPath href="#arcLeft2" startOffset="50%">SAĞA DÖNÜŞ</textPath>
                <textPath href="#arcRight2" startOffset="50%">SOLA DÖNÜŞ</textPath>
              </text>
            </svg>
            <!-- Canvas for trailing yellow line -->
            <canvas class="gforce-radar-trail" width="150" height="150" style="position:absolute; top:0; left:0; pointer-events:none; z-index:4;"></canvas>
            <div class="gforce-radar-dot"></div>
            <!-- Center dynamic G value -->
            <div class="gforce-radar-value">0.00 G</div>
          </div>
        </div>
          </div>
          <div class="flip-card-back" style="display: flex; flex-direction: column; justify-content: center;">
            <h4><i class="ph-fill ph-compass"></i> G-Kuvveti Ölçer</h4>
            <p>100Hz ivmeölçer verileri ile aracınızın maruz kaldığı tüm yanal ve doğrusal ivmeleri gerçek zamanlı olarak izler.</p>
          </div>
        </div>
      </div>

      <!-- Card 4: Canlı Yarış (Redesigned) -->
      <div class="bento-card bento-col-2 bc-race-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
            <div class="bc-race-header">
          <i class="ph-fill ph-users"></i>
          <span>Canlı Yarış</span>
        </div>
        <div class="bc-race-title">Rakip Süresi (Ali Turgut)</div>
        
        <!-- Thick progress bar with competitor's face inside it -->
        <div class="bc-race-bar-container">
          <div class="bc-race-bar-fill" style="width: 65%;">
            <div class="bc-race-avatar">
              <img src="https://i.pravatar.cc/150?img=33" alt="Ali Turgut">
            </div>
          </div>
        </div>
        
        <div class="bc-race-stats">
          <div class="bc-race-stat-col">
            <span class="bc-race-stat-label">Senin Süren</span>
            <span class="bc-race-stat-val green">4,01s</span>
          </div>
          <div class="bc-race-stat-col right">
            <span class="bc-race-stat-label">Rakiple Fark</span>
            <span class="bc-race-stat-val red">-0,59s</span>
          </div>
        </div>
          </div>
          <div class="flip-card-back" style="display: flex; flex-direction: column; justify-content: center;">
            <h4><i class="ph-fill ph-users"></i> Canlı Yarış</h4>
            <p>Seçtiğiniz hayalet rakiplerin sürelerine karşı anlık ilerlemenizi ve milisaniyelik farkları kesintisiz gösterir.</p>
          </div>
        </div>
      </div>

      <!-- Card 5: Pist Hava Durumu -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-cloud-sun bc-icon"></i><span>Pist Şartları</span></div>
            <div class="bc-title">Pist Hava Durumu</div>
            <table class="bc-table" style="margin-top:4px;">
              <tr><td style="padding: 10px 0;"><i class="ph-fill ph-drop" style="color:#3388FF;"></i> Nem</td><td style="padding: 10px 0;">% 70</td></tr>
              <tr><td style="padding: 10px 0;"><i class="ph-fill ph-wind" style="color:#00FF88;"></i> Rüzgar</td><td style="padding: 10px 0;">15 km/h</td></tr>
              <tr><td style="padding: 10px 0;"><i class="ph-fill ph-thermometer" style="color:var(--accent);"></i> Sıcaklık</td><td style="padding: 10px 0;">25 °C</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: none;"><i class="ph-fill ph-mountains" style="color:#aaa;"></i> Rakım</td><td style="padding: 10px 0; border-bottom: none;">130 m</td></tr>
            </table>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-cloud-sun"></i> Pist Şartları</h4>
            <p>Tur zamanlarını doğrudan etkileyen pist sıcaklığı, rüzgar hızı ve hava nem oranını anlık ölçerek ideal sürüş koşullarını hesaplar.</p>
          </div>
        </div>
      </div>

      <!-- Card 6: Liderlik Tablosu -->
      <div class="bento-card flip-card" style="min-height: 280px;">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-ranking bc-icon"></i><span>Sosyal</span></div>
            <div class="bc-title">Liderlik Tablosu</div>
            <div class="bc-list">
              <div class="bc-list-item">
                 <div class="bc-list-item-left"><div class="bc-avatar"><img src="https://i.pravatar.cc/150?img=11"></div> Siz</div>
                 <div class="bc-list-item-right" style="color:var(--accent);font-weight:700;">1.</div>
              </div>
              <div class="bc-list-item">
                 <div class="bc-list-item-left"><div class="bc-avatar"><img src="https://i.pravatar.cc/150?img=33"></div> Ali T.</div>
                 <div class="bc-list-item-right">2.</div>
              </div>
              <div class="bc-list-item">
                 <div class="bc-list-item-left"><div class="bc-avatar"><img src="https://i.pravatar.cc/150?img=15"></div> Emre B.</div>
                 <div class="bc-list-item-right">3.</div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-ranking"></i> Liderlik Tablosu</h4>
            <p>Aynı pistte süre ölçümü yapan diğer Preditech kullanıcıları arasındaki sıralamanızı anlık olarak günceller ve rekabeti canlı tutar.</p>
          </div>
        </div>
      </div>
      <!-- Card 7: Canlı Hibrit Füzyon Dalga Formu (Yapay Zeka Ağları) -->
      <div class="bento-card bento-col-2 flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-activity bc-icon"></i><span>Hibrit Veri Füzyonu</span></div>
            <div class="bc-title">NVH Grafiği</div>
            <div class="bc-graph" style="overflow: hidden;">
               <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none" style="overflow: visible;">
                <g class="infinite-fusion-wave">
                  <!-- OBD Dalga -->
                  <path d="M0,20 Q2,15 4,20 T10,20 Q12,25 14,20 T20,20 Q22,12 24,20 T30,20 Q32,28 34,20 T40,20 Q42,16 44,20 T50,20 Q52,24 54,20 T60,20 Q62,10 64,20 T70,20 Q72,28 74,20 T80,20 Q82,15 84,20 T90,20 Q92,25 94,20 T100,20 Q102,15 104,20 T110,20 Q112,25 114,20 T120,20 Q122,12 124,20 T130,20 Q132,28 134,20 T140,20 Q142,16 144,20 T150,20 Q152,24 154,20 T160,20 Q162,10 164,20 T170,20 Q172,28 174,20 T180,20 Q182,15 184,20 T190,20 Q192,25 194,20 T200,20" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.6"/>
                  <!-- NVH Dalga -->
                  <path d="M0,20 Q2,28 5,20 T10,20 Q12,12 15,20 T20,20 Q22,25 25,20 T30,20 Q32,15 35,20 T40,20 Q42,28 45,20 T50,20 Q52,10 55,20 T60,20 Q62,24 65,20 T70,20 Q72,16 75,20 T80,20 Q82,28 85,20 T90,20 Q92,12 95,20 T100,20 Q102,28 105,20 T110,20 Q112,12 115,20 T120,20 Q122,25 125,20 T130,20 Q132,15 135,20 T140,20 Q142,28 145,20 T150,20 Q152,10 155,20 T160,20 Q162,24 165,20 T170,20 Q172,16 175,20 T180,20 Q182,28 185,20 T190,20 Q192,12 195,20 T200,20" fill="none" stroke="var(--accent)" stroke-width="0.8"/>
                </g>
              </svg>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-activity"></i> Hibrit Veri Füzyonu</h4>
            <p>100Hz frekansındaki CAN-bus ve ivmeölçer verilerini birleştirerek motorunuzdaki ve yürüyen aksamdaki anomalileri analiz eder.</p>
          </div>
        </div>
      </div>

      <!-- Card 7b: P0106 Hata Kodu (Alert) -->
      <div class="bento-card bento-col-2 bento-row-2 bento-alert" style="justify-content: center; text-align: center; padding: 24px; background: radial-gradient(circle at center, #1A1A1A 0%, #060606 100%); border: 1px solid rgba(255,68,68,0.15);">
        <i class="ph-fill ph-warning bc-icon" style="color: #FF4444; font-size: 48px; margin: 0 auto 16px auto;"></i>
        <div class="bc-title" style="color:#FF4444; letter-spacing:2px; font-weight:800; text-align: center; font-size: 14px;">KRİTİK SEVİYE</div>
        <div class="bc-value" style="text-align: center; font-size: 64px; font-weight: 900; color: #FF4444; margin: 8px 0;">P0106</div>
        <div style="color:var(--accent); font-weight:800; margin-top:16px; font-size: 16px; letter-spacing:1px; text-align: center;">MOTOR YÖNETİMİ</div>
        <p style="text-align: center; color: var(--text2); margin-top: 8px; font-size: 14px;">Emme Manifoldu Mutlak Basınç Performans Sorunu</p>
        <div style="display: flex; gap: 8px; justify-content: center; margin-top: 24px; flex-wrap: wrap;">
          <div style="background: rgba(255,68,68,0.1); border: 1px solid rgba(255,68,68,0.2); padding: 8px 12px; border-radius: 8px; font-size: 11px; color: #FF4444; font-weight: 600;">Kablolama Temassızlığı</div>
          <div style="background: rgba(255,68,68,0.1); border: 1px solid rgba(255,68,68,0.2); padding: 8px 12px; border-radius: 8px; font-size: 11px; color: #FF4444; font-weight: 600;">Vakum Kaçağı</div>
          <div style="background: rgba(255,68,68,0.1); border: 1px solid rgba(255,68,68,0.2); padding: 8px 12px; border-radius: 8px; font-size: 11px; color: #FF4444; font-weight: 600;">Arızalı MAP Sensörü</div>
        </div>
      </div>

      <!-- Card 7c: Buji Sağlığı (from PRO) -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front premium-status-card">
            <div class="bc-premium-row">
              <div class="bc-premium-icon"><i class="ph-fill ph-lightning" style="color: #00ff88;"></i></div>
              <div class="bc-premium-info">
                <div class="bc-premium-title">Buji Sağlığı</div>
                <div class="bc-premium-val">15 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">% Yıpranma</span></div>
                <div class="bc-premium-bar">
                  <div class="bc-premium-bar-fill" style="width: 15%; background: #00ff88; box-shadow: 0 0 8px #00ff88;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-lightning"></i> Buji Sağlığı</h4>
            <p>Ateşleme sistemi verimliliğini ölçerek bujilerinizin ne kadar yıprandığını gösterir ve olası güç kayıplarını engeller.</p>
          </div>
        </div>
      </div>

      <!-- Card 7d: Şanzıman Sağlığı (from PRO) -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front premium-status-card">
            <div class="bc-premium-row">
              <div class="bc-premium-icon"><i class="ph-fill ph-gear" style="color: #F9D423;"></i></div>
              <div class="bc-premium-info">
                <div class="bc-premium-title">Şanzıman Sağlığı</div>
                <div class="bc-premium-val">42 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">% Yıpranma</span></div>
                <div class="bc-premium-bar">
                  <div class="bc-premium-bar-fill" style="width: 42%; background: #F9D423; box-shadow: 0 0 8px #F9D423;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-gear"></i> Şanzıman Sağlığı</h4>
            <p>Şanzıman devir değişimlerindeki mekanik vuruntuları analiz ederek kavrama ömrünüzü tahmin eder.</p>
          </div>
        </div>
      </div>

    </div>

<h3 style="font-size: 24px; font-weight: 800; margin: 40px 0 24px;">Preditech PRO Verileri</h3>
<div class="bento-grid">
      <!-- Card 1: Araç Sağlık Skoru -->
      <div class="bento-card bento-col-2 flip-card" style="min-height: 240px;">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="background: linear-gradient(135deg, #0d1611 0%, #050806 100%); border: 1px solid rgba(0, 255, 136, 0.08);">
            <div class="bc-header"><i class="ph-fill ph-brain bc-icon" style="color: #00FF88;"></i><span>Predicto AI</span></div>
            <div class="bc-title">Motor Sağlık Skoru</div>
            <div class="bc-value" style="color: #00FF88;">98.5 <span class="bc-unit" style="color: #00FF88;">%</span></div>
            <div class="bc-progress-bg" style="background: rgba(255,255,255,0.04);"><div class="bc-progress-fill" style="width: 98.5%; background: #00FF88; box-shadow: 0 0 10px #00FF88;"></div></div>
            <div style="text-align:right; font-size:12px; color:rgba(0, 255, 136, 0.6); margin-top:8px; font-family:monospace; font-weight: 700;">STABİL</div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-brain"></i> Motor Sağlık Skoru</h4>
            <p>OBD parametreleri ile 6 eksenli mekanik hareketlerin yapay zeka ile birleştirilmesi (Füzyon) sonucu hesaplanan, motorunuzun anlık genel kondisyon yüzdesidir.</p>
          </div>
        </div>
      </div>

      <!-- Card 2: NVH Titreşim Spektrum -->
      <div class="bento-card bento-col-2 flip-card" style="min-height: 240px;">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-wave-sine bc-icon"></i><span>NVH Füzyonu</span></div>
            <div class="bc-title">Titreşim Spektrum Analizi</div>
            <div class="bc-graph" style="background:transparent; border:none; padding:0; flex-direction:column; justify-content:center; gap:8px;">
               <div style="display:flex; justify-content:space-between; width:100%; font-size:12px; color:var(--text2);"><span>X Ekseni (Yanal)</span><span style="color:#00FF88">Normal</span></div>
               <div style="width:100%; height:4px; background:rgba(255,255,255,0.05); border-radius:2px;"><div style="width:20%; height:100%; background:#00FF88;"></div></div>
               <div style="display:flex; justify-content:space-between; width:100%; font-size:12px; color:var(--text2); margin-top:4px;"><span>Y Ekseni (Dikey)</span><span style="color:var(--accent)">Orta Şiddet</span></div>
               <div style="width:100%; height:4px; background:rgba(255,255,255,0.05); border-radius:2px;"><div style="width:55%; height:100%; background:var(--accent);"></div></div>
               <div style="display:flex; justify-content:space-between; width:100%; font-size:12px; color:var(--text2); margin-top:4px;"><span>Z Ekseni (İleri)</span><span style="color:#00FF88">Normal</span></div>
               <div style="width:100%; height:4px; background:rgba(255,255,255,0.05); border-radius:2px;"><div style="width:15%; height:100%; background:#00FF88;"></div></div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-wave-sine"></i> NVH Spektrumu</h4>
            <p>Dahili 6 eksenli IMU sensörü ile motorun 3 boyutlu mekanik titreşim dalgalarını ölçer. Standart dışı rezonansları izleyerek mekanik aşınmaları tespit eder.</p>
          </div>
        </div>
      </div>

      <!-- Card 3: Kritik Arıza Uyarısı -->
      <div class="bento-card flip-card bento-col-2 bento-row-2">
        <div class="flip-card-inner">
          <div class="flip-card-front bento-alert">
            <i class="ph-fill ph-warning bc-icon"></i>
            <div class="bc-title" style="color:#FF4444; letter-spacing:2px; font-weight:800;">KRİTİK UYARI</div>
            <div class="bc-value">P0106</div>
            <div style="color:var(--text); font-weight:700; margin-top:12px;">Emme Manifoldu Mutlak Basınç Sorunu</div>
            <div class="bc-status-tag" style="background:rgba(255,68,68,0.2); color:#FF4444;">Yapay Zeka Teyitli Arıza</div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-warning-circle"></i> OBD-II Kodları</h4>
            <p>Araç bilgisayarından (ECU) okunan kritik hata kodlarını saniyeler içinde çözümler ve anında uyarır.</p>
          </div>
        </div>
      </div>

      <!-- Card 4: Erken Uyarı Tahmini -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front premium-status-card">
            <div class="bc-premium-row">
              <div class="bc-premium-icon"><i class="ph-fill ph-clock-countdown" style="color: #00ff88;"></i></div>
              <div class="bc-premium-info">
                <div class="bc-premium-title">Ateşleme Bobini</div>
                <div class="bc-premium-val">12 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">% Yıpranma</span></div>
                <div class="bc-premium-bar">
                  <div class="bc-premium-bar-fill" style="width: 12%; background: #00ff88; box-shadow: 0 0 8px #00ff88;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-clock-countdown"></i> Ateşleme Bobini</h4>
            <p>Bujilerin ateşleme rezonans dalgalarını yüksek frekansta analiz eder. Mikro gecikmeleri ölçerek ateşleme bobininin tahmini kalan ömrünü hesaplar.</p>
          </div>
        </div>
      </div>

      <!-- Card 4b: Buji Sağlığı -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front premium-status-card">
            <div class="bc-premium-row">
              <div class="bc-premium-icon"><i class="ph-fill ph-lightning" style="color: #00ff88;"></i></div>
              <div class="bc-premium-info">
                <div class="bc-premium-title">Buji Sağlığı</div>
                <div class="bc-premium-val">15 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">% Yıpranma</span></div>
                <div class="bc-premium-bar">
                  <div class="bc-premium-bar-fill" style="width: 15%; background: #00ff88; box-shadow: 0 0 8px #00ff88;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-lightning"></i> Buji Sağlığı</h4>
            <p>Ateşleme sistemi verimliliğini ölçerek bujilerinizin ne kadar yıprandığını gösterir ve olası güç kayıplarını engeller.</p>
          </div>
        </div>
      </div>

      <!-- Card 5: Bağlantı Durumu -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-bluetooth-connected bc-icon"></i><span>Bağlı Araç</span></div>
            <div class="bc-title">Preditech Pro Bağlı</div>
            <div class="bc-value" style="font-size:20px;">RX-8 (13B-MSP)</div>
            <div class="bc-status-tag online" style="margin-top: 16px;"><i class="ph-fill ph-circle"></i> 100Hz Veri Akışı</div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-bluetooth-connected"></i> Bağlantı Durumu</h4>
            <p>Preditech PRO donanımınızın yüksek bant genişlikli Bluetooth 5.0 üzerinden akıllı telefonunuza saniyede 100 veri paketiyle bağlı olduğunu gösterir.</p>
          </div>
        </div>
      </div>

      <!-- Card 5b: Şanzıman Sağlığı -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front premium-status-card">
            <div class="bc-premium-row">
              <div class="bc-premium-icon"><i class="ph-fill ph-gear" style="color: #F9D423;"></i></div>
              <div class="bc-premium-info">
                <div class="bc-premium-title">Şanzıman Sağlığı</div>
                <div class="bc-premium-val">42 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">% Yıpranma</span></div>
                <div class="bc-premium-bar">
                  <div class="bc-premium-bar-fill" style="width: 42%; background: #F9D423; box-shadow: 0 0 8px #F9D423;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-gear"></i> Şanzıman Sağlığı</h4>
            <p>Şanzıman devir değişimlerindeki mekanik vuruntuları analiz ederek kavrama ömrünüzü tahmin eder.</p>
          </div>
        </div>
      </div>

      <!-- Card 6: Motor Devri (Dial) -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-gauge bc-icon"></i><span>Anlık Telemetri</span></div>
            <div class="bc-title">Motor Devri</div>
            <div class="bc-value">3.521 <span class="bc-unit">RPM</span></div>
            <div style="margin-top:24px; color:var(--text2); font-size:13px; display:flex; gap:16px;">
               <span>Su: <strong style="color:var(--text)">85 °C</strong></span>
               <span>Yağ: <strong style="color:var(--text)">90 °C</strong></span>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-gauge"></i> Motor Devri</h4>
            <p>Dakikadaki motor devrini (RPM) ve ECU'dan çekilen motor soğutma suyu ve yağ sıcaklıklarını anlık telemetri olarak görüntüler.</p>
          </div>
        </div>
      </div>

      <!-- Card 8: G-Force (Redesigned Radar) -->
      <div class="bento-card flip-card" style="background: #080808; border-color: rgba(255,255,255,0.03); min-height: 240px; padding: 0;">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="display: flex; justify-content: center; align-items: center;">
            <div class="gforce-radar-container" style="transform: scale(1.3);">
          <div class="gforce-radar">
            <!-- Radar rings -->
            <div class="radar-ring outer"></div>
            <div class="radar-ring mid"></div>
            <div class="radar-ring inner"></div>
            <!-- Axis lines -->
            <div class="gforce-radar-axis-h"></div>
            <div class="gforce-radar-axis-v"></div>
            <!-- Axis text -->
            <div class="radar-axis-text g1">1G</div>
            <div class="radar-axis-text g2">2G</div>
            <!-- Curved Axis text -->
            <svg width="150" height="150" style="position:absolute; top:0; left:0; pointer-events:none; overflow:visible; z-index:3;">
              <defs>
                <path id="arcTop" d="M -5,75 A 80,80 0 0,1 155,75" />
                <path id="arcBottom" d="M -5,75 A 80,80 0 0,0 155,75" />
                <path id="arcLeft" d="M 75,155 A 80,80 0 0,1 75,-5" />
                <path id="arcRight" d="M 75,155 A 80,80 0 0,0 75,-5" />
              </defs>
              <text fill="rgba(255,255,255,0.35)" font-size="9" font-family="'Inter', sans-serif" font-weight="600" letter-spacing="2" text-anchor="middle">
                <textPath href="#arcTop" startOffset="50%">YAVAŞLAMA</textPath>
                <textPath href="#arcBottom" startOffset="50%">HIZLANMA</textPath>
                <textPath href="#arcLeft" startOffset="50%">SAĞA DÖNÜŞ</textPath>
                <textPath href="#arcRight" startOffset="50%">SOLA DÖNÜŞ</textPath>
              </text>
            </svg>
            <!-- Canvas for trailing yellow line -->
            <canvas class="gforce-radar-trail" width="150" height="150" style="position:absolute; top:0; left:0; pointer-events:none; z-index:4;"></canvas>
            <div class="gforce-radar-dot"></div>
            <!-- Center dynamic G value -->
            <div class="gforce-radar-value">0.00 G</div>
          </div>
        </div>
          </div>
          <div class="flip-card-back" style="display: flex; flex-direction: column; justify-content: center;">
            <h4><i class="ph-fill ph-compass"></i> G-Kuvveti Ölçer</h4>
            <p>100Hz ivmeölçer verileri ile aracınızın maruz kaldığı tüm yanal ve doğrusal ivmeleri gerçek zamanlı olarak izler.</p>
          </div>
        </div>
      </div>
      
      <!-- Card 7: Canlı Hibrit Füzyon Dalga Formu -->
      <div class="bento-card bento-col-2 flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-activity bc-icon"></i><span>Hibrit Veri Füzyonu</span></div>
            <div class="bc-title">NVH Grafiği</div>
            <div class="bc-graph" style="overflow: hidden;">
               <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none" style="overflow: visible;">
                <g class="infinite-fusion-wave">
                  <!-- OBD Dalga -->
                  <path d="M0,20 Q2,15 4,20 T10,20 Q12,25 14,20 T20,20 Q22,12 24,20 T30,20 Q32,28 34,20 T40,20 Q42,16 44,20 T50,20 Q52,24 54,20 T60,20 Q62,10 64,20 T70,20 Q72,28 74,20 T80,20 Q82,15 84,20 T90,20 Q92,25 94,20 T100,20 Q102,15 104,20 T110,20 Q112,25 114,20 T120,20 Q122,12 124,20 T130,20 Q132,28 134,20 T140,20 Q142,16 144,20 T150,20 Q152,24 154,20 T160,20 Q162,10 164,20 T170,20 Q172,28 174,20 T180,20 Q182,15 184,20 T190,20 Q192,25 194,20 T200,20" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.6"/>
                  <!-- NVH Dalga -->
                  <path d="M0,20 Q2,28 5,20 T10,20 Q12,12 15,20 T20,20 Q22,25 25,20 T30,20 Q32,15 35,20 T40,20 Q42,28 45,20 T50,20 Q52,10 55,20 T60,20 Q62,24 65,20 T70,20 Q72,16 75,20 T80,20 Q82,28 85,20 T90,20 Q92,12 95,20 T100,20 Q102,28 105,20 T110,20 Q112,12 115,20 T120,20 Q122,25 125,20 T130,20 Q132,15 135,20 T140,20 Q142,28 145,20 T150,20 Q152,10 155,20 T160,20 Q162,24 165,20 T170,20 Q172,16 175,20 T180,20 Q182,28 185,20 T190,20 Q192,12 195,20 T200,20" fill="none" stroke="var(--accent)" stroke-width="0.8"/>
                </g>
              </svg>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-activity"></i> Hibrit Veri Füzyonu</h4>
            <p>OBD sensör sinyalleri ile IMU rezonans dalgalarının yapay zeka tarafından hibrit veri füzyonu ile nasıl harmanlandığını gösteren yüksek yoğunluklu dalga grafiğidir.</p>
          </div>
        </div>
      </div>

    </div>

<h3 style="font-size: 24px; font-weight: 800; margin: 40px 0 24px;">Preditech GO Verileri</h3>
<div class="bento-grid">
      <!-- Card 1: ECO Mode -->
      <div class="bento-card bento-col-2 flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="background: linear-gradient(135deg, #0d1611 0%, #050806 100%); border: 1px solid rgba(0, 255, 136, 0.08);">
            <div class="bc-header"><i class="ph-fill ph-leaf bc-icon" style="color: #00FF88;"></i><span>Güncel Verimlilik</span></div>
            <div class="bc-title">Sürüş Modu</div>
            <div class="bc-value" style="color: #00FF88;">ECO <span class="bc-unit" style="color: #00FF88;">MODE</span></div>
            <div class="bc-progress-bg" style="background: rgba(255,255,255,0.04);"><div class="bc-progress-fill" style="width: 85%; background: #00FF88; box-shadow: 0 0 10px #00FF88;"></div></div>
            <div style="text-align:right; font-size:12px; color:rgba(0, 255, 136, 0.6); margin-top:8px; font-family:monospace; font-weight: 700;">AKTİF</div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-leaf"></i> Sürüş Modu</h4>
            <p>Yakıt verimliliğinizi anlık olarak analiz eder. Sürüş stilinizi çevre dostu (ECO) tüketim aralığında tutarak yakıt tasarrufunuzu maksimuma çıkarır.</p>
          </div>
        </div>
      </div>

      <!-- Card 2: Motor Sıcaklığı -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front premium-status-card">
            <div class="bc-premium-row">
              <div class="bc-premium-icon"><i class="ph-fill ph-battery-charging" style="color: #00ff88;"></i></div>
              <div class="bc-premium-info">
                <div class="bc-premium-title">Motor Sıcaklığı</div>
                <div class="bc-premium-val">85 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">°C</span></div>
                <div class="bc-premium-bar">
                  <div class="bc-premium-bar-fill" style="width: 75%; background: #00ff88; box-shadow: 0 0 8px #00ff88;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-battery-charging"></i> Motor Sıcaklığı</h4>
            <p>Motor soğutma sıvısının anlık sıcaklığını ölçer. İdeal çalışma aralığının korunmasını sağlayarak aşırı ısınma ve hararet riskini engeller.</p>
          </div>
        </div>
      </div>

      <!-- Card 3: Araba Marka / Profil -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-car-profile bc-icon"></i><span>Bağlı Araç</span></div>
            <div class="bc-title">Motor Kodu</div>
            <div class="bc-value" style="font-size:24px">1.6 T-GDI</div>
            <div class="bc-status-tag online" style="margin-top: 20px;">Go Bağlı</div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-car-profile"></i> Bağlı Araç</h4>
            <p>Preditech GO cihazınızın aracın OBD-II portuna takılı ve Bluetooth üzerinden uygulamanıza kesintisiz olarak bağlı olduğunu doğrular.</p>
          </div>
        </div>
      </div>

      <!-- Card 4: Kritik Arıza Uyarısı (Alert) -->
      <div class="bento-card bento-col-2 bento-alert">
        <i class="ph-fill ph-warning bc-icon"></i>
        <div class="bc-title" style="color:#FF4444; letter-spacing:2px; font-weight:800;">KRİTİK SEVİYE</div>
        <div class="bc-value">P0106</div>
        <div style="color:var(--accent); font-weight:700; margin-top:12px; letter-spacing:1px;">MOTOR YÖNETİMİ</div>
        <p>Emme Manifoldu Mutlak Basınç Performans Sorunu</p>
      </div>

      <!-- Card 5: Anlık Tüketim -->
      <div class="bento-card bento-col-2 flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bc-header"><i class="ph-fill ph-gas-pump bc-icon"></i><span>Optimizasyon</span></div>
            <div class="bc-title">Anlık Tüketim</div>
            <div class="bc-value">4.4 <span class="bc-unit">L/100km</span></div>
            <div class="bc-graph">
              <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path d="M0,35 Q10,32 20,34 T40,25 T60,28 T80,18 T100,12" fill="none" stroke="var(--accent)" stroke-width="0.8" stroke-linecap="round"/>
                <path d="M0,35 Q10,32 20,34 T40,25 T60,28 T80,18 T100,12 L100,40 L0,40 Z" fill="rgba(249,212,35,0.08)" />
              </svg>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-gas-pump"></i> Anlık Tüketim</h4>
            <p>ECU enjeksiyon sürelerinden hesaplanan, o anki anlık yakıt sarfiyatınızdır. Gaz pedalı tepkilerinizi ayarlamanıza imkan tanır.</p>
          </div>
        </div>
      </div>

      <!-- Card 6: Hız Grafiği -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="overflow: hidden; border-radius: 20px;">
            <div class="bc-header"><i class="ph-fill ph-gauge bc-icon"></i><span>Telemetri</span></div>
            <div class="bc-title">Hızınız</div>
            <div class="bc-value">110 <span class="bc-unit">km/h</span></div>
            
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-gauge"></i> Hızınız</h4>
            <p>Sürüş boyunca anlık hız değişimlerinizi yüksek sıklıklı ince çizgilerle göstererek hızlanma kararlılığınızı raporlar.</p>
          </div>
        </div>
      </div>

      <!-- Card 8: Akü Voltajı -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front premium-status-card" style="background: linear-gradient(135deg, #0f1316 0%, #050708 100%); border: 1px solid rgba(0, 191, 255, 0.08);">
            <div class="bc-premium-row">
              <div class="bc-premium-icon"><i class="ph-fill ph-lightning" style="color: #00bfff; filter: drop-shadow(0 0 8px rgba(0, 191, 255, 0.3));"></i></div>
              <div class="bc-premium-info">
                <div class="bc-premium-title">Akü Voltajı</div>
                <div class="bc-premium-val" style="color: #00bfff;">13.8 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">V</span></div>
                <div class="bc-premium-bar">
                  <div class="bc-premium-bar-fill" style="width: 86%; background: #00bfff; box-shadow: 0 0 8px #00bfff;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-lightning"></i> Akü Voltajı</h4>
            <p>Aracınızın alternatörünün ürettiği şarj voltajını anlık ölçer. Akünüzün ömrünü ve şarj dinamosunun sağlığını kontrol altında tutar.</p>
          </div>
        </div>
      </div>

      <!-- Card 8b: Buji Sağlığı -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front premium-status-card">
            <div class="bc-premium-row">
              <div class="bc-premium-icon"><i class="ph-fill ph-lightning" style="color: #00ff88;"></i></div>
              <div class="bc-premium-info">
                <div class="bc-premium-title">Buji Sağlığı</div>
                <div class="bc-premium-val">15 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">% Yıpranma</span></div>
                <div class="bc-premium-bar">
                  <div class="bc-premium-bar-fill" style="width: 15%; background: #00ff88; box-shadow: 0 0 8px #00ff88;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-lightning"></i> Buji Sağlığı</h4>
            <p>Ateşleme sistemi verimliliğini ölçerek bujilerinizin ne kadar yıprandığını gösterir ve olası güç kayıplarını engeller.</p>
          </div>
        </div>
      </div>

      <!-- Card 8c: Şanzıman Sağlığı -->
      <div class="bento-card flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front premium-status-card">
            <div class="bc-premium-row">
              <div class="bc-premium-icon"><i class="ph-fill ph-gear" style="color: #F9D423;"></i></div>
              <div class="bc-premium-info">
                <div class="bc-premium-title">Şanzıman Sağlığı</div>
                <div class="bc-premium-val">42 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">% Yıpranma</span></div>
                <div class="bc-premium-bar">
                  <div class="bc-premium-bar-fill" style="width: 42%; background: #F9D423; box-shadow: 0 0 8px #F9D423;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <h4><i class="ph-fill ph-gear"></i> Şanzıman Sağlığı</h4>
            <p>Şanzıman devir değişimlerindeki mekanik vuruntuları analiz ederek kavrama ömrünüzü tahmin eder.</p>
          </div>
        </div>
      </div>



    </div>
</section>

      <!-- CİHAZLARIM TAB -->
      <section id="cihazlarim" class="dashboard-section">
        <div class="section-header">
          <h2 class="section-title">Cihazlarım</h2>
          <p class="section-desc">Hesabınıza bağlı aktif donanımlar</p>
        </div>
        
        <div class="panel-card" style="display: flex; flex-direction: row; gap: 32px; align-items: center;">
          <img src="/assets/images/devices/GREG.png" class="device-large" alt="PRO">
          <div style="flex: 1;">
            <div style="display: inline-block; padding: 6px 12px; background: rgba(0, 255, 136, 0.1); color: #00FF88; border: 1px solid rgba(0, 255, 136, 0.2); border-radius: 20px; font-size: 11px; font-weight: 800; margin-bottom: 16px; letter-spacing: 1px;">AKTİF BAĞLANTI</div>
            <h3 style="font-size: 32px; font-weight: 900; margin-bottom: 8px;">Preditech PRO</h3>
            <p style="color: var(--text2); font-size: 15px; margin-bottom: 32px;">Seri No: PRD-PRO-8492-X</p>
            
            <div style="display: flex; gap: 16px;">
              <button class="action-btn btn-white" onclick="openModal('device-settings-modal')"><i class="ph-bold ph-sliders"></i> Cihaz Ayarları</button>
            </div>
          </div>
        </div>
      </section>

      <!-- ABONELİKLER TAB -->
      <section id="abonelikler" class="dashboard-section">
        <div class="section-header">
          <h2 class="section-title">Aboneliklerim</h2>
          <p class="section-desc">Yazılım ve AI servis paketleri</p>
        </div>
        <div class="panel-card" style="border-color: rgba(255, 215, 0, 0.3);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
              <div style="font-size: 12px; color: var(--accent); font-weight: 800; margin-bottom: 8px; letter-spacing: 1px;">PREDITECH AI + PRO YAZILIM</div>
              <h3 style="font-size: 24px; font-weight: 800; margin-bottom: 16px;">1 Yıllık Kurucu Aboneliği</h3>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 24px;">
                <div>
                  <div style="font-size: 12px; color: var(--text2); margin-bottom: 4px;">Satın Alma Tarihi</div>
                  <div style="font-size: 15px; font-weight: 600;">12 Mayıs 2026</div>
                </div>
                <div>
                  <div style="font-size: 12px; color: var(--text2); margin-bottom: 4px;">Yenilenme Tarihi</div>
                  <div style="font-size: 15px; font-weight: 600; color: #00FF88;">12 Mayıs 2027</div>
                </div>
                <div>
                  <div style="font-size: 12px; color: var(--text2); margin-bottom: 4px;">Fiyat (Yıllık)</div>
                  <div style="font-size: 15px; font-weight: 600;">1.500₺</div>
                </div>
              </div>
              
              <button class="action-btn" style="background: rgba(255,68,68,0.1); color: #FF4444; border: 1px solid rgba(255,68,68,0.3); margin-top: 32px;" onclick="openModal('cancel-sub-modal')">Aboneliği İptal Et</button>
            </div>
            <div style="font-size: 13px; font-weight: 800; color: #000; background: #00FF88; padding: 8px 16px; border-radius: 20px;">
              AKTİF
            </div>
          </div>
        </div>
      </section>

      <!-- SİPARİŞLER TAB -->
      <section id="siparisler" class="dashboard-section">
        <div class="section-header">
          <h2 class="section-title">Siparişlerim</h2>
          <p class="section-desc">Geçmiş satın alımlarınız</p>
        </div>
        <div class="panel-card clickable-card" onclick="window.location.href="/siparis-takip"" style="padding: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; gap: 24px; align-items: center;">
              <img src="/assets/images/devices/GREG.png" style="width: 60px;" alt="PRO">
              <div>
                <div style="font-size: 12px; color: var(--accent); font-weight: 800; margin-bottom: 4px;">#PRD-2026-8942</div>
                <div style="font-size: 18px; font-weight: 800; margin-bottom: 4px;">Preditech PRO (Kurucu Sürümü)</div>
                <div style="font-size: 13px; color: var(--text2);">12 Mayıs 2026</div>
              </div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 24px; font-weight: 900; color: var(--accent); margin-bottom: 8px;">12.500₺</div>
              <div style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: rgba(255,215,0,0.1); color: var(--accent); border-radius: 12px; font-size: 11px; font-weight: 700;">
                <i class="ph-bold ph-package"></i> SİPARİŞİ TAKİP ET
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- HESAP AYARLARI TAB -->
      <section id="hesap-ayarlari" class="dashboard-section">
        <div class="section-header">
          <h2 class="section-title">Hesap Ayarları</h2>
          <p class="section-desc">Kişisel bilgilerinizi ve tercihlerinizi yönetin</p>
        </div>
        
        <div class="settings-grid">
          <!-- Sol Kolon: Bilgiler -->
          <div class="panel-card">
            <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 32px;">Kişisel Bilgiler</h3>
            <div style="display: flex; align-items: center; gap: 24px; margin-bottom: 32px;">
              <div class="profile-avatar-large">
                <i class="ph-fill ph-user" style="font-size: 40px; color: var(--accent);"></i>
              </div>
              <div>
                <h4 style="font-size: 20px; font-weight: 800;">Noyan S.</h4>
                <p style="font-size: 13px; color: var(--text2);">noyan@ornek.com</p>
              </div>
            </div>
            
            <div class="form-group" style="margin-bottom: 20px;">
              <label style="display: block; font-size: 12px; color: var(--text2); margin-bottom: 8px; font-weight: 600;">Ad Soyad</label>
              <input type="text" class="sporty-input" value="Noyan S." style="width: 100%; background: #111; border: 1px solid rgba(255,255,255,0.1); padding: 12px; color: #fff; border-radius: 8px;">
            </div>
            
            <div class="form-group" style="margin-bottom: 20px;">
              <label style="display: block; font-size: 12px; color: var(--text2); margin-bottom: 8px; font-weight: 600;">E-posta Adresi</label>
              <input type="email" class="sporty-input" value="noyan@ornek.com" style="width: 100%; background: #111; border: 1px solid rgba(255,255,255,0.1); padding: 12px; color: #fff; border-radius: 8px;">
            </div>
            
            <button class="action-btn" style="margin-top: 16px; width: 100%; background: var(--accent); color: #000; border: none;">Değişiklikleri Kaydet</button>
          </div>
          
          <!-- Sağ Kolon: Tercihler -->
          <div class="panel-card">
            <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 32px;">Tercihler</h3>
            
            <div class="pref-row">
              <div>
                <div style="font-size: 14px; font-weight: 700; margin-bottom: 4px;">Push Bildirimleri</div>
                <div style="font-size: 12px; color: var(--text2);">Arıza ve risk uyarılarını anında al.</div>
              </div>
              <div class="pref-toggle active" onclick="this.classList.toggle('active')"></div>
            </div>
            
            <div class="pref-row">
              <div>
                <div style="font-size: 14px; font-weight: 700; margin-bottom: 4px;">Haftalık Raporlar</div>
                <div style="font-size: 12px; color: var(--text2);">Araç durumunu e-posta ile al.</div>
              </div>
              <div class="pref-toggle active" onclick="this.classList.toggle('active')"></div>
            </div>
            
            <div class="pref-row">
              <div>
                <div style="font-size: 14px; font-weight: 700; margin-bottom: 4px;">Koyu Tema</div>
                <div style="font-size: 12px; color: var(--text2);">Sistem genelinde karanlık görünüm.</div>
              </div>
              <div class="pref-toggle active" onclick="this.classList.toggle('active')"></div>
            </div>
            
            <div class="pref-row">
              <div>
                <div style="font-size: 14px; font-weight: 700; margin-bottom: 4px;">Konum Paylaşımı</div>
                <div style="font-size: 12px; color: var(--text2);">Uygulama arka planda iken konumu işle.</div>
              </div>
              <div class="pref-toggle" onclick="this.classList.toggle('active')"></div>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</div>

<!-- MODALS -->

<!-- Device Settings Modal -->
<div class="modal-overlay" id="device-settings-modal" onclick="if(event.target===this) closeModal('device-settings-modal')">
  <div class="modal-content">
    <button class="modal-close" onclick="closeModal('device-settings-modal')"><i class="ph ph-x"></i></button>
    <div style="text-align: center; margin-bottom: 32px;">
      <i class="ph-fill ph-sliders" style="font-size: 48px; color: var(--accent); margin-bottom: 16px;"></i>
      <h2 class="modal-title" style="margin-bottom: 8px;">Cihaz Ayarları</h2>
      <p class="modal-desc">Preditech PRO cihazınızı yapılandırın.</p>
    </div>
    
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div class="pref-row" style="background: rgba(255,255,255,0.02); padding: 16px; border-radius: 12px;">
        <div>
          <div style="font-size: 15px; font-weight: 700; margin-bottom: 4px;">Canlı Veri Aktarımı</div>
          <div style="font-size: 12px; color: var(--text2);">Saniyede 60 ping ile yüksek hızlı telemetri.</div>
        </div>
        <div class="pref-toggle active" onclick="this.classList.toggle('active')"></div>
      </div>
      
      <div class="pref-row" style="background: rgba(255,255,255,0.02); padding: 16px; border-radius: 12px;">
        <div>
          <div style="font-size: 15px; font-weight: 700; margin-bottom: 4px;">OBD-II Pasif Mod</div>
          <div style="font-size: 12px; color: var(--text2);">Sadece arıza kodlarını okur, aktif müdahale yapmaz.</div>
        </div>
        <div class="pref-toggle" onclick="this.classList.toggle('active')"></div>
      </div>
      
      <div style="height: 1px; background: rgba(255,255,255,0.05); margin: 8px 0;"></div>
      
      <button class="action-btn btn-blue" style="width: 100%; text-align: left; display: flex; justify-content: space-between; align-items: center; padding: 16px;">
        <span><i class="ph-bold ph-map-pin" style="margin-right: 8px;"></i> Son Konum</span>
        <i class="ph-bold ph-caret-right"></i>
      </button>
      
      <button class="action-btn btn-red" style="width: 100%; text-align: left; display: flex; justify-content: space-between; align-items: center; padding: 16px;" onclick="alert('Cihaz kilitlendi ve konum bilgisi emniyete aktarıldı.')">
        <span><i class="ph-bold ph-warning" style="margin-right: 8px;"></i> Kayıp Bildir</span>
        <i class="ph-bold ph-lock-key"></i>
      </button>
    </div>
  </div>
</div>

<!-- Cancel Subscription Modal -->
<div class="modal-overlay" id="cancel-sub-modal" onclick="if(event.target===this) closeModal('cancel-sub-modal')">
  <div class="modal-content" style="text-align: center;">
    <i class="ph-fill ph-warning-circle" style="font-size: 64px; color: var(--accent); margin-bottom: 24px;"></i>
    <h2 class="modal-title" style="margin-bottom: 16px;">Abonelik İptali</h2>
    <p class="modal-desc" style="margin-bottom: 32px;">Aboneliğinizi neden iptal etmek istiyorsunuz?</p>
    
    <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; text-align: left;">
      <label style="display: flex; align-items: center; gap: 12px; padding: 12px; background: rgba(255,255,255,0.02); border-radius: 8px; cursor: pointer;">
        <input type="radio" name="cancel_reason"> Aracımı sattım
      </label>
      <label style="display: flex; align-items: center; gap: 12px; padding: 12px; background: rgba(255,255,255,0.02); border-radius: 8px; cursor: pointer;">
        <input type="radio" name="cancel_reason"> Çok pahalı buluyorum
      </label>
      <label style="display: flex; align-items: center; gap: 12px; padding: 12px; background: rgba(255,255,255,0.02); border-radius: 8px; cursor: pointer;">
        <input type="radio" name="cancel_reason"> Kullanmıyorum
      </label>
    </div>
    
    <div style="background: rgba(255,215,0,0.1); border: 1px solid rgba(255,215,0,0.3); padding: 16px; border-radius: 12px; margin-bottom: 32px;">
      <p style="font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 8px;">Emin misiniz?</p>
      <p style="font-size: 13px; color: var(--text2);">Eğer ayrılmazsanız, bir sonraki yıl aboneliğinizi <strong>%10 indirimli</strong> olarak devam ettireceksiniz. Bu teklif sadece şu an için geçerlidir.</p>
    </div>
    
    <div style="display: flex; gap: 16px;">
      <button class="action-btn" style="flex: 1; background: var(--accent); color: #000; border: none;" onclick="closeModal('cancel-sub-modal')">Vazgeç & İndirimi Al</button>
      <button class="action-btn" style="flex: 1; background: transparent; border: 1px solid rgba(255,68,68,0.3); color: #FF4444;" onclick="closeModal('cancel-sub-modal'); alert('Aboneliğiniz iptal edildi.');">Yine de İptal Et</button>
    </div>
  </div>
</div>



` }} />
      
      <Script src="/js/profil.js" strategy="lazyOnload" />
    </>
  );
}
