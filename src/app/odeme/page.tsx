'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OdemePage() {
  const router = useRouter();
  
  // Card states
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  // Formatting helpers
  const formatCardNumber = (val: string) => {
    const v = val.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) return parts.join(' ');
    return val;
  };

  const formatExpiry = (val: string) => {
    const v = val.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 3) return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    return v;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to siparis-takip
    router.push('/siparis-takip');
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .checkout-container { max-width: 1200px; margin: 120px auto 80px; display: grid; grid-template-columns: 1fr 400px; gap: 40px; }
        .checkout-card { background: var(--card); border: 1px solid var(--border); border-radius: 24px; padding: 40px; }
        .form-row { display: flex; gap: 16px; margin-bottom: 16px; }
        .form-row > div { flex: 1; }
        .form-group label { display: block; margin-bottom: 8px; font-size: 13px; color: var(--text2); font-weight: 500; }
        .summary-item { display: flex; justify-content: space-between; margin-bottom: 16px; font-size: 14px; color: var(--text2); }
        .summary-item strong { color: var(--text); }
        @media(max-width: 992px) {
          .checkout-container { grid-template-columns: 1fr; }
        }

        /* Animated Credit Card Styles */
        .card-perspective { perspective: 1000px; margin-bottom: 40px; width: 100%; max-width: 400px; height: 250px; margin-left: auto; margin-right: auto; }
        .card-inner { width: 100%; height: 100%; position: relative; transition: transform 0.8s; transform-style: preserve-3d; }
        .card-inner.is-flipped { transform: rotateY(180deg); }
        .card-front, .card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.5); overflow: hidden; }
        
        .card-front { background: linear-gradient(135deg, #1f1f1f, #0a0a0a); border: 1px solid rgba(255,255,255,0.1); padding: 30px; display: flex; flex-direction: column; justify-content: space-between; }
        .card-front::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 50%); transform: rotate(30deg); pointer-events: none; }
        
        .card-back { background: linear-gradient(135deg, #0a0a0a, #1f1f1f); transform: rotateY(180deg); border: 1px solid rgba(255,255,255,0.1); }
        .card-strip { background: #000; height: 50px; margin-top: 30px; width: 100%; }
        .card-cvv-box { background: #fff; margin: 20px 30px; height: 40px; border-radius: 4px; display: flex; align-items: center; justify-content: flex-end; padding-right: 15px; color: #000; font-family: monospace; font-size: 18px; font-weight: bold; font-style: italic;}
        
        .card-chip { width: 50px; height: 40px; background: linear-gradient(135deg, #e0c870, #8b7326); border-radius: 8px; margin-bottom: 20px; }
        .card-number-display { font-family: 'SF Mono', monospace; font-size: 24px; color: #fff; letter-spacing: 2px; text-shadow: 0 2px 4px rgba(0,0,0,0.5); min-height: 28px; }
        .card-details-display { display: flex; justify-content: space-between; margin-top: auto; }
        .card-detail-col { display: flex; flex-direction: column; }
        .card-detail-label { font-size: 10px; color: var(--text2); text-transform: uppercase; margin-bottom: 4px; }
        .card-detail-value { font-family: 'SF Mono', monospace; font-size: 14px; color: #fff; text-transform: uppercase; min-height: 20px; }
      `}} />

      <div className="container">
        <div className="checkout-container reveal">
          
          <form onSubmit={handleSubmit}>
            <h2 style={{fontSize: '28px', marginBottom: '32px'}}>Ödeme Bilgileri</h2>
            

            
            <div className="checkout-card">
              <h3 style={{fontSize: '18px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <i className="ph-fill ph-credit-card" style={{color: 'var(--accent)'}}></i> Kart Bilgileri
              </h3>
              
              {/* Animated Card */}
              <div className="card-perspective">
                <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                  <div className="card-front">
                    <div className="card-chip"></div>
                    <div className="card-number-display">
                      {cardNumber || '•••• •••• •••• ••••'}
                    </div>
                    <div className="card-details-display">
                      <div className="card-detail-col">
                        <span className="card-detail-label">Kart Sahibi</span>
                        <span className="card-detail-value">{cardName || 'İSİM SOYİSİM'}</span>
                      </div>
                      <div className="card-detail-col">
                        <span className="card-detail-label">Son Kullanma</span>
                        <span className="card-detail-value">{cardExpiry || 'AA/YY'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="card-strip"></div>
                    <div className="card-cvv-box">{cardCvv || '•••'}</div>
                    <p style={{fontSize: '10px', color: 'var(--text2)', padding: '0 30px', textAlign: 'right'}}>CVV</p>
                  </div>
                </div>
              </div>
              
              <div className="form-group" style={{marginBottom: '16px'}}>
                <label>Kart Üzerindeki İsim</label>
                <input 
                  type="text" 
                  className="sporty-input" 
                  style={{width:'100%', boxSizing:'border-box'}} 
                  placeholder="İSİM SOYİSİM" 
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  onFocus={() => setIsFlipped(false)}
                  required 
                />
              </div>
              
              <div className="form-group" style={{marginBottom: '16px'}}>
                <label>Kart Numarası</label>
                <input 
                  type="text" 
                  className="sporty-input" 
                  style={{width:'100%', boxSizing:'border-box'}} 
                  placeholder="0000 0000 0000 0000" 
                  maxLength={19}
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  onFocus={() => setIsFlipped(false)}
                  required 
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Son Kullanma (AA/YY)</label>
                  <input 
                    type="text" 
                    className="sporty-input" 
                    style={{width:'100%', boxSizing:'border-box'}} 
                    placeholder="12/26" 
                    maxLength={5}
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                    onFocus={() => setIsFlipped(false)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input 
                    type="text" 
                    className="sporty-input" 
                    style={{width:'100%', boxSizing:'border-box'}} 
                    placeholder="123" 
                    maxLength={3}
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value.replace(/[^0-9]/g, ''))}
                    onFocus={() => setIsFlipped(true)}
                    onBlur={() => setIsFlipped(false)}
                    required 
                  />
                </div>
              </div>
            </div>
            
          </form>
          
          {/* Right: Summary */}
          <div>
            <div className="checkout-card" style={{position: 'sticky', top: '120px'}}>
              <h3 style={{fontSize: '18px', marginBottom: '24px'}}>Sipariş Özeti</h3>
              
              <div style={{display: 'flex', gap: '16px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                <img src="/assets/images/devices/GREG.png" alt="Preditech Seçim" style={{width: '80px', height: '80px', objectFit: 'contain'}} />
                <div>
                  <h4 style={{fontSize: '16px', marginBottom: '4px'}}>Preditech</h4>
                  <p style={{fontSize: '12px', color: 'var(--text2)'}}>Erken Erişim Sürümü</p>
                </div>
              </div>
              
              <div className="summary-item">
                <span>Ara Toplam</span>
                <strong>Hesaplanıyor...</strong>
              </div>
              <div className="summary-item">
                <span>Kargo Ücreti</span>
                <strong style={{color: '#22c55e'}}>Ücretsiz</strong>
              </div>
              <div className="summary-item">
                <span>Vergiler (KDV)</span>
                <strong>Dahil</strong>
              </div>
              
              <div style={{display: 'flex', justifyContent: 'space-between', margin: '24px 0', paddingTop: '24px', borderTop: '1px dashed rgba(255,255,255,0.1)', fontSize: '18px', fontWeight: 700}}>
                <span>Genel Toplam</span>
                <span style={{color: 'var(--accent)', fontFamily: 'monospace', fontSize: '24px'}}>Güvenli Ödeme</span>
              </div>
              
              <button onClick={handleSubmit} type="button" className="btn btn-primary sporty-btn" style={{width: '100%', justifyContent: 'center', background: 'var(--accent)', color: '#000', fontWeight: 800, padding: '20px', fontSize: '16px'}}>
                GÜVENLİ ÖDEME YAP
              </button>
              <p style={{textAlign: 'center', marginTop: '16px', fontSize: '12px', color: 'var(--text2)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'}}>
                <i className="ph-fill ph-lock-key"></i> 256-bit SSL ile güvendesiniz.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
