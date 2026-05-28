const fs = require('fs');

const files = ['src/app/go/page.tsx', 'src/app/pro/page.tsx', 'src/app/gt/page.tsx'];

files.forEach(file => {
  let c = fs.readFileSync(file, 'utf8');
  
  // Extract the badge
  const startIdx = c.indexOf('<div class="hero-price-badge">');
  if(startIdx !== -1) {
    const endIdx = c.indexOf('</div>\n<p class="massive-hero-sub">');
    if (endIdx !== -1) {
      const badgeHTML = c.substring(startIdx, endIdx + 6); // include </div>
      
      // Remove badge from old position
      c = c.replace(badgeHTML + '\n', '');
      
      // Insert below massive-device-img
      const imgMatch = c.match(/<img[^>]*class="massive-device-img"[^>]*>/);
      if (imgMatch) {
        c = c.replace(imgMatch[0], imgMatch[0] + '\n<div style="display:flex; justify-content:center; margin-top:20px;">\n' + badgeHTML + '\n</div>');
      }
      
      fs.writeFileSync(file, c);
    }
  }
});
console.log("Moved badges below images");
