const fs = require('fs');

// 1. Fix globals.css overflow hidden on addon-card
let css = fs.readFileSync('src/app/globals.css', 'utf8');
css = css.replace('.addon-card {\n  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);\n  position: relative;\n  overflow: hidden;\n}', '.addon-card {\n  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);\n  position: relative;\n}');
fs.writeFileSync('src/app/globals.css', css);

// 2. Fix pro and gt pages links
['src/app/pro/page.tsx', 'src/app/gt/page.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/onclick="window\.location='sentinel\.html'"/g, 'onClick={() => window.location.href=\'/sentinel\'}');
  content = content.replace(/onclick="window\.location='racebox\.html'"/g, 'onClick={() => window.location.href=\'/racebox\'}');
  content = content.replace(/onclick="window\.location='cursor\.html'"/g, 'onClick={() => window.location.href=\'/cursor\'}');
  content = content.replace(/href="\/racebox"/g, 'href="/racebox"');
  fs.writeFileSync(file, content);
});

// 3. Fix siparis-takip
let siparis = fs.readFileSync('src/app/siparis-takip/page.tsx', 'utf8');
siparis = siparis.replace('<div class="tl-title">Hazırlanıyor</div>', '<div class="tl-title">Teşekkürler</div>');
siparis = siparis.replace('<div class="tl-sub">Erken erişim kutusu hazırlanıyor</div>', '<div class="tl-sub">Desteğinizle Birlikte Cihazı Geliştiriyoruz</div>');
fs.writeFileSync('src/app/siparis-takip/page.tsx', siparis);

// 4. Fix erken-erisim
let erken = fs.readFileSync('src/app/erken-erisim/page.tsx', 'utf8');

// Fix the missing closing div and margin top
const oldSection = '<section className="section" style={{paddingTop:\'120px\', minHeight:\'100vh\', background:\'var(--bg)\'}}>';
const newSection = '<section className="section" style={{paddingTop:\'160px\', minHeight:\'100vh\', background:\'var(--bg)\'}}>';
erken = erken.replace(oldSection, newSection);

// Add missing </div> for addonsSection and fix layout 
// Remember my previous script replaced `</div>\n</div>\n\n<h3... 2. Teslimat...` with `</div>\n</div>\n\n<h3...`
// I need to search where `<div id="addonsSection">` is not closed.
if(erken.includes('<div class="addon-custom-checkbox"><i class="ph-bold ph-check"></i></div>\n      </div>\n    </label>\n  </div>\n</div>\n</div>')) {
   // it has 3 divs, wait. Let's just do a string replacement on the exact block.
   erken = erken.replace(
    '</label>\n  </div>\n</div>\n</div>\n\n<h3 style="font-size:24px;margin-bottom:24px;margin-top:40px">2. Teslimat Bilgileri</h3>',
    '</label>\n  </div>\n</div>\n\n<h3 style="font-size:24px;margin-bottom:24px;margin-top:40px">2. Teslimat Bilgileri</h3>'
   );
}

// Flags
const oldSelect = `<select class="sporty-input" style="background:var(--surface2); padding:0 12px; font-weight:700; border:1px solid rgba(255,255,255,0.1); outline:none; color:var(--text); cursor:pointer; width:110px;">
      <option value="+90">🇹🇷 +90</option>
      <option value="+1">🇺🇸 +1</option>
      <option value="+44">🇬🇧 +44</option>
      <option value="+49">🇩🇪 +49</option>
      <option value="+33">🇫🇷 +33</option>
    </select>`;

const newSelect = `<select class="sporty-input" style="background:var(--surface2); padding:0 12px; font-weight:700; border:1px solid rgba(255,255,255,0.1); outline:none; color:var(--text); cursor:pointer; width:110px;">
      <option value="+90">🇹🇷 +90</option>
      <option value="+1">🇺🇸 +1</option>
      <option value="+44">🇬🇧 +44</option>
      <option value="+49">🇩🇪 +49</option>
      <option value="+33">🇫🇷 +33</option>
      <option value="+39">🇮🇹 +39</option>
      <option value="+31">🇳🇱 +31</option>
      <option value="+34">🇪🇸 +34</option>
      <option value="+32">🇧🇪 +32</option>
      <option value="+41">🇨🇭 +41</option>
    </select>`;
erken = erken.replace(oldSelect, newSelect);

// Disclaimers
const oldDisclaimer = '<p style="font-size:12px;color:var(--accent);margin-top:8px;line-height:1.6;font-weight:700;">* DİKKAT: Bu cihazların erken sipariş/istek alımı, cihazın resmi çıkışıyla birlikte tamamen kapanacak ve bir daha sipariş alınmayacaktır.</p>';
const newDisclaimer = oldDisclaimer + '\n<p style="font-size:12px;color:var(--text2);margin-top:8px;line-height:1.6">* Cihazların satışa Aralık ayında çıkması beklenmektedir, ancak Preditech bu tarihin ötelenme ihtimalini saklı tutar.</p>\n<p style="font-size:12px;color:var(--text2);margin-top:8px;line-height:1.6">* Erken ödeme ile sipariş verdiğiniz cihazlar tarafınıza öncelikli olarak gönderilecektir. Satışa çıkıldığında cihazların fiyatlarında iki kata kadar artış olması öngörülmektedir.</p>';

erken = erken.replace(oldDisclaimer, newDisclaimer);

fs.writeFileSync('src/app/erken-erisim/page.tsx', erken);
console.log('Updated all pages');
