window.initloginjs = function() {
  if(window["initDoneloginjs"]) return;
  window["initDoneloginjs"] = true;
{

window.handleLogin = function(e) {
  e.preventDefault();
  const email = document.getElementById('email') ? document.getElementById('email').value : '';
  const pass = document.getElementById('pass') ? document.getElementById('pass').value : '';
  
  if(email === 'a@a.com' && pass === 'a123') {
    localStorage.setItem('preditech_isLoggedIn', 'true');
    window.location.href = '/profil';
  } else if (email === 'y@y.com' && pass === 'y123') {
    localStorage.setItem('preditech_isLoggedIn', 'filo');
    window.location.href = '/filo-profil';
  } else if (email === 'x@x.com' && pass === 'x123') {
    localStorage.setItem('preditech_isLoggedIn', 'ekspertiz');
    window.location.href = '/ekspertiz';
  } else {
    const errorMsg = document.getElementById('error-msg');
    if(errorMsg) {
      errorMsg.style.display = 'block';
    } else {
      alert("Hatalı e-posta veya şifre girdiniz.");
    }
  }
};


}
};
