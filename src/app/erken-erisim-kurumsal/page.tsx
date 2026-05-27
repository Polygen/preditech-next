
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface DeviceOption {
  key: string;
  label: string;
  price: string;
  shimmer?: boolean;
  giftBadge?: string;
}

const devices: DeviceOption[] = [
  { key: 'WISHLIST', label: 'İstek Listesi', price: 'Ücretsiz Katıl' },
  { key: 'Watchdog', label: 'Watchdog (Filo)', price: '8.000₺ / 2 Yıl' },
  { key: 'Titan', label: 'Titan (Tır)', price: '10.000₺ / 2 Yıl' },
  { key: 'Haul', label: 'Haul (İş Makinesi)', price: '12.000₺ / 2 Yıl' },
  { key: 'Xper', label: 'Xper (Ekspertiz)', price: '6.000₺ / Cihaz' },
  { key: 'Doc', label: 'Doc (Servis)', price: '15.000₺ / Cihaz' },
  { key: 'CUSTOM', label: 'Kurumsal Toplu Alım', price: 'Teklif Alın', shimmer: true, giftBadge: 'Toplu Alım' },
];

function ErkenErisimKurumsalContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeDevice, setActiveDevice] = useState('Watchdog');
  const [customBudget, setCustomBudget] = useState('');
  const [summaryDevice, setSummaryDevice] = useState('Preditech Watchdog');
  const [summaryDeviceHtml, setSummaryDeviceHtml] = useState('');
  const [summaryPrice, setSummaryPrice] = useState('8.000₺ / 2 Yıl');

  // Auto-select device from URL param
  useEffect(() => {
    const requestedDevice = searchParams.get('device');
    if (requestedDevice) {
      const targetDevice = devices.find(d => d.key === requestedDevice);
      if (targetDevice) {
        setActiveDevice(targetDevice.key);
        if (targetDevice.key === 'WISHLIST') {
          setSummaryDevice('Ücretsiz İstek Listesi Kaydı');
          setSummaryPrice(targetDevice.price);
        } else {
          setSummaryDevice('Preditech ' + targetDevice.key);
          setSummaryPrice(targetDevice.price);
        }
        setSummaryDeviceHtml('');
      }
    }
  }, [searchParams]);

  const budgetValue = parseInt(customBudget) || 0;

  const handleDeviceClick = (device: DeviceOption) => {
    setActiveDevice(device.key);

    if (device.key === 'WISHLIST') {
      setCustomBudget('');
      setSummaryDevice('Ücretsiz İstek Listesi Kaydı');
      setSummaryDeviceHtml('');
      setSummaryPrice('Ücretsiz');
    } else if (device.key === 'CUSTOM') {
      const val = parseInt(customBudget) || 0;
      if (val >= 40000) {
        setSummaryDeviceHtml('Özel Destek <br><small style="color:var(--success);font-size:12px">+ Özel Üretim Cihaz &amp; Full Hediye Paketi</small>');
        setSummaryDevice('');
      } else {
        setSummaryDevice('Özel Destek');
        setSummaryDeviceHtml('');
      }
      setSummaryPrice(customBudget ? customBudget + '₺' : device.price);
    } else {
      setCustomBudget('');
      setSummaryDevice('Preditech ' + device.key);
      setSummaryDeviceHtml('');
      setSummaryPrice(device.price);
    }
  };

  const handleBudgetChange = (value: string) => {
    setCustomBudget(value);
    const numVal = parseInt(value) || 0;
    setSummaryPrice(numVal + '₺');

    if (numVal >= 40000) {
      setSummaryDeviceHtml('Özel Destek <br><small style="color:var(--success);font-size:12px">+ Özel Üretim Cihaz &amp; Full Hediye Paketi</small>');
      setSummaryDevice('');
    } else if (numVal >= 10000) {
      setSummaryDeviceHtml('Özel Destek <br><small style="color:var(--accent);font-size:12px">+ GT &amp; Racebox &amp; Cursor Hediye</small>');
      setSummaryDevice('');
    } else {
      setSummaryDevice('Özel Destek');
      setSummaryDeviceHtml('');
    }
  };

  const [showToast, setShowToast] = useState(false);

  const showToastMessage = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToastMessage('Ön sipariş talebiniz alınmıştır!');
    router.push('/');
  };

  const showCustomBudget = activeDevice === 'CUSTOM';
  const showGiftPackage = activeDevice === 'CUSTOM';
  const showSpecialDevice = activeDevice === 'CUSTOM' && budgetValue >= 40000;
  const giftUnlocked = activeDevice === 'CUSTOM' && budgetValue >= 10000;

  return (
    <>
      <div className="page-header" style={{ paddingTop: '120px', paddingBottom: '40px' }}>
        <div className="particles"></div>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(32px,4vw,48px)' }}>Geleceğe <span>İlk Adımı</span> Atın.</h1>
          <p style={{ fontSize: '15px' }}>Sınırlı sayıdaki MVP cihazlarımız için ön sipariş vererek, ürüne herkesten önce sahip olun ve test ekibimizin bir parçası olun.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="checkout-grid reveal" style={{ alignItems: 'start' }}>
            <div className="checkout-form">
              <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>1. Cihazınızı Seçin</h3>

              <div className="device-select-grid" id="deviceSelect">
                {devices.map((d) => (
                  <div
                    key={d.key}
                    className={`device-card${d.shimmer ? ' shimmer-effect' : ''}${activeDevice === d.key ? ' active' : ''}`}
                    onClick={() => handleDeviceClick(d)}
                  >
                    {d.giftBadge && <div className="gift-badge">{d.giftBadge}</div>}
                    <h4>{d.label}</h4>
                    <span>{d.price}</span>
                  </div>
                ))}
              </div>

              {showCustomBudget && (
                <div style={{ marginTop: '20px' }}>
                  <div className="form-group">
                    <label style={{ color: 'var(--accent)' }}>Destek olmak istediğiniz bütçeyi seçin (₺)</label>
                    <input
                      type="number"
                      placeholder="Örn: 15000"
                      className="sporty-input"
                      style={{ fontSize: '24px', fontWeight: 800, textAlign: 'center' }}
                      value={customBudget}
                      onChange={(e) => handleBudgetChange(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {showGiftPackage && (
                <div style={{ marginTop: '24px', padding: '24px', background: 'linear-gradient(145deg, rgba(255,215,0,0.1), transparent)', border: `1px solid ${giftUnlocked ? 'var(--success)' : 'var(--accent)'}`, borderRadius: '16px', textAlign: 'center' }}>
                  <h4 style={{ color: 'var(--accent)', fontSize: '20px', marginBottom: '16px' }}>
                    {giftUnlocked ? '🎁 Hediyeniz Eklendi!' : '🎁 10.000₺ Üzeri Desteklere Özel Hediye Paketiniz!'}
                  </h4>
                  {giftUnlocked ? (
                    <p style={{ color: 'var(--text2)', fontSize: '14px', marginBottom: '24px' }}>Piyasa değeri 20.800₺ olan muazzam paket sepetinize dahil edildi.</p>
                  ) : (
                    <p style={{ color: 'var(--text2)', fontSize: '14px', marginBottom: '24px' }}>Piyasa değeri <strong style={{ color: 'var(--text)' }}>20.800₺</strong> olan bu muazzam pakete, 10.000₺ ve üzeri desteklerinizde anında sahip olun!</p>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    <div style={{ background: 'var(--card)', borderRadius: '12px', padding: '12px', border: '1px solid var(--border)' }}>
                      <img src="/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" alt="GT" style={{ height: '80px', objectFit: 'contain' }} />
                      <div style={{ fontSize: '12px', fontWeight: 700, marginTop: '8px' }}>GT</div>
                    </div>
                    <i className="ph ph-plus" style={{ fontSize: '24px', color: 'var(--text2)' }}></i>
                    <div style={{ background: 'var(--card)', borderRadius: '12px', padding: '12px', border: '1px solid var(--border)' }}>
                      <img src="/assets/images/devices/preditech racebox.png" alt="Racebox" style={{ height: '80px', objectFit: 'contain' }} />
                      <div style={{ fontSize: '12px', fontWeight: 700, marginTop: '8px' }}>Racebox</div>
                    </div>
                    <i className="ph ph-plus" style={{ fontSize: '24px', color: 'var(--text2)' }}></i>
                    <div style={{ background: 'var(--card)', borderRadius: '12px', padding: '12px', border: '1px solid var(--border)' }}>
                      <img src="/assets/images/devices/preditech cursor.png" alt="Cursor" style={{ height: '80px', objectFit: 'contain' }} />
                      <div style={{ fontSize: '12px', fontWeight: 700, marginTop: '8px' }}>Cursor</div>
                    </div>
                  </div>
                </div>
              )}

              {showSpecialDevice && (
                <div style={{ marginTop: '24px', padding: '24px', background: 'linear-gradient(145deg, rgba(0,255,136,0.1), transparent)', border: '1px solid var(--success)', borderRadius: '16px', textAlign: 'center' }}>
                  <h4 style={{ color: 'var(--success)', fontSize: '20px', marginBottom: '16px' }}>🏆 İnanılmaz Desteğiniz İçin Sonsuz Teşekkürler!</h4>
                  <p style={{ color: 'var(--text2)', fontSize: '14px', marginBottom: 0 }}>40.000₺ ve üzeri bu eşsiz katkınız onuruna, sadece size özel, isminize kayıtlı tamamen <strong>ÖZEL ÜRETİM</strong> bir Preditech cihazı tasarlanıp adresinize gönderilecektir.</p>
                </div>
              )}

              <h3 style={{ fontSize: '24px', marginBottom: '24px', marginTop: '40px' }}>2. Teslimat Bilgileri</h3>
              <form onSubmit={handleFormSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div className="form-group"><label>Ad</label><input type="text" required /></div>
                  <div className="form-group"><label>Soyad</label><input type="text" required /></div>
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}><label>E-posta</label><input type="email" required /></div>
                <div className="form-group" style={{ marginBottom: '20px' }}><label>Telefon</label><input type="tel" required /></div>
                <div className="form-group" style={{ marginBottom: '20px' }}><label>Teslimat Adresi</label><textarea rows={3} required></textarea></div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '16px' }}>Ön Siparişi Tamamla</button>
              </form>
            </div>

            <div className="checkout-summary">
              <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Sipariş Özeti</h3>
              <div className="summary-row">
                <span>Cihaz</span>
                {summaryDeviceHtml ? (
                  <span dangerouslySetInnerHTML={{ __html: summaryDeviceHtml }} />
                ) : (
                  <span>{summaryDevice}</span>
                )}
              </div>
              <div className="summary-row"><span>1 Yıllık Uygulama Aboneliği</span><span>Hediye</span></div>
              <div className="summary-row"><span>Kargo (Haziran 2026)</span><span>Ücretsiz</span></div>
              <div className="summary-total"><span>Toplam</span><span>{summaryPrice}</span></div>
              <p style={{ fontSize: '12px', color: 'var(--text2)', marginTop: '24px', lineHeight: 1.6 }}>* Erken erişim siparişleri sıraya alınır. Teslimatlar 2026 3. çeyrekte başlayacaktır. Ödeme şu an alınmayacaktır.</p>
              <p style={{ fontSize: '12px', color: 'var(--accent)', marginTop: '8px', lineHeight: 1.6, fontWeight: 700 }}>* DİKKAT: Bu cihazların erken sipariş/istek alımı, cihazın resmi çıkışıyla birlikte tamamen kapanacak ve bir daha sipariş alınmayacaktır.</p>
            </div>
          </div>
        </div>
      </section>
      {showToast && (
        <div style={{
          position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
          background: 'var(--success)', color: '#000', padding: '12px 24px', borderRadius: '8px',
          fontWeight: 600, zIndex: 9999, boxShadow: '0 4px 12px rgba(0,255,136,0.3)'
        }}>
          Ön sipariş talebiniz alınmıştır!
        </div>
      )}
    </>
  );
}

export default function ErkenErisimKurumsalPage() {
  return (
    <Suspense fallback={<div style={{padding: '120px 20px', textAlign: 'center'}}>Yükleniyor...</div>}>
      <ErkenErisimKurumsalContent />
    </Suspense>
  );
}
