'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
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
</>
  );
}
