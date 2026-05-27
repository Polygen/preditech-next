const fs = require('fs');

let f = 'c:/Users/Noyan/Documents/sss/preditech-next/src/app/teknoloji/page.tsx';
let content = fs.readFileSync(f, 'utf8');

// Safe innerHTML
content = content.replace(/errorBarsSvg\.innerHTML = '';/g, "if(errorBarsSvg) errorBarsSvg.innerHTML = '';");
content = content.replace(/dbBg\.innerHTML = '';/g, "if(dbBg) dbBg.innerHTML = '';");
content = content.replace(/peaksContainer\.innerHTML = '';/g, "if(peaksContainer) peaksContainer.innerHTML = '';");
content = content.replace(/linesSvg\.innerHTML = '';/g, "if(linesSvg) linesSvg.innerHTML = '';");

// Safe setAttribute
content = content.replace(/rawPath\.setAttribute\(/g, "if(rawPath) rawPath.setAttribute(");
content = content.replace(/highPath\.setAttribute\(/g, "if(highPath) highPath.setAttribute(");
content = content.replace(/midPath\.setAttribute\(/g, "if(midPath) midPath.setAttribute(");
content = content.replace(/lowPath\.setAttribute\(/g, "if(lowPath) lowPath.setAttribute(");
content = content.replace(/kvRawPath\.setAttribute\(/g, "if(kvRawPath) kvRawPath.setAttribute(");
content = content.replace(/kvCleanPath\.setAttribute\(/g, "if(kvCleanPath) kvCleanPath.setAttribute(");
content = content.replace(/appNvhPath\.setAttribute\(/g, "if(appNvhPath) appNvhPath.setAttribute(");
content = content.replace(/kvDashedPath\.setAttribute\(/g, "if(kvDashedPath) kvDashedPath.setAttribute(");

// Safe classList
content = content.replace(/s => s\.classList\.remove/g, "s => s?.classList?.remove");
content = content.replace(/storySteps\[event\.step\]\.classList\.add/g, "storySteps[event.step]?.classList?.add");
content = content.replace(/resultText\.classList\.add/g, "resultText?.classList?.add");
content = content.replace(/resultText\.classList\.remove/g, "resultText?.classList?.remove");
content = content.replace(/visuals\.className =/g, "if(visuals) visuals.className =");

// Safe render topology
content = content.replace(/item\.text\.style\.opacity = /g, "if(item.text) item.text.style.opacity = ");
content = content.replace(/item\.node\.style\.strokeDashoffset = /g, "if(item.node) item.node.style.strokeDashoffset = ");
content = content.replace(/item\.node\.classList\.add/g, "item.node?.classList?.add");
content = content.replace(/item\.node\.classList\.remove/g, "item.node?.classList?.remove");

// Safe style access for filterBox, etc.
content = content.replace(/filterBox\.style/g, "filterBox?.style");
content = content.replace(/cleanSignal\.style/g, "cleanSignal?.style");
content = content.replace(/errorBarsGroup\.style/g, "errorBarsGroup?.style");

// Wrap render logic in try/catch to avoid breaking the animation loop
content = content.replace(/function render\(\) \{/g, "function render() { try {");
content = content.replace(/  requestAnimationFrame\(render\);\n\}/g, "} catch(e) { console.error(e); } requestAnimationFrame(render); }");

fs.writeFileSync(f, content);
console.log('Fixed teknoloji scripts!');
