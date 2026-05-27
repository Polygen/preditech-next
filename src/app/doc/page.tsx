// @ts-nocheck
'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  return (
    <>



<div className="sticky-buy-bar" id="buyBar">
<div className="container">
<div className="product-title" style={{ color: 'var(--accent)',  }}>Preditech DOC</div>
<div className="actions">
<span className="price">2.900₺</span>
<Link href="/erken-erisim" className="btn btn-primary">Ön Sipariş</Link>
</div>
</div>
</div>


<section className="massive-hero accent-title">
<div className="particles"></div>
<div className="container" style={{ zIndex: '2',  }}>
<div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px',  }}>YENİ NESİL ÇÖZÜM</div>
<h1>Anında<br />Teşhis.</h1>
<p className="massive-hero-sub">Araç alım satımlarında, saniyeler içinde gizli arızaları görün. Xper'e göre daha hızlı, bireysel kullanıma uygun pratik çözüm.</p>
<div style={{ fontSize: '140px', fontWeight: '900', color: 'var(--accent)', opacity: '0.05', position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',  }}>DOC</div>
<img src="/assets/images/devices/preditech watchdog.png" alt="Preditech DOC" className="corp-device-img" />
</div>
</section>


<section className="tech-specs-section">
<div className="container">
<div style={{ padding: '80px 0 40px',  }}><h2 style={{ fontSize: '48px', letterSpacing: '-1px',  }}>Teknik Özellikler.</h2></div>
<div className="spec-grid">
<div className="spec-category">Hızlı Teşhis ve Donanım</div>
<div className="spec-details">
<div className="spec-item"><h4>Bağlantı</h4><p>Bluetooth 5.0 üzerinden akıllı telefonla anında eşleşme</p></div>
<div className="spec-item"><h4>Arıza Okuma</h4><p className="mono">Tüm marka/model hata kodları (DTC) okuma ve silme</p></div>
<div className="spec-item"><h4>Kullanım Amacı</h4><p>Al-Satçılar, galericiler için 1 dakikada motor sağlık tespiti</p></div>
<div className="spec-item"><h4>Ebatlar</h4><p>Cep boyutunda, minimal ve pratik tak-çıkar tasarım</p></div>
</div>
</div>
</div>
</section>



<section className="faq-section" style={{ background: 'var(--surface2)',  }}>
<div className="container">
<h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center',  }}>DOC Modeli S.S.S.</h2>
<div className="faq-item">
<div className="faq-question">Servis atölyeleri için neden Doc modeli şart?<span className="faq-icon">+</span></div>
<div className="faq-answer">Doc, standart arıza tespit cihazlarının (Diagnostic Tool) aksine sürekli titreşim analizi (NVH) yapabilen ilk atölye ekipmanıdır. Motor yatak sesini grafiğe döker.</div>
</div>
<div className="faq-item">
<div className="faq-question">Hangi araç markalarıyla uyumlu?<span className="faq-icon">+</span></div>
<div className="faq-answer">Preditech Doc, binek ve hafif ticari araçların %95'i ile (2000 model ve sonrası OBD2 destekli araçlar) doğrudan haberleşebilir ve marka/modele özel kronik arıza veritabanına erişebilir.</div>
</div>
<div className="faq-item">
<div className="faq-question">Müşterilerime 'Kestirimci Bakım Raporu' verebilir miyim?<span className="faq-icon">+</span></div>
<div className="faq-answer">Evet, test sürüşü sonrasında Doc platformu üzerinden müşterinize 'Gelecek 6 ay içinde olası %78 DPF tıkanıklığı riski' gibi detaylı, kurumsal logolu bir PDF rapor sunabilirsiniz.</div>
</div>
</div>
</section>




<section className="section wishlist-cta-section" style={{ background: 'linear-gradient(180deg, var(--bg), var(--surface))', borderTop: '1px solid var(--border)',  }}>
<div className="container">
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(350px,1fr))', gap: '40px', alignItems: 'center',  }}>
    <div className="card" style={{ background: 'rgba(255,215,0,0.05)', borderColor: 'var(--accent)',  }}>
      <h3 style={{ fontSize: '24px', color: 'var(--accent)', marginBottom: '12px',  }}>Premium Deneyim</h3>
      <p style={{ color: 'var(--text2)', marginBottom: '24px', fontSize: '15px',  }}>Öncelikli teslimat avantajından yararlanın. Erken sipariş vererek Preditech ekosistemine ilk adımı atın.</p>
      <Link href="/kurumsal-satis?device=doc" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center',  }}>Toplu Satış Teklifi Al (Adet: 6.000₺)</Link>
    </div>
    
    <div className="card" style={{ background: 'var(--surface2)',  }}>
      <h3 style={{ fontSize: '24px', marginBottom: '12px',  }}>Ücretsiz Bekleme Listesi</h3>
      <p style={{ color: 'var(--text2)', marginBottom: '24px', fontSize: '15px',  }}>Şimdi sadece kayıt olun, resmi satışa çıktığımızda %40 özel indirim kuponunuzu e-posta adresinize gönderelim.</p>
      <div className="newsletter-box" style={{ margin: '0',  }}>
        <input type="email" placeholder="E-posta adresiniz" />
        <button onClick={() => { alert('Bekleme listesine eklendiniz! %40 İndirim kodunuz çıkış tarihinde iletilecektir.') }}>Listeye Katıl</button>
      </div>
    </div>
  </div>
</div>
</section>




    </>
  );
}
