'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [errorVisible, setErrorVisible] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorVisible(false);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .auth-container { max-width: 400px; margin: 120px auto 80px; padding: 40px; background: var(--card); border: 1px solid var(--border); border-radius: 24px; text-align: center; }
        .auth-logo { width: 48px; margin-bottom: 24px; }
        .social-btn { display: flex; align-items: center; justify-content: center; gap: 12px; width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--border); background: rgba(255,255,255,0.02); color: #fff; cursor: pointer; transition: all 0.3s ease; margin-bottom: 12px; font-weight: 600; text-decoration: none; }
        .social-btn:hover { background: rgba(255,255,255,0.05); transform: translateY(-2px); }
        .divider { display: flex; align-items: center; text-align: center; color: var(--text2); margin: 24px 0; font-size: 12px; }
        .divider::before, .divider::after { content: ''; flex: 1; border-bottom: 1px solid var(--border); }
        .divider:not(:empty)::before { margin-right: 1em; }
        .divider:not(:empty)::after { margin-left: 1em; }
      `}} />

      <div className="container">
        <div className="auth-container reveal">
          <img src="/assets/images/general/preditechlogo.png" alt="Preditech Emblem" className="auth-logo" style={{ width: '140px' }} />
          <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Kayıt Ol</h2>
          <p style={{ color: 'var(--text2)', fontSize: '14px', marginBottom: '32px' }}>Preditech ailesine katılın</p>

          <a href="#" className="social-btn">
            <svg viewBox="0 0 48 48" width="20px" height="20px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
            Google ile Giriş Yap
          </a>
          <a href="#" className="social-btn">
            <i className="ph-fill ph-apple-logo" style={{ fontSize: '20px', color: '#fff' }}></i>
            Apple ile Giriş Yap
          </a>
          <a href="#" className="social-btn">
            <svg viewBox="0 0 512 512" width="20px" height="20px"><path fill="#1877F2" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            Facebook ile Giriş Yap
          </a>

          <div className="divider">veya</div>

          <form style={{ textAlign: 'left' }} onSubmit={handleRegister}>
            <div className="form-group" style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: 'var(--text2)' }}>Ad Soyad</label>
              <input type="text" className="sporty-input" style={{ width: '100%', boxSizing: 'border-box' }} placeholder="Noyan S." required />
            </div>
            <div className="form-group" style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: 'var(--text2)' }}>E-posta</label>
              <input type="email" className="sporty-input" style={{ width: '100%', boxSizing: 'border-box' }} placeholder="ornek@email.com" required />
            </div>
            <div className="form-group" style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: 'var(--text2)' }}>Şifre</label>
              <input type="password" className="sporty-input" style={{ width: '100%', boxSizing: 'border-box' }} placeholder="••••••••" required />
            </div>
            <div className="form-group" style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" id="terms" required style={{ accentColor: 'var(--accent)' }} />
              <label htmlFor="terms" style={{ fontSize: '11px', color: 'var(--text2)' }}>Kullanım koşullarını okudum ve kabul ediyorum.</label>
            </div>
            <p style={{ color: 'var(--danger)', fontSize: '12px', marginBottom: '12px', display: errorVisible ? 'block' : 'none' }}>Hata oluştu.</p>
            <button type="submit" className="btn btn-primary sporty-btn" style={{ width: '100%', justifyContent: 'center', background: 'var(--accent)', color: '#000', fontWeight: 800 }}>KAYIT OL</button>
          </form>

          <p style={{ marginTop: '24px', fontSize: '13px', color: 'var(--text2)' }}>
            Zaten hesabınız var mı? <Link href="/login" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Giriş Yap</Link>
          </p>
        </div>
      </div>
    </>
  );
}
