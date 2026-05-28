const fs = require('fs');
let c = fs.readFileSync('public/js/erken-erisim.js', 'utf8');

const additions = `
// Addons Logic
const addonsSection = document.getElementById('addonsSection');
const addonCards = document.querySelectorAll('.addon-card');
addonCards.forEach(card => {
  card.addEventListener('click', (e) => {
    const cb = card.querySelector('.addon-checkbox-input');
    if(e.target !== cb) cb.checked = !cb.checked;
    
    if(cb.checked) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
});

function toggleAddons(device) {
  if (addonsSection) {
    if (device === 'GO' || device === 'WISHLIST') {
      addonsSection.style.display = 'none';
      // clear selected addons
      document.querySelectorAll('.addon-checkbox-input').forEach(cb => {
        cb.checked = false;
        cb.closest('.addon-card').classList.remove('active');
      });
    } else {
      addonsSection.style.display = 'block';
    }
  }
}
toggleAddons(currentDevice); // Initial call
`;

// Insert after `let currentDevice = 'GO'; // default active`
c = c.replace("let currentDevice = 'GO'; // default active\n", "let currentDevice = 'GO'; // default active\n" + additions);

// Call toggleAddons(device) and toggleAddons('WISHLIST') inside event listeners
c = c.replace("currentDevice = 'WISHLIST';\n    } else if(device === 'CUSTOM')", "currentDevice = 'WISHLIST';\n      toggleAddons('WISHLIST');\n    } else if(device === 'CUSTOM')");
c = c.replace("currentDevice = 'CUSTOM';\n      \n      let val", "currentDevice = 'CUSTOM';\n      toggleAddons('CUSTOM');\n      \n      let val");
c = c.replace("currentDevice = device;\n    }", "currentDevice = device;\n      toggleAddons(device);\n    }");

// Update form submit
const formSubmitReplace = `
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
      
      localStorage.setItem('preditech_orderDevice', summaryDevice.innerHTML);
      localStorage.setItem('preditech_orderPrice', summaryPrice.innerText);
      window.location.href = '/odeme';
    }
`;

c = c.replace(/\n    \} else \{\n      localStorage\.setItem\('preditech_orderDevice'[\s\S]*?window\.location\.href = '\/odeme';\n    \}/m, formSubmitReplace);

fs.writeFileSync('public/js/erken-erisim.js', c);
console.log("Updated erken-erisim.js");
