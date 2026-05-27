// @ts-nocheck
'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  return (
    <>


<nav className="navbar" style={{ position: 'static', borderBottom: '1px solid rgba(255,255,255,0.05)',  }}>
<div className="container">
<Link href="/" className="logo"><img src="/assets/images/general/preditechlogo.png" alt="Preditech" style={{ height: '22px', objectFit: 'contain',  }} /></Link>
<ul className="nav-links">
<li className="dropdown">
  <a href="#" className="nav-cihazlar">Cihazlar <i className="ph ph-caret-down"></i></a>
  <ul className="dropdown-menu mega-menu">
    <div className="mega-col">
      <h4>Bireysel Kullanıcılar</h4>
      <li><Link href="/go">Preditech GO</Link></li>
      <li><Link href="/pro">Preditech PRO</Link></li>
      <li><Link href="/gt">Preditech GT</Link></li>
    </div>
    <div className="mega-col">
      <h4>Kurumsal Kullanıcılar</h4>
      <li><Link href="/watchdog">Watchdog (Filo)</Link></li>
      <li><Link href="/titan">Titan (Tır)</Link></li>
      <li><Link href="/haul">Haul (İş Makinesi)</Link></li>
      <li><Link href="/doc">Doc</Link></li>
      <li><Link href="/ekspertiz">Xper (Ekspertiz)</Link></li>
    </div>
    <div className="mega-col">
      <h4>Yardımcı Cihazlar</h4>
      <li><Link href="/sentinel">Sentinel</Link></li>
      <li><Link href="/racebox">Racebox</Link></li>
      <li><Link href="/cursor">Cursor</Link></li>
      <li><Link href="/gate">Gate</Link></li>
      <li><Link href="/signal">Signal</Link></li>
    </div>
  </ul>
</li>
<li><Link href="/cozumler" className="nav-cozumler">Çözümler</Link></li>
<li className="dropdown">
  <a href="#" className="nav-teknoloji">Teknoloji <i className="ph ph-caret-down"></i></a>
  <ul className="dropdown-menu">
    <li><Link href="/teknoloji">Hibrit Veri Füzyonu</Link></li>
    <li><Link href="/app">Predicto AI & App</Link></li>
  </ul>
</li>
<li><Link href="/haberler" className="nav-haberler">Haberler</Link></li>
<li><Link href="/destek" className="nav-destek">Destek</Link></li>
<li><Link href="/iletisim" className="nav-hakkimizda">Hakkımızda</Link></li>
</ul>
<div style={{ display: 'flex', alignItems: 'center', gap: '16px',  }} id="nav-auth-container">
  
</div>
<button className="mobile-menu-btn" aria-label="Menü"><i className="ph ph-list" style={{ fontSize: '24px',  }}></i></button>
</div>
</nav>

<div className="container">
  <div className="order-container reveal">
    <div className="order-pill">
      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)',  }}></div>
      SİPARİŞ #PRD-2026-8942
    </div>
    <h1 style={{ fontSize: '40px', fontWeight: '900', lineHeight: '1.1',  }}>
      Erken Erişim Programına<br />
      <span style={{ color: 'var(--accent)',  }}>Katıldınız!</span>
    </h1>
    <p style={{ color: 'var(--text2)', marginTop: '24px', fontSize: '15px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.6',  }}>
      Tebrikler. Dünyanın ilk OBD + IMU hibrit kestirimci bakım teknolojisine sahip olan sınırlı sayıdaki kullanıcılardan birisiniz.
    </p>
    
    <div className="order-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  }}>
        <h3 style={{ fontSize: '18px', fontWeight: '800',  }}>Sipariş Durumu</h3>
        <div className="status-pill">HAZIRLANIYOR</div>
      </div>
      
      <div className="timeline">
        <div className="tl-item completed">
          <div className="tl-icon"><i className="ph-bold ph-check"></i></div>
          <div className="tl-title">Sipariş Alındı</div>
          <div className="tl-sub">12 Mayıs 2026, 14:32</div>
        </div>
        <div className="tl-item active">
          <div className="tl-icon"><i className="ph-bold ph-package"></i></div>
          <div className="tl-title">Hazırlanıyor</div>
          <div className="tl-sub">Erken erişim kutusu hazırlanıyor</div>
        </div>
        <div className="tl-item">
          <div className="tl-icon"><i className="ph-bold ph-truck"></i></div>
          <div className="tl-title">Kargoya Verildi</div>
          <div className="tl-sub">Tahmini: 15 Mayıs 2026</div>
        </div>
        <div className="tl-item">
          <div className="tl-icon"><i className="ph-bold ph-house"></i></div>
          <div className="tl-title">Teslim Edildi</div>
          <div className="tl-sub">Bekleniyor</div>
        </div>
      </div>
      
      <div className="divider"></div>
      
      <h3 style={{ fontSize: '14px', fontWeight: '800',  }}>Sipariş Detayı</h3>
      
      <div className="item-card">
        <div style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', borderRadius: '12px',  }}>
          <img src="/assets/images/devices/GREG.png" alt="Preditech PRO" style={{ width: '50px',  }} />
        </div>
        <div style={{ flex: '1',  }}>
          <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '4px',  }}>Preditech PRO</h4>
          <p style={{ fontSize: '12px', color: 'var(--text2)', marginBottom: '8px',  }}>Erken Erişim Kurucu Sürümü • 1 Yıllık AI Aboneliği Dahil</p>
          <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', fontSize: '11px', color: 'var(--text2)',  }}>Adet: 1</div>
        </div>
        <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--accent)',  }}>12.500₺</div>
      </div>
      
      <div className="divider"></div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  }}>
        <h3 style={{ fontSize: '16px', fontWeight: '800',  }}>Genel Toplam</h3>
        <div style={{ fontSize: '20px', fontWeight: '900', color: 'var(--accent)',  }}>12.500₺</div>
      </div>
      
    </div>
  </div>
</div>

<script src="script.js"></script>

    </>
  );
}
