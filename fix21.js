const fs = require('fs');
let f = 'c:/Users/Noyan/Documents/sss/preditech-next/src/app/teknoloji/page.tsx';
let content = fs.readFileSync(f, 'utf8');

// Fix assignments with optional chaining
content = content.replace(/errorBarsGroup\?\.style\.opacity =/g, "if(errorBarsGroup) errorBarsGroup.style.opacity =");
content = content.replace(/filterBox\?\.style\.left =/g, "if(filterBox) filterBox.style.left =");
content = content.replace(/cleanSignal\?\.style\.clipPath =/g, "if(cleanSignal) cleanSignal.style.clipPath =");

// Fix classList
content = content.replace(/s => s\?\.classList\?\.remove\('active'\)/g, "s => { if(s) s.classList.remove('active'); }");
content = content.replace(/storySteps\[event\.step\]\?\.classList\?\.add\('active'\)/g, "if(storySteps[event.step]) storySteps[event.step].classList.add('active')");
content = content.replace(/resultText\?\.classList\?\.add\('active'\)/g, "if(resultText) resultText.classList.add('active')");
content = content.replace(/resultText\?\.classList\?\.remove\('active'\)/g, "if(resultText) resultText.classList.remove('active')");
content = content.replace(/item\.node\?\.classList\?\.add\('active-color'\)/g, "if(item.node) item.node.classList.add('active-color')");
content = content.replace(/item\.node\?\.classList\?\.remove\('active-color'\)/g, "if(item.node) item.node.classList.remove('active-color')");

// Fix render block syntax error
// Since it's currently broken, let's just find the function render() { try { and remove the try {
// and find the } catch(e) { console.error(e); } requestAnimationFrame(render); } and restore it.
content = content.replace(/function render\(\) \{ try \{/g, "function render() {");
content = content.replace(/\} catch\(e\) \{ console\.error\(e\); \} requestAnimationFrame\(render\); \}/g, "  requestAnimationFrame(render);\n}");

fs.writeFileSync(f, content);
console.log('Fixed syntax errors!');
