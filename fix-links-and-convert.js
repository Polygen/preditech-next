const fs = require('fs');
const path = require('path');

function walk(d) {
  let r = [];
  fs.readdirSync(d).forEach(f => {
    f = path.join(d, f);
    if (fs.statSync(f).isDirectory()) r = r.concat(walk(f));
    else if (f.endsWith('.tsx') || f.endsWith('.ts')) r.push(f);
  });
  return r;
}

walk('src').forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  let o = c;
  c = c.replace(/href=["']([^"']+)\.html["']/g, 'href="/$1"');
  if (c !== o) {
    fs.writeFileSync(f, c);
    console.log('Fixed .html links in', f);
  }
});

// Also let's re-run better-convert for iletisim.html and others
// Because they have onMouseOver string issues and others.

const filesToConvert = [
  'iletisim', 'cozumler', 'cihazlar', 'filo', 'destek', 'doc', 
  'haberler', 'haber-1', 'haber-2', 'haber-3', 'karsilastir', 'app',
  'go', 'gt', 'pro', 'titan', 'haul', 'watchdog', 'cursor', 'gate', 'racebox', 'sentinel', 'signal',
  'odeme', 'siparis-takip', 'login', 'register', 'bekleme-listesi', 'erken-erisim', 'erken-erisim-kurumsal', 'kurumsal-satis', 'profil'
];

function processHtml(sourceHtml, targetTsx, jsName) {
  if (!fs.existsSync(sourceHtml)) return;
  let html = fs.readFileSync(sourceHtml, 'utf8');

  let scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let allScripts = [];
  while ((match = scriptRegex.exec(html)) !== null) {
    if (match[1].trim()) allScripts.push(match[1]);
  }
  
  const jsDir = 'public/js';
  if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir, { recursive: true });
  const jsPath = path.join(jsDir, jsName);
  
  let finalJs = allScripts.join('\n\n')
    .replace(/['"]assets\//g, "'/assets/")
    .replace(/url\(['"]?assets\//g, "url('/assets/");
    
  if (finalJs.includes('DOMContentLoaded')) {
    finalJs = finalJs.replace(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{/g, '');
    finalJs = finalJs.replace(/\}\);\s*$/g, '');
  }
  
  let safeName = jsName.replace(/[^a-zA-Z0-9]/g, '');
  finalJs = 'window.init' + safeName + ' = function() {\n' + finalJs + '\n};\n';
  
  fs.writeFileSync(jsPath, finalJs);

  let bodyMatch = /<body[^>]*>([\s\S]*?)<\/body>/i.exec(html);
  let bodyContent = bodyMatch ? bodyMatch[1] : html;
  bodyContent = bodyContent.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '');
  
  // Remove nav and footer to prevent duplication with Next.js layout
  bodyContent = bodyContent.replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, '');
  bodyContent = bodyContent.replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, '');
  
  bodyContent = bodyContent.replace(/src=["']assets\//g, 'src="/assets/');
  bodyContent = bodyContent.replace(/href=["']assets\//g, 'href="/assets/');
  bodyContent = bodyContent.replace(/url\(['"]?assets\//g, "url('/assets/");
  bodyContent = bodyContent.replace(/href=["']([^"']+)\.html["']/g, 'href="/$1"');
  bodyContent = bodyContent.replace(/href=["']index\.html["']/g, 'href="/"');
  
  bodyContent = bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  
  let styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let allStyles = [];
  while ((match = styleRegex.exec(html)) !== null) {
    allStyles.push(match[1]);
  }
  let combinedStyles = allStyles.join('\n').replace(/url\(['"]?assets\//g, "url('/assets/");
  combinedStyles = combinedStyles.replace(/`/g, '\\`').replace(/\$/g, '\\$');

  const tsxCode = `// @ts-nocheck
'use client';

import Script from 'next/script';

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: \`${combinedStyles}\` }} />
      <div dangerouslySetInnerHTML={{ __html: \`${bodyContent}\` }} />
      
      <Script src="/js/${jsName}" strategy="lazyOnload" onLoad={() => { if(window['init' + '${safeName}']) window['init' + '${safeName}'](); }} />
    </>
  );
}
`;

  fs.mkdirSync(path.dirname(targetTsx), { recursive: true });
  fs.writeFileSync(targetTsx, tsxCode);
  console.log('Converted', sourceHtml, 'to', targetTsx);
}

filesToConvert.forEach(f => {
  processHtml(
    'c:/Users/Noyan/Documents/sss/' + f + '.html', 
    'src/app/' + f + '/page.tsx', 
    f + '.js'
  );
});
