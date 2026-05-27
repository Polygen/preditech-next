'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScriptLoader() {
  const pathname = usePathname();
  useEffect(() => {
    // Interactive Background Effect (mouse position CSS variables)
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
      document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .slide-in').forEach(el => observer.observe(el));

    // Counter animation
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !(entry.target as HTMLElement).dataset.counted) {
          (entry.target as HTMLElement).dataset.counted = 'true';
          animateCounter(entry.target as HTMLElement);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

    function animateCounter(el: HTMLElement) {
      const target = parseInt(el.dataset.target || '0');
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 2000;
      const start = performance.now();

      function update(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = prefix + current.toLocaleString('tr-TR') + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }

    // Health ring animation
    const ringObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !(entry.target as HTMLElement).dataset.animated) {
          (entry.target as HTMLElement).dataset.animated = 'true';
          const fill = entry.target.querySelector('.fill') as SVGElement;
          const pct = parseInt((entry.target as HTMLElement).dataset.percent || '0');
          const circumference = 339.292;
          const offset = circumference - (pct / 100) * circumference;
          if (fill) fill.style.strokeDashoffset = String(offset);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.health-ring').forEach(el => ringObserver.observe(el));

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    const handleFaqClick = function(this: HTMLElement) {
      const isActive = this.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) this.classList.add('active');
    };
    faqItems.forEach(item => {
      item.addEventListener('click', handleFaqClick as EventListener);
    });

    // Product tabs
    const tabs = document.querySelectorAll('.persona-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const rec = (tab as HTMLElement).dataset.recommend;
        document.querySelectorAll('.product-card').forEach(card => {
          (card as HTMLElement).style.transform = '';
          (card as HTMLElement).style.borderColor = '';
        });
        const target = document.querySelector(`.product-card[data-product="${rec}"]`) as HTMLElement;
        if (target) {
          target.style.transform = 'translateY(-8px)';
          target.style.borderColor = 'var(--accent)';
        }
      });
    });

    // G-Force simulation
    const gforceContainers = document.querySelectorAll('.gforce-container, .gforce-radar-container');
    const gforceAnimIds: number[] = [];
    if (gforceContainers.length > 0) {
      gforceContainers.forEach(container => {
        const dot = container.querySelector('.gforce-dot, .gforce-radar-dot') as HTMLElement;
        const valEl = container.querySelector('.gforce-value, .gforce-radar-value') as HTMLElement;
        const trailCanvas = container.querySelector('.gforce-radar-trail') as HTMLCanvasElement;
        const trailCtx = trailCanvas ? trailCanvas.getContext('2d') : null;
        let trailPoints: {x: number; y: number; alpha: number}[] = [];
        if (!dot || !valEl) return;

        let currentX = 0;
        let currentY = 0;

        function animateGForce(time: number) {
          let targetX = (Math.sin(time * 0.0007) * 0.5 + Math.sin(time * 0.0013) * 0.5);
          let targetY = (Math.cos(time * 0.0009) * 0.5 + Math.sin(time * 0.0017) * 0.5);
          const r = Math.sqrt(targetX * targetX + targetY * targetY);
          if (r > 1) { targetX /= r; targetY /= r; }
          targetX *= 45;
          targetY *= 45;
          currentX += (targetX - currentX) * 0.03;
          currentY += (targetY - currentY) * 0.03;
          dot.style.transform = `translate(${currentX}px, ${currentY}px)`;
          const radius = Math.sqrt(currentX * currentX + currentY * currentY);
          const gVal = (radius / 50) * 1.84;
          valEl.textContent = `${gVal.toFixed(2)} G`;

          if (trailCtx) {
            trailPoints.push({x: 75 + currentX, y: 75 + currentY, alpha: 1.0});
            trailCtx.clearRect(0, 0, 150, 150);
            trailCtx.lineCap = 'round';
            trailCtx.lineJoin = 'round';
            if (trailPoints.length > 1) {
              for (let i = 0; i < trailPoints.length - 1; i++) {
                trailCtx.beginPath();
                trailCtx.moveTo(trailPoints[i].x, trailPoints[i].y);
                trailCtx.lineTo(trailPoints[i+1].x, trailPoints[i+1].y);
                trailCtx.strokeStyle = `rgba(249, 212, 35, ${trailPoints[i].alpha})`;
                trailCtx.lineWidth = 2.5;
                trailCtx.stroke();
                trailPoints[i].alpha -= 0.015;
              }
            }
            trailPoints = trailPoints.filter(p => p.alpha > 0);
          }
          const id = requestAnimationFrame(animateGForce);
          gforceAnimIds.push(id);
        }
        const id = requestAnimationFrame(animateGForce);
        gforceAnimIds.push(id);
      });
    }

    // Modal close on overlay click
    const overlay = document.getElementById('solModal');
    const handleOverlayClick = (e: Event) => {
      if (e.target === overlay) overlay?.classList.remove('active');
    };
    if (overlay) overlay.addEventListener('click', handleOverlayClick);

    // Buy bar scroll visibility
    const buyBar = document.querySelector('.buy-bar') as HTMLElement;
    const handleBuyBarScroll = () => {
      if (buyBar) {
        buyBar.classList.toggle('visible', window.scrollY > 400);
      }
    };
    if (buyBar) window.addEventListener('scroll', handleBuyBarScroll);

    // Pipeline Container Animation
    const pipelines = document.querySelectorAll('.pipeline-container');
    const handlePipelineScroll = () => {
      pipelines.forEach(pipeline => {
        // Find closest parent section or use pipeline itself as reference
        const section = pipeline.closest('section') || pipeline.parentElement || pipeline;
        const progress = pipeline.querySelector('.pipeline-progress') as HTMLElement;
        const dot = pipeline.querySelector('.pipeline-dot') as HTMLElement;
        const cards = pipeline.querySelectorAll('.step-card');
        
        if (!progress || !dot || cards.length === 0) return;

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        let percentage = 0;
        if(rect.top <= 0) {
          const totalScroll = Math.max(1, rect.height - windowHeight);
          const currentScroll = -rect.top;
          percentage = Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100));
        } else if (rect.top > 0) {
          percentage = 0;
        }
        
        if(rect.bottom < windowHeight) {
            percentage = 100;
        }

        progress.style.width = percentage + '%';
        dot.style.left = percentage + '%';

        cards.forEach((card, index) => {
          const threshold = (index / (cards.length - 1)) * 100;
          if (percentage >= threshold - 10) {
            card.classList.add('active');
          } else {
            card.classList.remove('active');
          }
        });
      });
    };
    
    if (pipelines.length > 0) {
      window.addEventListener('scroll', handlePipelineScroll);
      // Run once on load
      handlePipelineScroll();
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      counterObserver.disconnect();
      ringObserver.disconnect();
      faqItems.forEach(item => item.removeEventListener('click', handleFaqClick as EventListener));
      gforceAnimIds.forEach(id => cancelAnimationFrame(id));
      if (overlay) overlay.removeEventListener('click', handleOverlayClick);
      if (buyBar) window.removeEventListener('scroll', handleBuyBarScroll);
      if (pipelines.length > 0) window.removeEventListener('scroll', handlePipelineScroll);
    };
  }, [pathname]);

  return null;
}
