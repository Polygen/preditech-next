window.inithauljs = function() {
  if(window["initDonehauljs"]) return;
  window["initDonehauljs"] = true;
{

window.addEventListener('scroll', () => {
  const bar = document.getElementById('buyBar');
  if(window.scrollY > 300) bar.classList.add('visible');
  else bar.classList.remove('visible');
});

}
};
