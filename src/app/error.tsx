'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg)',
      color: 'var(--text)',
      padding: '20px',
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '500px',
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px', color: 'var(--danger)' }}>⚠️</h1>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Bir hata oluştu</h2>
        <p style={{ color: 'var(--text2)', marginBottom: '24px' }}>
          Beklenmeyen bir hata meydana geldi. Lütfen tekrar deneyin.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button
            onClick={reset}
            style={{
              padding: '12px 24px',
              background: 'var(--accent)',
              color: '#000',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Tekrar Dene
          </button>
          <Link
            href="/"
            style={{
              padding: '12px 24px',
              background: 'transparent',
              color: 'var(--text)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Ana Sayfa
          </Link>
        </div>
      </div>
    </div>
  );
}