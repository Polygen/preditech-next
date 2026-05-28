const fs = require('fs');

let content = fs.readFileSync('src/app/ekspertiz/page.tsx', 'utf8');
content = content.replace(/<a href="\/index"/g, '<a href="#" onclick="switchXperView(\\\'list\\\'); return false;"');
fs.writeFileSync('src/app/ekspertiz/page.tsx', content);

let filo = fs.readFileSync('src/app/filo-profil/page.tsx', 'utf8');
filo = filo.replace(/<a href="\/index"/g, '<a href="#" onclick="switchView(\\\'dashboard\\\'); return false;"');
fs.writeFileSync('src/app/filo-profil/page.tsx', filo);

console.log('Fixed dashboard logo links');
