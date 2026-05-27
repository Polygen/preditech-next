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
  'odeme', 'siparis-takip', 'login', 'register', 'bekleme-listesi', 'erken-erisim', 'erken-erisim-kurumsal', 'kurumsal-satis', 'profil', 'teknoloji', 'filo-profil', 'ekspertiz'
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
  
  let processedScripts = allScripts.map(s => {
    if (s.includes('DOMContentLoaded')) {
      s = s.replace(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{/g, '');
      s = s.replace(/\}\);\s*$/g, '');
    }
    let safe = jsName.replace(/[^a-zA-Z0-9]/g, '');
    if (['filoprofiljs', 'profiljs', 'ekspertizjs'].includes(safe)) {
      return s; // No block scope for global handlers
    }
    return '{\n' + s + '\n}';
  });
  
  let finalJs = processedScripts.join('\n\n')
    .replace(/['"]assets\//g, "'/assets/")
    .replace(/url\(['"]?assets\//g, "url('/assets/");
  
  let safeName = jsName.replace(/[^a-zA-Z0-9]/g, '');
  if (['filoprofiljs', 'profiljs', 'ekspertizjs'].includes(safeName)) {
    finalJs = finalJs; // Keep them global for onclick handlers
  } else {
    finalJs = 'window.init' + safeName + ' = function() {\n  if(window["initDone' + safeName + '"]) return;\n  window["initDone' + safeName + '"] = true;\n' + finalJs + '\n};\n';
  }
  
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

  let useEffectCode = '';
  let onLoadCode = '';
  if (!['filoprofiljs', 'profiljs', 'ekspertizjs'].includes(safeName)) {
    useEffectCode = `
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + '${safeName}']) {
      window['init' + '${safeName}']();
    }
  }, []);`;
    onLoadCode = ` onLoad={() => { if(window['init' + '${safeName}']) window['init' + '${safeName}'](); }}`;
  }

  const tsxCode = `// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {${useEffectCode}

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: \`${combinedStyles}\` }} />
      <div dangerouslySetInnerHTML={{ __html: \`${bodyContent}\` }} />
      
      <Script src="/js/${jsName}" strategy="lazyOnload"${onLoadCode} />
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
