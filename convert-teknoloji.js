const fs = require('fs');
const path = require('path');

function processHtml(sourceHtml, targetTsx, jsName) {
  let html = fs.readFileSync(sourceHtml, 'utf8');

  // Extract scripts
  let scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let allScripts = [];
  while ((match = scriptRegex.exec(html)) !== null) {
    if (match[1].trim()) {
      allScripts.push(match[1]);
    }
  }
  
  // Write the JS file
  const jsDir = 'c:/Users/Noyan/Documents/sss/preditech-next/public/js';
  if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir, { recursive: true });
  const jsPath = path.join(jsDir, jsName);
  
  // Fix relative paths inside the scripts
  let finalJs = allScripts.join('\n\n')
    .replace(/['"]assets\//g, "'/assets/")
    .replace(/url\(['"]?assets\//g, "url('/assets/");
  
  fs.writeFileSync(jsPath, finalJs);
  console.log('Wrote JS to ' + jsPath);

  // Extract body
  let bodyMatch = /<body[^>]*>([\s\S]*?)<\/body>/i.exec(html);
  let bodyContent = bodyMatch ? bodyMatch[1] : html;
  bodyContent = bodyContent.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '');
  
  // Fix paths in HTML
  bodyContent = bodyContent.replace(/src=["']assets\//g, 'src="/assets/');
  bodyContent = bodyContent.replace(/href=["']assets\//g, 'href="/assets/');
  bodyContent = bodyContent.replace(/url\(['"]?assets\//g, "url('/assets/");
  bodyContent = bodyContent.replace(/href=["']index\.html["']/g, 'href="/"');
  
  // Escape template literals
  bodyContent = bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  
  // Extract styles
  let styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let allStyles = [];
  while ((match = styleRegex.exec(html)) !== null) {
    allStyles.push(match[1]);
  }
  let combinedStyles = allStyles.join('\n').replace(/url\(['"]?assets\//g, "url('/assets/");
  combinedStyles = combinedStyles.replace(/`/g, '\\`').replace(/\$/g, '\\$');

  // Build the TSX
  const tsxCode = `// @ts-nocheck
'use client';

import Script from 'next/script';

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: \`${combinedStyles}\` }} />
      <div dangerouslySetInnerHTML={{ __html: \`${bodyContent}\` }} />
      
      <Script src="/js/${jsName}" strategy="lazyOnload" />
    </>
  );
}
`;

  fs.writeFileSync(targetTsx, tsxCode);
  console.log('Wrote TSX to ' + targetTsx);
}

processHtml(
  'c:/Users/Noyan/Documents/sss/teknoloji.html', 
  'c:/Users/Noyan/Documents/sss/preditech-next/src/app/teknoloji/page.tsx', 
  'teknoloji.js'
);
