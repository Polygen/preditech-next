const fs = require('fs');

['src/app/go/page.tsx', 'src/app/pro/page.tsx', 'src/app/gt/page.tsx'].forEach(file => {
    if(!fs.existsSync(file)) return;
    let c = fs.readFileSync(file, 'utf8');
    
    // First, change the text
    c = c.replace(/\\'den başlayan fiyatlarla/g, '1 aylık abonelik dahil');
    c = c.replace(/'den başlayan fiyatlarla/g, '1 aylık abonelik dahil');

    // Extract the badge
    const badgeMatch = c.match(/<div class="hero-price-badge">[\s\S]*?<\/div>\s*<\/div>/);
    if(badgeMatch) {
        const badgeHTML = badgeMatch[0];
        // Remove it from its current position
        c = c.replace(badgeHTML, '');
        
        // Find the image
        const imgMatch = c.match(/<img[^>]+class="massive-device-img"[^>]*>/);
        if(imgMatch) {
            const newImgBlock = imgMatch[0] + '\n' + badgeHTML;
            c = c.replace(imgMatch[0], newImgBlock);
        }
    }
    
    fs.writeFileSync(file, c);
});
