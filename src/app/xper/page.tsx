// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<!-- MASSIVE HERO -->
<section class="massive-hero accent-title">
<div class="particles"></div>
<div class="container" style="z-index:2">
<div class="section-label" style="justify-content:center;margin-bottom:24px">5 DAKİKADA GERÇEK EKSPERTİZ</div>
<div class="user-tag">KURUMSAL / TEST</div>
<h1 style="font-size:clamp(40px,6vw,80px)">Güven<br>Katıyoruz.</h1>
<p class="massive-hero-sub">Motor, şanzıman, süspansiyon ve elektrik sistemlerini ayrı ayrı skorlayan dijital ekspertiz raporu.</p>
<div style="font-size:140px;font-weight:900;color:var(--accent);opacity:0.05;position:absolute;top:30%;left:50%;transform:translate(-50%, -50%)">XPER</div>
<img src="assets/images/devices/preditech watchdog.png" alt="Preditech XPER" class="corp-device-img">
</div>
</section>

<section class="section" style="padding-top:0">
<div class="container">

<!-- Feature 1 -->
<div class="deep-dive-grid reveal" style="margin-bottom:80px">
  <div class="dd-content">
    <div class="section-label" style="color:var(--danger);border-color:var(--danger)">SİLİNMİŞ BİLE OLSA SAKLANAMAZ</div>
    <h2>DTC-Off (Hata Silme)<br>Kontrolü</h2>
    <p style="color:var(--text2);font-size:18px;line-height:1.7;margin-top:24px;margin-bottom:32px">Satıcılar arıza kodlarını sildirebilir, motor ışığını söndürebilir. Standart ekspertizler yalnızca "mevcut" hata kodlarını okur. Preditech XPER ise "silinmiş ama izi kalan" hata geçmişini, ECU'nun enerji tüketim profilini ve freeze-frame adaptasyon değerlerini analiz eder.</p>
    <ul class="feature-list">
      <li><span class="yes" style="color:var(--danger)">!</span> Gizlenmiş Motor Arızası Tespiti</li>
      <li><span class="yes" style="color:var(--danger)">!</span> Hatanın Ne Zaman Silindiği Raporu</li>
    </ul>
  </div>
  <div class="dd-img-wrapper sporty-card" style="padding:40px; overflow:hidden;">
    <!-- Danger Alert Card -->
    <div style="background:rgba(255,68,68,0.06);border:1px solid rgba(255,68,68,0.3);border-radius:12px;padding:28px;margin-bottom:20px;box-shadow:inset 0 0 40px rgba(255,68,68,0.05)">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
        <div style="width:10px;height:10px;background:var(--danger);border-radius:50%;animation:pulse 1s infinite"></div>
        <span style="font-size:13px;font-weight:800;letter-spacing:2px;color:var(--danger)">ARIZA GEÇMİŞİ TESPİT EDİLDİ</span>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:space-between;align-items:center;padding:16px 0;border-top:1px solid rgba(255,68,68,0.15)">
        <span style="color:var(--text2);font-size:14px;font-weight:500">Arıza Kodu</span>
        <span style="color:var(--danger);font-weight:800;font-family:'SF Mono', monospace;font-size:16px;background:rgba(255,68,68,0.1);padding:4px 12px;border-radius:6px">P0420</span>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:space-between;align-items:center;padding:16px 0;border-top:1px solid rgba(255,68,68,0.15)">
        <span style="color:var(--text2);font-size:14px;font-weight:500">Silinme Zamanı</span>
        <span style="color:var(--danger);font-weight:700;font-size:15px">14 km önce</span>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:space-between;align-items:center;padding:16px 0;border-top:1px solid rgba(255,68,68,0.15)">
        <span style="color:var(--text2);font-size:14px;font-weight:500">Tespit Yöntemi</span>
        <span style="color:var(--text);font-size:13px;background:rgba(255,255,255,0.05);padding:4px 12px;border-radius:6px;border:1px solid rgba(255,255,255,0.1)">Enerji İzi Analizi</span>
      </div>
    </div>
    <div style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:20px;display:flex;gap:16px;align-items:center">
      <div style="font-size:28px">âš ï¸</div>
      <div>
        <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:6px">Katalitik Konvertör Verimliliği Düşük</div>
        <div style="font-size:13px;color:var(--text2)">Standart tarama: Temiz görünüyor.<br><span style="color:var(--danger)">XPER tarama: Manipülasyon tespit edildi.</span></div>
      </div>
    </div>
  </div>
</div>

<!-- Feature 2 -->
<div class="deep-dive-grid reverse reveal" style="margin-bottom:80px">
  <div class="dd-content">
    <div class="section-label">7 FARKLI BEYİNDEN ONAY</div>
    <h2>Çapraz Kilometre<br>Doğrulama</h2>
    <p style="color:var(--text2);font-size:18px;line-height:1.7;margin-top:24px;margin-bottom:32px">Kilometre sayacını geri almak Türkiye'de büyük bir problem. Preditech XPER, kilometre bilgisini tek bir beyinden (gösterge) değil; ABS, Şanzıman, Airbag ve Motor beyni dahil 5-7 farklı ECU'dan ayrı ayrı okur ve karşılaştırır.</p>
    <ul class="feature-list">
      <li><span class="yes" style="color:var(--accent)">âœ“</span> Değerler Arası Tutarsızlık Tespiti</li>
      <li><span class="yes" style="color:var(--accent)">âœ“</span> %99.9 Oranında Manipülasyon Yakalama</li>
    </ul>
  </div>
  <div class="dd-img-wrapper sporty-card" style="padding:40px; overflow:hidden;">
    <div style="font-size:13px;font-weight:700;letter-spacing:2px;color:var(--text2);margin-bottom:20px">7 ECU KARŞILAŞTIRMA RAPORU</div>
    <div style="display:flex;flex-direction:column;gap:12px">
      <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:space-between;align-items:center;padding:16px 20px;background:var(--surface);border:1px solid var(--border);border-radius:8px">
        <span style="font-size:14px;font-weight:500">Gösterge Paneli</span>
        <div style="display:flex;align-items:center;gap:8px"><div style="width:8px;height:8px;background:var(--success);border-radius:50%"></div><span style="color:var(--success);font-weight:800;font-family:'SF Mono', monospace;font-size:16px">124.500 km</span></div>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:space-between;align-items:center;padding:16px 20px;background:rgba(255,68,68,0.04);border:1px solid rgba(255,68,68,0.2);border-radius:8px">
        <span style="font-size:14px;font-weight:500">Şanzıman (TCM)</span>
        <div style="display:flex;align-items:center;gap:8px"><div style="width:8px;height:8px;background:var(--danger);border-radius:50%;animation:pulse 1s infinite"></div><span style="color:var(--danger);font-weight:800;font-family:'SF Mono', monospace;font-size:16px">184.200 km</span></div>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:space-between;align-items:center;padding:16px 20px;background:rgba(255,68,68,0.04);border:1px solid rgba(255,68,68,0.2);border-radius:8px">
        <span style="font-size:14px;font-weight:500">ABS Beyni</span>
        <div style="display:flex;align-items:center;gap:8px"><div style="width:8px;height:8px;background:var(--danger);border-radius:50%;animation:pulse 1s infinite"></div><span style="color:var(--danger);font-weight:800;font-family:'SF Mono', monospace;font-size:16px">184.195 km</span></div>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:space-between;align-items:center;padding:16px 20px;background:rgba(255,68,68,0.1);border:1px solid rgba(255,68,68,0.4);border-radius:8px;margin-top:8px">
        <span style="font-size:14px;font-weight:800;letter-spacing:1px">SİSTEM KARARI</span>
        <span style="color:var(--danger);font-weight:900;font-size:16px;letter-spacing:1px">KM OYNANMIŞ âœ—</span>
      </div>
    </div>
  </div>
</div>

<!-- Feature 3 -->
<div class="deep-dive-grid reveal">
  <div class="dd-content">
    <div class="section-label">DİJİTAL SAÄLIK RAPORU</div>
    <h2>Gerçek Yıpranma<br>Yaşı Hesaplama</h2>
    <p style="color:var(--text2);font-size:18px;line-height:1.7;margin-top:24px;margin-bottom:32px">Araç 100.000 KM'de olabilir ama nasıl kullanıldı? Preditech, aynı model ve yıl araçların ortalama yıpranma profiliyle karşılaştırma yaparak "Gerçek Yıpranma Eşdeğer KM"sini hesaplar.</p>
    <ul class="feature-list">
      <li><span class="yes" style="color:var(--accent)">âœ“</span> Motor, Şanzıman, Yürür Aksam Skorlaması (0-100)</li>
      <li><span class="yes" style="color:var(--accent)">âœ“</span> Müşteriye Şeffaf Dijital Rapor Sunumu</li>
    </ul>
  </div>
  <div class="dd-img-wrapper sporty-card" style="text-align:center;padding:40px">
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:20px;text-align:left">
      <!-- 1 -->
      <div style="background:var(--surface);padding:24px;border-radius:16px;border:1px solid var(--border);display:flex;gap:20px;align-items:center;box-shadow:0 10px 20px rgba(0,0,0,0.2)">
        <i class="ph-fill ph-engine" style="font-size:48px;color:var(--danger)"></i>
        <div style="flex:1">
          <div style="font-size:15px;font-weight:600;color:var(--text);margin-bottom:4px">Motor Sağlığı</div>
          <div style="font-size:28px;font-weight:700;color:var(--danger);margin-bottom:12px">72 %</div>
          <div style="width:100%;height:4px;background:rgba(255,255,255,0.05);border-radius:2px;overflow:hidden"><div style="width:72%;height:100%;background:var(--danger)"></div></div>
        </div>
      </div>
      <!-- 2 -->
      <div style="background:var(--surface);padding:24px;border-radius:16px;border:1px solid var(--border);display:flex;gap:20px;align-items:center;box-shadow:0 10px 20px rgba(0,0,0,0.2)">
        <i class="ph-fill ph-gear" style="font-size:48px;color:var(--success)"></i>
        <div style="flex:1">
          <div style="font-size:15px;font-weight:600;color:var(--text);margin-bottom:4px">Şanzıman Sağlığı</div>
          <div style="font-size:28px;font-weight:700;color:var(--success);margin-bottom:12px">92 %</div>
          <div style="width:100%;height:4px;background:rgba(255,255,255,0.05);border-radius:2px;overflow:hidden"><div style="width:92%;height:100%;background:var(--success)"></div></div>
        </div>
      </div>
      <!-- 3 -->
      <div style="background:var(--surface);padding:24px;border-radius:16px;border:1px solid var(--border);display:flex;gap:20px;align-items:center;box-shadow:0 10px 20px rgba(0,0,0,0.2)">
        <i class="ph-fill ph-steering-wheel" style="font-size:48px;color:var(--danger)"></i>
        <div style="flex:1">
          <div style="font-size:15px;font-weight:600;color:var(--text);margin-bottom:4px">Fren Sağlığı</div>
          <div style="font-size:28px;font-weight:700;color:var(--danger);margin-bottom:12px">84 %</div>
          <div style="width:100%;height:4px;background:rgba(255,255,255,0.05);border-radius:2px;overflow:hidden"><div style="width:84%;height:100%;background:var(--danger)"></div></div>
        </div>
      </div>
      <!-- 4 -->
      <div style="background:var(--surface);padding:24px;border-radius:16px;border:1px solid var(--border);display:flex;gap:20px;align-items:center;box-shadow:0 10px 20px rgba(0,0,0,0.2)">
        <i class="ph-fill ph-battery-full" style="font-size:48px;color:var(--success)"></i>
        <div style="flex:1">
          <div style="font-size:15px;font-weight:600;color:var(--text);margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Akü ve Elektrik Sağ...</div>
          <div style="font-size:28px;font-weight:700;color:var(--success);margin-bottom:12px">100 %</div>
          <div style="width:100%;height:4px;background:rgba(255,255,255,0.05);border-radius:2px;overflow:hidden"><div style="width:100%;height:100%;background:var(--success)"></div></div>
        </div>
      </div>
      <!-- 5 -->
      <div style="background:var(--surface);padding:24px;border-radius:16px;border:1px solid var(--border);display:flex;gap:20px;align-items:center;box-shadow:0 10px 20px rgba(0,0,0,0.2)">
        <i class="ph-fill ph-wind" style="font-size:48px;color:var(--success)"></i>
        <div style="flex:1">
          <div style="font-size:15px;font-weight:600;color:var(--text);margin-bottom:4px">Egzoz Hattı Sağlığı</div>
          <div style="font-size:28px;font-weight:700;color:var(--success);margin-bottom:12px">100 %</div>
          <div style="width:100%;height:4px;background:rgba(255,255,255,0.05);border-radius:2px;overflow:hidden"><div style="width:100%;height:100%;background:var(--success)"></div></div>
        </div>
      </div>
      <!-- 6 -->
      <div style="background:var(--surface);padding:24px;border-radius:16px;border:1px solid var(--border);display:flex;gap:20px;align-items:center;box-shadow:0 10px 20px rgba(0,0,0,0.2)">
        <i class="ph-fill ph-hurricane" style="font-size:48px;color:var(--danger)"></i>
        <div style="flex:1">
          <div style="font-size:15px;font-weight:600;color:var(--text);margin-bottom:4px">Yürür Sistem Sağlığı</div>
          <div style="font-size:28px;font-weight:700;color:var(--danger);margin-bottom:12px">63 %</div>
          <div style="width:100%;height:4px;background:rgba(255,255,255,0.05);border-radius:2px;overflow:hidden"><div style="width:63%;height:100%;background:var(--danger)"></div></div>
        </div>
      </div>
    </div>
  </div>
      <div style="background:var(--surface);padding:24px;border-radius:12px;border:1px solid var(--border);box-shadow:0 10px 20px rgba(0,0,0,0.2)"><h4 style="margin-bottom:12px;font-size:14px;color:var(--text2);font-weight:500">Şanzıman Sağlığı</h4><div style="font-size:40px;font-weight:900;color:var(--danger)">63%</div></div>
      <div style="background:var(--surface);padding:24px;border-radius:12px;border:1px solid var(--border);box-shadow:0 10px 20px rgba(0,0,0,0.2)"><h4 style="margin-bottom:12px;font-size:14px;color:var(--text2);font-weight:500">Egzoz Hattı</h4><div style="font-size:40px;font-weight:900;color:var(--success)">100%</div></div>
      <div style="background:var(--surface);padding:24px;border-radius:12px;border:1px solid var(--border);box-shadow:0 10px 20px rgba(0,0,0,0.2)"><h4 style="margin-bottom:12px;font-size:14px;color:var(--text2);font-weight:500">Akü & Elektrik</h4><div style="font-size:40px;font-weight:900;color:var(--accent)">84%</div></div>
    </div>
  </div>
</div>

</div>
</section>


` }} />
    </>
  );
}
