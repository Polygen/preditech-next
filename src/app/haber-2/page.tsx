'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  return (
    <>

<section className="section" style={{ paddingTop: '160px', minHeight: '80vh',  }}>
<div className="container" style={{ maxWidth: '800px',  }}>
  <Link href="/haberler" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '700', marginBottom: '24px', display: 'inline-block',  }}>← Haberlere Dön</Link>
  <span style={{ display: 'block', color: 'var(--text2)', marginBottom: '16px',  }}>10 Nisan 2026</span>
  <h1 style={{ fontSize: 'clamp(32px,5vw,48px)', marginBottom: '40px', lineHeight: '1.2',  }}>Ağır Vasıtalar İçin Devrim: Preditech TITAN Ön Siparişte</h1>
  <img src="/assets/images/devices/preditech titan.png" alt="Ağır Vasıtalar İçin Devrim: Preditech TITAN Ön Siparişte" style={{ width: '100%', borderRadius: '24px', marginBottom: '40px', background: '#000', objectFit: 'contain', padding: '20px', maxHeight: '400px',  }} />
  <div style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text)',  }}>
    Ağır vasıta operasyonlarındaki devrim niteliğindeki yeni donanımımız Titan, lojistik maliyetlerini düşürmeyi hedefliyor. Artık tır filoları, yolda kalma (downtime) sürelerini tamamen ortadan kaldıracak kestirimci bakım verilerine gerçek zamanlı olarak erişebilecek.<br /><br />Titan modeli, en zorlu hava koşullarına ve titreşimlere dayanacak şekilde endüstriyel sınıf polikarbon kasa ile üretilmiştir. Filo yöneticileri artık araçlarının motor sağlığını masalarından anlık olarak izleyebilecek.
  </div>
</div>
</section>

    </>
  );
}
