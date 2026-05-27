const fs = require('fs');
const path = require('path');

console.log("Restoring teknoloji/page.tsx from scratch (V2)...");

let content = fs.readFileSync(path.join(__dirname, '..', 'teknoloji.html'), 'utf-8');
let bodyContent = content.substring(content.indexOf('</nav>') + 6, content.indexOf('<footer'));

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

bodyContent = bodyContent.replace(/onclick="([^"]*)"/gi, (match, code) => {
  let safeCode = code.replace(/"/g, "'");
  if (safeCode.includes('window.location')) safeCode = safeCode.replace(/\.html/g, '');
  return `onClick={(event) => { ${safeCode.replace(/\bthis\b/g, 'event.currentTarget')} }}`;
});

bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, styleStr) => {
  const rules = styleStr.split(';').filter(s => s.trim());
  const reactStyle = rules.reduce((acc, rule) => {
    let [key, ...vals] = rule.split(':');
    let val = vals.join(':');
    if (!key || val === undefined) return acc;
    key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
    if (key === 'webkitBackgroundClip') key = 'WebkitBackgroundClip';
    if (key === 'webkitTextFillColor') key = 'WebkitTextFillColor';
    val = val.trim().replace(/'/g, "\\'");
    return acc + `${key}: '${val}', `;
  }, '');
  return `style={{ ${reactStyle} }}`;
});

bodyContent = bodyContent.replace(/<a([^>]*)href="([^"]*\.html[^"]*)"([^>]*)>([\s\S]*?)<\/a>/gi, (match, p1, p2, p3, p4) => {
  if (p2.startsWith('http') || p2.startsWith('#')) return match;
  const cleanHref = p2.replace('.html', '').replace('index', '/');
  const finalHref = cleanHref.startsWith('/') ? cleanHref : `/${cleanHref}`;
  return `<Link${p1}href="${finalHref}"${p3}>${p4}</Link>`;
});
bodyContent = bodyContent.replace(/<a([^>]*)href="(\/[^"]*)"([^>]*)>([\s\S]*?)<\/a>/gi, (match, p1, p2, p3, p4) => {
  return `<Link${p1}href="${p2}"${p3}>${p4}</Link>`;
});

bodyContent = bodyContent.replace(/\s(required|disabled|checked|selected|readonly|autoplay|loop|muted|controls)(?=\s|>)/gi, ' $1={true}');
bodyContent = bodyContent.replace(/< /g, '&lt; ');

// Convert style blocks
bodyContent = bodyContent.replace(/<style>([\s\S]*?)<\/style>/gi, (match, code) => {
  const safeCode = code.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  return `<style dangerouslySetInnerHTML={{ __html: \`${safeCode}\` }} />`;
});

// Handle script tags: EXTRACT them to useEffect directly without mutating inside while!
let extractedScripts = [];
bodyContent = bodyContent.replace(/<script>([\s\S]*?)<\/script>/gi, (match, scriptContent) => {
  if (scriptContent.match(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{/)) {
      scriptContent = scriptContent.replace(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{/, '');
      let lastIndex = scriptContent.lastIndexOf('});');
      if (lastIndex !== -1) scriptContent = scriptContent.substring(0, lastIndex) + scriptContent.substring(lastIndex + 3);
  } else if (scriptContent.match(/document\.addEventListener\('DOMContentLoaded',\s*function\s*\(\)\s*\{/)) {
      scriptContent = scriptContent.replace(/document\.addEventListener\('DOMContentLoaded',\s*function\s*\(\)\s*\{/, '');
      let lastIndex = scriptContent.lastIndexOf('});');
      if (lastIndex !== -1) scriptContent = scriptContent.substring(0, lastIndex) + scriptContent.substring(lastIndex + 3);
  }
  scriptContent = scriptContent.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  extractedScripts.push(scriptContent);
  return '';
});

bodyContent = bodyContent.replace(/onmouseover=/gi, 'onMouseOver=')
                         .replace(/onmouseout=/gi, 'onMouseOut=')
                         .replace(/maxlength=/gi, 'maxLength=');

bodyContent = bodyContent.replace(/<\/section>\r?\n\r?\n\r?\n<\/section>/, '</div>\n</section>');

let lastSec = bodyContent.lastIndexOf('</section>');
if (lastSec !== -1) {
  let before = bodyContent.substring(0, lastSec);
  let after = bodyContent.substring(lastSec);
  let lastDiv = before.lastIndexOf('</div>');
  if (lastDiv !== -1) {
    bodyContent = before.substring(0, lastDiv) + before.substring(lastDiv + 6) + after;
  }
}

let useEffectBlock = '';
if (extractedScripts.length > 0) {
  let blocks = extractedScripts.map(s => `    {\n${s}\n    }`).join('\n');
  useEffectBlock = `\n  useEffect(() => {\n${blocks}\n  }, []);\n`;
}

let output = `// @ts-nocheck\n'use client';\n\nimport Link from 'next/link';\nimport { useEffect } from 'react';\n\nexport default function Page() {\n${useEffectBlock}\n  return (\n    <>\n${bodyContent}\n    </>\n  );\n}\n`;

fs.writeFileSync(path.join(__dirname, 'src', 'app', 'teknoloji', 'page.tsx'), output);
console.log('Restored teknoloji/page.tsx perfectly (V2)!');
