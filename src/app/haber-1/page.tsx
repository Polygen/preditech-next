// @ts-nocheck
'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  return (
    <>

<section className="section" style={{ paddingTop: '160px', minHeight: '80vh',  }}>
<div className="container" style={{ maxWidth: '800px',  }}>
  <Link href="/haberler" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '700', marginBottom: '24px', display: 'inline-block',  }}>← Haberlere Dön</Link>
  <span style={{ display: 'block', color: 'var(--text2)', marginBottom: '16px',  }}>21 Mayıs 2026</span>
  <h1 style={{ fontSize: 'clamp(32px,5vw,48px)', marginBottom: '40px', lineHeight: '1.2',  }}>TÜBİTAK BİGG 1812 Yatırımını Başarıyla Tamamladık</h1>
  <img src="/assets/images/general/preditechlogo.png" alt="TÜBİTAK BİGG 1812 Yatırımını Başarıyla Tamamladık" style={{ width: '100%', borderRadius: '24px', marginBottom: '40px', background: '#000', objectFit: 'contain', padding: '40px', maxHeight: '400px',  }} />
  <div style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text)',  }}>
    Preditech olarak Ar-Ge süreçlerimizi hızlandıracak ve donanım altyapımızı global standartlara taşıyacak olan TÜBİTAK BİGG 1812 yatırımını resmi olarak başarıyla tamamladığımızı duyurmaktan gurur duyuyoruz.<br /><br />Bu yatırım ile birlikte yapay zeka tabanlı kestirimci bakım algoritmalarımız (Predicto AI) ve 6 eksenli titreşim sensörümüz çok daha hızlı ve hassas hale gelecek. Türkiye'den çıkan bir otomotiv teknolojisi markası olarak küresel pazara açılma hedeflerimizde bu büyük adımı tüm paydaşlarımızla paylaşıyoruz.
  </div>
</div>
</section>

    </>
  );
}
