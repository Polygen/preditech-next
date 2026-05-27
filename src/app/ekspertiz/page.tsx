'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function EkspertizPage() {
  useEffect(() => {

  let currentPaintMode = 'cp-orijinal';
  function setPaintMode(modeClass, element) {
    currentPaintMode = modeClass;
    document.querySelectorAll('.cl-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  }
  function paintPart(pathElement) {
    pathElement.classList.remove('cp-orijinal', 'cp-lokal', 'cp-boyali', 'cp-degisen');
    pathElement.classList.add(currentPaintMode);
  }

  fetch('Araba.svg')
    .then(r => r.text())
    .then(svgData => {
      const container = document.getElementById('mechanical-car-container');
      if(container) {
        container.innerHTML = svgData;
        const svg = container.querySelector('svg');
        if(svg) {
          svg.style.width = '100%';
          svg.style.height = 'auto';
          let motor = svg.querySelector('#motor');
          if(motor) motor.style.fill = 'var(--danger)';
          let sanziman = svg.querySelector('#sanziman');
          if(sanziman) sanziman.style.fill = 'var(--success)';
          let direksiyon = svg.querySelector('#direksiyonmili');
          if(direksiyon) direksiyon.style.fill = 'var(--accent)';
        }
      }
    })
    .catch(e => console.error("Araba.svg yuklenemedi", e));

  function switchXperView(viewId, carId, hasPreviousReport) {
    document.querySelectorAll('.xper-panel-content').forEach(el => el.classList.remove('active'));
    const targetView = document.getElementById('xper-' + viewId + '-view');
    if (targetView) targetView.classList.add('active');
    
    document.querySelectorAll('.sidebar-link').forEach(el => el.classList.remove('active'));
    if (viewId === 'list') document.getElementById('nav-list').classList.add('active');
    else if (viewId === 'archive') document.getElementById('nav-archive').classList.add('active');
    
    if (viewId === 'report') {
      let title = document.getElementById('report-car-title');
      let vin = document.getElementById('report-vin');
      
      if (carId === '34ABC999' && hasPreviousReport) {
        title.innerText = 'Renault Megane 1.5 dCi';
        vin.innerText = 'VF1RFB0006543210';
        document.querySelector('#xper-report-view .xper-plate-text').innerText = '34 ABC 999';
        document.getElementById('report-notice').innerHTML = `
          <div style={{ padding: '16px 24px', background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.2)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',  }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--accent)', fontSize: '14px', fontWeight: '700',  }}>
              <i className="ph-fill ph-warning-circle" style={{ fontSize: '32px',  }}></i>
              DİKKAT: Bu aracın daha önce test edilmiş bir raporu bulunmaktadır.
            </div>
            <button onClick={() => { switchXperView('compare') }} className="btn" style={{ background: 'var(--accent)', color: '#000',  }}><i className="ph-bold ph-git-diff"></i> Raporu Karşılaştır</button>
          </div>
        `;
      } else {
        title.innerText = 'BMW 320i (G20)';
        vin.innerText = 'WBA5L31000K12345';
        document.querySelector('#xper-report-view .xper-plate-text').innerText = '34 OK 322';
        document.getElementById('report-notice').innerHTML = '';
      }
    }
  }

  function openDeviceMenu(deviceName) {
    document.getElementById('deviceMenuTitle').innerText = deviceName;
    document.getElementById('deviceMenuModal').style.display = 'flex';
  }
  function closeDeviceMenu() {
    document.getElementById('deviceMenuModal').style.display = 'none';
  }

  }, []);

  return (
    <>
<style dangerouslySetInnerHTML={{ __html: `
  :root {
    --bg-dark: #09090b; /* A very deep, elegant dark */
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
  .sidebar-link i { font-size: 20px; }
  
  .dark-scroll::-webkit-scrollbar { width: 6px; }
  .dark-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); border-radius: 4px; }
  .dark-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
  
  /* Buttons */
  .btn-gradient { background: linear-gradient(180deg, #FFE500 0%, #D4BE00 100%); color: #000; font-weight: 800; border: none; border-radius: 8px; padding: 12px 24px; cursor: pointer; display: flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(255,215,0,0.15); transition: all 0.2s; }
  .btn-gradient:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255,215,0,0.3); filter: brightness(1.1); }
  
  .btn { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.05); color:#fff; border:none; padding:10px 20px; border-radius:10px; cursor:pointer; font-weight:700; transition:background 0.2s; }
  .btn:hover { background:rgba(255,255,255,0.1); }

  /* Xper List Cards */
  .xper-card { display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 16px; margin-bottom: 16px; cursor: pointer; transition: all 0.3s; }
  .xper-card:hover { background: #1a1a1c; transform: translateY(-2px); border-color: rgba(255,255,255,0.1); }
  .xper-card-left { display: flex; align-items: center; gap: 20px; }
  
  /* TR Plate Styling */
  .xper-plate-wrapper { display: inline-flex; border: 2px solid #000; box-shadow: 0 0 0 2px #fff; border-radius: 6px; overflow: hidden; height: 38px; width: 160px; flex-shrink: 0; }
  .xper-plate-tr { background: #0D47A1; width: 20px; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; color: #fff; padding-bottom: 2px; }
  .xper-plate-tr span { font-size: 9px; font-weight: 800; }
  .xper-plate-text { flex: 1; background: #fff; color: #000; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 800; font-family: 'Inter', sans-serif; letter-spacing: 0.5px; }

  .xper-vin { font-size: 14px; font-weight: 700; color: var(--accent); font-family: monospace; letter-spacing: 1px; }
  .xper-car-model { font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 4px; }
  
  /* Status Badges */
  .status-badge-container { width: 180px; display: flex; justify-content: flex-end; }
  .status-badge { padding: 8px 12px; border-radius: 8px; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 6px; width: 100%; border: 1px solid transparent; }
  .status-badge.danger { background: rgba(255,68,68,0.08); color: var(--danger); border-color: rgba(255,68,68,0.2); }
  .status-badge.success { background: rgba(0,255,136,0.08); color: #00FF88; border-color: rgba(0,255,136,0.2); }
  .status-badge.warning { background: rgba(255,215,0,0.08); color: var(--accent); border-color: rgba(255,215,0,0.2); }
  
  .time-col { width: 120px; text-align: right; }

  /* Xper Report Modal / Panel */
  .xper-panel-content { display: none; animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
  .xper-panel-content.active { display: block; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
  
  /* Single Column Layout */
  .report-list { display: flex; flex-direction: column; gap: 24px; margin-top: 24px; padding-bottom: 60px; width: 100%; }
  
  /* Report Box (Card) - Minimalist Premium Gradient */
  .report-box { 
    background: linear-gradient(145deg, #1c1c1e 0%, #121212 100%); 
    border: 1px solid rgba(255,255,255,0.04); 
    border-radius: 20px; 
    padding: 28px; 
    display: flex; 
    flex-direction: column; 
    gap: 16px; 
    position: relative; 
    overflow: hidden; 
    transition: transform 0.3s ease, border-color 0.3s ease; 
  }
  .report-box:hover { transform: translateY(-2px); border-color: rgba(255,255,255,0.1); }
  
  .report-box-title { font-size: 16px; font-weight: 800; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 12px; margin-bottom: 4px; }
  
  .metric-large { display: flex; align-items: baseline; gap: 6px; }
  .metric-large .value { font-size: 32px; font-weight: 800; font-family: monospace; letter-spacing: -1px; }
  .metric-large .unit { font-size: 14px; color: var(--text-muted); font-weight: 700; }
  
  /* Health Cards specific styling - Minimalist Glass Gradient */
  .health-card { 
    padding: 24px; 
    background: linear-gradient(145deg, #1c1c1e 0%, #121212 100%); 
    border: 1px solid rgba(255,255,255,0.04); 
    border-radius: 20px; 
    display: flex; 
    flex-direction: column; 
    transition: transform 0.3s ease, border-color 0.3s ease; 
  }
  .health-card:hover { transform: translateY(-2px); border-color: rgba(255,255,255,0.1); }
  .health-card .hc-header { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 15px; margin-bottom: 16px; }
  .health-card .hc-value { font-size: 32px; font-weight: 800; margin-bottom: 16px; font-family: 'Inter', sans-serif; letter-spacing: -1px; }
  .health-card .hc-desc { font-size: 13.5px; color: var(--text-muted); margin-top: 16px; line-height: 1.6; font-weight: 500; }
  
  .health-bar { width: 100%; height: 4px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden; margin-bottom: 4px; }
  .health-bar-fill { height: 100%; border-radius: 4px; }
  
  .dtc-item { padding: 24px; border-radius: 16px; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.03); border-left: 6px solid transparent; display: flex; flex-direction: column; gap: 12px; }
  .dtc-item.critical { border-left-color: var(--danger); }
  .dtc-item.warning { border-left-color: var(--accent); }
  .dtc-code { font-family: monospace; font-size: 18px; font-weight: 900; letter-spacing: 1.5px; padding: 6px 12px; background: rgba(255,255,255,0.05); border-radius: 8px; width: fit-content; }
  .dtc-desc { font-size: 14.5px; color: var(--text-muted); line-height: 1.6; font-weight: 500; }
  .sidebar-link { font-size: 15px !important; padding: 14px 20px !important; }

  /* Device List Dropdown */
  .device-list { margin-left: 12px; border-left: 1px solid rgba(255,255,255,0.1); padding-left: 12px; margin-top: 8px; display: flex; flex-direction: column; gap: 8px; }
  .device-item { padding: 10px 12px; background: rgba(255,255,255,0.02); border-radius: 8px; font-size: 12px; cursor: pointer; border: 1px solid rgba(255,255,255,0.03); transition: background 0.2s; }
  .device-item:hover { background: rgba(255,255,255,0.06); }
  .device-item.active { border-left: 3px solid #00FF88; }
  .device-item.inactive { border-left: 3px solid rgba(255,255,255,0.1); opacity: 0.7; }

  /* Kaporta Boya Interactive */
  .color-legend { display:flex; align-items:center; justify-content:center; gap:24px; margin-bottom:32px; font-size:13px; font-weight:700; color:#fff; background: rgba(0,0,0,0.2); padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.04); }
  .cl-item { display:flex; align-items:center; gap:10px; cursor:pointer; padding: 8px 16px; border-radius: 8px; transition: background 0.2s; }
  .cl-item:hover { background: rgba(255,255,255,0.05); }
  .cl-item.active { background: rgba(255,255,255,0.1); outline: 2px solid #fff; }
  .cl-box { width:20px; height:20px; border-radius:4px; box-shadow: 0 2px 5px rgba(0,0,0,0.5); }

  /* Modals */
  .modal-overlay { display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.85); z-index:9999; align-items:center; justify-content:center; backdrop-filter:blur(8px); }
  .modal-content { background:#111; border:1px solid rgba(255,255,255,0.1); border-radius:24px; padding:32px; width:440px; text-align:center; box-shadow: 0 24px 50px rgba(0,0,0,0.8); }

  /* Mechanical Skeleton Svg Container */
  #mechanical-car-container svg { width: 100%; height: auto; max-height: 400px; opacity: 0.9; }
` }} />
<div className="dashboard-wrapper" style={{ paddingTop: '32px',  }}>
  <div className="container" style={{ display: 'flex', minHeight: 'calc(100vh - 120px)', maxWidth: '1400px', margin: '0 auto',  }}>
    
    
    <aside className="sidebar" style={{ display: 'flex', flexDirection: 'column', width: '320px', minWidth: '320px', maxWidth: '320px', padding: '32px 24px',  }}>
      <div style={{ marginBottom: '40px', padding: '0 20px',  }}>
        <Link href="/" style={{ display: 'block', marginBottom: '16px',  }}>
          <img src="/assets/images/general/preditechlogo.png" alt="Preditech" style={{ height: '28px', objectFit: 'contain',  }} />
        </Link>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '1.5px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px',  }}>
          <i className="ph-fill ph-magnifying-glass" style={{ color: 'var(--accent)', fontSize: '16px',  }}></i> XPER PANELİ
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '8px',  }}>
        <a className="sidebar-link active" onClick={() => { switchXperView('list') }} id="nav-list">
          <i className="ph ph-list-magnifying-glass"></i> Son Gelen Araçlar
        </a>
        <a className="sidebar-link" onClick={() => { switchXperView('archive') }} id="nav-archive">
          <i className="ph ph-folder-open"></i> Rapor Arşivi
        </a>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '16px', marginBottom: '16px',  }}>
        <button onClick={() => { document.getElementById('subscriptionModal').style.display='flex' }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', background: 'rgba(0, 255, 136, 0.05)', borderRadius: '12px', margin: '0 16px', border: '1px solid rgba(0, 255, 136, 0.2)', cursor: 'pointer', transition: 'background 0.2s', textAlign: 'left',  }} onMouseOver="this.style.background='rgba(0, 255, 136, 0.1)'" onMouseOut="this.style.background='rgba(0, 255, 136, 0.05)'">
           <div>
             <div style={{ fontSize: '14px', fontWeight: '800', color: '#fff', marginBottom: '4px',  }}>Abonelik Durumu</div>
             <div style={{ fontSize: '12px', color: '#00FF88', fontWeight: '700',  }}>Premium Xper (Sınırsız)</div>
           </div>
           <i className="ph-bold ph-caret-right" style={{ color: 'var(--text-muted)',  }}></i>
        </button>
      </div>
      
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '12px 0',  }}></div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px',  }}>
        <div style={{ color: 'var(--text-muted)', fontSize: '12px', fontWeight: '800', padding: '12px 20px 4px 20px', letterSpacing: '1px',  }}>BAĞLI CİHAZLAR</div>
        <div className="device-list">
          <div className="device-item active" style={{ padding: '16px',  }}>
            <div style={{ fontWeight: '800', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px',  }}>Xiaomi 14T Pro <i className="ph-fill ph-wifi-high" style={{ color: '#00FF88',  }}></i></div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px', fontWeight: '600',  }}>Bağlı (Açık) • Kayıt: 12.03.2024</div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px',  }}>
              <button style={{ flex: '1', padding: '8px', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '11px', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s',  }} onMouseOver="this.style.background='rgba(255,255,255,0.1)'" onMouseOut="this.style.background='rgba(255,255,255,0.05)'">Kaldır</button>
            </div>
          </div>
          <div className="device-item inactive" style={{ padding: '16px',  }}>
            <div style={{ fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px',  }}>iPad 10. Nesil <i className="ph-fill ph-wifi-slash" style={{ color: 'var(--text-muted)',  }}></i></div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px',  }}>Bağlı Değil (Kapalı) • Kayıt: 01.01.2024</div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px',  }}>
              <button style={{ flex: '1', padding: '8px', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '11px', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s',  }} onMouseOver="this.style.background='rgba(255,255,255,0.1)'" onMouseOut="this.style.background='rgba(255,255,255,0.05)'">Kaldır</button>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <div className="dashboard-content" style={{ flex: '1', padding: '24px 40px 40px 24px',  }}>
      
      <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px',  }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '8px', letterSpacing: '-0.5px',  }}>Xper Ekspertiz Paneli</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', fontWeight: '500',  }}>OBD veri füzyonu ile aracın mekanik, elektronik ve beyin analizleri</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px',  }}>
          <div className="status-badge success" style={{ width: 'auto', padding: '10px 16px', fontSize: '13px',  }}><span style={{ width: '8px', height: '8px', background: '#00FF88', borderRadius: '50%',  }}></span> Sistem Aktif</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', padding: '8px', borderRadius: '12px', transition: 'background 0.2s',  }} onMouseOver="this.style.background='rgba(255,255,255,0.03)'" onMouseOut="this.style.background='transparent'" onClick={() => { openDeviceMenu('x@x.com') }}>
            <div style={{ textAlign: 'right',  }}>
              <div style={{ fontSize: '14px', fontWeight: '800',  }}>x@x.com</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600',  }}>Kıdemli Eksper (x123)</div>
            </div>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a1a1a',  }}>
              <i className="ph-bold ph-user" style={{ color: 'var(--accent)', fontSize: '22px',  }}></i>
            </div>
          </div>
        </div>
      </div>

      
      <section id="xper-list-view" className="xper-panel-content active">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px',  }}>
          <h2 style={{ fontSize: '22px', fontWeight: '800',  }}>Son Gelen Araçlar (Bugün)</h2>
          <div style={{ position: 'relative', width: '320px',  }}>
            <i className="ph ph-magnifying-glass" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '18px',  }}></i>
            <input type="text" placeholder="Plaka veya Şasi No ara..." style={{ width: '100%', boxSizing: 'border-box', padding: '12px 12px 12px 44px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontFamily: 'inherit', outline: 'none', transition: 'border 0.2s',  }} onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'" />
          </div>
        </div>

        <div className="dark-scroll" style={{ height: 'calc(100vh - 250px)', overflowY: 'auto', paddingRight: '8px',  }}>
          
          <div className="xper-card" onClick={() => { switchXperView('report', '34OK322', false) }}>
            <div className="xper-card-left">
              <div className="xper-plate-wrapper">
                <div className="xper-plate-tr"><span>TR</span></div>
                <div className="xper-plate-text">34 OK 322</div>
              </div>
              <div>
                <div className="xper-car-model">BMW 320i (G20)</div>
                <div className="xper-vin">Şasi No: WBA5L31000K12345</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px',  }}>
              <div className="time-col">
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#fff',  }}>Bağlantı Zamanı</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px',  }}>Bugün, 14:32</div>
              </div>
              <div className="status-badge-container">
                <div className="status-badge danger"><i className="ph-bold ph-warning-circle"></i> 3 Kritik Hata</div>
              </div>
              <i className="ph-bold ph-caret-right" style={{ fontSize: '24px', color: 'var(--text-muted)', width: '24px',  }}></i>
            </div>
          </div>

          
          <div className="xper-card" onClick={() => { switchXperView('report', '34ABC999', true) }}>
            <div className="xper-card-left">
              <div className="xper-plate-wrapper">
                <div className="xper-plate-tr"><span>TR</span></div>
                <div className="xper-plate-text">34 ABC 999</div>
              </div>
              <div>
                <div className="xper-car-model">Renault Megane 1.5 dCi</div>
                <div className="xper-vin">Şasi No: VF1RFB0006543210</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px',  }}>
              <div className="time-col">
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#fff',  }}>Bağlantı Zamanı</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px',  }}>Bugün, 13:15</div>
              </div>
              <div className="status-badge-container">
                <div className="status-badge success"><i className="ph-bold ph-check-circle"></i> Temiz (Sorunsuz)</div>
              </div>
              <i className="ph-bold ph-caret-right" style={{ fontSize: '24px', color: 'var(--text-muted)', width: '24px',  }}></i>
            </div>
          </div>
        </div>
      </section>

      
      <section id="xper-archive-view" className="xper-panel-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px',  }}>
          <h2 style={{ fontSize: '22px', fontWeight: '800',  }}>Geçmiş Raporlar Arşivi</h2>
          <div style={{ display: 'flex', gap: '16px',  }}>
            <input type="date" style={{ background: 'rgba(0,0,0,0.2)', colorScheme: 'dark', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '12px 16px', borderRadius: '12px', outline: 'none', fontFamily: 'inherit', fontSize: '14px', cursor: 'pointer',  }} value="2026-05-20" onClick={(event) => { if(event.currentTarget.showPicker) event.currentTarget.showPicker(); }} />
          </div>
        </div>
        <div className="dark-scroll" style={{ height: 'calc(100vh - 250px)', overflowY: 'auto', paddingRight: '8px',  }}>
          <div className="xper-card" onClick={() => { switchXperView('report', '07KLY888', false) }}>
            <div className="xper-card-left">
              <div className="xper-plate-wrapper">
                <div className="xper-plate-tr"><span>TR</span></div>
                <div className="xper-plate-text">07 KLY 888</div>
              </div>
              <div>
                <div className="xper-car-model">Ford Focus 1.5 TDCi</div>
                <div className="xper-vin">Şasi No: WF0AXXGCCAGM12345</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px',  }}>
              <div className="time-col">
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#fff',  }}>Tarih</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px',  }}>15 Mayıs 2026</div>
              </div>
              <div className="status-badge-container">
                <div className="status-badge" style={{ color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)',  }}><i className="ph-bold ph-folder-open"></i> Arşivlendi</div>
              </div>
              <i className="ph-bold ph-caret-right" style={{ fontSize: '24px', color: 'var(--text-muted)', width: '24px',  }}></i>
            </div>
          </div>
        </div>
      </section>

      
      <section id="xper-report-view" className="xper-panel-content">
        <button onClick={() => { switchXperView('list') }} className="btn" style={{ marginBottom: '16px',  }}>
          <i className="ph-bold ph-arrow-left"></i> Listeye Dön
        </button>

        <div id="report-notice" style={{ marginBottom: '16px',  }}></div>

        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 32px', background: 'linear-gradient(145deg, #1c1c1e 0%, #121212 100%)', border: '1px solid var(--border-color)', borderRadius: '20px', marginBottom: '32px', boxShadow: '0 8px 30px rgba(0,0,0,0.3)',  }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px',  }}>
            <div className="xper-plate-wrapper" style={{ height: '48px', width: '180px',  }}>
              <div className="xper-plate-tr" style={{ width: '24px', fontSize: '10px', paddingBottom: '4px',  }}><span>TR</span></div>
              <div className="xper-plate-text" style={{ fontSize: '24px',  }}>34 ABC 999</div>
            </div>
            <div>
              <div id="report-car-title" style={{ fontSize: '28px', fontWeight: '900', color: '#fff', letterSpacing: '-0.5px',  }}>Araç Yükleniyor...</div>
              <div id="report-vin" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--accent)', fontFamily: 'monospace', marginTop: '4px',  }}>VIN_NUMBER</div>
            </div>
          </div>
          <div>
            <button className="btn-gradient" style={{ padding: '16px 32px', fontSize: '16px', borderRadius: '12px',  }}><i className="ph-bold ph-printer"></i> Raporu Yazdır</button>
          </div>
        </div>

        <div className="dark-scroll" style={{ height: 'calc(100vh - 350px)', overflowY: 'auto', paddingRight: '16px',  }}>
          <div className="report-list">
            
            
            <div className="report-box" style={{ textAlign: 'center', padding: '32px',  }}>
               <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#fff', marginBottom: '16px',  }}>Preditech Hybrid Data Fusion v2.1 Mekanik Analiz</h2>
               <div id="mechanical-car-container">
                  
                  <div style={{ color: 'var(--text-muted)', padding: '50px',  }}>Araç iskeleti yükleniyor...</div>
               </div>
               <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '24px',  }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '14px',  }}><div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#00FF88',  }}></div> Normal</div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '14px',  }}><div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent)',  }}></div> Dikkat</div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '14px',  }}><div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--danger)',  }}></div> Kritik</div>
               </div>
            </div>

            
            <div className="report-box" style={{ borderLeft: '6px solid var(--danger)', padding: '24px 32px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px',  }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,68,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0',  }}>
                <i className="ph-bold ph-warning-circle" style={{ fontSize: '32px', color: 'var(--danger)',  }}></i>
              </div>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#fff', marginBottom: '8px', letterSpacing: '-0.5px',  }}>Sistem Durumu: Birden Çok Kritik Arıza Var</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', fontWeight: '500', lineHeight: '1.6',  }}>Preditech Hybrid Data Fusion v2.1 Analizi sonucunda araçta derhal müdahale edilmesi gereken arızalar tespit edildi.</p>
              </div>
            </div>

            
            <div className="report-box">
              <div className="report-box-title" style={{ color: 'var(--accent)', borderBottom: 'none', marginBottom: '8px',  }}>
                <i className="ph-bold ph-gauge"></i> Kilometre (Odometer) Doğrulama Modülü
              </div>
              <p style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6',  }}>Gösterge tablosundaki (kadran) kilometre ile yapay zekanın mekanik aşınma üzerinden ve diğer motor beyinlerinden okuduğu kilometre verilerinin karşılaştırması.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '16px',  }}>
                
                <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center',  }}>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: '800', letterSpacing: '0.5px',  }}>KADRAN (GÖSTERGE) KM</div>
                    <div className="metric-large"><span className="value" style={{ color: '#fff',  }}>124,500</span><span className="unit">km</span></div>
                  </div>
                  <i className="ph-bold ph-dashboard" style={{ fontSize: '40px', color: 'rgba(255,255,255,0.1)',  }}></i>
                </div>
                
                
                <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(255,68,68,0.05)', border: '1px solid rgba(255,68,68,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center',  }}>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--danger)', marginBottom: '8px', fontWeight: '800', letterSpacing: '0.5px',  }}>TÜM BEYİNLERDEN KM SORGUSU</div>
                    <div className="metric-large"><span className="value" style={{ color: 'var(--danger)',  }}>182,410</span><span className="unit" style={{ color: 'var(--danger)',  }}>km</span></div>
                  </div>
                  <i className="ph-bold ph-cpu" style={{ fontSize: '40px', color: 'rgba(255,68,68,0.2)',  }}></i>
                </div>
              </div>

              
              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(255,215,0,0.05)', border: '1px solid rgba(255,215,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px',  }}>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--accent)', marginBottom: '6px',  }}>Preditech Yapay Zeka Mekanik Aşınma Analizi</div>
                  <div style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6',  }}>Aracın mekanik aşınmasına (enjektör, dpf, sensör verileri) göre algoritmalarımız bu aracın kondisyonunun <b style={{ color: '#fff',  }}>170,000 - 190,000 km</b> aralığına denk geldiğini öngörmektedir. Bu araç hor kullanıldıysa yüksek çıkar; aracın rölantide kendini çevirirkenki zorluğundan bütün arızaları ve çalışma düzensizliğine göre yapay zeka destekli oluşturulur.</div>
                </div>
                <i className="ph-bold ph-brain" style={{ fontSize: '40px', color: 'rgba(255,215,0,0.2)', marginLeft: '24px',  }}></i>
              </div>
              
              
              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px',  }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px',  }}>
                     <i className="ph-fill ph-activity" style={{ fontSize: '20px', color: '#00FF88',  }}></i>
                     <div style={{ fontSize: '15px', fontWeight: '800', color: '#00FF88',  }}>NVH (Gürültü, Titreşim ve Sertlik) Analizi</div>
                     <span style={{ fontSize: '10px', background: '#00FF88', color: '#000', padding: '4px 8px', borderRadius: '12px', fontWeight: '800', letterSpacing: '0.5px',  }}>İVMEÖLÇER AKTİF</span>
                  </div>
                  <div style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6',  }}>
                    OBD cihazımızdaki dahili <b style={{ color: '#fff',  }}>3 eksenli yüksek hassasiyetli ivmeölçer</b> ile aracın rölanti titreşimleri, motor kulakları kondisyonu ve şanzıman vuruntu (shift shock) testleri gerçekleştirildi. Titreşim harmonik analizi <b style={{ color: '#00FF88',  }}>fabrika verileriyle %94 eşleşmektedir</b>. Volan ve motor takozlarında anormallik saptanmadı.
                  </div>
                </div>
              </div>
            </div>

            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px',  }}>
              <div className="health-card">
                <div className="hc-header" style={{ color: 'var(--danger)',  }}><i className="ph-fill ph-engine" style={{ fontSize: '24px',  }}></i> Motor Sağlığı</div>
                <div className="hc-value" style={{ color: 'var(--danger)',  }}>%72</div>
                <div className="health-bar"><div className="health-bar-fill" style={{ width: '72%', background: 'var(--danger)',  }}></div></div>
                <div className="hc-desc">Oksijen sensörü (P0171) kaynaklı zengin/fakir karışım problemi tespit edildi. Turbo basınç değerlerinde hafif düşüş var.</div>
              </div>

              <div className="health-card">
                <div className="hc-header" style={{ color: 'var(--success)',  }}><i className="ph-fill ph-gear" style={{ fontSize: '24px',  }}></i> Şanzıman Sağlığı</div>
                <div className="hc-value" style={{ color: 'var(--success)',  }}>%92</div>
                <div className="health-bar"><div className="health-bar-fill" style={{ width: '92%', background: 'var(--success)',  }}></div></div>
                <div className="hc-desc">Vites geçiş gecikmeleri ve kavrama (debriyaj) aşınma değerleri fabrika çıkış limitleri içerisinde normal. Hata kodu yok.</div>
              </div>

              <div className="health-card">
                <div className="hc-header" style={{ color: 'var(--danger)',  }}><i className="ph-fill ph-steering-wheel" style={{ fontSize: '24px',  }}></i> Fren ve Yürür Sistem</div>
                <div className="hc-value" style={{ color: 'var(--danger)',  }}>%63</div>
                <div className="health-bar"><div className="health-bar-fill" style={{ width: '63%', background: 'var(--danger)',  }}></div></div>
                <div className="hc-desc">ABS sisteminde sol ön tekerlek sensörü (C1014) hatası mevcut. EPS direksiyon açı sensöründe iletişim kesintisi kaydedilmiş.</div>
              </div>

              <div className="health-card">
                <div className="hc-header" style={{ color: 'var(--success)',  }}><i className="ph-fill ph-battery-full" style={{ fontSize: '24px',  }}></i> Akü ve Elektrik Sağlığı</div>
                <div className="hc-value" style={{ color: 'var(--success)',  }}>%100</div>
                <div className="health-bar"><div className="health-bar-fill" style={{ width: '100%', background: 'var(--success)',  }}></div></div>
                <div className="hc-desc">Şarj dinamosu tam verim (14.2V) ile çalışıyor. Akü iç direnci ideal seviyede ve herhangi bir kaçak akım tespit edilmedi.</div>
              </div>
            </div>

            
            <div className="report-box">
              <div className="report-box-title" style={{ color: '#fff', borderBottom: 'none',  }}>
                <i className="ph-bold ph-warning-circle"></i> Tespit Edilen Aktif / Geçmiş Hata Kodları (DTC)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '16px',  }}>
                <div className="dtc-item critical">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',  }}>
                    <span className="dtc-code" style={{ color: 'var(--danger)',  }}>P0171</span>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-muted)', padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px',  }}>AKTİF / KALICI</span>
                  </div>
                  <div className="dtc-desc">Sistem Çok Fakir (Bank 1). Oksijen sensörü, kütle hava akış sensörü (MAF) veya yakıt enjektörü kaynaklı arıza. Hava emiş hortumlarında kaçak olabilir.</div>
                </div>

                <div className="dtc-item warning">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',  }}>
                    <span className="dtc-code" style={{ color: 'var(--accent)',  }}>P0300</span>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-muted)', padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px',  }}>GEÇMİŞ (SİLİNMİŞ)</span>
                  </div>
                  <div className="dtc-desc">Rastgele / Çoklu Silindir Teklemesi Tespit Edildi. Ateşleme bobini veya bujilerden kaynaklanmış olabilir. ECU verilerinde geçmişte 2 kez silinmiş.</div>
                </div>
              </div>
            </div>

            
            <div className="report-box" style={{ marginTop: '16px',  }}>
              <div className="report-box-title" style={{ color: '#fff', borderBottom: 'none',  }}>
                <i className="ph-bold ph-car-profile"></i> Kaporta ve Boya Ekspertizi
              </div>
              <p style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-muted)', marginBottom: '24px',  }}>Aracın dijital şemasından parçayı seçin ve üst menüden boya/değişen durumunu işaretleyin.</p>
              
              
              <div className="color-legend">
                <div className="cl-item active" onClick={(event) => { setPaintMode('cp-orijinal', event.currentTarget) }}><div className="cl-box" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)',  }}></div> Orijinal</div>
                <div className="cl-item" onClick={(event) => { setPaintMode('cp-lokal', event.currentTarget) }}><div className="cl-box" style={{ background: '#FF9800',  }}></div> Lokal Boyalı</div>
                <div className="cl-item" onClick={(event) => { setPaintMode('cp-boyali', event.currentTarget) }}><div className="cl-box" style={{ background: '#2196F3',  }}></div> Boyalı</div>
                <div className="cl-item" onClick={(event) => { setPaintMode('cp-degisen', event.currentTarget) }}><div className="cl-box" style={{ background: '#F44336',  }}></div> Değişen</div>
              </div>

              
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px', background: 'rgba(0,0,0,0.3)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.03)', position: 'relative',  }}>
                <div style={{ position: 'relative', maxWidth: '600px', width: '100%',  }}>
                  
                  <img src="/assets/images/general/car_placeholder.png" alt="Kaporta Haritası" style={{ width: '100%', height: 'auto',  }} />
                </div>

                <div style={{ position: 'absolute', bottom: '24px', right: '24px',  }}>
                  <button className="btn-gradient" style={{ padding: '14px 24px', fontSize: '14px', borderRadius: '12px',  }}><i className="ph-bold ph-check" style={{ fontSize: '20px',  }}></i> Durumu Kaydet</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      <section id="xper-compare-view" className="xper-panel-content">
        <button onClick={() => { switchXperView('report') }} className="btn" style={{ marginBottom: '16px',  }}>
          <i className="ph-bold ph-arrow-left"></i> Rapora Dön
        </button>
        
      </section>

    </div>
  </div>
</div>


<div id="deviceMenuModal" className="modal-overlay">
  <div className="modal-content">
    <i className="ph-bold ph-device-tablet" style={{ fontSize: '56px', color: 'var(--accent)', marginBottom: '16px',  }}></i>
    <h3 id="deviceMenuTitle" style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.5px',  }}>Cihaz Ayarları</h3>
    <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '32px',  }}>Bu cihaz veya hesap için yapmak istediğiniz işlemi seçin.</p>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px',  }}>
      <button onClick={() => { closeDeviceMenu(); }} style={{ width: '100%', padding: '16px', background: 'var(--accent)', color: '#000', border: 'none', borderRadius: '12px', fontWeight: '800', fontSize: '15px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px',  }}>
        <i className="ph-bold ph-star" style={{ fontSize: '22px',  }}></i> Aboneliği Göster
      </button>
      <button onClick={() => { closeDeviceMenu(); }} style={{ width: '100%', padding: '16px', background: 'rgba(255,68,68,0.1)', color: 'var(--danger)', border: '1px solid rgba(255,68,68,0.2)', borderRadius: '12px', fontWeight: '800', fontSize: '15px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px',  }}>
        <i className="ph-bold ph-sign-out" style={{ fontSize: '22px',  }}></i> Hesaptan Çık
      </button>
      <button onClick={() => { closeDeviceMenu() }} style={{ width: '100%', padding: '16px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', fontWeight: '700', fontSize: '15px', cursor: 'pointer', marginTop: '8px',  }}>
        İptal
      </button>
    </div>
  </div>
</div>

<div id="subscriptionModal" className="modal-overlay">
  <div className="modal-content" style={{ width: '500px', textAlign: 'left',  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px',  }}>
      <h3 style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-0.5px', color: '#fff',  }}>Abonelik Detayları</h3>
      <i className="ph-bold ph-x" style={{ fontSize: '24px', color: 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.2s',  }} onMouseOver="this.style.color='#fff'" onMouseOut="this.style.color='var(--text-muted)'" onClick={() => { document.getElementById('subscriptionModal').style.display='none' }}></i>
    </div>
    
    <div style={{ padding: '24px', background: 'linear-gradient(135deg, rgba(0,255,136,0.1) 0%, rgba(0,0,0,0.4) 100%)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '16px', marginBottom: '24px',  }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px',  }}>
        <i className="ph-fill ph-crown" style={{ fontSize: '32px', color: '#00FF88',  }}></i>
        <div>
          <div style={{ fontSize: '18px', fontWeight: '800', color: '#fff',  }}>Premium Xper Planı</div>
          <div style={{ fontSize: '14px', color: '#00FF88', fontWeight: '700',  }}>Sınırsız Araç / Aylık</div>
        </div>
      </div>
      <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', fontWeight: '500',  }}>Preditech sistemlerinin tüm özelliklerine (Yapay Zeka Mekanik, KM Doğrulama, NVH Titreşim Analizi vb.) tam erişiminiz bulunmaktadır.</p>
    </div>

    <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#fff', marginBottom: '12px', letterSpacing: '0.5px',  }}>SATIN ALINAN CİHAZ DONANIMLARI</h4>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px',  }}>
      <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',  }}>
        <div>
          <div style={{ fontSize: '15px', fontWeight: '800', color: '#fff',  }}>Preditech X-OBD Pro V2</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px',  }}>Seri No: PTX-849201 • Alım: 01.01.2024</div>
        </div>
        <i className="ph-fill ph-check-circle" style={{ fontSize: '24px', color: '#00FF88',  }}></i>
      </div>
      <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',  }}>
        <div>
          <div style={{ fontSize: '15px', fontWeight: '800', color: '#fff',  }}>NVH Hassas İvmeölçer Modülü</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px',  }}>Seri No: PTN-22104 • Alım: 15.02.2024</div>
        </div>
        <i className="ph-fill ph-check-circle" style={{ fontSize: '24px', color: '#00FF88',  }}></i>
      </div>
    </div>
  </div>
</div>




    </>
  );
}
