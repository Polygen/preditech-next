window.initerkenerisimjs = function() {
  if(window["initDoneerkenerisimjs"]) return;
  window["initDoneerkenerisimjs"] = true;
{


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

// Device Selection Logic
const customContainer = document.getElementById('customBudgetContainer');
const giftContainer = document.getElementById('giftPackageContainer');
const budgetInput = document.getElementById('customBudgetInput');
const summaryDevice = document.getElementById('summaryDevice');
const summaryDeviceImg = document.getElementById('summaryDeviceImg');
const summaryPrice = document.getElementById('summaryPrice');
const submitBtn = document.getElementById('submitBtn');
const preorderForm = document.getElementById('preorderForm');

let currentDevice = 'GO'; // default active

// Addons Logic
const addonsSection = document.getElementById('addonsSection');
document.querySelectorAll('.addon-checkbox-input').forEach(cb => {
  cb.addEventListener('change', (e) => {
    const card = cb.closest('.addon-card');
    if (card) {
      if(cb.checked) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    }
    updateTotalPrice();
  });
});

function toggleAddons(device) {
  if (addonsSection) {
    if (device === 'GO' || device === 'WISHLIST') {
      addonsSection.style.display = 'none';
      // clear selected addons
      document.querySelectorAll('.addon-checkbox-input').forEach(cb => {
        cb.checked = false;
        const p = cb.closest('.addon-card');
        if(p) p.classList.remove('active');
      });
      updateTotalPrice();
    } else {
      addonsSection.style.display = 'block';
    }
  }
}
toggleAddons(currentDevice); // Initial call

// Trigger click on active card to set initial image correctly
const initialActiveCard = document.querySelector('.device-card.active');
if (initialActiveCard) {
  initialActiveCard.click();
}

if (preorderForm) {
  preorderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (currentDevice === 'WISHLIST') {
      alert('İstek listenize eklendi! Çıkış yapıldığında size haber vereceğiz.');
      window.location.href = '/';
    } else {
      const selectedAddons = [];
      let addonsTotal = 0;
      document.querySelectorAll('.addon-checkbox-input').forEach(cb => {
        if(cb.checked) {
          selectedAddons.push({ id: cb.id.replace('addon-',''), name: cb.getAttribute('data-name'), price: parseInt(cb.value) });
          addonsTotal += parseInt(cb.value);
        }
      });
      localStorage.setItem('preditech_addons', JSON.stringify(selectedAddons));
      localStorage.setItem('preditech_addonsTotal', addonsTotal.toString());
      let basePriceStr = '0₺';
      if(currentDevice === 'CUSTOM') {
         basePriceStr = budgetInput.value ? budgetInput.value + '₺' : '0₺';
      } else {
         const activeCard = document.querySelector('.device-card.active');
         if(activeCard) basePriceStr = activeCard.getAttribute('data-price');
      }
      
      localStorage.setItem('preditech_orderDevice', summaryDevice.innerHTML);
      localStorage.setItem('preditech_orderPrice', basePriceStr);
      window.location.href = '/odeme';
    }

  });
}

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
      if(summaryDeviceImg) summaryDeviceImg.style.display = 'none';
      if(submitBtn) submitBtn.innerText = 'İstek Listene Ekle';
      currentDevice = 'WISHLIST';
      toggleAddons('WISHLIST');
    } else if(device === 'CUSTOM') {
      customContainer.style.display = 'block';
      giftContainer.style.display = 'block'; // Always visible for Custom
      if(submitBtn) submitBtn.innerText = 'Ödeme Sayfasına Geç';
      if(summaryDeviceImg) {
         summaryDeviceImg.style.display = 'block';
         summaryDeviceImg.src = '/assets/images/devices/GREG.png'; // default for custom
      }
      currentDevice = 'CUSTOM';
      toggleAddons('CUSTOM');
      
      let val = parseInt(budgetInput.value) || 0;
      
      if(val >= 40000) {
        document.getElementById('specialDeviceNotice').style.display = 'block';
      } else {
        document.getElementById('specialDeviceNotice').style.display = 'none';
      }

      if (val >= 10000) {
        document.getElementById('giftPackageTitle').innerText = '🎁 Hediyeniz Eklendi!';
        document.getElementById('giftPackageDesc').innerText = 'Piyasa değeri 20.800₺ olan muazzam paket sepetinize dahil edildi.';
        giftContainer.style.borderColor = 'var(--success)';
      } else {
        document.getElementById('giftPackageTitle').innerText = '🎁 10.000₺ Üzeri Desteklere Özel Hediye Paketiniz!';
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
      if(submitBtn) submitBtn.innerText = 'Ödeme Sayfasına Geç';
      currentDevice = device;
      toggleAddons(device);
      
      if(summaryDeviceImg) {
        summaryDeviceImg.style.display = 'block';
        if(device === 'GO') summaryDeviceImg.src = '/assets/images/general/predB.png';
        if(device === 'PRO') summaryDeviceImg.src = '/assets/images/devices/GREG.png';
        if(device === 'GT') summaryDeviceImg.src = '/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png';
      }
    }
    
    updateTotalPrice();
  });
});

budgetInput.addEventListener('input', (e) => {
  const value = parseInt(e.target.value) || 0;
  updateTotalPrice();
  
  if(value >= 40000) {
    document.getElementById('specialDeviceNotice').style.display = 'block';
  } else {
    document.getElementById('specialDeviceNotice').style.display = 'none';
  }

  if(value >= 10000) {
    document.getElementById('giftPackageTitle').innerText = '🎁 Hediyeniz Eklendi!';
    document.getElementById('giftPackageDesc').innerText = 'Piyasa değeri 20.800₺ olan muazzam paket sepetinize dahil edildi.';
    giftContainer.style.borderColor = 'var(--success)';
    if(value >= 40000) {
      summaryDevice.innerHTML = 'Özel Destek <br><small style="color:var(--success);font-size:12px">+ Özel Üretim Cihaz & Full Hediye Paketi</small>';
    } else {
      summaryDevice.innerHTML = 'Özel Destek <br><small style="color:var(--accent);font-size:12px">+ GT & Racebox & Cursor Hediye</small>';
    }
  } else {
    document.getElementById('giftPackageTitle').innerText = '🎁 10.000₺ Üzeri Desteklere Özel Hediye Paketiniz!';
    document.getElementById('giftPackageDesc').innerHTML = 'Piyasa değeri <strong style="color:var(--text);">20.800₺</strong> olan bu muazzam pakete, 10.000₺ ve üzeri desteklerinizde anında sahip olun!';
    giftContainer.style.borderColor = 'var(--accent)';
    summaryDevice.innerText = 'Özel Destek';
  }
});

const countrySelect = document.getElementById('countrySelect');
const countryFlagImg = document.getElementById('countryFlagImg');
if(countrySelect && countryFlagImg) {
  countrySelect.addEventListener('change', (e) => {
    countryFlagImg.src = `https://flagcdn.com/24x18/${e.target.value}.png`;
  });
}

}
};
