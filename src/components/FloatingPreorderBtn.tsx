'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FloatingPreorderBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [anchorTop, setAnchorTop] = useState(0);
  const pathname = usePathname();
  const isDevicePage = pathname === '/go' || pathname === '/pro' || pathname === '/gt' || pathname === '/titan' || pathname === '/haul' || pathname === '/watchdog' || pathname === '/xper';

  useEffect(() => {
    if (!isDevicePage) return;
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const calculatePosition = () => {
      const badge = document.querySelector('.hero-price-badge');
      if (badge) {
        const badgeRect = badge.getBoundingClientRect();
        const absoluteBadgeBottom = badgeRect.bottom + window.scrollY;
        
        setAnchorTop(absoluteBadgeBottom + 24); 
        
        if (window.scrollY > 150) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      } else {
        setIsFixed(window.scrollY > 150);
      }
    };
    
    window.addEventListener('scroll', calculatePosition);
    window.addEventListener('resize', calculatePosition);
    
    const interval = setInterval(calculatePosition, 300);
    setTimeout(() => {
      clearInterval(interval);
      calculatePosition();
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener('scroll', calculatePosition);
      window.removeEventListener('resize', calculatePosition);
    };
  }, [isDevicePage, pathname]);

  if (!isDevicePage) return null;

  let btnHref = '/erken-erisim';
  if (pathname === '/titan') btnHref = '/kurumsal-satis?device=titan';
  if (pathname === '/haul') btnHref = '/kurumsal-satis?device=haul';
  if (pathname === '/watchdog') btnHref = '/kurumsal-satis?device=watchdog';
  if (pathname === '/xper') btnHref = '/kurumsal-satis?device=xper';

  return (
    <>
      {/* STATIC BUTTON UNDER THE BADGE */}
      <div style={{
        position: 'absolute',
        top: `${anchorTop}px`,
        left: '0',
        width: '100%',
        transition: 'opacity 0.4s ease-in-out',
        opacity: isVisible && !isFixed && anchorTop > 0 ? 1 : 0,
        pointerEvents: isVisible && !isFixed ? 'auto' : 'none',
        zIndex: 998,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Link href={btnHref} className="floating-preorder-btn">
          <div className="btn-glow"></div>
          <i className="ph-fill ph-rocket-launch"></i> 
          <span>Ön Siparişle Destek Ol</span>
        </Link>
      </div>

      {/* FIXED BUTTON AT THE BOTTOM */}
      <div style={{
        position: 'fixed',
        bottom: '40px',
        left: '0',
        width: '100%',
        transform: isFixed ? 'translateY(0)' : 'translateY(80px)',
        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isFixed ? 1 : 0,
        pointerEvents: isFixed ? 'auto' : 'none',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Link href={btnHref} className="floating-preorder-btn">
          <div className="btn-glow"></div>
          <i className="ph-fill ph-rocket-launch"></i> 
          <span>Ön Siparişle Destek Ol</span>
        </Link>
      </div>
    </>
  );
}
