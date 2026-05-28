'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [, setMessageCount] = useState(0);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLInputElement>(null);
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);
  const heroWrapperRef = useRef<HTMLDivElement>(null);

  // Generate particles
  useEffect(() => {
    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer && particlesContainer.children.length === 0) {
      for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDuration = (8 + Math.random() * 12) + 's';
        p.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(p);
      }
    }
  }, []);

  // Hero parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const heroVisual = document.querySelector('.hero-visual') as HTMLElement;
      if (heroVisual && window.innerWidth > 768) {
        heroVisual.style.transform = `translateY(${window.scrollY * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero hover interaction
  useEffect(() => {
    const heroHeading = heroHeadingRef.current;
    const heroSub = heroSubRef.current;
    const wrapper = heroWrapperRef.current;
    const interactives = document.querySelectorAll('.hero-interactive');

    if (!heroHeading || !heroSub) return;

    const defaultTitle = heroHeading.innerHTML;
    const defaultSub = heroSub.innerHTML;

    const updateTextWithAnimation = (newTitle: string, newSub: string) => {
      if (!wrapper) {
        heroHeading.innerHTML = newTitle;
        heroSub.innerHTML = newSub;
        return;
      }
      const startHeight = wrapper.offsetHeight;
      wrapper.style.height = startHeight + 'px';
      heroHeading.style.opacity = '0';
      heroSub.style.opacity = '0';

      setTimeout(() => {
        heroHeading.innerHTML = newTitle;
        heroSub.innerHTML = newSub;
        wrapper.style.height = 'auto';
        const endHeight = wrapper.offsetHeight;
        wrapper.style.height = startHeight + 'px';
        void wrapper.offsetHeight; // force reflow
        wrapper.style.height = endHeight + 'px';
        heroHeading.style.opacity = '1';
        heroSub.style.opacity = '1';
      }, 150);
    };

    const handleEnter = (el: Element) => {
      const htmlEl = el as HTMLElement;
      if (htmlEl.dataset.title) {
        updateTextWithAnimation(htmlEl.dataset.title, htmlEl.dataset.desc || '');
      }
    };
    const handleLeave = () => {
      updateTextWithAnimation(defaultTitle, defaultSub);
    };

    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => handleEnter(el));
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', () => handleEnter(el));
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  // Pipeline scroll progress
  useEffect(() => {
    const section = document.getElementById('nasil-calisir');
    const pipeline = document.querySelector('.pipeline-container');
    if (!section || !pipeline) return;

    const progress = pipeline.querySelector('.pipeline-progress') as HTMLElement;
    const dot = pipeline.querySelector('.pipeline-dot') as HTMLElement;
    const cards = pipeline.querySelectorAll('.step-card');

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      let percentage = 0;
      if (rect.top <= 0) {
        const totalScroll = rect.height - windowHeight;
        const currentScroll = -rect.top;
        percentage = Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100));
      }
      if (rect.bottom < windowHeight) percentage = 100;

      if (progress) progress.style.width = percentage + '%';
      if (dot) dot.style.left = percentage + '%';

      cards.forEach((card, index) => {
        const threshold = (index / (cards.length - 1)) * 100;
        if (percentage >= threshold - 10) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Predicto AI scroll interaction + chatbot
  useEffect(() => {
    const simulator = document.getElementById('simulator');
    const chatBody = chatBodyRef.current;
    if (!simulator || !chatBody) return;

    let triggered = false;

    const appendBotMessageAuto = (html: string) => {
      const msg = document.createElement('div');
      msg.className = 'chat-msg bot-msg';
      msg.style.cssText = 'align-self: flex-start; max-width: 85%; background: #1a1a1a; padding: 12px 16px; border-radius: 12px 12px 12px 0; color: #fff; font-size: 14px; line-height: 1.5; border: 1px solid rgba(255,255,255,0.05); opacity: 0; transform: translateY(10px); transition: all 0.3s ease; margin-bottom: 8px;';
      msg.innerHTML = html;
      chatBody.appendChild(msg);
      setTimeout(() => {
        msg.style.opacity = '1';
        msg.style.transform = 'translateY(0)';
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 50);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          setTimeout(() => {
            appendBotMessageAuto('Araban hakkında veya almak istediğin araba hakkında sorular sorabilirsin, piyasaya hakimim.');
          }, 1000);
          setTimeout(() => {
            appendBotMessageAuto('Doğrudan senin arabanın verilerini 7/24 inceleyerek çalışmak için sabırsızlanıyorum.');
          }, 4000);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(simulator);
    return () => observer.disconnect();
  }, []);

  // Chat interaction handler
  const appendUserMessage = (text: string) => {
    const chatBody = chatBodyRef.current;
    if (!chatBody) return;
    const msg = document.createElement('div');
    msg.className = 'chat-msg user-msg';
    msg.style.cssText = 'align-self: flex-end; max-width: 85%; background: var(--accent); padding: 12px 16px; border-radius: 12px 12px 0 12px; color: #000; font-size: 14px; line-height: 1.5; font-weight: 500;';
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const appendBotMessage = (html: string) => {
    const chatBody = chatBodyRef.current;
    if (!chatBody) return;
    const msg = document.createElement('div');
    msg.className = 'chat-msg bot-msg';
    msg.style.cssText = 'align-self: flex-start; max-width: 85%; background: #1a1a1a; padding: 12px 16px; border-radius: 12px 12px 12px 0; color: #fff; font-size: 14px; line-height: 1.5; border: 1px solid rgba(255,255,255,0.05);';
    msg.innerHTML = html;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const handleSend = () => {
    const chatInput = chatInputRef.current;
    if (!chatInput) return;
    const val = chatInput.value.trim();
    if (!val) return;

    appendUserMessage(val);
    chatInput.value = '';

    setMessageCount(prev => {
      const count = prev;
      setTimeout(() => {
        if (count === 0) {
          appendBotMessage('Bu araç profilinde kronik <b>DPF tıkanması</b> ve <b>DSG kavraması</b> aşınması riskleri tespit ettim. 120.000 km sonrasında bu arızaların yaşanma ihtimali <b>%78</b> oranındadır.');
        } else if (count === 1) {
          appendBotMessage('Detaylı risk haritasını görmek ve aracınızı koruma altına almak için uygulamamıza geçin.<br/><br/><a href="/app" style="display:inline-block;background:var(--accent);color:#000;padding:8px 16px;border-radius:20px;text-decoration:none;font-weight:700;margin-top:8px;">Uygulamaya Geç</a>');
        } else {
          appendBotMessage('Daha detaylı analiz için Predicto AI uygulamasını indirmelisiniz.');
        }
      }, 1000);
      return prev + 1;
    });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .phone-deck {
          position: absolute; right: 0px; top: 0px; width: 320px; height: 650px; z-index: 1;
          cursor: pointer;
        }
        .phone-deck img {
          position: absolute; width: 320px; border-radius: 20px;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.8));
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .phone-deck .phone-1 { transform: translateX(0) translateY(0) rotate(0deg); z-index: 3; }
        .phone-deck .phone-2 { transform: translateX(-30px) translateY(20px) rotate(-5deg); z-index: 2; opacity: 0.6; }
        .phone-deck .phone-3 { transform: translateX(-60px) translateY(40px) rotate(-10deg); z-index: 1; opacity: 0.3; }
        .phone-deck:hover .phone-1 { transform: translateX(50px) translateY(-20px) rotate(5deg) scale(1.05); z-index: 10; opacity: 1; filter: drop-shadow(0 30px 60px rgba(249, 212, 35, 0.4)); }
        .phone-deck:hover .phone-2 { transform: translateX(-60px) translateY(10px) rotate(-5deg) scale(1.05); z-index: 9; opacity: 1; filter: drop-shadow(0 30px 60px rgba(0, 255, 136, 0.4)); }
        .phone-deck:hover .phone-3 { transform: translateX(-170px) translateY(40px) rotate(-15deg) scale(1.05); z-index: 8; opacity: 1; filter: drop-shadow(0 30px 60px rgba(255, 68, 68, 0.4)); }
        .device-deck {
          position: absolute; left: -30px; bottom: -20px; width: 480px; height: 300px; z-index: 2;
          cursor: pointer;
        }
        .device-deck img {
          position: absolute; width: 480px;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.8));
          transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .device-deck .dev-gt { z-index: 5; width: 300px; bottom: 0; left: 90px; transform: translateY(0); opacity: 1; }
        .device-deck .dev-pro { z-index: 4; width: 480px; bottom: 30px; left: 0px; opacity: 0; pointer-events: none; }
        .device-deck .dev-go { z-index: 3; width: 480px; bottom: 30px; left: 0px; opacity: 0; pointer-events: none; }
        .device-deck:hover .dev-gt { transform: scale(1.1) translateY(-10px); z-index: 10; filter: drop-shadow(0 30px 60px rgba(255, 68, 68, 0.5)); }
        .device-deck:hover .dev-pro { transform: translateX(-200px); opacity: 1; filter: drop-shadow(0 20px 40px rgba(0, 255, 136, 0.3)); pointer-events: auto; }
        .device-deck:hover .dev-go { transform: translateX(200px); opacity: 1; filter: drop-shadow(0 20px 40px rgba(249, 212, 35, 0.3)); pointer-events: auto; }
        @media(max-width: 768px) {
          .mobile-only-devices { display: flex !important; }
        }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 48px; }
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
          .nav-active-pill { display: none !important; }
          .timeline-content { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .timeline-cost { width: 100% !important; margin-top: 12px !important; }
          .device-deck { transform: scale(0.7); left: -15%; }
        }
      `}} />

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="particles"></div>
        <div className="grid-overlay"></div>
        <div className="light-streak"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              {/* MOBILE ONLY DEVICES */}
              <div className="mobile-only-devices" style={{marginBottom:'24px',display:'none',alignItems:'flex-end',justifyContent:'center',gap:'0px'}}>
                <img src="/assets/images/devices/FB.png" alt="Preditech GO" style={{height:'210px',objectFit:'contain',marginRight:'-130px',zIndex:1,position:'relative',marginBottom:'5px'}} />
                <img src="/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" alt="Preditech GT" style={{height:'260px',objectFit:'contain',zIndex:2,position:'relative',filter:'drop-shadow(0px 0px 40px rgba(0,0,0,1)) drop-shadow(0px 0px 20px rgba(0,0,0,0.8))'}} />
                <img src="/assets/images/devices/GREG.png" alt="Preditech PRO" style={{height:'210px',objectFit:'contain',marginLeft:'-130px',zIndex:1,position:'relative',marginBottom:'5px'}} />
              </div>

              <div ref={heroWrapperRef} id="hero-text-wrapper" style={{minHeight:'260px',transition:'height 0.4s ease-in-out',display:'flex',flexDirection:'column',justifyContent:'center',paddingBottom:'24px',overflow:'hidden'}}>
                <h1 ref={heroHeadingRef} id="hero-heading" style={{transition:'all 0.4s ease-in-out',marginBottom:'16px'}}>Arızayı Beklemeyin,<br/><span>Öngörün.</span></h1>
                <p ref={heroSubRef} className="hero-sub" style={{transition:'all 0.4s ease-in-out',marginBottom:0}}>Diğer cihazlar sadece aracın arıza kodlarını okur. Preditech ise aracın kendi sistemlerinin bile göremediği riskleri önceden tespit eder.</p>
              </div>
              <div className="hero-ctas">
                <Link href="/erken-erisim" className="btn btn-primary">Erken Erişim Ön Sipariş</Link>
                <Link href="/bekleme-listesi" className="btn btn-ghost">Ücretsiz Bekleme Listesine Katıl</Link>
              </div>
            </div>
            <div className="hero-visual">
              <div style={{position:'relative',display:'flex',alignItems:'center',justifyContent:'center',height:'600px',width:'100%'}}>
                <div className="device-deck">
                  <img src="/assets/images/devices/FB.png" alt="Preditech GO" className="dev-go hero-interactive" onClick={() => router.push('/go')} data-title="Maliyeti Düşürün, Kontrolü Artırın." data-desc="GO ile standart bir sürüşü akıllı ve tasarruflu bir deneyime dönüştürün." />
                  <img src="/assets/images/devices/GREG.png" alt="Preditech PRO" className="dev-pro hero-interactive" onClick={() => router.push('/pro')} data-title="Geleceği Bugünden Yakalayın." data-desc="PRO ile profesyonel seviyede araç analitiği ve detaylı performans verileri elinizin altında." />
                  <img src="/assets/images/devices/Gemini_Generated_Image_2158ap2158ap2158 2.png" alt="Preditech GT" className="dev-gt hero-interactive" onClick={() => router.push('/gt')} data-title="Pistlerin Yeni Hakimi." data-desc="Saniyenin onda biri fark yaratır. GT ile sınırları zorlayın ve aracınızın maksimum potansiyeline ulaşın." />
                </div>
                <div className="phone-deck">
                  <img src="/assets/images/app/ana ekran.png" alt="Preditech App - Ana Ekran" className="phone-1 hero-interactive" onClick={() => router.push('/app')} data-title="Predicto AI Cebinizde." data-desc="Yapay zeka asistanı Predicto ile tüm veriler elinizin altında." />
                  <img src="/assets/images/app/pist yaris oncesi.png" alt="Preditech App - Pist" className="phone-2 hero-interactive" onClick={() => router.push('/app')} data-title="Predicto AI Cebinizde." data-desc="Yapay zeka asistanı Predicto ile tüm veriler elinizin altında." />
                  <img src="/assets/images/app/harita.png" alt="Preditech App - Harita" className="phone-3 hero-interactive" onClick={() => router.push('/app')} data-title="Predicto AI Cebinizde." data-desc="Yapay zeka asistanı Predicto ile tüm veriler elinizin altında." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <div className="social-proof">
        <div className="marquee">
          {[...Array(4)].map((_, i) => (
            <span key={`a${i}`}><em className="check">✓</em> 30 Farklı Markada Test Edildi</span>
          )).concat([...Array(4)].map((_, i) => (
            <span key={`b${i}`}><em className="check">✓</em> 47.943 Araç Modeli Veri Tabanı</span>
          ))).concat([...Array(4)].map((_, i) => (
            <span key={`c${i}`}><em className="check">✓</em> 13.433 Araç Verisiyle Eğitilmiş Yapay Zeka</span>
          ))).concat([...Array(4)].map((_, i) => (
            <span key={`d${i}`}><em className="check">✓</em> Türkiye&apos;de Geliştirilen Özel Donanım</span>
          )))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="section" id="nasil-calisir">
        <div className="pin-wrap">
          <div className="container">
            <div className="section-label reveal">NASIL ÇALIŞIR?</div>
            <h2 className="reveal">Preditech Sadece Okumaz,<br/><span>Hisseder.</span></h2>
            <p className="subtitle reveal">Sektörde Tek: OBD + IMU Hibrit Veri Füzyonu. Aşağı kaydırdıkça verilerin nasıl işlendiğini görün.</p>

            <div className="pipeline-container">
              <div className="pipeline-track"><div className="pipeline-progress"></div><div className="pipeline-dot"></div></div>
              <div className="steps-grid">
                <div className="step-card sporty-card">
                  <div className="step-icon" style={{background:'transparent',border:'none',borderBottom:'1px solid rgba(255,255,255,0.1)',borderRadius:0,marginBottom:'16px',paddingBottom:'16px'}}>
                    <div className="anim-layer"><div className="obd-codes"><span>P0301</span><span>U0100</span><span>B1000</span></div></div>
                  </div>
                  <h3 style={{fontSize:'18px'}}>1. OBD II Katmanı</h3>
                  <p>Aracın elektronik beyninden standart hata kodlarını çeker.</p>
                  <div className="step-tags"><span>CAN BUS</span></div>
                </div>

                <div className="step-card sporty-card">
                  <div className="step-icon" style={{background:'transparent',border:'none',borderBottom:'1px solid rgba(255,255,255,0.1)',borderRadius:0,marginBottom:'16px',paddingBottom:'16px'}}>
                    <div className="anim-layer"><div className="imu-wave"><svg><path d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10 T125,10 T150,10"></path></svg></div></div>
                  </div>
                  <h3 style={{fontSize:'18px'}}>2. Titreşim (IMU)</h3>
                  <p>Mekanik arıza başlangıçlarını 100Hz NVH sensörü ile hisseder.</p>
                  <div className="step-tags"><span>6 EKSEN</span></div>
                </div>

                <div className="step-card sporty-card">
                  <div className="step-icon" style={{background:'transparent',border:'none',borderBottom:'1px solid rgba(255,255,255,0.1)',borderRadius:0,marginBottom:'16px',paddingBottom:'16px'}}>
                    <div className="anim-layer"><div className="ai-nodes"><div className="ai-node"></div><div className="ai-node"></div><div className="ai-node"></div><div className="ai-node"></div><div className="ai-node"></div><div className="ai-node"></div></div></div>
                  </div>
                  <h3 style={{fontSize:'18px'}}>3. Predicto AI Füzyonu</h3>
                  <p>Fiziksel ve elektronik verileri yapay zeka ile çapraz analiz eder.</p>
                  <div className="step-tags"><span>NVH FÜZYONU</span></div>
                </div>

                <div className="step-card sporty-card">
                  <div className="step-icon" style={{background:'transparent',border:'none',borderBottom:'1px solid rgba(255,255,255,0.1)',borderRadius:0,marginBottom:'16px',paddingBottom:'16px'}}>
                    <div className="anim-layer"><div className="report-doc"></div></div>
                  </div>
                  <h3 style={{fontSize:'18px'}}>4. Proaktif Rapor</h3>
                  <p>Arıza tam olarak oluşmadan haftalar önce maliyet tahmini sunar.</p>
                  <div className="step-tags"><span>PROAKTİF UYARI</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREDICTO AI SIMULATOR */}
      <section className="section" id="simulator" style={{background:'var(--bg)',height:'200vh',padding:0}}>
        <div style={{position:'sticky',top:0,height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
          <div className="container" style={{width:'100%'}}>
            <div style={{display:'flex',flexWrap:'wrap',gap:'60px',alignItems:'center'}}>
              <div style={{flex:1,minWidth:'300px'}} className="reveal">
                <div className="section-label" style={{marginBottom:'16px'}}>PREDICTO AI</div>
                <h2 id="predicto-main-text" style={{transition:'opacity 0.4s ease'}}>Predicto AI ile aracınızın gizli dilini<br/><span>Çözün.</span></h2>
                <p className="subtitle" id="predicto-sub-text" style={{marginTop:'24px',transition:'opacity 0.4s ease'}}>Arabanızın verilerini 7/24 gerçek zamanlı inceleyip oluşabilecek maliyetleri önceden tahmin eder.</p>
              </div>

              <div style={{flex:1.2,minWidth:'350px'}} className="reveal">
                <div className="simulator-card" style={{padding:'20px',display:'flex',flexDirection:'column',gap:'16px',background:'#0a0a0a',border:'1px solid rgba(255,255,255,0.05)',borderRadius:'24px',height:'450px',position:'relative',boxShadow:'0 10px 40px rgba(0,0,0,0.5)'}}>
                  {/* Chat Header */}
                  <div style={{display:'flex',alignItems:'center',gap:'12px',borderBottom:'1px solid rgba(255,255,255,0.1)',paddingBottom:'16px'}}>
                    <div style={{width:'40px',height:'40px',background:'var(--accent)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',color:'#000',fontSize:'24px'}}>
                      <i className="ph-fill ph-brain"></i>
                    </div>
                    <div>
                      <h3 style={{fontSize:'16px',margin:0}}>Predicto AI</h3>
                      <span style={{fontSize:'12px',color:'var(--accent)',display:'flex',alignItems:'center',gap:'4px'}}>
                        <span style={{display:'inline-block',width:'8px',height:'8px',background:'var(--accent)',borderRadius:'50%',boxShadow:'0 0 10px var(--accent)'}}></span> Çevrimiçi
                      </span>
                    </div>
                  </div>

                  {/* Chat Body */}
                  <div ref={chatBodyRef} id="ai-chat-body" style={{flex:1,display:'flex',flexDirection:'column',gap:'16px',overflowY:'auto',paddingRight:'8px'}}>
                    <div className="chat-msg bot-msg" style={{alignSelf:'flex-start',maxWidth:'85%',background:'#1a1a1a',padding:'12px 16px',borderRadius:'12px 12px 12px 0',color:'#fff',fontSize:'14px',lineHeight:1.5,border:'1px solid rgba(255,255,255,0.05)'}}>
                      Bana arabanızı söyleyin ve almak mı istediğinizi veya olası arızaları öğrenin.
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div style={{display:'flex',gap:'8px',marginTop:'auto',position:'relative'}}>
                    <input ref={chatInputRef} type="text" id="ai-chat-input" placeholder="Örn: 2018 Golf dizel almayı düşünüyorum..." style={{flex:1,background:'#111',border:'1px solid rgba(255,255,255,0.1)',padding:'12px 16px',borderRadius:'24px',color:'#fff',outline:'none',fontFamily:'inherit',fontSize:'14px'}} onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }} />
                    <button id="ai-chat-send" onClick={handleSend} style={{width:'44px',height:'44px',borderRadius:'50%',background:'var(--accent)',border:'none',color:'#000',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',transition:'all 0.3s ease'}}>
                      <i className="ph ph-paper-plane-right" style={{fontSize:'20px',fontWeight:'bold'}}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APP SECTION */}
      <section className="section" id="app">
        <div className="container">
          <div className="app-grid reveal">
            <div>
              <div className="section-label">ASIL ÜRÜN: PREDITECH APP</div>
              <h2>Sürüş Skoru ve AI<br/><span>Cebinizde.</span></h2>
              <p className="subtitle" style={{marginBottom:'32px'}}>Sürüş skoru, arıza açıklamaları ve maliyet tahminleri tek uygulamada. Predicto AI aracınızı tanır ve size özel öneriler sunar.</p>
              <div className="features-grid" style={{marginTop:0}}>
                <div className="feature-item" style={{padding:'16px'}}><i className="ph-fill ph-trophy emoji" style={{fontSize:'28px',color:'var(--accent)'}}></i><h4 style={{fontSize:'13px'}}>Sürüş Skoru</h4><p style={{fontSize:'12px'}}>0-100 arası puanlama</p></div>
                <div className="feature-item" style={{padding:'16px'}}><i className="ph-fill ph-robot emoji" style={{fontSize:'28px',color:'#A855F7'}}></i><h4 style={{fontSize:'13px'}}>Predicto AI</h4><p style={{fontSize:'12px'}}>Kişiselleştirilmiş asistan</p></div>
              </div>
              <Link href="/app" className="btn btn-primary" style={{marginTop:'32px'}}>Uygulama Detaylarını İncele</Link>
            </div>
            <div className="device-img-wrapper" style={{margin:0}}>
              <img src="/assets/images/app/ana ekran.png" alt="Preditech App" style={{maxWidth:'280px',borderRadius:'24px',border:'2px solid rgba(255,255,255,0.1)'}} />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section" id="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="premium-stat-card reveal" style={{transitionDelay:'0s'}}>
              <div className="sporty-num">30</div>
              <div className="stat-label">Farklı Markada<br/>Test Edildi</div>
            </div>
            <div className="premium-stat-card reveal" style={{transitionDelay:'0.1s'}}>
              <div className="sporty-num">47.943</div>
              <div className="stat-label">Araç Modeli<br/>Veri Tabanı</div>
            </div>
            <div className="premium-stat-card reveal" style={{transitionDelay:'0.2s'}}>
              <div className="sporty-num">13.433</div>
              <div className="stat-label">Araç Verisiyle<br/>Eğitilmiş Yapay Zeka</div>
            </div>
            <div className="premium-stat-card reveal" style={{transitionDelay:'0.3s'}}>
              <div className="sporty-num">Made in Türkiye</div>
              <div className="stat-label">Türkiye&apos;de Geliştirilen<br/>Özel Donanım</div>
            </div>
          </div>
        </div>
      </section>

      {/* COST TIMELINE */}
      <section className="section">
        <div className="container">
          <div className="section-label reveal" style={{justifyContent:'center'}}>ZAMAN KARŞI İŞLİYOR</div>
          <h2 className="reveal" style={{textAlign:'center'}}>Görmezden Gelmenin<br/><span>Gerçek Maliyeti.</span></h2>
          <p className="subtitle reveal" style={{textAlign:'center',marginBottom:'60px',maxWidth:'600px',marginLeft:'auto',marginRight:'auto'}}>Basit bir motor titreşiminin haftalar içerisinde binlerce liralık bir faturaya dönüşme hikayesi.</p>

          <div className="timeline-container">
            <div className="timeline-item slide-in">
              <div className="timeline-dot"></div>
              <span className="timeline-time" style={{fontWeight:700}}>1. HAFTA: Erken Teşhis (PRO &amp; GT)</span>
              <div className="timeline-content" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'32px'}}>
                <div style={{flex:1}}>
                  <h3 style={{fontSize:'20px',color:'var(--text1)'}}>Preditech&apos;in Yakaladığı An (Arıza Doğmadan Önce)</h3>
                  <p style={{fontSize:'14px',color:'var(--text2)'}}>Ateşleme bobininde henüz güç kaybı başlamadı, sadece mikro titreşimler var. Hata kodu yok, arıza lambası yanmıyor. Preditech IMU sensörleri ile bu rezonansı anında yakalar ve sizi uyarır. Tam %80&apos;e varan maliyet tasarrufu sağlarsınız.</p>
                </div>
                <div className="timeline-cost" style={{width:'280px',flexShrink:0,textAlign:'left',background:'#fdfdfd',fontFamily:'monospace',marginTop:0}}>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px',fontWeight:500,fontSize:'13px',color:'#444'}}><span>Arıza Tespiti</span><span>500₺</span></div>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px',fontWeight:500,fontSize:'13px',color:'#444'}}><span>Ateşleme Bobini</span><span>1.500₺</span></div>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px',fontWeight:500,fontSize:'13px',color:'#444'}}><span>İşçilik</span><span>1.000₺</span></div>
                  <div style={{borderTop:'1px dashed #999',marginTop:'8px',paddingTop:'8px',display:'flex',justifyContent:'space-between',fontWeight:900,fontSize:'16px',color:'#b45309'}}><span>TOPLAM</span><span>3.000₺</span></div>
                </div>
              </div>
            </div>

            <div className="timeline-item warning slide-in" style={{transitionDelay:'0.2s'}}>
              <div className="timeline-dot"></div>
              <span className="timeline-time" style={{fontWeight:700}}>3. HAFTA: Standart Cihazlar</span>
              <div className="timeline-content" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'32px'}}>
                <div style={{flex:1}}>
                  <h3 style={{fontSize:'20px',color:'var(--text1)'}}>Geç Kalınmış Teşhis: Motor Arıza Lambası Yandı</h3>
                  <p style={{fontSize:'14px',color:'var(--text2)'}}>Standart OBD cihazları arızayı ancak bu aşamada (hata kodu düştüğünde) fark eder. Maalesef bu süreçte hatalı ateşleme yüzünden DPF ve EGR çoktan kurum bağlamaya başlamış, onarım maliyeti 3 katına çıkmıştır.</p>
                </div>
                <div className="timeline-cost" style={{width:'280px',flexShrink:0,textAlign:'left',background:'#fdfdfd',fontFamily:'monospace',marginTop:0}}>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px',fontWeight:500,fontSize:'13px',color:'#444'}}><span>Detaylı Tespit</span><span>1.500₺</span></div>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px',fontWeight:500,fontSize:'13px',color:'#444'}}><span>Ateşleme Bobini</span><span>1.500₺</span></div>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px',fontWeight:500,fontSize:'13px',color:'#444'}}><span>EGR Temizliği</span><span>4.500₺</span></div>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px',fontWeight:500,fontSize:'13px',color:'#444'}}><span>İşçilik</span><span>2.000₺</span></div>
                  <div style={{borderTop:'1px dashed #999',marginTop:'8px',paddingTop:'8px',display:'flex',justifyContent:'space-between',fontWeight:900,fontSize:'16px',color:'#c2410c'}}><span>TOPLAM</span><span>9.500₺</span></div>
                </div>
              </div>
            </div>

            <div className="timeline-item danger slide-in" style={{transitionDelay:'0.4s'}}>
              <div className="timeline-dot"></div>
              <span className="timeline-time" style={{fontWeight:700}}>6. HAFTA: Sürücünün Fark Ettiği An</span>
              <div className="timeline-content" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'32px'}}>
                <div style={{flex:1}}>
                  <h3 style={{fontSize:'20px',color:'var(--text1)'}}>Görmezden Gelmenin Gerçek Bedeli (Yolda Kalma)</h3>
                  <p style={{fontSize:'14px',color:'var(--text2)'}}>&quot;Sesi duyunca ustaya giderim&quot; veya &quot;Arıza lambası yanana kadar devam edeyim&quot; diyen sürücünün karşılaştığı son. EGR tamamen tıkandı, DPF doldu ve araç yolda kaldı. Zamanında yapılmayan ufak bir müdahale devasa bir servet kaybına dönüştü.</p>
                </div>
                <div className="timeline-cost" style={{width:'280px',flexShrink:0,textAlign:'left',background:'#fdfdfd',fontFamily:'monospace',marginTop:0}}>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px',fontWeight:500,fontSize:'13px',color:'#444'}}><span>Ateşleme Bobini</span><span>1.500₺</span></div>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px',fontWeight:500,fontSize:'13px',color:'#444'}}><span>EGR Valfi Değişimi</span><span>12.500₺</span></div>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px',fontWeight:500,fontSize:'13px',color:'#444'}}><span>DPF Yenileme</span><span>28.000₺</span></div>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px',fontWeight:500,fontSize:'13px',color:'#444'}}><span>Çekici Hizmeti</span><span>2.500₺</span></div>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px',fontWeight:500,fontSize:'13px',color:'#444'}}><span>Ağır İşçilik</span><span>8.500₺</span></div>
                  <div style={{borderTop:'1px dashed #999',marginTop:'8px',paddingTop:'8px',display:'flex',justifyContent:'space-between',fontWeight:900,fontSize:'16px',color:'#dc2626'}}><span>TOPLAM</span><span>53.000₺</span></div>
                </div>
              </div>
            </div>
          </div>
          <div style={{textAlign:'center',marginTop:'40px'}} className="reveal">
            <Link href="/pro" className="btn btn-primary" style={{padding:'16px 32px',fontSize:'16px'}}>Preditech PRO ile Önlem Al</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{background:'var(--bg)',overflow:'hidden'}}>
        <div className="container">
          <h2 className="reveal" style={{textAlign:'center',marginBottom:'60px'}}>Sizleri Yolda<br/><span>Bırakmadık.</span></h2>
        </div>
        <div className="testimonial-marquee-wrapper reveal">
          <div className="testimonial-marquee">
            {(() => {
              const testimonials = [
                { quote: '"Audi A4 aracımda bir gün işe giderken Predicto AI bana \'Katalitik konvertörünüzde anormal bir titreşim var\' dedi. Servise gittim, usta daha arıza kodu bile yok dedi ama söktüğünde çatlağı gördü. İnanılmaz."', initials: 'MB', name: 'Murat B.', role: 'Audi A4 (2019) Kullanıcısı' },
                { quote: '"Filomuzdaki 12 araçta Preditech takılı. Eskiden kuryelerimiz yolda kaldığında çekici parası ve zaman kaybı bizi bitiriyordu. Şimdi hangi arabanın ne zaman bozulacağını biliyoruz."', initials: 'AF', name: 'Ahmet F.', role: 'Kurye Filosu Yöneticisi' },
                { quote: '"Track day (Pist günü) etkinliklerinde daha önce 1000 dolarlık harici GPS cihazları kullanıyordum. Preditech GT hem telemetri veriyor hem de arabanın kondisyonunu koruyor. Tam bir oyun değiştirici."', initials: 'CE', name: 'Can E.', role: 'Amatör Pist Pilotu' },
                { quote: '"Özellikle uzun yola çıkmadan önce Preditech\'in risk haritasını kontrol etmek büyük bir lüks. Geçen ay potansiyel bir triger kayışı sıkıntısını yola çıkmadan 2 gün önce tespit edip kurtardı bizi."', initials: 'SK', name: 'Selin K.', role: 'Ford Kuga Kullanıcısı' },
              ];
              const cards: React.ReactNode[] = [];
              for (let cycle = 0; cycle < 2; cycle++) {
                testimonials.forEach((t, i) => {
                  cards.push(
                    <div className="testimonial-card" key={`${cycle}-${i}`}>
                      <p className="testimonial-quote">{t.quote}</p>
                      <div className="testimonial-author">
                        <div className="author-avatar">{t.initials}</div>
                        <div className="author-info">
                          <h4>{t.name}</h4>
                          <span>{t.role}</span>
                        </div>
                      </div>
                    </div>
                  );
                });
              }
              return cards;
            })()}
          </div>
        </div>
      </section>

      {/* EARLY ACCESS CTA */}
      <section className="section accent-title" style={{textAlign:'center'}}>
        <div className="container reveal">
          <h2 style={{fontSize:'48px',marginBottom:'16px'}}>Geleceği İlk Siz Deneyimleyin.</h2>
          <p className="subtitle" style={{maxWidth:'600px',margin:'0 auto 32px'}}>Preditech donanımları çok yakında satışa çıkıyor. Ön sipariş verin, piyasaya çıktığında cihazınızı ilk siz teslim alın.</p>
          <Link href="/erken-erisim" className="btn btn-primary sporty-btn" style={{padding:'16px 40px',fontSize:'18px',background:'var(--accent)',color:'#000'}}>Erken Erişime Katıl</Link>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="section" style={{background:'var(--surface2)'}}>
        <div className="container">
          <div className="section-label">BİZDEN HABERLER</div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',marginBottom:'48px'}}>
            <h2>Basında<br/><span>Preditech.</span></h2>
            <Link href="/haberler" className="btn btn-ghost" style={{marginBottom:'20px'}}>Tümünü Gör →</Link>
          </div>

          <div className="news-grid">
            <div className="news-card" onClick={() => router.push('/haber-1')} style={{cursor:'pointer'}}>
              <img src="/assets/images/general/predB.png" className="news-img" alt="Haber 1" />
              <div className="news-content">
                <span className="news-date">21 Mayıs 2026</span>
                <h3 className="news-title">TÜBİTAK BİGG 1812 Yatırımını Başarıyla Tamamladık</h3>
                <p className="news-excerpt">Ar-Ge süreçlerimizi hızlandıracak olan yatırım...</p>
              </div>
            </div>
            <div className="news-card" onClick={() => router.push('/haber-2')} style={{cursor:'pointer'}}>
              <img src="/assets/images/devices/GREG.png" className="news-img" alt="Haber 2" />
              <div className="news-content">
                <span className="news-date">10 Nisan 2026</span>
                <h3 className="news-title">Yeni Titan Modeli Tanıtıldı</h3>
                <p className="news-excerpt">Ağır vasıta operasyonlarındaki devrim niteliğinde...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
