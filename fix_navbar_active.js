const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf8');

const replacement = `
    const items = navLinks.querySelectorAll(':scope > li > a');
    let activeItem: HTMLElement | null = null;

    // Reset all items first
    items.forEach(item => {
      const el = item as HTMLElement;
      el.classList.remove('active');
      el.style.color = '';
      if (el.parentElement) el.parentElement.classList.remove('active');
    });

    items.forEach(item => {
      const el = item as HTMLElement;
      const href = el.getAttribute('href') || '';
      const isActive = pathname === href || 
        (pathname !== '/' && href !== '/' && pathname.startsWith(href));
      if (isActive) {
        activeItem = el;
        el.classList.add('active');
        if (el.parentElement) el.parentElement.classList.add('active');
      }
    });
`;

content = content.replace(/const items = navLinks\.querySelectorAll\(':scope > li > a'\);\s*let activeItem: HTMLElement \| null = null;\s*items\.forEach\(item => {[\s\S]*?}\);/, replacement.trim());

fs.writeFileSync('src/components/layout/Navbar.tsx', content);
console.log('Fixed Navbar active state reset.');
