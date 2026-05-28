const fs = require('fs');

let c = fs.readFileSync('src/app/erken-erisim/page.tsx', 'utf8');

c = c.replace(
  /<div class="checkout-summary">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/,
  `<div class="checkout-summary">
<h3 style="font-size:24px;margin-bottom:24px">Sipariş Özeti</h3>
<div style="display:flex; justify-content:center; margin-bottom:24px;">
  <img id="summaryDeviceImg" src="/assets/images/devices/preditech go.png" alt="Cihaz" style="height:120px; object-fit:contain;" />
</div>
<div class="summary-row"><span>Cihaz</span><span id="summaryDevice">Preditech GO</span></div>
<div class="summary-row"><span>1 Aylık Uygulama Aboneliği</span><span style="color:var(--accent); font-weight:700;">Hediye</span></div>
<div class="summary-row"><span>Kargo</span><span>Ücretsiz</span></div>
<div class="summary-total"><span>Toplam</span><span id="summaryPrice">950₺</span></div>
<p style="font-size:12px;color:var(--text2);margin-top:24px;line-height:1.6">* Erken erişim siparişleri sıraya alınır. Teslimatlar başlayacaktır. Ödeme şu an alınacaktır.</p>
<p style="font-size:12px;color:var(--accent);margin-top:8px;line-height:1.6;font-weight:700;">* DİKKAT: Bu cihazların erken sipariş/istek alımı, cihazın resmi çıkışıyla birlikte tamamen kapanacak ve bir daha sipariş alınmayacaktır.</p>
<p style="font-size:12px;color:var(--text2);margin-top:8px;line-height:1.6">* Cihazlarımız donanımına kadar kendi üretimimiz olduğu için üretime geçişimizin ardından yaklaşık 1 ay sonra üretim hattından size ulaşmaktadır. Tüm üretim ve teslimat süreci şeffaf bir şekilde yürütülecek olup, e-posta bültenlerimiz ve Preditech sosyal medya hesaplarımızdan anlık olarak paylaşılacaktır.</p>
<p style="font-size:12px;color:var(--text2);margin-top:8px;line-height:1.6">* Erken ödeme ile sipariş verdiğiniz cihazlar tarafınıza öncelikli olarak gönderilecektir. Belirtilen bu rakamlar sadece erken erişim programına özel destek fiyatlarıdır.</p>
</div>
</div>
</div>
</section>`
);

// We must also remove the duplicated form groups that the previous replace introduced
// The previous replace inserted a bunch of form-group fields before checkout-summary
const badBlockStart = c.indexOf('<h3 style="font-size:24px;margin-bottom:24px;margin-top:40px">2. Teslimat Bilgileri</h3>\n<form id="preorderForm">', c.indexOf('<h3 style="font-size:24px;margin-bottom:24px;margin-top:40px">2. Teslimat Bilgileri</h3>') + 10);

if (badBlockStart !== -1) {
    // we have a duplicate!
    const summaryStart = c.indexOf('<div class="checkout-summary">', badBlockStart);
    if(summaryStart !== -1) {
        c = c.substring(0, badBlockStart) + c.substring(summaryStart);
    }
}

fs.writeFileSync('src/app/erken-erisim/page.tsx', c);
