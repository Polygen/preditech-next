window.initkurumsaljs = function() {
  if(window["initDonekurumsaljs"]) return;
  window["initDonekurumsaljs"] = true;

  const deviceImages = {
    'WATCHDOG': '/assets/images/devices/preditech watchdog.png',
    'TITAN': '/assets/images/devices/preditech titan.png',
    'HAUL': '/assets/images/devices/preditech haul.png',
    'XPER': '/assets/images/devices/GREG.png'
  };

  const deviceNames = {
    'WATCHDOG': 'Preditech Watchdog',
    'TITAN': 'Preditech Titan',
    'HAUL': 'Preditech Haul',
    'XPER': 'Preditech Xper'
  };

  let currentDevice = 'WATCHDOG';

  // URL param support: ?device=titan
  const urlParams = new URLSearchParams(window.location.search);
  const requestedDevice = urlParams.get('device');
  if (requestedDevice) {
    const devId = requestedDevice.toUpperCase();
    if (deviceNames[devId]) {
      currentDevice = devId;
    }
  }

  const summaryDeviceImg = document.getElementById('summaryDeviceImg');
  const summaryDevice = document.getElementById('summaryDevice');

  function selectDevice(device) {
    currentDevice = device;
    document.querySelectorAll('.device-card').forEach(c => c.classList.remove('active'));
    const active = document.querySelector('.device-card[data-device="' + device + '"]');
    if (active) active.classList.add('active');
    
    if (summaryDeviceImg && deviceImages[device]) {
      summaryDeviceImg.src = deviceImages[device];
      summaryDeviceImg.style.display = 'block';
    }
    if (summaryDevice && deviceNames[device]) {
      summaryDevice.innerText = deviceNames[device];
    }
  }

  // Init with current device
  selectDevice(currentDevice);

  // Device card click handlers
  document.querySelectorAll('.device-card').forEach(card => {
    card.addEventListener('click', function() {
      const device = this.dataset.device;
      selectDevice(device);
    });
  });

  // Country flag handler
  const countrySelect = document.getElementById('countrySelect');
  const countryFlagImg = document.getElementById('countryFlagImg');
  if (countrySelect && countryFlagImg) {
    countrySelect.addEventListener('change', (e) => {
      countryFlagImg.src = 'https://flagcdn.com/24x18/' + e.target.value + '.png';
    });
  }

  // Form submission
  const form = document.getElementById('kurumsalForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Toplantı talebiniz başarıyla alınmıştır! Ekibimiz en kısa sürede sizinle iletişime geçecektir.');
    });
  }
};
