'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BeklemeListesiPage() {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      router.push('/');
    }, 2000);
  };

  return (
    <>
      <div className="page-header">
        <div className="particles"></div>
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px' }}>ÜCRETSİZ BEKLEME LİSTESİ</div>
          <h1 style={{ fontSize: 'clamp(40px,6vw,80px)' }}>Geleceğin Teknolojisi<br/><span>İçin Sıraya Girin.</span></h1>
          <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>Erken erişime açıldığında ilk sizin haberiniz olsun. Tamamen ücretsiz olarak bültene katılın ve size özel avantajlardan yararlanın.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--card)', padding: 'clamp(20px, 5vw, 40px)', borderRadius: '24px', border: '1px solid var(--border)' }}>
            <div className="form-group" style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text2)' }}>E-Posta Adresiniz</label>
              <input type="email" required placeholder="ornek@sirket.com" style={{ width: '100%', padding: '16px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '12px', color: 'var(--text)', fontFamily: 'inherit' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text2)' }}>İlgilendiğiniz Cihaz (İsteğe Bağlı)</label>
              <select style={{ width: '100%', padding: '16px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '12px', color: 'var(--text)', fontFamily: 'inherit' }}>
                <option value="">Seçim Yapın...</option>
                <option value="go">Preditech GO</option>
                <option value="pro">Preditech PRO</option>
                <option value="gt">Preditech GT</option>
                <option value="doc">Preditech DOC</option>
                <option value="watchdog">Watchdog (Kurumsal)</option>
                <option value="titan">Titan (Kurumsal)</option>
                <option value="haul">Haul (Kurumsal)</option>
                <option value="xper">Xper (Ekspertiz)</option>
              </select>
            </div>
            <div className="form-group" style={{ marginBottom: '32px' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', color: 'var(--text2)', fontSize: '14px', lineHeight: 1.5 }}>
                <input type="checkbox" required style={{ width: '20px', height: '20px', marginTop: '2px', accentColor: 'var(--accent)' }} />
                E-bültene katılmayı ve ürün/erken erişim güncellemeleri hakkında bilgilendirme mailleri almayı kabul ediyorum.
              </label>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '16px' }}>Ücretsiz Listeye Katıl</button>
          </form>
          {showToast && (
            <div style={{
              position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
              background: 'var(--success)', color: '#000', padding: '12px 24px', borderRadius: '8px',
              fontWeight: 600, zIndex: 9999, boxShadow: '0 4px 12px rgba(0,255,136,0.3)'
            }}>
              Tebrikler! Bekleme listesine başarıyla katıldınız.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
