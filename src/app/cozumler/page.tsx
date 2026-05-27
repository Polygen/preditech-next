
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SolutionLink {
  name: string;
  url: string;
  type: string;
  img: string;
}

interface Solution {
  t: string;
  d: string;
  i: string;
  links: SolutionLink[];
}

const solutions: Solution[] = [
  {
    t: "Takograf Çözümü",
    d: "Yasal sürüş sürelerini merkeze otomatik aktarır, sürücü ihlallerini anlık tespit ederek cezai riskleri sıfıra indirir.",
    i: "ph ph-timer",
    links: [
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" },
      { name: "Titan", url: "/titan", type: "Kurumsal", img: "/assets/images/devices/preditech titan.png" }
    ]
  },
  {
    t: "Periyodik Bakım Takibi",
    d: "Araç kullanım senaryolarına ve sensör verilerine dayanarak motor yıpranmasını hesaplar, en uygun bakım zamanını öngörür.",
    i: "ph ph-wrench",
    links: [
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" },
      { name: "Doc", url: "/doc", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" }
    ]
  },
  {
    t: "Gerçek Zamanlı Takip",
    d: "Gecikme süresi olmaksızın araçların konum, hız, kontak ve rota bilgilerini anlık olarak izleyin.",
    i: "ph ph-map-pin-line",
    links: [
      { name: "GO", url: "/go", type: "Bireysel", img: "/assets/images/general/preditechlogo.png" },
      { name: "PRO", url: "/pro", type: "Bireysel", img: "/assets/images/general/preditechlogo.png" },
      { name: "GT", url: "/gt", type: "Bireysel", img: "/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" },
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" }
    ]
  },
  {
    t: "Hız Limiti",
    d: "Bölge bazlı veya araca özel hız limitleri tanımlayın, aşım durumunda riskli davranışları anlık puanlayın.",
    i: "ph ph-speedometer",
    links: [
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" },
      { name: "Titan", url: "/titan", type: "Kurumsal", img: "/assets/images/devices/preditech titan.png" }
    ]
  },
  {
    t: "Sürücü Tanıma",
    d: "Kontağı açan kişinin yetkili sürücü olup olmadığını RFID veya iButton ile anında doğrulayın.",
    i: "ph ph-identification-card",
    links: [
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" },
      { name: "Titan", url: "/titan", type: "Kurumsal", img: "/assets/images/devices/preditech titan.png" }
    ]
  },
  {
    t: "Rota ve Bölge Tanımlama",
    d: "Sanal sınırlar çizin (Geofence). Rotadan çıkıldığında veya yasaklı bölgeye girildiğinde anında uyarı alın.",
    i: "ph ph-path",
    links: [
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" },
      { name: "Haul", url: "/haul", type: "Kurumsal", img: "/assets/images/devices/preditech haul.png" }
    ]
  },
  {
    t: "Yakıt Tüketimi Takibi",
    d: "Depo seviyesi, anlık tüketim ve rölanti yakıtı CANbus üzerinden okunarak kuruşu kuruşuna raporlanır.",
    i: "ph ph-gas-pump",
    links: [
      { name: "Titan", url: "/titan", type: "Kurumsal", img: "/assets/images/devices/preditech titan.png" },
      { name: "Haul", url: "/haul", type: "Kurumsal", img: "/assets/images/devices/preditech haul.png" }
    ]
  },
  {
    t: "Sıcaklık/Nem Takibi",
    d: "Gıda ve medikal taşımacılıkta dorse içi ısı anlık izlenir. Tolerans aşıldığında mallar bozulmadan uyarı gider.",
    i: "ph ph-thermometer",
    links: [
      { name: "Haul", url: "/haul", type: "Kurumsal", img: "/assets/images/devices/preditech haul.png" }
    ]
  },
  {
    t: "Video Telematik Çözümleri",
    d: "Sürücünün yola odaklanıp odaklanmadığını, esneme veya telefon kullanımını ADAS ve DSM kameralarıyla saniye saniye analiz eder.",
    i: "ph ph-video-camera",
    links: [
      { name: "Sentinel", url: "/sentinel", type: "Ek Cihaz", img: "/assets/images/devices/preditech sentinel.png" }
    ]
  },
  {
    t: "Güvenli ve Ekonomik Sürüş",
    d: "Ani fren, sert viraj gibi metrikleri izleyerek yakıt tasarrufunu artırır ve kaza riskini azaltır.",
    i: "ph ph-leaf",
    links: [
      { name: "PRO", url: "/pro", type: "Bireysel", img: "/assets/images/general/preditechlogo.png" },
      { name: "GT", url: "/gt", type: "Bireysel", img: "/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" },
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" }
    ]
  },
  {
    t: "Sürücü Davranışı Analizi",
    d: "G-sensörleri ile toplanan verilerle sürücülere bir 'Güvenlik Skoru' atanır.",
    i: "ph ph-chart-line-up",
    links: [
      { name: "GO", url: "/go", type: "Bireysel", img: "/assets/images/general/preditechlogo.png" },
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" }
    ]
  },
  {
    t: "Uzaktan Araç Durdurma",
    d: "Çalıntı veya acil tehdit durumunda, merkezin komutuyla motor güvenli hıza düşünce kalıcı olarak bloke edilir.",
    i: "ph ph-engine",
    links: [
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" }
    ]
  },
  {
    t: "Acil Yardım Çözümü",
    d: "Sürücünün tehlike altında hissettiği anlarda gizli SOS butonuna basmasıyla, koordinatlar anında iletilir.",
    i: "ph ph-warning-circle",
    links: [
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" },
      { name: "Signal", url: "/signal", type: "Ek Cihaz", img: "/assets/images/devices/preditech signal.png" }
    ]
  },
  {
    t: "Yakıt Deposu Güvenliği",
    d: "Aracın depo kapağının izinsiz açıldığı her an, sistem konumu ile birlikte sabotaj kaydı geçer.",
    i: "ph ph-lock",
    links: [
      { name: "Haul", url: "/haul", type: "Kurumsal", img: "/assets/images/devices/preditech haul.png" }
    ]
  },
  {
    t: "Dorse Takibi",
    d: "Çekici ile dorsenin doğru eşleşip eşleşmediğini Bluetooth Beacon ile denetler. Yanlış dorsede hareket engellenir.",
    i: "ph ph-truck",
    links: [
      { name: "Haul", url: "/haul", type: "Kurumsal", img: "/assets/images/devices/preditech haul.png" }
    ]
  },
  {
    t: "Kapı Durum Takibi",
    d: "Değerli kargo taşımacılığında kapıların yalnızca varış noktasında yetkili kişi tarafından açıldığını garanti eden sistem.",
    i: "ph ph-door",
    links: [
      { name: "Haul", url: "/haul", type: "Kurumsal", img: "/assets/images/devices/preditech haul.png" },
      { name: "Gate", url: "/gate", type: "Ek Cihaz", img: "/assets/images/devices/preditech gate.png" }
    ]
  },
  {
    t: "Damper Takibi",
    d: "Damperin istenmeyen veya yasaklı alanlarda kaldırılmasını denetleyerek olası iş kazalarını önler.",
    i: "ph ph-arrow-up-right",
    links: [
      { name: "Haul", url: "/haul", type: "Kurumsal", img: "/assets/images/devices/preditech haul.png" }
    ]
  },
  {
    t: "Araç İçi Uyarı Sistemi",
    d: "Hatalı bir sürücü davranışında, merkezden müdahaleye gerek kalmadan araç içi buzzer ile anlık ikaz verilir.",
    i: "ph ph-speaker-high",
    links: [
      { name: "Titan", url: "/titan", type: "Kurumsal", img: "/assets/images/devices/preditech titan.png" },
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" }
    ]
  },
  {
    t: "CANBUS Veri Aktarımı",
    d: "Devir sayısı, motor torku, şanzıman ısısı gibi telemetri verilerini aracın beyninden kayıpsız merkeze çeker.",
    i: "ph ph-plugs-connected",
    links: [
      { name: "Doc", url: "/doc", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" },
      { name: "Titan", url: "/titan", type: "Kurumsal", img: "/assets/images/devices/preditech titan.png" }
    ]
  },
  {
    t: "Tehlikeli Atık Yönetimi",
    d: "Hassas kimyasal taşımacılığında sızıntı, ani sarsıntı ve devrilme gibi anomalileri anlık bildirir.",
    i: "ph ph-warning",
    links: [
      { name: "Haul", url: "/haul", type: "Kurumsal", img: "/assets/images/devices/preditech haul.png" }
    ]
  },
  {
    t: "Transit Geçiş Kontrolü",
    d: "Sınır kapılarında ve gümrüklü alanlarda aracın bekleme sürelerini ve yetkisiz müdahaleleri denetler.",
    i: "ph ph-globe",
    links: [
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" }
    ]
  },
  {
    t: "Duraklama/Rölanti",
    d: "Gereksiz yere çalışır durumda bekleyen araçların filoya olan gizli maliyetini hesaplar.",
    i: "ph ph-clock",
    links: [
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" },
      { name: "Titan", url: "/titan", type: "Kurumsal", img: "/assets/images/devices/preditech titan.png" }
    ]
  },
  {
    t: "0-100 km/s Hızlanma Testi",
    d: "Aracınızın kalkış ve hızlanma performansını GPS ve ivmeölçer verileriyle saniyenin onda biri hassasiyetinde ölçün.",
    i: "ph ph-flag-checkered",
    links: [
      { name: "GT", url: "/gt", type: "Bireysel", img: "/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" },
      { name: "Racebox", url: "/racebox", type: "Ek Cihaz", img: "/assets/images/devices/preditech racebox.png" }
    ]
  },
  {
    t: "Çeyrek Mil (1/4 Mile) Ölçümü",
    d: "Drag yarışları için özel olarak tasarlanmış çeyrek mil ve 100-200 km/s ara hızlanma telemetrisi.",
    i: "ph ph-road-horizon",
    links: [
      { name: "GT", url: "/gt", type: "Bireysel", img: "/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" },
      { name: "Racebox", url: "/racebox", type: "Ek Cihaz", img: "/assets/images/devices/preditech racebox.png" }
    ]
  },
  {
    t: "Pist Tur Süreleri (Lap Timer)",
    d: "Pistteki her turunuzu sanal başlangıç/bitiş çizgileriyle kaydederek sektör zamanlarınızı detaylı analiz edin.",
    i: "ph ph-timer",
    links: [
      { name: "GT", url: "/gt", type: "Bireysel", img: "/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" },
      { name: "Racebox", url: "/racebox", type: "Ek Cihaz", img: "/assets/images/devices/preditech racebox.png" }
    ]
  },
  {
    t: "G-Kuvveti ve Viraj Performansı",
    d: "Viraj giriş, apex ve çıkış anlarındaki yanal G kuvvetini izleyerek sürüş dinamiklerinizi mükemmelleştirin.",
    i: "ph ph-intersect",
    links: [
      { name: "GT", url: "/gt", type: "Bireysel", img: "/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" },
      { name: "Racebox", url: "/racebox", type: "Ek Cihaz", img: "/assets/images/devices/preditech racebox.png" }
    ]
  },
  {
    t: "Dinamik Dyno Ölçümleri",
    d: "Motorun anlık yükü ve tekerleğe aktarılan gücü (HP/Tork) hesaplayarak aracınızın performans kayıplarını görün.",
    i: "ph ph-lightning",
    links: [
      { name: "GT", url: "/gt", type: "Bireysel", img: "/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" },
      { name: "Racebox", url: "/racebox", type: "Ek Cihaz", img: "/assets/images/devices/preditech racebox.png" }
    ]
  },
  {
    t: "Akü Sağlığı İzleme",
    d: "Akü voltajındaki dalgalanmaları marş anında analiz ederek yolda kalmadan önce akü ömrünün bittiğini tespit edin.",
    i: "ph ph-battery-warning",
    links: [
      { name: "GO", url: "/go", type: "Bireysel", img: "/assets/images/general/preditechlogo.png" },
      { name: "PRO", url: "/pro", type: "Bireysel", img: "/assets/images/general/preditechlogo.png" },
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" }
    ]
  },
  {
    t: "Hararet Önleyici Uyarı Sistemi",
    d: "Motor suyu sıcaklığı (Coolant Temp) kritik seviyeye yaklaşmadan sizi uyararak conta yakma riskini önler.",
    i: "ph ph-drop",
    links: [
      { name: "GO", url: "/go", type: "Bireysel", img: "/assets/images/general/preditechlogo.png" },
      { name: "PRO", url: "/pro", type: "Bireysel", img: "/assets/images/general/preditechlogo.png" },
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" }
    ]
  },
  {
    t: "Otomatik Arıza Kodu (DTC) Teşhisi",
    d: "Motor ışığı (Check Engine) yandığında arızanın tam nedenini ve ciddiyet seviyesini teknik terimler olmadan görün.",
    i: "ph ph-stethoscope",
    links: [
      { name: "GO", url: "/go", type: "Bireysel", img: "/assets/images/general/preditechlogo.png" },
      { name: "Xper", url: "/ekspertiz", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" },
      { name: "Doc", url: "/doc", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" }
    ]
  },
  {
    t: "Kaza (Crash) Algılama ve Raporlama",
    d: "G-Sensörü üzerinden şiddetli çarpışma algılandığında sistem otomatik kaza raporu oluşturur ve merkeze iletir.",
    i: "ph ph-shield-warning",
    links: [
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" },
      { name: "Titan", url: "/titan", type: "Kurumsal", img: "/assets/images/devices/preditech titan.png" },
      { name: "Signal", url: "/signal", type: "Ek Cihaz", img: "/assets/images/devices/preditech signal.png" }
    ]
  },
  {
    t: "Karbon Ayak İzi Hesaplama",
    d: "Filonuzun yaydığı sera gazı ve CO2 emisyonlarını uluslararası standartlarda analiz ederek sürdürülebilirlik raporu alın.",
    i: "ph ph-plant",
    links: [
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" },
      { name: "Titan", url: "/titan", type: "Kurumsal", img: "/assets/images/devices/preditech titan.png" }
    ]
  },
  {
    t: "Çeki Demiri ve Yük Analizi",
    d: "Treyler bağlantılarındaki stres yükünü ve motorun çektiği ekstra ağırlık torkunu hesaplayarak aşınmaları denetler.",
    i: "ph ph-scales",
    links: [
      { name: "Titan", url: "/titan", type: "Kurumsal", img: "/assets/images/devices/preditech titan.png" },
      { name: "Haul", url: "/haul", type: "Kurumsal", img: "/assets/images/devices/preditech haul.png" }
    ]
  },
  {
    t: "Yapay Zeka Destekli Rota Optimizasyonu",
    d: "Trafik, araç yükü ve eğim verilerini kullanarak yakıt tasarrufunu maksimize edecek en verimli rotayı çizer.",
    i: "ph ph-map-trifold",
    links: [
      { name: "Watchdog", url: "/watchdog", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" },
      { name: "Titan", url: "/titan", type: "Kurumsal", img: "/assets/images/devices/preditech titan.png" },
      { name: "Haul", url: "/haul", type: "Kurumsal", img: "/assets/images/devices/preditech haul.png" }
    ]
  },
  {
    t: "Kusursuz İkinci El Ekspertizi",
    d: "Kilometre manipülasyonu, silinmiş hata kodları ve şanzıman yıpranmalarını tek tuşla yetkili raporu kalitesinde sunar.",
    i: "ph ph-file-magnifying-glass",
    links: [
      { name: "Xper", url: "/ekspertiz", type: "Kurumsal", img: "/assets/images/devices/preditech watchdog.png" }
    ]
  }
];

export default function CozumlerPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveIndex(null);
  };

  const activeSolution = activeIndex !== null ? solutions[activeIndex] : null;

  return (
    <>
      <section className="section" style={{ paddingTop: '160px', minHeight: '80vh' }}>
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px' }}>YAZILIM ÇÖZÜMLERİMİZ</div>
          <h1 style={{ textAlign: 'center', fontSize: 'clamp(40px,6vw,64px)', marginBottom: '60px' }}>
            Tüm İhtiyaçlarınız,<br/>
            <span style={{ color: 'var(--accent)' }}>Tek Platformda.</span>
          </h1>

          <div className="sol-grid" id="solGrid">
            {solutions.map((s, index) => (
              <div key={index} className="sol-card" onClick={() => openModal(index)}>
                <div className="sol-icon"><i className={s.i}></i></div>
                <div className="sol-title">{s.t}</div>
                <div className="sol-desc">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <div className={`modal-overlay${modalOpen ? ' active' : ''}`} id="solModal" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
        <div className="modal-content">
          <button className="modal-close" onClick={closeModal}>✕</button>
          {activeSolution && (
            <>
              <div className="sol-icon"><i className={activeSolution.i}></i></div>
              <div className="modal-title">{activeSolution.t}</div>
              <div className="modal-desc">
                {activeSolution.d}
                {activeSolution.links && activeSolution.links.length > 0 && (
                  <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255,215,0,0.1)' }}>
                    <h4 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text2)', letterSpacing: '1px', marginBottom: '16px', textTransform: 'uppercase' }}>Bu Çözümün Sunulduğu Cihazlar:</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                      {activeSolution.links.map((l, li) => (
                        <Link
                          key={li}
                          href={l.url}
                          style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '12px', textDecoration: 'none', color: 'var(--text)', transition: 'all 0.3s ease', cursor: 'pointer' }}
                          onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                          onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
                        >
                          <div style={{ width: '50px', height: '50px', background: 'var(--bg)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,215,0,0.1)', padding: '4px' }}>
                            <img src={l.img} alt={l.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text)', marginBottom: '2px' }}>{l.name}</div>
                            <div style={{ fontSize: '11px', color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '1px', background: 'rgba(255,255,255,0.05)', display: 'inline-block', padding: '2px 6px', borderRadius: '4px' }}>{l.type}</div>
                          </div>
                          <i className="ph ph-caret-right" style={{ color: 'var(--accent)', fontSize: '18px' }}></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
