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
  let bodyContent = '';
  
  if (page === 'ekspertiz.html') {
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) bodyContent = bodyMatch[1];
  } else {
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
    .replace(/<!--[\s\S]*?-->/g, '');

  // onClick string to function
  bodyContent = bodyContent.replace(/onclick="([^"]*)"/gi, (match, code) => {
    let safeCode = code.replace(/"/g, "'");
    if (safeCode.includes('window.location')) {
      // transform window.location='page.html' to router.push('/page')? Or just let it be a standard window.location.href='/page'
      safeCode = safeCode.replace(/\.html/g, '');
    }
    return `onClick={() => { ${safeCode} }}`;
  });

  // Basic inline style conversion
  bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const rules = styleStr.split(';').filter(s => s.trim());
    const reactStyle = rules.reduce((acc, rule) => {
      let [key, ...vals] = rule.split(':');
      let val = vals.join(':'); // in case of background-image: url(http://...)
      if (!key || val === undefined) return acc;
      key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase()); // camelCase
      
      // Handle special css variables in style: Webkit...
      if (key === 'webkitBackgroundClip') key = 'WebkitBackgroundClip';
      if (key === 'webkitTextFillColor') key = 'WebkitTextFillColor';
      
      val = val.trim().replace(/'/g, "\\'");
      return acc + `${key}: '${val}', `;
    }, '');
    return `style={{ ${reactStyle} }}`;
  });

  // Link components (safely)
  bodyContent = bodyContent.replace(/<a([^>]*)href="([^"]*\.html[^"]*)"([^>]*)>([\s\S]*?)<\/a>/gi, (match, p1, p2, p3, p4) => {
    if (p2.startsWith('http') || p2.startsWith('#')) return match;
    const cleanHref = p2.replace('.html', '').replace('index', '/');
    const finalHref = cleanHref.startsWith('/') ? cleanHref : `/${cleanHref}`;
    return `<Link${p1}href="${finalHref}"${p3}>${p4}</Link>`;
  });

  // Also replace <a href="/"> to <Link href="/"> (sometimes we have this in HTML)
  bodyContent = bodyContent.replace(/<a([^>]*)href="(\/[^"]*)"([^>]*)>([\s\S]*?)<\/a>/gi, (match, p1, p2, p3, p4) => {
    return `<Link${p1}href="${p2}"${p3}>${p4}</Link>`;
  });

  // <script> -> dangerouslySetInnerHTML
  bodyContent = bodyContent.replace(/<script>([\s\S]*?)<\/script>/gi, (match, code) => {
    const safeCode = code.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
    return `<script dangerouslySetInnerHTML={{ __html: \`${safeCode}\` }} />`;
  });

  // < style> -> dangerouslySetInnerHTML
  bodyContent = bodyContent.replace(/<style>([\s\S]*?)<\/style>/gi, (match, code) => {
    const safeCode = code.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
    return `<style dangerouslySetInnerHTML={{ __html: \`${safeCode}\` }} />`;
  });

  // Boolean attributes
  bodyContent = bodyContent.replace(/\s(required|disabled|checked|selected|readonly|autoplay|loop|muted|controls)(?=\s|>)/gi, ' $1={true}');

  // Unescaped < characters inside text
  // We can just replace `< ` with `&lt; `
  bodyContent = bodyContent.replace(/< /g, '&lt; ');

  // Fix unmatched tags manually for the problematic files
  if (page === 'gt.html') {
    // There is an extra </div> in tech-specs-section. We can just replace </div></div></section> with </div></section>
    bodyContent = bodyContent.replace(/<\/div>\s*<\/div>\s*<\/section>/, '</div>\n</section>');
  }
  if (page === 'teknoloji.html') {
    // There is an extra </section> around line 1000
    bodyContent = bodyContent.replace(/<\/section>\s*<\/section>\s*<script/, '</section>\n\n<script');
  }
  if (page === 'app.html') {
      // Fix SVG unclosed or unescaped values if any.
  }

  let output = `'use client';\n\nimport Link from 'next/link';\nimport { useEffect } from 'react';\n\nexport default function Page() {\n  return (\n    <>\n${bodyContent}\n    </>\n  );\n}\n`;

  const routeName = page.replace('.html', '');
  const outDir = path.join(__dirname, 'src', 'app', routeName);
  
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  if (page === 'ekspertiz.html') {
    const layoutOutput = `export default function EkspertizLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="tr">\n      <head>\n        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />\n        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css" />\n      </head>\n      <body style={{ margin: 0, background: '#111', color: '#fff', fontFamily: 'Inter, sans-serif' }}>\n        {children}\n      </body>\n    </html>\n  );\n}\n`;
    fs.writeFileSync(path.join(outDir, 'layout.tsx'), layoutOutput);
    output = `'use client';\n\nimport Link from 'next/link';\nimport { useEffect } from 'react';\n\nexport default function EkspertizPage() {\n  return (\n    <>\n${bodyContent}\n    </>\n  );\n}\n`;
  }

  fs.writeFileSync(path.join(outDir, 'page.tsx'), output);
  console.log('Converted', page);
});
