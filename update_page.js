const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Initial message
page = page.replace(
  'Bana arabanızı söyleyin ve almak mı istediğinizi veya olası arızaları öğrenin.',
  'Size ne konuda yardımcı olabilirim?'
);

// 2. Add quick reply chips below the initial message
const chipsHTML = `
                    <div className="quick-reply-chips">
                      <div className="quick-reply-chip" onClick={() => {
                        const input = document.getElementById('ai-chat-input') as HTMLInputElement;
                        if(input) input.value = 'Araba alacağım, öneri istiyorum';
                      }}>Araba alacağım, öneri istiyorum</div>
                      <div className="quick-reply-chip" onClick={() => {
                        const input = document.getElementById('ai-chat-input') as HTMLInputElement;
                        if(input) input.value = 'Aracımdaki arızayı bil';
                      }}>Aracımdaki arızayı bil</div>
                    </div>
`;
page = page.replace(
  '<div className="chat-msg bot-msg" style={{alignSelf:\'flex-start\',maxWidth:\'85%\',background:\'#1a1a1a\',padding:\'12px 16px\',borderRadius:\'12px 12px 12px 0\',color:\'#fff\',fontSize:\'14px\',lineHeight:1.5,border:\'1px solid rgba(255,255,255,0.05)\'}}>\n                      Size ne konuda yardımcı olabilirim?\n                    </div>',
  '<div className="chat-msg bot-msg" style={{alignSelf:\'flex-start\',maxWidth:\'85%\',background:\'#1a1a1a\',padding:\'12px 16px\',borderRadius:\'12px 12px 12px 0\',color:\'#fff\',fontSize:\'14px\',lineHeight:1.5,border:\'1px solid rgba(255,255,255,0.05)\'}}>\n                      Size ne konuda yardımcı olabilirim?\n                    </div>' + chipsHTML
);


// 3. Update scroll messages in useEffect
// Replace msg2 and msg3 block
page = page.replace(
  `    if (scrolled >= 0.3 && !chatProgress.current.msg2) {
      chatProgress.current.msg2 = true;
      appendBotMessage("Araban hakkında veya almak istediğin araba hakkında sorular sorabilirsin, piyasaya hakimim.");
    }
    if (scrolled >= 0.6 && !chatProgress.current.msg3) {
      chatProgress.current.msg3 = true;
      appendBotMessage("Doğrudan senin arabanın verilerini 7/24 inceleyerek çalışmak için sabırsızlanıyorum.");
    }`,
  `    if (scrolled >= 0.4 && !chatProgress.current.msg2) {
      chatProgress.current.msg2 = true;
      appendBotMessage("Preditech cihazlarının içinde ben varım. 7/24 aracınızı tarayarak her an arıza kontrolü yapmak için hazırım.");
    }`
);

// 4. Shorten Timeline Text
page = page.replace(
  'Ateşleme bobininde henüz güç kaybı başlamadı, sadece mikro titreşimler var. Hata kodu yok, arıza lambası yanmıyor. Preditech IMU sensörleri ile bu rezonansı anında yakalar ve sizi uyarır. Tam %80\'e varan maliyet tasarrufu sağlarsınız.',
  'Ateşleme bobininde mikro titreşimler başladı. Arıza lambası yanmadan yapay zeka bu arızayı tespit eder ve sizi uyarır. Erken müdahale ile %80\'e varan tasarruf sağlarsınız.'
);

page = page.replace(
  'Standart OBD cihazları arızayı ancak bu aşamada (hata kodu düştüğünde) fark eder. Maalesef bu süreçte hatalı ateşleme yüzünden DPF ve EGR çoktan kurum bağlamaya başlamış, onarım maliyeti 3 katına çıkmıştır.',
  'Arıza lambası artık yandı. Hatalı ateşleme sebebiyle sistem kurum bağlamaya başladı. Hasar büyüdüğü için onarım maliyetiniz 3 katına çıktı.'
);

page = page.replace(
  '"Sesi duyunca ustaya giderim" veya "Arıza lambası yanana kadar devam edeyim" diyen sürücünün karşılaştığı son. EGR tamamen tıkandı, DPF doldu ve araç yolda kaldı. Zamanında yapılmayan ufak bir müdahale devasa bir servet kaybına dönüştü.',
  'EGR tamamen tıkandı, DPF doldu ve araç yolda kaldı. Zamanında yapılmayan ufak bir müdahale devasa bir servet kaybına dönüştü.'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log("Updated page.tsx text and chatbot");
