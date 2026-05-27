'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  return (
    <>

<section className="section" style={{ paddingTop: '160px', minHeight: '80vh',  }}>
<div className="container" style={{ maxWidth: '800px',  }}>
  <Link href="/haberler" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '700', marginBottom: '24px', display: 'inline-block',  }}>← Haberlere Dön</Link>
  <span style={{ display: 'block', color: 'var(--text2)', marginBottom: '16px',  }}>15 Mart 2026</span>
  <h1 style={{ fontSize: 'clamp(32px,5vw,48px)', marginBottom: '40px', lineHeight: '1.2',  }}>Predicto AI 2.0: Arabanızla Artık Gerçekten Konuşun</h1>
  <img src="/assets/images/app/predicto AI chatbot.png" alt="Predicto AI 2.0: Arabanızla Artık Gerçekten Konuşun" style={{ width: '100%', borderRadius: '24px', marginBottom: '40px', objectFit: 'cover', maxHeight: '400px',  }} />
  <div style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text)',  }}>
    Aracınızla artık gerçekten konuşabilirsiniz! Predicto AI Chatbot sistemi, yeni Doğal Dil İşleme (NLP) entegrasyonu sayesinde çok daha akıllı ve insani yanıtlar veriyor.<br /><br />Artık "Bugün arabanın altından tık tık ses geldi, sorun ne olabilir?" gibi günlük dildeki soruları, anlık OBD verileriyle çapraz analiz ederek yanıtlayabiliyor. Üstelik karmaşık teknik terimler yerine herkesin anlayabileceği şekilde mekanik danışmanlık yapıyor.
  </div>
</div>
</section>

    </>
  );
}
