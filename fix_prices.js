const fs = require('fs');

// PRO
let pro = fs.readFileSync('src/app/pro/page.tsx', 'utf8');
pro = pro.replace(
  '<div class="user-tag">BİREYSEL KULLANICI</div><h1>Hisseden<br>Teknoloji.</h1>',
  '<div class="user-tag">BİREYSEL KULLANICI</div><h1>Hisseden<br>Teknoloji.</h1>\n<div style="font-size:32px; font-weight:800; color:var(--accent); margin-bottom:16px; margin-top:-10px;">Sadece 2.500₺</div>'
);
fs.writeFileSync('src/app/pro/page.tsx', pro);

// GT
let gt = fs.readFileSync('src/app/gt/page.tsx', 'utf8');
gt = gt.replace(
  '<h1 style="background:linear-gradient(180deg,#FFF 20%,#888 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Saliseleri<br>Sayın.</h1>',
  '<h1 style="background:linear-gradient(180deg,#FFF 20%,#888 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Saliseleri<br>Sayın.</h1>\n<div style="font-size:32px; font-weight:800; color:var(--accent); margin-bottom:16px; margin-top:-10px;">Sadece 9.800₺</div>'
);
fs.writeFileSync('src/app/gt/page.tsx', gt);

console.log("Updated PRO and GT prices");
