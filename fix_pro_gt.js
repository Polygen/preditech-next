const fs = require('fs');
['src/app/pro/page.tsx', 'src/app/gt/page.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/window\.location='racebox\.html'/g, "window.location.href='/racebox'");
  content = content.replace(/window\.location='sentinel\.html'/g, "window.location.href='/sentinel'");
  content = content.replace(/window\.location='cursor\.html'/g, "window.location.href='/cursor'");
  content = content.replace(/<div style="font-weight:700; color:var\(--text\); margin-top:8px; font-size:16px;">([0-9.]+₺)<\/div>/g, '<p style="font-weight:700; color:var(--text); margin-top:8px; font-size:16px;">$1</p>');
  fs.writeFileSync(file, content);
});
console.log('Fixed html links and prices in pro and gt');
