const fs = require('fs');

let html = fs.readFileSync('src/app/erken-erisim/page.tsx', 'utf8');

const startStr = '<div class="checkout-container">';
const startIndex = html.indexOf(startStr);
const endStr = '` }} />';
const endIndex = html.indexOf(endStr, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const newHTML = `<div class="checkout-container">

  <div>
    <h3 style="font-size:24px;margin-bottom:24px;margin-top:40px">2. Teslimat Bilgileri</h3>
    <form id="preorderForm">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px">
        <div class="form-group"><label>Ad</label><input type="text" class="sporty-input" style="width:100%;box-sizing:border-box" required></div>
        <div class="form-group"><label>Soyad</label><input type="text" class="sporty-input" style="width:100%;box-sizing:border-box" required></div>
      </div>
      <div class="form-group" style="margin-bottom:20px"><label>E-posta</label><input type="email" class="sporty-input" style="width:100%;box-sizing:border-box" required></div>
      <div class="form-group" style="margin-bottom:20px">
        <label>Telefon</label>
        <div style="display:flex; gap:12px;">
          <select class="sporty-input" style="background:var(--surface2); padding:0 12px; font-weight:700; border:1px solid rgba(255,255,255,0.1); outline:none; color:var(--text); cursor:pointer; width:110px;">
            <option value="+90">🇹🇷 +90</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+49">🇩🇪 +49</option>
            <option value="+33">🇫🇷 +33</option>
          </select>
          <input type="tel" class="sporty-input" style="flex:1;box-sizing:border-box" placeholder="5XX XXX XX XX" pattern="[0-9 ]+" required>
        </div>
      </div>
      <div class="form-group" style="margin-bottom:20px">
        <label>Teslimat Adresi</label>
        <textarea class="sporty-input" style="width:100%;box-sizing:border-box;resize:none" rows="3" required></textarea>
      </div>
      <button id="submitBtn" type="submit" class="btn btn-primary" style="width:100%;justify-content:center;padding:16px;font-size:16px">Ödeme Sayfasına Geç</button>
    </form>
  </div>

  <div>
    <div class="checkout-summary" style="position: sticky; top: 120px;">
      <h3 style="font-size:24px;margin-bottom:24px">Sipariş Özeti</h3>
      <div style="display:flex; justify-content:center; margin-bottom:24px;">
        <img id="summaryDeviceImg" src="/assets/images/devices/GREG.png" alt="Cihaz" style="height:120px; object-fit:contain;" />
      </div>
      <div class="summary-row"><span>Cihaz</span><span id="summaryDevice">Preditech PRO</span></div>
      <div class="summary-row"><span>1 Aylık Uygulama Aboneliği</span><span style="color:var(--accent); font-weight:700;">Hediye</span></div>
      <div class="summary-row"><span>Kargo (Aralık 2026)</span><span>Ücretsiz</span></div>
      <div class="summary-total"><span>Toplam</span><span id="summaryPrice">950₺</span></div>
      
      <p style="font-size:12px;color:var(--text2);margin-top:24px;line-height:1.6">* Erken erişim siparişleri sıraya alınır. Teslimatlar Aralık 2026'da başlayacaktır. Ödeme şu an alınacaktır.</p>
      <p style="font-size:12px;color:var(--text2);margin-top:8px;line-height:1.6">* Cihazlarımız donanımına kadar kendi üretimimiz olduğu için üretime geçişimizin ardından yaklaşık 1 ay sonra üretim hattından size ulaşmaktadır. Tüm üretim ve teslimat süreci şeffaf bir şekilde yürütülecek olup, e-posta bültenlerimiz ve Preditech sosyal medya hesaplarımızdan anlık olarak paylaşılacaktır.</p>
      <p style="font-size:12px;color:var(--text2);margin-top:8px;line-height:1.6">* Erken ödeme ile sipariş verdiğiniz cihazlar tarafınıza öncelikli olarak gönderilecektir. Belirtilen bu rakamlar sadece erken erişim programına özel destek fiyatlarıdır.</p>
    </div>
  </div>

</div>
</div>
</section>

<!-- FOOTER -->




`;
  html = html.substring(0, startIndex) + newHTML + html.substring(endIndex);
  fs.writeFileSync('src/app/erken-erisim/page.tsx', html);
}
