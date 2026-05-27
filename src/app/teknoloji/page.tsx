// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'teknolojijs']) {
      window['init' + 'teknolojijs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
            #topoDrawSvg path, #topoDrawSvg rect {
              stroke-dasharray: 1500;
              stroke-dashoffset: 1500;
            }
            .node-text { fill: #ffffff !important; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 900 !important; text-anchor: middle; dominant-baseline: central; letter-spacing: 0.5px; }
            .topo-success { fill:rgba(255,255,255,0.05); stroke:#ffffff; }
            .topo-success.active-color { fill:rgba(0,255,136,0.15); stroke:#00FF88; filter:drop-shadow(0 0 10px #00FF88); transition:all 0.5s ease; }
            .topo-danger { fill:rgba(255,255,255,0.05); stroke:#ffffff; }
            .topo-danger.active-color { fill:rgba(255,68,68,0.2); stroke:#FF4444; filter:drop-shadow(0 0 15px #FF4444); transition:all 0.5s ease; }
            .topo-root { fill:rgba(255,255,255,0.05); stroke:#ffffff; }
            .topo-root.active-color { fill:rgba(0,255,136,0.15); stroke:#00FF88; filter:drop-shadow(0 0 10px #00FF88); transition:all 0.5s ease; }
          ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- NAVBAR -->


<div class="page-header" style="padding-top:120px;padding-bottom:40px">
<div class="particles"></div>
<div class="container">
<div class="section-label" style="justify-content:center;margin-bottom:16px">GİZLİ SİLAHIMIZ</div>
<h1 style="font-size:clamp(32px,4vw,64px)">Sadece Okumaz,<br><span>Analiz Eder.</span></h1>
<p style="font-size:18px;max-width:800px;margin:0 auto">Sektörde daha önce yapılmamış olanı yaptık: Dijital arıza kodları (OBD) ile fiziksel titreşim verilerini (IMU) yapay zeka ile aynı potada erittik.</p>
</div>
</div>

<section class="section" style="padding-top:0">
<div class="container">




<div class="scrub-master-container">

  <!-- KALMAN SECTION -->
  <div class="scrub-section" id="scrubKalman">
    <div class="scrub-sticky">
      
      <div class="scrub-story-panel" id="kalmanStory">
        <div class="scrub-step" data-start="0" data-end="0.05">
          <h3>1. Ham Sensör Gürültüsü</h3>
          <p>Fiziksel ortamda sensörlerden gelen ham veriler, motorun doğal titreşimleri ve yoldaki engeller yüzünden gürültülüdür (Noisy Data).</p>
        </div>
        <div class="scrub-step" data-start="0.05" data-end="0.25">
          <h3>2. Hata Sapmalarının Ölçümü</h3>
          <p>Sistem gürültünün karakteristiğini analiz eder. İdeal dalga ekseninden ne kadar sapma (artı/eksi varyans) olduğu milisaniyeler içinde haritalanır.</p>
        </div>
        <div class="scrub-step" data-start="0.25" data-end="0.55">
          <h3>3. Kalman Tahmini Devrede</h3>
          <p>Preditech, veriyi doğrudan işlemez. Önce Kalman Filtresi ile matematiksel bir tahmin yürütür ve anlık gürültülerin filtrelenmesine başlanır.</p>
        </div>
        <div class="scrub-step" data-start="0.55" data-end="0.80">
          <h3>4. Gürültü Optimizasyonu</h3>
          <p>Filtre tüm veri setini tarayarak kaotik sıçramaları iptal eder ve temiz bir frekans dalgası oluşturur.</p>
        </div>
        <div class="scrub-step" data-start="0.80" data-end="1.0">
          <h3>5. Kusursuz Çıktı</h3>
          <p>Filtreden geçen veri, yapay zekanın işleyebileceği kadar pürüzsüz ve nettir. Hata payı sıfıra yaklaşır.</p>
        </div>
      </div>

      <div class="scrub-visual-panel">
        <div class="kalman-visuals" id="kalmanVisuals">
           <div class="kv-raw-signal">
              <svg viewBox="0 0 6000 200" preserveAspectRatio="none" id="kvRawSvg" style="width: 300%; height: 100%; position: absolute; left: 0;">
                 <path id="kvRawPath" stroke="rgba(255,68,68,0.8)" stroke-width="3" fill="none" />
              </svg>
           </div>
           
           <div class="kv-error-bars" id="kvErrorBars" style="position:absolute; top:50%; left:0; width:100%; height:200px; transform:translateY(-50%); opacity:0;">
              <svg viewBox="0 0 6000 200" preserveAspectRatio="none" id="errorBarsSvg" style="width: 300%; height: 100%; position: absolute; left: 0;"></svg>
           </div>

           
           <div class="kv-dashed-signal" id="kvDashedSignal" style="position:absolute; top:50%; left:0; width:100%; height:200px; transform:translateY(-50%); opacity:0;">
              <svg viewBox="0 0 6000 200" preserveAspectRatio="none" id="kvDashedSvg" style="width: 300%; height: 100%; position: absolute; left: 0;">
                 <path id="kvDashedPath" stroke="#00FF88" stroke-dasharray="10 10" stroke-width="2" fill="none" opacity="0.6"/>
              </svg>
           </div>

           <div class="kv-filter-box" id="kvFilterBox"></div>
           <div class="kv-clean-signal" id="kvCleanSignal">
              <svg viewBox="0 0 6000 200" preserveAspectRatio="none" id="kvCleanSvg" style="width: 300%; height: 100%; position: absolute; left: 0;">
                 <path id="kvCleanPath" stroke="#00FF88" stroke-width="4" fill="none" />
              </svg>
           </div>
           <div class="kv-result-box" id="kvResultBox">DÜZELTİLMİŞ VERİ</div>
        </div>
      </div>

    </div>
  </div>

  <!-- THE CONNECTOR LINE -->
  <div class="sim-connector-wrapper">
    <div class="sim-connector">
        <div class="sim-connector-line" id="simConnectorLine"></div>
        <div class="sim-connector-dot" id="simConnectorDot"></div>
    </div>
  </div>

  <!-- FUSION SECTION -->
  <div class="scrub-section" id="scrubFusion">
    <div class="scrub-sticky">

      <!-- Text panel on left -->
      <div class="scrub-story-panel" id="fusionStory">
        <div class="scrub-step" data-start="0" data-end="0.10">
          <h3>1. Sihir Başlıyor</h3>
          <p>Preditech, aracınızı sadece dinlemez; karmaşık sarsıntıları dijital bir parmak izine dönüştüren matematiksel bir sihir numarası yapar.</p>
        </div>
        <div class="scrub-step" data-start="0.10" data-end="0.25">
          <h3>2. FFT Prizması</h3>
          <p>Bu karmaşık ve gürültülü titreşim dalgasını anlamlandırmak için FFT (Hızlı Fourier Dönüşümü) algoritmasını kullanırız.</p>
        </div>
        <div class="scrub-step" data-start="0.25" data-end="0.45">
          <h3>3. Frekanslara Bölünme</h3>
          <p>FFT bir prizma gibidir. Kaotik sarsıntıyı alır ve en saf frekans boyutlarına (X, Y, Z eksenleri) böler.</p>
        </div>
        <div class="scrub-step" data-start="0.45" data-end="0.65">
          <h3>4. Arıza Parmak İzi Oluşturuldu</h3>
          <p>Tüm veriyi saklamayız. Arka plan gürültüsünü siler, yalnızca en şiddetli frekans tepe noktalarını (pik) seçerek arızaya özel geometrik bir parmak izi oluştururuz.</p>
        </div>
        <div class="scrub-step" data-start="0.65" data-end="0.85">
          <h3>5. Veritabanı Taraması</h3>
          <p>Sistem bu parmak izini, bilinen milyonlarca arıza kaydının bulunduğu devasa bir veritabanı üzerinde kaydırır.</p>
        </div>
        <div class="scrub-step" data-start="0.85" data-end="1.0">
          <h3>6. Kusursuz Eşleşme</h3>
          <p>Biz sesi değil, sadece 'geometriyi' eşleştiririz. Şekiller kusursuz oturduğunda... BOOM! Arızanın kaynağını kesin olarak bulduk.</p>
        </div>
      </div>

      <!-- Restored Original Visuals -->
      <div class="scrub-visual-panel">
        <div class="cine-visuals" id="cineVisuals">
          <div class="cine-raw-graph">
            <svg class="scroll-svg-raw" viewBox="0 0 6000 100" preserveAspectRatio="none">
              <path id="rawPath" stroke="var(--accent)" stroke-width="3" fill="none" />
            </svg>
          </div>
          <div class="cine-fft-formula" style="font-family: 'Times New Roman', Times, serif; font-style: italic; display: flex; align-items: center; justify-content: center; gap: 8px;">
  <span>X[k] = </span>
  <div style="display: flex; flex-direction: column; align-items: center; line-height: 1; font-size: 16px; margin: 0 4px;">
    <span style="font-size: 14px;">N-1</span>
    <span style="font-size: 40px; font-style: normal; margin: -4px 0;">&sum;</span>
    <span style="font-size: 14px;">n=0</span>
  </div>
  <span style="display: flex; align-items: center;">
    x[n]e
    <sup style="font-size: 18px; margin-left: 2px; display: flex; align-items: center;">
      -i2&pi;
      <span style="display: inline-flex; flex-direction: column; text-align: center; font-size: 14px; margin-left: 4px; line-height: 1.2;">
        <span style="border-bottom: 1px solid #fff; padding: 0 2px;">kn</span>
        <span style="padding: 0 2px;">N</span>
      </span>
    </sup>
  </span>
</div>
          <div class="cine-split-container">
            <div class="cine-wave high">
              <div class="cine-wave-xaxis"></div>
              <div class="cine-wave-label">X</div>
              <svg class="scroll-svg-split" viewBox="0 0 6000 40" preserveAspectRatio="none">
                <path id="highPath" stroke="#FF4444" stroke-width="2.5" fill="none" />
              </svg>
            </div>
            <div class="cine-wave mid">
              <div class="cine-wave-xaxis"></div>
              <div class="cine-wave-label">Y</div>
              <svg class="scroll-svg-split" viewBox="0 0 6000 40" preserveAspectRatio="none">
                <path id="midPath" stroke="#00FF88" stroke-width="2.5" fill="none" />
              </svg>
            </div>
            <div class="cine-wave low">
              <div class="cine-wave-xaxis"></div>
              <div class="cine-wave-label">Z</div>
              <svg class="scroll-svg-split" viewBox="0 0 6000 40" preserveAspectRatio="none">
                <path id="lowPath" stroke="#3388FF" stroke-width="2.5" fill="none" />
              </svg>
            </div>
          </div>
          <div class="cine-db-bg" id="cineDbBg"></div>
          <div class="cine-square-container">
            <div class="cine-xygraph">
              <svg width="100%" height="100%">
                <line x1="0" y1="10%" x2="100%" y2="10%" />
                <line x1="0" y1="30%" x2="100%" y2="30%" />
                <line x1="0" y1="50%" x2="100%" y2="50%" class="axis" />
                <line x1="0" y1="70%" x2="100%" y2="70%" />
                <line x1="0" y1="90%" x2="100%" y2="90%" />
                <line x1="10%" y1="0" x2="10%" y2="100%" />
                <line x1="30%" y1="0" x2="30%" y2="100%" />
                <line x1="50%" y1="0" x2="50%" y2="100%" class="axis" />
                <line x1="70%" y1="0" x2="70%" y2="100%" />
                <line x1="90%" y1="0" x2="90%" y2="100%" />
              </svg>
            </div>
            <div class="cine-peaks" id="cinePeaks"></div>
            <div class="cine-fingerprint-lines" id="cineLines">
              <svg width="100%" height="100%" id="cineLinesSvg"></svg>
            </div>
            <div class="cine-octagon" id="cineOctagon">
              <svg viewBox="0 0 200 200" preserveAspectRatio="none">
                <polygon points="60,20 140,20 180,60 180,140 140,180 60,180 20,140 20,60" />
              </svg>
            </div>
            <div class="cine-db-match-octagon" id="dbMatchOctagon">
              <svg viewBox="0 0 200 200" preserveAspectRatio="none">
                <polygon points="60,20 140,20 180,60 180,140 140,180 60,180 20,140 20,60" />
              </svg>
            </div>
          </div>
          <div class="cine-result" id="cineResult">ARIZA TESPİT EDİLDİ: AKS EĞRİLİĞİ</div>
        </div>
      </div>

    </div>
  </div>


  
  <!-- THE SECOND CONNECTOR LINE -->
  <div class="sim-connector-wrapper">
    <div class="sim-connector">
        <div class="sim-connector-line" id="simConnectorLine2"></div>
        <div class="sim-connector-dot" id="simConnectorDot2"></div>
    </div>
  </div>

  
  <!-- THE SECOND CONNECTOR LINE -->
  <div class="sim-connector-wrapper">
    <div class="sim-connector">
        <div class="sim-connector-line" id="simConnectorLine2"></div>
        <div class="sim-connector-dot" id="simConnectorDot2"></div>
    </div>
  </div>

  <!-- TOPOLOGY SECTION -->
  <div class="scrub-section" id="scrubTopology" style="height: 300vh;">
    <div class="scrub-sticky">
      <!-- Texts -->
      <div class="scrub-story-panel" id="topologyStory">
        <div class="scrub-step" data-start="0.0" data-end="0.25">
          <h3>1. Canlı Tarama</h3>
          <p>Preditech, OBD portundan araca bağlandığı an sistemleri uyanır. Sadece hata kodlarını okumakla kalmaz, tüm iletişim ağlarına entegre olur.</p>
        </div>
        <div class="scrub-step" data-start="0.25" data-end="0.50">
          <h3>2. Sinyal Gönderimi</h3>
          <p>Araç üzerindeki beyinleri keşfetmek için H-CAN, MS-CAN ve K-Line hatları üzerinden özel sorgu paketleri yollanır.</p>
        </div>
        <div class="scrub-step" data-start="0.50" data-end="1.0">
          <h3>3. Hata Tespiti</h3>
          <p>Bütün modüller taranır. Sağlıklı çalışan donanımlar yeşil yanıt verirken, P0300 Ateşleme Hatası barındıran Motor Beyni (PCM) ve hata içeren diğer beyinler anında kırmızı olarak işaretlenir.</p>
        </div>
      </div>

      <!-- Topology Visuals -->
      <div class="scrub-visual-panel" style="display:flex; justify-content:center; align-items:center; position:relative;">
        <div class="topology-wrapper" id="topologyWrapper" style="width:100%; max-width:850px; opacity:0; transform:scale(0.9); transition:all 0.5s ease;">
          <style>
            #topoDrawSvg path, #topoDrawSvg rect {
              stroke-dasharray: 1500;
              stroke-dashoffset: 1500;
            }
            .node-text { fill: #ffffff !important; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 900 !important; text-anchor: middle; dominant-baseline: central; letter-spacing: 0.5px; }
            .topo-success { fill:rgba(255,255,255,0.05); stroke:#ffffff; }
            .topo-success.active-color { fill:rgba(0,255,136,0.15); stroke:#00FF88; filter:drop-shadow(0 0 10px #00FF88); transition:all 0.5s ease; }
            .topo-danger { fill:rgba(255,255,255,0.05); stroke:#ffffff; }
            .topo-danger.active-color { fill:rgba(255,68,68,0.2); stroke:#FF4444; filter:drop-shadow(0 0 15px #FF4444); transition:all 0.5s ease; }
            .topo-root { fill:rgba(255,255,255,0.05); stroke:#ffffff; }
            .topo-root.active-color { fill:rgba(0,255,136,0.15); stroke:#00FF88; filter:drop-shadow(0 0 10px #00FF88); transition:all 0.5s ease; }
          </style>
          <svg width="100%" viewBox="0 0 850 500" id="topoDrawSvg">
            <!-- ROOT NODE -->
            <rect x="20" y="230" width="120" height="40" class="node-rect topo-root" stroke-width="2" rx="8" />
            <text x="80" y="250" class="node-text" style="font-size:15px; fill:#00FF88; opacity:0; transition:opacity 0.5s;" id="topoRootText">PREDITECH</text>
            
            <!-- MAIN BUS LINES -->
            <path d="M 140,250 L 160,250" style="stroke:#fff; stroke-width:2; fill:none;" />
            <path d="M 160,250 L 160,100 L 760,100" style="stroke:#FF4444; stroke-width:2.5; fill:none;" />
            <path d="M 160,250 L 760,250" style="stroke:#2196F3; stroke-width:2.5; fill:none;" />
            <path d="M 160,250 L 160,400 L 760,400" style="stroke:#FF9800; stroke-width:2.5; fill:none;" />

            <!-- H-CAN NODES -->
            <g>
              <path style="stroke:#FF4444; stroke-width:2; fill:none;" d="M 250,100 L 250,80" />
              <rect x="200" y="40" width="100" height="40" class="node-rect topo-danger" stroke-width="2" rx="8" />
              <text x="250" y="60" class="node-text" style="opacity:0;">PCM</text>
              <text x="250" y="30" style="fill:#FF4444; font-size:11px; text-anchor:middle; font-weight:800; opacity:0; transition:opacity 0.5s;" class="topo-fault-code">P0300 ATEŞLEME</text>
              
              <path style="stroke:#FF4444; stroke-width:2; fill:none;" d="M 400,100 L 400,80" />
              <rect x="350" y="40" width="100" height="40" class="node-rect topo-success" stroke-width="2" rx="8" />
              <text x="400" y="60" class="node-text" style="opacity:0;">ABS</text>
              
              <path style="stroke:#FF4444; stroke-width:2; fill:none;" d="M 550,100 L 550,80" />
              <rect x="500" y="40" width="100" height="40" class="node-rect topo-success" stroke-width="2" rx="8" />
              <text x="550" y="60" class="node-text" style="opacity:0;">BCM</text>
              
              <path style="stroke:#FF4444; stroke-width:2; fill:none;" d="M 700,100 L 700,80" />
              <rect x="650" y="40" width="100" height="40" class="node-rect topo-success" stroke-width="2" rx="8" />
              <text x="700" y="60" class="node-text" style="opacity:0;">APIM</text>
              
              <path style="stroke:#FF4444; stroke-width:2; fill:none;" d="M 325,100 L 325,120" />
              <rect x="275" y="120" width="100" height="40" class="node-rect topo-success" stroke-width="2" rx="8" />
              <text x="325" y="140" class="node-text" style="opacity:0;">TCM</text>
            </g>

            <!-- MS-CAN NODES -->
            <g>
              <path style="stroke:#2196F3; stroke-width:2; fill:none;" d="M 250,250 L 250,230" />
              <rect x="200" y="190" width="100" height="40" class="node-rect topo-success" stroke-width="2" rx="8" />
              <text x="250" y="210" class="node-text" style="opacity:0;">PAM</text>
              
              <path style="stroke:#2196F3; stroke-width:2; fill:none;" d="M 400,250 L 400,230" />
              <rect x="350" y="190" width="100" height="40" class="node-rect topo-success" stroke-width="2" rx="8" />
              <text x="400" y="210" class="node-text" style="opacity:0;">DDM</text>
              
              <path style="stroke:#2196F3; stroke-width:2; fill:none;" d="M 550,250 L 550,230" />
              <rect x="500" y="190" width="100" height="40" class="node-rect topo-success" stroke-width="2" rx="8" />
              <text x="550" y="210" class="node-text" style="opacity:0;">DSP</text>
              
              <path style="stroke:#2196F3; stroke-width:2; fill:none;" d="M 700,250 L 700,230" />
              <rect x="650" y="190" width="100" height="40" class="node-rect topo-success" stroke-width="2" rx="8" />
              <text x="700" y="210" class="node-text" style="opacity:0;">FCIM</text>
            </g>

            <!-- K-LINE NODES -->
            <g>
              <path style="stroke:#FF9800; stroke-width:2; fill:none;" d="M 250,400 L 250,380" />
              <rect x="200" y="340" width="100" height="40" class="node-rect topo-success" stroke-width="2" rx="8" />
              <text x="250" y="360" class="node-text" style="opacity:0;">GPSM</text>
              
              <path style="stroke:#FF9800; stroke-width:2; fill:none;" d="M 400,400 L 400,380" />
              <rect x="350" y="340" width="100" height="40" class="node-rect topo-success" stroke-width="2" rx="8" />
              <text x="400" y="360" class="node-text" style="opacity:0;">RTM</text>
              
              <path style="stroke:#FF9800; stroke-width:2; fill:none;" d="M 550,400 L 550,380" />
              <rect x="500" y="340" width="100" height="40" class="node-rect topo-danger" stroke-width="2" rx="8" />
              <text x="550" y="360" class="node-text" style="opacity:0;">LDWS</text>
              <text x="550" y="330" style="fill:#FF4444; font-size:11px; text-anchor:middle; font-weight:800; opacity:0; transition:opacity 0.5s;" class="topo-fault-code">C1014 ABS</text>
              
              <path style="stroke:#FF9800; stroke-width:2; fill:none;" d="M 325,400 L 325,420" />
              <rect x="275" y="420" width="100" height="40" class="node-rect topo-success" stroke-width="2" rx="8" />
              <text x="325" y="440" class="node-text" style="opacity:0;">SCCM</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- THE THIRD CONNECTOR LINE -->
  <div class="sim-connector-wrapper">
    <div class="sim-connector">
        <div class="sim-connector-line" id="simConnectorLine3"></div>
        <div class="sim-connector-dot" id="simConnectorDot3"></div>
    </div>
  </div>

  <!-- APP UI SECTION -->
  <div class="scrub-section" id="scrubApp" style="height: 350vh;">
    <div class="scrub-sticky">
      <!-- Texts -->
      <div class="scrub-story-panel" id="appStory">
        <div class="scrub-step" data-start="0.0" data-end="0.30">
          <h3>1. Veri Kaynakları Birleşiyor</h3>
          <p>Yalnızca titreşim değil. OBD-II portundan motor beyninin okuduğu 'P0300 Ateşleme Arızası' verisi de eşzamanlı olarak sisteme çekilir.</p>
        </div>
        <div class="scrub-step" data-start="0.30" data-end="0.55">
          <h3>2. Predicto Yapay Zeka</h3>
          <p>Mekanik titreşim (Aks Eğriliği) ile yazılımsal kod (Ateşleme) Predicto çekirdeğinde harmanlanır. Yapay zeka, bu iki bağımsız sorunun birbirini tetiklediğini fark eder.</p>
        </div>
        <div class="scrub-step" data-start="0.55" data-end="1.0">
          <h3>3. Preditech App ile Kesin Çözüm</h3>
          <p>Tüm karmaşık hesaplamalar, sürücünün anlayacağı tek bir mobil ekrana dönüşür. Birden çok kritik arıza tek ekranda toplanır ve "Predicto ile Problemleri Çöz" diyerek teknik servise anında teşhis raporu gönderilir.</p>
        </div>
      </div>

      <!-- UI App -->
      <div class="scrub-visual-panel" style="display:flex; justify-content:center; align-items:center; position: relative;">
         
         <div class="flying-data left" id="flyOBD">
            <div class="data-source">ARAÇ BEYNİ</div>
            <div class="data-val"><i class="ph-fill ph-engine"></i> ATEŞLEME HATASI</div>
         </div>
         <div class="flying-data right" id="flyNVH">
            <div class="data-source">HİBRİT VERİ FÜZYONU</div>
            <div class="data-val"><i class="ph-fill ph-activity"></i> AKS EĞRİLİĞİ</div>
         </div>

         <!-- Predicto Core -->
         <div class="predicto-core" id="predictoCore">
            <div class="pc-ring ring-1"></div>
            <div class="pc-ring ring-2"></div>
            <div class="pc-ring ring-3"></div>
            <div class="pc-icon"><i class="ph-fill ph-brain"></i></div>
            <div class="pc-text">PREDICTO AI<br><span>VERİLER HARMANLANIYOR...</span></div>
         </div>

         <!-- App Mockup -->
         <div class="app-ui-mockup" id="appUiMockup">
            <div class="dynamic-island"></div>
            <div class="app-header">
               <i class="ph ph-caret-left"></i>
               <h2>Araç Sağlığı</h2>
               <div class="app-icons"><i class="ph-fill ph-bell"></i><div class="app-avatar"></div></div>
            </div>
            <div class="app-subtitle">Preditech Hybrid Data Fusion v2.1 ile aracınızın arızası oluşmadan yakalayın</div>
            <div class="app-chassis-img" style="background:#000;">
               <img src="/assets/images/devices/Araba%202.png" alt="Chassis" style="width: 100%; height: 100%; object-fit: contain; padding: 10px; box-sizing:border-box;">
            </div>
            <div class="app-status-legend">
               <span><div class="dot green"></div> Normal</span>
               <span><div class="dot yellow"></div> Dikkat</span>
               <span><div class="dot red"></div> Kritik</span>
            </div>
            <div class="app-status-title">Sistem Durumu</div>
            <div class="app-status-alert">Birden Çok Kritik Arıza Var</div>
            <div class="app-status-sub">PREDITECH HYBRID DATA FUSION V 2.1</div>
            
            <button class="app-btn-predict">
               <i class="ph-fill ph-chat-circle-dots"></i> Predicto İle Problemleri Çöz
            </button>
            <div class="app-actions">
               <button><i class="ph ph-share-network"></i> Paylaş</button>
               <button><i class="ph ph-file-pdf"></i> Kaydet</button>
            </div>
            
            <div class="app-card nvh-card">
               <div class="nvh-head"><span>NVH - Titreşim Spektrum</span><span class="badge">Canlı</span></div>
               <div class="nvh-graph">
                  <svg viewBox="0 0 6000 40" preserveAspectRatio="none" id="appNvhSvg" style="width: 300%; height: 100%; position: absolute; bottom: 0; left: 0; animation: waveScroll 2s infinite linear;">
                      <path id="appNvhPath" stroke="#FF4444" stroke-width="2" fill="none"/>
                  </svg>
               </div>
               <div class="nvh-labels"><span>-10 saniye</span><span>-5 saniye</span><span>Şu an</span></div>
            </div>

            <div class="app-row">
               <div class="app-card half">
                  <div class="card-icon red"><i class="ph-fill ph-engine"></i></div>
                  <div class="card-data">
                     <span class="label">Motor Sağlığı</span>
                     <span class="value red">72 %</span>
                     <div class="bar-bg"><div class="bar-fill red" id="motorBar"></div></div>
                  </div>
               </div>
               <div class="app-card half">
                  <div class="card-icon green"><i class="ph-fill ph-gear"></i></div>
                  <div class="card-data">
                     <span class="label">Şanzıman Sağlığı</span>
                     <span class="value green">92 %</span>
                     <div class="bar-bg"><div class="bar-fill green" id="sanzimanBar"></div></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
</div>








</section>


</section>



<!-- HOW IT WORKS (ANIMATED TIMELINE) -->
<section class="section" id="nasil-calisir" style="background:var(--surface2)">
<div class="pin-wrap">
<div class="container">
<div class="section-label reveal">NVH FÜZYONU NEDİR?</div>
<h2 class="reveal">Preditech Sadece Okumaz,<br><span>Hisseder.</span></h2>
<p class="subtitle reveal">Mekanik ve elektronik verilerin yapay zeka ile birleştirilmesi (Füzyon). Aşağı kaydırdıkça sürecin nasıl işlediğini inceleyin.</p>

<div class="pipeline-container">
<div class="pipeline-track"><div class="pipeline-progress"></div><div class="pipeline-dot"></div></div>
<div class="steps-grid">
  
<div class="step-card sporty-card">
<div class="step-icon" style="background:transparent; border:none; border-bottom: 1px solid rgba(255,255,255,0.1); border-radius:0; margin-bottom:16px; padding-bottom:16px;">
<div class="anim-layer"><div class="obd-codes"><span>P0301</span><span>U0100</span><span>B1000</span></div></div>
</div>
<h3 style="font-size:18px">1. OBD II Katmanı</h3>
<p>Aracın elektronik beyninden standart hata kodlarını çeker.</p>
<div class="step-tags"><span>CAN BUS</span></div>
</div>

<div class="step-card sporty-card">
<div class="step-icon" style="background:transparent; border:none; border-bottom: 1px solid rgba(255,255,255,0.1); border-radius:0; margin-bottom:16px; padding-bottom:16px;">
<div class="anim-layer"><div class="imu-wave"><svg><path d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10 T125,10 T150,10"></path></svg></div></div>
</div>
<h3 style="font-size:18px">2. Titreşim (IMU)</h3>
<p>Mekanik arıza başlangıçlarını 100Hz NVH sensörü ile hisseder.</p>
<div class="step-tags"><span>6 EKSEN</span></div>
</div>

<div class="step-card sporty-card">
<div class="step-icon" style="background:transparent; border:none; border-bottom: 1px solid rgba(255,255,255,0.1); border-radius:0; margin-bottom:16px; padding-bottom:16px;">
<div class="anim-layer"><div class="ai-nodes"><div class="ai-node"></div><div class="ai-node"></div><div class="ai-node"></div><div class="ai-node"></div><div class="ai-node"></div><div class="ai-node"></div></div></div>
</div>
<h3 style="font-size:18px">3. Predicto AI Füzyonu</h3>
<p>Fiziksel ve elektronik verileri yapay zeka ile çapraz analiz eder.</p>
<div class="step-tags"><span>NVH FÜZYONU</span></div>
</div>

<div class="step-card sporty-card">
<div class="step-icon" style="background:transparent; border:none; border-bottom: 1px solid rgba(255,255,255,0.1); border-radius:0; margin-bottom:16px; padding-bottom:16px;">
<div class="anim-layer"><div class="report-doc"></div></div>
</div>
<h3 style="font-size:18px">4. Proaktif Rapor</h3>
<p>Arıza tam olarak oluşmadan haftalar önce maliyet tahmini sunar.</p>
<div class="step-tags"><span>PROAKTİF UYARI</span></div>
</div>

</div>
</div>

</div>
</div>
</div>
</section>

<!-- FOOTER -->



` }} />
      
      <Script src="/js/teknoloji.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'teknolojijs']) window['init' + 'teknolojijs'](); }} />
    </>
  );
}
