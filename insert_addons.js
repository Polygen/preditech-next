const fs = require('fs');

let c = fs.readFileSync('src/app/erken-erisim/page.tsx', 'utf8');

const addonHTML = `
<div id="addonsSection" style="margin-top:40px;">
  <h3 style="font-size:24px;margin-bottom:24px;display:flex;align-items:center;gap:8px">
    <i class="ph-fill ph-plugs-connected" style="color:var(--accent)"></i> İsteğe Bağlı Eklentiler
  </h3>
  <p style="font-size:13px; color:var(--text2); margin-bottom:20px;">Ana cihazınıza ek olarak sisteminizi güçlendirecek çevre birimlerini siparişinize dahil edebilirsiniz. (Go modeli desteklemez)</p>
  
  <div class="addon-card-container" style="display:flex; flex-direction:column; gap:12px;">
    <!-- Racebox -->
    <label class="addon-card" style="display:flex; align-items:center; justify-content:space-between; background:var(--surface2); border:1px solid rgba(255,255,255,0.05); padding:16px; border-radius:16px; cursor:pointer;">
      <div style="display:flex; align-items:center; gap:16px;">
        <img src="/assets/images/devices/preditech racebox.png" alt="Racebox" style="width:50px; height:50px; object-fit:contain;">
        <div>
          <h4 style="font-size:15px; margin:0 0 4px 0;">Racebox Eklentisi</h4>
          <span style="font-size:13px; color:var(--accent); font-weight:700;">+ 3.500₺</span>
        </div>
      </div>
      <input type="checkbox" id="addon-racebox" class="addon-checkbox-input" value="3500" data-name="Racebox Eklentisi" style="width:24px; height:24px; accent-color:var(--accent); cursor:pointer;">
    </label>

    <!-- Sentinel -->
    <label class="addon-card" style="display:flex; align-items:center; justify-content:space-between; background:var(--surface2); border:1px solid rgba(255,255,255,0.05); padding:16px; border-radius:16px; cursor:pointer;">
      <div style="display:flex; align-items:center; gap:16px;">
        <img src="/assets/images/devices/preditech sentinel.png" alt="Sentinel" style="width:50px; height:50px; object-fit:contain;">
        <div>
          <h4 style="font-size:15px; margin:0 0 4px 0;">Sentinel Eklentisi</h4>
          <span style="font-size:13px; color:var(--accent); font-weight:700;">+ 5.500₺</span>
        </div>
      </div>
      <input type="checkbox" id="addon-sentinel" class="addon-checkbox-input" value="5500" data-name="Sentinel Eklentisi" style="width:24px; height:24px; accent-color:var(--accent); cursor:pointer;">
    </label>

    <!-- Cursor -->
    <label class="addon-card" style="display:flex; align-items:center; justify-content:space-between; background:var(--surface2); border:1px solid rgba(255,255,255,0.05); padding:16px; border-radius:16px; cursor:pointer;">
      <div style="display:flex; align-items:center; gap:16px;">
        <img src="/assets/images/devices/preditech cursor.png" alt="Cursor" style="width:50px; height:50px; object-fit:contain;">
        <div>
          <h4 style="font-size:15px; margin:0 0 4px 0;">Cursor Eklentisi</h4>
          <span style="font-size:13px; color:var(--accent); font-weight:700;">+ 2.200₺</span>
        </div>
      </div>
      <input type="checkbox" id="addon-cursor" class="addon-checkbox-input" value="2200" data-name="Cursor Eklentisi" style="width:24px; height:24px; accent-color:var(--accent); cursor:pointer;">
    </label>
  </div>
</div>
`;

c = c.replace('<h3 style="font-size:24px;margin-bottom:24px;margin-top:40px">2. Teslimat Bilgileri</h3>', addonHTML + '\n<h3 style="font-size:24px;margin-bottom:24px;margin-top:40px">2. Teslimat Bilgileri</h3>');

fs.writeFileSync('src/app/erken-erisim/page.tsx', c);
console.log("Addons UI inserted");
