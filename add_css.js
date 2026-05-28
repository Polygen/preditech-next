const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

const newCSS = `
/* Premium Hero Price Badge */
.hero-price-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 215, 0, 0.2);
  padding: 8px 24px 8px 16px;
  border-radius: 100px;
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.05), inset 0 2px 10px rgba(255, 255, 255, 0.05);
  margin-bottom: 24px;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
}
.hero-price-badge::before {
  content: '';
  position: absolute;
  top: 0; left: -100%; width: 50%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: skewX(-20deg);
  animation: badgeGlow 4s infinite;
}
@keyframes badgeGlow {
  0% { left: -100%; }
  20% { left: 200%; }
  100% { left: 200%; }
}
.hero-price-badge-icon {
  width: 32px;
  height: 32px;
  background: rgba(255, 215, 0, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 16px;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.2);
}
.hero-price-badge-val {
  font-size: 24px;
  font-weight: 900;
  color: #fff;
  letter-spacing: -0.5px;
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.hero-price-badge-val small {
  font-size: 12px;
  color: var(--text2);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}
`;

css += newCSS;
fs.writeFileSync('src/app/globals.css', css);
console.log("Added hero-price-badge CSS");
