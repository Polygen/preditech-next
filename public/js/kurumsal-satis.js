window.initkurumsalsatisjs = function() {
  if(window["initDonekurumsalsatisjs"]) return;
  window["initDonekurumsalsatisjs"] = true;
{

// Get device from URL
const urlParams = new URLSearchParams(window.location.search);
const deviceParam = urlParams.get('device') || 'watchdog';

// Device details map
const deviceMap = {
  'titan': { name: 'Preditech Titan', img: 'preditech titan.png' },
  'haul': { name: 'Preditech Haul', img: 'preditech haul.png' },
  'watchdog': { name: 'Preditech Watchdog', img: 'preditech watchdog.png' },
  'doc': { name: 'Preditech DOC', img: 'preditech cursor.png' }, // Placeholder if doc doesn't have an image
  'xper': { name: 'Preditech XPER', img: 'preditech signal.png' } // Placeholder if xper doesn't have an image
};

const selectedDevice = deviceMap[deviceParam.toLowerCase()] || deviceMap['watchdog'];

document.getElementById('selectedDeviceName').innerText = selectedDevice.name;
document.getElementById('selectedDeviceImg').src = selectedDevice.img;

// Calculator logic
const input = document.getElementById('deviceCount');
const sumCount = document.getElementById('sumCount');
const sumTotal = document.getElementById('sumTotal');
const sumTax = document.getElementById('sumTax');

input.addEventListener('input', (e) => {
  let count = parseInt(e.target.value) || 0;
  sumCount.innerText = count;
  let total = count * 6000;
  let tax = total * 0.20;
  
  sumTotal.innerText = total.toLocaleString('tr-TR') + '₺';
  sumTax.innerText = tax.toLocaleString('tr-TR') + '₺';
});

// Initial trigger
input.dispatchEvent(new Event('input'));

}
};
