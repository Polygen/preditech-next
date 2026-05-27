const fs = require('fs');

function injectStyles(htmlPath, tsxPath) {
  if (!fs.existsSync(htmlPath)) return;
  if (!fs.existsSync(tsxPath)) return;
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  let tsx = fs.readFileSync(tsxPath, 'utf8');
  
  let styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let match;
  let allStyles = [];
  while ((match = styleRegex.exec(html)) !== null) {
    allStyles.push(match[1]);
  }
  
  if (allStyles.length === 0) return;
  
  let combinedStyles = allStyles.join('\n');
  combinedStyles = combinedStyles.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  
  let styleTag = `<style dangerouslySetInnerHTML={{ __html: \`${combinedStyles}\` }} />`;
  
  if (tsx.includes('<style dangerouslySetInnerHTML')) {
    console.log(tsxPath + ' already has injected style');
    return;
  }
  
  tsx = tsx.replace(/<>\s*/, `<>\n${styleTag}\n`);
  
  fs.writeFileSync(tsxPath, tsx);
  console.log('Injected styles into ' + tsxPath);
}

injectStyles('c:/Users/Noyan/Documents/sss/profil.html', 'c:/Users/Noyan/Documents/sss/preditech-next/src/app/profil/page.tsx');
injectStyles('c:/Users/Noyan/Documents/sss/filo-profil.html', 'c:/Users/Noyan/Documents/sss/preditech-next/src/app/filo-profil/page.tsx');
injectStyles('c:/Users/Noyan/Documents/sss/ekspertiz.html', 'c:/Users/Noyan/Documents/sss/preditech-next/src/app/ekspertiz/page.tsx');
