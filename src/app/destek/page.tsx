// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'destekjs']) {
      window['init' + 'destekjs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
    .faq-category { margin-top: 60px; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,215,0,0.1); }
    .faq-category h2 { font-size: 28px; color: var(--accent); }
    .sporty-card { transition: all 0.3s ease; }
    .sporty-card:hover { transform: translateY(-5px); border-color: var(--accent); box-shadow: 0 10px 30px rgba(255,215,0,0.05); }
  ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- NAVBAR -->


<div class="page-header" style="padding-top:140px;padding-bottom:60px">
<div class="particles"></div>
<div class="container" style="text-align:center">
<h1 style="font-size:clamp(36px,5vw,56px);margin-bottom:24px">Size Nasıl Yardımcı<br><span>Olabiliriz?</span></h1>
<p style="font-size:18px;max-width:600px;margin:0 auto 40px;color:var(--text2)">Kurulum rehberleri, uyumluluk bilgileri ve destek dökümanları içinde arama yapın.</p>
<div style="max-width:600px;margin:0 auto;position:relative">
<input type="text" class="sporty-input" placeholder="Arama yapın... (Örn: Kurulum, Bluetooth eşleştirme)" style="padding:20px;font-size:16px;border-radius:50px;padding-left:24px">
<button class="btn btn-primary sporty-btn" style="position:absolute;right:8px;top:8px;bottom:8px;padding:0 24px">Ara</button>
</div>
</div>
</div>

<section class="section" style="padding-top:40px">
<div class="container">
<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:24px;margin-bottom:80px">
<div class="sporty-card" style="text-align:center;padding:32px 24px; cursor:pointer;" onclick="document.getElementById('cat-kurulum').scrollIntoView({behavior:'smooth', block:'start'})">
<div style="font-size:40px;margin-bottom:16px;color:var(--accent)"><i class="ph ph-plug"></i></div>
<h3 style="font-size:18px;margin-bottom:8px">Kurulum & Başlangıç</h3>
<p style="color:var(--text2);font-size:14px">Cihazı OBD portuna bağlama ve uygulama kurulumu adımları.</p>
</div>
<div class="sporty-card" style="text-align:center;padding:32px 24px; cursor:pointer;" onclick="document.getElementById('cat-app').scrollIntoView({behavior:'smooth', block:'start'})">
<div style="font-size:40px;margin-bottom:16px;color:var(--accent)"><i class="ph ph-device-mobile"></i></div>
<h3 style="font-size:18px;margin-bottom:8px">App & Eşleştirme</h3>
<p style="color:var(--text2);font-size:14px">Bluetooth eşleştirme sorunları ve uygulama içi navigasyon.</p>
</div>
<div class="sporty-card" style="text-align:center;padding:32px 24px; cursor:pointer;" onclick="document.getElementById('cat-uyum').scrollIntoView({behavior:'smooth', block:'start'})">
<div style="font-size:40px;margin-bottom:16px;color:var(--accent)"><i class="ph ph-car-profile"></i></div>
<h3 style="font-size:18px;margin-bottom:8px">Araç Uyumluluğu</h3>
<p style="color:var(--text2);font-size:14px">Aracınızın markası, modeli ve yılına göre uyumluluk durumları.</p>
</div>
<div class="sporty-card" style="text-align:center;padding:32px 24px; cursor:pointer;" onclick="document.getElementById('cat-iade').scrollIntoView({behavior:'smooth', block:'start'})">
<div style="font-size:40px;margin-bottom:16px;color:var(--accent)"><i class="ph ph-shield-check"></i></div>
<h3 style="font-size:18px;margin-bottom:8px">Garanti & İadeler</h3>
<p style="color:var(--text2);font-size:14px">Cihaz garanti kapsamı ve 30 gün iade politikası detayları.</p>
</div>
</div>

<div id="cat-kurulum" class="faq-category">
  <h2>Kurulum & Başlangıç</h2>
</div>
<div class="faq-item">
<div class="faq-question">Preditech Cihazımı Nasıl Kurarım?<span class="faq-icon">+</span></div>
<div class="faq-answer">Preditech cihazlarının kurulumu son derece basittir (Tak-Çalıştır). Aracınızın direksiyonunun altında veya sigorta kutusunun yanında bulunan OBD-II portuna cihazı takmanız yeterlidir. Uygulamayı indirdikten sonra Bluetooth üzerinden eşleşme otomatik olarak gerçekleşir. Herhangi bir kablolama veya usta gerektirmez.</div>
</div>
<div class="faq-item">
<div class="faq-question">Akü Biter Mi?<span class="faq-icon">+</span></div>
<div class="faq-answer">Hayır. Preditech cihazları gelişmiş uyku moduna sahiptir. Aracın kontağı kapandığında cihaz uyku moduna geçer ve 3mA'den daha az güç tüketir. Aylarca aracınızı çalıştırmasanız bile akünüzü bitirmez.</div>
</div>
<div class="faq-item">
<div class="faq-question">Kamyon ve Tırlara Nasıl Takılır?<span class="faq-icon">+</span></div>
<div class="faq-answer">Kurumsal filolar için üretilen Titan ve Watchdog modellerimizde J1939 (yuvarlak 9 pinli) ve J1708 port çeviricileri ücretsiz olarak gönderilmektedir. Cihazı bu kablo vasıtasıyla bağlayabilirsiniz.</div>
</div>

<div id="cat-app" class="faq-category">
  <h2>App & Eşleştirme</h2>
</div>
<div class="faq-item">
<div class="faq-question">Telefonda internet olmasa da çalışır mı?<span class="faq-icon">+</span></div>
<div class="faq-answer">Anlık hız, devir ve temel motor verilerini Bluetooth üzerinden internet olmadan da görebilirsiniz. Ancak Predicto AI asistanı, sürüş skoru hesaplaması ve kestirimci bakım (NVH analizleri) bulut tabanlı sunucularımızda çalıştığı için internet bağlantısı gerektirir.</div>
</div>
<div class="faq-item">
<div class="faq-question">Bluetooth eşleştirme sorunu yaşıyorum, ne yapmalıyım?<span class="faq-icon">+</span></div>
<div class="faq-answer">1. Telefonunuzun Bluetooth'unu kapatıp açın. 2. Aracı çalıştırın (kontağı tamamen açın). 3. Preditech uygulamasında "Cihaz Ekle" butonuna basın. Cihaz üzerinde yanan mavi ışık eşleşme beklediğini, sürekli yanan yeşil ışık ise başarılı bir şekilde bağlandığını gösterir.</div>
</div>

<div id="cat-uyum" class="faq-category">
  <h2>Araç Uyumluluğu</h2>
</div>
<div class="faq-item">
<div class="faq-question">Hangi Araçlarla Uyumlu?<span class="faq-icon">+</span></div>
<div class="faq-answer">Preditech, 2001 yılından sonra üretilmiş tüm benzinli ve 2004 yılından sonra üretilmiş tüm dizel binek / hafif ticari araçlarla tam uyumludur (Standart OBD-II protokolleri). Kestirimci bakım AI modelimiz şu an 14 farklı marka için %98 oranında doğruluğa sahiptir.</div>
</div>
<div class="faq-item">
<div class="faq-question">Elektrikli (EV) ve Hibrit araçlarda çalışır mı?<span class="faq-icon">+</span></div>
<div class="faq-answer">Evet, ancak elektrikli araçlarda okunabilen veri seti içten yanmalı motorlara göre farklılık gösterir. Elektrik motoru ısısı, batarya sağlığı (SoH) ve rejeneratif frenleme verilerini %100 destekliyoruz.</div>
</div>

<div id="cat-iade" class="faq-category">
  <h2>Garanti & İadeler</h2>
</div>
<div class="faq-item">
<div class="faq-question">Garanti süresi ne kadar?<span class="faq-icon">+</span></div>
<div class="faq-answer">Tüm Preditech cihazları, üretim hatalarına karşı 2 yıl tam garanti altındadır. Kurumsal filo anlaşmalarında (Watchdog, Titan, Haul) bu süre, sözleşme kapsamında 5 yıla kadar uzatılabilmektedir.</div>
</div>
<div class="faq-item">
<div class="faq-question">İade koşulları nelerdir?<span class="faq-icon">+</span></div>
<div class="faq-answer">Siparişinizi teslim aldığınız tarihten itibaren 30 gün içerisinde koşulsuz şartsız iade edebilirsiniz. İade işlemini başlatmak için Destek ekibimizle iletişime geçmeniz veya uygulama içinden "İade Talebi" oluşturmanız yeterlidir. Kargo ücreti tarafımızca karşılanır.</div>
</div>
<div class="faq-item">
<div class="faq-question">Cihazım arızalandı, ne yapmalıyım?<span class="faq-icon">+</span></div>
<div class="faq-answer">Cihazınızda yazılımsal veya donanımsal bir hata tespit edildiğinde, destek ekibimizle iletişime geçin. Uzaktan çözülemeyen durumlarda cihazınızı ücretsiz olarak kargoyla bize gönderin. Onarım yapılamayan durumlarda birebir sıfır cihaz değişimi sağlanır.</div>
</div>

<div class="sporty-card" style="margin-top:80px;text-align:center">
<h3 style="font-size:24px;margin-bottom:16px">Cevabınızı Bulamadınız Mı?</h3>
<p style="color:var(--text2);margin-bottom:24px;max-width:500px;margin-left:auto;margin-right:auto">Teknik destek ekibimiz size yardımcı olmak için burada. Bize e-posta gönderebilir veya uygulama içinden canlı destek talebi oluşturabilirsiniz.</p>
<a href="mailto:support@preditech.co" class="btn btn-primary sporty-btn" style="padding:16px 32px">Destek Ekibine Ulaşın</a>
</div>

</div>
</section>

<!-- FOOTER -->



` }} />
      
      <Script src="/js/destek.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'destekjs']) window['init' + 'destekjs'](); }} />
    </>
  );
}
