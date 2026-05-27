const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk(path.join(__dirname, 'src', 'app'), (filePath) => {
  if (!filePath.endsWith('.tsx')) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Fix <Link> ... </a> -> <Link> ... </Link>
  // This is tricky with regex, but since we know all <Link> tags should end with </Link>
  // Let's just do a naive approach where we replace </a> with </Link> IF the file imports Link and we see <Link
  if (content.includes('<Link')) {
    // A simple parser to match <Link and </a>
    let parts = content.split('<Link');
    for (let i = 1; i < parts.length; i++) {
      // Find the first </a> after this <Link
      // This might be nested, but for our simple HTML it's mostly flat
      let closeIdx = parts[i].indexOf('</a>');
      if (closeIdx !== -1) {
        // Also check if there's an </a> before another <a
        let aIdx = parts[i].indexOf('<a ');
        if (aIdx === -1 || closeIdx < aIdx) {
           parts[i] = parts[i].substring(0, closeIdx) + '</Link>' + parts[i].substring(closeIdx + 4);
        }
      }
    }
    content = parts.join('<Link');
  }
  
  // A safer approach for <Link> ... </a>
  // Let's replace any </a> that follows a <Link tag within the same block.
  // Actually, since I ran a regex that replaced <a href="*.html"> with <Link, I can just replace </a> with </Link> manually in the files that failed.
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
  }
});
