window.initerkenerisimkurumsaljs = function() {
  if(window["initDoneerkenerisimkurumsaljs"]) return;
  window["initDoneerkenerisimkurumsaljs"] = true;
{

// Device Selection Logic
const customContainer = document.getElementById('customBudgetContainer');
const giftContainer = document.getElementById('giftPackageContainer');
const budgetInput = document.getElementById('customBudgetInput');
const summaryDevice = document.getElementById('summaryDevice');
const summaryPrice = document.getElementById('summaryPrice');

// URL param parsing for auto-select

  const urlParams = new URLSearchParams(window.location.search);
  const requestedDevice = urlParams.get('device');
  if(requestedDevice) {
    const targetCard = document.querySelector(.device-card[data-device="${requestedDevice}"]);
    if(targetCard) {
      document.querySelectorAll('.device-card').forEach(c => c.classList.remove('active'));
      targetCard.classList.add('active');
      const deviceName = targetCard.getAttribute('data-device');
      const devicePrice = targetCard.getAttribute('data-price');
      summaryDevice.innerText = (deviceName === 'WISHLIST') ? 'Ücretsiz İstek Listesi Kaydı' : 'Preditech ' + deviceName;
      summaryPrice.innerText = devicePrice;
    }
  }
});
document.querySelectorAll('.device-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.device-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    const device = card.getAttribute('data-device');
    const price = card.getAttribute('data-price');
    
    if(device === 'WISHLIST') {
      customContainer.style.display = 'none';
      giftContainer.style.display = 'none';
      document.getElementById('specialDeviceNotice').style.display = 'none';
      budgetInput.value = '';
      summaryDevice.innerText = 'Ücretsiz İstek Listesi Kaydı';
      summaryPrice.innerText = 'Ücretsiz';
    } else if(device === 'CUSTOM') {
      customContainer.style.display = 'block';
      giftContainer.style.display = 'block'; // Always visible for Custom
      
      let val = parseInt(budgetInput.value) || 0;
      
      if(val >= 40000) {
        document.getElementById('specialDeviceNotice').style.display = 'block';
      } else {
        document.getElementById('specialDeviceNotice').style.display = 'none';
      }

      if (val >= 10000) {
        document.getElementById('giftPackageTitle').innerText = 'ğŸ Hediyeniz Eklendi!';
        document.getElementById('giftPackageDesc').innerText = 'Piyasa değeri 20.800₺ olan muazzam paket sepetinize dahil edildi.';
        giftContainer.style.borderColor = 'var(--success)';
      } else {
        document.getElementById('giftPackageTitle').innerText = 'ğŸ 10.000₺ Üzeri Desteklere Özel Hediye Paketiniz!';
        document.getElementById('giftPackageDesc').innerHTML = 'Piyasa değeri <strong style="color:var(--text);">20.800₺</strong> olan bu muazzam pakete, 10.000₺ ve üzeri desteklerinizde anında sahip olun!';
        giftContainer.style.borderColor = 'var(--accent)';
      }

      if (val >= 40000) {
         summaryDevice.innerHTML = 'Özel Destek <br><small style="color:var(--success);font-size:12px">+ Özel Üretim Cihaz & Full Hediye Paketi</small>';
      } else {
         summaryDevice.innerText = 'Özel Destek';
      }
      summaryPrice.innerText = budgetInput.value ? budgetInput.value + '₺' : price;
    } else {
      customContainer.style.display = 'none';
      giftContainer.style.display = 'none';
      document.getElementById('specialDeviceNotice').style.display = 'none';
      budgetInput.value = '';
      summaryDevice.innerText = 'Preditech ' + device;
      summaryPrice.innerText = price;
    }
  });
});

budgetInput.addEventListener('input', (e) => {
  const value = parseInt(e.target.value) || 0;
  summaryPrice.innerText = value + '₺';
  
  if(value >= 40000) {
    document.getElementById('specialDeviceNotice').style.display = 'block';
  } else {
    document.getElementById('specialDeviceNotice').style.display = 'none';
  }

  if(value >= 10000) {
    document.getElementById('giftPackageTitle').innerText = 'ğŸ Hediyeniz Eklendi!';
    document.getElementById('giftPackageDesc').innerText = 'Piyasa değeri 20.800₺ olan muazzam paket sepetinize dahil edildi.';
    giftContainer.style.borderColor = 'var(--success)';
    if(value >= 40000) {
      summaryDevice.innerHTML = 'Özel Destek <br><small style="color:var(--success);font-size:12px">+ Özel Üretim Cihaz & Full Hediye Paketi</small>';
    } else {
      summaryDevice.innerHTML = 'Özel Destek <br><small style="color:var(--accent);font-size:12px">+ GT & Racebox & Cursor Hediye</small>';
    }
  } else {
    document.getElementById('giftPackageTitle').innerText = 'ğŸ 10.000₺ Üzeri Desteklere Özel Hediye Paketiniz!';
    document.getElementById('giftPackageDesc').innerHTML = 'Piyasa değeri <strong style="color:var(--text);">20.800₺</strong> olan bu muazzam pakete, 10.000₺ ve üzeri desteklerinizde anında sahip olun!';
    giftContainer.style.borderColor = 'var(--accent)';
    summaryDevice.innerText = 'Özel Destek';
  }

}
};
