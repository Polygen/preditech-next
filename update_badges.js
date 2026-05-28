const fs = require('fs');

const createBadge = (price) => 
'<div class="hero-price-badge">\n' +
'  <div class="hero-price-badge-icon"><i class="ph-fill ph-tag"></i></div>\n' +
'  <div class="hero-price-badge-val">' + price + ' <small>\\\'den başlayan fiyatlarla</small></div>\n' +
'</div>';

// GO
let go = fs.readFileSync('src/app/go/page.tsx', 'utf8');
go = go.replace(
  '<div style="font-size:32px; font-weight:800; color:var(--accent); margin-bottom:16px; margin-top:-10px;">Sadece 950₺</div>',
  createBadge('950₺')
);
fs.writeFileSync('src/app/go/page.tsx', go);

// PRO
let pro = fs.readFileSync('src/app/pro/page.tsx', 'utf8');
pro = pro.replace(
  '<div style="font-size:32px; font-weight:800; color:var(--accent); margin-bottom:16px; margin-top:-10px;">Sadece 2.500₺</div>',
  createBadge('2.500₺')
);
fs.writeFileSync('src/app/pro/page.tsx', pro);

// GT
let gt = fs.readFileSync('src/app/gt/page.tsx', 'utf8');
gt = gt.replace(
  '<div style="font-size:32px; font-weight:800; color:var(--accent); margin-bottom:16px; margin-top:-10px;">Sadece 9.800₺</div>',
  createBadge('9.800₺')
);
fs.writeFileSync('src/app/gt/page.tsx', gt);

console.log("Updated prices with badges");
