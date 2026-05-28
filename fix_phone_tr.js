const fs = require('fs');

let content = fs.readFileSync('src/app/erken-erisim/page.tsx', 'utf8');

// Replace all option lines to remove flag emojis (the flag is already shown via the <img> tag)
content = content.replace(/🇹🇷 /g, '');
content = content.replace(/🇺🇸 /g, '');
content = content.replace(/🇬🇧 /g, '');
content = content.replace(/🇩🇪 /g, '');
content = content.replace(/🇫🇷 /g, '');
content = content.replace(/🇮🇹 /g, '');
content = content.replace(/🇪🇸 /g, '');
content = content.replace(/🇳🇱 /g, '');
content = content.replace(/🇯🇵 /g, '');
content = content.replace(/🇰🇷 /g, '');

// Make the select wider so country name is visible
content = content.replace(/width:100px; appearance:none/g, 'width:140px; appearance:none');

fs.writeFileSync('src/app/erken-erisim/page.tsx', content);
console.log('Removed flag emojis from select options');
