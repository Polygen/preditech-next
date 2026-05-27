const fs = require('fs');

let proPath = 'src/app/pro/page.tsx';
let content = fs.readFileSync(proPath, 'utf8');
content = content.replace(/<\/div>\r?\n<\/div>\r?\n<\/section>/, '</div>\n</section>');
fs.writeFileSync(proPath, content);
console.log('Fixed pro/page.tsx');
