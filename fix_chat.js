const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const newChatLogic = `  // Predicto AI scroll interaction + chatbot
  useEffect(() => {
    const simulator = document.getElementById('simulator');
    const chatBody = chatBodyRef.current;
    if (!simulator || !chatBody) return;

    // Clear initial content to control flow
    chatBody.innerHTML = '';

    let triggered = false;

    const appendBotMessageAuto = (html, delay) => {
      setTimeout(() => {
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
      }, delay);
    };

    const showChips = (delay) => {
      setTimeout(() => {
        const chips = document.createElement('div');
        chips.className = 'quick-reply-chips';
        chips.style.cssText = 'display: flex; flex-direction: column; gap: 8px; margin-top: 8px; animation: fadeInBtn 0.5s ease forwards; align-items: flex-start; width: 100%; padding-bottom: 16px;';
        
        const chip1 = document.createElement('div');
        chip1.className = 'quick-reply-chip';
        chip1.style.cssText = 'background: rgba(255, 215, 0, 0.05); border: 1px solid rgba(255, 215, 0, 0.2); padding: 10px 14px; border-radius: 16px; color: var(--accent); font-size: 13px; cursor: pointer; transition: all 0.3s; max-width: 90%; word-wrap: break-word;';
        chip1.textContent = 'Araba alacağım, öneri istiyorum';
        chip1.onclick = () => {
          const input = document.getElementById('ai-chat-input');
          if(input) { input.value = 'Araba alacağım, öneri istiyorum'; document.getElementById('ai-chat-send').click(); }
        };

        const chip2 = document.createElement('div');
        chip2.className = 'quick-reply-chip';
        chip2.style.cssText = 'background: rgba(255, 215, 0, 0.05); border: 1px solid rgba(255, 215, 0, 0.2); padding: 10px 14px; border-radius: 16px; color: var(--accent); font-size: 13px; cursor: pointer; transition: all 0.3s; max-width: 90%; word-wrap: break-word;';
        chip2.textContent = 'Aracımdaki arızayı bil';
        chip2.onclick = () => {
          const input = document.getElementById('ai-chat-input');
          if(input) { input.value = 'Aracımdaki arızayı bil'; document.getElementById('ai-chat-send').click(); }
        };

        chips.appendChild(chip1);
        chips.appendChild(chip2);
        chatBody.appendChild(chips);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, delay);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          appendBotMessageAuto('Preditech cihazlarının içinde ben varım. 7/24 aracınızı tarayarak her an arıza kontrolü yapmak için hazırım.', 500);
          appendBotMessageAuto('Size ne konuda yardımcı olabilirim?', 1500);
          showChips(2500);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(simulator);
    return () => observer.disconnect();
  }, []);`;

content = content.replace(
  /\/\/ Predicto AI scroll interaction \+ chatbot[\s\S]*?\}, \[\]\);/m,
  newChatLogic
);

// We need to remove the statically defined chat bubbles from JSX so they don't appear before scroll
content = content.replace(
  /<div className="chat-msg bot-msg"[\s\S]*?<\/div>\s*<\/div>/m,
  ''
);

fs.writeFileSync('src/app/page.tsx', content);
console.log('Fixed chat layout in page.tsx');
