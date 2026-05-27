window.initcursorjs = function() {
  if(window["initDonecursorjs"]) return;
  window["initDonecursorjs"] = true;
{

window.addEventListener('scroll', () => {
  const bar = document.getElementById('buyBar');
  if(window.scrollY > 300) bar.classList.add('visible');
  else bar.classList.remove('visible');
});

}
};
