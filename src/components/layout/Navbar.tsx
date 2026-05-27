'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [authState, setAuthState] = useState<string | null>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);
  const pillRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auth state
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthState(localStorage.getItem('preditech_isLoggedIn'));
    }
  }, []);

  // Mobile menu toggle
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  }, []);

  // Close mobile menu on link click
  const closeMenu = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  // Sliding pill
  useEffect(() => {
    const navLinks = navLinksRef.current;
    if (!navLinks || typeof window === 'undefined') return;

    // Create pill
    let pill = navLinks.querySelector('.nav-active-pill') as HTMLDivElement;
    if (!pill) {
      pill = document.createElement('div');
      pill.className = 'nav-active-pill';
      navLinks.appendChild(pill);
    }
    pillRef.current = pill;

    const items = navLinks.querySelectorAll(':scope > li > a');
    let activeItem: HTMLElement | null = null;

    items.forEach(item => {
      const el = item as HTMLElement;
      const href = el.getAttribute('href') || '';
      const isActive = pathname === href || 
        (pathname !== '/' && href !== '/' && pathname.startsWith(href));
      if (isActive) {
        activeItem = el;
        el.classList.add('active');
        if (el.parentElement) el.parentElement.classList.add('active');
      }
    });

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      const parentRect = navLinks.getBoundingClientRect();
      pill.style.width = `${rect.width}px`;
      pill.style.left = `${rect.left - parentRect.left}px`;
      pill.style.opacity = '1';
      items.forEach(link => (link as HTMLElement).style.color = '');
      target.style.color = '#000';
    };

    const handleMouseLeave = () => {
      if (activeItem) {
        const rect = (activeItem as HTMLElement).getBoundingClientRect();
        const parentRect = navLinks.getBoundingClientRect();
        pill.style.width = `${rect.width}px`;
        pill.style.left = `${rect.left - parentRect.left}px`;
        pill.style.opacity = '1';
        items.forEach(link => (link as HTMLElement).style.color = '');
        (activeItem as HTMLElement).style.color = '#000';
      } else {
        pill.style.opacity = '0';
        items.forEach(link => (link as HTMLElement).style.color = '');
      }
    };

    items.forEach(item => {
      item.addEventListener('mouseenter', handleMouseEnter);
    });
    navLinks.addEventListener('mouseleave', handleMouseLeave);

    // Initialize pill position
    if (activeItem) {
      setTimeout(() => {
        const rect = (activeItem as HTMLElement).getBoundingClientRect();
        const parentRect = navLinks.getBoundingClientRect();
        pill.style.width = `${rect.width}px`;
        pill.style.left = `${rect.left - parentRect.left}px`;
        pill.style.opacity = '1';
        (activeItem as HTMLElement).style.color = '#000';
      }, 100);
    }

    return () => {
      items.forEach(item => {
        item.removeEventListener('mouseenter', handleMouseEnter);
      });
      navLinks.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pathname]);

  // Mobile dropdown accordion
  const handleDropdownClick = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      e.preventDefault();
      const dropdown = (e.currentTarget as HTMLElement).closest('.dropdown');
      if (dropdown) dropdown.classList.toggle('active');
    }
  };

  // Render auth container
  const renderAuth = () => {
    if (authState === 'filo') {
      return (
        <div className="nav-profile" style={{display:'flex',alignItems:'center',gap:'12px',borderLeft:'1px solid rgba(255,255,255,0.1)',paddingLeft:'16px',cursor:'pointer'}} onClick={() => window.location.href='/filo-profil'}>
          <div style={{textAlign:'right',display:'flex',flexDirection:'column'}} className="profile-text">
            <span style={{fontSize:'13px',fontWeight:700,color:'#fff',lineHeight:1.2}}>Ahmet Y.</span>
            <span style={{fontSize:'10px',fontWeight:800,color:'var(--accent)',letterSpacing:'0.5px'}}>FİLO YÖNETİCİSİ</span>
          </div>
          <div style={{width:'36px',height:'36px',minWidth:'36px',borderRadius:'50%',background:'#222',border:'2px solid var(--accent)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <i className="ph-fill ph-user" style={{color:'var(--accent)',fontSize:'20px'}}></i>
          </div>
        </div>
      );
    } else if (authState === 'true') {
      return (
        <div className="nav-profile" style={{display:'flex',alignItems:'center',gap:'12px',borderLeft:'1px solid rgba(255,255,255,0.1)',paddingLeft:'16px',cursor:'pointer'}} onClick={() => window.location.href='/profil'}>
          <div style={{textAlign:'right',display:'flex',flexDirection:'column'}} className="profile-text">
            <span style={{fontSize:'13px',fontWeight:700,color:'#fff',lineHeight:1.2}}>Noyan S.</span>
            <span style={{fontSize:'10px',fontWeight:800,color:'var(--accent)',letterSpacing:'0.5px'}}>PRO ÜYE</span>
          </div>
          <div style={{width:'36px',height:'36px',minWidth:'36px',borderRadius:'50%',background:'#222',border:'2px solid var(--accent)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <i className="ph-fill ph-user" style={{color:'var(--accent)',fontSize:'20px'}}></i>
          </div>
        </div>
      );
    } else {
      return (
        <Link href="/login" className="btn btn-primary nav-cta" style={{padding:'8px 16px',fontSize:'13px'}}>Giriş Yap</Link>
      );
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="logo">
          <img src="/assets/images/general/preditechlogo.png" alt="Preditech" style={{height:'22px',objectFit:'contain'}} />
        </Link>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} ref={navLinksRef}>
          <li className="dropdown">
            <a href="#" className="nav-cihazlar" onClick={handleDropdownClick}>Cihazlar <i className="ph ph-caret-down"></i></a>
            <ul className="dropdown-menu mega-menu">
              <div className="mega-col">
                <h4>Bireysel Kullanıcılar</h4>
                <li><Link href="/go" onClick={closeMenu}>Preditech GO</Link></li>
                <li><Link href="/pro" onClick={closeMenu}>Preditech PRO</Link></li>
                <li><Link href="/gt" onClick={closeMenu}>Preditech GT</Link></li>
              </div>
              <div className="mega-col">
                <h4>Kurumsal Kullanıcılar</h4>
                <li><Link href="/watchdog" onClick={closeMenu}>Watchdog (Filo)</Link></li>
                <li><Link href="/titan" onClick={closeMenu}>Titan (Tır)</Link></li>
                <li><Link href="/haul" onClick={closeMenu}>Haul (İş Makinesi)</Link></li>
                <li><Link href="/doc" onClick={closeMenu}>Doc</Link></li>
                <li><Link href="/ekspertiz" onClick={closeMenu}>Xper (Ekspertiz)</Link></li>
              </div>
              <div className="mega-col">
                <h4>Yardımcı Cihazlar</h4>
                <li><Link href="/sentinel" onClick={closeMenu}>Sentinel</Link></li>
                <li><Link href="/racebox" onClick={closeMenu}>Racebox</Link></li>
                <li><Link href="/cursor" onClick={closeMenu}>Cursor</Link></li>
                <li><Link href="/gate" onClick={closeMenu}>Gate</Link></li>
                <li><Link href="/signal" onClick={closeMenu}>Signal</Link></li>
              </div>
            </ul>
          </li>
          <li><Link href="/cozumler" className="nav-cozumler" onClick={closeMenu}>Çözümler</Link></li>
          <li className="dropdown">
            <a href="#" className="nav-teknoloji" onClick={handleDropdownClick}>Teknoloji <i className="ph ph-caret-down"></i></a>
            <ul className="dropdown-menu">
              <li><Link href="/teknoloji" onClick={closeMenu}>Hibrit Veri Füzyonu</Link></li>
              <li><Link href="/app" onClick={closeMenu}>Predicto AI &amp; App</Link></li>
            </ul>
          </li>
          <li><Link href="/haberler" className="nav-haberler" onClick={closeMenu}>Haberler</Link></li>
          <li><Link href="/destek" className="nav-destek" onClick={closeMenu}>Destek</Link></li>
          <li><Link href="/iletisim" className="nav-hakkimizda" onClick={closeMenu}>Hakkımızda</Link></li>
        </ul>
        <div style={{display:'flex',alignItems:'center',gap:'16px'}} id="nav-auth-container">
          {renderAuth()}
          <button className="mobile-menu-btn" aria-label="Menü" onClick={toggleMenu}>
            {isOpen ? '✕' : <i className="ph ph-list" style={{fontSize:'24px'}}></i>}
          </button>
        </div>
      </div>
    </nav>
  );
}
