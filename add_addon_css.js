const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

const addonCSS = `
/* Addon Cards */
.addon-card {
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  position: relative;
  overflow: hidden;
}
.addon-card:hover {
  background: rgba(255, 255, 255, 0.08);
}
.addon-card.active {
  border-color: var(--accent) !important;
  background: rgba(255, 215, 0, 0.05) !important;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
}
.addon-card.active::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 4px; height: 100%;
  background: var(--accent);
  box-shadow: 0 0 10px var(--accent);
}

/* Custom Addon Checkbox */
.addon-custom-checkbox {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  background: rgba(0,0,0,0.5);
}
.addon-card.active .addon-custom-checkbox {
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 0 10px var(--accent);
}
.addon-custom-checkbox i {
  color: #000;
  font-size: 14px;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.2s;
  font-weight: 900;
}
.addon-card.active .addon-custom-checkbox i {
  opacity: 1;
  transform: scale(1);
}

/* Addon Info Button */
.addon-info-btn {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 24px; height: 24px;
  display: flex; align-items: center; justify-content: center;
  color: var(--text2);
  cursor: help;
  position: relative;
  transition: all 0.2s;
}
.addon-info-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}
.addon-info-tooltip {
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: #111;
  border: 1px solid rgba(255,255,255,0.1);
  padding: 12px;
  border-radius: 8px;
  width: 250px;
  font-size: 12px;
  line-height: 1.5;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(0,0,0,0.8);
  z-index: 100;
  pointer-events: none;
}
.addon-info-tooltip::after {
  content: '';
  position: absolute;
  top: 100%; left: 50%;
  transform: translateX(-50%);
  border-width: 6px;
  border-style: solid;
  border-color: #111 transparent transparent transparent;
}
.addon-info-btn:hover .addon-info-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}
`;

css += addonCSS;
fs.writeFileSync('src/app/globals.css', css);
console.log("Added addon CSS");
