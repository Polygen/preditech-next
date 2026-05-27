const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('c:/Users/Noyan/Documents/sss/preditech-next/src/app', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace src="assets/..." with src="/assets/..."
    content = content.replace(/src=["'](?:[.\/]*|)assets\//g, 'src="/assets/');
    // Replace href="assets/..." with href="/assets/..."
    content = content.replace(/href=["'](?:[.\/]*|)assets\//g, 'href="/assets/');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed image paths in', filePath);
    }
  }
});
