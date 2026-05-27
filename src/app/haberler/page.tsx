'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  return (
    <>


  <section className="section" style={{ paddingTop: '160px', minHeight: '80vh',  }}>
  <div className="container">
    <div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px',  }}>BİZDEN HABERLER</div>
    <h1 style={{ textAlign: 'center', fontSize: 'clamp(40px,6vw,64px)', marginBottom: '60px',  }}>Gelişmeleri<br /><span style={{ color: 'var(--accent)',  }}>Takip Edin.</span></h1>
    
    <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '32px',  }}>
      <Link href="/haber-1" className="news-card" style={{ textDecoration: 'none', color: 'inherit',  }}>
        <img src="/assets/images/general/preditechlogo.png" className="news-img" alt="Preditech Yatırım" style={{ background: '#000', objectFit: 'contain', padding: '40px', width: '100%', height: '250px', borderRadius: '24px 24px 0 0',  }} />
        <div className="news-content" style={{ padding: '24px',  }}>
          <span className="news-date" style={{ color: 'var(--text2)', fontSize: '14px',  }}>21 Mayıs 2026</span>
          <h3 className="news-title" style={{ margin: '12px 0',  }}>TÜBİTAK BİGG 1812 Destekli Projemiz Resmi Olarak Başladı</h3>
          <p className="news-excerpt" style={{ color: 'var(--text2)',  }}>Ar-Ge süreçlerimizi hızlandıracak ve donanım altyapımızı global standartlara taşıyacak olan yatırım...</p>
        </div>
      </Link>
      
      <Link href="/haber-2" className="news-card" style={{ textDecoration: 'none', color: 'inherit',  }}>
        <img src="/assets/images/devices/preditech titan.png" className="news-img" alt="Titan Lansmanı" style={{ background: '#000', objectFit: 'contain', padding: '20px', width: '100%', height: '250px', borderRadius: '24px 24px 0 0',  }} />
        <div className="news-content" style={{ padding: '24px',  }}>
          <span className="news-date" style={{ color: 'var(--text2)', fontSize: '14px',  }}>10 Nisan 2026</span>
          <h3 className="news-title" style={{ margin: '12px 0',  }}>Ağır Vasıtalar İçin Devrim: TITAN Ön Siparişte</h3>
          <p className="news-excerpt" style={{ color: 'var(--text2)',  }}>Tır ve kamyon filolarının en büyük problemi olan arıza kaynaklı duruş sürelerini (downtime) bitirecek donanım...</p>
        </div>
      </Link>
      
      <Link href="/haber-3" className="news-card" style={{ textDecoration: 'none', color: 'inherit',  }}>
        <img src="/assets/images/app/predicto AI chatbot.png" className="news-img" alt="Predicto AI" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '24px 24px 0 0',  }} />
        <div className="news-content" style={{ padding: '24px',  }}>
          <span className="news-date" style={{ color: 'var(--text2)', fontSize: '14px',  }}>15 Mart 2026</span>
          <h3 className="news-title" style={{ margin: '12px 0',  }}>Predicto AI 2.0: Arabanızla Artık Gerçekten "Konuşun"</h3>
          <p className="news-excerpt" style={{ color: 'var(--text2)',  }}>Derin öğrenme algoritmamız Predicto AI, yeni NLP entegrasyonu sayesinde arızaları çok daha insansı raporluyor...</p>
        </div>
      </Link>
    </div>
  </div>
  </section>
  



    </>
  );
}
