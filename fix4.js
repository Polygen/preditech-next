const fs = require('fs');

let tPath = 'src/app/teknoloji/page.tsx';
let content = fs.readFileSync(tPath, 'utf8');
content = content.replace(/<\/div>\r?\n<\/div>\r?\n<\/div>\r?\n<\/section>/, '</div>\n</div>\n</section>');
fs.writeFileSync(tPath, content);
console.log('Fixed teknoloji/page.tsx');
