window.initsignaljs = function() {
  if(window["initDonesignaljs"]) return;
  window["initDonesignaljs"] = true;
{

window.addEventListener('scroll', () => {
  const bar = document.getElementById('buyBar');
  if(window.scrollY > 300) bar.classList.add('visible');
  else bar.classList.remove('visible');
});

}
};
