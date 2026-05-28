const fs = require('fs');
let c = fs.readFileSync('src/app/go/page.tsx', 'utf8');

// Add price
c = c.replace(
  '<div class="user-tag">BİREYSEL KULLANICI</div><h1>Aracınızla<br>Tanışın.</h1>',
  '<div class="user-tag">BİREYSEL KULLANICI</div><h1>Aracınızla<br>Tanışın.</h1>\n<div style="font-size:32px; font-weight:800; color:var(--accent); margin-bottom:16px; margin-top:-10px;">Sadece 950₺</div>'
);

// Remove extra devices block
const startIdx = c.indexOf('<!-- EXTRA DEVICES -->');
const endIdx = c.indexOf('<!-- FAQ SECTION -->');
if (startIdx !== -1 && endIdx !== -1) {
  c = c.substring(0, startIdx) + c.substring(endIdx);
}

fs.writeFileSync('src/app/go/page.tsx', c);
