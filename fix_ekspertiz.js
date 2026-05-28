const fs = require('fs');

let jsContent = fs.readFileSync('public/js/ekspertiz.js', 'utf8');
jsContent = jsContent.replace(/function switchXperView/g, 'window.switchXperView = function switchXperView');
jsContent = jsContent.replace(/function openDeviceMenu/g, 'window.openDeviceMenu = function openDeviceMenu');
jsContent = jsContent.replace(/function closeDeviceMenu/g, 'window.closeDeviceMenu = function closeDeviceMenu');
jsContent = jsContent.replace(/function setPaintMode/g, 'window.setPaintMode = function setPaintMode');
jsContent = jsContent.replace(/function paintPart/g, 'window.paintPart = function paintPart');
fs.writeFileSync('public/js/ekspertiz.js', jsContent);

let pageContent = fs.readFileSync('src/app/ekspertiz/page.tsx', 'utf8');
pageContent = pageContent.replace(/strategy="lazyOnload"/g, 'strategy="beforeInteractive"');
fs.writeFileSync('src/app/ekspertiz/page.tsx', pageContent);

console.log('Fixed ekspertiz interactions');
