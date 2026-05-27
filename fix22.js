const fs = require('fs');
let f = 'c:/Users/Noyan/Documents/sss/preditech-next/src/app/teknoloji/page.tsx';
let content = fs.readFileSync(f, 'utf8');

content = content.replace(/setTimeout\(\(\) => if\(resultText\) resultText\.classList\.add\('active'\), 2000\);/g, "setTimeout(() => { if(resultText) resultText.classList.add('active'); }, 2000);");

fs.writeFileSync(f, content);
console.log('Fixed arrow function syntax!');
