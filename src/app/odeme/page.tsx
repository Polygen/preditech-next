// @ts-nocheck
'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  return (
    <>


<div className="container">
  <div className="checkout-container reveal">
    
    
    <div>
      <h2 style={{ fontSize: '28px', marginBottom: '32px',  }}>Ödeme Bilgileri</h2>
      
      <div className="checkout-card" style={{ marginBottom: '24px',  }}>
        <h3 style={{ fontSize: '18px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px',  }}><i className="ph-fill ph-map-pin" style={{ color: 'var(--accent)',  }}></i> Teslimat Adresi</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label>Ad</label>
            <input type="text" className="sporty-input" style={{ width: '100%', boxSizing: 'border-box',  }} placeholder="Adınız" />
          </div>
          <div className="form-group">
            <label>Soyad</label>
            <input type="text" className="sporty-input" style={{ width: '100%', boxSizing: 'border-box',  }} placeholder="Soyadınız" />
          </div>
        </div>
        
        <div className="form-group" style={{ marginBottom: '16px',  }}>
          <label>Açık Adres</label>
          <textarea className="sporty-input" style={{ width: '100%', boxSizing: 'border-box', height: '80px', resize: 'none',  }} placeholder="Mahalle, sokak, bina no..."></textarea>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>İl</label>
            <input type="text" className="sporty-input" style={{ width: '100%', boxSizing: 'border-box',  }} placeholder="İl" />
          </div>
          <div className="form-group">
            <label>İlçe</label>
            <input type="text" className="sporty-input" style={{ width: '100%', boxSizing: 'border-box',  }} placeholder="İlçe" />
          </div>
        </div>
      </div>
      
      <div className="checkout-card">
        <h3 style={{ fontSize: '18px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px',  }}><i className="ph-fill ph-credit-card" style={{ color: 'var(--accent)',  }}></i> Kart Bilgileri</h3>
        
        <div className="form-group" style={{ marginBottom: '16px',  }}>
          <label>Kart Üzerindeki İsim</label>
          <input type="text" className="sporty-input" style={{ width: '100%', boxSizing: 'border-box',  }} placeholder="İSİM SOYİSİM" />
        </div>
        
        <div className="form-group" style={{ marginBottom: '16px',  }}>
          <label>Kart Numarası</label>
          <input type="text" className="sporty-input" style={{ width: '100%', boxSizing: 'border-box',  }} placeholder="0000 0000 0000 0000" maxLength="19" />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Son Kullanma (AA/YY)</label>
            <input type="text" className="sporty-input" style={{ width: '100%', boxSizing: 'border-box',  }} placeholder="12/26" maxLength="5" />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input type="text" className="sporty-input" style={{ width: '100%', boxSizing: 'border-box',  }} placeholder="123" maxLength="3" />
          </div>
        </div>
      </div>
      
    </div>
    
    
    <div>
      <div className="checkout-card" style={{ position: 'sticky', top: '120px',  }}>
        <h3 style={{ fontSize: '18px', marginBottom: '24px',  }}>Sipariş Özeti</h3>
        
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)',  }}>
          <img src="/assets/images/devices/GREG.png" alt="Preditech PRO" style={{ width: '80px', height: '80px', objectFit: 'contain',  }} />
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '4px',  }}>Preditech PRO</h4>
            <p style={{ fontSize: '12px', color: 'var(--text2)',  }}>Erken Erişim Sürümü</p>
          </div>
        </div>
        
        <div className="summary-item">
          <span>Ara Toplam</span>
          <strong>12.500₺</strong>
        </div>
        <div className="summary-item">
          <span>Kargo Ücreti</span>
          <strong style={{ color: '#22c55e',  }}>Ücretsiz</strong>
        </div>
        <div className="summary-item">
          <span>Vergiler (KDV)</span>
          <strong>Dahil</strong>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '24px 0', paddingTop: '24px', borderTop: '1px dashed rgba(255,255,255,0.1)', fontSize: '18px', fontWeight: '700',  }}>
          <span>Genel Toplam</span>
          <span style={{ color: 'var(--accent)', fontFamily: 'monospace', fontSize: '24px',  }}>12.500₺</span>
        </div>
        
        <button type="button" onClick={() => { window.location.href='siparis-takip' }} className="btn btn-primary sporty-btn" style={{ width: '100%', justifyContent: 'center', background: 'var(--accent)', color: '#000', fontWeight: '800', padding: '20px', fontSize: '16px',  }}>GÜVENLİ ÖDEME YAP</button>
        <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: 'var(--text2)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',  }}>
          <i className="ph-fill ph-lock-key"></i> 256-bit SSL ile güvendesiniz.
        </p>
      </div>
    </div>
    
  </div>
</div>


    </>
  );
}
