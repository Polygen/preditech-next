window.initekspertizjs = function() {
{

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
          <div style="padding:16px 24px; background:rgba(255,215,0,0.08); border:1px solid rgba(255,215,0,0.2); border-radius:16px; display:flex; align-items:center; justify-content:space-between;">
            <div style="display:flex; align-items:center; gap:16px; color:var(--accent); font-size:14px; font-weight:700;">
              <i class="ph-fill ph-warning-circle" style="font-size:32px;"></i>
              DİKKAT: Bu aracın daha önce test edilmiş bir raporu bulunmaktadır.
            </div>
            <button onclick="switchXperView('compare')" class="btn" style="background:var(--accent); color:#000;"><i class="ph-bold ph-git-diff"></i> Raporu Karşılaştır</button>
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

}
};
