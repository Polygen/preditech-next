const fs = require('fs');
const path = require('path');

function convertRawHTML(htmlFilePath, tsxFilePath) {
  if (!fs.existsSync(htmlFilePath)) {
    console.log(`File not found: ${htmlFilePath}`);
    return;
  }
  
  let html = fs.readFileSync(htmlFilePath, 'utf8');
  
  // Extract styles
  let styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let match;
  let allStyles = [];
  while ((match = styleRegex.exec(html)) !== null) {
    allStyles.push(match[1]);
  }
  let combinedStyles = allStyles.join('\n');
  
  // Extract scripts
  let scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  let allScripts = [];
  while ((match = scriptRegex.exec(html)) !== null) {
    if (match[1].trim()) {
      allScripts.push(match[1]);
    }
  }
  
  // Extract body
  let bodyMatch = /<body[^>]*>([\s\S]*?)<\/body>/i.exec(html);
  let bodyContent = bodyMatch ? bodyMatch[1] : html;
  
  // Remove scripts from bodyContent so they don't sit dead
  bodyContent = bodyContent.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '');
  
  // Fix image paths
  bodyContent = bodyContent.replace(/src=["']assets\//g, 'src="/assets/');
  bodyContent = bodyContent.replace(/src=["']\.\/assets\//g, 'src="/assets/');
  
  // Also escape backticks and $ for template literals
  bodyContent = bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  combinedStyles = combinedStyles.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  let escapedScripts = allScripts.map(s => s.replace(/`/g, '\\`').replace(/\$/g, '\\$'));
  
  // Create React Component
  let tsxCode = `// @ts-nocheck
'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Inject scripts globally
    ${escapedScripts.map((script, i) => `
    const script${i} = document.createElement('script');
    script${i}.innerHTML = \`${script}\`;
    document.body.appendChild(script${i});
    `).join('\n')}

    return () => {
      ${escapedScripts.map((script, i) => `
      if (script${i}.parentNode) script${i}.parentNode.removeChild(script${i});
      `).join('\n')}
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: \`${combinedStyles}\` }} />
      <div dangerouslySetInnerHTML={{ __html: \`${bodyContent}\` }} />
    </>
  );
}
`;

  // Make sure directory exists
  fs.mkdirSync(path.dirname(tsxFilePath), { recursive: true });
  fs.writeFileSync(tsxFilePath, tsxCode);
  console.log(`Converted ${htmlFilePath} to ${tsxFilePath}`);
}

const baseDir = 'c:/Users/Noyan/Documents/sss';
const nextDir = path.join(baseDir, 'preditech-next/src/app');

convertRawHTML(path.join(baseDir, 'filo-profil.html'), path.join(nextDir, 'filo-profil/page.tsx'));
convertRawHTML(path.join(baseDir, 'ekspertiz.html'), path.join(nextDir, 'ekspertiz/page.tsx'));
