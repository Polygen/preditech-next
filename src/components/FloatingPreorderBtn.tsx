'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const DEVICE_PATHS = [
  '/go', '/pro', '/gt', 
  '/watchdog', '/titan', '/haul', '/doc', '/ekspertiz',
  '/sentinel', '/racebox', '/cursor', '/gate', '/signal'
];

export default function FloatingPreorderBtn() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const isDevicePage = DEVICE_PATHS.some(p => pathname === p || pathname?.startsWith(p + '/'));

  useEffect(() => {
    // Show button with a slight delay to allow animations to finish
    if (isDevicePage) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isDevicePage, pathname]);

  if (!isDevicePage) return null;

  return (
    <Link href="/erken-erisim" className={`floating-preorder-btn ${isVisible ? 'visible' : ''}`}>
      <div className="btn-glow"></div>
      <i className="ph-fill ph-rocket-launch"></i> 
      <span>Ön Siparişle Destek Ol</span>
    </Link>
  );
}
