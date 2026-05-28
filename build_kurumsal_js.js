const fs = require('fs');
let js = fs.readFileSync('public/js/erken-erisim.js', 'utf8');

js = js.replace(/window\.initerkenerisimjs/g, 'window.initkurumsaljs');
js = js.replace(/initDoneerkenerisimjs/g, 'initDonekurumsaljs');

js = js.replace(/'GO': '\/assets\/images\/general\/predB\.png',/, "'WATCHDOG': '/assets/images/devices/preditech watchdog.png',");
js = js.replace(/'PRO': '\/assets\/images\/devices\/GREG\.png',/, "'TITAN': '/assets/images/devices/preditech titan.png',");
js = js.replace(/'GT': '\/assets\/images\/devices\/Gemini_Generated_Image_2158ap2158ap2158 2\.png',/, "'HAUL': '/assets/images/devices/preditech haul.png',");
js = js.replace(/'WISHLIST': '',/, "'EKSPERTİZ': '',");
js = js.replace(/let currentDevice = 'GO';/, "let currentDevice = 'WATCHDOG';");

// Support URL params like ?device=titan
const paramLogic = `
  const urlParams = new URLSearchParams(window.location.search);
  const requestedDevice = urlParams.get('device');
  if (requestedDevice) {
    const devId = requestedDevice.toUpperCase();
    const targetCard = document.querySelector('.device-card[data-device="' + devId + '"]');
    if (targetCard) {
      document.querySelectorAll('.device-card').forEach(c => c.classList.remove('active'));
      targetCard.classList.add('active');
      currentDevice = devId;
    }
  }
`;

js = js.replace(/let currentDevice = 'WATCHDOG';/, "let currentDevice = 'WATCHDOG';\n" + paramLogic);

fs.writeFileSync('public/js/kurumsal.js', js);
console.log('Created kurumsal.js');
