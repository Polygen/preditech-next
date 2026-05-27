window.initwatchdogjs = function() {
  if(window["initDonewatchdogjs"]) return;
  window["initDonewatchdogjs"] = true;
{

window.addEventListener('scroll', () => {
  const bar = document.getElementById('buyBar');
  if(window.scrollY > 300) bar.classList.add('visible');
  else bar.classList.remove('visible');
});

}
};
