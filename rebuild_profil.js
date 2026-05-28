const fs = require('fs');

const html = `// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: \`
  body { background: var(--bg); color: var(--text); overflow-x: hidden; }
  
  .dashboard-wrapper { display: block; padding-top: 80px; }
  
  /* Sidebar */
  .sidebar { width: 280px; background: var(--surface); border-left: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); padding: 32px 24px; display: flex; flex-direction: column; gap: 8px; }
  .sidebar-link { display: flex; align-items: center; gap: 12px; padding: 14px 16px; border-radius: 12px; color: var(--text2); font-weight: 600; text-decoration: none; transition: all 0.2s ease; cursor: pointer; }
  .sidebar-link:hover { background: rgba(255,255,255,0.03); color: #fff; }
  .sidebar-link.active { background: rgba(255,215,0,0.1); color: var(--accent); border-left: 3px solid var(--accent); }
  .sidebar-link i { font-size: 20px; }
  
  /* Main Content */
  .main-content { flex: 1; padding: 40px; overflow-y: auto; }
  .dashboard-section { display: none; animation: fadeIn 0.4s ease; }
  .dashboard-section.active { display: block; }
  
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  
  .section-header { margin-bottom: 32px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 16px; }
  .section-title { font-size: 28px; font-weight: 800; margin-bottom: 8px; }
  .section-desc { color: var(--text2); font-size: 14px; }
  
  /* Profile Settings */
  .settings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
  .profile-avatar-large { width: 100px; height: 100px; border-radius: 50%; border: 3px solid var(--accent); background: #222; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; cursor: pointer; }
  
  .pref-row { display: flex; justify-content: space-between; align-items: center; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
  .pref-toggle { width: 44px; height: 24px; background: rgba(255,255,255,0.1); border-radius: 12px; position: relative; cursor: pointer; transition: 0.3s; }
  .pref-toggle.active { background: var(--accent); }
  .pref-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: #fff; border-radius: 50%; transition: 0.3s; }
  .pref-toggle.active::after { transform: translateX(20px); }

  .subsection-title {
    font-size: 22px;
    font-weight: 800;
    margin-top: 48px;
    margin-bottom: 24px;
    color: var(--accent);
  }
\` }} />
      <div dangerouslySetInnerHTML={{ __html: \`

<div class="dashboard-wrapper" style="display:flex; min-height:100vh;">
  <!-- SIDEBAR -->
  <div class="sidebar">
    <div style="font-size:11px; color:var(--text2); font-weight:800; letter-spacing:1px; margin-bottom:12px; padding-left:16px;">GARAJIM</div>
    
    <div class="sidebar-link active" data-target="gt-dash">
      <i class="ph-fill ph-car-profile"></i> Mazda MX-5
    </div>
    
    <div style="font-size:11px; color:var(--text2); font-weight:800; letter-spacing:1px; margin-top:32px; margin-bottom:12px; padding-left:16px;">HESABIM</div>
    
    <div class="sidebar-link" data-target="settings-dash">
      <i class="ph-fill ph-gear"></i> Ayarlar
    </div>
    <div class="sidebar-link" onclick="window.location.href='/'">
      <i class="ph-fill ph-sign-out"></i> Çıkış Yap
    </div>
  </div>

  <!-- MAIN CONTENT -->
  <div class="main-content">

    <!-- GT DASHBOARD -->
    <div class="dashboard-section active" id="gt-dash">
      <div class="section-header">
        <h2 class="section-title">Mazda MX-5 Verileri</h2>
        <p class="section-desc">Aracınızın anlık telemetri, motor kondisyonu ve yapay zeka analiz raporları.</p>
      </div>

      <div class="subsection-title">Aktif Arızalarınız</div>
      <div class="bento-grid">
        
        <!-- P0106 Alert -->
        <div class="bento-card bento-col-2 bento-row-2 bento-alert" style="justify-content: center; text-align: center; padding: 24px; background: radial-gradient(circle at center, #1A1A1A 0%, #060606 100%); border: 1px solid rgba(255,68,68,0.15);">
          <i class="ph-fill ph-warning bc-icon" style="color: #FF4444; font-size: 48px; margin: 0 auto 16px auto;"></i>
          <div class="bc-title" style="color:#FF4444; letter-spacing:2px; font-weight:800; text-align: center; font-size: 14px;">KRİTİK SEVİYE</div>
          <div class="bc-value" style="text-align: center; font-size: 64px; font-weight: 900; color: #FF4444; margin: 8px 0;">P0106</div>
          <div style="color:var(--accent); font-weight:800; margin-top:16px; font-size: 16px; letter-spacing:1px; text-align: center;">MOTOR YÖNETİMİ</div>
          <p style="text-align: center; color: var(--text2); margin-top: 8px; font-size: 14px;">Emme Manifoldu Mutlak Basınç Performans Sorunu</p>
          <div style="display: flex; gap: 8px; justify-content: center; margin-top: 24px; flex-wrap: wrap;">
            <div style="background: rgba(255,68,68,0.1); border: 1px solid rgba(255,68,68,0.2); padding: 8px 12px; border-radius: 8px; font-size: 11px; color: #FF4444; font-weight: 600;">Kablolama Temassızlığı</div>
            <div style="background: rgba(255,68,68,0.1); border: 1px solid rgba(255,68,68,0.2); padding: 8px 12px; border-radius: 8px; font-size: 11px; color: #FF4444; font-weight: 600;">Vakum Kaçağı</div>
            <div style="background: rgba(255,68,68,0.1); border: 1px solid rgba(255,68,68,0.2); padding: 8px 12px; border-radius: 8px; font-size: 11px; color: #FF4444; font-weight: 600;">Arızalı MAP Sensörü</div>
          </div>
        </div>

        <!-- Motor Sağlık Skoru -->
        <div class="bento-card flip-card" style="min-height: 240px;">
          <div class="flip-card-inner">
            <div class="flip-card-front" style="background: linear-gradient(135deg, #0d1611 0%, #050806 100%); border: 1px solid rgba(0, 255, 136, 0.08);">
              <div class="bc-header"><i class="ph-fill ph-brain bc-icon" style="color: #00FF88;"></i><span>Predicto AI</span></div>
              <div class="bc-title">Motor Sağlık Skoru</div>
              <div class="bc-value" style="color: #00FF88;">84.2 <span class="bc-unit" style="color: #00FF88;">%</span></div>
              <div class="bc-progress-bg" style="background: rgba(255,255,255,0.04);"><div class="bc-progress-fill" style="width: 84.2%; background: #00FF88; box-shadow: 0 0 10px #00FF88;"></div></div>
              <div style="text-align:right; font-size:12px; color:rgba(0, 255, 136, 0.6); margin-top:8px; font-family:monospace; font-weight: 700;">DİKKAT GEREKTİRİYOR</div>
            </div>
            <div class="flip-card-back">
              <h4><i class="ph-fill ph-brain"></i> Motor Sağlık Skoru</h4>
              <p>OBD parametreleri ile 6 eksenli mekanik hareketlerin yapay zeka ile birleştirilmesi sonucu hesaplanan anlık kondisyon yüzdesidir.</p>
            </div>
          </div>
        </div>

        <!-- Şanzıman Sağlığı -->
        <div class="bento-card flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front premium-status-card">
              <div class="bc-premium-row">
                <div class="bc-premium-icon"><i class="ph-fill ph-gear" style="color: #F9D423;"></i></div>
                <div class="bc-premium-info">
                  <div class="bc-premium-title">Şanzıman Sağlığı</div>
                  <div class="bc-premium-val">42 <span style="font-size: 14px; color: var(--text2); font-weight: 600;">% Yıpranma</span></div>
                  <div class="bc-premium-bar">
                    <div class="bc-premium-bar-fill" style="width: 42%; background: #F9D423; box-shadow: 0 0 8px #F9D423;"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flip-card-back">
              <h4><i class="ph-fill ph-gear"></i> Şanzıman Sağlığı</h4>
              <p>Şanzıman devir değişimlerindeki mekanik vuruntuları analiz ederek kavrama ömrünüzü tahmin eder.</p>
            </div>
          </div>
        </div>

      </div>

      <div class="subsection-title">Son Gezileriniz</div>
      <div class="bento-grid">
        
        <!-- Trips List -->
        <div class="bento-card flip-card bento-col-2" style="min-height: 280px;">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div class="bc-header"><i class="ph-fill ph-map-pin-line bc-icon"></i><span>Rota Geçmişi</span></div>
              <div class="bc-title">Son Rotalarınız</div>
              <div class="bc-list">
                <div class="bc-list-item">
                   <div class="bc-list-item-left"><i class="ph-fill ph-car" style="font-size:24px; color:var(--text2); margin-right:12px;"></i> Edirne - İzmir</div>
                   <div class="bc-list-item-right" style="color:var(--accent);font-weight:700;">Tamamlandı</div>
                </div>
                <div class="bc-list-item">
                   <div class="bc-list-item-left"><i class="ph-fill ph-car" style="font-size:24px; color:var(--text2); margin-right:12px;"></i> İzmir - İstanbul</div>
                   <div class="bc-list-item-right" style="color:var(--text2);">Tamamlandı</div>
                </div>
                <div class="bc-list-item">
                   <div class="bc-list-item-left"><i class="ph-fill ph-car" style="font-size:24px; color:var(--text2); margin-right:12px;"></i> İstanbul İçi Sürüş</div>
                   <div class="bc-list-item-right" style="color:var(--text2);">Kısa Mesafe</div>
                </div>
              </div>
            </div>
            <div class="flip-card-back">
              <h4><i class="ph-fill ph-map-pin-line"></i> Son Gezileriniz</h4>
              <p>GPS ve OBD verileriniz kullanılarak kaydedilmiş son sürüş rotalarınız ve seyahat durumları.</p>
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- SETTINGS DASHBOARD -->
    <div class="dashboard-section" id="settings-dash">
      <div class="section-header">
        <h2 class="section-title">Hesap Ayarları</h2>
        <p class="section-desc">Kişisel bilgilerinizi ve uygulama tercihlerinizi yönetin.</p>
      </div>
      
      <div class="settings-grid">
        <div>
          <h3 style="font-size:18px; font-weight:800; margin-bottom:24px;">Profil Bilgileri</h3>
          <div style="display:flex; align-items:center; gap:24px; margin-bottom:32px;">
            <div class="profile-avatar-large">
              <img src="https://i.pravatar.cc/150?img=11" alt="Profil" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div>
              <div style="font-size:20px; font-weight:800; margin-bottom:4px;">Kullanıcı Adı</div>
              <div style="color:var(--text2); font-size:14px; margin-bottom:12px;">kullanici@mail.com</div>
              <button class="action-btn btn-white">Fotoğrafı Değiştir</button>
            </div>
          </div>
          
          <div class="form-group" style="margin-bottom:16px;">
            <label>Ad Soyad</label>
            <input type="text" class="sporty-input" style="width:100%; box-sizing:border-box;" value="Kullanıcı Adı">
          </div>
          <div class="form-group" style="margin-bottom:16px;">
            <label>E-posta</label>
            <input type="email" class="sporty-input" style="width:100%; box-sizing:border-box;" value="kullanici@mail.com">
          </div>
          <div class="form-group" style="margin-bottom:24px;">
            <label>Telefon</label>
            <input type="tel" class="sporty-input" style="width:100%; box-sizing:border-box;" value="+90 555 123 4567">
          </div>
          <button class="action-btn btn-white">Bilgileri Güncelle</button>
        </div>
        
        <div>
          <h3 style="font-size:18px; font-weight:800; margin-bottom:24px;">Tercihler</h3>
          
          <div class="pref-row">
            <div>
              <div style="font-weight:700; margin-bottom:4px;">Anlık Bildirimler</div>
              <div style="font-size:12px; color:var(--text2);">Arıza ve erken uyarı bildirimleri.</div>
            </div>
            <div class="pref-toggle active" onclick="this.classList.toggle('active')"></div>
          </div>
          <div class="pref-row">
            <div>
              <div style="font-weight:700; margin-bottom:4px;">E-posta Bülteni</div>
              <div style="font-size:12px; color:var(--text2);">Aylık raporlar ve yenilikler.</div>
            </div>
            <div class="pref-toggle" onclick="this.classList.toggle('active')"></div>
          </div>
          <div class="pref-row">
            <div>
              <div style="font-weight:700; margin-bottom:4px;">Koyu Tema</div>
              <div style="font-size:12px; color:var(--text2);">Uygulama arayüzü teması.</div>
            </div>
            <div class="pref-toggle active" onclick="this.classList.toggle('active')"></div>
          </div>
          
          <h3 style="font-size:18px; font-weight:800; margin-bottom:24px; margin-top:40px;">Tehlikeli Alan</h3>
          <button class="action-btn btn-red" style="width:100%; display:flex; align-items:center; justify-content:center; gap:8px;">
            <i class="ph-bold ph-trash"></i> Hesabı Sil
          </button>
        </div>
      </div>
    </div>
    
  </div>
</div>

\` }} />
      
      <Script id="profil-scripts" strategy="lazyOnload">
        {\`
          if(typeof window !== 'undefined') {
            document.querySelectorAll('.sidebar-link').forEach(link => {
              link.addEventListener('click', () => {
                if(link.hasAttribute('data-target')) {
                  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
                  link.classList.add('active');
                  const target = link.getAttribute('data-target');
                  document.querySelectorAll('.dashboard-section').forEach(sec => sec.classList.remove('active'));
                  const trg = document.getElementById(target);
                  if(trg) trg.classList.add('active');
                }
              });
            });
          }
        \`}
      </Script>
    </>
  );
}
`;

fs.writeFileSync('src/app/profil/page.tsx', html);
