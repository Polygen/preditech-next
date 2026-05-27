// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'filoprofiljs']) {
      window['init' + 'filoprofiljs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  .sidebar-link { display: flex; align-items: center; gap: 14px; padding: 14px 20px; border-radius: 12px; color: var(--text2); font-weight: 600; text-decoration: none; transition: all 0.2s ease; cursor: pointer; font-size: 14px; }
  .sidebar-link:hover { background: rgba(255,255,255,0.03); color: #fff; }
  .sidebar-link.active { background: rgba(255,215,0,0.1); color: var(--accent); border-left: 3px solid var(--accent); }
  .sidebar-link i { font-size: 20px; }

  .map-fullscreen-active, .panel-fullscreen {
    position: fixed !important; top: 0 !important; left: 0 !important;
    width: 100vw !important; height: 100vh !important; z-index: 9999 !important;
    background: #0a0a0a !important; padding: 32px !important;
    box-sizing: border-box !important; border-radius: 0 !important; overflow-y: auto !important;
  }
  .map-fullscreen-active .map-inner-container { height: calc(100vh - 100px) !important; }
  .map-fullscreen-active .map-vehicle-card { padding: 24px 20px !important; }
  .map-fullscreen-active .map-vehicle-card * { font-size: 16px !important; }
  .map-fullscreen-active .map-vehicle-card div[style*="font-size:10px"] { font-size: 14px !important; }
  .map-fullscreen-active .dark-scroll { width: 22% !important; min-width: 240px; }
  .map-fullscreen-active #map-detail-panel { width: 380px !important; padding: 24px !important; }
  .map-fullscreen-active #map-detail-panel * { font-size: 14px !important; }
  .map-fullscreen-active #map-detail-panel h4 { font-size: 22px !important; }
  .map-fullscreen-active #map-detail-panel h5 { font-size: 14px !important; }
  .map-fullscreen-active #map-detail-panel div[style*="font-size:9px"] { font-size: 13px !important; }
  .map-fullscreen-active #map-detail-panel div[style*="font-size:10px"] { font-size: 14px !important; }
  .map-fullscreen-active #map-detail-panel div[style*="font-size:11px"] { font-size: 14px !important; }
  .map-fullscreen-active #map-detail-panel div[style*="font-size:12px"] { font-size: 15px !important; }
  .map-fullscreen-active #map-detail-panel div[style*="font-size:13px"] { font-size: 18px !important; }
  .map-fullscreen-active #map-detail-panel span { font-size: 14px !important; }
  .map-fullscreen-active #map-detail-panel .btn { font-size: 13px !important; padding: 10px !important; }
  .map-fullscreen-active #md-carphoto { height: 160px !important; }
  .map-fullscreen-active h3 { font-size: 26px !important; }
  .panel-fullscreen h3 { font-size: 28px !important; }
  .panel-fullscreen .lb-entry { font-size: 18px !important; padding: 12px 0 !important; }
  .panel-fullscreen .lb-score { font-size: 16px !important; padding: 4px 12px !important; }
  .panel-fullscreen .insight-card { padding: 20px !important; }
  .panel-fullscreen .insight-card h4 { font-size: 16px !important; }
  .panel-fullscreen .insight-card p { font-size: 13px !important; }

  .dark-scroll::-webkit-scrollbar { width: 6px; }
  .dark-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); border-radius: 4px; }
  .dark-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
  .dark-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }

  .dark-select { background-color: #111 !important; color: #fff !important; }
  .dark-select option { background-color: #111 !important; color: #fff !important; }

  .fleet-modal-overlay {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0,0,0,0.85); backdrop-filter: blur(8px);
    z-index: 10000; display: none; align-items: center; justify-content: center;
  }
  .fleet-modal-overlay.active { display: flex; }

  .fleet-modal {
    background: #111; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px;
    padding: 32px; width: 90%; max-width: 600px; max-height: 80vh; overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0,0,0,0.6);
    animation: modalIn 0.25s ease;
  }
  .fleet-modal-lg { max-width: 800px; }
  @keyframes modalIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }

  .anomaly-card {
    padding: 12px 16px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
    border-radius: 10px; display: flex; align-items: center; gap: 16px; cursor: pointer; transition: background 0.2s;
  }
  .anomaly-card:hover { background: rgba(255,255,255,0.05); }
  .anomaly-card img { width: 64px; height: 40px; object-fit: cover; border-radius: 6px; }

  .kpi-card { cursor: pointer; transition: transform 0.15s, box-shadow 0.15s; }
  .kpi-card:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(255,215,0,0.1); }

  .violation-bar { cursor: pointer; transition: opacity 0.2s; }
  .violation-bar:hover { opacity: 0.8; }

  .fuel-toggle { display: flex; gap: 0; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; overflow: hidden; }
  .fuel-toggle-btn { padding: 6px 16px; font-size: 11px; font-weight: 700; cursor: pointer; transition: all 0.2s; background: transparent; border: none; color: var(--text2); }
  .fuel-toggle-btn.active { background: var(--accent); color: #000; }

  .driver-profile-tab { padding:8px 16px; font-size:12px; font-weight:700; cursor:pointer; border:none; background:transparent; color:var(--text2); border-bottom:2px solid transparent; transition:all 0.2s; }
  .driver-profile-tab.active { color:var(--accent); border-bottom-color:var(--accent); }
  .driver-profile-tab:hover { color:#fff; }
  .dp-tab-content { display:none; }
  .dp-tab-content.active { display:block; }
  
  .trip-row { display:flex; align-items:center; gap:16px; padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.03); font-size:13px; }
  .trip-row:last-child { border-bottom:none; }
  
  .dashcam-event { display:flex; align-items:center; gap:16px; padding:14px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; cursor:pointer; transition:all 0.2s; }
  .dashcam-event:hover { background:rgba(255,255,255,0.05); }
  
  .vehicle-filter-btn { padding:8px 16px; font-size:11px; font-weight:700; cursor:pointer; border:1px solid rgba(255,255,255,0.1); border-radius:20px; background:transparent; color:var(--text2); transition:all 0.2s; white-space:nowrap; }
  .vehicle-filter-btn.active { background:var(--accent); color:#000; border-color:var(--accent); }
  .vehicle-filter-btn:hover { border-color:var(--accent); color:var(--accent); }
  .vehicle-filter-btn.active:hover { color:#000; }
  
  .score-mini-bar { height:20px; border-radius:3px; transition:width 0.5s; }
  
  .driver-row { cursor:pointer; transition:background 0.2s; }
  .driver-row:hover { background:rgba(255,255,255,0.02); }
  .car-row { cursor:pointer; transition:background 0.2s; }
  .car-row:hover { background:rgba(255,255,255,0.02); }
  
  .fleet-modal-xl { max-width: 950px; }
  
  .dashcam-preview { background:rgba(0,0,0,0.5); border-radius:12px; border:1px solid rgba(255,255,255,0.05); overflow:hidden; position:relative; }
  .dashcam-preview .play-btn { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.4); cursor:pointer; transition:background 0.2s; }
  .dashcam-preview .play-btn:hover { background:rgba(0,0,0,0.2); }
` }} />
      <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Preditech — Kestirimci Bakım Platformu | OBD + IMU Hibrit Veri Füzyonu</title>
<meta name="description" content="Dünyanın ilk OBD + IMU hibrit veri füzyonu kestirimci bakım platformu. Arızayı beklemeyin, öngörün.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
  

<style>
  .sidebar-link { display: flex; align-items: center; gap: 14px; padding: 14px 20px; border-radius: 12px; color: var(--text2); font-weight: 600; text-decoration: none; transition: all 0.2s ease; cursor: pointer; font-size: 14px; }
  .sidebar-link:hover { background: rgba(255,255,255,0.03); color: #fff; }
  .sidebar-link.active { background: rgba(255,215,0,0.1); color: var(--accent); border-left: 3px solid var(--accent); }
  .sidebar-link i { font-size: 20px; }

  .map-fullscreen-active, .panel-fullscreen {
    position: fixed !important; top: 0 !important; left: 0 !important;
    width: 100vw !important; height: 100vh !important; z-index: 9999 !important;
    background: #0a0a0a !important; padding: 32px !important;
    box-sizing: border-box !important; border-radius: 0 !important; overflow-y: auto !important;
  }
  .map-fullscreen-active .map-inner-container { height: calc(100vh - 100px) !important; }
  .map-fullscreen-active .map-vehicle-card { padding: 24px 20px !important; }
  .map-fullscreen-active .map-vehicle-card * { font-size: 16px !important; }
  .map-fullscreen-active .map-vehicle-card div[style*="font-size:10px"] { font-size: 14px !important; }
  .map-fullscreen-active .dark-scroll { width: 22% !important; min-width: 240px; }
  .map-fullscreen-active #map-detail-panel { width: 380px !important; padding: 24px !important; }
  .map-fullscreen-active #map-detail-panel * { font-size: 14px !important; }
  .map-fullscreen-active #map-detail-panel h4 { font-size: 22px !important; }
  .map-fullscreen-active #map-detail-panel h5 { font-size: 14px !important; }
  .map-fullscreen-active #map-detail-panel div[style*="font-size:9px"] { font-size: 13px !important; }
  .map-fullscreen-active #map-detail-panel div[style*="font-size:10px"] { font-size: 14px !important; }
  .map-fullscreen-active #map-detail-panel div[style*="font-size:11px"] { font-size: 14px !important; }
  .map-fullscreen-active #map-detail-panel div[style*="font-size:12px"] { font-size: 15px !important; }
  .map-fullscreen-active #map-detail-panel div[style*="font-size:13px"] { font-size: 18px !important; }
  .map-fullscreen-active #map-detail-panel span { font-size: 14px !important; }
  .map-fullscreen-active #map-detail-panel .btn { font-size: 13px !important; padding: 10px !important; }
  .map-fullscreen-active #md-carphoto { height: 160px !important; }
  .map-fullscreen-active h3 { font-size: 26px !important; }
  .panel-fullscreen h3 { font-size: 28px !important; }
  .panel-fullscreen .lb-entry { font-size: 18px !important; padding: 12px 0 !important; }
  .panel-fullscreen .lb-score { font-size: 16px !important; padding: 4px 12px !important; }
  .panel-fullscreen .insight-card { padding: 20px !important; }
  .panel-fullscreen .insight-card h4 { font-size: 16px !important; }
  .panel-fullscreen .insight-card p { font-size: 13px !important; }

  .dark-scroll::-webkit-scrollbar { width: 6px; }
  .dark-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); border-radius: 4px; }
  .dark-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
  .dark-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }

  .dark-select { background-color: #111 !important; color: #fff !important; }
  .dark-select option { background-color: #111 !important; color: #fff !important; }

  .fleet-modal-overlay {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0,0,0,0.85); backdrop-filter: blur(8px);
    z-index: 10000; display: none; align-items: center; justify-content: center;
  }
  .fleet-modal-overlay.active { display: flex; }

  .fleet-modal {
    background: #111; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px;
    padding: 32px; width: 90%; max-width: 600px; max-height: 80vh; overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0,0,0,0.6);
    animation: modalIn 0.25s ease;
  }
  .fleet-modal-lg { max-width: 800px; }
  @keyframes modalIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }

  .anomaly-card {
    padding: 12px 16px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
    border-radius: 10px; display: flex; align-items: center; gap: 16px; cursor: pointer; transition: background 0.2s;
  }
  .anomaly-card:hover { background: rgba(255,255,255,0.05); }
  .anomaly-card img { width: 64px; height: 40px; object-fit: cover; border-radius: 6px; }

  .kpi-card { cursor: pointer; transition: transform 0.15s, box-shadow 0.15s; }
  .kpi-card:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(255,215,0,0.1); }

  .violation-bar { cursor: pointer; transition: opacity 0.2s; }
  .violation-bar:hover { opacity: 0.8; }

  .fuel-toggle { display: flex; gap: 0; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; overflow: hidden; }
  .fuel-toggle-btn { padding: 6px 16px; font-size: 11px; font-weight: 700; cursor: pointer; transition: all 0.2s; background: transparent; border: none; color: var(--text2); }
  .fuel-toggle-btn.active { background: var(--accent); color: #000; }

  .driver-profile-tab { padding:8px 16px; font-size:12px; font-weight:700; cursor:pointer; border:none; background:transparent; color:var(--text2); border-bottom:2px solid transparent; transition:all 0.2s; }
  .driver-profile-tab.active { color:var(--accent); border-bottom-color:var(--accent); }
  .driver-profile-tab:hover { color:#fff; }
  .dp-tab-content { display:none; }
  .dp-tab-content.active { display:block; }
  
  .trip-row { display:flex; align-items:center; gap:16px; padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.03); font-size:13px; }
  .trip-row:last-child { border-bottom:none; }
  
  .dashcam-event { display:flex; align-items:center; gap:16px; padding:14px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; cursor:pointer; transition:all 0.2s; }
  .dashcam-event:hover { background:rgba(255,255,255,0.05); }
  
  .vehicle-filter-btn { padding:8px 16px; font-size:11px; font-weight:700; cursor:pointer; border:1px solid rgba(255,255,255,0.1); border-radius:20px; background:transparent; color:var(--text2); transition:all 0.2s; white-space:nowrap; }
  .vehicle-filter-btn.active { background:var(--accent); color:#000; border-color:var(--accent); }
  .vehicle-filter-btn:hover { border-color:var(--accent); color:var(--accent); }
  .vehicle-filter-btn.active:hover { color:#000; }
  
  .score-mini-bar { height:20px; border-radius:3px; transition:width 0.5s; }
  
  .driver-row { cursor:pointer; transition:background 0.2s; }
  .driver-row:hover { background:rgba(255,255,255,0.02); }
  .car-row { cursor:pointer; transition:background 0.2s; }
  .car-row:hover { background:rgba(255,255,255,0.02); }
  
  .fleet-modal-xl { max-width: 950px; }
  
  .dashcam-preview { background:rgba(0,0,0,0.5); border-radius:12px; border:1px solid rgba(255,255,255,0.05); overflow:hidden; position:relative; }
  .dashcam-preview .play-btn { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.4); cursor:pointer; transition:background 0.2s; }
  .dashcam-preview .play-btn:hover { background:rgba(0,0,0,0.2); }
</style>
</head>
<body>
<!-- ALL MODALS -->

<!-- Notification Modal -->
<div id="fleetNotificationModal" class="fleet-modal-overlay">
  <div class="fleet-modal">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 24px;">
      <h3 style="font-size:18px; font-weight:800; display:flex; align-items:center; gap:8px;"><i class="ph-fill ph-paper-plane-tilt" style="color:var(--accent);"></i> Toplu Bildirim Gönder</h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:20px; color:var(--text2);" onclick="closeModal('fleetNotificationModal')"></i>
    </div>
    <div style="margin-bottom:16px;">
      <label style="display:block; font-size:12px; font-weight:700; color:var(--text2); margin-bottom:8px;">Bildirim Türü</label>
      <select class="dark-select" style="width:100%; padding:12px; border:1px solid rgba(255,255,255,0.1); border-radius:8px; outline:none; font-size:14px;">
        <option>Genel Bilgilendirme</option><option>Acil Durum (Kırmızı Alert)</option><option>Rota / Trafik Uyarısı</option>
      </select>
    </div>
    <div style="margin-bottom:24px;">
      <label style="display:block; font-size:12px; font-weight:700; color:var(--text2); margin-bottom:8px;">Mesajınız</label>
      <textarea id="fleetMessageInput" rows="4" placeholder="Tüm sürücü cihazlarına gönderilecek mesajı yazın..." style="width:100%; padding:12px; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.1); border-radius:8px; color:#fff; font-family:inherit; font-size:14px; outline:none; resize:vertical;"></textarea>
    </div>
    <button onclick="sendNotification()" class="btn btn-primary" style="width:100%; justify-content:center; padding:14px; font-size:14px; font-weight:800; color:#000;">Şimdi Gönder</button>
  </div>
</div>

<!-- Anomaly Detail Modals -->
<div id="anomalyPerfectModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-lg">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
      <h3 style="font-size:18px; font-weight:800; display:flex; align-items:center; gap:8px;"><i class="ph-fill ph-check-circle" style="color:#00FF88;"></i> Mükemmel Durumda (15 Araç)</h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:20px; color:var(--text2);" onclick="closeModal('anomalyPerfectModal')"></i>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div class="anomaly-card"><img src="/assets/images/general/car_egea.png"><div><div style="font-weight:700;">Fiat Egea</div><div style="font-size:11px; color:var(--text2);">34 OK 322 &middot; Sürücü: Hasan Öztürk (1223 saat)</div></div><div style="margin-left:auto;padding:4px 8px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:6px;font-size:10px;font-weight:700;">Sorunsuz</div></div>
      <div class="anomaly-card"><img src="/assets/images/general/car_egea.png"><div><div style="font-weight:700;">Fiat Egea</div><div style="font-size:11px; color:var(--text2);">34 OK 324 &middot; Sürücü: Erdem Cihan (850 saat)</div></div><div style="margin-left:auto;padding:4px 8px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:6px;font-size:10px;font-weight:700;">Sorunsuz</div></div>
      <div class="anomaly-card"><img src="/assets/images/general/car_egea.png"><div><div style="font-weight:700;">Fiat Egea</div><div style="font-size:11px; color:var(--text2);">34 OK 325 &middot; Sürücü: Deniz Dağlar (2100 saat)</div></div><div style="margin-left:auto;padding:4px 8px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:6px;font-size:10px;font-weight:700;">Sorunsuz</div></div>
      <div class="anomaly-card"><img src="/assets/images/general/car_corolla.png"><div><div style="font-weight:700;">Toyota Corolla</div><div style="font-size:11px; color:var(--text2);">34 OK 633 &middot; Sürücü: Veli Demir (112 saat)</div></div><div style="margin-left:auto;padding:4px 8px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:6px;font-size:10px;font-weight:700;">Sorunsuz</div></div>
      <div class="anomaly-card"><img src="/assets/images/general/car_megane.png"><div><div style="font-weight:700;">Renault Megane</div><div style="font-size:11px; color:var(--text2);">34 OK 512 &middot; Sürücü: Ali Yılmaz (430 saat)</div></div><div style="margin-left:auto;padding:4px 8px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:6px;font-size:10px;font-weight:700;">Sorunsuz</div></div>
    </div>
  </div>
</div>

<div id="anomalyWarnModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-lg">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
      <h3 style="font-size:18px; font-weight:800; display:flex; align-items:center; gap:8px;"><i class="ph-fill ph-warning" style="color:var(--accent);"></i> İlgilenilmesi Gereken (3 Araç)</h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:20px; color:var(--text2);" onclick="closeModal('anomalyWarnModal')"></i>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div class="anomaly-card"><img src="/assets/images/general/car_egea.png"><div><div style="font-weight:700;">Fiat Egea</div><div style="font-size:11px; color:var(--text2);">34 OK 762 &middot; Sürücü: Mehmet Kara (640 saat)</div><div style="font-size:10px; color:var(--accent); margin-top:4px;"><i class="ph-fill ph-warning"></i> Fren balatası yıpranması %80</div></div></div>
      <div class="anomaly-card"><img src="/assets/images/general/car_egea.png"><div><div style="font-weight:700;">Fiat Egea</div><div style="font-size:11px; color:var(--text2);">34 OK 321 &middot; Sürücü: Sinan Aslan (980 saat)</div><div style="font-size:10px; color:var(--accent); margin-top:4px;"><i class="ph-fill ph-warning"></i> Yağ basıncı düşük seyirde</div></div></div>
      <div class="anomaly-card"><img src="/assets/images/general/car_megane.png"><div><div style="font-weight:700;">Renault Megane</div><div style="font-size:11px; color:var(--text2);">34 OK 515 &middot; Sürücü: Can Yüce (320 saat)</div><div style="font-size:10px; color:var(--accent); margin-top:4px;"><i class="ph-fill ph-warning"></i> Arka lastik basıncı dengesiz</div></div></div>
    </div>
  </div>
</div>

<div id="anomalyCriticalModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-lg">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
      <h3 style="font-size:18px; font-weight:800; display:flex; align-items:center; gap:8px;"><i class="ph-fill ph-warning-circle" style="color:var(--danger);"></i> Kritik Seviye (1 Araç)</h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:20px; color:var(--text2);" onclick="closeModal('anomalyCriticalModal')"></i>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div class="anomaly-card" style="border-color:rgba(255,68,68,0.2);"><img src="/assets/images/general/car_clio.png"><div><div style="font-weight:700;">Renault Clio</div><div style="font-size:11px; color:var(--text2);">34 OK 323 &middot; Sürücü: Erdem Cihan (850 saat)</div><div style="font-size:10px; color:var(--danger); margin-top:4px;"><i class="ph-fill ph-warning-circle"></i> Eksantrik Mili Pozisyon Sensörü Hatası — Acil Servis</div></div></div>
    </div>
  </div>
</div>

<!-- KPI Detail Modals -->
<div id="kpiGiderModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-lg">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
      <h3 style="font-size:18px; font-weight:800;">Aylık Filo Gideri (Son 12 Ay)</h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:20px; color:var(--text2);" onclick="closeModal('kpiGiderModal')"></i>
    </div>
    <div style="height:300px;">
      <svg viewBox="0 0 600 250" style="width:100%; height:100%;">
        <line x1="50" y1="20" x2="50" y2="200" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
        <line x1="50" y1="200" x2="580" y2="200" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <text x="10" y="30" fill="var(--text2)" font-size="9">₺400K</text>
        <text x="10" y="110" fill="var(--text2)" font-size="9">₺300K</text>
        <text x="10" y="200" fill="var(--text2)" font-size="9">₺200K</text>
        <rect x="60" y="80" width="35" height="120" rx="4" fill="rgba(255,215,0,0.3)"/><text x="65" y="220" fill="var(--text2)" font-size="8">Haz</text>
        <rect x="105" y="60" width="35" height="140" rx="4" fill="rgba(255,215,0,0.3)"/><text x="110" y="220" fill="var(--text2)" font-size="8">Tem</text>
        <rect x="150" y="90" width="35" height="110" rx="4" fill="rgba(255,215,0,0.3)"/><text x="155" y="220" fill="var(--text2)" font-size="8">Ağu</text>
        <rect x="195" y="70" width="35" height="130" rx="4" fill="rgba(255,215,0,0.3)"/><text x="200" y="220" fill="var(--text2)" font-size="8">Eyl</text>
        <rect x="240" y="50" width="35" height="150" rx="4" fill="rgba(255,215,0,0.4)"/><text x="245" y="220" fill="var(--text2)" font-size="8">Eki</text>
        <rect x="285" y="85" width="35" height="115" rx="4" fill="rgba(255,215,0,0.3)"/><text x="290" y="220" fill="var(--text2)" font-size="8">Kas</text>
        <rect x="330" y="95" width="35" height="105" rx="4" fill="rgba(255,215,0,0.3)"/><text x="335" y="220" fill="var(--text2)" font-size="8">Ara</text>
        <rect x="375" y="75" width="35" height="125" rx="4" fill="rgba(255,215,0,0.3)"/><text x="380" y="220" fill="var(--text2)" font-size="8">Oca</text>
        <rect x="420" y="65" width="35" height="135" rx="4" fill="rgba(255,215,0,0.4)"/><text x="425" y="220" fill="var(--text2)" font-size="8">Şub</text>
        <rect x="465" y="100" width="35" height="100" rx="4" fill="rgba(255,215,0,0.3)"/><text x="470" y="220" fill="var(--text2)" font-size="8">Mar</text>
        <rect x="510" y="110" width="35" height="90" rx="4" fill="rgba(255,215,0,0.5)"/><text x="515" y="220" fill="var(--text2)" font-size="8">Nis</text>
        <rect x="555" y="105" width="35" height="95" rx="4" fill="var(--accent)"/><text x="555" y="220" fill="var(--accent)" font-size="8" font-weight="700">May</text>
      </svg>
    </div>
  </div>
</div>

<div id="kpiKurtarilanModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-lg">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
      <h3 style="font-size:18px; font-weight:800;">Kurtarılan Olası Arıza Maliyeti (Son 12 Ay)</h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:20px; color:var(--text2);" onclick="closeModal('kpiKurtarilanModal')"></i>
    </div>
    <div style="height:300px;">
      <svg viewBox="0 0 600 250" style="width:100%; height:100%;">
        <line x1="50" y1="200" x2="580" y2="200" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <text x="10" y="30" fill="var(--text2)" font-size="9">₺120K</text><text x="10" y="200" fill="var(--text2)" font-size="9">₺0</text>
        <path d="M60,180 L105,170 L150,160 L195,145 L240,140 L285,120 L330,115 L375,100 L420,90 L465,75 L510,60 L560,40" fill="none" stroke="#00FF88" stroke-width="3" stroke-linecap="round"/>
        <path d="M60,180 L105,170 L150,160 L195,145 L240,140 L285,120 L330,115 L375,100 L420,90 L465,75 L510,60 L560,40 L560,200 L60,200 Z" fill="url(#greenGrad)"/>
        <defs><linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#00FF88" stop-opacity="0.3"/><stop offset="100%" stop-color="#00FF88" stop-opacity="0"/></linearGradient></defs>
        <text x="60" y="220" fill="var(--text2)" font-size="8">Haz</text><text x="150" y="220" fill="var(--text2)" font-size="8">Ağu</text><text x="240" y="220" fill="var(--text2)" font-size="8">Eki</text><text x="330" y="220" fill="var(--text2)" font-size="8">Ara</text><text x="420" y="220" fill="var(--text2)" font-size="8">Şub</text><text x="510" y="220" fill="var(--text2)" font-size="8">Nis</text>
      </svg>
    </div>
    <p style="font-size:12px; color:var(--text2); margin-top:16px; text-align:center;">Preditech AI tahmin modeli sayesinde kurtarılan toplam maliyet sürekli artıyor.</p>
  </div>
</div>

<div id="kpiRolantiModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-lg">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
      <h3 style="font-size:18px; font-weight:800;">Ortalama Rölanti Süresi (Son 12 Ay)</h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:20px; color:var(--text2);" onclick="closeModal('kpiRolantiModal')"></i>
    </div>
    <div style="height:300px;">
      <svg viewBox="0 0 600 250" style="width:100%; height:100%;">
        <line x1="50" y1="200" x2="580" y2="200" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <text x="10" y="30" fill="var(--text2)" font-size="9">25 Dk</text><text x="10" y="200" fill="var(--text2)" font-size="9">0 Dk</text>
        <rect x="60" y="120" width="35" height="80" rx="4" fill="rgba(255,68,68,0.3)"/><text x="65" y="220" fill="var(--text2)" font-size="8">Haz</text>
        <rect x="105" y="130" width="35" height="70" rx="4" fill="rgba(255,68,68,0.3)"/><text x="110" y="220" fill="var(--text2)" font-size="8">Tem</text>
        <rect x="150" y="140" width="35" height="60" rx="4" fill="rgba(255,68,68,0.2)"/><text x="155" y="220" fill="var(--text2)" font-size="8">Ağu</text>
        <rect x="195" y="135" width="35" height="65" rx="4" fill="rgba(255,68,68,0.3)"/><text x="200" y="220" fill="var(--text2)" font-size="8">Eyl</text>
        <rect x="240" y="125" width="35" height="75" rx="4" fill="rgba(255,68,68,0.3)"/><text x="245" y="220" fill="var(--text2)" font-size="8">Eki</text>
        <rect x="285" y="145" width="35" height="55" rx="4" fill="rgba(255,68,68,0.2)"/><text x="290" y="220" fill="var(--text2)" font-size="8">Kas</text>
        <rect x="330" y="150" width="35" height="50" rx="4" fill="rgba(255,68,68,0.2)"/><text x="335" y="220" fill="var(--text2)" font-size="8">Ara</text>
        <rect x="375" y="155" width="35" height="45" rx="4" fill="rgba(255,68,68,0.2)"/><text x="380" y="220" fill="var(--text2)" font-size="8">Oca</text>
        <rect x="420" y="148" width="35" height="52" rx="4" fill="rgba(255,68,68,0.2)"/><text x="425" y="220" fill="var(--text2)" font-size="8">Şub</text>
        <rect x="465" y="155" width="35" height="45" rx="4" fill="rgba(255,68,68,0.2)"/><text x="470" y="220" fill="var(--text2)" font-size="8">Mar</text>
        <rect x="510" y="152" width="35" height="48" rx="4" fill="rgba(255,68,68,0.2)"/><text x="515" y="220" fill="var(--text2)" font-size="8">Nis</text>
        <rect x="555" y="148" width="35" height="52" rx="4" fill="var(--danger)"/><text x="555" y="220" fill="var(--danger)" font-size="8" font-weight="700">May</text>
      </svg>
    </div>
  </div>
</div>

<div id="kpiKritikModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-lg">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
      <h3 style="font-size:18px; font-weight:800; display:flex; align-items:center; gap:8px;"><i class="ph-fill ph-warning-circle" style="color:var(--danger);"></i> Aktif Kritik Uyarılar</h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:20px; color:var(--text2);" onclick="closeModal('kpiKritikModal')"></i>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div class="anomaly-card" style="border-color:rgba(255,68,68,0.2);"><img src="/assets/images/general/car_clio.png"><div><div style="font-weight:700;">Renault Clio — 34 OK 323</div><div style="font-size:11px; color:var(--danger);"><i class="ph-fill ph-warning-circle"></i> Eksantrik Mili Pozisyon Sensörü Hatası</div><div style="font-size:10px; color:var(--text2);">Son güncelleme: 5 dakika önce</div></div></div>
      <div class="anomaly-card" style="border-color:rgba(255,68,68,0.2);"><img src="/assets/images/general/car_egea.png"><div><div style="font-weight:700;">Fiat Egea — 34 OK 762</div><div style="font-size:11px; color:var(--danger);"><i class="ph-fill ph-warning-circle"></i> Fren Balatası Kritik (%3mm)</div><div style="font-size:10px; color:var(--text2);">Son güncelleme: 12 dakika önce</div></div></div>
      <div class="anomaly-card" style="border-color:rgba(255,68,68,0.2);"><img src="/assets/images/general/car_clio.png"><div><div style="font-weight:700;">Renault Clio — 34 OK 862</div><div style="font-size:11px; color:var(--danger);"><i class="ph-fill ph-warning-circle"></i> Motor Yağı Seviyesi Kritik</div><div style="font-size:10px; color:var(--text2);">Son güncelleme: 30 dakika önce</div></div></div>
    </div>
  </div>
</div>

<!-- Violation Drilldown Modal -->
<div id="violationModal" class="fleet-modal-overlay">
  <div class="fleet-modal">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
      <h3 id="violationModalTitle" style="font-size:18px; font-weight:800;">Ani Frenleme — En Çok Yapan Sürücüler</h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:20px; color:var(--text2);" onclick="closeModal('violationModal')"></i>
    </div>
    <div id="violationModalContent"></div>
  </div>
</div>

<!-- Mesai İhlal Modal -->
<div id="mesaiModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-lg">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
      <h3 style="font-size:18px; font-weight:800;">Mesai Dışı Araç Kullananlar</h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:20px; color:var(--text2);" onclick="closeModal('mesaiModal')"></i>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div class="anomaly-card"><div style="width:32px;height:32px;border-radius:50%;background:rgba(255,68,68,0.1);display:flex;align-items:center;justify-content:center;"><i class="ph-fill ph-moon" style="color:var(--danger);"></i></div><div><div style="font-weight:700;">Sinan Aktaş</div><div style="font-size:11px; color:var(--text2);">34 OK 323 — Hafta sonu 3 kez, toplam 4.2 saat</div></div></div>
      <div class="anomaly-card"><div style="width:32px;height:32px;border-radius:50%;background:rgba(255,68,68,0.1);display:flex;align-items:center;justify-content:center;"><i class="ph-fill ph-moon" style="color:var(--danger);"></i></div><div><div style="font-weight:700;">Deniz Dağlar</div><div style="font-size:11px; color:var(--text2);">34 OK 325 — Gece vardiyası dışı 1 kez, toplam 1.5 saat</div></div></div>
    </div>
  </div>
</div>


<!-- Proaktif Bakım Hub Modal -->
<div id="bakimHubModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-lg">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
      <h3 style="font-size:18px; font-weight:800; display:flex; align-items:center; gap:8px;">Proaktif Bakım Hub'ı <i class="ph-fill ph-sparkle" style="color:var(--accent);"></i></h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:20px; color:var(--text2);" onclick="closeModal('bakimHubModal')"></i>
    </div>
    <p style="font-size:12px; color:var(--text2); margin-bottom:24px;">Yapay zeka analizlerine dayalı filo optimizasyon tavsiyeleri.</p>
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div style="padding:16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:10px;">
        <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:14px; color:var(--danger); margin-bottom:8px;"><i class="ph-fill ph-engine"></i> Eksantrik Mili Hatası Sinyali</div>
        <p style="font-size:12px; color:var(--text2); line-height:1.6;">34 OK 323 plakalı araç son 2 gündür soğuk marşta gecikme (anomali) yaşıyor. Yolda kalmadan acil sensör/kayış kontrolü yapın.</p>
      </div>
      <div style="padding:16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:10px;">
        <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:14px; color:var(--accent); margin-bottom:8px;"><i class="ph-fill ph-arrows-left-right"></i> Akıllı Rota Rotasyonu Önerisi</div>
        <p style="font-size:12px; color:var(--text2); line-height:1.6;">34 OK 322 sürekli kısa rotada kullanılıyor (DPF tıkanma riski yüksek). Bu aracı uzun yola çıkan 34 OK 633 ile yer değiştirin.</p>
      </div>
      <div style="padding:16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:10px;">
        <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:14px; color:var(--accent); margin-bottom:8px;"><i class="ph-fill ph-car-profile"></i> Lastik Aşınması (G-Force Tahmini)</div>
        <p style="font-size:12px; color:var(--text2); line-height:1.6;">34 OK 512 aracında viraj giriş savrulma verileri %12 arttı. Ön lastik diş derinliğini kontrol ettirin.</p>
      </div>
      <div style="padding:16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:10px;">
        <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:14px; color:var(--accent); margin-bottom:8px;"><i class="ph-fill ph-thermometer-hot"></i> Aşırı Motor Sıcaklığı Trendi</div>
        <p style="font-size:12px; color:var(--text2); line-height:1.6;">34 OK 321 aracında son 1 haftadır motor sıcaklığı 98°C üzerinde seyir alıyor. Termostat ve antifriz seviyesi kontrolü önerilir.</p>
      </div>
    </div>
  </div>
</div>

<!-- Geofence Violations Modal -->
<div id="geofenceModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-lg">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
      <h3 style="font-size:18px; font-weight:800; display:flex; align-items:center; gap:8px;"><i class="ph-fill ph-map-pin-line" style="color:var(--danger);"></i> Bölge (Geofence) İhlalleri</h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:20px; color:var(--text2);" onclick="closeModal('geofenceModal')"></i>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div style="padding:16px; background:rgba(255,68,68,0.05); border:1px solid rgba(255,68,68,0.1); border-radius:10px;">
        <div style="display:flex; align-items:center; gap:8px; color:var(--danger); font-weight:700; font-size:13px; margin-bottom:6px;"><i class="ph-fill ph-map-pin-line"></i> İzinsiz Bölge Çıkışı</div>
        <p style="font-size:12px; color:var(--text2);">34 OK 325 plakalı araç "İstanbul İçi" tanımlı bölgeden çıkış yaptı. (Gebze yönü, 12 km)</p>
        <p style="font-size:10px; color:var(--text2); margin-top:4px;">26.05.2026, 14:32</p>
      </div>
      <div style="padding:16px; background:rgba(255,234,0,0.03); border:1px solid rgba(255,234,0,0.1); border-radius:10px;">
        <div style="display:flex; align-items:center; gap:8px; color:var(--accent); font-weight:700; font-size:13px; margin-bottom:6px;"><i class="ph-fill ph-clock"></i> Müşteri Noktasında Gecikme</div>
        <p style="font-size:12px; color:var(--text2);">34 OK 512 aracı tanımlı müşteri lokasyonunda 45 dakikadan uzun süredir beklemede.</p>
        <p style="font-size:10px; color:var(--text2); margin-top:4px;">26.05.2026, 10:15</p>
      </div>
    </div>
  </div>
</div>


<!-- DRIVER PROFILE MODAL -->
<div id="driverProfileModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-xl" style="max-height:90vh;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.05);">
      <div style="display:flex; align-items:center; gap:16px;">
        <div style="width:56px; height:56px; border-radius:50%; background:rgba(255,215,0,0.1); display:flex; align-items:center; justify-content:center;">
          <i class="ph-fill ph-user" style="font-size:28px; color:var(--accent);"></i>
        </div>
        <div>
          <h3 id="dp-name" style="font-size:20px; font-weight:800;">Hasan Öztürk</h3>
          <div style="display:flex; align-items:center; gap:12px; margin-top:4px;">
            <span id="dp-status" style="padding:3px 10px; background:rgba(0,255,136,0.1); color:#00FF88; border-radius:4px; font-size:10px; font-weight:700;">Aktif</span>
            <span id="dp-score" style="font-size:12px; color:var(--accent); font-weight:700;">Sürüş Puanı: 98</span>
            <span id="dp-hours" style="font-size:12px; color:var(--text2);">Toplam: 1223 saat</span>
          </div>
        </div>
      </div>
      <i class="ph ph-x" style="cursor:pointer; font-size:22px; color:var(--text2);" onclick="closeModal('driverProfileModal')"></i>
    </div>
    
    <!-- Profile Tabs -->
    <div style="display:flex; gap:4px; margin-bottom:24px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:0;">
      <button class="driver-profile-tab active" onclick="switchDPTab(event,'dp-genel')">Genel Bilgi</button>
      <button class="driver-profile-tab" onclick="switchDPTab(event,'dp-gecmis')">Sürüş Geçmişi</button>
      <button class="driver-profile-tab" onclick="switchDPTab(event,'dp-dashcam')">AI Dashcam</button>
      <button class="driver-profile-tab" onclick="switchDPTab(event,'dp-ihlaller')">İhlal Analizi</button>
      <button class="driver-profile-tab" onclick="switchDPTab(event,'dp-kaza')">Kaza Geçmişi</button>
    </div>
    
    <!-- GENEL BİLGİ -->
    <div id="dp-genel" class="dp-tab-content active">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px;">
        
        <!-- SOL SÜTUN -->
        <div style="display:flex; flex-direction:column; gap:24px;">
          <div>
            <h4 style="font-size:14px; font-weight:700; margin-bottom:16px; display:flex; align-items:center; gap:8px;"><i class="ph ph-identification-card" style="color:var(--accent);"></i> Kişisel Bilgiler</h4>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <div style="display:flex; justify-content:space-between; font-size:13px;"><span style="color:var(--text2);">Telefon:</span><span style="font-weight:600;" id="dp-phone">+90 532 111 22 33</span></div>
              <div style="display:flex; justify-content:space-between; font-size:13px;"><span style="color:var(--text2);">Ehliyet Sınıfı:</span><span style="font-weight:600;">B</span></div>
              <div style="display:flex; justify-content:space-between; font-size:13px;"><span style="color:var(--text2);">Başlangıç Tarihi:</span><span style="font-weight:600;">12.01.2024</span></div>
              <div style="display:flex; justify-content:space-between; font-size:13px;"><span style="color:var(--text2);">Atanmış Araç:</span><span id="dp-vehicle" style="font-weight:600; color:var(--accent);">Fiat Egea — 34 OK 322</span></div>
            </div>
          </div>
          
          <div>
            <h4 style="font-size:14px; font-weight:700; margin-bottom:16px; display:flex; align-items:center; gap:8px;"><i class="ph ph-car" style="color:var(--accent);"></i> Sürdüğü Araçlar</h4>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <div style="padding:12px 16px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; display:flex; align-items:center; gap:12px; cursor:pointer;" onclick="openModal('vehicleDetailModal')">
                <img src="/assets/images/general/car_egea.png" style="width:64px; height:40px; object-fit:cover; border-radius:4px;">
                <div><div style="font-weight:700; font-size:13px;">Fiat Egea</div><div style="font-size:10px; color:var(--text2);">34 OK 322 · 840 saat</div></div>
              </div>
              <div style="padding:12px 16px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; display:flex; align-items:center; gap:12px; cursor:pointer;" onclick="openModal('vehicleDetailModal')">
                <img src="/assets/images/general/car_clio.png" style="width:64px; height:40px; object-fit:cover; border-radius:4px;">
                <div><div style="font-weight:700; font-size:13px;">Renault Clio</div><div style="font-size:10px; color:var(--text2);">34 OK 323 · 383 saat</div></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- SAĞ SÜTUN -->
        <div style="display:flex; flex-direction:column; gap:24px; height:100%;">
          <div style="flex:1; display:flex; flex-direction:column;">
            <h4 style="font-size:14px; font-weight:700; margin-bottom:16px; display:flex; align-items:center; gap:8px;"><i class="ph ph-chart-bar" style="color:var(--accent);"></i> Son 7 Gün Sürüş Puanı</h4>
            <div style="display:flex; align-items:flex-end; gap:8px; flex:1;">
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; gap:4px; height:100%;">
                <div style="font-size:9px; font-weight:700;">96</div>
                <div class="score-mini-bar" style="width:100%; height:96%; background:rgba(255,215,0,0.4); border-radius:4px;"></div>
                <div style="font-size:9px; color:var(--text2);">Pzt</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; gap:4px; height:100%;">
                <div style="font-size:9px; font-weight:700;">92</div>
                <div class="score-mini-bar" style="width:100%; height:92%; background:rgba(255,215,0,0.4); border-radius:4px;"></div>
                <div style="font-size:9px; color:var(--text2);">Sal</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; gap:4px; height:100%;">
                <div style="font-size:9px; font-weight:700;">98</div>
                <div class="score-mini-bar" style="width:100%; height:98%; background:var(--accent); border-radius:4px;"></div>
                <div style="font-size:9px; color:var(--text2);">Çar</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; gap:4px; height:100%;">
                <div style="font-size:9px; font-weight:700;">94</div>
                <div class="score-mini-bar" style="width:100%; height:94%; background:rgba(255,215,0,0.4); border-radius:4px;"></div>
                <div style="font-size:9px; color:var(--text2);">Per</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; gap:4px; height:100%;">
                <div style="font-size:9px; font-weight:700;">97</div>
                <div class="score-mini-bar" style="width:100%; height:97%; background:rgba(255,215,0,0.5); border-radius:4px;"></div>
                <div style="font-size:9px; color:var(--text2);">Cum</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; gap:4px; height:100%;">
                <div style="font-size:9px; font-weight:700;">99</div>
                <div class="score-mini-bar" style="width:100%; height:99%; background:var(--accent); border-radius:4px;"></div>
                <div style="font-size:9px; color:var(--text2);">Cmt</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; gap:4px; height:100%;">
                <div style="font-size:9px; font-weight:700; color:var(--accent);">98</div>
                <div class="score-mini-bar" style="width:100%; height:98%; background:var(--accent); border-radius:4px;"></div>
                <div style="font-size:9px; color:var(--accent); font-weight:700;">Pzr</div>
              </div>
            </div>
          </div>
          
          <div style="flex:1; display:flex; flex-direction:column;">
            <h4 style="font-size:14px; font-weight:700; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center;">
              <span style="display:flex; align-items:center; gap:8px;"><i class="ph ph-gas-pump" style="color:var(--accent);"></i> Son 7 Gün Yakıt Tüketimi</span>
              <div style="display:flex; background:rgba(255,255,255,0.05); border-radius:6px; overflow:hidden;">
                <button style="padding:4px 8px; font-size:10px; border:none; background:var(--accent); color:#000; font-weight:700; cursor:pointer;">Litre</button>
                <button style="padding:4px 8px; font-size:10px; border:none; background:transparent; color:var(--text2); cursor:pointer;">TL (₺)</button>
              </div>
            </h4>
            <div style="display:flex; align-items:flex-end; gap:8px; flex:1;">
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; gap:4px; height:100%;">
                <div style="font-size:9px; font-weight:700; color:var(--text2);">4.2L</div>
                <div style="width:100%; height:65%; background:rgba(255,255,255,0.1); border-radius:4px;"></div>
                <div style="font-size:9px; color:var(--text2);">Pzt</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; gap:4px; height:100%;">
                <div style="font-size:9px; font-weight:700; color:var(--text2);">3.8L</div>
                <div style="width:100%; height:58%; background:rgba(255,255,255,0.1); border-radius:4px;"></div>
                <div style="font-size:9px; color:var(--text2);">Sal</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; gap:4px; height:100%;">
                <div style="font-size:9px; font-weight:700; color:var(--text2);">5.1L</div>
                <div style="width:100%; height:78%; background:rgba(255,255,255,0.1); border-radius:4px;"></div>
                <div style="font-size:9px; color:var(--text2);">Çar</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; gap:4px; height:100%;">
                <div style="font-size:9px; font-weight:700; color:var(--text2);">4.5L</div>
                <div style="width:100%; height:69%; background:rgba(255,255,255,0.1); border-radius:4px;"></div>
                <div style="font-size:9px; color:var(--text2);">Per</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; gap:4px; height:100%;">
                <div style="font-size:9px; font-weight:700; color:var(--text2);">4.0L</div>
                <div style="width:100%; height:61%; background:rgba(255,255,255,0.1); border-radius:4px;"></div>
                <div style="font-size:9px; color:var(--text2);">Cum</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; gap:4px; height:100%;">
                <div style="font-size:9px; font-weight:700; color:var(--text2);">6.2L</div>
                <div style="width:100%; height:95%; background:rgba(255,68,68,0.4); border-radius:4px;"></div>
                <div style="font-size:9px; color:var(--text2);">Cmt</div>
              </div>
              <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; gap:4px; height:100%;">
                <div style="font-size:9px; font-weight:700; color:var(--accent);">4.8L</div>
                <div style="width:100%; height:74%; background:var(--accent); border-radius:4px;"></div>
                <div style="font-size:9px; color:var(--accent); font-weight:700;">Pzr</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    
    <!-- SÜRÜŞ GEÇMİŞİ -->
    <div id="dp-gecmis" class="dp-tab-content">
      <h4 style="font-size:14px; font-weight:700; margin-bottom:16px;">Son 7 Günlük Sürüş Kayıtları</h4>
      <div class="dark-scroll" style="max-height:400px; overflow-y:auto;">
        <div class="trip-row" style="cursor:pointer;" onclick="openModal('tripDetailModal')">
          <div style="width:60px; text-align:center;"><div style="font-size:18px; font-weight:800; color:var(--accent);">26</div><div style="font-size:10px; color:var(--text2);">May</div></div>
          <div style="flex:1;"><div style="font-weight:700;">Arnavutköy → Maslak</div><div style="font-size:11px; color:var(--text2); margin-top:4px;">34 OK 322 · 08:12 - 09:45 · 42 km</div></div>
          <div style="text-align:right;"><div style="font-size:12px; font-weight:700;">Ort. 48 km/s</div><div style="font-size:10px; color:#00FF88; margin-top:2px;">Puan: 97</div></div>
        </div>
        <div class="trip-row" style="cursor:pointer;" onclick="openModal('tripDetailModal')">
          <div style="width:60px; text-align:center;"><div style="font-size:18px; font-weight:800; color:var(--accent);">26</div><div style="font-size:10px; color:var(--text2);">May</div></div>
          <div style="flex:1;"><div style="font-weight:700;">Maslak → Şişli</div><div style="font-size:11px; color:var(--text2); margin-top:4px;">34 OK 322 · 11:30 - 12:05 · 8 km</div></div>
          <div style="text-align:right;"><div style="font-size:12px; font-weight:700;">Ort. 22 km/s</div><div style="font-size:10px; color:#00FF88; margin-top:2px;">Puan: 99</div></div>
        </div>
        <div class="trip-row" style="cursor:pointer;" onclick="openModal('tripDetailModal')">
          <div style="width:60px; text-align:center;"><div style="font-size:18px; font-weight:800;">25</div><div style="font-size:10px; color:var(--text2);">May</div></div>
          <div style="flex:1;"><div style="font-weight:700;">Arnavutköy → Kadıköy</div><div style="font-size:11px; color:var(--text2); margin-top:4px;">34 OK 322 · 07:50 - 10:20 · 68 km</div></div>
          <div style="text-align:right;"><div style="font-size:12px; font-weight:700;">Ort. 38 km/s</div><div style="font-size:10px; color:var(--accent); margin-top:2px;">Puan: 91 ⚠</div></div>
        </div>
        <div class="trip-row" style="cursor:pointer;" onclick="openModal('tripDetailModal')">
          <div style="width:60px; text-align:center;"><div style="font-size:18px; font-weight:800;">25</div><div style="font-size:10px; color:var(--text2);">May</div></div>
          <div style="flex:1;"><div style="font-weight:700;">Kadıköy → Bebek</div><div style="font-size:11px; color:var(--text2); margin-top:4px;">34 OK 322 · 14:00 - 15:15 · 22 km</div></div>
          <div style="text-align:right;"><div style="font-size:12px; font-weight:700;">Ort. 30 km/s</div><div style="font-size:10px; color:#00FF88; margin-top:2px;">Puan: 96</div></div>
        </div>
        <div class="trip-row" style="cursor:pointer;" onclick="openModal('tripDetailModal')">
          <div style="width:60px; text-align:center;"><div style="font-size:18px; font-weight:800;">24</div><div style="font-size:10px; color:var(--text2);">May</div></div>
          <div style="flex:1;"><div style="font-weight:700;">Arnavutköy → Gebze</div><div style="font-size:11px; color:var(--text2); margin-top:4px;">34 OK 322 · 06:30 - 09:00 · 95 km</div></div>
          <div style="text-align:right;"><div style="font-size:12px; font-weight:700;">Ort. 55 km/s</div><div style="font-size:10px; color:#00FF88; margin-top:2px;">Puan: 94</div></div>
        </div>
        <div class="trip-row" style="cursor:pointer;" onclick="openModal('tripDetailModal')">
          <div style="width:60px; text-align:center;"><div style="font-size:18px; font-weight:800;">23</div><div style="font-size:10px; color:var(--text2);">May</div></div>
          <div style="flex:1;"><div style="font-weight:700;">Arnavutköy → Levent</div><div style="font-size:11px; color:var(--text2); margin-top:4px;">34 OK 322 · 08:00 - 09:10 · 35 km</div></div>
          <div style="text-align:right;"><div style="font-size:12px; font-weight:700;">Ort. 42 km/s</div><div style="font-size:10px; color:#00FF88; margin-top:2px;">Puan: 98</div></div>
        </div>
      </div>
    </div>
    
    <!-- AI DASHCAM (Viewtron VMS Tarzı) -->
    <div id="dp-dashcam" class="dp-tab-content">
      <div style="display:flex; height:600px; gap:16px;">
        
        <!-- SOL MENÜ: Takvim ve Kameralar -->
        <div style="width:250px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:12px; display:flex; flex-direction:column; overflow:hidden;">
          <div style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05); font-weight:700; display:flex; align-items:center; gap:8px;">
            <i class="ph-fill ph-video-camera" style="color:var(--accent);"></i> Araç Kameraları
          </div>
          <div style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">
            <div style="display:flex; align-items:center; gap:8px; font-size:12px; margin-bottom:8px; color:var(--text2);"><i class="ph-fill ph-caret-down"></i> 34 OK 322 (Fiat Egea)</div>
            <div style="display:flex; align-items:center; gap:8px; font-size:12px; margin-left:16px; margin-bottom:6px;"><input type="checkbox" checked style="accent-color:var(--accent);"> Ön Kamera</div>
            <div style="display:flex; align-items:center; gap:8px; font-size:12px; margin-left:16px; margin-bottom:6px;"><input type="checkbox" style="accent-color:var(--accent);"> İç Kamera</div>
          </div>
          <div style="padding:12px; font-weight:700; border-bottom:1px solid rgba(255,255,255,0.05); font-size:13px;">Takvim (Arama)</div>
          <div style="padding:12px; flex:1; display:flex; flex-direction:column; justify-content:flex-start;">
            <input type="date" style="background:#111; border:1px solid rgba(255,255,255,0.1); color:#fff; padding:8px 12px; border-radius:6px; outline:none; font-family:inherit; font-size:13px; width:100%; margin-bottom:12px;" value="2026-05-26">
            <button class="btn btn-primary" style="width:100%; padding:8px; font-size:12px; font-weight:700; color:#000;" onclick="alert('Seçili tarih için kayıtlar getiriliyor...')">Kayıtları Getir</button>
          </div>
        </div>

        <!-- SAĞ ALAN: Video ve Timeline -->
        <div style="flex:1; display:flex; flex-direction:column; gap:16px;">
          <!-- Video Oynatıcı -->
          <div style="flex:1; background:#000; border-radius:12px; position:relative; display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,0.05);">
            <div style="position:absolute; inset:0; background:url('/assets/images/general/car_egea.png') center/cover opacity:0.3; filter:blur(4px);"></div>
            <i class="ph ph-play-circle" style="font-size:64px; color:rgba(255,255,255,0.8); cursor:pointer; position:relative; z-index:2;"></i>
            <div style="position:absolute; top:16px; right:16px; font-family:monospace; background:rgba(0,0,0,0.5); padding:4px 8px; border-radius:4px; font-size:12px; z-index:2;">2026-05-26 14:32:45</div>
          </div>

          <!-- Timeline ve Kontroller -->
          <div style="height:120px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:12px; padding:12px; display:flex; flex-direction:column;">
            <!-- Kontrol Butonları -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
              <div style="display:flex; gap:8px;">
                <button style="background:transparent; border:none; color:#fff; cursor:pointer;"><i class="ph-fill ph-play" style="font-size:20px;"></i></button>
                <button style="background:transparent; border:none; color:var(--text2); cursor:pointer;"><i class="ph-fill ph-pause" style="font-size:20px;"></i></button>
                <div style="width:1px; background:rgba(255,255,255,0.1); margin:0 8px;"></div>
                <button style="background:transparent; border:none; color:#fff; cursor:pointer; display:flex; align-items:center; gap:4px; font-size:12px;"><i class="ph ph-scissors" style="font-size:16px;"></i> Kes/Kaydet</button>
              </div>
              <div style="display:flex; gap:8px;">
                <button style="padding:6px 12px; background:rgba(0,255,136,0.1); color:#00FF88; border:none; border-radius:4px; font-size:11px; font-weight:700; cursor:pointer;" onclick="alert('Video bilgisayara indiriliyor...')"><i class="ph-bold ph-download-simple"></i> İndir</button>
                <button style="padding:6px 12px; background:rgba(255,68,68,0.1); color:var(--danger); border:none; border-radius:4px; font-size:11px; font-weight:700; cursor:pointer;" onclick="alert('Kayıt siliniyor...')"><i class="ph-bold ph-trash"></i> Sil</button>
              </div>
            </div>

            <!-- Zaman Çizelgesi -->
            <div style="position:relative; flex:1; display:flex; flex-direction:column; justify-content:flex-end;">
              <!-- Zaman Etiketleri -->
              <div style="display:flex; justify-content:space-between; font-size:9px; color:var(--text2); margin-bottom:4px; font-family:monospace;">
                <span>14:00</span><span>14:05</span><span>14:10</span><span>14:15</span><span>14:20</span><span>14:25</span><span>14:30</span><span>14:35</span><span>14:40</span><span>14:45</span><span>14:50</span><span>14:55</span><span>15:00</span>
              </div>
              <!-- Kayıt Bloğu -->
              <div style="height:24px; background:rgba(255,255,255,0.05); border-radius:4px; position:relative; overflow:hidden; border:1px solid rgba(255,255,255,0.1);">
                <!-- Aktif Kayıt Segmentleri -->
                <div style="position:absolute; left:10%; width:20%; height:100%; background:rgba(0,255,136,0.6);"></div>
                <div style="position:absolute; left:35%; width:5%; height:100%; background:rgba(255,215,0,0.6);"></div>
                <div style="position:absolute; left:45%; width:40%; height:100%; background:rgba(0,255,136,0.6);"></div>
                
                <!-- Oynatma İmleci -->
                <div style="position:absolute; left:55%; top:0; bottom:0; width:2px; background:var(--danger); box-shadow:0 0 4px var(--danger); z-index:10;">
                  <div style="position:absolute; top:-4px; left:-4px; width:10px; height:10px; background:var(--danger); border-radius:50%;"></div>
                </div>
              </div>
              <!-- Lejant -->
              <div style="display:flex; gap:12px; margin-top:8px; font-size:9px; justify-content:center;">
                <span style="display:flex; align-items:center; gap:4px;"><div style="width:8px; height:8px; background:rgba(0,255,136,0.6); border-radius:2px;"></div> Normal Kayıt</span>
                <span style="display:flex; align-items:center; gap:4px;"><div style="width:8px; height:8px; background:rgba(255,215,0,0.6); border-radius:2px;"></div> Hareket Algılandı</span>
                <span style="display:flex; align-items:center; gap:4px;"><div style="width:8px; height:8px; background:rgba(255,255,255,0.05); border-radius:2px;"></div> Kayıt Yok</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    
    <!-- İHLAL ANALİZİ -->
    <div id="dp-ihlaller" class="dp-tab-content">
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px;">
        <div>
          <h4 style="font-size:14px; font-weight:700; margin-bottom:16px;">Sürüş Güvenliği İhlalleri (Bu Ay)</h4>
          <div style="display:flex; flex-direction:column; gap:14px;">
            <div><div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;"><span>Ani Frenleme</span><span style="font-weight:700;">8 kez</span></div><div style="width:100%;height:5px;background:#222;border-radius:3px;"><div style="width:20%;height:100%;background:var(--accent);border-radius:3px;"></div></div></div>
            <div><div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;"><span>Sert Hızlanma</span><span style="font-weight:700;">2 kez</span></div><div style="width:100%;height:5px;background:#222;border-radius:3px;"><div style="width:8%;height:100%;background:rgba(255,255,255,0.3);border-radius:3px;"></div></div></div>
            <div><div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;"><span>Hız Sınırı İhlali</span><span style="font-weight:700;">0 kez</span></div><div style="width:100%;height:5px;background:#222;border-radius:3px;"><div style="width:0%;height:100%;background:var(--danger);border-radius:3px;"></div></div></div>
            <div><div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;"><span>Tehlikeli Viraj</span><span style="font-weight:700;">1 kez</span></div><div style="width:100%;height:5px;background:#222;border-radius:3px;"><div style="width:4%;height:100%;background:rgba(255,255,255,0.2);border-radius:3px;"></div></div></div>
          </div>
        </div>
        <div>
          <h4 style="font-size:14px; font-weight:700; margin-bottom:16px;">AI Risk Skorları</h4>
          <div style="display:flex; flex-direction:column; gap:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(0,255,136,0.03); border-radius:8px;"><span style="font-size:13px;">Dikkat Dağınıklığı Riski</span><span style="font-weight:800; color:#00FF88;">Düşük</span></div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(255,234,0,0.03); border-radius:8px;"><span style="font-size:13px;">Yorgunluk Tahmini</span><span style="font-weight:800; color:var(--accent);">Orta</span></div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(0,255,136,0.03); border-radius:8px;"><span style="font-size:13px;">Agresif Sürüş</span><span style="font-weight:800; color:#00FF88;">Düşük</span></div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(0,255,136,0.03); border-radius:8px;"><span style="font-size:13px;">Rota Sapma Riski</span><span style="font-weight:800; color:#00FF88;">Düşük</span></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- KAZA GEÇMİŞİ -->
    <div id="dp-kaza" class="dp-tab-content">
      <div style="text-align:center; padding: 40px;">
        <i class="ph ph-shield-check" style="font-size:48px; color:#00FF88; margin-bottom:16px;"></i>
        <h4 style="font-size:18px; font-weight:700; margin-bottom:8px;">Kaza Geçmişi Bulunmuyor</h4>
        <p style="color:var(--text2); font-size:13px;">Sürücünün kayıtlı herhangi bir kazası yoktur.</p>
      </div>
    </div>
    
    <!-- Bottom Actions -->
    <div style="margin-top:24px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.05); display:flex; gap:12px;">
      <button class="btn btn-primary" style="padding:10px 20px; font-size:12px; font-weight:700; color:#000;" onclick="alert('Mesaj paneli açılıyor...')"><i class="ph ph-chat-centered-text"></i> Mesaj Gönder</button>
      <button class="btn btn-ghost" style="padding:10px 20px; font-size:12px;" onclick="alert('Sürücü VoIP üzerinden aranıyor...')"><i class="ph ph-phone"></i> Sesli Arama</button>
      <button class="btn btn-ghost" style="padding:10px 20px; font-size:12px; color:var(--danger); border:1px solid rgba(255,68,68,0.2);" onclick="openModal('uyariModal')"><i class="ph ph-warning-circle"></i> Uyarı Gönder</button>
      <button class="btn btn-ghost" style="padding:10px 20px; font-size:12px;"><i class="ph ph-file-pdf"></i> Rapor İndir</button>
    </div>
  </div>
</div>

<!-- UYARI GÖNDER MODAL -->
<div id="uyariModal" class="fleet-modal-overlay">
  <div class="fleet-modal" style="max-width: 500px;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
      <h3 style="font-size:18px; font-weight:700;">Uyarı Gönder (İhlal)</h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:22px; color:var(--text2);" onclick="closeModal('uyariModal')"></i>
    </div>
    <div style="margin-bottom:16px;">
      <label style="font-size:12px; color:var(--text2); margin-bottom:8px; display:block;">İhlal Türü</label>
      <select class="dark-select" style="width:100%; padding:10px; border:1px solid rgba(255,255,255,0.1); border-radius:8px; font-size:13px; color:#fff; background:rgba(0,0,0,0.3); outline:none;">
        <option>Şeritten Ayrılma (AI Dashcam)</option>
        <option>Telefon Kullanımı (AI Dashcam)</option>
        <option>Aşırı Hız</option>
        <option>Ani Frenleme</option>
      </select>
    </div>
    <div style="margin-bottom:24px;">
      <label style="font-size:12px; color:var(--text2); margin-bottom:8px; display:block;">Mesaj / Uyarı Metni</label>
      <textarea rows="4" style="width:100%; padding:10px; border:1px solid rgba(255,255,255,0.1); border-radius:8px; font-size:13px; color:#fff; background:rgba(0,0,0,0.3); outline:none; font-family:inherit;">Son sürüşünüzde AI Dashcam tarafından şerit ihlali tespit edilmiştir. Lütfen dikkat ediniz.</textarea>
    </div>
    <button class="btn btn-primary" style="width:100%; padding:12px; font-size:13px; font-weight:700; color:#000;" onclick="alert('Uyarı sisteme işlendi ve sürücüye iletildi.'); closeModal('uyariModal')">Sürücüye Uyarıyı İlet</button>
  </div>
</div>

<!-- SEYAHAT DETAYI MODAL (TRIP) -->
<div id="tripDetailModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-xl" style="padding:0; overflow:hidden;">
    <div style="position:relative; height:400px; width:100%;">
      <img src="/assets/images/general/map_istanbul.png" style="width:100%; height:100%; object-fit:cover; filter:brightness(0.6) saturate(1.2);">
      
      <!-- Fake route line container (SVG overlay could be placed here) -->
      
      <div style="position:absolute; top:24px; left:24px; right:24px; display:flex; justify-content:space-between;">
        <div style="background:rgba(0,0,0,0.8); backdrop-filter:blur(10px); padding:16px; border-radius:16px; border:1px solid rgba(255,255,255,0.1);">
          <div style="font-size:16px; font-weight:800; margin-bottom:4px;">Arnavutköy → Maslak</div>
          <div style="font-size:12px; color:var(--text2);">34 OK 322 · Hasan Öztürk</div>
        </div>
        <i class="ph-fill ph-x-circle" style="font-size:32px; color:#fff; cursor:pointer; drop-shadow(0 4px 10px rgba(0,0,0,0.5));" onclick="closeModal('tripDetailModal')"></i>
      </div>
      
      <div style="position:absolute; bottom:24px; left:24px; display:flex; gap:12px;">
        <div style="background:rgba(0,0,0,0.8); backdrop-filter:blur(10px); padding:12px 20px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); text-align:center;">
          <div style="font-size:10px; color:var(--text2);">Ort. Hız</div>
          <div style="font-size:16px; font-weight:800;">48 km/s</div>
        </div>
        <div style="background:rgba(0,0,0,0.8); backdrop-filter:blur(10px); padding:12px 20px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); text-align:center;">
          <div style="font-size:10px; color:var(--text2);">Maks. Devir</div>
          <div style="font-size:16px; font-weight:800;">3200</div>
        </div>
        <div style="background:rgba(0,0,0,0.8); backdrop-filter:blur(10px); padding:12px 20px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); text-align:center;">
          <div style="font-size:10px; color:var(--text2);">Puan</div>
          <div style="font-size:16px; font-weight:800; color:#00FF88;">97</div>
        </div>
      </div>
    </div>
    
    <div style="padding:24px; background:#0A0A0A; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <h4 style="font-size:14px; font-weight:700; margin-bottom:4px;">Gelişmiş Veriler</h4>
        <p style="font-size:12px; color:var(--text2);">Motor yükü, yakıt tüketim haritası ve G-Force sensörü verilerini raporlayın.</p>
      </div>
      <button class="btn btn-primary" style="padding:10px 20px; font-size:13px; font-weight:700; color:#000;" onclick="alert('Sürüş verileri incelenmek üzere operasyon merkezine iletildi.'); closeModal('tripDetailModal')">Sürüşü İncelemeye Gönder</button>
    </div>
  </div>
</div>

<!-- KPI GİDER MODAL -->
<div id="kpiGiderModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-xl" style="max-height:90vh;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.05);">
      <div>
        <h3 style="font-size:20px; font-weight:800;">Toplam Filo Gideri Detayı</h3>
        <p style="font-size:12px; color:var(--text2); margin-top:4px;">Son 12 Aylık Harcama Grafiği (₺)</p>
      </div>
      <i class="ph ph-x" style="cursor:pointer; font-size:22px; color:var(--text2);" onclick="closeModal('kpiGiderModal')"></i>
    </div>
    <div style="height:350px; background:rgba(255,255,255,0.02); border-radius:12px; padding:24px; display:flex; align-items:flex-end; gap:12px; border:1px solid rgba(255,255,255,0.05);">
      <!-- CSS Bar Chart for 12 Months -->
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="font-size:10px; font-weight:700; color:var(--text2);">₺280K</div>
        <div style="width:100%; height:140px; background:var(--accent); border-radius:4px 4px 0 0; opacity:0.6;"></div>
        <div style="font-size:10px; color:var(--text2);">Oca</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="font-size:10px; font-weight:700; color:var(--text2);">₺290K</div>
        <div style="width:100%; height:145px; background:var(--accent); border-radius:4px 4px 0 0; opacity:0.6;"></div>
        <div style="font-size:10px; color:var(--text2);">Şub</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="font-size:10px; font-weight:700; color:var(--text2);">₺310K</div>
        <div style="width:100%; height:155px; background:var(--accent); border-radius:4px 4px 0 0; opacity:0.6;"></div>
        <div style="font-size:10px; color:var(--text2);">Mar</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="font-size:10px; font-weight:700; color:var(--text2);">₺325K</div>
        <div style="width:100%; height:162px; background:var(--accent); border-radius:4px 4px 0 0; opacity:0.6;"></div>
        <div style="font-size:10px; color:var(--text2);">Nis</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="font-size:10px; font-weight:700; color:var(--text2);">₺330K</div>
        <div style="width:100%; height:165px; background:var(--accent); border-radius:4px 4px 0 0; opacity:0.7;"></div>
        <div style="font-size:10px; color:var(--text2);">May</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="font-size:10px; font-weight:700; color:var(--text2);">₺350K</div>
        <div style="width:100%; height:175px; background:var(--accent); border-radius:4px 4px 0 0; opacity:0.8;"></div>
        <div style="font-size:10px; color:var(--text2);">Haz</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="font-size:10px; font-weight:700; color:var(--text2);">₺345K</div>
        <div style="width:100%; height:172px; background:var(--accent); border-radius:4px 4px 0 0; opacity:0.8;"></div>
        <div style="font-size:10px; color:var(--text2);">Tem</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="font-size:10px; font-weight:700; color:var(--danger);">₺390K</div>
        <div style="width:100%; height:195px; background:var(--danger); border-radius:4px 4px 0 0;"></div>
        <div style="font-size:10px; color:var(--text2);">Ağu</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="font-size:10px; font-weight:700; color:var(--text2);">₺360K</div>
        <div style="width:100%; height:180px; background:var(--accent); border-radius:4px 4px 0 0; opacity:0.8;"></div>
        <div style="font-size:10px; color:var(--text2);">Eyl</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="font-size:10px; font-weight:700; color:var(--text2);">₺355K</div>
        <div style="width:100%; height:177px; background:var(--accent); border-radius:4px 4px 0 0; opacity:0.8;"></div>
        <div style="font-size:10px; color:var(--text2);">Eki</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="font-size:10px; font-weight:700; color:var(--text2);">₺350K</div>
        <div style="width:100%; height:175px; background:var(--accent); border-radius:4px 4px 0 0; opacity:0.8;"></div>
        <div style="font-size:10px; color:var(--text2);">Kas</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="font-size:10px; font-weight:700; color:#fff;">₺342K</div>
        <div style="width:100%; height:171px; background:#fff; border-radius:4px 4px 0 0;"></div>
        <div style="font-size:10px; color:#fff; font-weight:700;">Ara</div>
      </div>
    </div>
  </div>
</div>

<!-- VEHICLE DETAIL MODAL -->
<div id="vehicleDetailModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-xl" style="max-height:90vh;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.05);">
      <div style="display:flex; align-items:center; gap:16px;">
        <img id="vd-photo" src="/assets/images/general/car_egea.png" style="width:80px; height:50px; object-fit:cover; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
        <div>
          <h3 id="vd-name" style="font-size:20px; font-weight:800;">Fiat Egea</h3>
          <div style="display:flex; align-items:center; gap:12px; margin-top:4px;">
            <span id="vd-plate" style="font-family:monospace; font-size:13px; font-weight:700; padding:3px 10px; background:rgba(255,255,255,0.05); border-radius:4px;">34 OK 322</span>
            <span id="vd-vstatus" style="padding:3px 10px; background:rgba(0,255,136,0.1); color:#00FF88; border-radius:4px; font-size:10px; font-weight:700;">Aktif</span>
          </div>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:16px;">
        <button class="btn btn-primary" style="padding: 8px 16px; font-size: 13px; font-weight:700; color:#000;" onclick="closeModal('vehicleDetailModal'); switchFiloTab(null, 'dashcam')"><i class="ph-fill ph-video-camera"></i> Dashcam'e Bağlan</button>
        <i class="ph ph-x" style="cursor:pointer; font-size:22px; color:var(--text2);" onclick="closeModal('vehicleDetailModal')"></i>
      </div>
    </div>
    
    <!-- Vehicle Tabs -->
    <div style="display:flex; gap:4px; margin-bottom:24px; border-bottom:1px solid rgba(255,255,255,0.05);">
      <button class="driver-profile-tab active" onclick="switchVDTab(event,'vd-telemetri')">Canlı Telemetri</button>
      <button class="driver-profile-tab" onclick="switchVDTab(event,'vd-seyahat')">Seyahat Geçmişi</button>
      <button class="driver-profile-tab" onclick="switchVDTab(event,'vd-bakim')">Bakım Geçmişi</button>
    </div>
    
    <!-- CANLI TELEMETRİ -->
    <div id="vd-telemetri" class="dp-tab-content active">
      <div style="display:grid; grid-template-columns: repeat(4,1fr); gap:12px; margin-bottom:24px;">
        <div style="padding:16px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; text-align:center;">
          <div style="font-size:10px; color:var(--text2); margin-bottom:6px;">Motor Devri</div>
          <div id="vd-rpm" style="font-size:22px; font-weight:800;">2.450</div>
          <div style="font-size:9px; color:var(--text2);">RPM</div>
        </div>
        <div style="padding:16px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; text-align:center;">
          <div style="font-size:10px; color:var(--text2); margin-bottom:6px;">Motor Sıcaklığı</div>
          <div id="vd-temp" style="font-size:22px; font-weight:800;">88°C</div>
          <div style="font-size:9px; color:var(--text2);">Normal</div>
        </div>
        <div style="padding:16px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; text-align:center;">
          <div style="font-size:10px; color:var(--text2); margin-bottom:6px;">Anlık Hız</div>
          <div id="vd-speed" style="font-size:22px; font-weight:800;">23</div>
          <div style="font-size:9px; color:var(--text2);">km/sa</div>
        </div>
        <div style="padding:16px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; text-align:center;">
          <div style="font-size:10px; color:var(--text2); margin-bottom:6px;">Yakıt Seviyesi</div>
          <div id="vd-fuel" style="font-size:22px; font-weight:800; color:var(--accent);">89%</div>
          <div style="font-size:9px; color:var(--text2);">52 Litre</div>
        </div>
      </div>
      <div style="display:grid; grid-template-columns: repeat(4,1fr); gap:12px; margin-bottom:24px;">
        <div style="padding:12px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; text-align:center;">
          <div style="font-size:10px; color:var(--text2); margin-bottom:4px;">Yağ Basıncı</div>
          <div style="font-size:14px; font-weight:800; color:#00FF88;">Normal</div>
        </div>
        <div style="padding:12px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; text-align:center;">
          <div style="font-size:10px; color:var(--text2); margin-bottom:4px;">Fren Durumu</div>
          <div style="font-size:14px; font-weight:800; color:#00FF88;">İyi</div>
        </div>
        <div style="padding:12px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; text-align:center;">
          <div style="font-size:10px; color:var(--text2); margin-bottom:4px;">Akü Voltajı</div>
          <div style="font-size:14px; font-weight:800;">12.6V</div>
        </div>
        <div style="padding:12px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; text-align:center;">
          <div style="font-size:10px; color:var(--text2); margin-bottom:4px;">Km Sayacı</div>
          <div style="font-size:14px; font-weight:800;">47.230</div>
        </div>
      </div>
      
      <!-- DETAYLI SAĞLIK METRİKLERİ -->
      <h4 style="font-size:14px; font-weight:700; margin-bottom:12px;">Detaylı Sağlık Metrikleri</h4>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; margin-bottom:24px;">
        <!-- Motor Sağlığı -->
        <div style="padding:16px 20px; background:#141414; border:1px solid rgba(255,255,255,0.05); border-radius:12px; display:flex; align-items:center; gap:20px;">
          <i class="ph-fill ph-engine" style="font-size:32px; color:var(--danger);"></i>
          <div style="flex:1;">
            <div style="font-size:12px; font-weight:600; color:#fff; margin-bottom:4px;">Motor Sağlığı</div>
            <div style="font-size:20px; font-weight:700; color:var(--danger); margin-bottom:6px; display:flex; align-items:baseline; gap:4px;">72 <span style="font-size:14px;">%</span></div>
            <div style="width:100%; height:4px; background:rgba(255,255,255,0.1); border-radius:2px; overflow:hidden;">
              <div style="width:72%; height:100%; background:var(--danger);"></div>
            </div>
          </div>
        </div>
        <!-- Şanzıman Sağlığı -->
        <div style="padding:16px 20px; background:#141414; border:1px solid rgba(255,255,255,0.05); border-radius:12px; display:flex; align-items:center; gap:20px;">
          <i class="ph-fill ph-gear" style="font-size:32px; color:#00FF88;"></i>
          <div style="flex:1;">
            <div style="font-size:12px; font-weight:600; color:#fff; margin-bottom:4px;">Şanzıman Sağlığı</div>
            <div style="font-size:20px; font-weight:700; color:#00FF88; margin-bottom:6px; display:flex; align-items:baseline; gap:4px;">92 <span style="font-size:14px;">%</span></div>
            <div style="width:100%; height:4px; background:rgba(255,255,255,0.1); border-radius:2px; overflow:hidden;">
              <div style="width:92%; height:100%; background:#00FF88;"></div>
            </div>
          </div>
        </div>
        <!-- Fren Sağlığı -->
        <div style="padding:16px 20px; background:#141414; border:1px solid rgba(255,255,255,0.05); border-radius:12px; display:flex; align-items:center; gap:20px;">
          <i class="ph-fill ph-disc" style="font-size:32px; color:var(--danger);"></i>
          <div style="flex:1;">
            <div style="font-size:12px; font-weight:600; color:#fff; margin-bottom:4px;">Fren Sağlığı</div>
            <div style="font-size:20px; font-weight:700; color:var(--danger); margin-bottom:6px; display:flex; align-items:baseline; gap:4px;">84 <span style="font-size:14px;">%</span></div>
            <div style="width:100%; height:4px; background:rgba(255,255,255,0.1); border-radius:2px; overflow:hidden;">
              <div style="width:84%; height:100%; background:var(--danger);"></div>
            </div>
          </div>
        </div>
        <!-- Akü ve Elektrik Sağlığı -->
        <div style="padding:16px 20px; background:#141414; border:1px solid rgba(255,255,255,0.05); border-radius:12px; display:flex; align-items:center; gap:20px;">
          <i class="ph-fill ph-battery-full" style="font-size:32px; color:#00FF88;"></i>
          <div style="flex:1;">
            <div style="font-size:12px; font-weight:600; color:#fff; margin-bottom:4px;">Akü ve Elektrik</div>
            <div style="font-size:20px; font-weight:700; color:#00FF88; margin-bottom:6px; display:flex; align-items:baseline; gap:4px;">100 <span style="font-size:14px;">%</span></div>
            <div style="width:100%; height:4px; background:rgba(255,255,255,0.1); border-radius:2px; overflow:hidden;">
              <div style="width:100%; height:100%; background:#00FF88;"></div>
            </div>
          </div>
        </div>
      </div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
        <div style="padding:16px; background:rgba(255,234,0,0.03); border:1px solid rgba(255,234,0,0.1); border-radius:10px;">
          <div style="font-size:12px; font-weight:700; margin-bottom:8px; display:flex; align-items:center; gap:6px;"><i class="ph-fill ph-map-pin" style="color:var(--accent);"></i> Son Konum</div>
          <div style="font-size:13px; font-weight:600;">Maslak, Sarıyer/İstanbul</div>
          <div style="font-size:10px; color:var(--text2); margin-top:4px;">41.1092° N, 29.0178° E · 3 dk önce</div>
        </div>
        <div style="padding:16px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px; cursor:pointer; transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='rgba(255,255,255,0.02)'" onclick="closeModal('vehicleDetailModal'); setTimeout(() => openModal('driverProfileModal'), 300)">
          <div style="font-size:12px; font-weight:700; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:6px;"><i class="ph-fill ph-user" style="color:var(--accent);"></i> Atanmış Sürücü</div>
            <i class="ph ph-arrow-right" style="color:var(--text2);"></i>
          </div>
          <div style="font-size:13px; font-weight:600;">Hasan Öztürk</div>
          <div style="font-size:10px; color:var(--text2); margin-top:4px;">Sürüş Puanı: 98 · 1223 saat toplam</div>
        </div>
      </div>
    </div>
    
    <!-- SEYAHAT GEÇMİŞİ -->
    <div id="vd-seyahat" class="dp-tab-content">
      <h4 style="font-size:14px; font-weight:700; margin-bottom:16px;">Son 7 Günlük Seyahat Kayıtları</h4>
      <div class="dark-scroll" style="max-height:350px; overflow-y:auto;">
        <div class="trip-row"><div style="width:60px; text-align:center;"><div style="font-size:18px; font-weight:800; color:var(--accent);">26</div><div style="font-size:10px; color:var(--text2);">May</div></div><div style="flex:1;"><div style="font-weight:700;">Arnavutköy → Maslak</div><div style="font-size:11px; color:var(--text2); margin-top:4px;">Sürücü: Hasan Öztürk · 42 km · 1s 33dk</div></div><div><span style="padding:3px 8px; background:rgba(0,255,136,0.1); color:#00FF88; border-radius:4px; font-size:10px; font-weight:700;">Tamamlandı</span></div></div>
        <div class="trip-row"><div style="width:60px; text-align:center;"><div style="font-size:18px; font-weight:800;">25</div><div style="font-size:10px; color:var(--text2);">May</div></div><div style="flex:1;"><div style="font-weight:700;">Arnavutköy → Kadıköy → Bebek</div><div style="font-size:11px; color:var(--text2); margin-top:4px;">Sürücü: Hasan Öztürk · 90 km · 4s 20dk</div></div><div><span style="padding:3px 8px; background:rgba(0,255,136,0.1); color:#00FF88; border-radius:4px; font-size:10px; font-weight:700;">Tamamlandı</span></div></div>
        <div class="trip-row"><div style="width:60px; text-align:center;"><div style="font-size:18px; font-weight:800;">24</div><div style="font-size:10px; color:var(--text2);">May</div></div><div style="flex:1;"><div style="font-weight:700;">Arnavutköy → Gebze</div><div style="font-size:11px; color:var(--text2); margin-top:4px;">Sürücü: Hasan Öztürk · 95 km · 2s 30dk</div></div><div><span style="padding:3px 8px; background:rgba(0,255,136,0.1); color:#00FF88; border-radius:4px; font-size:10px; font-weight:700;">Tamamlandı</span></div></div>
      </div>
    </div>
    
    <!-- BAKIM GEÇMİŞİ -->
    <div id="vd-bakim" class="dp-tab-content">
      <h4 style="font-size:14px; font-weight:700; margin-bottom:16px;">Bakım Geçmişi</h4>
      <div style="display:flex; flex-direction:column; gap:12px;">
        <div style="display:flex; align-items:center; gap:16px; padding:16px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px;">
          <div style="width:40px; height:40px; border-radius:50%; background:rgba(0,255,136,0.1); display:flex; align-items:center; justify-content:center;"><i class="ph-fill ph-check-circle" style="color:#00FF88;"></i></div>
          <div style="flex:1;"><div style="font-weight:700; font-size:13px;">Periyodik Yağ Değişimi</div><div style="font-size:11px; color:var(--text2);">15.04.2026 · 45.200 km · ₺2.100</div></div>
          <span style="padding:3px 8px; background:rgba(0,255,136,0.1); color:#00FF88; border-radius:4px; font-size:10px; font-weight:700;">Tamamlandı</span>
        </div>
        <div style="display:flex; align-items:center; gap:16px; padding:16px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:10px;">
          <div style="width:40px; height:40px; border-radius:50%; background:rgba(0,255,136,0.1); display:flex; align-items:center; justify-content:center;"><i class="ph-fill ph-check-circle" style="color:#00FF88;"></i></div>
          <div style="flex:1;"><div style="font-weight:700; font-size:13px;">Lastik Rotasyonu</div><div style="font-size:11px; color:var(--text2);">01.03.2026 · 40.100 km · ₺1.800</div></div>
          <span style="padding:3px 8px; background:rgba(0,255,136,0.1); color:#00FF88; border-radius:4px; font-size:10px; font-weight:700;">Tamamlandı</span>
        </div>
        <div style="display:flex; align-items:center; gap:16px; padding:16px; background:rgba(255,234,0,0.03); border:1px solid rgba(255,234,0,0.1); border-radius:10px;">
          <div style="width:40px; height:40px; border-radius:50%; background:rgba(255,234,0,0.1); display:flex; align-items:center; justify-content:center;"><i class="ph-fill ph-clock" style="color:var(--accent);"></i></div>
          <div style="flex:1;"><div style="font-weight:700; font-size:13px;">Sonraki Planlı Bakım: Yağ + Filtre</div><div style="font-size:11px; color:var(--text2);">Tahmini: 05.06.2026 · ~50.000 km</div></div>
          <span style="padding:3px 8px; background:rgba(255,234,0,0.1); color:var(--accent); border-radius:4px; font-size:10px; font-weight:700;">Planlandı</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- LEADERBOARD MODAL -->
<div id="leaderboardModal" class="fleet-modal-overlay">
  <div class="fleet-modal" style="max-width: 500px;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
      <h3 style="font-size:18px; font-weight:700;">Sürücü Liderlik Tablosu</h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:22px; color:var(--text2);" onclick="closeModal('leaderboardModal')"></i>
    </div>
    <div style="display:flex; gap:12px; margin-bottom:24px;">
      <select class="dark-select" style="padding:4px 12px; border:1px solid rgba(255,255,255,0.1); border-radius:12px; font-size:11px; cursor:pointer; outline:none; background:transparent; color:#fff;">
        <option>Bugün</option><option>Bu Ay</option><option>Bu Yıl</option>
      </select>
    </div>
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div class="lb-entry" style="display:flex; justify-content:space-between; align-items:center;">
        <span style="display:flex; align-items:center; gap:12px; font-size:14px;"><i class="ph-fill ph-trophy" style="color:var(--accent);"></i> Hasan Öztürk</span>
        <span class="lb-score" style="font-weight:700; padding:2px 8px; background:rgba(255,234,0,0.1); color:var(--accent); border-radius:8px; font-size:12px;">98 Puan</span>
      </div>
      <div class="lb-entry" style="display:flex; justify-content:space-between; align-items:center; color:var(--text2);">
        <span style="display:flex; align-items:center; gap:12px; font-size:14px;"><span style="width:16px; text-align:center; font-weight:800;">2</span> Sinan Aktaş</span>
        <span class="lb-score" style="font-weight:700; font-size:12px; color:#fff;">96 Puan</span>
      </div>
      <div class="lb-entry" style="display:flex; justify-content:space-between; align-items:center; color:var(--text2);">
        <span style="display:flex; align-items:center; gap:12px; font-size:14px;"><span style="width:16px; text-align:center; font-weight:800;">3</span> Erdem Cihan</span>
        <span class="lb-score" style="font-weight:700; font-size:12px; color:#fff;">92 Puan</span>
      </div>
      <div class="lb-entry" style="display:flex; justify-content:space-between; align-items:center; color:var(--text2);">
        <span style="display:flex; align-items:center; gap:12px; font-size:14px;"><span style="width:16px; text-align:center; font-weight:800;">4</span> Deniz Dağlar</span>
        <span class="lb-score" style="font-weight:700; font-size:12px; color:#fff;">89 Puan</span>
      </div>
      <div class="lb-entry" style="display:flex; justify-content:space-between; align-items:center; color:var(--text2);">
        <span style="display:flex; align-items:center; gap:12px; font-size:14px;"><span style="width:16px; text-align:center; font-weight:800;">5</span> Ali Yılmaz</span>
        <span class="lb-score" style="font-weight:700; font-size:12px; color:#fff;">85 Puan</span>
      </div>
    </div>
  </div>
</div>

<div class="dashboard-wrapper" style="padding-top: 32px;">
  <div class="container" style="display: flex; min-height: calc(100vh - 120px); width: 100%; padding: 0;">
    
    <!-- SIDEBAR -->
    <aside class="sidebar" style="display: flex; flex-direction: column; width: 240px; min-width: 240px; max-width: 240px; padding: 24px 16px;">
      <div style="margin-bottom: 40px; padding: 0 20px;">
        <a href="/index" style="display:block; margin-bottom:16px;">
          <img src="/assets/images/general/preditechlogo.png" alt="Preditech" style="height:24px; object-fit:contain;">
        </a>
        <div style="font-size: 11px; color: var(--text2); letter-spacing: 1.5px; font-weight: 700; display:flex; align-items:center; gap:8px;">
          <i class="ph-fill ph-shield-check" style="color:var(--accent); font-size:14px;"></i> WATCHDOG
        </div>
      </div>
      
      <div style="display:flex; flex-direction:column; gap:6px; margin-bottom:8px;">
        <a class="sidebar-link active" style="cursor:pointer;" onclick="switchFiloTab(event, 'anasayfa')">
          <i class="ph ph-house"></i> Anasayfa
        </a>
        <a class="sidebar-link" style="cursor:pointer;" onclick="switchFiloTab(event, 'araclar')">
          <i class="ph ph-car"></i> Araçlar
        </a>
        <a class="sidebar-link" style="cursor:pointer;" onclick="switchFiloTab(event, 'raporlar')">
          <i class="ph ph-chart-pie-slice"></i> Raporlar
        </a>
        <a class="sidebar-link" style="cursor:pointer;" onclick="switchFiloTab(event, 'metrikler')">
          <i class="ph ph-chart-line-up"></i> Metrikler & Analiz
        </a>
        <a class="sidebar-link" style="cursor:pointer;" onclick="switchFiloTab(event, 'dashcam')">
          <i class="ph ph-video-camera"></i> Dashcam
        </a>
        <a class="sidebar-link" style="cursor:pointer;" onclick="switchFiloTab(event, 'suruculer')">
          <i class="ph ph-users"></i> Sürücüler
        </a>
      </div>
      
      <div style="height: 1px; background: rgba(255,255,255,0.05); margin: 12px 0;"></div>
      
      <div style="display:flex; flex-direction:column; gap:6px;">
        <a class="sidebar-link" style="cursor:pointer;" onclick="switchFiloTab(event, 'bakim')">
          <i class="ph ph-wrench"></i> Bakım Yönetimi
        </a>
        <a class="sidebar-link" style="cursor:pointer;" onclick="switchFiloTab(event, 'bolgeler')">
          <i class="ph ph-map-pin-area"></i> Bölge / Geofence
        </a>
        <a class="sidebar-link" style="cursor:pointer;" onclick="switchFiloTab(event, 'ayarlar')">
          <i class="ph ph-gear"></i> Ayarlar
        </a>
      </div>

      <!-- Bildirim Gönder (Bottom) -->
      <div style="margin-top: auto; padding: 20px 16px; background: rgba(255,255,255,0.02); border-top: 1px solid rgba(255,255,255,0.05); text-align: center; border-radius: 0 0 12px 12px;">
        <h4 style="font-size:13px; font-weight:700; margin-bottom:8px; color:#fff;">Acil Bildirim</h4>
        <p style="font-size:11px; color:var(--text2); margin-bottom:16px;">Tüm sürücülere toplu uyarı gönderin.</p>
        <button onclick="openModal('fleetNotificationModal')" class="btn btn-primary" style="width:100%; justify-content:center; padding:10px; font-size:12px; font-weight:800; color:#000;">Bildirimi Hazırla</button>
      </div>
    </aside>

    <div class="dashboard-content" style="flex:1; padding: 24px 40px 40px 24px;">
      <div class="dashboard-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:32px;">
        <div>
          <h1 style="font-size: 28px; font-weight: 800; margin-bottom: 8px;">Filo Yönetim Paneli</h1>
          <p style="color: var(--text2); font-size: 14px;">Filonuzun gerçek zamanlı durum, konum ve performans metrikleri</p>
        </div>
        <div style="display:flex; align-items:center; gap:24px;">
          <i class="ph-fill ph-bell" style="font-size:24px; color:var(--accent); cursor:pointer;"></i>
          <div style="display:flex; align-items:center; gap:12px;">
            <div style="text-align:right;">
              <div style="font-size:14px; font-weight:700;">Ahmet Yılmaz</div>
              <div style="font-size:11px; color:var(--text2);">Filo Yöneticisi</div>
            </div>
            <div style="width:40px; height:40px; border-radius:50%; overflow:hidden; border:2px solid var(--accent); display:flex; align-items:center; justify-content:center; background:#1a1a1a;">
              <i class="ph-fill ph-user" style="color:var(--accent); font-size:20px;"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- ANASAYFA TAB -->
      <section id="tab-anasayfa" class="filo-tab-content active">
        <div class="bento-grid" style="grid-template-columns: repeat(3, 1fr);">
          
          <div class="bento-item" style="padding: 24px;">
            <h3 style="font-size:18px; font-weight:700; margin-bottom:24px;">Anomali Tespiti ve Uyarılar</h3>
            
            <div onclick="openModal('anomalyPerfectModal')" style="margin-bottom:16px; cursor:pointer; transition:opacity 0.2s;" onmouseover="this.style.opacity=0.8" onmouseout="this.style.opacity=1">
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:14px;">
                <span style="display:flex; align-items:center; gap:8px;"><i class="ph-fill ph-check-circle" style="color:#00FF88;"></i> Mükemmel Durumda</span>
                <span style="color:#00FF88;">15 Araç</span>
              </div>
              <div style="width:100%; height:4px; background:#222; border-radius:2px;"><div style="width:70%; height:100%; background:#00FF88; border-radius:2px;"></div></div>
            </div>
            
            <div onclick="openModal('anomalyWarnModal')" style="margin-bottom:16px; cursor:pointer; transition:opacity 0.2s;" onmouseover="this.style.opacity=0.8" onmouseout="this.style.opacity=1">
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:14px;">
                <span style="display:flex; align-items:center; gap:8px;"><i class="ph-fill ph-warning" style="color:var(--accent);"></i> İlgilenilmesi Gereken</span>
                <span style="color:var(--accent);">3 Araç</span>
              </div>
              <div style="width:100%; height:4px; background:#222; border-radius:2px;"><div style="width:20%; height:100%; background:var(--accent); border-radius:2px;"></div></div>
            </div>
            
            <div onclick="openModal('anomalyCriticalModal')" style="cursor:pointer; transition:opacity 0.2s;" onmouseover="this.style.opacity=0.8" onmouseout="this.style.opacity=1">
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:14px;">
                <span style="display:flex; align-items:center; gap:8px;"><i class="ph-fill ph-warning-circle" style="color:var(--danger);"></i> Kritik Seviye</span>
                <span style="color:var(--danger);">1 Araç</span>
              </div>
              <div style="width:100%; height:4px; background:#222; border-radius:2px;"><div style="width:5%; height:100%; background:var(--danger); border-radius:2px;"></div></div>
            </div>
          </div>

          <div class="bento-item" id="lb-container" style="padding: 24px; transition:all 0.3s ease;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
              <h3 style="font-size:18px; font-weight:700;">Sürücü Liderlik Tablosu</h3>
              <button onclick="openModal('leaderboardModal')" class="btn btn-ghost" style="padding:4px 8px; font-size:11px;"><i class="ph ph-arrows-out"></i></button>
            </div>
            <div style="display:flex; gap:12px; margin-bottom:24px;">
              <select class="dark-select" style="padding:4px 12px; border:1px solid rgba(255,255,255,0.1); border-radius:12px; font-size:11px; cursor:pointer; outline:none; background:transparent; color:#fff;">
                <option>Bugün</option><option>Bu Ay</option><option>Bu Yıl</option>
              </select>
            </div>
            <div style="display:flex; flex-direction:column; gap:16px;">
              <div class="lb-entry" style="display:flex; justify-content:space-between; align-items:center;">
                <span style="display:flex; align-items:center; gap:12px; font-size:14px;"><i class="ph-fill ph-trophy" style="color:var(--accent);"></i> Hasan Öztürk</span>
                <span class="lb-score" style="font-weight:700; padding:2px 8px; background:rgba(255,234,0,0.1); color:var(--accent); border-radius:8px; font-size:12px;">98 Puan</span>
              </div>
              <div class="lb-entry" style="display:flex; justify-content:space-between; align-items:center; color:var(--text2);">
                <span style="display:flex; align-items:center; gap:12px; font-size:14px;"><span style="width:16px; text-align:center; font-weight:800;">2</span> Sinan Aktaş</span>
                <span class="lb-score" style="font-weight:700; font-size:12px; color:#fff;">96 Puan</span>
              </div>
              <div class="lb-entry" style="display:flex; justify-content:space-between; align-items:center; color:var(--text2);">
                <span style="display:flex; align-items:center; gap:12px; font-size:14px;"><span style="width:16px; text-align:center; font-weight:800;">3</span> Erdem Cihan</span>
                <span class="lb-score" style="font-weight:700; font-size:12px; color:#fff;">92 Puan</span>
              </div>
              <div class="lb-entry" style="display:flex; justify-content:space-between; align-items:center; color:var(--text2);">
                <span style="display:flex; align-items:center; gap:12px; font-size:14px;"><span style="width:16px; text-align:center; font-weight:800;">4</span> Deniz Dağlar</span>
                <span class="lb-score" style="font-weight:700; font-size:12px; color:#fff;">89 Puan</span>
              </div>
              <div class="lb-entry" style="display:flex; justify-content:space-between; align-items:center; color:var(--text2);">
                <span style="display:flex; align-items:center; gap:12px; font-size:14px;"><span style="width:16px; text-align:center; font-weight:800;">5</span> Ali Yılmaz</span>
                <span class="lb-score" style="font-weight:700; font-size:12px; color:#fff;">85 Puan</span>
              </div>
            </div>
          </div>

          <div class="bento-item dark-scroll" id="bakim-hub-container" style="padding: 24px; display:flex; flex-direction:column; overflow-y:auto; max-height: 350px; transition:all 0.3s ease;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <h3 style="font-size:18px; font-weight:700;">Proaktif Bakım Hub'ı <i class="ph-fill ph-sparkle" style="color:var(--accent);"></i></h3>
              <button onclick="openModal('bakimHubModal')" class="btn btn-ghost" style="padding:4px 8px; font-size:11px;"><i class="ph ph-arrows-out"></i></button>
            </div>
            <p style="font-size:11px; color:var(--text2); margin-bottom:16px;">Yapay zeka analizlerine dayalı filo optimizasyon tavsiyeleri.</p>
            
            <div style="display:flex; flex-direction:column; gap:12px;">
              <div class="insight-card" style="padding:12px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:8px;">
                <h4 style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:13px; color:var(--danger); margin-bottom:8px;">
                  <i class="ph-fill ph-engine"></i> Eksantrik Mili Hatası Sinyali
                </h4>
                <p style="font-size:11px; color:var(--text2); line-height:1.4;">34 OK 323 plakalı araç son 2 gündür soğuk marşta gecikme (anomali) yaşıyor. Yolda kalmadan acil sensör/kayış kontrolü yapın.</p>
              </div>
              <div class="insight-card" style="padding:12px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:8px;">
                <h4 style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:13px; color:var(--accent); margin-bottom:8px;">
                  <i class="ph-fill ph-arrows-left-right"></i> Akıllı Rota Rotasyonu Önerisi
                </h4>
                <p style="font-size:11px; color:var(--text2); line-height:1.4;">34 OK 322 sürekli kısa rotada kullanılıyor (DPF tıkanma riski yüksek). Bu aracı uzun yola çıkan 34 OK 633 ile yer değiştirin.</p>
              </div>
              <div class="insight-card" style="padding:12px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:8px;">
                <h4 style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:13px; color:var(--accent); margin-bottom:8px;">
                  <i class="ph-fill ph-car-profile"></i> Lastik Aşınması (G-Force Tahmini)
                </h4>
                <p style="font-size:11px; color:var(--text2); line-height:1.4;">34 OK 512 aracında viraj giriş savrulma verileri %12 arttı. Ön lastik diş derinliğini kontrol ettirin.</p>
              </div>
              <div class="insight-card" style="padding:12px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:8px;">
                <h4 style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:13px; color:var(--accent); margin-bottom:8px;">
                  <i class="ph-fill ph-thermometer-hot"></i> Aşırı Motor Sıcaklığı Trendi
                </h4>
                <p style="font-size:11px; color:var(--text2); line-height:1.4;">34 OK 321 aracında son 1 haftadır motor sıcaklığı 98°C üzerinde seyir alıyor. Termostat ve antifriz seviyesi kontrolü önerilir.</p>
              </div>
            </div>
          </div>

          <!-- Canlı Araç Takibi ve Harita -->
          <div class="bento-item bento-col-2" id="map-container" style="padding: 24px; transition: all 0.3s ease;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
              <div style="display:flex; align-items:center; gap:16px;">
                <h3 style="font-size:18px; font-weight:700; margin:0;">Canlı Araç Takibi (İstanbul)</h3>
                <div style="font-size:12px; color:var(--text2);"><i class="ph ph-gas-pump" style="margin-right:4px;"></i>= Şarj/Yakıt</div>
              </div>
              <button onclick="toggleMapFullscreen()" id="mapExpandBtn" class="btn btn-ghost" style="padding:6px 12px; font-size:12px;"><i class="ph ph-arrows-out"></i> Büyüt</button>
            </div>
            
            <div class="map-inner-container" style="display:flex; gap:24px; height: 350px; transition: height 0.3s ease;">
              <div class="dark-scroll" style="width:35%; overflow-y:auto; display:flex; flex-direction:column; gap:12px; padding-right:8px;">
                <div class="map-vehicle-card" onclick="showMapDetail('egea1')" style="padding:16px; background:transparent; border:1px solid rgba(255,255,255,0.05); border-radius:12px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; transition:all 0.2s;">
                  <div><div style="font-weight:700; font-size:14px;">Fiat Egea</div><div style="font-size:10px; color:var(--text2);">34 OK 321</div><div style="font-size:10px; color:var(--text2); margin-top:4px;">Sinan Aslan</div></div>
                  <div style="display:flex; align-items:center; gap:4px; font-weight:700; font-size:14px;"><i class="ph ph-gas-pump"></i> 52%</div>
                </div>
                <div class="map-vehicle-card" onclick="showMapDetail('egea2')" style="padding:16px; border:1px solid rgba(255,255,255,0.05); border-radius:12px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; transition:all 0.2s;">
                  <div><div style="font-weight:700; font-size:14px;">Fiat Egea</div><div style="font-size:10px; color:var(--text2);">34 OK 322</div><div style="font-size:10px; color:var(--text2); margin-top:4px;">Hasan Öztürk</div></div>
                  <div style="display:flex; align-items:center; gap:4px; font-weight:700; font-size:14px;"><i class="ph ph-gas-pump"></i> 89%</div>
                </div>
                <div class="map-vehicle-card" onclick="showMapDetail('clio1')" style="padding:16px; border:1px solid rgba(255,255,255,0.05); border-radius:12px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; transition:all 0.2s;">
                  <div><div style="font-weight:700; font-size:14px;">Renault Clio</div><div style="font-size:10px; color:var(--text2);">34 OK 323</div><div style="font-size:10px; color:var(--text2); margin-top:4px;">Erdem Cihan</div></div>
                  <div style="display:flex; align-items:center; gap:4px; font-weight:700; font-size:14px;"><i class="ph ph-gas-pump"></i> 78%</div>
                </div>
                <div class="map-vehicle-card" onclick="showMapDetail('megane1')" style="padding:16px; border:1px solid rgba(255,255,255,0.05); border-radius:12px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; transition:all 0.2s;">
                  <div><div style="font-weight:700; font-size:14px;">Renault Megane</div><div style="font-size:10px; color:var(--text2);">34 OK 512</div><div style="font-size:10px; color:var(--text2); margin-top:4px;">Ali Yılmaz</div></div>
                  <div style="display:flex; align-items:center; gap:4px; font-weight:700; font-size:14px;"><i class="ph ph-gas-pump"></i> 34%</div>
                </div>
                <div class="map-vehicle-card" onclick="showMapDetail('corolla1')" style="padding:16px; border:1px solid rgba(255,255,255,0.05); border-radius:12px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; transition:all 0.2s;">
                  <div><div style="font-weight:700; font-size:14px;">Toyota Corolla</div><div style="font-size:10px; color:var(--text2);">34 OK 633</div><div style="font-size:10px; color:var(--text2); margin-top:4px;">Veli Demir</div></div>
                  <div style="display:flex; align-items:center; gap:4px; font-weight:700; font-size:14px;"><i class="ph ph-gas-pump"></i> 91%</div>
                </div>
              </div>
              
              <div style="flex:1; background:url('/assets/images/general/istanbul_map.png') center/cover; border-radius:12px; position:relative; overflow:hidden; border: 1px solid rgba(255,255,255,0.05);">
                  <div style="position:absolute; inset:0; background:rgba(0,0,0,0.3); border-radius:12px;"></div>
                  <div class="map-marker" onclick="showMapDetail('egea1')" style="position:absolute; top:45%; left:48%; cursor:pointer;"><div style="width:16px; height:16px; background:var(--accent); border-radius:50%; border:2px solid #000; box-shadow:0 0 10px var(--accent);"></div></div>
                  <div class="map-marker" onclick="showMapDetail('egea2')" style="position:absolute; top:35%; left:55%; cursor:pointer;"><div style="width:12px; height:12px; background:var(--accent); border-radius:50%; border:2px solid #000;"></div></div>
                  <div class="map-marker" onclick="showMapDetail('clio1')" style="position:absolute; top:58%; left:42%; cursor:pointer;"><div style="width:12px; height:12px; background:var(--danger); border-radius:50%; border:2px solid #000; box-shadow:0 0 10px var(--danger);"></div></div>
                  <div class="map-marker" onclick="showMapDetail('megane1')" style="position:absolute; top:28%; left:38%; cursor:pointer;"><div style="width:12px; height:12px; background:var(--accent); border-radius:50%; border:2px solid #000;"></div></div>
                  <div class="map-marker" onclick="showMapDetail('corolla1')" style="position:absolute; top:50%; left:65%; cursor:pointer;"><div style="width:12px; height:12px; background:var(--accent); border-radius:50%; border:2px solid #000;"></div></div>
                  <div style="position:absolute; top:65%; left:75%;"><div style="width:10px; height:10px; background:var(--accent); border-radius:50%; border:2px solid #000; opacity:0.5;"></div></div>
                  <div style="position:absolute; top:20%; left:50%;"><div style="width:10px; height:10px; background:var(--accent); border-radius:50%; border:2px solid #000; opacity:0.5;"></div></div>
                  <div style="position:absolute; top:40%; left:30%;"><div style="width:10px; height:10px; background:var(--accent); border-radius:50%; border:2px solid #000; opacity:0.5;"></div></div>

                  <!-- Detail Panel with Telemetry & Car Photo -->
                  <div id="map-detail-panel" class="dark-scroll" style="position:absolute; right:16px; top:16px; bottom:16px; width:280px; background:rgba(10,10,10,0.95); backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:16px; display:none; flex-direction:column; z-index:10; overflow-y:auto;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.1);">
                      <div><h4 id="md-model" style="font-size:14px; font-weight:800; color:var(--accent);">Fiat Egea</h4><div id="md-plate" style="font-size:11px; font-family:monospace; color:var(--text2); margin-top:2px;">34 OK 321</div></div>
                      <i class="ph ph-x" style="cursor:pointer; color:var(--text2);" onclick="closeMapDetail()"></i>
                    </div>
                    
                    <!-- Car Photo -->
                    <div style="margin-bottom:12px; border-radius:8px; overflow:hidden; border:1px solid rgba(255,255,255,0.05);">
                      <img id="md-carphoto" src="/assets/images/general/car_egea.png" style="width:100%; height:80px; object-fit:cover;">
                    </div>
                    
                    <div style="display:flex; flex-direction:column; gap:12px; font-size:12px;">
                      <div style="display:flex; justify-content:space-between;"><span style="color:var(--text2);">Sürücü:</span><span id="md-driver" style="font-weight:700;">Sinan Aslan</span></div>
                      <div style="display:flex; justify-content:space-between;"><span style="color:var(--text2);">Durum:</span><span id="md-status" style="padding:4px 8px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:4px;font-weight:700;font-size:10px;">Sorunsuz</span></div>
                      
                      <div id="md-fault-container" style="display:none; padding:8px; background:rgba(255,68,68,0.1); border-radius:8px;">
                        <span style="color:var(--danger); display:block; margin-bottom:4px; font-weight:700;"><i class="ph-fill ph-warning-circle"></i> Arıza</span>
                        <span id="md-fault" style="color:#fff; font-weight:600; font-size:11px;">-</span>
                      </div>
                      
                      <h5 style="font-size:10px; font-weight:700; color:var(--text2); margin-top:4px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:4px;">TELEMETRİ</h5>
                      
                      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <div style="background:rgba(255,255,255,0.02); padding:6px; border-radius:6px; text-align:center;">
                          <div style="font-size:9px; color:var(--text2);">Motor Sıcaklığı</div>
                          <div id="md-temp" style="font-size:13px; font-weight:800; margin-top:2px;">92°C</div>
                        </div>
                        <div style="background:rgba(255,255,255,0.02); padding:6px; border-radius:6px; text-align:center;">
                          <div style="font-size:9px; color:var(--text2);">Anlık Hız</div>
                          <div id="md-speed" style="font-size:13px; font-weight:800; margin-top:2px;">74 km/s</div>
                        </div>
                        <div style="background:rgba(255,255,255,0.02); padding:6px; border-radius:6px; text-align:center;">
                          <div style="font-size:9px; color:var(--text2);">Ort. Hız</div>
                          <div id="md-avgspeed" style="font-size:13px; font-weight:800; margin-top:2px;">42 km/s</div>
                        </div>
                        <div style="background:rgba(255,255,255,0.02); padding:6px; border-radius:6px; text-align:center;">
                          <div style="font-size:9px; color:var(--text2);">Günlük Rölanti</div>
                          <div id="md-idle" style="font-size:13px; font-weight:800; color:var(--danger); margin-top:2px;">18 Dk</div>
                        </div>
                      </div>
                      
                      <div style="background:rgba(255,234,0,0.05); padding:8px; border-radius:6px;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                          <span style="font-size:10px; font-weight:700;">Viraj Risk Oranı (AI)</span>
                          <span id="md-risk" style="font-size:10px; font-weight:800; color:var(--accent);">%14</span>
                        </div>
                        <div style="width:100%; height:3px; background:#222; border-radius:2px;"><div id="md-risk-bar" style="width:14%; height:100%; background:var(--accent); border-radius:2px;"></div></div>
                      </div>
                      
                      <div style="display:flex; justify-content:space-between;"><span style="color:var(--text2);">Sonraki Bakım:</span><span id="md-maintenance" style="font-weight:700; font-size:11px;">12 Ekim 2026</span></div>
                      
                      <button class="btn btn-ghost" style="width:100%; padding:6px; font-size:10px; justify-content:center; margin-top:4px;"><i class="ph ph-chat-centered-text"></i> Sürücüye Mesaj</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div class="bento-item" style="padding: 24px; display:flex; flex-direction:column;">
            <h3 style="font-size:18px; font-weight:700; margin-bottom:24px;">Ortalama Filo Sağlık Skoru</h3>
            <div style="display:flex; justify-content:center; align-items:center; margin-bottom:24px;">
              <div style="position:relative; width:140px; height:140px;">
                <svg width="140" height="140" viewBox="0 0 140 140" style="transform:rotate(-90deg);">
                  <circle cx="70" cy="70" r="60" fill="none" stroke="#222" stroke-width="12"></circle>
                  <circle cx="70" cy="70" r="60" fill="none" stroke="#00FF88" stroke-width="12" stroke-dasharray="377" stroke-dashoffset="67" style="stroke-linecap:round;"></circle>
                </svg>
                <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-size:32px; font-weight:800; color:#00FF88;">%82</div>
              </div>
            </div>
            <div style="text-align:center; margin-bottom:24px;">
              <div style="font-size:16px; font-weight:700; color:#00FF88;">Her Şey Mükemmel</div>
              <div style="font-size:12px; color:var(--text2);">Araçlarınızın genel durumu iyi</div>
            </div>
            <div>
              <div style="display:flex; align-items:center; gap:8px; font-size:13px; font-weight:700; margin-bottom:12px;"><i class="ph-fill ph-warning" style="color:var(--accent);"></i> Ortalamayı Düşüren Araçlar</div>
              <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.05); margin-bottom:12px;">
                <div><div style="font-size:12px; font-weight:700;">Fiat Egea — 34 OK 762</div><div style="font-size:10px; color:var(--text2);">Kritik: Fren balatası yıpranması %80</div></div>
                <div style="width:32px; height:32px; border-radius:50%; border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:700; color:var(--accent);">%50</div>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div><div style="font-size:12px; font-weight:700;">Renault Clio — 34 OK 862</div><div style="font-size:10px; color:var(--text2);">Kritik: Yağ Değişimi Gerekli</div></div>
                <div style="width:32px; height:32px; border-radius:50%; border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:700; color:var(--accent);">%65</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ARAÇLAR TAB -->
      <section id="tab-araclar" class="filo-tab-content" style="display:none;">
        <div style="display: flex; flex-direction:column; gap:24px;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap:16px;">
            <div style="flex:1; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 12px 24px; display: flex; align-items: center; gap: 16px;">
              <i class="ph ph-magnifying-glass" style="font-size: 20px; color: var(--text2);"></i>
              <input type="text" id="carSearchInput" onkeyup="filterCars()" placeholder="Araç, plaka veya sürücü ile ara" style="background: transparent; border: none; color: #fff; width: 100%; outline: none; font-size: 14px;">
            </div>
            <select class="dark-select" id="carStatusFilter" onchange="filterCars()" style="padding: 12px 16px; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; font-size: 13px; outline:none; cursor:pointer;">
              <option value="all">Tüm Durumlar</option><option value="Aktif">Aktif</option><option value="Pasif">Pasif</option>
            </select>
          </div>
          <!-- Vehicle Filter Chips -->
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="vehicle-filter-btn active" onclick="filterVehicleType(this,'all')">Tüm Araçlar (22)</button>
            <button class="vehicle-filter-btn" onclick="filterVehicleType(this,'hareketli')"><i class="ph ph-car" style="margin-right:4px;"></i>Hareketli (5)</button>
            <button class="vehicle-filter-btn" onclick="filterVehicleType(this,'duran')"><i class="ph ph-pause" style="margin-right:4px;"></i>Duran (8)</button>
            <button class="vehicle-filter-btn" onclick="filterVehicleType(this,'rolanti')"><i class="ph ph-hourglass" style="margin-right:4px;"></i>Rölantide (3)</button>
            <button class="vehicle-filter-btn" onclick="filterVehicleType(this,'acil')"><i class="ph ph-warning" style="margin-right:4px;"></i>Acil Durum (1)</button>
            <button class="vehicle-filter-btn" onclick="filterVehicleType(this,'gps')"><i class="ph ph-satellite" style="margin-right:4px;"></i>GPS Yok (2)</button>
            <button class="vehicle-filter-btn" onclick="filterVehicleType(this,'cekilen')"><i class="ph ph-truck" style="margin-right:4px;"></i>Çekilen (1)</button>
            <button class="vehicle-filter-btn" onclick="filterVehicleType(this,'stok')"><i class="ph ph-warehouse" style="margin-right:4px;"></i>Stoktaki Araçlar (1)</button>
            <button class="vehicle-filter-btn" onclick="filterVehicleType(this,'arizali')"><i class="ph ph-wrench" style="margin-right:4px;"></i>Arızalı (1)</button>
          </div>
          <div class="bento-item" style="padding: 0; overflow: hidden;">
            <table style="width: 100%; text-align: left; border-collapse: collapse;" id="carsTable">
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 13px; color:var(--text2);">
                <th style="padding: 20px 24px; font-weight: 500;">Araç ID</th><th style="padding: 20px 16px; font-weight: 500;">Durum</th><th style="padding: 20px 16px; font-weight: 500;">Konum</th><th style="padding: 20px 16px; font-weight: 500;">Sürücü</th><th style="padding: 20px 16px; font-weight: 500;">Hız</th><th style="padding: 20px 16px; font-weight: 500;">Sürüş Puanı</th>
              </tr>
              <tr class="car-row" data-status="Aktif" onclick="openVehicleDetail('egea','Fiat Egea','34 OK 322','Hasan Öztürk','Aktif','23','89','88','2450')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px; cursor:pointer;"><td style="padding:16px 24px;"><div style="font-weight:700;font-size:14px;">Fiat Egea</div><div style="font-size:10px;color:var(--text2);margin-top:4px;">34 OK 322</div></td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:6px;font-weight:700;font-size:11px;">Aktif</span></td><td style="padding:16px;color:var(--text2);">Arnavutköy</td><td style="padding:16px;font-weight:600;">Hasan Öztürk</td><td style="padding:16px;color:var(--text2);">23 km/sa</td><td style="padding:16px;"><span style="font-weight:800;color:var(--accent);">98</span></td></tr>
              <tr class="car-row" data-status="Pasif" onclick="openVehicleDetail('clio','Renault Clio','34 OK 323','Sinan Aktaş','Pasif','0','45','80','0')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px; cursor:pointer;"><td style="padding:16px 24px;"><div style="font-weight:700;font-size:14px;">Renault Clio</div><div style="font-size:10px;color:var(--text2);margin-top:4px;">34 OK 323</div></td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(255,255,255,0.05);color:var(--text2);border-radius:6px;font-weight:700;font-size:11px;">Pasif</span></td><td style="padding:16px;color:var(--text2);">Maslak</td><td style="padding:16px;font-weight:600;">Sinan Aktaş</td><td style="padding:16px;color:var(--text2);">0 km/sa</td><td style="padding:16px;"><span style="font-weight:800;color:var(--accent);">96</span></td></tr>
              <tr class="car-row" data-status="Aktif" onclick="openVehicleDetail('egea','Fiat Egea','34 OK 324','Erdem Cihan','Aktif','72','60','90','2100')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px; cursor:pointer;"><td style="padding:16px 24px;"><div style="font-weight:700;font-size:14px;">Fiat Egea</div><div style="font-size:10px;color:var(--text2);margin-top:4px;">34 OK 324</div></td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:6px;font-weight:700;font-size:11px;">Aktif</span></td><td style="padding:16px;color:var(--text2);">Maslak</td><td style="padding:16px;font-weight:600;">Erdem Cihan</td><td style="padding:16px;color:var(--text2);">72 km/sa</td><td style="padding:16px;"><span style="font-weight:800;color:#fff;">92</span></td></tr>
              <tr class="car-row" data-status="Aktif" onclick="openVehicleDetail('egea','Fiat Egea','34 OK 325','Deniz Dağlar','Aktif','34','78','85','1800')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px; cursor:pointer;"><td style="padding:16px 24px;"><div style="font-weight:700;font-size:14px;">Fiat Egea</div><div style="font-size:10px;color:var(--text2);margin-top:4px;">34 OK 325</div></td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:6px;font-weight:700;font-size:11px;">Aktif</span></td><td style="padding:16px;color:var(--text2);">Bebek</td><td style="padding:16px;font-weight:600;">Deniz Dağlar</td><td style="padding:16px;color:var(--text2);">34 km/sa</td><td style="padding:16px;"><span style="font-weight:800;color:#fff;">89</span></td></tr>
              <tr class="car-row" data-status="Aktif" onclick="openVehicleDetail('megane','Renault Megane','34 OK 512','Ali Yılmaz','Aktif','45','50','90','2200')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px; cursor:pointer;"><td style="padding:16px 24px;"><div style="font-weight:700;font-size:14px;">Renault Megane</div><div style="font-size:10px;color:var(--text2);margin-top:4px;">34 OK 512</div></td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:6px;font-weight:700;font-size:11px;">Aktif</span></td><td style="padding:16px;color:var(--text2);">Şişli</td><td style="padding:16px;font-weight:600;">Ali Yılmaz</td><td style="padding:16px;color:var(--text2);">45 km/sa</td><td style="padding:16px;"><span style="font-weight:800;color:#fff;">85</span></td></tr>
              <tr class="car-row" data-status="Aktif" onclick="openVehicleDetail('corolla','Toyota Corolla','34 OK 633','Veli Demir','Aktif','62','30','90','2400')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px; cursor:pointer;"><td style="padding:16px 24px;"><div style="font-weight:700;font-size:14px;">Toyota Corolla</div><div style="font-size:10px;color:var(--text2);margin-top:4px;">34 OK 633</div></td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:6px;font-weight:700;font-size:11px;">Aktif</span></td><td style="padding:16px;color:var(--text2);">Kadıköy</td><td style="padding:16px;font-weight:600;">Veli Demir</td><td style="padding:16px;color:var(--text2);">62 km/sa</td><td style="padding:16px;"><span style="font-weight:800;color:#fff;">82</span></td></tr>
              <tr class="car-row" data-status="Çekilen" onclick="openVehicleDetail('transit','Ford Transit','34 OK 999','-','Çekilen','0','10','20','0')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px; cursor:pointer;"><td style="padding:16px 24px;"><div style="font-weight:700;font-size:14px;">Ford Transit</div><div style="font-size:10px;color:var(--text2);margin-top:4px;">34 OK 999</div></td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(255,165,0,0.1);color:orange;border-radius:6px;font-weight:700;font-size:11px;">Çekilen</span></td><td style="padding:16px;color:var(--text2);">E-5 Karayolu</td><td style="padding:16px;font-weight:600;">-</td><td style="padding:16px;color:var(--text2);">0 km/sa</td><td style="padding:16px;"><span style="font-weight:800;color:var(--text2);">N/A</span></td></tr>
              <tr class="car-row" data-status="Stok" onclick="openVehicleDetail('3008','Peugeot 3008','34 OK 888','-','Stok','0','100','20','0')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px; cursor:pointer;"><td style="padding:16px 24px;"><div style="font-weight:700;font-size:14px;">Peugeot 3008</div><div style="font-size:10px;color:var(--text2);margin-top:4px;">34 OK 888</div></td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(255,255,255,0.1);color:#ccc;border-radius:6px;font-weight:700;font-size:11px;">Stoktaki Araç</span></td><td style="padding:16px;color:var(--text2);">Merkez Garaj</td><td style="padding:16px;font-weight:600;">-</td><td style="padding:16px;color:var(--text2);">0 km/sa</td><td style="padding:16px;"><span style="font-weight:800;color:var(--text2);">N/A</span></td></tr>
              <tr class="car-row" data-status="Arızalı" onclick="openVehicleDetail('megane','Renault Megane','34 OK 777','-','Arızalı','0','0','0','0')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px; cursor:pointer;"><td style="padding:16px 24px;"><div style="font-weight:700;font-size:14px;">Renault Megane</div><div style="font-size:10px;color:var(--text2);margin-top:4px;">34 OK 777</div></td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(255,68,68,0.1);color:var(--danger);border-radius:6px;font-weight:700;font-size:11px;">Arızalı</span></td><td style="padding:16px;color:var(--text2);">Maslak Oto Sanayi</td><td style="padding:16px;font-weight:600;">-</td><td style="padding:16px;color:var(--text2);">0 km/sa</td><td style="padding:16px;"><span style="font-weight:800;color:var(--text2);">N/A</span></td></tr>
            </table>
          </div>
        </div>
      </section>

      <!-- RAPORLAR TAB -->
      <section id="tab-raporlar" class="filo-tab-content" style="display:none;">
        <div style="display:flex; flex-direction:column; gap:24px;">
          <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:24px;">
            <div class="bento-item kpi-card" onclick="openModal('kpiGiderModal')" style="padding:24px;"><div style="font-size:12px;color:var(--text2);margin-bottom:8px;">Toplam Filo Gideri (Aylık)</div><div style="font-size:28px;font-weight:800;color:#fff;">₺342.500</div><div style="font-size:12px;color:#00FF88;margin-top:8px;"><i class="ph-fill ph-trend-down"></i> Geçen aya göre %4 düşüş</div></div>
            <div class="bento-item kpi-card" onclick="openModal('kpiKurtarilanModal')" style="padding:24px;"><div style="font-size:12px;color:var(--text2);margin-bottom:8px;">Kurtarılan Olası Arıza Maliyeti</div><div style="font-size:28px;font-weight:800;color:var(--accent);">₺86.400</div><div style="font-size:12px;color:var(--text2);margin-top:8px;">Preditech AI ile önlendi</div></div>
            <div class="bento-item kpi-card" onclick="openModal('kpiRolantiModal')" style="padding:24px;"><div style="font-size:12px;color:var(--text2);margin-bottom:8px;">Ortalama Rölanti Süresi</div><div style="font-size:28px;font-weight:800;color:#fff;">12 Dk</div><div style="font-size:12px;color:var(--danger);margin-top:8px;"><i class="ph-fill ph-trend-up"></i> Geçen aya göre %2 artış</div></div>
            <div class="bento-item kpi-card" onclick="openModal('kpiKritikModal')" style="padding:24px;"><div style="font-size:12px;color:var(--text2);margin-bottom:8px;">Aktif Kritik Uyarılar</div><div style="font-size:28px;font-weight:800;color:var(--danger);">3</div><div style="font-size:12px;color:var(--text2);margin-top:8px;">Acil müdahale bekleniyor</div></div>
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 24px;">
            <div class="bento-item" style="padding:32px;">
              <h3 style="font-size:16px; font-weight:700; margin-bottom:24px;">Sürüş Tarzı İhlalleri (Bu Ay)</h3>
              <div style="display:flex; flex-direction:column; gap:16px;">
                <div class="violation-bar" onclick="showViolationDrilldown('anifrenleme')"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span>Ani Frenleme</span><span style="font-weight:700;">142 Kez</span></div><div style="width:100%;height:6px;background:#222;border-radius:3px;"><div style="width:70%;height:100%;background:var(--danger);border-radius:3px;"></div></div></div>
                <div class="violation-bar" onclick="showViolationDrilldown('serthizlanma')"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span>Sert Hızlanma</span><span style="font-weight:700;">85 Kez</span></div><div style="width:100%;height:6px;background:#222;border-radius:3px;"><div style="width:45%;height:100%;background:var(--accent);border-radius:3px;"></div></div></div>
                <div class="violation-bar" onclick="showViolationDrilldown('hizihlali')"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span>Hız Sınırı İhlali (>120 km/s)</span><span style="font-weight:700;">34 Kez</span></div><div style="width:100%;height:6px;background:#222;border-radius:3px;"><div style="width:25%;height:100%;background:var(--accent);border-radius:3px;"></div></div></div>
                <div class="violation-bar" onclick="showViolationDrilldown('viraj')"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span>Tehlikeli Viraj Girişi</span><span style="font-weight:700;">12 Kez</span></div><div style="width:100%;height:6px;background:#222;border-radius:3px;"><div style="width:10%;height:100%;background:var(--accent);border-radius:3px;"></div></div></div>
              </div>
            </div>

            <div class="bento-item kpi-card" onclick="openModal('mesaiModal')" style="padding:32px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
              <h3 style="font-size:16px; font-weight:700; margin-bottom:24px; align-self:flex-start;">Mesai İçi / Dışı Araç Kullanımı</h3>
              <div style="display:flex; align-items:center; gap:32px; width:100%;">
                <div style="position:relative; width:140px; height:140px;">
                  <svg width="140" height="140" viewBox="0 0 140 140" style="transform:rotate(-90deg);"><circle cx="70" cy="70" r="50" fill="none" stroke="var(--accent)" stroke-width="20" stroke-dasharray="314" stroke-dashoffset="60" style="stroke-linecap:round;"></circle><circle cx="70" cy="70" r="50" fill="none" stroke="#222" stroke-width="20" stroke-dasharray="314" stroke-dashoffset="280" style="stroke-linecap:round;"></circle></svg>
                </div>
                <div style="flex:1;">
                  <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;"><div style="width:12px;height:12px;background:var(--accent);border-radius:3px;"></div><div style="font-size:13px;"><span style="font-weight:700;">%85</span> Mesai İçi</div></div>
                  <div style="display:flex;align-items:center;gap:8px;"><div style="width:12px;height:12px;background:#222;border-radius:3px;"></div><div style="font-size:13px;color:var(--text2);"><span style="font-weight:700;color:#fff;">%15</span> Mesai Dışı İhlal</div></div>
                  <p style="font-size:10px;color:var(--text2);margin-top:16px;">Tıklayarak dışarıda kullananları görün.</p>
                </div>
              </div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 24px;">
            <!-- Arıza Sıklığı by Brand -->
            <div class="bento-item" style="padding:32px;">
              <h3 style="font-size:16px; font-weight:700; margin-bottom:24px;">Arıza Sıklığı (Marka/Model Bazlı)</h3>
              <div style="display:flex; flex-direction:column; gap:16px;">
                <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span>Renault Clio</span><span style="font-weight:700;color:var(--danger);">%38</span></div><div style="width:100%;height:6px;background:#222;border-radius:3px;"><div style="width:38%;height:100%;background:var(--danger);border-radius:3px;"></div></div></div>
                <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span>Fiat Egea</span><span style="font-weight:700;color:var(--accent);">%28</span></div><div style="width:100%;height:6px;background:#222;border-radius:3px;"><div style="width:28%;height:100%;background:var(--accent);border-radius:3px;"></div></div></div>
                <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span>Renault Megane</span><span style="font-weight:700;">%20</span></div><div style="width:100%;height:6px;background:#222;border-radius:3px;"><div style="width:20%;height:100%;background:rgba(255,255,255,0.3);border-radius:3px;"></div></div></div>
                <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span>Toyota Corolla</span><span style="font-weight:700;">%14</span></div><div style="width:100%;height:6px;background:#222;border-radius:3px;"><div style="width:14%;height:100%;background:rgba(255,255,255,0.2);border-radius:3px;"></div></div></div>
              </div>
            </div>
            
            <!-- Karbon Ayak İzi & Geofence -->
            <div style="display:flex; flex-direction:column; gap:24px;">
              <div class="bento-item" style="padding:24px;">
                <h3 style="font-size:16px;font-weight:700;margin-bottom:16px;">Filo Karbon Ayak İzi</h3>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;"><div style="font-size:36px;font-weight:800;color:#00FF88;">A+</div><i class="ph-fill ph-leaf" style="font-size:32px;color:#00FF88;"></i></div>
                <div style="font-size:12px;color:var(--text2);">Filonuz sektör ortalamasının %18 altında emisyon üretiyor.</div>
              </div>
              <div class="bento-item" id="geofence-container" style="padding:24px; flex:1; cursor:pointer; transition:all 0.3s;" onclick="openModal('geofenceModal')">
                <h3 style="font-size:16px;font-weight:700;margin-bottom:16px;">Bölge (Geofence) İhlalleri</h3>
                <div style="margin-bottom:12px;padding:12px;background:rgba(255,68,68,0.05);border-radius:8px;"><div style="display:flex;align-items:center;gap:8px;color:var(--danger);font-weight:700;font-size:12px;"><i class="ph-fill ph-map-pin-line"></i> İzinsiz Bölge Çıkışı</div><p style="font-size:11px;color:var(--text2);line-height:1.5;margin-top:4px;">34 OK 325 — Gebze yönü</p></div>
                <div style="padding:12px;background:rgba(255,234,0,0.03);border-radius:8px;"><div style="display:flex;align-items:center;gap:8px;color:var(--accent);font-weight:700;font-size:12px;"><i class="ph-fill ph-clock"></i> Müşteri Noktasında Gecikme</div><p style="font-size:11px;color:var(--text2);line-height:1.5;margin-top:4px;">34 OK 512 — 45 dk bekleme</p></div>
              </div>
            </div>
          </div>

          <!-- Yakıt Tüketim Trendi -->
          <div class="bento-item" style="padding:32px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
              <div>
                <h3 style="font-size:18px; font-weight:700; margin-bottom:4px;">Yakıt Tüketim Trendi (Aylık Kümülatif)</h3>
                <div style="font-size:14px; color:var(--text2);" id="fuelSubtitle">Birim: Litre</div>
              </div>
              <div class="fuel-toggle">
                <button class="fuel-toggle-btn active" onclick="setFuelUnit('litre', this)">Litre</button>
                <button class="fuel-toggle-btn" onclick="setFuelUnit('tl', this)">₺ TL</button>
              </div>
            </div>
            <div id="fuelHeadline" style="font-size:48px; font-weight:800; line-height:1; margin-bottom:8px;">-%14</div>
            <div id="fuelSubheadline" style="font-size:14px; color:#00FF88; margin-bottom:32px;">Geçen aya göre litre bazında -%8 tasarruf edildi</div>
            <div style="position:relative;">
              <div style="display:flex; justify-content:space-around; position:relative; height:200px; align-items:flex-end;">
                <div class="fuel-bar" data-litre="4800" data-tl="192000" style="display:flex; flex-direction:column; align-items:center; gap:4px; flex:1;">
                  <div id="fb-label-0" style="font-size:9px; font-weight:700; color:var(--text2);">4.800 L</div>
                  <div class="fb-bar" style="width:32px; height:160px; background:rgba(255,215,0,0.25); border-radius:4px 4px 0 0; transition:height 0.5s;"></div>
                  <div style="font-size:9px; color:var(--text2);">Ağu</div>
                </div>
                <div class="fuel-bar" data-litre="4600" data-tl="193200" style="display:flex; flex-direction:column; align-items:center; gap:4px; flex:1;">
                  <div id="fb-label-1" style="font-size:9px; font-weight:700; color:var(--text2);">4.600 L</div>
                  <div class="fb-bar" style="width:32px; height:153px; background:rgba(255,215,0,0.25); border-radius:4px 4px 0 0; transition:height 0.5s;"></div>
                  <div style="font-size:9px; color:var(--text2);">Eyl</div>
                </div>
                <div class="fuel-bar" data-litre="4500" data-tl="202500" style="display:flex; flex-direction:column; align-items:center; gap:4px; flex:1;">
                  <div id="fb-label-2" style="font-size:9px; font-weight:700; color:var(--text2);">4.500 L</div>
                  <div class="fb-bar" style="width:32px; height:150px; background:rgba(255,215,0,0.25); border-radius:4px 4px 0 0; transition:height 0.5s;"></div>
                  <div style="font-size:9px; color:var(--text2);">Eki</div>
                </div>
                <div class="fuel-bar" data-litre="4300" data-tl="210700" style="display:flex; flex-direction:column; align-items:center; gap:4px; flex:1;">
                  <div id="fb-label-3" style="font-size:9px; font-weight:700; color:var(--text2);">4.300 L</div>
                  <div class="fb-bar" style="width:32px; height:143px; background:rgba(255,215,0,0.25); border-radius:4px 4px 0 0; transition:height 0.5s;"></div>
                  <div style="font-size:9px; color:var(--text2);">Kas</div>
                </div>
                <div class="fuel-bar" data-litre="4200" data-tl="218400" style="display:flex; flex-direction:column; align-items:center; gap:4px; flex:1;">
                  <div id="fb-label-4" style="font-size:9px; font-weight:700; color:var(--text2);">4.200 L</div>
                  <div class="fb-bar" style="width:32px; height:140px; background:rgba(255,215,0,0.3); border-radius:4px 4px 0 0; transition:height 0.5s;"></div>
                  <div style="font-size:9px; color:var(--text2);">Ara</div>
                </div>
                <div class="fuel-bar" data-litre="4000" data-tl="224000" style="display:flex; flex-direction:column; align-items:center; gap:4px; flex:1;">
                  <div id="fb-label-5" style="font-size:9px; font-weight:700; color:var(--text2);">4.000 L</div>
                  <div class="fb-bar" style="width:32px; height:133px; background:rgba(255,215,0,0.3); border-radius:4px 4px 0 0; transition:height 0.5s;"></div>
                  <div style="font-size:9px; color:var(--text2);">Oca</div>
                </div>
                <div class="fuel-bar" data-litre="3800" data-tl="228000" style="display:flex; flex-direction:column; align-items:center; gap:4px; flex:1;">
                  <div id="fb-label-6" style="font-size:9px; font-weight:700; color:var(--text2);">3.800 L</div>
                  <div class="fb-bar" style="width:32px; height:127px; background:rgba(255,215,0,0.3); border-radius:4px 4px 0 0; transition:height 0.5s;"></div>
                  <div style="font-size:9px; color:var(--text2);">Şub</div>
                </div>
                <div class="fuel-bar" data-litre="3600" data-tl="237600" style="display:flex; flex-direction:column; align-items:center; gap:4px; flex:1;">
                  <div id="fb-label-7" style="font-size:9px; font-weight:700; color:var(--text2);">3.600 L</div>
                  <div class="fb-bar" style="width:32px; height:120px; background:rgba(255,215,0,0.35); border-radius:4px 4px 0 0; transition:height 0.5s;"></div>
                  <div style="font-size:9px; color:var(--text2);">Mar</div>
                </div>
                <div class="fuel-bar" data-litre="3500" data-tl="245000" style="display:flex; flex-direction:column; align-items:center; gap:4px; flex:1;">
                  <div id="fb-label-8" style="font-size:9px; font-weight:700; color:var(--text2);">3.500 L</div>
                  <div class="fb-bar" style="width:32px; height:117px; background:rgba(255,215,0,0.4); border-radius:4px 4px 0 0; transition:height 0.5s;"></div>
                  <div style="font-size:9px; color:var(--text2);">Nis</div>
                </div>
                <div class="fuel-bar" data-litre="3400" data-tl="255000" style="display:flex; flex-direction:column; align-items:center; gap:4px; flex:1;">
                  <div id="fb-label-9" style="font-size:9px; font-weight:700; color:var(--accent);">3.400 L</div>
                  <div class="fb-bar" style="width:32px; height:113px; background:var(--accent); border-radius:4px 4px 0 0; transition:height 0.5s;"></div>
                  <div style="font-size:9px; color:var(--accent); font-weight:700;">May</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SÜRÜCÜLER TAB -->
      <section id="tab-suruculer" class="filo-tab-content" style="display:none;">
        <div style="display: flex; flex-direction:column; gap:24px;">
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 12px 24px; display: flex; align-items: center; gap: 16px;">
            <i class="ph ph-magnifying-glass" style="font-size: 20px; color: var(--text2);"></i>
            <input type="text" id="driverSearchInput" onkeyup="filterDrivers()" placeholder="Sürücü adı ile ara" style="background: transparent; border: none; color: #fff; width: 100%; outline: none; font-size: 14px;">
          </div>
          <div class="bento-item" style="padding: 0; overflow: hidden;">
            <table style="width: 100%; text-align: left; border-collapse: collapse;" id="driversTable">
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 13px; color:var(--text2);">
                <th style="padding: 20px 24px; font-weight: 500;">Sürücü Adı</th><th style="padding: 20px 16px; font-weight: 500;">Durum</th><th style="padding: 20px 16px; font-weight: 500;">Sürüş Geçmişi</th><th style="padding: 20px 16px; font-weight: 500;">Sürüş Puanı</th><th style="padding: 20px 16px; font-weight: 500; text-align:center;">Aksiyon</th>
              </tr>
              <tr class="driver-row" onclick="openDriverProfile('Hasan Öztürk','98','1223','Sürüyor','Fiat Egea — 34 OK 322')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px;"><td style="padding:16px 24px;font-weight:700;">Hasan Öztürk</td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:6px;font-weight:700;font-size:11px;">Sürüyor</span></td><td style="padding:16px;color:var(--text2);">1223 Saat</td><td style="padding:16px;"><span style="font-weight:800;color:var(--accent);">98</span></td><td style="padding:16px;text-align:center;"><button class="btn btn-ghost" style="padding:4px 12px;font-size:11px;">Eğitim Ata</button></td></tr>
              <tr class="driver-row" onclick="openDriverProfile('Sinan Aktaş','96','1512','Bağlı Değil','Renault Clio — 34 OK 323')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px;"><td style="padding:16px 24px;font-weight:700;">Sinan Aktaş</td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(255,255,255,0.05);color:var(--text2);border-radius:6px;font-weight:700;font-size:11px;">Bağlı Değil</span></td><td style="padding:16px;color:var(--text2);">1512 Saat</td><td style="padding:16px;"><span style="font-weight:800;color:#fff;">96</span></td><td style="padding:16px;text-align:center;"><button class="btn btn-ghost" style="padding:4px 12px;font-size:11px;">Eğitim Ata</button></td></tr>
              <tr class="driver-row" onclick="openDriverProfile('Erdem Cihan','92','850','Sürüyor','Fiat Egea — 34 OK 324')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px;"><td style="padding:16px 24px;font-weight:700;">Erdem Cihan</td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:6px;font-weight:700;font-size:11px;">Sürüyor</span></td><td style="padding:16px;color:var(--text2);">850 Saat</td><td style="padding:16px;"><span style="font-weight:800;color:#fff;">92</span></td><td style="padding:16px;text-align:center;"><button class="btn btn-ghost" style="padding:4px 12px;font-size:11px;">Eğitim Ata</button></td></tr>
              <tr class="driver-row" onclick="openDriverProfile('Deniz Dağlar','89','2100','Sürüyor','Fiat Egea — 34 OK 325')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px;"><td style="padding:16px 24px;font-weight:700;">Deniz Dağlar</td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:6px;font-weight:700;font-size:11px;">Sürüyor</span></td><td style="padding:16px;color:var(--text2);">2100 Saat</td><td style="padding:16px;"><span style="font-weight:800;color:#fff;">89</span></td><td style="padding:16px;text-align:center;"><button class="btn btn-ghost" style="padding:4px 12px;font-size:11px;">Eğitim Ata</button></td></tr>
              <tr class="driver-row" onclick="openDriverProfile('Ali Yılmaz','85','430','Sürüyor','Renault Megane — 34 OK 512')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px;"><td style="padding:16px 24px;font-weight:700;">Ali Yılmaz</td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(0,255,136,0.1);color:#00FF88;border-radius:6px;font-weight:700;font-size:11px;">Sürüyor</span></td><td style="padding:16px;color:var(--text2);">430 Saat</td><td style="padding:16px;"><span style="font-weight:800;color:#fff;">85</span></td><td style="padding:16px;text-align:center;"><button class="btn btn-ghost" style="padding:4px 12px;font-size:11px;">Eğitim Ata</button></td></tr>
              <tr class="driver-row" onclick="openDriverProfile('Veli Demir','82','112','Bağlı Değil','Toyota Corolla — 34 OK 633')" style="border-bottom:1px solid rgba(255,255,255,0.02);font-size:13px;"><td style="padding:16px 24px;font-weight:700;">Veli Demir</td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(255,255,255,0.05);color:var(--text2);border-radius:6px;font-weight:700;font-size:11px;">Bağlı Değil</span></td><td style="padding:16px;color:var(--text2);">112 Saat</td><td style="padding:16px;"><span style="font-weight:800;color:#fff;">82</span></td><td style="padding:16px;text-align:center;"><button class="btn btn-ghost" style="padding:4px 12px;font-size:11px;">Eğitim Ata</button></td></tr>
            </table>
          </div>
        </div>
      </section>

      <!-- BAKIM YÖNETİMİ TAB -->
      <section id="tab-bakim" class="filo-tab-content" style="display:none;">
<!-- PLANLA MODAL -->
<div id="planlaModal" class="fleet-modal-overlay">
  <div class="fleet-modal" style="max-width: 500px;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
      <h3 style="font-size:18px; font-weight:700;">Bakım Planlama (Acil)</h3>
      <i class="ph ph-x" style="cursor:pointer; font-size:22px; color:var(--text2);" onclick="closeModal('planlaModal')"></i>
    </div>
    <div style="background:rgba(232, 255, 0, 0.05); border:1px solid rgba(232, 255, 0, 0.1); padding:16px; border-radius:12px; margin-bottom:20px;">
      <div style="display:flex; gap:12px; align-items:center;">
        <i class="ph-fill ph-sparkle" style="color:var(--accent); font-size:24px;"></i>
        <div>
          <div style="font-weight:700; font-size:14px; margin-bottom:4px;">Predicto Tahmini</div>
          <div style="font-size:12px; color:var(--text2);">Bu arıza için Maslak Oto Sanayi'deki <strong>Demirci Servis</strong> en uygun maliyeti (₺12.800) ve en yakın tarihi sunuyor.</div>
        </div>
      </div>
    </div>
    <div style="display:flex; gap:12px;">
      <button class="btn btn-ghost" style="flex:1; padding:10px; font-size:13px;" onclick="closeModal('planlaModal')">İptal</button>
      <button class="btn btn-primary" style="flex:1; padding:10px; font-size:13px; font-weight:700; color:#000;" onclick="alert('Bakım planlandı!'); closeModal('planlaModal')">Tavsiye Edilen Servise Planla</button>
    </div>
  </div>
</div>

<!-- AI DASHCAM GEÇMİŞ MODAL -->
<div id="dashcamModal" class="fleet-modal-overlay">
  <div class="fleet-modal fleet-modal-lg" style="padding:0; overflow:hidden;">
    <div style="padding:24px; border-bottom:1px solid rgba(255,255,255,0.05); display:flex; justify-content:space-between; align-items:center;">
      <h3 style="font-size:18px; font-weight:800; display:flex; align-items:center; gap:8px;">
        <i class="ph-fill ph-video-camera" style="color:var(--accent);"></i> AI Dashcam Kayıtları
      </h3>
      <div style="display:flex; gap:12px; align-items:center;">
        <input type="date" id="dashcamDate" style="background:#111; border:1px solid rgba(255,255,255,0.1); color:#fff; padding:6px 12px; border-radius:6px; outline:none; font-family:inherit; font-size:13px;" value="2026-05-25">
        <input type="time" id="dashcamTime" style="background:#111; border:1px solid rgba(255,255,255,0.1); color:#fff; padding:6px 12px; border-radius:6px; outline:none; font-family:inherit; font-size:13px;" value="09:12">
        <select class="dark-select" style="padding:6px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.1); font-size:13px; outline:none;">
          <option>Tüm Gün (Özet)</option>
          <option>İhlal Anları</option>
          <option>Kritik Olaylar</option>
        </select>
        <button class="btn btn-primary" style="padding:6px 16px; font-size:12px; font-weight:700; color:#000;" onclick="alert('Kayıtlar getiriliyor...')">Filtrele</button>
        <i class="ph ph-x" style="cursor:pointer; font-size:22px; color:var(--text2); margin-left:12px;" onclick="closeModal('dashcamModal')"></i>
      </div>
    </div>
    
    <div style="position:relative; background:#000; height:400px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
      <i class="ph ph-play-circle" style="font-size:64px; color:rgba(255,255,255,0.8); cursor:pointer;"></i>
      <div style="position:absolute; bottom:20px; left:24px; right:24px; display:flex; align-items:center; gap:16px;">
        <div style="font-size:11px; font-family:monospace;">09:12:44</div>
        <div style="flex:1; height:4px; background:rgba(255,255,255,0.2); border-radius:2px; position:relative; cursor:pointer;">
          <div style="position:absolute; left:0; top:0; height:100%; width:35%; background:var(--accent); border-radius:2px;"></div>
          <!-- Event markers -->
          <div style="position:absolute; left:20%; top:-2px; width:8px; height:8px; background:var(--danger); border-radius:50%; box-shadow:0 0 4px var(--danger);"></div>
          <div style="position:absolute; left:45%; top:-2px; width:8px; height:8px; background:#00FF88; border-radius:50%; box-shadow:0 0 4px #00FF88;"></div>
        </div>
        <div style="font-size:11px; font-family:monospace;">18:45:00</div>
      </div>
      <div style="position:absolute; top:20px; left:24px; display:flex; gap:8px;">
        <span style="padding:4px 8px; background:rgba(255,68,68,0.2); color:var(--danger); border-radius:4px; font-size:10px; font-weight:700;">Hız İhlali (20% Konumda)</span>
        <span style="padding:4px 8px; background:rgba(0,255,136,0.2); color:#00FF88; border-radius:4px; font-size:10px; font-weight:700;">Sürücü Dikkatli (45% Konumda)</span>
      </div>
    </div>
  </div>
</div>

        <div style="display:flex; flex-direction:column; gap:24px;">
          <h2 style="font-size:22px; font-weight:800;">Bakım Yönetimi</h2>
          <div style="display:grid; grid-template-columns: repeat(3,1fr); gap:24px;">
            <div class="bento-item" style="padding:24px; text-align:center;">
              <div style="font-size:36px; font-weight:800; color:var(--accent);">3</div>
              <div style="font-size:12px; color:var(--text2); margin-top:8px;">Planlanmış Bakım</div>
            </div>
            <div class="bento-item" style="padding:24px; text-align:center;">
              <div style="font-size:36px; font-weight:800; color:var(--danger);">1</div>
              <div style="font-size:12px; color:var(--text2); margin-top:8px;">Acil Servis</div>
            </div>
            <div class="bento-item" style="padding:24px; text-align:center;">
              <div style="font-size:36px; font-weight:800; color:#00FF88;">15</div>
              <div style="font-size:12px; color:var(--text2); margin-top:8px;">Tamamlanan (Bu Ay)</div>
            </div>
          </div>
          <div class="bento-item" style="padding:0; overflow:hidden;">
            <table style="width:100%; text-align:left; border-collapse:collapse;">
              <tr style="border-bottom:1px solid rgba(255,255,255,0.05); font-size:13px; color:var(--text2);">
                <th style="padding:20px 24px; font-weight:500;">Araç</th><th style="padding:20px 16px; font-weight:500;">Bakım Türü</th><th style="padding:20px 16px; font-weight:500;">Tarih</th><th style="padding:20px 16px; font-weight:500;">Durum</th><th style="padding:20px 16px; font-weight:500;">Maliyet</th><th style="padding:20px 16px; font-weight:500;">Aksiyon</th>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.02); font-size:13px; cursor:pointer;" onclick="openModal('planlaModal')">
                <td style="padding:16px 24px; font-weight:700;">Renault Clio — 34 OK 323</td><td style="padding:16px; color:var(--text2);">Eksantrik Mili Sensörü</td><td style="padding:16px; color:var(--text2);">28.05.2026</td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(255,68,68,0.1);color:var(--danger);border-radius:6px;font-weight:700;font-size:11px;">Acil</span></td><td style="padding:16px; font-weight:700;">₺12.800</td><td style="padding:16px;"><button class="btn btn-ghost" style="padding:4px 12px; font-size:11px;">Planla</button></td>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.02); font-size:13px;">
                <td style="padding:16px 24px; font-weight:700;">Fiat Egea — 34 OK 762</td><td style="padding:16px; color:var(--text2);">Fren Balatası Değişimi</td><td style="padding:16px; color:var(--text2);">01.06.2026</td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(255,234,0,0.1);color:var(--accent);border-radius:6px;font-weight:700;font-size:11px;">Planlandı</span></td><td style="padding:16px; font-weight:700;">₺4.200</td><td style="padding:16px;"><button class="btn btn-ghost" style="padding:4px 12px; font-size:11px; color:#00FF88; border:1px solid rgba(0,255,136,0.2);" onclick="alert('Arıza çözüldü olarak işaretlendi.')"><i class="ph ph-check"></i> Çözüldü</button></td>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.02); font-size:13px;">
                <td style="padding:16px 24px; font-weight:700;">Fiat Egea — 34 OK 322</td><td style="padding:16px; color:var(--text2);">Periyodik Yağ Değişimi</td><td style="padding:16px; color:var(--text2);">05.06.2026</td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(255,234,0,0.1);color:var(--accent);border-radius:6px;font-weight:700;font-size:11px;">Planlandı</span></td><td style="padding:16px; font-weight:700;">₺2.100</td><td style="padding:16px;"><button class="btn btn-ghost" style="padding:4px 12px; font-size:11px; color:#00FF88; border:1px solid rgba(0,255,136,0.2);" onclick="alert('Arıza çözüldü olarak işaretlendi.')"><i class="ph ph-check"></i> Çözüldü</button></td>
              </tr>
              <tr style="font-size:13px;">
                <td style="padding:16px 24px; font-weight:700;">Toyota Corolla — 34 OK 633</td><td style="padding:16px; color:var(--text2);">Lastik Rotasyonu</td><td style="padding:16px; color:var(--text2);">10.06.2026</td><td style="padding:16px;"><span style="padding:4px 12px;background:rgba(255,234,0,0.1);color:var(--accent);border-radius:6px;font-weight:700;font-size:11px;">Planlandı</span></td><td style="padding:16px; font-weight:700;">₺1.800</td><td style="padding:16px;"><button class="btn btn-ghost" style="padding:4px 12px; font-size:11px; color:#00FF88; border:1px solid rgba(0,255,136,0.2);" onclick="alert('Arıza çözüldü olarak işaretlendi.')"><i class="ph ph-check"></i> Çözüldü</button></td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <!-- BÖLGE / GEOFENCE TAB -->
      <section id="tab-bolgeler" class="filo-tab-content" style="display:none;">
        <div style="display:flex; flex-direction:column; gap:24px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h2 style="font-size:22px; font-weight:800;">Bölge / Geofence Yönetimi</h2>
            <button onclick="document.getElementById('newZoneForm').style.display=document.getElementById('newZoneForm').style.display==='none'?'block':'none'" class="btn btn-primary" style="padding:10px 20px; font-size:13px; font-weight:700; color:#000;"><i class="ph ph-plus"></i> Yeni Bölge Ekle</button>
          </div>
          <div id="newZoneForm" class="bento-item" style="padding:24px; display:none;">
            <h3 style="font-size:16px; font-weight:700; margin-bottom:16px;">Yeni Bölge Tanımla</h3>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; margin-bottom:16px;">
              <div>
                <label style="display:block; font-size:12px; color:var(--text2); margin-bottom:6px; font-weight:600;">Bölge Adı</label>
                <input type="text" placeholder="Örn: Depo Alanı" style="width:100%; padding:10px; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.1); border-radius:8px; color:#fff; outline:none; font-size:13px;">
              </div>
              <div>
                <label style="display:block; font-size:12px; color:var(--text2); margin-bottom:6px; font-weight:600;">Yarıçap (km)</label>
                <input type="number" value="5" style="width:100%; padding:10px; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.1); border-radius:8px; color:#fff; outline:none; font-size:13px;">
              </div>
              <div>
                <label style="display:block; font-size:12px; color:var(--text2); margin-bottom:6px; font-weight:600;">Bölge Türü</label>
                <select class="dark-select" style="width:100%; padding:10px; border:1px solid rgba(255,255,255,0.1); border-radius:8px; outline:none; font-size:13px;">
                  <option>İzin Verilen</option><option>Yasak Bölge</option>
                </select>
              </div>
            </div>
            <button onclick="alert('Bölge başarıyla tanımlandı!'); document.getElementById('newZoneForm').style.display='none';" class="btn btn-primary" style="padding:10px 24px; font-size:13px; font-weight:700; color:#000;">Bölgeyi Kaydet</button>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px;">
            <div class="bento-item" style="padding:24px;">
              <h3 style="font-size:16px; font-weight:700; margin-bottom:16px;">Tanımlı Bölgeler</h3>
              <div style="display:flex; flex-direction:column; gap:12px;">
                <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(255,255,255,0.02); border-radius:8px;">
                  <div><div style="font-weight:700; font-size:13px;">İstanbul İçi</div><div style="font-size:10px; color:var(--text2);">Yarıçap: Tüm İstanbul il sınırları</div></div>
                  <span style="padding:4px 8px; background:rgba(0,255,136,0.1); color:#00FF88; border-radius:4px; font-size:10px; font-weight:700;">Aktif</span>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(255,255,255,0.02); border-radius:8px;">
                  <div><div style="font-weight:700; font-size:13px;">Depo Alanı (Arnavutköy)</div><div style="font-size:10px; color:var(--text2);">Yarıçap: 2 km</div></div>
                  <span style="padding:4px 8px; background:rgba(0,255,136,0.1); color:#00FF88; border-radius:4px; font-size:10px; font-weight:700;">Aktif</span>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(255,255,255,0.02); border-radius:8px;">
                  <div><div style="font-weight:700; font-size:13px;">Yasak Bölge (Havalimanı)</div><div style="font-size:10px; color:var(--text2);">Yarıçap: 5 km</div></div>
                  <span style="padding:4px 8px; background:rgba(255,68,68,0.1); color:var(--danger); border-radius:4px; font-size:10px; font-weight:700;">Yasak</span>
                </div>
              </div>
            </div>
            <div class="bento-item" style="padding:24px;">
              <h3 style="font-size:16px; font-weight:700; margin-bottom:16px;">Son Bölge İhlalleri</h3>
              <div style="display:flex; flex-direction:column; gap:12px;">
                <div style="padding:12px; background:rgba(255,68,68,0.05); border-radius:8px;">
                  <div style="display:flex; align-items:center; gap:8px; color:var(--danger); font-weight:700; font-size:12px; margin-bottom:4px;"><i class="ph-fill ph-map-pin-line"></i> 34 OK 325 — İstanbul İçi bölgesinden çıkış</div>
                  <p style="font-size:11px; color:var(--text2);">26.05.2026, 14:32 — Gebze yönü, 12 km mesafe</p>
                </div>
                <div style="padding:12px; background:rgba(255,234,0,0.03); border-radius:8px;">
                  <div style="display:flex; align-items:center; gap:8px; color:var(--accent); font-weight:700; font-size:12px; margin-bottom:4px;"><i class="ph-fill ph-clock"></i> 34 OK 512 — Depo Alanı bölgesinde 45 dk bekleme</div>
                  <p style="font-size:11px; color:var(--text2);">26.05.2026, 10:15 — Araç yükleme molası olabilir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- METRİKLER TAB -->
      <!-- METRİKLER TAB -->
      <section id="tab-metrikler" class="filo-tab-content" style="display:none;">
        <!-- YouTube Studio Gelişmiş Mod Benzeri Tasarım -->
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:12px; margin-bottom:24px;">
          <h2 style="font-size:20px; font-weight:800; display:flex; align-items:center; gap:8px;">
            <i class="ph-fill ph-chart-line-up" style="color:var(--accent);"></i> Gelişmiş Metrikler
          </h2>
          <div style="font-size:12px; color:var(--text2);">Son 28 günde en çok ihlal yapan sürücüler</div>
        </div>

        <div style="display:flex; gap:24px; min-height:800px;">
          <!-- SOL MENÜ (Filtreler ve Kontroller) -->
          <div style="width:240px; display:flex; flex-direction:column; gap:24px; border-right:1px solid rgba(255,255,255,0.05); padding-right:24px;">
            <div>
              <div style="font-size:12px; font-weight:700; color:#fff; margin-bottom:8px;">Kontroller</div>
              <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:6px; padding:10px; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                <div style="width:16px; height:2px; background:var(--accent);"></div>
                <span style="font-size:12px; font-weight:600;">Preditech Filo</span>
              </div>
              <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:6px; padding:10px; cursor:pointer;" onclick="document.getElementById('adv-date-picker').style.display='block'">
                <div style="font-size:10px; color:var(--text2);" id="adv-date-text">28 Nis - 25 May 2026</div>
                <div style="font-size:12px; font-weight:600; display:flex; justify-content:space-between; align-items:center;">Son 28 gün <i class="ph ph-caret-down"></i></div>
              </div>
              <input type="date" id="adv-date-picker" style="display:none; background:#111; border:1px solid rgba(255,255,255,0.1); color:#fff; padding:8px; border-radius:6px; outline:none; font-family:inherit; font-size:12px; margin-top:8px; width:100%;" onchange="document.getElementById('adv-date-text').innerText = this.value + ' - Bugün'; updateAdvancedChart();">
            </div>

            <div>
              <div style="font-size:12px; font-weight:700; color:#fff; margin-bottom:8px;">Döküm</div>
              <select id="adv-breakdown-select" class="dark-select" style="width:100%; padding:10px; border-radius:6px; border:1px solid rgba(255,255,255,0.05); font-size:12px;" onchange="updateAdvancedAnalytics()">
                <option value="driver">Sürücü Bazlı</option>
                <option value="vehicle">Araç Bazlı</option>
                <option value="region">Bölge Bazlı</option>
              </select>
            </div>

            <div>
              <div style="font-size:12px; font-weight:700; color:#fff; margin-bottom:8px;">Metrikler</div>
              <select id="adv-metric-select" class="dark-select" style="width:100%; padding:10px; border-radius:6px; border:1px solid rgba(255,255,255,0.05); font-size:12px;" onchange="updateAdvancedChart()">
                <option value="fuel">Yakıt Tüketimi (Litre)</option>
                <option value="score">Sürüş Puanı</option>
                <option value="idle">Rölanti Süresi (Dk)</option>
                <option value="violations">İhlal Sayısı</option>
                <option value="smoke">İçilen Sigara Sayısı</option>
                <option value="crash">Kaza Sayısı</option>
                <option value="corner">Tehlikeli Viraj Sayısı</option>
              </select>
            </div>

            <div>
              <div style="font-size:12px; font-weight:700; color:#fff; margin-bottom:8px;">Filtre</div>
              <div style="display:flex; align-items:center; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:6px; padding:8px 10px;">
                <input type="text" placeholder="Filtre arayın" style="background:transparent; border:none; color:#fff; width:100%; font-size:12px; outline:none;">
              </div>
            </div>
          </div>

          <!-- SAĞ ALAN (Grafik ve Tablo) -->
          <div style="flex:1; display:flex; flex-direction:column; gap:24px;">
            <!-- Grafik Üst Menü -->
            <div style="display:flex; justify-content:flex-end; gap:12px;">
              <div style="display:flex; border:1px solid rgba(255,255,255,0.1); border-radius:6px; overflow:hidden;">
                <button style="padding:6px 12px; background:rgba(255,255,255,0.05); color:#fff; border:none; font-size:11px; display:flex; align-items:center; gap:6px; cursor:pointer;" onclick="setAdvChartType('line'); this.style.background='rgba(255,255,255,0.05)'; this.nextElementSibling.style.background='transparent';"><i class="ph ph-chart-line-up"></i> Çizgi grafik</button>
                <button style="padding:6px 12px; background:transparent; color:var(--text2); border:none; border-left:1px solid rgba(255,255,255,0.1); font-size:11px; display:flex; align-items:center; gap:6px; cursor:pointer;" onclick="setAdvChartType('bar'); this.style.background='rgba(255,255,255,0.05)'; this.previousElementSibling.style.background='transparent';"><i class="ph ph-chart-bar"></i> Çubuk grafik</button>
              </div>
              <select class="dark-select" style="padding:6px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.1); font-size:11px;">
                <option>Günlük</option>
                <option>Haftalık</option>
              </select>
            </div>

            <!-- CSS ÇİZGİ GRAFİĞİ -->
            <div style="position:relative; height:350px; background:transparent; display:flex; flex-direction:column; padding-bottom:30px;">
              <!-- Y Axis Labels -->
              <div style="position:absolute; left:0; top:0; height:calc(100% - 30px); display:flex; flex-direction:column; justify-content:space-between; font-size:10px; color:var(--text2); width:40px; text-align:right; padding-right:10px;">
                <span>1.800</span><span>1.200</span><span>600</span><span>0</span>
              </div>
              
              <!-- Grid Lines & Chart Area -->
              <div style="margin-left:40px; flex:1; position:relative; border-bottom:1px solid rgba(255,255,255,0.1);">
                <div style="position:absolute; top:33%; left:0; right:0; border-top:1px dashed rgba(255,255,255,0.05);"></div>
                <div style="position:absolute; top:66%; left:0; right:0; border-top:1px dashed rgba(255,255,255,0.05);"></div>
                
                <!-- SVG Lines -->
                <svg id="adv-svg-chart" width="100%" height="100%" viewBox="0 0 1000 320" preserveAspectRatio="none" style="position:absolute; bottom:0; left:0; overflow:visible;">
                  <!-- Hasan Öztürk (Sarı) -->
                  <polyline points="0,310 100,305 200,290 250,50 300,300 400,305 600,295 800,280 850,290 900,270 1000,285" fill="none" stroke="var(--accent)" stroke-width="2" vector-effect="non-scaling-stroke" />
                  <!-- Erdem Cihan (Mor) -->
                  <polyline points="0,315 200,312 400,310 600,305 800,315 850,310 900,50 950,300 1000,310" fill="none" stroke="#9d4edd" stroke-width="2" vector-effect="non-scaling-stroke" />
                  <!-- Deniz Dağlar (Yeşil) -->
                  <polyline points="0,318 300,318 600,315 700,310 800,318 900,315 950,40 1000,310" fill="none" stroke="#00FF88" stroke-width="2" vector-effect="non-scaling-stroke" />
                </svg>
              </div>
              
              <!-- X Axis Labels -->
              <div style="margin-left:40px; display:flex; justify-content:space-between; font-size:10px; color:var(--text2); margin-top:8px;">
                <span>28 Nis 2026</span><span>3 May 2026</span><span>7 May 2026</span><span>12 May 2026</span><span>16 May 2026</span><span>21 May 2026</span><span>25 May 2026</span>
              </div>
            </div>

            <!-- DETAYLI TABLO -->
            <div style="border:1px solid rgba(255,255,255,0.05); border-radius:8px; overflow:hidden;">
              <table style="width:100%; border-collapse:collapse; text-align:left; font-size:12px;">
                <thead id="adv-table-head" style="background:rgba(255,255,255,0.02); border-bottom:1px solid rgba(255,255,255,0.05);">
                  <tr>
                    <th style="padding:12px; width:40px;"></th>
                    <th style="padding:12px; font-weight:600; color:var(--text2);">Sürücü</th>
                    <th style="padding:12px; font-weight:600; color:var(--text2);">Yakıt (Litre)</th>
                    <th style="padding:12px; font-weight:600; color:var(--text2);">İhlal Sayısı</th>
                    <th style="padding:12px; font-weight:600; color:var(--text2);">Yasak Bölge</th>
                    <th style="padding:12px; font-weight:600; color:var(--text2);">Rölanti (Dk)</th>
                    <th style="padding:12px; font-weight:600; color:var(--text2);">Sürüş Puanı</th>
                  </tr>
                </thead>
                <tbody id="adv-table-body">
                  <tr style="border-bottom:1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);">
                    <td style="padding:12px;"><input type="checkbox" checked style="accent-color:var(--text2);"></td>
                    <td style="padding:12px; font-weight:700;">Toplam</td>
                    <td style="padding:12px; font-weight:700;">9.005</td>
                    <td style="padding:12px; font-weight:700;">27</td>
                    <td style="padding:12px; font-weight:700;">4</td>
                    <td style="padding:12px; font-weight:700;">10.400</td>
                    <td style="padding:12px; font-weight:700;">Ort. 86</td>
                  </tr>
                  <tr style="border-bottom:1px solid rgba(255,255,255,0.02); transition:background 0.2s; cursor:pointer;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">
                    <td style="padding:12px; display:flex; align-items:center; gap:8px;">
                      <input type="checkbox" checked style="accent-color:var(--accent);">
                      <div style="width:12px; height:12px; background:var(--accent); border-radius:2px;"></div>
                    </td>
                    <td style="padding:12px; font-weight:600;">Hasan Öztürk (Fiat Egea)</td>
                    <td style="padding:12px;">2.583 <span style="color:var(--danger); font-size:10px;">%14.0</span></td>
                    <td style="padding:12px;">8 <span style="color:var(--text2); font-size:10px;">%29.7</span></td>
                    <td style="padding:12px;">0 <span style="color:var(--text2); font-size:10px;">%0.0</span></td>
                    <td style="padding:12px;">5.556</td>
                    <td style="padding:12px; color:#00FF88;">98</td>
                  </tr>
                  <tr style="border-bottom:1px solid rgba(255,255,255,0.02); transition:background 0.2s; cursor:pointer;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">
                    <td style="padding:12px; display:flex; align-items:center; gap:8px;">
                      <input type="checkbox" checked style="accent-color:#9d4edd;">
                      <div style="width:12px; height:12px; background:#9d4edd; border-radius:2px;"></div>
                    </td>
                    <td style="padding:12px; font-weight:600;">Erdem Cihan (Fiat Egea)</td>
                    <td style="padding:12px;">1.799 <span style="color:var(--text2); font-size:10px;">%10.5</span></td>
                    <td style="padding:12px;">4 <span style="color:var(--text2); font-size:10px;">%15.0</span></td>
                    <td style="padding:12px;">0 <span style="color:var(--text2); font-size:10px;">%0.0</span></td>
                    <td style="padding:12px;">136</td>
                    <td style="padding:12px; color:#00FF88;">92</td>
                  </tr>
                  <tr style="border-bottom:1px solid rgba(255,255,255,0.02); transition:background 0.2s; cursor:pointer;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">
                    <td style="padding:12px; display:flex; align-items:center; gap:8px;">
                      <input type="checkbox" checked style="accent-color:#00FF88;">
                      <div style="width:12px; height:12px; background:#00FF88; border-radius:2px;"></div>
                    </td>
                    <td style="padding:12px; font-weight:600;">Deniz Dağlar (Fiat Egea)</td>
                    <td style="padding:12px;">1.742 <span style="color:var(--text2); font-size:10px;">%10.3</span></td>
                    <td style="padding:12px;">4 <span style="color:var(--text2); font-size:10px;">%17.0</span></td>
                    <td style="padding:12px;">0 <span style="color:var(--text2); font-size:10px;">%0.0</span></td>
                    <td style="padding:12px;">240</td>
                    <td style="padding:12px; color:#00FF88;">89</td>
                  </tr>
                  <tr style="border-bottom:1px solid rgba(255,255,255,0.02); transition:background 0.2s; cursor:pointer;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">
                    <td style="padding:12px; display:flex; align-items:center; gap:8px;">
                      <input type="checkbox" style="accent-color:#3a86ff;">
                      <div style="width:12px; height:12px; background:rgba(255,255,255,0.2); border-radius:2px;"></div>
                    </td>
                    <td style="padding:12px; font-weight:600;">Ali Yılmaz (Renault Megane)</td>
                    <td style="padding:12px;">1.733 <span style="color:var(--text2); font-size:10px;">%10.2</span></td>
                    <td style="padding:12px;">4 <span style="color:var(--text2); font-size:10px;">%10.0</span></td>
                    <td style="padding:12px;">0 <span style="color:var(--text2); font-size:10px;">%0.0</span></td>
                    <td style="padding:12px;">320</td>
                    <td style="padding:12px; color:var(--text2);">85</td>
                  </tr>
                  <tr style="border-bottom:1px solid rgba(255,255,255,0.02); transition:background 0.2s; cursor:pointer;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">
                    <td style="padding:12px; display:flex; align-items:center; gap:8px;">
                      <input type="checkbox" style="accent-color:#3a86ff;">
                      <div style="width:12px; height:12px; background:rgba(255,255,255,0.2); border-radius:2px;"></div>
                    </td>
                    <td style="padding:12px; font-weight:600;">Sinan Aktaş (Renault Clio)</td>
                    <td style="padding:12px;">451 <span style="color:var(--text2); font-size:10px;">%5.0</span></td>
                    <td style="padding:12px;">1 <span style="color:var(--text2); font-size:10px;">%5.1</span></td>
                    <td style="padding:12px;">1 <span style="color:var(--danger); font-size:10px;">%25.0</span></td>
                    <td style="padding:12px;">1.020</td>
                    <td style="padding:12px; color:var(--accent);">96</td>
                  </tr>
                  <tr style="border-bottom:none; transition:background 0.2s; cursor:pointer;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">
                    <td style="padding:12px; display:flex; align-items:center; gap:8px;">
                      <input type="checkbox" style="accent-color:#3a86ff;">
                      <div style="width:12px; height:12px; background:rgba(255,255,255,0.2); border-radius:2px;"></div>
                    </td>
                    <td style="padding:12px; font-weight:600;">Veli Demir (Toyota Corolla)</td>
                    <td style="padding:12px;">214 <span style="color:var(--text2); font-size:10px;">%2.4</span></td>
                    <td style="padding:12px;">0 <span style="color:var(--text2); font-size:10px;">%2.1</span></td>
                    <td style="padding:12px;">0 <span style="color:var(--text2); font-size:10px;">%0.0</span></td>
                    <td style="padding:12px;">405</td>
                    <td style="padding:12px; color:var(--text2);">82</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>

      <!-- DASHCAM TAB (TAM EKRAN VIEWTRON VMS) -->
      <section id="tab-dashcam" class="filo-tab-content" style="display:none;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
          <div>
            <h2 style="font-size:22px; font-weight:800; display:flex; align-items:center; gap:12px;">
              <i class="ph-fill ph-video-camera" style="color:var(--accent);"></i> Dashcam
            </h2>
            <div style="font-size:12px; color:var(--text2);">Araç güvenlik kameralarını izleyin ve kaydedilmiş görüntüleri yönetin.</div>
          </div>
        </div>

        <div style="display:flex; gap:24px;">
          
          <!-- SOL MENÜ: Takvim ve Kameralar -->
          <div style="width:280px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:12px; display:flex; flex-direction:column; overflow:hidden;">
            <div style="padding:16px; border-bottom:1px solid rgba(255,255,255,0.05); font-weight:700; display:flex; align-items:center; gap:8px;">
              <i class="ph-fill ph-car-profile" style="color:var(--accent);"></i> Araç Seçimi
            </div>
            <div style="padding:16px; border-bottom:1px solid rgba(255,255,255,0.05);">
              <div style="display:flex; align-items:center; justify-content:space-between; font-size:13px; margin-bottom:12px; cursor:pointer;" onclick="alert('Araç seçimi menüsü açılıyor...')">
                <span style="font-weight:600;">34 OK 322 (Fiat Egea)</span> <i class="ph ph-caret-down"></i>
              </div>
              <div style="display:flex; align-items:center; gap:8px; font-size:13px; margin-left:12px; margin-bottom:8px;"><input type="checkbox" checked style="accent-color:var(--accent);"> Ön Kamera</div>
              <div style="display:flex; align-items:center; gap:8px; font-size:13px; margin-left:12px; margin-bottom:8px;"><input type="checkbox" style="accent-color:var(--accent);"> İç Kamera</div>
              <div style="display:flex; align-items:center; gap:8px; font-size:13px; margin-left:12px; margin-bottom:8px;"><input type="checkbox" style="accent-color:var(--accent);"> Arka Kamera</div>
            </div>
            <div style="padding:16px; font-weight:700; border-bottom:1px solid rgba(255,255,255,0.05); font-size:14px;">Tarih Filtresi</div>
            <div style="padding:16px; flex:1; display:flex; flex-direction:column; justify-content:flex-start;">
              <input type="date" style="background:#111; color-scheme:dark; border:1px solid rgba(255,255,255,0.1); color:#fff; padding:10px 12px; border-radius:6px; outline:none; font-family:inherit; font-size:14px; width:100%; margin-bottom:16px; cursor:pointer;" value="2026-05-26" onclick="if(this.showPicker) this.showPicker();">
              <button class="btn btn-primary" style="width:80%; align-self:center; padding:10px; font-size:13px; font-weight:700; color:#000;" onclick="alert('Seçili tarih için kayıtlar getiriliyor...')">Kayıtları Filtrele</button>
            </div>
          </div>

          <!-- SAĞ ALAN: Video ve Timeline -->
          <div style="flex:1; display:flex; flex-direction:column; gap:24px;">
            <!-- Video Oynatıcı -->
            <div style="width:100%; aspect-ratio:16/9; max-height:60vh; background:#000; border-radius:12px; position:relative; display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,0.05); overflow:hidden;">
              <div style="position:absolute; inset:0; background:url('/assets/images/general/car_egea.png') center/cover opacity:0.4; filter:blur(4px);"></div>
              <i class="ph-fill ph-play-circle" style="font-size:80px; color:rgba(255,255,255,0.8); cursor:pointer; position:relative; z-index:2; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></i>
              <div style="position:absolute; top:20px; right:20px; font-family:monospace; background:rgba(0,0,0,0.7); padding:6px 12px; border-radius:6px; font-size:14px; font-weight:700; z-index:2; border:1px solid rgba(255,255,255,0.1);">2026-05-26 14:32:45</div>
              <div style="position:absolute; top:20px; left:20px; font-family:monospace; background:rgba(255,68,68,0.2); color:var(--danger); border:1px solid rgba(255,68,68,0.5); padding:6px 12px; border-radius:6px; font-size:12px; font-weight:700; z-index:2; display:flex; align-items:center; gap:6px;"><div style="width:8px; height:8px; background:var(--danger); border-radius:50%; box-shadow:0 0 6px var(--danger);"></div> REC</div>
            </div>

            <!-- Timeline ve Kontroller -->
            <div style="height:150px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:12px; padding:16px; display:flex; flex-direction:column;">
              <!-- Kontrol Butonları -->
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <div style="display:flex; gap:12px; align-items:center;">
                  <button style="background:var(--accent); border:none; color:#000; border-radius:50%; width:32px; height:32px; display:flex; align-items:center; justify-content:center; cursor:pointer;"><i class="ph-fill ph-play" style="font-size:18px;"></i></button>
                  <button style="background:rgba(255,255,255,0.1); border:none; color:#fff; border-radius:50%; width:32px; height:32px; display:flex; align-items:center; justify-content:center; cursor:pointer;"><i class="ph-fill ph-pause" style="font-size:18px;"></i></button>
                  <div style="width:1px; background:rgba(255,255,255,0.1); height:24px; margin:0 8px;"></div>
                  <button style="background:transparent; border:1px solid rgba(255,255,255,0.1); border-radius:6px; padding:6px 12px; color:#fff; cursor:pointer; display:flex; align-items:center; gap:6px; font-size:13px; font-weight:600;"><i class="ph-bold ph-scissors" style="font-size:16px; color:var(--accent);"></i> Kes/Kaydet</button>
                </div>
                <div style="display:flex; gap:12px;">
                  <button style="padding:8px 16px; background:rgba(0,255,136,0.1); color:#00FF88; border:1px solid rgba(0,255,136,0.3); border-radius:6px; font-size:12px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px;" onclick="alert('Video bilgisayara indiriliyor...')"><i class="ph-bold ph-download-simple" style="font-size:16px;"></i> İndir</button>
                  <button style="padding:8px 16px; background:rgba(255,68,68,0.1); color:var(--danger); border:1px solid rgba(255,68,68,0.3); border-radius:6px; font-size:12px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px;" onclick="alert('Kayıt siliniyor...')"><i class="ph-bold ph-trash" style="font-size:16px;"></i> Sil</button>
                </div>
              </div>

              <!-- Zaman Çizelgesi -->
              <div style="position:relative; flex:1; display:flex; flex-direction:column; justify-content:flex-end;">
                <!-- Zaman Etiketleri -->
                <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--text2); margin-bottom:6px; font-family:monospace; font-weight:600;">
                  <span>14:00</span><span>14:05</span><span>14:10</span><span>14:15</span><span>14:20</span><span>14:25</span><span>14:30</span><span>14:35</span><span>14:40</span><span>14:45</span><span>14:50</span><span>14:55</span><span>15:00</span>
                </div>
                <!-- Kayıt Bloğu -->
                <div style="height:32px; background:rgba(255,255,255,0.03); border-radius:6px; position:relative; overflow:hidden; border:1px solid rgba(255,255,255,0.05); cursor:pointer;">
                  <!-- Aktif Kayıt Segmentleri -->
                  <div style="position:absolute; left:10%; width:20%; height:100%; background:rgba(0,255,136,0.5);"></div>
                  <div style="position:absolute; left:35%; width:5%; height:100%; background:rgba(255,215,0,0.6);"></div>
                  <div style="position:absolute; left:45%; width:40%; height:100%; background:rgba(0,255,136,0.5);"></div>
                  
                  <!-- Oynatma İmleci -->
                  <div style="position:absolute; left:55%; top:0; bottom:0; width:2px; background:var(--danger); box-shadow:0 0 6px var(--danger); z-index:10;">
                    <div style="position:absolute; top:-6px; left:-5px; width:12px; height:12px; background:var(--danger); border-radius:50%; border:2px solid #000;"></div>
                  </div>
                </div>
                <!-- Lejant -->
                <div style="display:flex; gap:16px; margin-top:12px; font-size:11px; justify-content:center; color:var(--text2);">
                  <span style="display:flex; align-items:center; gap:6px; font-weight:600;"><div style="width:10px; height:10px; background:rgba(0,255,136,0.5); border-radius:3px;"></div> Normal Kayıt</span>
                  <span style="display:flex; align-items:center; gap:6px; font-weight:600;"><div style="width:10px; height:10px; background:rgba(255,215,0,0.6); border-radius:3px;"></div> Hareket Algılandı</span>
                  <span style="display:flex; align-items:center; gap:6px; font-weight:600;"><div style="width:10px; height:10px; background:rgba(255,255,255,0.03); border-radius:3px;"></div> Kayıt Yok</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- AYARLAR TAB -->
      <section id="tab-ayarlar" class="filo-tab-content" style="display:none;">
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <h2 style="font-size: 20px; font-weight: 800; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">Watchdog Sistem Ayarları</h2>
          <div class="bento-item" style="padding: 24px;">
            <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 16px;">Bildirim Tercihleri</h3>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
              <div><div style="font-weight: 700; font-size: 14px;">Kritik Anomali SMS Uyarıları</div><div style="font-size: 12px; color: var(--text2);">Araçlarda seviye 1 arıza tespit edildiğinde SMS gönderilir.</div></div>
              <input type="checkbox" checked style="width:20px; height:20px; accent-color:var(--accent);">
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0;">
              <div><div style="font-weight: 700; font-size: 14px;">Haftalık Sürücü Raporları (E-posta)</div><div style="font-size: 12px; color: var(--text2);">Sürücü puanları her pazartesi otomatik mail atılır.</div></div>
              <input type="checkbox" checked style="width:20px; height:20px; accent-color:var(--accent);">
            </div>
          </div>
          <div class="bento-item" style="padding: 24px;">
            <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 16px;">API Entegrasyonu (Beta)</h3>
            <p style="font-size: 13px; color: var(--text2); margin-bottom: 16px;">Filonuzun verilerini kendi ERP yazılımınıza çekmek için API anahtarı oluşturun.</p>
            <div style="display:flex; gap:12px;">
              <input type="text" value="wdt_live_8321948x1231z" readonly style="flex:1; padding: 12px; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.1); border-radius:8px; color:var(--text2); font-family:monospace;">
              <button class="btn btn-primary" style="padding: 12px 24px;">Anahtarı Kopyala</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</div>




` }} />
      
      <Script src="/js/filo-profil.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'filoprofiljs']) window['init' + 'filoprofiljs'](); }} />
    </>
  );
}
