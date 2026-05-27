window.inithaber2js = function() {
{

// Simulator Logic
document.getElementById('simForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const brand = document.getElementById('simBrand').options[document.getElementById('simBrand').selectedIndex].text;
  const year = document.getElementById('simYear').options[document.getElementById('simYear').selectedIndex].text;
  
  this.style.display = 'none';
  const loader = document.getElementById('simLoader');
  const result = document.getElementById('simResult');
  const simText = document.getElementById('simText');
  const counter = document.getElementById('scanCounter');
  
  loader.classList.add('active');
  
  // Animate counter
  let count = 0;
  const target = 142531;
  const interval = setInterval(() => {
    count += Math.floor(Math.random() * 5000);
    if(count >= target) {
      count = target;
      clearInterval(interval);
    }
    counter.innerText = count.toLocaleString('tr-TR') + " ARAÇ TARANDI";
  }, 50);

  setTimeout(() => { simText.innerText = "YAPAY ZEKA NÖRONLARI AKTİF..."; }, 1200);
  setTimeout(() => { simText.innerText = "RİSK FAKTÖRLERİ HESAPLANIYOR..."; }, 2200);
  setTimeout(() => {
    loader.classList.remove('active');
    document.getElementById('resProfile').innerText = brand + ' (' + year + ')';
    result.classList.add('active');
  }, 3500);
});

}
};
