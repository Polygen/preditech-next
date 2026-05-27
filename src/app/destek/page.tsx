'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  return (
    <>


<div className="page-header" style={{ paddingTop: '140px', paddingBottom: '60px',  }}>
<div className="particles"></div>
<div className="container" style={{ textAlign: 'center',  }}>
<h1 style={{ fontSize: 'clamp(36px,5vw,56px)', marginBottom: '24px',  }}>Size Nasıl Yardımcı<br /><span>Olabiliriz?</span></h1>
<p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px', color: 'var(--text2)',  }}>Kurulum rehberleri, uyumluluk bilgileri ve destek dökümanları içinde arama yapın.</p>
<div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative',  }}>
<input type="text" className="sporty-input" placeholder="Arama yapın... (Örn: Kurulum, Bluetooth eşleştirme)" style={{ padding: '20px', fontSize: '16px', borderRadius: '50px', paddingLeft: '24px',  }} />
<button className="btn btn-primary sporty-btn" style={{ position: 'absolute', right: '8px', top: '8px', bottom: '8px', padding: '0 24px',  }}>Ara</button>
</div>
</div>
</div>

<section className="section" style={{ paddingTop: '40px',  }}>
<div className="container">
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '80px',  }}>
<div className="sporty-card" style={{ textAlign: 'center', padding: '32px 24px', cursor: 'pointer',  }} onClick={() => { document.getElementById('cat-kurulum').scrollIntoView({behavior:'smooth', block:'start'}) }}>
<div style={{ fontSize: '40px', marginBottom: '16px', color: 'var(--accent)',  }}><i className="ph ph-plug"></i></div>
<h3 style={{ fontSize: '18px', marginBottom: '8px',  }}>Kurulum & Başlangıç</h3>
<p style={{ color: 'var(--text2)', fontSize: '14px',  }}>Cihazı OBD portuna bağlama ve uygulama kurulumu adımları.</p>
</div>
<div className="sporty-card" style={{ textAlign: 'center', padding: '32px 24px', cursor: 'pointer',  }} onClick={() => { document.getElementById('cat-app').scrollIntoView({behavior:'smooth', block:'start'}) }}>
<div style={{ fontSize: '40px', marginBottom: '16px', color: 'var(--accent)',  }}><i className="ph ph-device-mobile"></i></div>
<h3 style={{ fontSize: '18px', marginBottom: '8px',  }}>App & Eşleştirme</h3>
<p style={{ color: 'var(--text2)', fontSize: '14px',  }}>Bluetooth eşleştirme sorunları ve uygulama içi navigasyon.</p>
</div>
<div className="sporty-card" style={{ textAlign: 'center', padding: '32px 24px', cursor: 'pointer',  }} onClick={() => { document.getElementById('cat-uyum').scrollIntoView({behavior:'smooth', block:'start'}) }}>
<div style={{ fontSize: '40px', marginBottom: '16px', color: 'var(--accent)',  }}><i className="ph ph-car-profile"></i></div>
<h3 style={{ fontSize: '18px', marginBottom: '8px',  }}>Araç Uyumluluğu</h3>
<p style={{ color: 'var(--text2)', fontSize: '14px',  }}>Aracınızın markası, modeli ve yılına göre uyumluluk durumları.</p>
</div>
<div className="sporty-card" style={{ textAlign: 'center', padding: '32px 24px', cursor: 'pointer',  }} onClick={() => { document.getElementById('cat-iade').scrollIntoView({behavior:'smooth', block:'start'}) }}>
<div style={{ fontSize: '40px', marginBottom: '16px', color: 'var(--accent)',  }}><i className="ph ph-shield-check"></i></div>
<h3 style={{ fontSize: '18px', marginBottom: '8px',  }}>Garanti & İadeler</h3>
<p style={{ color: 'var(--text2)', fontSize: '14px',  }}>Cihaz garanti kapsamı ve 30 gün iade politikası detayları.</p>
</div>
</div>

<div id="cat-kurulum" className="faq-category">
  <h2>Kurulum & Başlangıç</h2>
</div>
<div className="faq-item">
<div className="faq-question">Preditech Cihazımı Nasıl Kurarım?<span className="faq-icon">+</span></div>
<div className="faq-answer">Preditech cihazlarının kurulumu son derece basittir (Tak-Çalıştır). Aracınızın direksiyonunun altında veya sigorta kutusunun yanında bulunan OBD-II portuna cihazı takmanız yeterlidir. Uygulamayı indirdikten sonra Bluetooth üzerinden eşleşme otomatik olarak gerçekleşir. Herhangi bir kablolama veya usta gerektirmez.</div>
</div>
<div className="faq-item">
<div className="faq-question">Akü Biter Mi?<span className="faq-icon">+</span></div>
<div className="faq-answer">Hayır. Preditech cihazları gelişmiş uyku moduna sahiptir. Aracın kontağı kapandığında cihaz uyku moduna geçer ve 3mA'den daha az güç tüketir. Aylarca aracınızı çalıştırmasanız bile akünüzü bitirmez.</div>
</div>
<div className="faq-item">
<div className="faq-question">Kamyon ve Tırlara Nasıl Takılır?<span className="faq-icon">+</span></div>
<div className="faq-answer">Kurumsal filolar için üretilen Titan ve Watchdog modellerimizde J1939 (yuvarlak 9 pinli) ve J1708 port çeviricileri ücretsiz olarak gönderilmektedir. Cihazı bu kablo vasıtasıyla bağlayabilirsiniz.</div>
</div>

<div id="cat-app" className="faq-category">
  <h2>App & Eşleştirme</h2>
</div>
<div className="faq-item">
<div className="faq-question">Telefonda internet olmasa da çalışır mı?<span className="faq-icon">+</span></div>
<div className="faq-answer">Anlık hız, devir ve temel motor verilerini Bluetooth üzerinden internet olmadan da görebilirsiniz. Ancak Predicto AI asistanı, sürüş skoru hesaplaması ve kestirimci bakım (NVH analizleri) bulut tabanlı sunucularımızda çalıştığı için internet bağlantısı gerektirir.</div>
</div>
<div className="faq-item">
<div className="faq-question">Bluetooth eşleştirme sorunu yaşıyorum, ne yapmalıyım?<span className="faq-icon">+</span></div>
<div className="faq-answer">1. Telefonunuzun Bluetooth'unu kapatıp açın. 2. Aracı çalıştırın (kontağı tamamen açın). 3. Preditech uygulamasında "Cihaz Ekle" butonuna basın. Cihaz üzerinde yanan mavi ışık eşleşme beklediğini, sürekli yanan yeşil ışık ise başarılı bir şekilde bağlandığını gösterir.</div>
</div>

<div id="cat-uyum" className="faq-category">
  <h2>Araç Uyumluluğu</h2>
</div>
<div className="faq-item">
<div className="faq-question">Hangi Araçlarla Uyumlu?<span className="faq-icon">+</span></div>
<div className="faq-answer">Preditech, 2001 yılından sonra üretilmiş tüm benzinli ve 2004 yılından sonra üretilmiş tüm dizel binek / hafif ticari araçlarla tam uyumludur (Standart OBD-II protokolleri). Kestirimci bakım AI modelimiz şu an 14 farklı marka için %98 oranında doğruluğa sahiptir.</div>
</div>
<div className="faq-item">
<div className="faq-question">Elektrikli (EV) ve Hibrit araçlarda çalışır mı?<span className="faq-icon">+</span></div>
<div className="faq-answer">Evet, ancak elektrikli araçlarda okunabilen veri seti içten yanmalı motorlara göre farklılık gösterir. Elektrik motoru ısısı, batarya sağlığı (SoH) ve rejeneratif frenleme verilerini %100 destekliyoruz.</div>
</div>

<div id="cat-iade" className="faq-category">
  <h2>Garanti & İadeler</h2>
</div>
<div className="faq-item">
<div className="faq-question">Garanti süresi ne kadar?<span className="faq-icon">+</span></div>
<div className="faq-answer">Tüm Preditech cihazları, üretim hatalarına karşı 2 yıl tam garanti altındadır. Kurumsal filo anlaşmalarında (Watchdog, Titan, Haul) bu süre, sözleşme kapsamında 5 yıla kadar uzatılabilmektedir.</div>
</div>
<div className="faq-item">
<div className="faq-question">İade koşulları nelerdir?<span className="faq-icon">+</span></div>
<div className="faq-answer">Siparişinizi teslim aldığınız tarihten itibaren 30 gün içerisinde koşulsuz şartsız iade edebilirsiniz. İade işlemini başlatmak için Destek ekibimizle iletişime geçmeniz veya uygulama içinden "İade Talebi" oluşturmanız yeterlidir. Kargo ücreti tarafımızca karşılanır.</div>
</div>
<div className="faq-item">
<div className="faq-question">Cihazım arızalandı, ne yapmalıyım?<span className="faq-icon">+</span></div>
<div className="faq-answer">Cihazınızda yazılımsal veya donanımsal bir hata tespit edildiğinde, destek ekibimizle iletişime geçin. Uzaktan çözülemeyen durumlarda cihazınızı ücretsiz olarak kargoyla bize gönderin. Onarım yapılamayan durumlarda birebir sıfır cihaz değişimi sağlanır.</div>
</div>

<div className="sporty-card" style={{ marginTop: '80px', textAlign: 'center',  }}>
<h3 style={{ fontSize: '24px', marginBottom: '16px',  }}>Cevabınızı Bulamadınız Mı?</h3>
<p style={{ color: 'var(--text2)', marginBottom: '24px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto',  }}>Teknik destek ekibimiz size yardımcı olmak için burada. Bize e-posta gönderebilir veya uygulama içinden canlı destek talebi oluşturabilirsiniz.</p>
<a href="mailto:support@preditech.co" className="btn btn-primary sporty-btn" style={{ padding: '16px 32px',  }}>Destek Ekibine Ulaşın</a>
</div>

</div>
</section>



    </>
  );
}
