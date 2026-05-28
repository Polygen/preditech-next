window.initsiparistakipjs = function() {
  if(window["initDonesiparistakipjs"]) return;
  window["initDonesiparistakipjs"] = true;

  const dev = localStorage.getItem('preditech_orderDevice') || 'Preditech PRO';
  const price = localStorage.getItem('preditech_orderPrice') || '9.800₺';
  
  const devEl = document.getElementById('st-device');
  const priceEl = document.getElementById('st-price');
  const priceTotalEl = document.getElementById('st-total-price');
  const imgEl = document.getElementById('st-device-img');

  if(devEl) devEl.innerText = dev;
  if(priceEl) priceEl.innerText = price;
  
  if(imgEl) {
    if(dev.includes('GO')) imgEl.src = '/assets/images/general/predB.png';
    else if(dev.includes('GT')) imgEl.src = '/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png';
    else if(dev.includes('Watchdog')) imgEl.src = '/assets/images/devices/preditech watchdog.png';
    else if(dev.includes('Titan')) imgEl.src = '/assets/images/devices/preditech titan.png';
    else if(dev.includes('Haul')) imgEl.src = '/assets/images/devices/preditech haul.png';
    else imgEl.src = '/assets/images/devices/GREG.png'; // PRO or default
  }

  // Handle Addons
  let addons = [];
  try {
    addons = JSON.parse(localStorage.getItem('preditech_addons') || '[]');
  } catch(e){}

  let basePriceNum = parseInt(price.replace(/\./g, '').replace('₺', '')) || 0;
  let totalNum = basePriceNum;

  // Render addons as separate item cards
  const firstItemCard = document.querySelector('.item-card');
  if (firstItemCard && addons.length > 0) {
    addons.forEach(addon => {
      totalNum += addon.price;
      
      const addonCard = document.createElement('div');
      addonCard.className = 'item-card';
      addonCard.style.marginTop = '16px';
      
      // Determine addon image based on id/name
      let addonImgSrc = '/assets/images/devices/preditech sentinel.png';
      if(addon.name.toLowerCase().includes('racebox')) addonImgSrc = '/assets/images/devices/preditech racebox.png';
      if(addon.name.toLowerCase().includes('cursor')) addonImgSrc = '/assets/images/devices/preditech cursor.png';

      // Format price
      const formattedAddonPrice = addon.price.toLocaleString('tr-TR') + '₺';

      addonCard.innerHTML = `
        <div style="width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; background: #000; border-radius: 12px;">
          <img src="${addonImgSrc}" alt="Eklenti" style="height:50px; object-fit:contain;" />
        </div>
        <div style="flex: 1;">
          <h4 style="font-size: 16px; font-weight: 800; margin-bottom: 4px;">${addon.name}</h4>
          <p style="font-size: 12px; color: var(--text2); margin-bottom: 8px;">İsteğe Bağlı Donanım Eklentisi</p>
          <div style="display: inline-block; padding: 4px 12px; background: rgba(255,255,255,0.05); border-radius: 12px; font-size: 11px; color: var(--text2);">Adet: 1</div>
        </div>
        <div style="font-size: 18px; font-weight: 800; color: var(--accent);">${formattedAddonPrice}</div>
      `;
      
      // Insert right after the previous card
      firstItemCard.parentNode.insertBefore(addonCard, firstItemCard.nextSibling);
    });
  }

  if(priceTotalEl) {
    priceTotalEl.innerText = totalNum.toLocaleString('tr-TR') + '₺';
  }
};
