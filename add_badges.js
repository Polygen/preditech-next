const fs = require('fs');

['src/app/pro/page.tsx', 'src/app/gt/page.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const price = file.includes('pro') ? '2.500₺' : '9.800₺';
  
  if (!content.includes('hero-price-badge')) {
    const badgeHtml = `
<div class="hero-price-badge">
  <div class="hero-price-badge-icon"><i class="ph-fill ph-tag"></i></div>
  <div class="hero-price-badge-val">${price} <small>1 aylık abonelik dahil</small></div>
</div>`;
    
    content = content.replace(/(<img[^>]*class="massive-device-img"[^>]*>)/, '$1' + badgeHtml);
    fs.writeFileSync(file, content);
  }
});

console.log('Added price badge to pro and gt');
