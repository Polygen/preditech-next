window.initfiloprofiljs = function() {
{

  function openModal(id) { document.getElementById(id).classList.add('active'); }
  function closeModal(id) { document.getElementById(id).classList.remove('active'); }

  // Close modals on overlay click
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('fleet-modal-overlay')) {
      e.target.classList.remove('active');
    }
  });

  function switchFiloTab(e, tabId) {
    if(e) e.preventDefault();
    document.querySelectorAll(".filo-tab-content").forEach(el => el.style.display="none");
    document.getElementById("tab-"+tabId).style.display="block";
    document.querySelectorAll(".sidebar-link").forEach(el => el.classList.remove("active"));
    if(e) e.currentTarget.classList.add("active");
  }

  function filterCars() {
    const searchVal = document.getElementById('carSearchInput').value.toLowerCase();
    const statusVal = document.getElementById('carStatusFilter').value;
    document.querySelectorAll('.car-row').forEach(row => {
      const text = row.innerText.toLowerCase();
      const rowStatus = row.getAttribute('data-status');
      row.style.display = (text.includes(searchVal) && (statusVal === 'all' || rowStatus === statusVal)) ? '' : 'none';
    });
  }

  function filterDrivers() {
    const searchVal = document.getElementById('driverSearchInput').value.toLowerCase();
    document.querySelectorAll('.driver-row').forEach(row => {
      row.style.display = row.innerText.toLowerCase().includes(searchVal) ? '' : 'none';
    });
  }

  const carPhotos = {
    'egea': '/assets/images/general/car_egea.png',
    'clio': '/assets/images/general/car_clio.png',
    'megane': '/assets/images/general/car_megane.png',
    'corolla': '/assets/images/general/car_corolla.png'
  };

  const vehicles = {
    'egea1': { model: 'Fiat Egea', plate: '34 OK 321', driver: 'Sinan Aslan', status: 'Sorunsuz', color: '#00FF88', fault: '', maintenance: '12 Ekim 2026', temp: '92°C', speed: '74', avgspeed: '42', idle: '18', risk: 14, photo: 'egea' },
    'egea2': { model: 'Fiat Egea', plate: '34 OK 322', driver: 'Hasan Öztürk', status: 'Sorunsuz', color: '#00FF88', fault: '', maintenance: '5 Eylül 2026', temp: '88°C', speed: '23', avgspeed: '38', idle: '5', risk: 8, photo: 'egea' },
    'clio1': { model: 'Renault Clio', plate: '34 OK 323', driver: 'Erdem Cihan', status: 'Kritik Uyarı', color: 'var(--danger)', fault: 'Eksantrik Mili Pozisyon Sensörü Hatası', maintenance: 'Acil Bakım Öneriliyor', temp: '105°C', speed: '0', avgspeed: '21', idle: '42', risk: 35, photo: 'clio' },
    'megane1': { model: 'Renault Megane', plate: '34 OK 512', driver: 'Ali Yılmaz', status: 'Sorunsuz', color: '#00FF88', fault: '', maintenance: '15 Kasım 2025', temp: '90°C', speed: '45', avgspeed: '52', idle: '12', risk: 11, photo: 'megane' },
    'corolla1': { model: 'Toyota Corolla', plate: '34 OK 633', driver: 'Veli Demir', status: 'Sorunsuz', color: '#00FF88', fault: '', maintenance: '22 Aralık 2025', temp: '89°C', speed: '62', avgspeed: '48', idle: '8', risk: 6, photo: 'corolla' }
  };

  function showMapDetail(id) {
    const data = vehicles[id];
    document.querySelectorAll('.map-vehicle-card').forEach(el => {
      el.style.background = 'transparent'; el.style.color = '#fff'; el.style.border = '1px solid rgba(255,255,255,0.05)';
    });
    const clickedCard = document.querySelector('.map-vehicle-card[onclick="showMapDetail(\''+id+'\')"]');
    if(clickedCard) { clickedCard.style.background = 'var(--accent)'; clickedCard.style.color = '#000'; clickedCard.style.border = 'none'; }

    document.getElementById('map-detail-panel').style.display = 'flex';
    document.getElementById('md-model').innerText = data.model;
    document.getElementById('md-plate').innerText = data.plate;
    document.getElementById('md-driver').innerText = data.driver;
    document.getElementById('md-carphoto').src = carPhotos[data.photo];

    const statusEl = document.getElementById('md-status');
    statusEl.innerText = data.status;
    statusEl.style.color = data.color;
    statusEl.style.background = data.status === 'Sorunsuz' ? 'rgba(0,255,136,0.1)' : 'rgba(255,68,68,0.1)';

    const faultCont = document.getElementById('md-fault-container');
    if(data.fault) { faultCont.style.display = 'block'; document.getElementById('md-fault').innerText = data.fault; }
    else { faultCont.style.display = 'none'; }

    document.getElementById('md-maintenance').innerText = data.maintenance;
    document.getElementById('md-temp').innerText = data.temp;
    document.getElementById('md-speed').innerText = data.speed + ' km/s';
    document.getElementById('md-avgspeed').innerText = data.avgspeed + ' km/s';

    const idleEl = document.getElementById('md-idle');
    idleEl.innerText = data.idle + ' Dk';
    idleEl.style.color = parseInt(data.idle) > 20 ? 'var(--danger)' : '#fff';

    document.getElementById('md-risk').innerText = '%' + data.risk;
    document.getElementById('md-risk-bar').style.width = data.risk + '%';
    document.getElementById('md-risk-bar').style.background = data.risk > 20 ? 'var(--danger)' : 'var(--accent)';
  }

  function closeMapDetail() {
    document.getElementById('map-detail-panel').style.display = 'none';
    document.querySelectorAll('.map-vehicle-card').forEach(el => {
      el.style.background = 'transparent'; el.style.color = '#fff'; el.style.border = '1px solid rgba(255,255,255,0.05)';
    });
  }

  function toggleMapFullscreen() {
    const container = document.getElementById('map-container');
    const btn = document.getElementById('mapExpandBtn');
    if (container.classList.contains('map-fullscreen-active')) {
      container.classList.remove('map-fullscreen-active');
      btn.innerHTML = '<i class="ph ph-arrows-out"></i> Büyüt';
    } else {
      container.classList.add('map-fullscreen-active');
      btn.innerHTML = '<i class="ph ph-arrows-in"></i> Küçült';
    }
  }

  function togglePanel(id) {
    const container = document.getElementById(id);
    if (container.classList.contains('panel-fullscreen')) {
      container.classList.remove('panel-fullscreen');
    } else {
      container.classList.add('panel-fullscreen');
    }
  }

  function sendNotification() {
    const msg = document.getElementById('fleetMessageInput').value;
    if(!msg) return alert("Lütfen bir mesaj yazın.");
    alert("Bildirim filodaki tüm cihazlara (GO, PRO, GT) başarıyla iletildi!");
    closeModal('fleetNotificationModal');
    document.getElementById('fleetMessageInput').value = '';
  }

  // Violation Drilldown
  const violationData = {
    'anifrenleme': { title: 'Ani Frenleme — En Çok Yapan Sürücüler', data: [
      { name: 'Deniz Dağlar', count: 45 }, { name: 'Sinan Aktaş', count: 38 },
      { name: 'Ali Yılmaz', count: 28 }, { name: 'Erdem Cihan', count: 18 },
      { name: 'Hasan Öztürk', count: 8 }, { name: 'Veli Demir', count: 5 }
    ]},
    'serthizlanma': { title: 'Sert Hızlanma — En Çok Yapan Sürücüler', data: [
      { name: 'Ali Yılmaz', count: 32 }, { name: 'Deniz Dağlar', count: 22 },
      { name: 'Sinan Aktaş', count: 15 }, { name: 'Erdem Cihan', count: 10 },
      { name: 'Veli Demir', count: 4 }, { name: 'Hasan Öztürk', count: 2 }
    ]},
    'hizihlali': { title: 'Hız Sınırı İhlali — En Çok Yapan Sürücüler', data: [
      { name: 'Deniz Dağlar', count: 14 }, { name: 'Sinan Aktaş', count: 10 },
      { name: 'Ali Yılmaz', count: 6 }, { name: 'Erdem Cihan', count: 4 }
    ]},
    'viraj': { title: 'Tehlikeli Viraj Girişi — En Çok Yapan Sürücüler', data: [
      { name: 'Deniz Dağlar', count: 5 }, { name: 'Ali Yılmaz', count: 4 },
      { name: 'Sinan Aktaş', count: 3 }
    ]}
  };

  function showViolationDrilldown(type) {
    const info = violationData[type];
    document.getElementById('violationModalTitle').innerText = info.title;
    const maxCount = info.data[0].count;
    let html = '<div style="display:flex; flex-direction:column; gap:16px;">';
    info.data.forEach((d, i) => {
      const pct = (d.count / maxCount * 100).toFixed(0);
      html += '<div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;"><span style="font-weight:700;">' + (i+1) + '. ' + d.name + '</span><span style="font-weight:700;color:var(--accent);">' + d.count + ' kez</span></div>';
      html += '<div style="width:100%;height:6px;background:#222;border-radius:3px;"><div style="width:' + pct + '%;height:100%;background:var(--accent);border-radius:3px;transition:width 0.5s;"></div></div></div>';
    });
    html += '</div>';
    document.getElementById('violationModalContent').innerHTML = html;
    openModal('violationModal');
  }

  // Fuel Unit Toggle with animated bar heights
  const litreHeights = [160,153,150,143,140,133,127,120,117,113];
  const tlHeights = [96,97,101,105,109,112,114,119,122,128];
  
  function setFuelUnit(unit, btn) {
    document.querySelectorAll('.fuel-toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const bars = document.querySelectorAll('.fuel-bar');
    const subtitle = document.getElementById('fuelSubtitle');
    const headline = document.getElementById('fuelHeadline');
    const subheadline = document.getElementById('fuelSubheadline');
    const heights = unit === 'tl' ? tlHeights : litreHeights;

    if (unit === 'tl') {
      subtitle.innerText = 'Birim: ₺ Türk Lirası';
      headline.innerText = '+%33';
      headline.style.color = 'var(--danger)';
      subheadline.innerText = 'Enflasyon etkisiyle yakıt maliyeti geçen yıla göre +%33 arttı';
      subheadline.style.color = 'var(--danger)';
      bars.forEach((bar, i) => {
        const tl = bar.getAttribute('data-tl');
        const label = document.getElementById('fb-label-' + i);
        if (label) label.innerText = '₺' + Number(tl).toLocaleString('tr-TR');
        const barEl = bar.querySelector('.fb-bar');
        if (barEl && heights[i]) barEl.style.height = heights[i] + 'px';
      });
    } else {
      subtitle.innerText = 'Birim: Litre';
      headline.innerText = '-%14';
      headline.style.color = '#fff';
      subheadline.innerText = 'Geçen aya göre litre bazında -%8 tasarruf edildi';
      subheadline.style.color = '#00FF88';
      bars.forEach((bar, i) => {
        const litre = bar.getAttribute('data-litre');
        const label = document.getElementById('fb-label-' + i);
        if (label) label.innerText = Number(litre).toLocaleString('tr-TR') + ' L';
        const barEl = bar.querySelector('.fb-bar');
        if (barEl && heights[i]) barEl.style.height = heights[i] + 'px';
      });
    }
  }

  // Driver Profile Tab Switcher
  function switchDPTab(e, tabId) {
    const modal = e.currentTarget.closest('.fleet-modal');
    let oldHeight = 0;
    if (modal) {
      oldHeight = modal.offsetHeight;
      modal.style.height = oldHeight + 'px';
    }

    document.querySelectorAll('.dp-tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.driver-profile-tab').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    e.currentTarget.classList.add('active');

    if (modal) {
      modal.style.height = 'auto';
      const newHeight = modal.offsetHeight;
      modal.style.height = oldHeight + 'px';
      modal.style.transition = 'height 0.3s ease-in-out';
      void modal.offsetHeight; // force reflow
      modal.style.height = newHeight + 'px';
      setTimeout(() => {
        modal.style.height = 'auto';
        modal.style.transition = '';
      }, 300);
    }
  }
  
  // Vehicle Detail Tab Switcher
  function switchVDTab(e, tabId) {
    const modal = e.currentTarget.closest('.fleet-modal');
    let oldHeight = 0;
    if (modal) {
      oldHeight = modal.offsetHeight;
      modal.style.height = oldHeight + 'px';
    }

    document.querySelectorAll('#vehicleDetailModal .dp-tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('#vehicleDetailModal .driver-profile-tab').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    e.currentTarget.classList.add('active');

    if (modal) {
      modal.style.height = 'auto';
      const newHeight = modal.offsetHeight;
      modal.style.height = oldHeight + 'px';
      modal.style.transition = 'height 0.3s ease-in-out';
      void modal.offsetHeight; // force reflow
      modal.style.height = newHeight + 'px';
      setTimeout(() => {
        modal.style.height = 'auto';
        modal.style.transition = '';
      }, 300);
    }
  }
  
  // Open Driver Profile Modal
  function openDriverProfile(name, score, hours, status, vehicle) {
    document.getElementById('dp-name').innerText = name;
    document.getElementById('dp-score').innerText = 'Sürüş Puanı: ' + score;
    document.getElementById('dp-hours').innerText = 'Toplam: ' + hours + ' saat';
    document.getElementById('dp-vehicle').innerText = vehicle;
    const statusEl = document.getElementById('dp-status');
    if(status === 'Sürüyor') { statusEl.innerText = 'Aktif'; statusEl.style.background = 'rgba(0,255,136,0.1)'; statusEl.style.color = '#00FF88'; }
    else { statusEl.innerText = 'Çevrimdışı'; statusEl.style.background = 'rgba(255,255,255,0.05)'; statusEl.style.color = 'var(--text2)'; }
    // Reset to first tab
    document.querySelectorAll('#driverProfileModal .dp-tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('#driverProfileModal .driver-profile-tab').forEach(el => el.classList.remove('active'));
    document.getElementById('dp-genel').classList.add('active');
    document.querySelector('#driverProfileModal .driver-profile-tab').classList.add('active');
    openModal('driverProfileModal');
  }
  
  // Open Vehicle Detail Modal
  function openVehicleDetail(type, name, plate, driver, status, speed, fuel, temp, rpm) {
    document.getElementById('vd-name').innerText = name;
    document.getElementById('vd-plate').innerText = plate;
    document.getElementById('vd-photo').src = carPhotos[type] || '/assets/images/general/car_egea.png';
    document.getElementById('vd-rpm').innerText = rpm || '2.450';
    document.getElementById('vd-temp').innerText = (temp || '88') + '°C';
    document.getElementById('vd-speed').innerText = speed || '0';
    document.getElementById('vd-fuel').innerText = (fuel || '50') + '%';
    const vstatus = document.getElementById('vd-vstatus');
    if(status === 'Aktif') { vstatus.innerText = 'Aktif'; vstatus.style.background = 'rgba(0,255,136,0.1)'; vstatus.style.color = '#00FF88'; }
    else { vstatus.innerText = 'Pasif'; vstatus.style.background = 'rgba(255,255,255,0.05)'; vstatus.style.color = 'var(--text2)'; }
    // Reset to first tab
    document.querySelectorAll('#vehicleDetailModal .dp-tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('#vehicleDetailModal .driver-profile-tab').forEach(el => el.classList.remove('active'));
    document.getElementById('vd-telemetri').classList.add('active');
    document.querySelector('#vehicleDetailModal .driver-profile-tab').classList.add('active');
    openModal('vehicleDetailModal');
  }
  
  // Vehicle Type Filter
  function filterVehicleType(btn, type) {
    document.querySelectorAll('.vehicle-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    document.querySelectorAll('.car-row').forEach(row => {
      if (type === 'all') {
        row.style.display = '';
        return;
      }
      
      const speedText = row.querySelector('td:nth-child(5)').innerText || "0";
      const statusText = row.querySelector('td:nth-child(2)').innerText || "";
      const speed = parseInt(speedText) || 0;
      const statusAttr = row.getAttribute('data-status');
      
      let match = false;
      if (type === 'hareketli' && speed > 0) match = true;
      if (type === 'duran' && speed === 0) match = true;
      if (type === 'rolanti' && speed === 0 && statusText.includes('Aktif')) match = true;
      if (type === 'cekilen' && statusAttr === 'Çekilen') match = true;
      if (type === 'stok' && statusAttr === 'Stok') match = true;
      if (type === 'arizali' && statusAttr === 'Arızalı') match = true;
      if (type === 'acil' && statusAttr === 'Acil') match = true;
      if (type === 'gps' && statusAttr === 'GPS Yok') match = true;
      row.style.display = match ? '' : 'none';
    });
  }
  
  // --- ADVANCED ANALYTICS JS ---
  const advData = {
    driver: {
      metrics: [
        {val: 'score', text: 'Sürüş Puanı'},
        {val: 'fuel', text: 'Yakıt Tüketimi (Litre)'},
        {val: 'idle', text: 'Rölanti Süresi (Dk)'},
        {val: 'violations', text: 'İhlal Sayısı'},
        {val: 'smoke', text: 'İçilen Sigara Sayısı'},
        {val: 'crash', text: 'Kaza Sayısı'},
        {val: 'corner', text: 'Tehlikeli Viraj Sayısı'}
      ],
      columns: ['Sürücü', 'Yakıt (Litre)', 'İhlal Sayısı', 'Yasak Bölge', 'Rölanti (Dk)', 'Sürüş Puanı'],
      rows: [
        {id:'d1', name:'Hasan Öztürk', color:'var(--accent)', cols:['2.583', '8', '0', '5.556', '98']},
        {id:'d2', name:'Erdem Cihan', color:'#9d4edd', cols:['1.799', '4', '0', '136', '92']},
        {id:'d3', name:'Deniz Dağlar', color:'#00FF88', cols:['1.742', '4', '0', '240', '89']}
      ]
    },
    vehicle: {
      metrics: [
        {val: 'engine', text: 'Motor Ömrü (%)'},
        {val: 'transmission', text: 'Şanzıman Ömrü (%)'},
        {val: 'brake', text: 'Fren Ömrü (%)'},
        {val: 'tire', text: 'Lastik Ömrü (%)'},
        {val: 'breakdown', text: 'Arıza Sayısı'},
        {val: 'upcoming_breakdown', text: 'Yaklaşan Arıza Sayısı'},
        {val: 'crash', text: 'Kaza Sayısı'}
      ],
      columns: ['Araç (Plaka - Model)', 'Motor Ömrü', 'Şanzıman Ömrü', 'Fren Ömrü', 'Arıza Sayısı', 'Kaza Sayısı'],
      rows: [
        {id:'v1', name:'34 OK 322 (Fiat Egea)', color:'var(--accent)', cols:['%72', '%92', '%84', '2', '0']},
        {id:'v2', name:'34 AB 123 (Renault Clio)', color:'#9d4edd', cols:['%85', '%90', '%75', '0', '1']},
        {id:'v3', name:'34 CD 456 (Ford Focus)', color:'#00FF88', cols:['%95', '%98', '%92', '0', '0']}
      ]
    },
    region: {
      metrics: [
        {val: 'vehicle_count', text: 'Bölgedeki Araç Sayısı'},
        {val: 'idle', text: 'Bölgesel Rölanti (Dk)'},
        {val: 'violation', text: 'Bölgesel İhlal'}
      ],
      columns: ['Bölge', 'Araç Sayısı', 'Ort. Rölanti (Dk)', 'Toplam İhlal'],
      rows: [
        {id:'r1', name:'Sarıyer', color:'var(--accent)', cols:['10', '45', '12']},
        {id:'r2', name:'Kadıköy', color:'#9d4edd', cols:['15', '30', '8']},
        {id:'r3', name:'Beşiktaş', color:'#00FF88', cols:['8', '50', '20']}
      ]
    }
  };

  function updateAdvancedAnalytics() {
    const breakdown = document.getElementById('adv-breakdown-select').value;
    const data = advData[breakdown];
    
    // Update metric select
    const metricSelect = document.getElementById('adv-metric-select');
    metricSelect.innerHTML = data.metrics.map(m => `<option value="${m.val}">${m.text}</option>`).join('');
    
    // Update table head
    const thead = document.getElementById('adv-table-head');
    thead.innerHTML = `<tr><th style="padding:12px; width:40px;"></th>` + 
      data.columns.map(c => `<th style="padding:12px; font-weight:600; color:var(--text2);">${c}</th>`).join('') + `</tr>`;
      
    // Update table body
    const tbody = document.getElementById('adv-table-body');
    tbody.innerHTML = data.rows.map(r => `
      <tr style="border-bottom:1px solid rgba(255,255,255,0.02); transition:background 0.2s; cursor:pointer;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">
        <td style="padding:12px; display:flex; align-items:center; gap:8px;">
          <input type="checkbox" checked style="accent-color:${r.color};" class="adv-row-checkbox" data-id="${r.id}" data-color="${r.color}" onchange="updateAdvancedChart()">
          <div style="width:12px; height:12px; background:${r.color}; border-radius:2px;"></div>
        </td>
        <td style="padding:12px; font-weight:600;">${r.name}</td>
        ${r.cols.map(c => `<td style="padding:12px;">${c}</td>`).join('')}
      </tr>
    `).join('');
    
    updateAdvancedChart();
  }

  function updateAdvancedChart() {
    const checkboxes = Array.from(document.querySelectorAll('.adv-row-checkbox'));
    const svg = document.getElementById('adv-svg-chart');
    if(!svg) return;
    
    // Clear SVG
    svg.innerHTML = '';
    
    // Check if we want bar or line based on our custom state, defaulting to line here
    let isBarChart = window._advChartType === 'bar';
    
    checkboxes.forEach((cb, idx) => {
      if(cb.checked) {
        // Randomize points uniquely for each row/metric
        let points = [];
        for(let i=0; i<=10; i++) {
          const x = i * 100;
          const y = Math.floor(Math.random() * 200) + 50; 
          points.push(`${x},${y}`);
          
          if(isBarChart && i < 10) {
             const barWidth = 10;
             const barX = x + (idx * (barWidth + 2)) + 10;
             svg.innerHTML += `<rect x="${barX}" y="${y}" width="${barWidth}" height="${320 - y}" fill="${cb.getAttribute('data-color')}" />`;
          }
        }
        
        if(!isBarChart) {
          svg.innerHTML += `<polyline points="${points.join(' ')}" fill="none" stroke="${cb.getAttribute('data-color')}" stroke-width="2" vector-effect="non-scaling-stroke" />`;
        }
      }
    });
  }
  
  function setAdvChartType(type) {
    window._advChartType = type;
    updateAdvancedChart();
  }
  
  // Make the checkboxes from initial HTML have the class so they trigger redraw
  
    document.querySelectorAll('#adv-table-body input[type=checkbox]').forEach(cb => {
      cb.classList.add('adv-row-checkbox');
      const colorDiv = cb.nextElementSibling;
      if(colorDiv) {
         cb.setAttribute('data-color', colorDiv.style.background);
      } else {
         cb.setAttribute('data-color', 'var(--accent)');
      }
      cb.addEventListener('change', updateAdvancedChart);
    });
    // Set initial custom prop
    window._advChartType = 'line';
  
}
};
