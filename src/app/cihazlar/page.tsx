'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CihazlarPage() {
  const router = useRouter();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .device-deck {
          position: relative; width: 480px; height: 300px; z-index: 2; margin-top: 40px; margin-bottom: 20px;
          cursor: pointer;
        }
        .device-deck img {
          position: absolute; width: 480px;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.8));
          transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .device-deck .dev-gt { z-index: 5; width: 300px; bottom: 0; left: 90px; transform: translateY(0); opacity: 1; }
        .device-deck .dev-pro { z-index: 4; width: 480px; bottom: 30px; left: 0px; opacity: 0; pointer-events: none; }
        .device-deck .dev-go { z-index: 3; width: 480px; bottom: 30px; left: 0px; opacity: 0; pointer-events: none; }
        .device-deck:hover .dev-gt { transform: scale(1.1) translateY(-10px); z-index: 10; filter: drop-shadow(0 30px 60px rgba(255, 68, 68, 0.5)); }
        .device-deck:hover .dev-pro { transform: translateX(-200px); opacity: 1; filter: drop-shadow(0 20px 40px rgba(0, 255, 136, 0.3)); pointer-events: auto; }
        .device-deck:hover .dev-go { transform: translateX(200px); opacity: 1; filter: drop-shadow(0 20px 40px rgba(249, 212, 35, 0.3)); pointer-events: auto; }
        @media(max-width: 768px) {
          .device-deck { transform: scale(0.7); left: -15%; }
        }
      `}} />

      <div className="page-header" style={{ paddingTop: '120px', paddingBottom: '40px', position: 'relative', overflow: 'hidden' }}>
        <div className="particles"></div>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h1 id="hero-heading" style={{ fontSize: 'clamp(36px,5vw,56px)', transition: 'all 0.3s ease' }}>Size Göre Bir<br/><span>Preditech</span> Var.</h1>
          <p className="hero-sub" style={{ transition: 'all 0.3s ease' }}>Her sürücü profili için özel olarak geliştirilmiş donanım seçenekleri.</p>

          <div className="device-deck">
            <img src="/assets/images/devices/FB.png" alt="Preditech GO" className="dev-go hero-interactive" onClick={() => router.push('/go')} />
            <img src="/assets/images/devices/GREG.png" alt="Preditech PRO" className="dev-pro hero-interactive" onClick={() => router.push('/pro')} />
            <img src="/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" alt="Preditech GT" className="dev-gt hero-interactive" onClick={() => router.push('/gt')} />
          </div>
        </div>
      </div>

      {/* GO SECTION */}
      <section className="section" id="go" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="compare-grid reveal">
            <div className="device-deck-mini deck-go" style={{ margin: 0, background: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '80px', fontWeight: 900, color: 'var(--text2)', opacity: 0.2, position: 'absolute' }}>GO</div>
              <img src="/assets/images/devices/FB.png" alt="Preditech GO" className="dev-go hero-interactive" onClick={() => router.push('/go')} />
              <img src="/assets/images/devices/GREG.png" alt="Preditech PRO" className="dev-pro hero-interactive" onClick={() => router.push('/pro')} />
              <img src="/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" alt="Preditech GT" className="dev-gt hero-interactive" onClick={() => router.push('/gt')} />
            </div>
            <div>
              <div className="section-label">GÜNLÜK SÜRÜCÜ İÇİN</div>
              <h2>Preditech <span>GO</span></h2>
              <p className="subtitle" style={{ marginBottom: '24px' }}>Temel araç sağlığı takibi ve hata kodu teşhisi için tasarlandı. OBD-II portuna takıp anında veri almaya başlayın.</p>
              <div className="product-price" style={{ marginBottom: '24px' }}>950₺</div>
              <ul className="feature-list" style={{ marginBottom: '32px' }}>
                <li><span className="yes">✓</span> Tüm standart OBD-II protokollerini destekler</li>
                <li><span className="yes">✓</span> DTC (Hata Kodu) okuma ve silme</li>
                <li><span className="yes">✓</span> Anlık yakıt tüketimi ve motor sıcaklığı takibi</li>
                <li><span className="yes">✓</span> Basit, anlaşılır mobil arayüz bildirimleri</li>
              </ul>
              <Link href="/erken-erisim" className="btn btn-ghost">Ön Sipariş Ver</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRO SECTION */}
      <section className="section" id="pro" style={{ borderBottom: '1px solid var(--border)', background: 'rgba(255,215,0,0.02)' }}>
        <div className="container">
          <div className="compare-grid reveal">
            <div style={{ order: 2 }}>
              <div className="device-deck-mini deck-pro" style={{ margin: 0, background: 'var(--card)', borderRadius: 'var(--radius)', border: '1px solid var(--border-accent)', height: '100%' }}>
                <div style={{ fontSize: '80px', fontWeight: 900, color: 'var(--accent)', opacity: 0.1, position: 'absolute' }}>PRO</div>
                <img src="/assets/images/devices/FB.png" alt="Preditech GO" className="dev-go hero-interactive" onClick={() => router.push('/go')} />
                <img src="/assets/images/devices/GREG.png" alt="Preditech PRO" className="dev-pro hero-interactive" onClick={() => router.push('/pro')} />
                <img src="/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" alt="Preditech GT" className="dev-gt hero-interactive" onClick={() => router.push('/gt')} />
              </div>
            </div>
            <div style={{ order: 1 }}>
              <div className="popular-badge" style={{ position: 'relative', display: 'inline-block', top: 0, left: 0, transform: 'none', marginBottom: '16px' }}>EN POPÜLER</div>
              <h2>Preditech <span>PRO</span></h2>
              <p className="subtitle" style={{ marginBottom: '24px' }}>Dünyanın ilk Hibrit Veri Füzyonu cihazı. OBD verilerini 6 eksenli IMU sensörü ile birleştirerek arızaları önceden tahmin eder.</p>
              <div className="product-price" style={{ marginBottom: '24px' }}>2.500₺</div>
              <ul className="feature-list" style={{ marginBottom: '32px' }}>
                <li><span className="yes" style={{ color: 'var(--accent)' }}>✓</span> GO&#39;nun tüm özelliklerini kapsar</li>
                <li><span className="yes" style={{ color: 'var(--accent)' }}>✓</span> 6-eksenli IMU Sensörü (Titreşim/Rezonans Analizi)</li>
                <li><span className="yes" style={{ color: 'var(--accent)' }}>✓</span> Kestirimci Bakım AI (Arızayı 30 gün önceden hisseder)</li>
                <li><span className="yes" style={{ color: 'var(--accent)' }}>✓</span> Detaylı Sürüş Skoru (Frenleme, Viraj G-Kuvveti)</li>
                <li><span className="yes" style={{ color: 'var(--accent)' }}>✓</span> Predicto AI Chatbot Desteği</li>
              </ul>
              <Link href="/erken-erisim" className="btn btn-primary">Ön Sipariş Ver</Link>
            </div>
          </div>
        </div>
      </section>

      {/* GT SECTION */}
      <section className="section" id="gt">
        <div className="container">
          <div className="compare-grid reveal">
            <div className="device-deck-mini deck-gt" style={{ margin: 0, background: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '80px', fontWeight: 900, color: 'var(--danger)', opacity: 0.1, position: 'absolute' }}>GT</div>
              <img src="/assets/images/devices/FB.png" alt="Preditech GO" className="dev-go hero-interactive" onClick={() => router.push('/go')} />
              <img src="/assets/images/devices/GREG.png" alt="Preditech PRO" className="dev-pro hero-interactive" onClick={() => router.push('/pro')} />
              <img src="/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" alt="Preditech GT" className="dev-gt hero-interactive" onClick={() => router.push('/gt')} />
            </div>
            <div>
              <div className="section-label">PERFORMANS TUTKUNLARINA</div>
              <h2>Preditech <span>GT</span></h2>
              <p className="subtitle" style={{ marginBottom: '24px' }}>Pist günleri ve yüksek performans için üretildi. 100Hz dahili GPS ve hassas telemetri verileri ile her saliseyi ölçün.</p>
              <div className="product-price" style={{ marginBottom: '24px' }}>9.800₺</div>
              <ul className="feature-list" style={{ marginBottom: '32px' }}>
                <li><span className="yes">✓</span> PRO&#39;nun tüm özelliklerini kapsar</li>
                <li><span className="yes">✓</span> 100Hz Hassas Dahili GPS</li>
                <li><span className="yes">✓</span> 0-100 km/s ve 100-200 km/s Süre Ölçümleri</li>
                <li><span className="yes">✓</span> Pist Modu ve Sektör Zamanları Takibi</li>
                <li><span className="yes">✓</span> Fren Mesafesi Testleri ve Liderlik Tablosu</li>
              </ul>
              <Link href="/erken-erisim" className="btn btn-ghost">Ön Sipariş Ver</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
