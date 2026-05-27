window.initgatejs = function() {
  if(window["initDonegatejs"]) return;
  window["initDonegatejs"] = true;
{

window.addEventListener('scroll', () => {
  const bar = document.getElementById('buyBar');
  if(window.scrollY > 300) bar.classList.add('visible');
  else bar.classList.remove('visible');
});

}
};
