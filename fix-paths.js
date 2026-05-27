const fs = require('fs');

// Fix relative image paths in filo-profil and ekspertiz pages
['c:/Users/Noyan/Documents/sss/preditech-next/src/app/filo-profil/page.tsx',
 'c:/Users/Noyan/Documents/sss/preditech-next/src/app/ekspertiz/page.tsx'].forEach(f => {
  if (!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');
  let original = content;
  
  // Fix JS string paths like 'assets/images/...'
  content = content.replace(/'assets\/images\//g, "'/assets/images/");
  
  // Fix CSS url() paths
  content = content.replace(/url\('assets\/images\//g, "url('/assets/images/");
  content = content.replace(/url\("assets\/images\//g, 'url("/assets/images/');
  
  // Fix href="assets/..." 
  content = content.replace(/href=\\"assets\//g, 'href=\\"/assets/');
  content = content.replace(/href='assets\//g, "href='/assets/");
  
  // Fix index.html links to /
  content = content.replace(/href=\\"index\.html\\"/g, 'href=\\"/\\"');
  content = content.replace(/href='index\.html'/g, "href='/'");
  
  if (content !== original) {
    fs.writeFileSync(f, content);
    console.log('Fixed paths in', f);
  } else {
    console.log('No changes needed in', f);
  }
});
