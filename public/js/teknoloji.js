window.initteknolojijs = function() {
{



function genSine(amp, period, length, yOffset) {
  let d = 'M 0 ' + yOffset;
  for(let x=0; x<=length; x+=10) {
    let y = yOffset + amp * Math.sin((x/period)*2*Math.PI);
    d += ' L ' + x + ' ' + y;
  }
  return d;
}

function genMixed(amp1, p1, amp2, p2, amp3, p3, length, yOffset) {
  let d = 'M 0 ' + yOffset;
  for(let x=0; x<=length; x+=10) {
    let y = yOffset 
          + amp1 * Math.sin((x/p1)*2*Math.PI)
          + amp2 * Math.sin((x/p2)*2*Math.PI)
          + amp3 * Math.sin((x/p3)*2*Math.PI);
    d += ' L ' + x + ' ' + y;
  }
  return d;
}

const noiseData = [];
function genNoisyWithPeaks(length, yOffset) {
  const tempY = [];
  for(let x=0; x<=length; x+=25) {
    let base = yOffset + 30 * Math.sin((x/400)*2*Math.PI);
    let noise = (Math.random() * 80 - 40);
    tempY.push({x: x, base: base, y: base + noise, diff: noise});
  }
  
  let d = 'M 0 ' + yOffset;
  noiseData.length = 0;
  
  for(let i=0; i<tempY.length; i++) {
    d += ' L ' + tempY[i].x + ' ' + tempY[i].y;
    
    if(i > 0 && i < tempY.length - 1) {
       let prev = tempY[i-1].y;
       let curr = tempY[i].y;
       let next = tempY[i+1].y;
       
       let isMax = curr > prev && curr > next;
       let isMin = curr < prev && curr < next;
       
       if((isMax || isMin) && Math.abs(tempY[i].diff) > 10) {
          noiseData.push(tempY[i]);
       }
    }
  }
  return d;
}

const rawPath = document.getElementById('rawPath');
const highPath = document.getElementById('highPath');
const midPath = document.getElementById('midPath');
const lowPath = document.getElementById('lowPath');
if(rawPath) rawPath.setAttribute('d', genMixed(12, 400, 10, 200, 6, 100, 6000, 50));
if(highPath) highPath.setAttribute('d', genSine(15, 400, 6000, 20)); 
if(midPath) midPath.setAttribute('d', genSine(15, 200, 6000, 20));  
if(lowPath) lowPath.setAttribute('d', genSine(15, 100, 6000, 20));  

const kvRawPath = document.getElementById('kvRawPath');
const kvCleanPath = document.getElementById('kvCleanPath');
if(kvRawPath) kvRawPath.setAttribute('d', genNoisyWithPeaks(6000, 100));
if(kvCleanPath) kvCleanPath.setAttribute('d', genSine(30, 400, 6000, 100));

// App UI NVH Wave
const appNvhPath = document.getElementById('appNvhPath');
if(appNvhPath) appNvhPath.setAttribute('d', genMixed(8, 200, 5, 100, 3, 50, 6000, 20));

const errorBarsSvg = document.getElementById('errorBarsSvg');
const kvDashedPath = document.getElementById('kvDashedPath');
let dashedD = '';
if(errorBarsSvg) {
  errorBarsSvg.innerHTML = '';
  noiseData.forEach((pt, i) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', pt.x); 
    line.setAttribute('y1', pt.base);
    line.setAttribute('x2', pt.x);
    line.setAttribute('y2', pt.y);
    line.setAttribute('stroke', pt.diff > 0 ? '#FF4444' : '#00FF88');
    line.setAttribute('stroke-width', '4');
    line.setAttribute('stroke-linecap', 'round');
    line.setAttribute('class', 'kv-error-line');
    line.setAttribute('data-len', Math.abs(pt.diff));
    errorBarsSvg.appendChild(line);
    
    if (i === 0) dashedD += 'M ' + pt.x + ' ' + pt.y;
    else dashedD += ' L ' + pt.x + ' ' + pt.y;
  });
  if(kvDashedPath) kvDashedPath.setAttribute('d', dashedD);
}

const dbBg = document.getElementById('cineDbBg');
if(dbBg) {
  const shapes = ['50,0 100,100 0,100', '0,0 100,0 100,100 0,100', '20,0 80,0 100,100 0,100', '50,0 100,25 100,75 50,100 0,75 0,25'];
  dbBg.innerHTML = ''; 
  for(let i = 0; i < 15; i++) {
    const box = document.createElement('div');
    box.className = 'cine-db-shape';
    box.style.width = '80px';
    box.style.height = '80px';
    box.style.top = (Math.random() * 80 + 10) + '%';
    box.style.animationDuration = (Math.random() * 4 + 4) + 's';
    box.style.animationDelay = (Math.random() * 5) + 's';
    const shapeIdx = Math.floor(Math.random() * shapes.length);
    box.innerHTML = '<svg viewBox="0 0 100 100"><polygon points="' + shapes[shapeIdx] + '" /></svg>';
    dbBg.appendChild(box);
  }
}

const peaksContainer = document.getElementById('cinePeaks');
const linesSvg = document.getElementById('cineLinesSvg');
const dotCoords = [
  {x: 30, y: 10}, {x: 70, y: 10}, {x: 90, y: 30}, {x: 90, y: 70},
  {x: 70, y: 90}, {x: 30, y: 90}, {x: 10, y: 70}, {x: 10, y: 30},
];
if(peaksContainer && linesSvg) {
  peaksContainer.innerHTML = '';
  dotCoords.forEach(pos => {
    const dot = document.createElement('div');
    dot.className = 'cine-peak-dot';
    dot.style.left = pos.x + '%';
    dot.style.top = pos.y + '%';
    peaksContainer.appendChild(dot);
  });
  linesSvg.innerHTML = '';
  for (let i = 0; i < dotCoords.length; i++) {
    const from = dotCoords[i];
    const to = dotCoords[(i + 1) % dotCoords.length];
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', from.x + '%');
    line.setAttribute('y1', from.y + '%');
    line.setAttribute('x2', to.x + '%');
    line.setAttribute('y2', to.y + '%');
    linesSvg.appendChild(line);
  }
}

function clamp(val, min, max) { return Math.min(Math.max(val, min), max); }

const scrubKalman = document.getElementById('scrubKalman');
const scrubFusion = document.getElementById('scrubFusion');
const scrubApp = document.getElementById('scrubApp');

const kalmanSteps = document.querySelectorAll('#kalmanStory .scrub-step');
const fusionSteps = document.querySelectorAll('#fusionStory .scrub-step');
const appSteps = document.querySelectorAll('#appStory .scrub-step');

const filterBox = document.getElementById('kvFilterBox');
const cleanSignal = document.getElementById('kvCleanSignal');
const kResultBox = document.getElementById('kvResultBox');
const errorBarsGroup = document.getElementById('kvErrorBars');
const errorLines = document.querySelectorAll('.kv-error-line');

const kvRawSvg = document.getElementById('kvRawSvg');
const errorBarsSvgNode = document.getElementById('errorBarsSvg');
const kvCleanSvg = document.getElementById('kvCleanSvg');
const kvDashedSignal = document.getElementById('kvDashedSignal');
const kvDashedSvg = document.getElementById('kvDashedSvg');

const fusionVisuals = document.getElementById('cineVisuals');
const cineResult = document.getElementById('cineResult');
const waves = document.querySelectorAll('.cine-wave');
const cineLines = document.getElementById('cineLines');
const cineDots = document.querySelectorAll('.cine-peak-dot');

const flyOBD = document.getElementById('flyOBD');
const flyNVH = document.getElementById('flyNVH');
const predictoCore = document.getElementById('predictoCore');
const appUiMockup = document.getElementById('appUiMockup');
const motorBar = document.getElementById('motorBar');
const sanzimanBar = document.getElementById('sanzimanBar');

function render() {
  const scrollTop = window.scrollY;
  const wh = window.innerHeight;

  // 1. Kalman
  if (scrubKalman) {
    const rect = scrubKalman.getBoundingClientRect();
    let stickyP = -rect.top / (rect.height - wh);
    stickyP = clamp(stickyP, 0, 1);

    const transX = -(stickyP * 60) + '%'; 
    if(kvRawSvg) kvRawSvg.style.transform = 'translateX(' + transX + ')';
    if(errorBarsSvgNode) errorBarsSvgNode.style.transform = 'translateX(' + transX + ')';
    if(kvCleanSvg) kvCleanSvg.style.transform = 'translateX(' + transX + ')';
    if(kvDashedSvg) kvDashedSvg.style.transform = 'translateX(' + transX + ')';

    kalmanSteps.forEach(step => {
      const s = parseFloat(step.getAttribute('data-start'));
      const e = parseFloat(step.getAttribute('data-end'));
      if (stickyP >= s && stickyP < e) step.classList.add('active');
      else step.classList.remove('active');
    });

    if (stickyP < 0.05) {
      errorBarsGroup.style.opacity = '0';
      if(kvDashedSignal) kvDashedSignal.style.opacity = '0';
      filterBox.style.left = '-100px';
      cleanSignal.style.clipPath = 'inset(0 100% 0 0)';
      kResultBox.classList.remove('active');
      errorLines.forEach(l => l.style.strokeDasharray = '0 100');
    } else if (stickyP >= 0.05 && stickyP < 0.25) {
      errorBarsGroup.style.opacity = '1';
      filterBox.style.left = '-100px';
      cleanSignal.style.clipPath = 'inset(0 100% 0 0)';
      kResultBox.classList.remove('active');
      let subP = (stickyP - 0.05) / 0.20;
      errorLines.forEach(l => {
         let maxL = parseFloat(l.getAttribute('data-len'));
         l.style.strokeDasharray = (subP * maxL) + ' ' + maxL;
      });
      if(kvDashedSignal) kvDashedSignal.style.opacity = subP;
    } else if (stickyP >= 0.25 && stickyP < 0.80) {
      errorBarsGroup.style.opacity = '1';
      if(kvDashedSignal) kvDashedSignal.style.opacity = '1';
      kResultBox.classList.remove('active');
      errorLines.forEach(l => {
         let maxL = parseFloat(l.getAttribute('data-len'));
         l.style.strokeDasharray = maxL + ' ' + maxL;
      });

      let subP = (stickyP - 0.25) / 0.55;
      filterBox.style.left = (subP * 100) + '%';
      cleanSignal.style.clipPath = 'inset(0 ' + (100 - subP * 100) + '% 0 0)';
      
      errorLines.forEach(l => {
         let rawX = parseFloat(l.getAttribute('x1')) / 6000;
         let shiftedX = rawX * 3; 
         let visibleP = shiftedX - (stickyP * 0.60 * 3);
         if(visibleP < subP) l.style.opacity = '0';
         else l.style.opacity = '1';
      });
    } else if (stickyP >= 0.80) {
      errorBarsGroup.style.opacity = '0';
      if(kvDashedSignal) kvDashedSignal.style.opacity = '0';
      filterBox.style.left = '100%';
      cleanSignal.style.clipPath = 'inset(0 0 0 0)';
      if(stickyP > 0.85) kResultBox.classList.add('active');
      else kResultBox.classList.remove('active');
    }
  }

  // 2. Connector 1
  const simConnectorLine = document.getElementById('simConnectorLine');
  const simConnectorDot = document.getElementById('simConnectorDot');
  if(simConnectorLine && scrubKalman) {
    const rect = scrubKalman.getBoundingClientRect();
    if(rect.bottom < wh) {
       let p = (wh - rect.bottom) / (wh);
       p = clamp(p, 0, 1);
       simConnectorLine.style.height = (p * 100) + '%';
       simConnectorDot.style.top = (p * 100) + '%';
       simConnectorDot.style.opacity = p > 0.1 ? 1 : 0;
    } else {
       simConnectorLine.style.height = '0%';
       simConnectorDot.style.opacity = 0;
    }
  }

  // 3. Fusion Section
  if (scrubFusion) {
    const rect = scrubFusion.getBoundingClientRect();
    let stickyP = -rect.top / (rect.height - wh);
    stickyP = clamp(stickyP, 0, 1);

    fusionSteps.forEach(step => {
      const s = parseFloat(step.getAttribute('data-start'));
      const e = parseFloat(step.getAttribute('data-end'));
      if (stickyP >= s && stickyP < e) step.classList.add('active');
      else step.classList.remove('active');
    });

    if (fusionVisuals) {
      fusionVisuals.className = 'cine-visuals';
      waves.forEach(w => w.classList.remove('split'));
      cineDots.forEach(d => d.classList.remove('active'));
      if(cineLines) cineLines.classList.remove('active');
      if(cineResult) cineResult.classList.remove('active');

      if (stickyP < 0.10) fusionVisuals.classList.add('stage-1');
      else if (stickyP < 0.25) fusionVisuals.classList.add('stage-2');
      else if (stickyP < 0.45) {
        fusionVisuals.classList.add('stage-3');
        if((stickyP - 0.25) / 0.20 > 0.3) waves.forEach(w => w.classList.add('split'));
      } else if (stickyP < 0.65) {
        fusionVisuals.classList.add('stage-4a');
        let subP = (stickyP - 0.45) / 0.20;
        if(subP > 0.2) cineDots.forEach(d => d.classList.add('active'));
        if(subP > 0.6 && cineLines) cineLines.classList.add('active');
      } else if (stickyP < 0.85) fusionVisuals.classList.add('stage-5');
      else {
        fusionVisuals.classList.add('stage-6');
        if(stickyP > 0.9 && cineResult) cineResult.classList.add('active');
      }
    }
  }

  // 4. Connector 2
  const simConnectorLine2 = document.getElementById('simConnectorLine2');
  const simConnectorDot2 = document.getElementById('simConnectorDot2');
  if(simConnectorLine2 && scrubFusion) {
    const rect = scrubFusion.getBoundingClientRect();
    if(rect.bottom < wh) {
       let p = (wh - rect.bottom) / (wh);
       p = clamp(p, 0, 1);
       simConnectorLine2.style.height = (p * 100) + '%';
       simConnectorDot2.style.top = (p * 100) + '%';
       simConnectorDot2.style.opacity = p > 0.1 ? 1 : 0;
    } else {
       simConnectorLine2.style.height = '0%';
       simConnectorDot2.style.opacity = 0;
    }
  }

  // 4b. Topology Section
  const scrubTopology = document.getElementById('scrubTopology');
  if (scrubTopology) {
    const rect = scrubTopology.getBoundingClientRect();
    let stickyP = -rect.top / (rect.height - wh);
    stickyP = clamp(stickyP, 0, 1);

    const topologySteps = document.querySelectorAll('#topologyStory .scrub-step');
    topologySteps.forEach(step => {
      const s = parseFloat(step.getAttribute('data-start'));
      const e = parseFloat(step.getAttribute('data-end'));
      if (stickyP >= s && stickyP < e) step.classList.add('active');
      else step.classList.remove('active');
    });

    const topoWrapper = document.getElementById('topologyWrapper');
    const topoLines = document.querySelectorAll('#topoDrawSvg path');
    const topoRootText = document.getElementById('topoRootText');
    const topoRoot = document.querySelector('.topo-root');
    const topoFaultCodes = document.querySelectorAll('.topo-fault-code');
    
    // Get ECU nodes and their texts
    const rawEcuNodes = Array.from(document.querySelectorAll('.topo-success, .topo-danger'));
    const rawEcuTexts = Array.from(document.querySelectorAll('.node-text')).filter(n => n.id !== 'topoRootText');
    
    // Pair them up and associate fault codes
    let ecuItems = rawEcuNodes.map((node, i) => {
        let x = parseFloat(node.getAttribute('x'));
        let y = parseFloat(node.getAttribute('y'));
        let text = rawEcuTexts[i];
        
        let faultCode = null;
        topoFaultCodes.forEach(fc => {
            let fcX = parseFloat(fc.getAttribute('x'));
            let fcY = parseFloat(fc.getAttribute('y'));
            if (Math.abs(fcX - (x + 50)) < 10 && Math.abs(fcY - y) < 40) {
                faultCode = fc;
            }
        });
        
        return { node, text, faultCode, x, y };
    });

    // Sort left to right, top to bottom
    ecuItems.sort((a, b) => {
        if (Math.abs(a.x - b.x) < 10) return a.y - b.y;
        return a.x - b.x;
    });

    // Progression values
    let p1 = 0; if (stickyP > 0.10) p1 = (stickyP - 0.10) / 0.15;
    if (p1 > 1) p1 = 1; if (p1 < 0) p1 = 0;

    let p2 = 0; if (stickyP > 0.25) p2 = (stickyP - 0.25) / 0.25;
    if (p2 > 1) p2 = 1; if (p2 < 0) p2 = 0;

    let p3 = 0; if (stickyP > 0.50) p3 = (stickyP - 0.50) / 0.30;
    if (p3 > 1) p3 = 1; if (p3 < 0) p3 = 0;

    if (stickyP < 0.1) {
       topoWrapper.style.opacity = 0;
       topoWrapper.style.transform = 'scale(0.9)';
    } else {
       topoWrapper.style.opacity = 1;
       topoWrapper.style.transform = 'scale(1)';
    }

    // P1: Root node border & text
    topoRoot.style.strokeDashoffset = 1500 - (1500 * p1);
    if (p1 > 0.9) topoRoot.classList.add('active-color'); else topoRoot.classList.remove('active-color');
    topoRootText.style.opacity = p1 > 0.5 ? (p1 - 0.5) * 2 : 0;

    // P2: Lines & Individual ECU Nodes
    topoLines.forEach(line => { line.style.strokeDashoffset = 1500 - (1500 * p2); });
    
    ecuItems.forEach((item, idx) => {
        // Calculate start draw based on X coordinate along the bus
        let startP = (item.x - 160) / 600; 
        if (startP < 0) startP = 0;
        
        let localP = 0;
        if (p2 > startP) localP = (p2 - startP) / 0.15; 
        if (localP > 1) localP = 1;
        if (localP < 0) localP = 0;
        
        item.node.style.strokeDashoffset = 1500 - (1500 * localP);
        item.text.style.opacity = localP > 0.8 ? (localP - 0.8) * 5 : 0; 
        
        // P3: Coloring sequence
        let colorStart = idx / ecuItems.length;
        if (p3 > colorStart) {
            item.node.classList.add('active-color');
            if (item.faultCode) item.faultCode.style.opacity = 1;
        } else {
            item.node.classList.remove('active-color');
            if (item.faultCode) item.faultCode.style.opacity = 0;
        }
    });
  }

  // 4c. Connector 3
  const simConnectorLine3 = document.getElementById('simConnectorLine3');
  const simConnectorDot3 = document.getElementById('simConnectorDot3');
  if(simConnectorLine3 && scrubTopology) {
    const rect = scrubTopology.getBoundingClientRect();
    if(rect.bottom < wh) {
       let p = (wh - rect.bottom) / (wh);
       p = clamp(p, 0, 1);
       simConnectorLine3.style.height = (p * 100) + '%';
       simConnectorDot3.style.top = (p * 100) + '%';
       simConnectorDot3.style.opacity = p > 0.1 ? 1 : 0;
    } else {
       simConnectorLine3.style.height = '0%';
       simConnectorDot3.style.opacity = 0;
    }
  }

  // 5. App UI Detailed Scene
  if (scrubApp) {
    const rect = scrubApp.getBoundingClientRect();
    let stickyP = -rect.top / (rect.height - wh);
    stickyP = clamp(stickyP, 0, 1);

    appSteps.forEach(step => {
      const s = parseFloat(step.getAttribute('data-start'));
      const e = parseFloat(step.getAttribute('data-end'));
      if (stickyP >= s && stickyP < e) step.classList.add('active');
      else step.classList.remove('active');
    });

    if (stickyP < 0.10) {
       // Reset all
       if(flyOBD) flyOBD.style.opacity = 0;
       if(flyNVH) flyNVH.style.opacity = 0;
       if(predictoCore) predictoCore.style.opacity = 0;
       if(appUiMockup) appUiMockup.style.opacity = 0;
       if(motorBar) motorBar.style.width = '0%';
       if(sanzimanBar) sanzimanBar.style.width = '0%';
    } else if (stickyP >= 0.10 && stickyP < 0.35) {
       // Stage 1: Data comes in smoothly
       let sub = (stickyP - 0.10) / 0.25;
       if(flyOBD) {
          flyOBD.style.opacity = Math.min(1, sub * 3); // Smooth fade in
          flyOBD.style.top = (20 + sub * 25) + '%'; 
          flyOBD.style.left = (10 + sub * 25) + '%';
          flyOBD.style.transform = `scale(${1 - sub*0.3})`;
       }
       if(flyNVH) {
          flyNVH.style.opacity = Math.min(1, sub * 3); // Smooth fade in
          flyNVH.style.top = (20 + sub * 25) + '%';
          flyNVH.style.right = (10 + sub * 25) + '%';
          flyNVH.style.transform = `scale(${1 - sub*0.3})`;
       }
       if(predictoCore) {
          predictoCore.style.opacity = sub > 0.5 ? (sub-0.5)*2 : 0;
          predictoCore.style.transform = 'scale(1)';
          predictoCore.classList.remove('pulse');
       }
       if(appUiMockup) appUiMockup.style.opacity = 0;
    } else if (stickyP >= 0.35 && stickyP < 0.55) {
       // Stage 2: Processing in Predicto (Smooth transition)
       let pulseSub = (stickyP - 0.35) / 0.20;
       if(flyOBD) {
          flyOBD.style.opacity = Math.max(0, 1 - pulseSub * 3);
          flyOBD.style.top = '45%';
          flyOBD.style.left = '35%';
       }
       if(flyNVH) {
          flyNVH.style.opacity = Math.max(0, 1 - pulseSub * 3);
          flyNVH.style.top = '45%';
          flyNVH.style.right = '35%';
       }
       if(predictoCore) {
          predictoCore.style.opacity = 1;
          predictoCore.classList.add('pulse');
          predictoCore.style.transform = `scale(${1 + pulseSub*0.2})`; // Smooth scaling
       }
       if(appUiMockup) appUiMockup.style.opacity = 0;
    } else if (stickyP >= 0.55 && stickyP < 0.70) {
       // Stage 3: Core morphs into App
       let sub = (stickyP - 0.55) / 0.15;
       if(predictoCore) {
          predictoCore.style.opacity = 1 - sub;
          predictoCore.style.transform = `scale(${1.2 + sub*2})`; // Blows up
       }
       if(appUiMockup) {
          appUiMockup.style.opacity = sub;
          appUiMockup.style.transform = `scale(${0.8 + sub*0.2})`;
       }
       if(motorBar) motorBar.style.width = '0%';
       if(sanzimanBar) sanzimanBar.style.width = '0%';
    } else if (stickyP >= 0.70) {
       // Stage 4: App shows data
       if(predictoCore) predictoCore.style.opacity = 0;
       if(appUiMockup) {
          appUiMockup.style.opacity = 1;
          appUiMockup.style.transform = 'scale(1)';
       }
       let subP = (stickyP - 0.70) / 0.30;
       if(motorBar) motorBar.style.width = (subP * 72) + '%';
       if(sanzimanBar) sanzimanBar.style.width = (subP * 92) + '%';
    }
  }

  requestAnimationFrame(render);
}

requestAnimationFrame(render);


}

{

// Cinematic Animation Sequence
const visuals = document.getElementById('cineVisuals');
const peaksContainer = document.getElementById('cinePeaks');
const linesSvg = document.getElementById('cineLinesSvg');
const dbBg = document.getElementById('cineDbBg');
const resultText = document.getElementById('cineResult');
const storySteps = [
  document.getElementById('step1'),
  document.getElementById('step2'),
  document.getElementById('step3'),
  document.getElementById('step4'),
  document.getElementById('step5'),
  document.getElementById('step6')
];
const waves = document.querySelectorAll('.cine-wave');

// Generate Mathematically Perfect Sine Waves
const rawPath = document.getElementById('rawPath');
const highPath = document.getElementById('highPath');
const midPath = document.getElementById('midPath');
const lowPath = document.getElementById('lowPath');

function genSine(amp, period, length, yOffset) {
  let d = `M 0 ${yOffset}`;
  for(let x=0; x<=length; x+=10) {
    let y = yOffset + amp * Math.sin((x/period)*2*Math.PI);
    d += ` L ${x} ${y}`;
  }
  return d;
}

function genMixed(amp1, p1, amp2, p2, amp3, p3, length, yOffset) {
  let d = `M 0 ${yOffset}`;
  for(let x=0; x<=length; x+=10) {
    let y = yOffset 
          + amp1 * Math.sin((x/p1)*2*Math.PI)
          + amp2 * Math.sin((x/p2)*2*Math.PI)
          + amp3 * Math.sin((x/p3)*2*Math.PI);
    d += ` L ${x} ${y}`;
  }
  return d;
}

// Length: 6000 (3x container width), TranslateX: 33.333% (2000 units).
// Periods must perfectly divide 2000 to be seamless. 400, 200, 100 divide 2000 perfectly.
rawPath.setAttribute('d', genMixed(12, 400, 10, 200, 6, 100, 6000, 50));
highPath.setAttribute('d', genSine(15, 400, 6000, 20)); // Longest period
midPath.setAttribute('d', genSine(15, 200, 6000, 20));  // Mid period
lowPath.setAttribute('d', genSine(15, 100, 6000, 20));  // Shortest period

// Random DB Shapes
const shapes = [
  '50,0 100,100 0,100',           // Triangle
  '0,0 100,0 100,100 0,100',      // Rectangle
  '20,0 80,0 100,100 0,100',      // Trapezoid
  '50,0 100,25 100,75 50,100 0,75 0,25'  // Hexagon
];

dbBg.innerHTML = ''; // Clean up for loop
for(let i = 0; i < 15; i++) {
  const box = document.createElement('div');
  box.className = 'cine-db-shape';
  box.style.width = '80px';
  box.style.height = '80px';
  box.style.top = (Math.random() * 80 + 10) + '%';
  box.style.animationDuration = (Math.random() * 4 + 4) + 's';
  box.style.animationDelay = (Math.random() * 5) + 's';
  const shapeIdx = Math.floor(Math.random() * shapes.length);
  box.innerHTML = `<svg viewBox="0 0 100 100"><polygon points="${shapes[shapeIdx]}" /></svg>`;
  dbBg.appendChild(box);
}

// Fixed percentages for 400x400 square mapping
// Matches perfectly with SVG Polygon: 60,20 140,20 180,60 180,140 140,180 60,180 20,140 20,60 inside 200x200 viewBox
const dotCoords = [
  {x: 30, y: 10},
  {x: 70, y: 10},
  {x: 90, y: 30},
  {x: 90, y: 70},
  {x: 70, y: 90},
  {x: 30, y: 90},
  {x: 10, y: 70},
  {x: 10, y: 30},
];

peaksContainer.innerHTML = '';
dotCoords.forEach(pos => {
  const dot = document.createElement('div');
  dot.className = 'cine-peak-dot';
  dot.style.left = pos.x + '%';
  dot.style.top = pos.y + '%';
  peaksContainer.appendChild(dot);
});

// Draw lines
linesSvg.innerHTML = '';
for (let i = 0; i < dotCoords.length; i++) {
  const from = dotCoords[i];
  const to = dotCoords[(i + 1) % dotCoords.length];
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', from.x + '%');
  line.setAttribute('y1', from.y + '%');
  line.setAttribute('x2', to.x + '%');
  line.setAttribute('y2', to.y + '%');
  linesSvg.appendChild(line);
}

const sequence = [
  { time: 0,     class: 'stage-1',  step: 0 },
  { time: 3000,  class: 'stage-2',  step: 1 },
  { time: 6000,  class: 'stage-3',  step: 2, split: true },
  { time: 9000,  class: 'stage-3b', step: 2 },
  { time: 11000, class: 'stage-4a', step: 3 },
  { time: 13000, class: 'stage-4b', step: 3 },
  { time: 15000, class: 'stage-4c', step: 3 },
  { time: 17000, class: 'stage-5',  step: 4 },
  { time: 22000, class: 'stage-6',  step: 5 },
  { time: 28000, class: 'reset',    step: -1 }
];

function runSequence() {
  visuals.className = 'cine-visuals';
  resultText.classList.remove('active');
  waves.forEach(w => w.classList.remove('split'));
  document.querySelectorAll('.cine-peak-dot').forEach(d => d.classList.remove('active'));
  document.getElementById('cineLines').classList.remove('active');
  
  sequence.forEach(event => {
    setTimeout(() => {
      if (event.class === 'reset') {
        runSequence();
        return;
      }
      
      storySteps.forEach(s => s.classList.remove('active'));
      if(event.step >= 0) storySteps[event.step].classList.add('active');

      visuals.className = 'cine-visuals ' + event.class;
      
      if(event.split) {
        setTimeout(() => waves.forEach(w => w.classList.add('split')), 100);
      }
      
      if(event.class === 'stage-4a') {
        const dots = document.querySelectorAll('.cine-peak-dot');
        dots.forEach((d, i) => setTimeout(() => d.classList.add('active'), i * 80));
      }
      
      if(event.class === 'stage-4b') {
        document.getElementById('cineLines').classList.add('active');
      }

      if (event.class === 'stage-6') {
        setTimeout(() => resultText.classList.add('active'), 2000);
      }

    }, event.time);
  });
}

setTimeout(runSequence, 500);

}
};
