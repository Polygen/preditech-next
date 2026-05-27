const fs = require('fs');

let tPath = 'src/app/teknoloji/page.tsx';
let content = fs.readFileSync(tPath, 'utf8');
content = content.replace(/<\/section>\r?\n\r?\n\r?\n<\/section>/, '</section>\n\n');
fs.writeFileSync(tPath, content);
console.log('Fixed teknoloji/page.tsx');
