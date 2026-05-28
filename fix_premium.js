const fs = require('fs');
const files = [
  'src/app/go/page.tsx',
  'src/app/pro/page.tsx',
  'src/app/gt/page.tsx',
  'src/app/titan/page.tsx',
  'src/app/haul/page.tsx',
  'src/app/watchdog/page.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    
    // Change "Premium Deneyim" to "Ön Sipariş Et"
    content = content.replace(/Premium Deneyim/g, 'Ön Sipariş Et');
    
    // Ensure all corporate links go to /kurumsal-satis instead of .html
    content = content.replace(/kurumsal-satis\.html\?device=/g, '/kurumsal-satis?device=');
    
    fs.writeFileSync(f, content);
  }
});

console.log('Replaced Premium Deneyim and fixed corporate links');
