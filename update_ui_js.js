const fs = require('fs');

let page = fs.readFileSync('src/app/erken-erisim/page.tsx', 'utf8');

const newAddonHTML = `
  <div class="addon-card-container" style="display:flex; flex-direction:column; gap:16px;">
    <!-- Racebox -->
    <label class="addon-card" style="display:flex; align-items:center; justify-content:space-between; background:var(--surface2); border:1px solid rgba(255,255,255,0.05); padding:16px 20px; border-radius:16px; cursor:pointer;">
      <div style="display:flex; align-items:center; gap:16px;">
        <img src="/assets/images/devices/preditech racebox.png" alt="Racebox" style="width:50px; height:50px; object-fit:contain;">
        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <h4 style="font-size:16px; margin:0; font-weight:800;">Racebox Eklentisi</h4>
            <div class="addon-info-btn">
              <i class="ph-fill ph-info"></i>
              <div class="addon-info-tooltip">
                <strong>Racebox Nedir?</strong><br>
                Gelişmiş performans sensörleri sayesinde 0-100 km/s hızlanma, frenleme mesafesi ve G-Force verilerinizi GPS bazlı %99 hassasiyetle ölçer. Pist günleri ve performans takibi için vazgeçilmezdir.
              </div>
            </div>
          </div>
          <span style="font-size:14px; color:var(--text2); font-weight:500;">Tip-C Performans Hub'ı</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:16px;">
        <span style="font-size:16px; color:var(--text); font-weight:800;">+ 3.500₺</span>
        <input type="checkbox" id="addon-racebox" class="addon-checkbox-input" value="3500" data-name="Racebox Eklentisi" style="display:none;">
        <div class="addon-custom-checkbox"><i class="ph-bold ph-check"></i></div>
      </div>
    </label>

    <!-- Sentinel -->
    <label class="addon-card" style="display:flex; align-items:center; justify-content:space-between; background:var(--surface2); border:1px solid rgba(255,255,255,0.05); padding:16px 20px; border-radius:16px; cursor:pointer;">
      <div style="display:flex; align-items:center; gap:16px;">
        <img src="/assets/images/devices/preditech sentinel.png" alt="Sentinel" style="width:50px; height:50px; object-fit:contain;">
        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <h4 style="font-size:16px; margin:0; font-weight:800;">Sentinel Eklentisi</h4>
            <div class="addon-info-btn">
              <i class="ph-fill ph-info"></i>
              <div class="addon-info-tooltip">
                <strong>Sentinel Nedir?</strong><br>
                Yapay zeka destekli akıllı araç içi kamerası (Dashcam). OBD-II'den gelen telemetri verilerini doğrudan 4K videonun üzerine yazarak kaza anında kanıt sağlar ve şerit takibi yapar.
              </div>
            </div>
          </div>
          <span style="font-size:14px; color:var(--text2); font-weight:500;">4K Akıllı Dashcam</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:16px;">
        <span style="font-size:16px; color:var(--text); font-weight:800;">+ 5.500₺</span>
        <input type="checkbox" id="addon-sentinel" class="addon-checkbox-input" value="5500" data-name="Sentinel Eklentisi" style="display:none;">
        <div class="addon-custom-checkbox"><i class="ph-bold ph-check"></i></div>
      </div>
    </label>

    <!-- Cursor -->
    <label class="addon-card" style="display:flex; align-items:center; justify-content:space-between; background:var(--surface2); border:1px solid rgba(255,255,255,0.05); padding:16px 20px; border-radius:16px; cursor:pointer;">
      <div style="display:flex; align-items:center; gap:16px;">
        <img src="/assets/images/devices/preditech cursor.png" alt="Cursor" style="width:50px; height:50px; object-fit:contain;">
        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <h4 style="font-size:16px; margin:0; font-weight:800;">Cursor Eklentisi</h4>
            <div class="addon-info-btn">
              <i class="ph-fill ph-info"></i>
              <div class="addon-info-tooltip">
                <strong>Cursor Nedir?</strong><br>
                Özelleştirilebilir dijital ek gösterge paneli (Gauge). Turbo basıncı (Boost), AFR, EGR sıcaklığı gibi telefonunuza bakmadan görmek istediğiniz anlık verileri direksiyon arkasında sunar.
              </div>
            </div>
          </div>
          <span style="font-size:14px; color:var(--text2); font-weight:500;">Akıllı Gösterge Paneli</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:16px;">
        <span style="font-size:16px; color:var(--text); font-weight:800;">+ 2.200₺</span>
        <input type="checkbox" id="addon-cursor" class="addon-checkbox-input" value="2200" data-name="Cursor Eklentisi" style="display:none;">
        <div class="addon-custom-checkbox"><i class="ph-bold ph-check"></i></div>
      </div>
    </label>
  </div>
`;

// Extract old Addon section and replace it
const startTag = '<div class="addon-card-container" style="display:flex; flex-direction:column; gap:12px;">';
const endTag = '</div>\n</div>\n\n<h3 style="font-size:24px;margin-bottom:24px;margin-top:40px">2. Teslimat Bilgileri</h3>';

const startIdx = page.indexOf(startTag);
if(startIdx !== -1) {
  const endIdx = page.indexOf(endTag, startIdx);
  if(endIdx !== -1) {
    page = page.substring(0, startIdx) + newAddonHTML + page.substring(endIdx);
    fs.writeFileSync('src/app/erken-erisim/page.tsx', page);
  }
}

// 2. Fix js logic
let js = fs.readFileSync('public/js/erken-erisim.js', 'utf8');

const jsAdditions = `
function updateTotalPrice() {
  const summaryPrice = document.getElementById('summaryPrice');
  const budgetInput = document.getElementById('customBudgetInput');
  const device = currentDevice;
  
  let basePriceStr = '0₺';
  if(device === 'CUSTOM') {
     basePriceStr = budgetInput.value ? budgetInput.value + '₺' : '0₺';
  } else if (device === 'WISHLIST') {
     basePriceStr = 'Ücretsiz';
  } else {
     const activeCard = document.querySelector('.device-card.active');
     if(activeCard) basePriceStr = activeCard.getAttribute('data-price');
  }

  let basePriceNum = parseInt(basePriceStr.replace(/[^0-9]/g, '')) || 0;
  if(device === 'WISHLIST') basePriceNum = 0;

  let addonsTotal = 0;
  document.querySelectorAll('.addon-checkbox-input').forEach(cb => {
    if(cb.checked) {
      addonsTotal += parseInt(cb.value);
    }
  });

  if (device === 'WISHLIST') {
    summaryPrice.innerText = 'Ücretsiz';
  } else if (addonsTotal > 0 && basePriceNum > 0) {
    summaryPrice.innerText = (basePriceNum + addonsTotal).toLocaleString('tr-TR') + '₺';
  } else {
    summaryPrice.innerText = basePriceStr;
  }
}
`;

// Insert the updateTotalPrice function
js = js.replace('// Device Selection Logic', jsAdditions + '\n// Device Selection Logic');

// In addon checkbox click:
js = js.replace(
  "card.classList.remove('active');\n    }", 
  "card.classList.remove('active');\n    }\n    updateTotalPrice();"
);

// In toggleAddons
js = js.replace(
  "cb.closest('.addon-card').classList.remove('active');\n      });",
  "cb.closest('.addon-card').classList.remove('active');\n      });\n      updateTotalPrice();"
);

// In device selection end:
js = js.replace(
  "currentDevice = device;\n      toggleAddons(device);\n    }\n  });",
  "currentDevice = device;\n      toggleAddons(device);\n    }\n    updateTotalPrice();\n  });"
);

// In budgetInput event
js = js.replace(
  "summaryPrice.innerText = value + '₺';",
  "updateTotalPrice();"
);

fs.writeFileSync('public/js/erken-erisim.js', js);
console.log("Updated early access html and js");
