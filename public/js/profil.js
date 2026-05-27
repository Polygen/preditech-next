window.initprofiljs = function() {

  function switchTab(tabId, element) {
    document.querySelectorAll('.dashboard-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    
    document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
    element.classList.add('active');
  }
  
  function openModal(id) {
    document.getElementById(id).classList.add('active');
  }
  function closeModal(id) {
    document.getElementById(id).classList.remove('active');
  }

};
