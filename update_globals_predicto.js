const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');
// remove the ugly yellow stroke
css = css.replace('.simulator-card::before{content:\'\';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--accent),transparent);opacity:0.8}\n', '');
css = css.replace('.simulator-card::after{content:\'\';position:absolute;top:0;left:0;width:2px;height:100%;background:linear-gradient(180deg,var(--accent),transparent)}\n', '');

// Add Quick Reply Chip CSS
const chipsCSS = `
.quick-reply-chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
  animation: fadeInBtn 0.5s ease forwards;
}
.quick-reply-chip {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 16px;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s;
}
.quick-reply-chip:hover {
  background: rgba(255, 215, 0, 0.1);
  border-color: rgba(255, 215, 0, 0.5);
  color: var(--accent);
}
`;
if (!css.includes('.quick-reply-chips')) {
  css += chipsCSS;
}

fs.writeFileSync('src/app/globals.css', css);
console.log("Updated globals.css for Predicto AI simulator stroke and chips");
