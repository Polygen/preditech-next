const fs = require('fs');

let pageContent = fs.readFileSync('src/app/kurumsal-satis/page.tsx', 'utf8');

// Replace Header Text
pageContent = pageContent.replace(/Geleceğe <span>İlk Adımı<\/span> Atın\./, 'Kurumsal <span>Filo ve Servis</span> Çözümleri');
pageContent = pageContent.replace(/Sınırlı sayıdaki MVP cihazlarımız için ön sipariş vererek, ürüne herkesten önce sahip olun ve test ekibimizin bir parçası olun\./, 'Toplu alım veya kurumsal entegrasyon taleplerinizi aşağıdan iletebilirsiniz. Ekibimiz sizinle en kısa sürede iletişime geçecektir.');

// Replace device select grid
const newDeviceGrid = `
<div class="device-select-grid" id="deviceSelect">
  <div class="device-card active" data-device="WATCHDOG" data-price="Fiyat Teklifi Al">
    <h4>Watchdog (Filo)</h4>
    <span>Fiyat Teklifi Al</span>
  </div>
  <div class="device-card" data-device="TITAN" data-price="Fiyat Teklifi Al">
    <h4>Titan (Tır/Ağır Vasıta)</h4>
    <span>Fiyat Teklifi Al</span>
  </div>
  <div class="device-card" data-device="HAUL" data-price="Fiyat Teklifi Al">
    <h4>Haul (İş Makinesi)</h4>
    <span>Fiyat Teklifi Al</span>
  </div>
  <div class="device-card" data-device="EKSPERTİZ" data-price="Fiyat Teklifi Al">
    <h4>Xper (Ekspertiz)</h4>
    <span>Fiyat Teklifi Al</span>
  </div>
</div>
`;
pageContent = pageContent.replace(/<div class="device-select-grid" id="deviceSelect">[\s\S]*?<\/div>\s*<\/div>\s*<h3/m, newDeviceGrid + '\n<h3');

// Remove Custom Budget input
pageContent = pageContent.replace(/<div id="customBudgetArea"[\s\S]*?<\/div>\s*<h3/m, '<h3');

// Remove Addons
pageContent = pageContent.replace(/<div class="addons-grid">[\s\S]*?<\/div>\s*<\/div>\s*<h3 style="font-size:24px;margin-bottom:24px;margin-top:40px">2\. Teslimat Bilgileri<\/h3>/m, '<h3 style="font-size:24px;margin-bottom:24px;margin-top:40px">2. Şirket ve İletişim Bilgileri</h3>');
pageContent = pageContent.replace(/<h3 style="font-size:24px;margin-bottom:24px;margin-top:40px">Ek Donanım ve Sensörler<\/h3>/g, '');

// Add Company Name and Device Count to Form
pageContent = pageContent.replace(
  /<div class="form-group"><label>Ad<\/label>/,
  '<div class="form-group" style="grid-column: span 2;"><label>Şirket Adı</label><input type="text" class="sporty-input" style="width:100%;box-sizing:border-box" required></div>\n<div class="form-group"><label>Ad</label>'
);
pageContent = pageContent.replace(
  /1\s*Aylık\s*Uygulama\s*Aboneliği/,
  'Kurumsal Yazılım Erişimi'
);

pageContent = pageContent.replace(/<button type="submit" id="submitBtn".*?>Ödeme Sayfasına Geç<\/button>/, '<button type="submit" id="submitBtn" class="btn-gradient" style="width:100%; justify-content:center; padding:16px; font-size:16px;">Toplantı Talep Et</button>');

// Remove total price block since it's price on request
pageContent = pageContent.replace(/<div class="summary-total">[\s\S]*?<\/div>/m, '');

// Update initial image
pageContent = pageContent.replace(/id="summaryDeviceImg" src="[^"]*"/, 'id="summaryDeviceImg" src="/assets/images/devices/preditech watchdog.png"');

fs.writeFileSync('src/app/kurumsal-satis/page.tsx', pageContent);
console.log('Modified kurumsal-satis page');
