// @ts-nocheck
'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  return (
    <>


<div className="page-header">
<div className="particles"></div>
<div className="container">
<div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px',  }}>HAKKIMIZDA</div>
<h1 style={{ fontSize: 'clamp(40px,6vw,80px)',  }}><span>Hakkımızda.</span></h1>
<p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto',  }}>Yapay zeka ve özel donanım çözümlerimizle, arızaları önceden tespit edip araç sahiplerini yolda kalmaktan kurtarıyoruz.</p>
</div>
</div>

<section className="section" style={{ paddingTop: '0',  }}>
<div className="container">
<div className="mission reveal" style={{ margin: '0 auto 60px', textAlign: 'center', borderLeft: 'none', borderBottom: '3px solid var(--accent)', paddingBottom: '32px',  }}>"Her araç sahibinin, teknik bilgisi ne olursa olsun, aracının sağlık durumunu önceden bilme ve masraflarını öngörme hakkı vardır."</div>
<div className="expertise-grid reveal">
<div className="expertise-card"><h4>Donanım (PCB) Geliştirme</h4><p>IMU entegrasyonu, OBD arayüzü, endüstriyel tasarım</p></div>
<div className="expertise-card"><h4>Yapay Zeka Mimarisi</h4><p>NVH füzyonu, kestirimci bakım algoritmaları</p></div>
<div className="expertise-card"><h4>Yazılım & Uygulama</h4><p>iOS/Android, Bluetooth 5.0, API altyapısı</p></div>
<div className="expertise-card"><h4>Operasyon</h4><p>Kurumsal satış ve ölçeklendirme stratejisi</p></div>
</div>

<div className="stats-grid reveal" style={{ marginTop: '60px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',  }}>
<div className="stat-card"><div className="stat-number" data-target="30" data-suffix="">0</div><div className="stat-label" style={{ fontSize: '14px', marginTop: '8px',  }}>Farklı Markada Test Edildi</div></div>
<div className="stat-card"><div className="stat-number" data-target="47943" data-suffix="">0</div><div className="stat-label" style={{ fontSize: '14px', marginTop: '8px',  }}>Araç Modeli Veri Tabanı</div></div>
<div className="stat-card"><div className="stat-number" data-target="13433" data-suffix="">0</div><div className="stat-label" style={{ fontSize: '14px', marginTop: '8px',  }}>Farklı Araç Verisiyle Eğitilmiş Yapay Zeka</div></div>
<div className="stat-card"><div style={{ fontSize: 'clamp(24px,4vw,32px)', fontWeight: '800', fontFamily: 'monospace', lineHeight: '1.2', padding: '16px 0',  }}>Made in<br /><span style={{ color: 'var(--accent)',  }}>Türkiye</span></div><div className="stat-label" style={{ fontSize: '14px', marginTop: '8px',  }}>Türkiye'de Geliştirilen Özel Donanım</div></div>
</div>

<div className="reveal" style={{ marginTop: '80px', textAlign: 'center',  }}>
<img src="/assets/images/general/acc-ing-26.png" alt="İTÜ Çekirdek Acceleration Startup" style={{ maxWidth: '100%', width: '350px', borderRadius: '16px', margin: '0 auto', filter: 'grayscale(100%)', opacity: '0.8', transition: 'all 0.3s ease', border: '1px solid var(--border)',  }} onMouseOver="this.style.filter='grayscale(0%)'; this.style.opacity='1';" onMouseOut="this.style.filter='grayscale(100%)'; this.style.opacity='0.8';" />
</div>
</div>
</section>




    </>
  );
}
