const fs = require('fs');

// 1. Fix early access page country dropdown
let earlyAccess = fs.readFileSync('src/app/erken-erisim/page.tsx', 'utf8');
earlyAccess = earlyAccess.replace(/<option value="tr" data-code="\+90">.*?<\/option>/, '<option value="tr" data-code="+90" style="background:#000; color:#fff;">🇹🇷 Türkiye (+90)</option>');
earlyAccess = earlyAccess.replace(/<option value="us" data-code="\+1">.*?<\/option>/, '<option value="us" data-code="+1" style="background:#000; color:#fff;">🇺🇸 United States (+1)</option>');
earlyAccess = earlyAccess.replace(/<option value="gb" data-code="\+44">.*?<\/option>/, '<option value="gb" data-code="+44" style="background:#000; color:#fff;">🇬🇧 United Kingdom (+44)</option>');
earlyAccess = earlyAccess.replace(/<option value="de" data-code="\+49">.*?<\/option>/, '<option value="de" data-code="+49" style="background:#000; color:#fff;">🇩🇪 Germany (+49)</option>');
earlyAccess = earlyAccess.replace(/<option value="fr" data-code="\+33">.*?<\/option>/, '<option value="fr" data-code="+33" style="background:#000; color:#fff;">🇫🇷 France (+33)</option>');
earlyAccess = earlyAccess.replace(/<option value="it" data-code="\+39">.*?<\/option>/, '<option value="it" data-code="+39" style="background:#000; color:#fff;">🇮🇹 Italy (+39)</option>');
earlyAccess = earlyAccess.replace(/<option value="es" data-code="\+34">.*?<\/option>/, '<option value="es" data-code="+34" style="background:#000; color:#fff;">🇪🇸 Spain (+34)</option>');
earlyAccess = earlyAccess.replace(/<option value="nl" data-code="\+31">.*?<\/option>/, '<option value="nl" data-code="+31" style="background:#000; color:#fff;">🇳🇱 Netherlands (+31)</option>');
earlyAccess = earlyAccess.replace(/<option value="jp" data-code="\+81">.*?<\/option>/, '<option value="jp" data-code="+81" style="background:#000; color:#fff;">🇯🇵 Japan (+81)</option>');
earlyAccess = earlyAccess.replace(/<option value="kr" data-code="\+82">.*?<\/option>/, '<option value="kr" data-code="+82" style="background:#000; color:#fff;">🇰🇷 South Korea (+82)</option>');
fs.writeFileSync('src/app/erken-erisim/page.tsx', earlyAccess);

// 2. Fix GO Image in erken-erisim.js
let earlyAccessJs = fs.readFileSync('public/js/erken-erisim.js', 'utf8');
earlyAccessJs = earlyAccessJs.replace(/'GO': '\/assets\/images\/devices\/preditech go\.png',/g, "'GO': '/assets/images/general/predB.png',");
// Also make sure to replace any other potential references
fs.writeFileSync('public/js/erken-erisim.js', earlyAccessJs);

console.log('Fixed dropdown options and GO image.');
