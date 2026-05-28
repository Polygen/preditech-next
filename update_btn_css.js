const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Replace the CSS for floating-preorder-btn
const newCSS = `
/* Floating Pre-order Button */
.floating-preorder-btn {
  background: linear-gradient(135deg, var(--accent), #ff9900);
  color: #000;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 800;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.5);
  z-index: 9999;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  width: max-content;
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.floating-preorder-btn.anchored-state {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  pointer-events: none;
}
.floating-preorder-btn.anchored-state.visible {
  opacity: 1;
  pointer-events: auto;
  animation: fadeInBtn 0.5s ease forwards;
}
.floating-preorder-btn.fixed-state {
  position: fixed;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
}
.floating-preorder-btn.fixed-state.visible {
  animation: slideUpBtn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.floating-preorder-btn:hover {
  transform: translateX(-50%) translateY(-5px);
  box-shadow: 0 15px 40px rgba(255, 215, 0, 0.6), inset 0 2px 0 rgba(255, 255, 255, 0.5);
  color: #000;
}
@keyframes slideUpBtn {
  0% { bottom: -100px; }
  100% { bottom: 40px; }
}
@keyframes fadeInBtn {
  0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0); }
}
`;

// Extract old css and replace
const startTag = '/* Floating Pre-order Button */';
const endTag = '.floating-preorder-btn i {';

const startIdx = css.indexOf(startTag);
if (startIdx !== -1) {
  const endIdx = css.indexOf(endTag, startIdx);
  if (endIdx !== -1) {
    css = css.substring(0, startIdx) + newCSS + css.substring(endIdx);
    fs.writeFileSync('src/app/globals.css', css);
  }
}
console.log("Updated button css");
