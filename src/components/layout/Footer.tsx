'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [showToast, setShowToast] = useState(false);

  const handleSubscribe = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <footer className="premium-footer">
      {showToast && (
        <div style={{
          position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
          background: 'var(--success)', color: '#000', padding: '12px 24px', borderRadius: '8px',
          fontWeight: 600, zIndex: 9999, boxShadow: '0 4px 12px rgba(0,255,136,0.3)'
        }}>
          Aramıza hoş geldiniz!
        </div>
      )}
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'60px',marginBottom:'60px'}}>
          <div>
            <img src="/assets/images/general/preditechlogo.png" alt="Preditech" style={{height:'28px',marginBottom:'24px'}} />
            <p style={{color:'var(--text2)',fontSize:'15px',lineHeight:1.6}}>Kestirimci bakımın geleceği. Yapay zeka ve donanımın gücüyle araçlarınızın arızalarını haftalar öncesinden hissedin.</p>
            <div style={{margin:'24px 0 16px 0'}}>
              <img src="/assets/images/general/acc-ing-26.png" alt="İTÜ Çekirdek Acceleration Startup" style={{height:'auto',maxHeight:'80px',maxWidth:'100%'}} />
            </div>
            <div className="social-icons">
              <a href="https://instagram.com/preditech" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="ph ph-instagram-logo"></i></a>
              <a href="https://linkedin.com/company/preditech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://youtube.com/@preditech" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="ph ph-youtube-logo"></i></a>
              <a href="https://tiktok.com/@preditech" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="ph ph-tiktok-logo"></i></a>
              <a href="https://x.com/preditech" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><i className="ph ph-x-logo"></i></a>
            </div>
          </div>

          <div>
            <h3>Cihazlar</h3>
            <ul className="footer-links-premium">
              <li><Link href="/go">Preditech GO</Link></li>
              <li><Link href="/pro">Preditech PRO</Link></li>
              <li><Link href="/gt">Preditech GT</Link></li>
              <li><Link href="/doc">Preditech DOC</Link></li>
              <li><Link href="/watchdog">Watchdog (Filo)</Link></li>
              <li><Link href="/titan">Titan (Tır)</Link></li>
            </ul>
          </div>

          <div>
            <h3>Şirket</h3>
            <ul className="footer-links-premium">
              <li><Link href="/iletisim">Hakkımızda</Link></li>
              <li><Link href="/cozumler">Çözümler</Link></li>
              <li><Link href="/haberler">Haberler</Link></li>
              <li><Link href="/destek">Destek Merkezi</Link></li>
            </ul>
          </div>

          <div>
            <h3>Bültene Katılın</h3>
            <p style={{color:'var(--text2)',fontSize:'14px',marginBottom:'16px'}}>Gelişmelerden ve erken erişim fırsatlarından anında haberdar olun.</p>
            <div className="newsletter-box">
              <input type="email" placeholder="E-posta adresiniz" />
              <button onClick={handleSubscribe}>Kayıt Ol</button>
            </div>
          </div>
        </div>

        <div style={{borderTop:'1px solid rgba(255,215,0,0.1)',padding:'24px 0',textAlign:'center',color:'var(--text2)',fontSize:'14px'}}>
          © 2026 Preditech. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
