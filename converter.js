const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..');
const pages = [
  'gt.html', 'pro.html', 'destek.html', 'doc.html', 'haberler.html',
  'haber-1.html', 'haber-2.html', 'haber-3.html', 'iletisim.html',
  'karsilastir.html', 'app.html', 'odeme.html', 'siparis-takip.html',
  'profil.html', 'filo-profil.html', 'ekspertiz.html', 'teknoloji.html'
];

pages.forEach(page => {
  const srcPath = path.join(srcDir, page);
  if (!fs.existsSync(srcPath)) return;

  let content = fs.readFileSync(srcPath, 'utf-8');

  // Basic extraction: get content between Navbar and Footer (or just body if not found)
  let bodyContent = '';
  
  if (page === 'ekspertiz.html') {
    // Ekspertiz is special, we keep its own sidebar/layout logic
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) bodyContent = bodyMatch[1];
  } else {
    // Extract everything between </nav> and <footer>
    const navEnd = content.indexOf('</nav>');
    const footerStart = content.indexOf('<footer');
    
    if (navEnd !== -1 && footerStart !== -1) {
      bodyContent = content.substring(navEnd + 6, footerStart);
    } else {
      const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      if (bodyMatch) bodyContent = bodyMatch[1];
    }
  }

  // Common replacements
  bodyContent = bodyContent
    .replace(/class=/g, 'className=')
    .replace(/onclick=/gi, 'onClick=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-dasharray=/g, 'strokeDasharray=')
    .replace(/stroke-dashoffset=/g, 'strokeDashoffset=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/tabindex=/gi, 'tabIndex=')
    .replace(/viewbox=/gi, 'viewBox=')
    .replace(/<img([^>]*[^/])>/g, '<img$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    .replace(/<input([^>]*[^/])>/g, '<input$1 />')
    .replace(/assets\/images\//g, '/assets/images/')
    .replace(/<!--[\s\S]*?-->/g, ''); // Remove HTML comments

  // Basic inline style conversion (very crude, handles simple cases)
  bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const rules = styleStr.split(';').filter(s => s.trim());
    const reactStyle = rules.reduce((acc, rule) => {
      let [key, val] = rule.split(':');
      if (!key || val === undefined) return acc;
      key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase()); // camelCase
      val = val.trim().replace(/'/g, "\\'");
      return acc + `${key}: '${val}', `;
    }, '');
    return `style={{ ${reactStyle} }}`;
  });

  // Link components (simple heuristic)
  bodyContent = bodyContent.replace(/<a([^>]*)href="([^"]*\.html[^"]*)"([^>]*)>/gi, (match, p1, p2, p3) => {
    if (p2.startsWith('http') || p2.startsWith('#')) return match;
    const cleanHref = p2.replace('.html', '').replace('index', '/');
    const finalHref = cleanHref.startsWith('/') ? cleanHref : `/${cleanHref}`;
    return `<Link${p1}href="${finalHref}"${p3}>`;
  });

  // If there are inline <style> blocks without dangerouslySetInnerHTML
  bodyContent = bodyContent.replace(/<style>([\s\S]*?)<\/style>/gi, '<style dangerouslySetInnerHTML={{ __html: `$1` }} />');

  // Handle boolean attributes without values
  bodyContent = bodyContent.replace(/\s(required|disabled|checked|selected|readonly|autoplay|loop|muted|controls)(?=\s|>)/gi, ' $1={true}');

  let output = `'use client';\n\nimport Link from 'next/link';\nimport { useEffect } from 'react';\n\nexport default function Page() {\n  return (\n    <>\n${bodyContent}\n    </>\n  );\n}\n`;

  const routeName = page.replace('.html', '');
  const outDir = path.join(__dirname, 'src', 'app', routeName);
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // For ekspertiz, we generate layout and page differently
  if (page === 'ekspertiz.html') {
    const layoutOutput = `export default function EkspertizLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="tr">\n      <head>\n        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />\n        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css" />\n      </head>\n      <body style={{ margin: 0, background: '#111', color: '#fff', fontFamily: 'Inter, sans-serif' }}>\n        {children}\n      </body>\n    </html>\n  );\n}\n`;
    fs.writeFileSync(path.join(outDir, 'layout.tsx'), layoutOutput);
    output = `'use client';\n\nimport Link from 'next/link';\nimport { useEffect } from 'react';\n\nexport default function EkspertizPage() {\n  return (\n    <>\n${bodyContent}\n    </>\n  );\n}\n`;
  }

  fs.writeFileSync(path.join(outDir, 'page.tsx'), output);
  console.log('Converted', page);
});
