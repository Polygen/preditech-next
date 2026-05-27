'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FiloPage() {
  const router = useRouter();

  return (
    <>
      <div className="page-header" style={{ paddingTop: '120px', paddingBottom: '40px' }}>
        <div className="particles"></div>
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px' }}>FİLO YÖNETİMİNDE YENİ ÇAĞ</div>
          <h1 style={{ fontSize: 'clamp(40px,6vw,80px)' }}>Sıfır<br/><span>Yolda Kalma.</span></h1>
          <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>Kestirimci bakım ile plansız arıza maliyetlerini (OPEX) minimize edin. Araç yatış sürelerini ve acil servis masraflarını bitirin.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Feature 1 */}
          <div className="deep-dive-grid reveal" style={{ marginBottom: '80px' }}>
            <div className="dd-content">
              <div className="section-label">OPEX OPTİMİZASYONU</div>
              <h2>Plansız Arızalara<br/>Son Verin</h2>
              <p style={{ color: 'var(--text2)', fontSize: '18px', lineHeight: 1.7, marginTop: '24px', marginBottom: '32px' }}>Filo yönetiminde en büyük gizli maliyet, aniden bozulan bir aracın yarattığı operasyonel iş kaybıdır (Downtime). Preditech PRO&#39;nun 100Hz NVH Analizi sayesinde hangi aracınızın 2 hafta sonra yolda kalacağını önceden bilir, planlı bakıma alırsınız.</p>
              <ul className="feature-list">
                <li><span className="yes" style={{ color: 'var(--accent)' }}>✓</span> %40&#39;a Varan Bakım Maliyeti Düşüşü</li>
                <li><span className="yes" style={{ color: 'var(--accent)' }}>✓</span> Çekici ve Acil Servis Masraflarından Tasarruf</li>
              </ul>
            </div>
            <div className="dd-img-wrapper sporty-card" style={{ padding: '40px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', color: 'var(--text2)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--success)', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div> FİLO SAĞLIK PANELİ — CANLI
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: 'rgba(0,255,136,0.02)', border: '1px solid rgba(0,255,136,0.1)', borderRadius: '8px' }}>
                  <div><div style={{ fontSize: '14px', fontWeight: 700 }}>Renault Clio — 34 AB 1234</div><div style={{ fontSize: '12px', color: 'var(--text2)', marginTop: '4px' }}>Motor Sağlığı %92</div></div>
                  <div style={{ padding: '6px 16px', background: 'rgba(0,255,136,0.1)', border: '1px solid var(--success)', borderRadius: '50px', fontSize: '11px', fontWeight: 800, color: 'var(--success)', letterSpacing: '1px' }}>SAĞLIKLI</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: 'rgba(0,255,136,0.02)', border: '1px solid rgba(0,255,136,0.1)', borderRadius: '8px' }}>
                  <div><div style={{ fontSize: '14px', fontWeight: 700 }}>Fiat Doblo — 34 CD 5678</div><div style={{ fontSize: '12px', color: 'var(--text2)', marginTop: '4px' }}>Motor Sağlığı %88</div></div>
                  <div style={{ padding: '6px 16px', background: 'rgba(0,255,136,0.1)', border: '1px solid var(--success)', borderRadius: '50px', fontSize: '11px', fontWeight: 800, color: 'var(--success)', letterSpacing: '1px' }}>SAĞLIKLI</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: 'rgba(255,68,68,0.05)', border: '1px solid rgba(255,68,68,0.3)', borderRadius: '8px' }}>
                  <div><div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--danger)' }}>Ford Transit — 34 EF 9012</div><div style={{ fontSize: '12px', color: 'var(--danger)', marginTop: '4px' }}>⚠️ Şanzıman Vuruntusu Tespit Edildi</div></div>
                  <div style={{ padding: '6px 16px', background: 'rgba(255,68,68,0.1)', border: '1px solid var(--danger)', borderRadius: '50px', fontSize: '11px', fontWeight: 800, color: 'var(--danger)', letterSpacing: '1px' }}>DİKKAT</div>
                </div>
                <div style={{ marginTop: '8px', padding: '14px 20px', background: 'rgba(255,215,0,0.05)', border: '1px solid var(--accent)', borderRadius: '8px', fontSize: '13px', color: 'var(--accent)', fontWeight: 500 }}>
                  💡 Öneri: Ford Transit&#39;i Cuma günü planlı bakıma alınız.
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="deep-dive-grid reverse reveal" style={{ marginBottom: '80px' }}>
            <div className="dd-content">
              <div className="section-label">GERÇEK ZAMANLI VERİ</div>
              <h2>Araç Takip &amp;<br/>Sürüş Skoru</h2>
              <p style={{ color: 'var(--text2)', fontSize: '18px', lineHeight: 1.7, marginTop: '24px', marginBottom: '32px' }}>Klasik GPS takip cihazlarının ötesine geçin. GT modelimizin U-Blox M10 100Hz GNSS çipi ile gerçek zamanlı milisaniye hassasiyetinde konum takibi yapın. Şoförlerinizin sürüş alışkanlıklarını (sert fren, agresif ivmelenme) takip ederek yakıt tasarrufu sağlayın.</p>
              <ul className="feature-list">
                <li><span className="yes" style={{ color: 'var(--accent)' }}>✓</span> Sürücü Bazlı Performans (Gamification)</li>
                <li><span className="yes" style={{ color: 'var(--accent)' }}>✓</span> Agresif Kullanım ve Rölanti Uyarıları</li>
              </ul>
            </div>
            <div className="dd-img-wrapper sporty-card" style={{ textAlign: 'center', padding: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', color: 'var(--text2)', marginBottom: '12px' }}>SÜRÜŞ SKORU LİDERLİK TABLOSU</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', background: 'var(--surface)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--accent)' }}>1</div>
                  <div style={{ flex: 1 }}><div style={{ fontWeight: 700 }}>Ahmet Y.</div><div style={{ fontSize: '12px', color: 'var(--text2)' }}>34 YZ 999</div></div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--success)' }}>98</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', background: 'var(--surface)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--text2)' }}>2</div>
                  <div style={{ flex: 1 }}><div style={{ fontWeight: 700 }}>Mehmet K.</div><div style={{ fontSize: '12px', color: 'var(--text2)' }}>34 AB 123</div></div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--success)' }}>94</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', background: 'var(--surface)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--text2)' }}>3</div>
                  <div style={{ flex: 1 }}><div style={{ fontWeight: 700 }}>Ali S.</div><div style={{ fontSize: '12px', color: 'var(--text2)' }}>34 CD 456</div></div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--danger)' }}>71</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="deep-dive-grid reveal">
            <div className="dd-content">
              <div className="section-label">B2B YAZILIM AĞI</div>
              <h2>Merkezi Raporlama &amp;<br/>Sigorta Entegrasyonu</h2>
              <p style={{ color: 'var(--text2)', fontSize: '18px', lineHeight: 1.7, marginTop: '24px', marginBottom: '32px' }}>Tüm filo için haftalık ve aylık sağlık raporları otomatik oluşturulur. Yönetim kararları için veri odaklı içgörüler sağlar. Ayrıca sürüş skoru ve araç sağlık verilerini sigorta şirketleri ile entegre ederek &quot;Kullandıkça Öde&quot; veya &quot;İyi Sürücü İndirimi&quot; (UBI/PAYD) gibi özel kasko avantajları elde edebilirsiniz.</p>
              <ul className="feature-list">
                <li><span className="yes" style={{ color: 'var(--accent)' }}>✓</span> REST API Desteği</li>
                <li><span className="yes" style={{ color: 'var(--accent)' }}>✓</span> Yakındaki Servisler ve Randevu Sistemi (Yakında)</li>
              </ul>
            </div>
            <div className="dd-img-wrapper" style={{ textAlign: 'center', background: 'var(--surface)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border)' }}>
              <div style={{ width: '100%', height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '8px' }}>
                <div style={{ width: '30px', height: '40%', background: 'var(--accent)', borderRadius: '4px 4px 0 0' }}></div>
                <div style={{ width: '30px', height: '55%', background: 'var(--accent)', borderRadius: '4px 4px 0 0' }}></div>
                <div style={{ width: '30px', height: '70%', background: 'var(--accent)', borderRadius: '4px 4px 0 0' }}></div>
                <div style={{ width: '30px', height: '85%', background: 'var(--success)', borderRadius: '4px 4px 0 0' }}></div>
                <div style={{ width: '30px', height: '100%', background: 'var(--success)', borderRadius: '4px 4px 0 0' }}></div>
              </div>
              <div style={{ marginTop: '16px', fontFamily: 'monospace', color: 'var(--text2)' }}>Kasko/Bakım Maliyeti Azalma Trendi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Observation Widget */}
      <div className="container" id="injected-widget" style={{ maxWidth: '900px', margin: '40px auto' }}>
        <div className="dd-img-wrapper sporty-card" style={{ padding: '40px', textAlign: 'left' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', color: 'var(--text2)', marginBottom: '20px' }}>FİLO GÖZLEM EKRANI</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {/* Card 1 */}
            <div style={{ background: 'linear-gradient(180deg, #1A1D1B 0%, #0B0C0C 100%)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>Uyarı Durumu</div>
                <i className="ph-fill ph-warning-circle" style={{ color: 'var(--danger)', fontSize: '20px' }}></i>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '40px', fontWeight: 900, color: 'var(--danger)', letterSpacing: '-1px' }}>2</div>
                <div style={{ fontSize: '12px', color: 'var(--text2)', fontWeight: 700 }}>RİSKLİ ARAÇ</div>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--danger)', fontWeight: 600 }}>Motor arızası uyarısı alındı</div>
            </div>
            {/* Card 2 */}
            <div style={{ background: 'linear-gradient(180deg, #1A1D1B 0%, #0B0C0C 100%)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>Sürücü İhlalleri</div>
                <i className="ph-fill ph-steering-wheel" style={{ color: 'var(--accent)', fontSize: '20px' }}></i>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '40px', fontWeight: 900, color: 'var(--accent)', letterSpacing: '-1px' }}>14</div>
                <div style={{ fontSize: '12px', color: 'var(--text2)', fontWeight: 700 }}>SERT FREN</div>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 600 }}>34 ABC 123 - Hız İhlali!</div>
            </div>
            {/* Card 3 */}
            <div style={{ background: 'linear-gradient(180deg, #1A1D1B 0%, #0B0C0C 100%)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>Rota Optimizasyonu</div>
                <i className="ph-fill ph-map-pin-line" style={{ color: 'var(--success)', fontSize: '20px' }}></i>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '40px', fontWeight: 900, color: 'var(--success)', letterSpacing: '-1px' }}>3</div>
                <div style={{ fontSize: '12px', color: 'var(--text2)', fontWeight: 700 }}>ARAÇ ROTA DIŞI</div>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--success)', fontWeight: 600 }}>Alternatif rota öneriliyor.</div>
            </div>
          </div>
        </div>
      </div>

      {/* EXTRA DEVICES */}
      <section className="extra-devices">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px' }}>TİP-C YARDIMCI CİHAZLAR</div>
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>Tam Güvenlik ve Kontrol.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(350px,1fr))', gap: '32px' }}>
            <div className="extra-device-card" style={{ cursor: 'pointer' }} onClick={() => router.push('/gate')}>
              <img src="/assets/images/devices/preditech gate.png" alt="Gate" style={{ objectFit: 'contain', height: '200px' }} />
              <div className="extra-info">
                <h4><Link href="/gate" style={{ color: 'inherit', textDecoration: 'none' }}>GATE</Link> <span className="hub-tag">EKLENTİ</span></h4>
                <p>Lojistik araçları için kapı ve dorse sensörü.</p>
              </div>
            </div>
            <div className="extra-device-card" style={{ cursor: 'pointer' }} onClick={() => router.push('/signal')}>
              <img src="/assets/images/devices/preditech signal.png" alt="Signal" style={{ objectFit: 'contain', height: '200px' }} />
              <div className="extra-info">
                <h4><Link href="/signal" style={{ color: 'inherit', textDecoration: 'none' }}>SIGNAL</Link> <span className="hub-tag">EKLENTİ</span></h4>
                <p>Acil durumlar için sürücü kabininde SOS butonu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
