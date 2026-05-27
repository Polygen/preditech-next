'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const deviceMap: Record<string, { name: string; img: string }> = {
  titan: { name: 'Preditech Titan', img: '/assets/images/devices/preditech titan.png' },
  haul: { name: 'Preditech Haul', img: '/assets/images/devices/preditech haul.png' },
  watchdog: { name: 'Preditech Watchdog', img: '/assets/images/devices/preditech watchdog.png' },
  doc: { name: 'Preditech DOC', img: '/assets/images/devices/preditech cursor.png' },
  xper: { name: 'Preditech XPER', img: '/assets/images/devices/preditech signal.png' },
};

function KurumsalSatisContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [deviceCount, setDeviceCount] = useState(10);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(deviceMap['watchdog']);

  useEffect(() => {
    const deviceParam = searchParams.get('device') || 'watchdog';
    const device = deviceMap[deviceParam.toLowerCase()] || deviceMap['watchdog'];
    setSelectedDevice(device);
  }, [searchParams]);

  const total = deviceCount * 6000;
  const tax = total * 0.20;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <section className="section" style={{ paddingTop: '160px', minHeight: '100vh' }}>
        <div className="container">
          <div className="checkout-grid reveal" style={{ alignItems: 'start' }}>

            <div className="checkout-form">
              <div className="section-label">KURUMSAL SATIŞ TALEBİ</div>
              <h1 style={{ fontSize: '36px', marginBottom: '16px' }}>Toplu Sipariş <span style={{ color: 'var(--accent)' }}>Avantajı.</span></h1>
              <p style={{ color: 'var(--text2)', marginBottom: '32px' }}>Filolarınızın verimliliğini artırmak ve güvenliğini sağlamak için doğru adrestesiniz. Sipariş detaylarınızı belirleyin, uzman ekibimiz en kısa sürede sizinle iletişime geçsin.</p>

              <div style={{ background: 'rgba(255,215,0,0.05)', border: '1px solid var(--border-accent)', borderRadius: '12px', padding: '20px', display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '40px' }}>
                <img src={selectedDevice.img} alt="Device" style={{ height: '80px', objectFit: 'contain', borderRadius: '8px' }} />
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '4px' }}>{selectedDevice.name}</h3>
                  <p style={{ color: 'var(--text2)', fontSize: '14px' }}>Birim Fiyat: <strong style={{ color: 'var(--text)' }}>6.000₺</strong> + KDV</p>
                </div>
              </div>

              {!formSubmitted ? (
                <form id="corporateForm" onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>1. İhtiyacınızı Belirleyin</h3>
                  <div className="form-group">
                    <label>Cihaz Adedi (Minimum 5 Adet Önerilir)</label>
                    <input
                      type="number"
                      min={1}
                      value={deviceCount}
                      onChange={(e) => setDeviceCount(parseInt(e.target.value) || 0)}
                      required
                      className="sporty-input"
                      style={{ fontSize: '24px', fontWeight: 800 }}
                    />
                  </div>

                  <h3 style={{ fontSize: '20px', marginBottom: '20px', marginTop: '40px' }}>2. Şirket Bilgileri</h3>
                  <div className="form-group"><label>Şirket Ünvanı</label><input type="text" required className="sporty-input" /></div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group"><label>Yetkili Adı Soyadı</label><input type="text" required className="sporty-input" /></div>
                    <div className="form-group"><label>Kurumsal E-posta</label><input type="email" required className="sporty-input" /></div>
                  </div>
                  <div className="form-group"><label>Telefon Numarası</label><input type="tel" required className="sporty-input" /></div>

                  <button type="submit" className="btn btn-primary sporty-btn" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '16px', marginTop: '20px' }}>TEKLİF TALEBİ OLUŞTUR</button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 20px', background: 'rgba(0,255,136,0.1)', border: '1px solid var(--success)', borderRadius: '16px' }}>
                  <i className="ph ph-check-circle" style={{ fontSize: '64px', color: 'var(--success)', marginBottom: '16px' }}></i>
                  <h3 style={{ color: 'var(--success)', fontSize: '24px', marginBottom: '12px' }}>Talebiniz Alındı!</h3>
                  <p style={{ color: 'var(--text2)' }}>Kurumsal satış yöneticimiz belirttiğiniz iletişim bilgileri üzerinden en kısa sürede size özel teklifimizle ulaşacaktır.</p>
                  <button className="btn btn-ghost" style={{ marginTop: '24px' }} onClick={() => router.push('/')}>Ana Sayfaya Dön</button>
                </div>
              )}
            </div>

            <div className="checkout-summary" style={{ position: 'sticky', top: '120px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--border)' }}>
                <i className="ph ph-shield-check" style={{ fontSize: '32px', color: 'var(--success)' }}></i>
                <div>
                  <div style={{ fontWeight: 700 }}>%100 Güvenli Süreç</div>
                  <div style={{ fontSize: '12px', color: 'var(--text2)' }}>Ödeme hemen alınmaz.</div>
                </div>
              </div>

              <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Tahmini Maliyet Tablosu</h3>
              <div className="summary-row"><span>Birim Fiyat</span><span>6.000₺</span></div>
              <div className="summary-row"><span>Adet</span><span>{deviceCount}</span></div>
              <div className="summary-row"><span>Yazılım Kurulumu</span><span>Ücretsiz</span></div>
              <div className="summary-total" style={{ fontSize: '20px' }}><span>Ara Toplam</span><span>{total.toLocaleString('tr-TR')}₺</span></div>
              <div className="summary-total" style={{ fontSize: '14px', marginTop: 0, color: 'var(--text2)' }}><span>+ %20 KDV</span><span>{tax.toLocaleString('tr-TR')}₺</span></div>

              <div style={{ marginTop: '32px', padding: '16px', background: 'var(--card)', borderRadius: '12px', border: '1px dashed var(--border-accent)' }}>
                <h4 style={{ fontSize: '14px', color: 'var(--accent)', marginBottom: '8px' }}><i className="ph ph-headset"></i> Özel Proje Yönetimi</h4>
                <p style={{ fontSize: '12px', color: 'var(--text2)', lineHeight: 1.5 }}>50 adet ve üzeri alımlarda firmanıza özel API entegrasyonu ve yerinde kurulum hizmeti ücretsiz sağlanmaktadır.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default function KurumsalSatisPage() {
  return (
    <Suspense fallback={<div style={{padding: '160px 20px', textAlign: 'center'}}>Yükleniyor...</div>}>
      <KurumsalSatisContent />
    </Suspense>
  );
}
