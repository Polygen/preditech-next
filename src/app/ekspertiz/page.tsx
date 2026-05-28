'use client';

import { useEffect } from 'react';

export default function EkspertizPage() {
  useEffect(() => {

  let currentPaintMode = 'cp-orijinal';
  (window as any).setPaintMode = function(modeClass: string, element: HTMLElement) {
    currentPaintMode = modeClass;
    document.querySelectorAll('.cl-item').forEach((el: Element) => { el.classList.remove('active'); (el as HTMLElement).style.border = '1px solid transparent'; });
    element.classList.add('active');
    element.style.border = '1px solid rgba(255,215,0,0.3)';
  };
  (window as any).paintPart = function(pathElement: HTMLElement) {
    pathElement.classList.remove('cp-orijinal', 'cp-lokal', 'cp-boyali', 'cp-degisen');
    pathElement.classList.add(currentPaintMode);
  };

  fetch('/Araba.svg')
    .then(r => r.text())
    .then(svgData => {
      const container = document.getElementById('mechanical-car-container');
      if(container) {
        container.innerHTML = svgData;
        const svg = container.querySelector('svg');
        if(svg) {
          svg.style.width = '100%';
          svg.style.height = 'auto';
          const motor = svg.querySelector('#motor') as HTMLElement | null;
          if(motor) motor.style.fill = '#FF4444';
          const sanziman = svg.querySelector('#sanziman') as HTMLElement | null;
          if(sanziman) sanziman.style.fill = '#00FF88';
          const direksiyon = svg.querySelector('#direksiyonmili') as HTMLElement | null;
          if(direksiyon) direksiyon.style.fill = '#FFD700';
        }
      }
    })
    .catch(() => {});

  (window as any).switchXperView = function(viewId: string, carId: string, hasPreviousReport: boolean) {
    document.querySelectorAll('.xper-panel-content').forEach((el: Element) => el.classList.remove('active'));
    const targetView = document.getElementById('xper-' + viewId + '-view');
    if (targetView) targetView.classList.add('active');

    document.querySelectorAll('.sidebar-link').forEach((el: Element) => el.classList.remove('active'));
    if (viewId === 'list') document.getElementById('nav-list')?.classList.add('active');
    else if (viewId === 'archive') document.getElementById('nav-archive')?.classList.add('active');

    if (viewId === 'report') {
      const title = document.getElementById('report-car-title');
      const vin = document.getElementById('report-vin');

      if (carId === '34ABC999' && hasPreviousReport) {
        if(title) title.innerText = 'Renault Megane 1.5 dCi';
        if(vin) vin.innerText = 'VF1RFB0006543210';
        const plateText = document.querySelector('#xper-report-view .xper-plate-text') as HTMLElement;
        if(plateText) plateText.innerText = '34 ABC 999';
        const notice = document.getElementById('report-notice');
        if(notice) notice.innerHTML = '<div style="padding:16px 24px;background:rgba(255,215,0,0.08);border:1px solid rgba(255,215,0,0.2);border-radius:16px;display:flex;align-items:center;justify-content:space-between;"><div style="display:flex;align-items:center;gap:16px;color:#FFD700;font-size:14px;font-weight:700;"><i class="ph-fill ph-warning-circle" style="font-size:32px;"></i> DİKKAT: Bu aracın daha önce test edilmiş bir raporu bulunmaktadır.</div><button onclick="alert(\'Rapor karşılaştırma özelliği yakında eklenecek.\')" class="btn" style="background:#FFD700;color:#000;cursor:pointer;"><i class="ph-bold ph-git-diff"></i> Raporu Karşılaştır</button></div>';
      } else {
        if(title) title.innerText = 'BMW 320i (G20)';
        if(vin) vin.innerText = 'WBA5L31000K12345';
        const plateText = document.querySelector('#xper-report-view .xper-plate-text') as HTMLElement;
        if(plateText) plateText.innerText = '34 OK 322';
        const notice = document.getElementById('report-notice');
        if(notice) notice.innerHTML = '';
      }
    }
  };

  (window as any).openDeviceMenu = function(deviceName: string) {
    const title = document.getElementById('deviceMenuTitle');
    if(title) title.innerText = deviceName;
    const modal = document.getElementById('deviceMenuModal');
    if(modal) modal.style.display = 'flex';
  };
  (window as any).closeDeviceMenu = function() {
    const modal = document.getElementById('deviceMenuModal');
    if(modal) modal.style.display = 'none';
  };

  }, []);

  return (
    <>
<style dangerouslySetInnerHTML={{ __html: `
  :root {
    --bg-dark: #09090b;
    --card-bg: #141415;
    --border-color: rgba(255,255,255,0.05);
    --accent: #FFD700;
    --danger: #FF4444;
    --success: #00FF88;
    --text-main: #f4f4f5;
    --text-muted: #a1a1aa;
  }
  body { background-color: var(--bg-dark); color: var(--text-main); font-family: 'Inter', sans-serif; overflow-x: hidden; margin: 0; }
  .sidebar-link { display: flex; align-items: center; gap: 14px; padding: 14px 20px; border-radius: 12px; color: var(--text-muted); font-weight: 600; text-decoration: none; transition: all 0.2s ease; cursor: pointer; font-size: 14px; }
  .sidebar-link:hover { background: rgba(255,255,255,0.03); color: #fff; }
  .sidebar-link.active { background: rgba(255,215,0,0.1); color: var(--accent); border-left: 3px solid var(--accent); }
  .dark-scroll::-webkit-scrollbar { width: 6px; }
  .dark-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); border-radius: 4px; }
  .dark-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
  .btn { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.05); color:#fff; border:none; padding:10px 20px; border-radius:10px; cursor:pointer; font-weight:700; transition:background 0.2s; }
  .btn:hover { background:rgba(255,255,255,0.1); }
  .xper-card { display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; background: var(--card-bg); border: 1px solid var(--border-color);Border-radius: 16px; margin-bottom: 16px; cursor: pointer; transition: all 0.3s; }
  .xper-card:hover { background: #1a1a1c; transform: translateY(-2px); border-color: rgba(255,255,255,0.1); }
  .xper-plate-wrapper { display: inline-flex; border: 2px solid #000; box-shadow: 0 0 0 2px #fff; border-radius: 6px; overflow: hidden; height: 38px; width: 160px; flex-shrink: 0; }
  .xper-plate-tr { background: #0D47A1; width: 20px; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; color: #fff; padding-bottom: 2px; }
  .xper-plate-tr span { font-size: 9px; font-weight: 800; }
  .xper-plate-text { flex: 1; background: #fff; color: #000; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 800; font-family: 'Inter', sans-serif; letter-spacing: 0.5px; }
  .xper-vin { font-size: 14px; font-weight: 700; color: var(--accent); font-family: monospace; letter-spacing: 1px; }
  .xper-car-model { font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 4px; }
  .status-badge-container { width: 180px; display: flex; justify-content: flex-end; }
  .status-badge { padding: 8px 12px; border-radius: 8px; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 6px; width: 100%; border: 1px solid transparent; }
  .status-badge.danger { background: rgba(255,68,68,0.08); color: var(--danger); border-color: rgba(255,68,68,0.2); }
  .status-badge.success { background: rgba(0,255,136,0.08); color: #00FF88; border-color: rgba(0,255,136,0.2); }
  .time-col { width: 120px; text-align: right; }
  .xper-panel-content { display: none; animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
  .xper-panel-content.active { display: block; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
  .report-box { background: linear-gradient(145deg, #1c1c1e 0%, #121212 100%); border: 1px solid rgba(255,255,255,0.04); border-radius: 20px; padding: 28px; display: flex; flex-direction: column; gap: 16px; }
  .report-box-title { font-size: 16px; font-weight: 800; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 12px; margin-bottom: 4px; }
  .metric-large { display: flex; align-items: baseline; gap: 6px; }
  .metric-large .value { font-size: 32px; font-weight: 800; font-family: monospace; letter-spacing: -1px; }
  .metric-large .unit { font-size: 14px; color: var(--text-muted); font-weight: 700; }
  .health-bar { width: 100%; height: 4px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden; margin-bottom: 4px; }
  .health-bar-fill { height: 100%; border-radius: 4px; }
  .dtc-item { padding: 24px; border-radius: 16px; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.03); border-left: 6px solid transparent; display: flex; flex-direction: column; gap: 12px; }
  .dtc-item.critical { border-left-color: var(--danger); }
  .dtc-item.warning { border-left-color: var(--accent); }
  .dtc-code { font-family: monospace; font-size: 18px; font-weight: 900; letter-spacing: 1.5px; padding: 6px 12px; background: rgba(255,255,255,0.05); border-radius: 8px; width: fit-content; }
  .health-card { padding: 24px; background: linear-gradient(145deg, #1c1c1e 0%, #121212 100%); border: 1px solid rgba(255,255,255,0.04); border-radius: 20px; }
  .health-card .hc-header { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 15px; margin-bottom: 16px; }
  .health-card .hc-value { font-size: 32px; font-weight: 800; margin-bottom: 16px; font-family: 'Inter', sans-serif; letter-spacing: -1px; }
  .health-card .hc-desc { font-size: 13.5px; color: var(--text-muted); margin-top: 16px; line-height: 1.6; font-weight: 500; }
  .cl-item { display: flex; align-items: center; gap: 10px; padding: 10px 16px; border-radius: 10px; cursor: pointer; transition: all 0.2s; border: 1px solid transparent; }
  .cl-item:hover { background: rgba(255,255,255,0.05); }
  .cl-item.active { background: rgba(255,215,0,0.1); border-color: rgba(255,215,0,0.3); }
  .cl-box { width: 20px; height: 20px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.2); }
  .car-part { cursor: pointer; transition: fill 0.3s; }
  .car-part:hover { fill: rgba(255,255,255,0.3) !important; }
  .cp-orijinal { fill: #2a2a2a; }
  .cp-lokal { fill: #4a3a2a; }
  .cp-boyali { fill: #5a5a8a; }
  .cp-degisen { fill: #8a5a5a; }
  .xper-modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); z-index: 999; display: none; align-items: center; justify-content: center; }
  .xper-modal-overlay.active { display: flex; }
  .xper-modal { background: linear-gradient(145deg, #1c1c1e 0%, #0a0a0c 100%); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 32px; max-width: 500px; width: 90%; max-height: 80vh; overflow-y: auto; animation: modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
  @keyframes modalIn { from { opacity: 0; transform: scale(0.95) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
  .xper-modal-header { display: flex; justify-content: space-between align-items: center; margin-bottom: 24px; }
  .xper-modal-title { font-size: 20px; font-weight: 800; }
  .xper-modal-close { background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 24px; padding: 8px; border-radius: 8px; transition: all 0.2s; }
  .xper-modal-close:hover { background: rgba(255,255,255,0.1); color: #fff; }
  .input-focus { border: 1px solid rgba(255,255,255,0.1); transition: border-color 0.2s; }
  .input-focus:focus { border-color: #FFD700; outline: none; }
  .btn-hover-green { transition: background 0.2s; background: rgba(0,255,136,0.05); }
  .btn-hover-green:hover { background: rgba(0,255,136,0.1); }
  .btn-hover-white { transition: background 0.2s; background: rgba(255,255,255,0.05); }
  .btn-hover-white:hover { background: rgba(255,255,255,0.1); }
  .div-hover-light { transition: background 0.2s; }
  .div-hover-light:hover { background: rgba(255,255,255,0.03); }
  .icon-hover { transition: color 0.2s; color: var(--text-muted); }
  .icon-hover:hover { color: #fff; }
` }} />

<div style={{ minHeight: '100vh', background: 'var(--bg-dark)', paddingTop: '80px' }}>
  <div className="container" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px', maxWidth: '1400px', margin: '0 auto', padding: '0 24px', paddingBottom: '80px' }}>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '24px' }}>
      <div>
        <h2 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '24px' }}>Ekspertiz</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <a className="sidebar-link active" id="nav-list" onClick={() => { (window as any).switchXperView?.('list', '', false) }}>
            <i className="ph ph-list-magnifying-glass"></i> Son Gelen Araçlar
          </a>
          <a className="sidebar-link" id="nav-archive" onClick={() => { (window as any).switchXperView?.('archive', '', false) }}>
            <i className="ph ph-folder-open"></i> Rapor Arşivi
          </a>
        </nav>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '16px' }}>
        <div className="cl-item orijinal active" onClick={(e) => { (window as any).setPaintMode?.('cp-orijinal', e.currentTarget as HTMLElement) }}>
          <div className="cl-box" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)' }}></div>
          <span>Orijinal</span>
        </div>
        <div className="cl-item lokal" onClick={(e) => { (window as any).setPaintMode?.('cp-lokal', e.currentTarget as HTMLElement) }}>
          <div className="cl-box" style={{ background: '#FF9800' }}></div>
          <span>Lokal Boyalı</span>
        </div>
        <div className="cl-item boyali" onClick={(e) => { (window as any).setPaintMode?.('cp-boyali', e.currentTarget as HTMLElement) }}>
          <div className="cl-box" style={{ background: '#2196F3' }}></div>
          <span>Boyandalı</span>
        </div>
        <div className="cl-item degisen" onClick={(e) => { (window as any).setPaintMode?.('cp-degisen', e.currentTarget as HTMLElement) }}>
          <div className="cl-box" style={{ background: '#F44336' }}></div>
          <span>Değişen</span>
        </div>
      </div>
    </div>

    <div>

      <section id="xper-list-view" className="xper-panel-content active">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '800' }}>Son Gelen Araçlar</h2>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <i className="ph ph-magnifying-glass" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}></i>
              <input type="text" className="input-focus" placeholder="Plaka veya Şasi No ara..." style={{ width: '260px', boxSizing: 'border-box', padding: '12px 12px 12px 44px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontFamily: 'inherit' }} />
            </div>
          </div>
        </div>

        <div className="dark-scroll" style={{ height: 'calc(100vh - 250px)', overflowY: 'auto', paddingRight: '8px' }}>

          <div className="xper-card" onClick={() => { (window as any).switchXperView?.('report', '34OK322', false) }}>
            <div className="xper-card-left" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div className="xper-plate-wrapper">
                <div className="xper-plate-tr"><span>TR</span></div>
                <div className="xper-plate-text">34 OK 322</div>
              </div>
              <div>
                <div className="xper-car-model">BMW 320i (G20)</div>
                <div className="xper-vin">Şasi No: WBA5L31000K12345</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div className="time-col">
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#fff' }}>Bağlantı Zamanı</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Bugün, 14:32</div>
              </div>
              <div className="status-badge-container">
                <div className="status-badge danger"><i className="ph-bold ph-warning-circle"></i> 3 Kritik Hata</div>
              </div>
              <i className="ph-bold ph-caret-right" style={{ fontSize: '24px', color: 'var(--text-muted)', width: '24px' }}></i>
            </div>
          </div>

          <div className="xper-card" onClick={() => { (window as any).switchXperView?.('report', '34ABC999', true) }}>
            <div className="xper-card-left" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div className="xper-plate-wrapper">
                <div className="xper-plate-tr"><span>TR</span></div>
                <div className="xper-plate-text">34 ABC 999</div>
              </div>
              <div>
                <div className="xper-car-model">Renault Megane 1.5 dCi</div>
                <div className="xper-vin">Şasi No: VF1RFB0006543210</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div className="time-col">
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#fff' }}>Bağlantı Zamanı</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Bugün, 13:15</div>
              </div>
              <div className="status-badge-container">
                <div className="status-badge success"><i className="ph-bold ph-check-circle"></i> Temiz (Sorunsuz)</div>
              </div>
              <i className="ph-bold ph-caret-right" style={{ fontSize: '24px', color: 'var(--text-muted)', width: '24px' }}></i>
            </div>
          </div>
        </div>
      </section>

      <section id="xper-archive-view" className="xper-panel-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '800' }}>Geçmiş Raporlar Arşivi</h2>
        </div>
        <div className="dark-scroll" style={{ height: 'calc(100vh - 250px)', overflowY: 'auto', paddingRight: '8px' }}>
          <div className="xper-card" onClick={() => { (window as any).switchXperView?.('report', '07KLY888', false) }}>
            <div className="xper-card-left" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div className="xper-plate-wrapper">
                <div className="xper-plate-tr"><span>TR</span></div>
                <div className="xper-plate-text">07 KLY 888</div>
              </div>
              <div>
                <div className="xper-car-model">Ford Focus 1.5 TDCi</div>
                <div className="xper-vin">Şasi No: WF0AXXGCCAGM12345</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div className="time-col">
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#fff' }}>Tarih</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>15 Mayıs 2026</div>
              </div>
              <div className="status-badge-container">
                <div className="status-badge" style={{ color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)' }}><i className="ph-bold ph-folder-open"></i> Arşivlendi</div>
              </div>
              <i className="ph-bold ph-caret-right" style={{ fontSize: '24px', color: 'var(--text-muted)', width: '24px' }}></i>
            </div>
          </div>
        </div>
      </section>

      <section id="xper-report-view" className="xper-panel-content">
        <button onClick={() => { (window as any).switchXperView?.('list', '', false) }} className="btn" style={{ marginBottom: '16px' }}>
          <i className="ph-bold ph-arrow-left"></i> Listeye Dön
        </button>

        <div id="report-notice" style={{ marginBottom: '16px' }}></div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 32px', background: 'linear-gradient(145deg, #1c1c1e 0%, #121212 100%)', border: '1px solid var(--border-color)', borderRadius: '20px', marginBottom: '32px', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div className="xper-plate-wrapper" style={{ height: '48px', width: '180px' }}>
              <div className="xper-plate-tr" style={{ width: '28px' }}><span>TR</span></div>
              <div className="xper-plate-text" style={{ fontSize: '24px' }}>34 OK 322</div>
            </div>
            <div>
              <div id="report-car-title" style={{ fontSize: '22px', fontWeight: '800', marginBottom: '4px' }}>BMW 320i (G20)</div>
              <div style={{ fontSize: '13px', color: '#FFD700', fontFamily: 'monospace' }} id="report-vin">VF1RFB0006543210</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn" style={{ background: 'rgba(255,68,68,0.1)', color: '#FF4444', border: '1px solid rgba(255,68,68,0.2)' }}>
              <i className="ph-bold ph-warning-circle"></i> Hata Raporu
            </button>
            <button className="btn" style={{ background: 'rgba(0,255,136,0.1)', color: '#00FF88', border: '1px solid rgba(0,255,136,0.2)' }}>
              <i className="ph-bold ph-check-circle"></i> Tamamlandı
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div className="report-box">
            <div className="report-box-title"><i className="ph-fill ph-gauge" style={{ color: '#FFD700' }}></i> Genel Sağlık Skoru</div>
            <div className="metric-large">
              <span className="value" style={{ color: '#FF4444' }}>42</span>
              <span className="unit">/ 100</span>
            </div>
            <div className="health-bar"><div className="health-bar-fill" style={{ width: '42%', background: '#FF4444' }}></div></div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Bu araçta kritik seviyede aşınma tespit edilmiştir.</div>
          </div>

          <div className="report-box">
            <div className="report-box-title"><i className="ph-fill ph-lightning" style={{ color: '#FFD700' }}></i> Motor Sağlığı</div>
            <div className="metric-large">
              <span className="value" style={{ color: '#FF4444' }}>28</span>
              <span className="unit">/ 100</span>
            </div>
            <div className="health-bar"><div className="health-bar-fill" style={{ width: '28%', background: '#FF4444' }}></div></div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Motor sesinde anormallikler ve düşük performans tespit edildi.</div>
          </div>

          <div className="report-box">
            <div className="report-box-title"><i className="ph-fill ph-gear" style={{ color: '#FFD700' }}></i> Şanzıman Sağlığı</div>
            <div className="metric-large">
              <span className="value" style={{ color: '#ff9800' }}>65</span>
              <span className="unit">/ 100</span>
            </div>
            <div className="health-bar"><div className="health-bar-fill" style={{ width: '65%', background: '#ff9800' }}></div></div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Orta seviyede aşınma, yakın takip önerilir.</div>
          </div>

          <div className="report-box">
            <div className="report-box-title"><i className="ph-fill ph-brake" style={{ color: '#FFD700' }}></i> Fren Sistemi</div>
            <div className="metric-large">
              <span className="value" style={{ color: '#00FF88' }}>89</span>
              <span className="unit">/ 100</span>
            </div>
            <div className="health-bar"><div className="health-bar-fill" style={{ width: '89%', background: '#00FF88' }}></div></div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Fren sistemi tam performansla çalışıyor.</div>
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <i className="ph-fill ph-warning-circle" style={{ color: '#FF4444' }}></i> Kritik Hatalar
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
          <div className="dtc-item critical">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="dtc-code">P0301</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>15.03.2026 / 14:32</div>
            </div>
            <div style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: '1.6', fontWeight: '500' }}>1. silindirda ateşleme hatası. Bu hata, birçok faktörden kaynaklanabilir: buji arızası, yakıt enjektörü tıkanıklığı veya ateşleme bobini problemi.</div>
          </div>
          <div className="dtc-item critical">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="dtc-code">P0172</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>14.03.2026 / 09:15</div>
            </div>
            <div style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: '1.6', fontWeight: '500' }}>Karışım çok zengin - aşırı yakıt tüketimine neden olur. Lambda sensörü veya MAF sensörü arızası düşünülmeli.</div>
          </div>
          <div className="dtc-item warning">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="dtc-code">P0420</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>10.03.2026 / 18:45</div>
            </div>
            <div style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: '1.6', fontWeight: '500' }}>Katalitik dönüştürücü verimliliği düşük. Egzoz emisyonlarında artış ve yakıt tüketiminde artış gözlemlenebilir.</div>
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>Mekanik Durum Tespiti</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div id="mechanical-car-container" style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
            <div style={{ color: 'var(--text-muted)', textAlign: 'center' }}>Yükleniyor...</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="health-card">
              <div className="hc-header"><i className="ph-fill ph-car-profile" style={{ color: '#FF4444' }}></i> Motor</div>
              <div className="hc-value" style={{ color: '#FF4444' }}>Kritik</div>
              <div className="hc-desc">Turbo manifoldunda basınç kaçağı ve motor sesinde anormallikler tespit edildi. Acil servis kontrolü önerilir.</div>
            </div>
            <div className="health-card">
              <div className="hc-header"><i className="ph-fill ph-gear" style={{ color: '#ff9800' }}></i> Şanzıman</div>
              <div className="hc-value" style={{ color: '#ff9800' }}>Orta</div>
              <div className="hc-desc">Vites geçişlerinde hafif vuruntu tespit edildi. Şanzıman yağı değişimi önerilir.</div>
            </div>
            <div className="health-card">
              <div className="hc-header"><i className="ph-fill ph-wind" style={{ color: '#00FF88' }}></i> Klima</div>
              <div className="hc-value" style={{ color: '#00FF88' }}>İyi</div>
              <div className="hc-desc">Klima sistemi normal performansla çalışıyor.</div>
            </div>
          </div>
        </div>

      </section>
    </div>
  </div>
</div>

<div id="deviceMenuModal" className="xper-modal-overlay">
  <div className="xper-modal">
    <div className="xper-modal-header">
      <div className="xper-modal-title" id="deviceMenuTitle"></div>
      <button className="xper-modal-close" onClick={() => { (window as any).closeDeviceMenu?.() }}>
        <i className="ph-bold ph-x"></i>
      </button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <button className="btn" style={{ justifyContent: 'flex-start', textAlign: 'left' }}>
        <i className="ph-bold ph-arrows-clockwise"></i> Tekrar Bağla
      </button>
      <button className="btn" style={{ justifyContent: 'flex-start', textAlign: 'left' }}>
        <i className="ph-bold ph-sliders"></i> Ayarlar
      </button>
      <button className="btn" style={{ justifyContent: 'flex-start', textAlign: 'left', color: '#FF4444' }}>
        <i className="ph-bold ph-trash"></i> Cihazı Sil
      </button>
    </div>
  </div>
</div>

    </>
  );
}
