'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {

  useEffect(() => {
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
if(rawPath) if(rawPath) rawPath.setAttribute('d', genMixed(12, 400, 10, 200, 6, 100, 6000, 50));
if(highPath) if(highPath) highPath.setAttribute('d', genSine(15, 400, 6000, 20)); 
if(midPath) if(midPath) midPath.setAttribute('d', genSine(15, 200, 6000, 20));  
if(lowPath) if(lowPath) lowPath.setAttribute('d', genSine(15, 100, 6000, 20));  

const kvRawPath = document.getElementById('kvRawPath');
const kvCleanPath = document.getElementById('kvCleanPath');
if(kvRawPath) if(kvRawPath) kvRawPath.setAttribute('d', genNoisyWithPeaks(6000, 100));
if(kvCleanPath) if(kvCleanPath) kvCleanPath.setAttribute('d', genSine(30, 400, 6000, 100));

// App UI NVH Wave
const appNvhPath = document.getElementById('appNvhPath');
if(appNvhPath) if(appNvhPath) appNvhPath.setAttribute('d', genMixed(8, 200, 5, 100, 3, 50, 6000, 20));

const errorBarsSvg = document.getElementById('errorBarsSvg');
const kvDashedPath = document.getElementById('kvDashedPath');
let dashedD = '';
if(errorBarsSvg) {
  if(errorBarsSvg) errorBarsSvg.innerHTML = '';
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
  if(kvDashedPath) if(kvDashedPath) kvDashedPath.setAttribute('d', dashedD);
}

const dbBg = document.getElementById('cineDbBg');
if(dbBg) {
  const shapes = ['50,0 100,100 0,100', '0,0 100,0 100,100 0,100', '20,0 80,0 100,100 0,100', '50,0 100,25 100,75 50,100 0,75 0,25'];
  if(dbBg) dbBg.innerHTML = ''; 
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
  if(peaksContainer) peaksContainer.innerHTML = '';
  dotCoords.forEach(pos => {
    const dot = document.createElement('div');
    dot.className = 'cine-peak-dot';
    dot.style.left = pos.x + '%';
    dot.style.top = pos.y + '%';
    peaksContainer.appendChild(dot);
  });
  if(linesSvg) linesSvg.innerHTML = '';
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
      if(errorBarsGroup) errorBarsGroup.style.opacity = '0';
      if(kvDashedSignal) kvDashedSignal.style.opacity = '0';
      if(filterBox) filterBox.style.left = '-100px';
      if(cleanSignal) cleanSignal.style.clipPath = 'inset(0 100% 0 0)';
      kResultBox.classList.remove('active');
      errorLines.forEach(l => l.style.strokeDasharray = '0 100');
    } else if (stickyP >= 0.05 && stickyP < 0.25) {
      if(errorBarsGroup) errorBarsGroup.style.opacity = '1';
      if(filterBox) filterBox.style.left = '-100px';
      if(cleanSignal) cleanSignal.style.clipPath = 'inset(0 100% 0 0)';
      kResultBox.classList.remove('active');
      let subP = (stickyP - 0.05) / 0.20;
      errorLines.forEach(l => {
         let maxL = parseFloat(l.getAttribute('data-len'));
         l.style.strokeDasharray = (subP * maxL) + ' ' + maxL;
      });
      if(kvDashedSignal) kvDashedSignal.style.opacity = subP;
    } else if (stickyP >= 0.25 && stickyP < 0.80) {
      if(errorBarsGroup) errorBarsGroup.style.opacity = '1';
      if(kvDashedSignal) kvDashedSignal.style.opacity = '1';
      kResultBox.classList.remove('active');
      errorLines.forEach(l => {
         let maxL = parseFloat(l.getAttribute('data-len'));
         l.style.strokeDasharray = maxL + ' ' + maxL;
      });

      let subP = (stickyP - 0.25) / 0.55;
      if(filterBox) filterBox.style.left = (subP * 100) + '%';
      if(cleanSignal) cleanSignal.style.clipPath = 'inset(0 ' + (100 - subP * 100) + '% 0 0)';
      
      errorLines.forEach(l => {
         let rawX = parseFloat(l.getAttribute('x1')) / 6000;
         let shiftedX = rawX * 3; 
         let visibleP = shiftedX - (stickyP * 0.60 * 3);
         if(visibleP < subP) l.style.opacity = '0';
         else l.style.opacity = '1';
      });
    } else if (stickyP >= 0.80) {
      if(errorBarsGroup) errorBarsGroup.style.opacity = '0';
      if(kvDashedSignal) kvDashedSignal.style.opacity = '0';
      if(filterBox) filterBox.style.left = '100%';
      if(cleanSignal) cleanSignal.style.clipPath = 'inset(0 0 0 0)';
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
        
        if(item.node) item.node.style.strokeDashoffset = 1500 - (1500 * localP);
        if(item.text) item.text.style.opacity = localP > 0.8 ? (localP - 0.8) * 5 : 0; 
        
        // P3: Coloring sequence
        let colorStart = idx / ecuItems.length;
        if (p3 > colorStart) {
            if(item.node) item.node.classList.add('active-color');
            if (item.faultCode) item.faultCode.style.opacity = 1;
        } else {
            if(item.node) item.node.classList.remove('active-color');
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
if(rawPath) rawPath.setAttribute('d', genMixed(12, 400, 10, 200, 6, 100, 6000, 50));
if(highPath) highPath.setAttribute('d', genSine(15, 400, 6000, 20)); // Longest period
if(midPath) midPath.setAttribute('d', genSine(15, 200, 6000, 20));  // Mid period
if(lowPath) lowPath.setAttribute('d', genSine(15, 100, 6000, 20));  // Shortest period

// Random DB Shapes
const shapes = [
  '50,0 100,100 0,100',           // Triangle
  '0,0 100,0 100,100 0,100',      // Rectangle
  '20,0 80,0 100,100 0,100',      // Trapezoid
  '50,0 100,25 100,75 50,100 0,75 0,25'  // Hexagon
];

if(dbBg) dbBg.innerHTML = ''; // Clean up for loop={true}
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

if(peaksContainer) peaksContainer.innerHTML = '';
dotCoords.forEach(pos => {
  const dot = document.createElement('div');
  dot.className = 'cine-peak-dot';
  dot.style.left = pos.x + '%';
  dot.style.top = pos.y + '%';
  peaksContainer.appendChild(dot);
});

// Draw lines
if(linesSvg) linesSvg.innerHTML = '';
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
  if(visuals) visuals.className = 'cine-visuals';
  if(resultText) resultText.classList.remove('active');
  waves.forEach(w => w.classList.remove('split'));
  document.querySelectorAll('.cine-peak-dot').forEach(d => d.classList.remove('active'));
  document.getElementById('cineLines').classList.remove('active');
  
  sequence.forEach(event => {
    setTimeout(() => {
      if (event.class === 'reset') {
        runSequence();
        return;
      }
      
      storySteps.forEach(s => { if(s) s.classList.remove('active'); });
      if(event.step >= 0) if(storySteps[event.step]) storySteps[event.step].classList.add('active');

      if(visuals) visuals.className = 'cine-visuals ' + event.class;
      
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
        setTimeout(() => { if(resultText) resultText.classList.add('active'); }, 2000);
      }

    }, event.time);
  });
}

setTimeout(runSequence, 500);

    }
  }, []);

  return (
    <>


<div className="page-header" style={{ paddingTop: '120px', paddingBottom: '40px',  }}>
<div className="particles"></div>
<div className="container">
<div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px',  }}>GİZLİ SİLAHIMIZ</div>
<h1 style={{ fontSize: 'clamp(32px,4vw,64px)',  }}>Sadece Okumaz,<br /><span>Analiz Eder.</span></h1>
<p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto',  }}>Sektörde daha önce yapılmamış olanı yaptık: Dijital arıza kodları (OBD) ile fiziksel titreşim verilerini (IMU) yapay zeka ile aynı potada erittik.</p>
</div>
</div>

<section className="section" style={{ paddingTop: '0',  }}>
<div className="container">




<div className="scrub-master-container">

  
  <div className="scrub-section" id="scrubKalman">
    <div className="scrub-sticky">
      
      <div className="scrub-story-panel" id="kalmanStory">
        <div className="scrub-step" data-start="0" data-end="0.05">
          <h3>1. Ham Sensör Gürültüsü</h3>
          <p>Fiziksel ortamda sensörlerden gelen ham veriler, motorun doğal titreşimleri ve yoldaki engeller yüzünden gürültülüdür (Noisy Data).</p>
        </div>
        <div className="scrub-step" data-start="0.05" data-end="0.25">
          <h3>2. Hata Sapmalarının Ölçümü</h3>
          <p>Sistem gürültünün karakteristiğini analiz eder. İdeal dalga ekseninden ne kadar sapma (artı/eksi varyans) olduğu milisaniyeler içinde haritalanır.</p>
        </div>
        <div className="scrub-step" data-start="0.25" data-end="0.55">
          <h3>3. Kalman Tahmini Devrede</h3>
          <p>Preditech, veriyi doğrudan işlemez. Önce Kalman Filtresi ile matematiksel bir tahmin yürütür ve anlık gürültülerin filtrelenmesine başlanır.</p>
        </div>
        <div className="scrub-step" data-start="0.55" data-end="0.80">
          <h3>4. Gürültü Optimizasyonu</h3>
          <p>Filtre tüm veri setini tarayarak kaotik sıçramaları iptal eder ve temiz bir frekans dalgası oluşturur.</p>
        </div>
        <div className="scrub-step" data-start="0.80" data-end="1.0">
          <h3>5. Kusursuz Çıktı</h3>
          <p>Filtreden geçen veri, yapay zekanın işleyebileceği kadar pürüzsüz ve nettir. Hata payı sıfıra yaklaşır.</p>
        </div>
      </div>

      <div className="scrub-visual-panel">
        <div className="kalman-visuals" id="kalmanVisuals">
           <div className="kv-raw-signal">
              <svg viewBox="0 0 6000 200" preserveAspectRatio="none" id="kvRawSvg" style={{ width: '300%', height: '100%', position: 'absolute', left: '0',  }}>
                 <path id="kvRawPath" stroke="rgba(255,68,68,0.8)" strokeWidth="3" fill="none" />
              </svg>
           </div>
           
           <div className="kv-error-bars" id="kvErrorBars" style={{ position: 'absolute', top: '50%', left: '0', width: '100%', height: '200px', transform: 'translateY(-50%)', opacity: '0',  }}>
              <svg viewBox="0 0 6000 200" preserveAspectRatio="none" id="errorBarsSvg" style={{ width: '300%', height: '100%', position: 'absolute', left: '0',  }}></svg>
           </div>

           
           <div className="kv-dashed-signal" id="kvDashedSignal" style={{ position: 'absolute', top: '50%', left: '0', width: '100%', height: '200px', transform: 'translateY(-50%)', opacity: '0',  }}>
              <svg viewBox="0 0 6000 200" preserveAspectRatio="none" id="kvDashedSvg" style={{ width: '300%', height: '100%', position: 'absolute', left: '0',  }}>
                 <path id="kvDashedPath" stroke="#00FF88" strokeDasharray="10 10" strokeWidth="2" fill="none" opacity="0.6"/>
              </svg>
           </div>

           <div className="kv-filter-box" id="kvFilterBox"></div>
           <div className="kv-clean-signal" id="kvCleanSignal">
              <svg viewBox="0 0 6000 200" preserveAspectRatio="none" id="kvCleanSvg" style={{ width: '300%', height: '100%', position: 'absolute', left: '0',  }}>
                 <path id="kvCleanPath" stroke="#00FF88" strokeWidth="4" fill="none" />
              </svg>
           </div>
           <div className="kv-result-box" id="kvResultBox">DÜZELTİLMİŞ VERİ</div>
        </div>
      </div>

    </div>
  </div>

  
  <div className="sim-connector-wrapper">
    <div className="sim-connector">
        <div className="sim-connector-line" id="simConnectorLine"></div>
        <div className="sim-connector-dot" id="simConnectorDot"></div>
    </div>
  </div>

  
  <div className="scrub-section" id="scrubFusion">
    <div className="scrub-sticky">

      
      <div className="scrub-story-panel" id="fusionStory">
        <div className="scrub-step" data-start="0" data-end="0.10">
          <h3>1. Sihir Başlıyor</h3>
          <p>Preditech, aracınızı sadece dinlemez; karmaşık sarsıntıları dijital bir parmak izine dönüştüren matematiksel bir sihir numarası yapar.</p>
        </div>
        <div className="scrub-step" data-start="0.10" data-end="0.25">
          <h3>2. FFT Prizması</h3>
          <p>Bu karmaşık ve gürültülü titreşim dalgasını anlamlandırmak için FFT (Hızlı Fourier Dönüşümü) algoritmasını kullanırız.</p>
        </div>
        <div className="scrub-step" data-start="0.25" data-end="0.45">
          <h3>3. Frekanslara Bölünme</h3>
          <p>FFT bir prizma gibidir. Kaotik sarsıntıyı alır ve en saf frekans boyutlarına (X, Y, Z eksenleri) böler.</p>
        </div>
        <div className="scrub-step" data-start="0.45" data-end="0.65">
          <h3>4. Arıza Parmak İzi Oluşturuldu</h3>
          <p>Tüm veriyi saklamayız. Arka plan gürültüsünü siler, yalnızca en şiddetli frekans tepe noktalarını (pik) seçerek arızaya özel geometrik bir parmak izi oluştururuz.</p>
        </div>
        <div className="scrub-step" data-start="0.65" data-end="0.85">
          <h3>5. Veritabanı Taraması</h3>
          <p>Sistem bu parmak izini, bilinen milyonlarca arıza kaydının bulunduğu devasa bir veritabanı üzerinde kaydırır.</p>
        </div>
        <div className="scrub-step" data-start="0.85" data-end="1.0">
          <h3>6. Kusursuz Eşleşme</h3>
          <p>Biz sesi değil, sadece 'geometriyi' eşleştiririz. Şekiller kusursuz oturduğunda... BOOM! Arızanın kaynağını kesin olarak bulduk.</p>
        </div>
      </div>

      
      <div className="scrub-visual-panel">
        <div className="cine-visuals" id="cineVisuals">
          <div className="cine-raw-graph">
            <svg className="scroll-svg-raw" viewBox="0 0 6000 100" preserveAspectRatio="none">
              <path id="rawPath" stroke="var(--accent)" strokeWidth="3" fill="none" />
            </svg>
          </div>
          <div className="cine-fft-formula" style={{ fontFamily: '\'Times New Roman\', Times, serif', fontStyle: 'italic', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',  }}>
  <span>X[k] = </span>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1', fontSize: '16px', margin: '0 4px',  }}>
    <span style={{ fontSize: '14px',  }}>N-1</span>
    <span style={{ fontSize: '40px', fontStyle: 'normal', margin: '-4px 0',  }}>&sum;</span>
    <span style={{ fontSize: '14px',  }}>n=0</span>
  </div>
  <span style={{ display: 'flex', alignItems: 'center',  }}>
    x[n]e
    <sup style={{ fontSize: '18px', marginLeft: '2px', display: 'flex', alignItems: 'center',  }}>
      -i2&pi;
      <span style={{ display: 'inline-flex', flexDirection: 'column', textAlign: 'center', fontSize: '14px', marginLeft: '4px', lineHeight: '1.2',  }}>
        <span style={{ borderBottom: '1px solid #fff', padding: '0 2px',  }}>kn</span>
        <span style={{ padding: '0 2px',  }}>N</span>
      </span>
    </sup>
  </span>
</div>
          <div className="cine-split-container">
            <div className="cine-wave high">
              <div className="cine-wave-xaxis"></div>
              <div className="cine-wave-label">X</div>
              <svg className="scroll-svg-split" viewBox="0 0 6000 40" preserveAspectRatio="none">
                <path id="highPath" stroke="#FF4444" strokeWidth="2.5" fill="none" />
              </svg>
            </div>
            <div className="cine-wave mid">
              <div className="cine-wave-xaxis"></div>
              <div className="cine-wave-label">Y</div>
              <svg className="scroll-svg-split" viewBox="0 0 6000 40" preserveAspectRatio="none">
                <path id="midPath" stroke="#00FF88" strokeWidth="2.5" fill="none" />
              </svg>
            </div>
            <div className="cine-wave low">
              <div className="cine-wave-xaxis"></div>
              <div className="cine-wave-label">Z</div>
              <svg className="scroll-svg-split" viewBox="0 0 6000 40" preserveAspectRatio="none">
                <path id="lowPath" stroke="#3388FF" strokeWidth="2.5" fill="none" />
              </svg>
            </div>
          </div>
          <div className="cine-db-bg" id="cineDbBg"></div>
          <div className="cine-square-container">
            <div className="cine-xygraph">
              <svg width="100%" height="100%">
                <line x1="0" y1="10%" x2="100%" y2="10%" />
                <line x1="0" y1="30%" x2="100%" y2="30%" />
                <line x1="0" y1="50%" x2="100%" y2="50%" className="axis" />
                <line x1="0" y1="70%" x2="100%" y2="70%" />
                <line x1="0" y1="90%" x2="100%" y2="90%" />
                <line x1="10%" y1="0" x2="10%" y2="100%" />
                <line x1="30%" y1="0" x2="30%" y2="100%" />
                <line x1="50%" y1="0" x2="50%" y2="100%" className="axis" />
                <line x1="70%" y1="0" x2="70%" y2="100%" />
                <line x1="90%" y1="0" x2="90%" y2="100%" />
              </svg>
            </div>
            <div className="cine-peaks" id="cinePeaks"></div>
            <div className="cine-fingerprint-lines" id="cineLines">
              <svg width="100%" height="100%" id="cineLinesSvg"></svg>
            </div>
            <div className="cine-octagon" id="cineOctagon">
              <svg viewBox="0 0 200 200" preserveAspectRatio="none">
                <polygon points="60,20 140,20 180,60 180,140 140,180 60,180 20,140 20,60" />
              </svg>
            </div>
            <div className="cine-db-match-octagon" id="dbMatchOctagon">
              <svg viewBox="0 0 200 200" preserveAspectRatio="none">
                <polygon points="60,20 140,20 180,60 180,140 140,180 60,180 20,140 20,60" />
              </svg>
            </div>
          </div>
          <div className="cine-result" id="cineResult">ARIZA TESPİT EDİLDİ: AKS EĞRİLİĞİ</div>
        </div>
      </div>

    </div>
  </div>


  
  
  <div className="sim-connector-wrapper">
    <div className="sim-connector">
        <div className="sim-connector-line" id="simConnectorLine2"></div>
        <div className="sim-connector-dot" id="simConnectorDot2"></div>
    </div>
  </div>

  
  
  <div className="sim-connector-wrapper">
    <div className="sim-connector">
        <div className="sim-connector-line" id="simConnectorLine2"></div>
        <div className="sim-connector-dot" id="simConnectorDot2"></div>
    </div>
  </div>

  
  <div className="scrub-section" id="scrubTopology" style={{ height: '300vh',  }}>
    <div className="scrub-sticky">
      
      <div className="scrub-story-panel" id="topologyStory">
        <div className="scrub-step" data-start="0.0" data-end="0.25">
          <h3>1. Canlı Tarama</h3>
          <p>Preditech, OBD portundan araca bağlandığı an sistemleri uyanır. Sadece hata kodlarını okumakla kalmaz, tüm iletişim ağlarına entegre olur.</p>
        </div>
        <div className="scrub-step" data-start="0.25" data-end="0.50">
          <h3>2. Sinyal Gönderimi</h3>
          <p>Araç üzerindeki beyinleri keşfetmek için H-CAN, MS-CAN ve K-Line hatları üzerinden özel sorgu paketleri yollanır.</p>
        </div>
        <div className="scrub-step" data-start="0.50" data-end="1.0">
          <h3>3. Hata Tespiti</h3>
          <p>Bütün modüller taranır. Sağlıklı çalışan donanımlar yeşil yanıt verirken, P0300 Ateşleme Hatası barındıran Motor Beyni (PCM) ve hata içeren diğer beyinler anında kırmızı olarak işaretlenir.</p>
        </div>
      </div>

      
      <div className="scrub-visual-panel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative',  }}>
        <div className="topology-wrapper" id="topologyWrapper" style={{ width: '100%', maxWidth: '850px', opacity: '0', transform: 'scale(0.9)', transition: 'all 0.5s ease',  }}>
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
          <svg width="100%" viewBox="0 0 850 500" id="topoDrawSvg">
            
            <rect x="20" y="230" width="120" height="40" className="node-rect topo-root" strokeWidth="2" rx="8" />
            <text x="80" y="250" className="node-text" style={{ fontSize: '15px', fill: '#00FF88', opacity: '0', transition: 'opacity 0.5s',  }} id="topoRootText">PREDITECH</text>
            
            
            <path d="M 140,250 L 160,250" style={{ stroke: '#fff', strokeWidth: '2', fill: 'none',  }} />
            <path d="M 160,250 L 160,100 L 760,100" style={{ stroke: '#FF4444', strokeWidth: '2.5', fill: 'none',  }} />
            <path d="M 160,250 L 760,250" style={{ stroke: '#2196F3', strokeWidth: '2.5', fill: 'none',  }} />
            <path d="M 160,250 L 160,400 L 760,400" style={{ stroke: '#FF9800', strokeWidth: '2.5', fill: 'none',  }} />

            
            <g>
              <path style={{ stroke: '#FF4444', strokeWidth: '2', fill: 'none',  }} d="M 250,100 L 250,80" />
              <rect x="200" y="40" width="100" height="40" className="node-rect topo-danger" strokeWidth="2" rx="8" />
              <text x="250" y="60" className="node-text" style={{ opacity: '0',  }}>PCM</text>
              <text x="250" y="30" style={{ fill: '#FF4444', fontSize: '11px', textAnchor: 'middle', fontWeight: '800', opacity: '0', transition: 'opacity 0.5s',  }} className="topo-fault-code">P0300 ATEŞLEME</text>
              
              <path style={{ stroke: '#FF4444', strokeWidth: '2', fill: 'none',  }} d="M 400,100 L 400,80" />
              <rect x="350" y="40" width="100" height="40" className="node-rect topo-success" strokeWidth="2" rx="8" />
              <text x="400" y="60" className="node-text" style={{ opacity: '0',  }}>ABS</text>
              
              <path style={{ stroke: '#FF4444', strokeWidth: '2', fill: 'none',  }} d="M 550,100 L 550,80" />
              <rect x="500" y="40" width="100" height="40" className="node-rect topo-success" strokeWidth="2" rx="8" />
              <text x="550" y="60" className="node-text" style={{ opacity: '0',  }}>BCM</text>
              
              <path style={{ stroke: '#FF4444', strokeWidth: '2', fill: 'none',  }} d="M 700,100 L 700,80" />
              <rect x="650" y="40" width="100" height="40" className="node-rect topo-success" strokeWidth="2" rx="8" />
              <text x="700" y="60" className="node-text" style={{ opacity: '0',  }}>APIM</text>
              
              <path style={{ stroke: '#FF4444', strokeWidth: '2', fill: 'none',  }} d="M 325,100 L 325,120" />
              <rect x="275" y="120" width="100" height="40" className="node-rect topo-success" strokeWidth="2" rx="8" />
              <text x="325" y="140" className="node-text" style={{ opacity: '0',  }}>TCM</text>
            </g>

            
            <g>
              <path style={{ stroke: '#2196F3', strokeWidth: '2', fill: 'none',  }} d="M 250,250 L 250,230" />
              <rect x="200" y="190" width="100" height="40" className="node-rect topo-success" strokeWidth="2" rx="8" />
              <text x="250" y="210" className="node-text" style={{ opacity: '0',  }}>PAM</text>
              
              <path style={{ stroke: '#2196F3', strokeWidth: '2', fill: 'none',  }} d="M 400,250 L 400,230" />
              <rect x="350" y="190" width="100" height="40" className="node-rect topo-success" strokeWidth="2" rx="8" />
              <text x="400" y="210" className="node-text" style={{ opacity: '0',  }}>DDM</text>
              
              <path style={{ stroke: '#2196F3', strokeWidth: '2', fill: 'none',  }} d="M 550,250 L 550,230" />
              <rect x="500" y="190" width="100" height="40" className="node-rect topo-success" strokeWidth="2" rx="8" />
              <text x="550" y="210" className="node-text" style={{ opacity: '0',  }}>DSP</text>
              
              <path style={{ stroke: '#2196F3', strokeWidth: '2', fill: 'none',  }} d="M 700,250 L 700,230" />
              <rect x="650" y="190" width="100" height="40" className="node-rect topo-success" strokeWidth="2" rx="8" />
              <text x="700" y="210" className="node-text" style={{ opacity: '0',  }}>FCIM</text>
            </g>

            
            <g>
              <path style={{ stroke: '#FF9800', strokeWidth: '2', fill: 'none',  }} d="M 250,400 L 250,380" />
              <rect x="200" y="340" width="100" height="40" className="node-rect topo-success" strokeWidth="2" rx="8" />
              <text x="250" y="360" className="node-text" style={{ opacity: '0',  }}>GPSM</text>
              
              <path style={{ stroke: '#FF9800', strokeWidth: '2', fill: 'none',  }} d="M 400,400 L 400,380" />
              <rect x="350" y="340" width="100" height="40" className="node-rect topo-success" strokeWidth="2" rx="8" />
              <text x="400" y="360" className="node-text" style={{ opacity: '0',  }}>RTM</text>
              
              <path style={{ stroke: '#FF9800', strokeWidth: '2', fill: 'none',  }} d="M 550,400 L 550,380" />
              <rect x="500" y="340" width="100" height="40" className="node-rect topo-danger" strokeWidth="2" rx="8" />
              <text x="550" y="360" className="node-text" style={{ opacity: '0',  }}>LDWS</text>
              <text x="550" y="330" style={{ fill: '#FF4444', fontSize: '11px', textAnchor: 'middle', fontWeight: '800', opacity: '0', transition: 'opacity 0.5s',  }} className="topo-fault-code">C1014 ABS</text>
              
              <path style={{ stroke: '#FF9800', strokeWidth: '2', fill: 'none',  }} d="M 325,400 L 325,420" />
              <rect x="275" y="420" width="100" height="40" className="node-rect topo-success" strokeWidth="2" rx="8" />
              <text x="325" y="440" className="node-text" style={{ opacity: '0',  }}>SCCM</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>

  
  <div className="sim-connector-wrapper">
    <div className="sim-connector">
        <div className="sim-connector-line" id="simConnectorLine3"></div>
        <div className="sim-connector-dot" id="simConnectorDot3"></div>
    </div>
  </div>

  
  <div className="scrub-section" id="scrubApp" style={{ height: '350vh',  }}>
    <div className="scrub-sticky">
      
      <div className="scrub-story-panel" id="appStory">
        <div className="scrub-step" data-start="0.0" data-end="0.30">
          <h3>1. Veri Kaynakları Birleşiyor</h3>
          <p>Yalnızca titreşim değil. OBD-II portundan motor beyninin okuduğu 'P0300 Ateşleme Arızası' verisi de eşzamanlı olarak sisteme çekilir.</p>
        </div>
        <div className="scrub-step" data-start="0.30" data-end="0.55">
          <h3>2. Predicto Yapay Zeka</h3>
          <p>Mekanik titreşim (Aks Eğriliği) ile yazılımsal kod (Ateşleme) Predicto çekirdeğinde harmanlanır. Yapay zeka, bu iki bağımsız sorunun birbirini tetiklediğini fark eder.</p>
        </div>
        <div className="scrub-step" data-start="0.55" data-end="1.0">
          <h3>3. Preditech App ile Kesin Çözüm</h3>
          <p>Tüm karmaşık hesaplamalar, sürücünün anlayacağı tek bir mobil ekrana dönüşür. Birden çok kritik arıza tek ekranda toplanır ve "Predicto ile Problemleri Çöz" diyerek teknik servise anında teşhis raporu gönderilir.</p>
        </div>
      </div>

      
      <div className="scrub-visual-panel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative',  }}>
         
         <div className="flying-data left" id="flyOBD">
            <div className="data-source">ARAÇ BEYNİ</div>
            <div className="data-val"><i className="ph-fill ph-engine"></i> ATEŞLEME HATASI</div>
         </div>
         <div className="flying-data right" id="flyNVH">
            <div className="data-source">HİBRİT VERİ FÜZYONU</div>
            <div className="data-val"><i className="ph-fill ph-activity"></i> AKS EĞRİLİĞİ</div>
         </div>

         
         <div className="predicto-core" id="predictoCore">
            <div className="pc-ring ring-1"></div>
            <div className="pc-ring ring-2"></div>
            <div className="pc-ring ring-3"></div>
            <div className="pc-icon"><i className="ph-fill ph-brain"></i></div>
            <div className="pc-text">PREDICTO AI<br /><span>VERİLER HARMANLANIYOR...</span></div>
         </div>

         
         <div className="app-ui-mockup" id="appUiMockup">
            <div className="dynamic-island"></div>
            <div className="app-header">
               <i className="ph ph-caret-left"></i>
               <h2>Araç Sağlığı</h2>
               <div className="app-icons"><i className="ph-fill ph-bell"></i><div className="app-avatar"></div></div>
            </div>
            <div className="app-subtitle">Preditech Hybrid Data Fusion v2.1 ile aracınızın arızası oluşmadan yakalayın</div>
            <div className="app-chassis-img" style={{ background: '#000',  }}>
               <img src="/assets/images/devices/Araba%202.png" alt="Chassis" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px', boxSizing: 'border-box',  }} />
            </div>
            <div className="app-status-legend">
               <span><div className="dot green"></div> Normal</span>
               <span><div className="dot yellow"></div> Dikkat</span>
               <span><div className="dot red"></div> Kritik</span>
            </div>
            <div className="app-status-title">Sistem Durumu</div>
            <div className="app-status-alert">Birden Çok Kritik Arıza Var</div>
            <div className="app-status-sub">PREDITECH HYBRID DATA FUSION V 2.1</div>
            
            <button className="app-btn-predict">
               <i className="ph-fill ph-chat-circle-dots"></i> Predicto İle Problemleri Çöz
            </button>
            <div className="app-actions">
               <button><i className="ph ph-share-network"></i> Paylaş</button>
               <button><i className="ph ph-file-pdf"></i> Kaydet</button>
            </div>
            
            <div className="app-card nvh-card">
               <div className="nvh-head"><span>NVH - Titreşim Spektrum</span><span className="badge">Canlı</span></div>
               <div className="nvh-graph">
                  <svg viewBox="0 0 6000 40" preserveAspectRatio="none" id="appNvhSvg" style={{ width: '300%', height: '100%', position: 'absolute', bottom: '0', left: '0', animation: 'waveScroll 2s infinite linear',  }}>
                      <path id="appNvhPath" stroke="#FF4444" strokeWidth="2" fill="none"/>
                  </svg>
               </div>
               <div className="nvh-labels"><span>-10 saniye</span><span>-5 saniye</span><span>Şu an</span></div>
            </div>

            <div className="app-row">
               <div className="app-card half">
                  <div className="card-icon red"><i className="ph-fill ph-engine"></i></div>
                  <div className="card-data">
                     <span className="label">Motor Sağlığı</span>
                     <span className="value red">72 %</span>
                     <div className="bar-bg"><div className="bar-fill red" id="motorBar"></div></div>
                  </div>
               </div>
               <div className="app-card half">
                  <div className="card-icon green"><i className="ph-fill ph-gear"></i></div>
                  <div className="card-data">
                     <span className="label">Şanzıman Sağlığı</span>
                     <span className="value green">92 %</span>
                     <div className="bar-bg"><div className="bar-fill green" id="sanzimanBar"></div></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
</div>








</div>
</section>




<section className="section" id="nasil-calisir" style={{ background: 'var(--surface2)',  }}>
<div className="pin-wrap">
<div className="container">
<div className="section-label reveal">NVH FÜZYONU NEDİR?</div>
<h2 className="reveal">Preditech Sadece Okumaz,<br /><span>Hisseder.</span></h2>
<p className="subtitle reveal">Mekanik ve elektronik verilerin yapay zeka ile birleştirilmesi (Füzyon). Aşağı kaydırdıkça sürecin nasıl işlediğini inceleyin.</p>

<div className="pipeline-container">
<div className="pipeline-track"><div className="pipeline-progress"></div><div className="pipeline-dot"></div></div>
<div className="steps-grid">
  
<div className="step-card sporty-card">
<div className="step-icon" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', borderRadius: '0', marginBottom: '16px', paddingBottom: '16px',  }}>
<div className="anim-layer"><div className="obd-codes"><span>P0301</span><span>U0100</span><span>B1000</span></div></div>
</div>
<h3 style={{ fontSize: '18px',  }}>1. OBD II Katmanı</h3>
<p>Aracın elektronik beyninden standart hata kodlarını çeker.</p>
<div className="step-tags"><span>CAN BUS</span></div>
</div>

<div className="step-card sporty-card">
<div className="step-icon" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', borderRadius: '0', marginBottom: '16px', paddingBottom: '16px',  }}>
<div className="anim-layer"><div className="imu-wave"><svg><path d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10 T125,10 T150,10"></path></svg></div></div>
</div>
<h3 style={{ fontSize: '18px',  }}>2. Titreşim (IMU)</h3>
<p>Mekanik arıza başlangıçlarını 100Hz NVH sensörü ile hisseder.</p>
<div className="step-tags"><span>6 EKSEN</span></div>
</div>

<div className="step-card sporty-card">
<div className="step-icon" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', borderRadius: '0', marginBottom: '16px', paddingBottom: '16px',  }}>
<div className="anim-layer"><div className="ai-nodes"><div className="ai-node"></div><div className="ai-node"></div><div className="ai-node"></div><div className="ai-node"></div><div className="ai-node"></div><div className="ai-node"></div></div></div>
</div>
<h3 style={{ fontSize: '18px',  }}>3. Predicto AI Füzyonu</h3>
<p>Fiziksel ve elektronik verileri yapay zeka ile çapraz analiz eder.</p>
<div className="step-tags"><span>NVH FÜZYONU</span></div>
</div>

<div className="step-card sporty-card">
<div className="step-icon" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', borderRadius: '0', marginBottom: '16px', paddingBottom: '16px',  }}>
<div className="anim-layer"><div className="report-doc"></div></div>
</div>
<h3 style={{ fontSize: '18px',  }}>4. Proaktif Rapor</h3>
<p>Arıza tam olarak oluşmadan haftalar önce maliyet tahmini sunar.</p>
<div className="step-tags"><span>PROAKTİF UYARI</span></div>
</div>

</div>
</div>

</div>
</div>

</section>



    </>
  );
}
