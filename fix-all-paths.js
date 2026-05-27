const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('c:/Users/Noyan/Documents/sss/preditech-next/src');
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;
  content = content.replace(/src=["']assets\//g, 'src="/assets/');
  content = content.replace(/href=["']assets\//g, 'href="/assets/');
  content = content.replace(/url\(['"]?assets\//g, "url('/assets/");
  if (content !== original) {
    fs.writeFileSync(f, content);
    console.log('Fixed paths in', f);
  }
});
