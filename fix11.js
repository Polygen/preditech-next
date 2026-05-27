const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..');
const page = 'teknoloji.html';
const srcPath = path.join(srcDir, page);

let content = fs.readFileSync(srcPath, 'utf-8');
let bodyContent = '';

const navEnd = content.indexOf('</nav>');
const footerStart = content.indexOf('<footer');
if (navEnd !== -1 && footerStart !== -1) {
  bodyContent = content.substring(navEnd + 6, footerStart);
} else {
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) bodyContent = bodyMatch[1];
}

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
  return `onClick={() => { ${safeCode} }}`;
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

bodyContent = bodyContent.replace(/<script>([\s\S]*?)<\/script>/gi, (match, code) => {
  const safeCode = code.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  return `<script dangerouslySetInnerHTML={{ __html: \`${safeCode}\` }} />`;
});

bodyContent = bodyContent.replace(/<style>([\s\S]*?)<\/style>/gi, (match, code) => {
  const safeCode = code.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  return `<style dangerouslySetInnerHTML={{ __html: \`${safeCode}\` }} />`;
});

bodyContent = bodyContent.replace(/\s(required|disabled|checked|selected|readonly|autoplay|loop|muted|controls)(?=\s|>)/gi, ' $1={true}');
bodyContent = bodyContent.replace(/< /g, '&lt; ');


// FIXING THE CROSSED TAGS IN TEKNOLOJI
// The original HTML has:
// </section> (line 1049)
// </section> (line 1052)
// <script> (line 1054)
// We need to replace these two sections with a SINGLE </div> followed by a SINGLE </section>
bodyContent = bodyContent.replace(/<\/section>\r?\n\r?\n\r?\n<\/section>/, '</div>\n</section>');

// AND at the end of the file, it has:
// </div>
// </div>
// </div>
// </div>
// </div>
// </section>
// We need to remove the 5th </div>.
bodyContent = bodyContent.replace(/<\/div>\r?\n<\/div>\r?\n<\/div>\r?\n<\/div>\r?\n<\/div>\r?\n<\/section>\r?\n\r?\n$/, '</div>\n</div>\n</div>\n</div>\n</section>\n\n');

let output = `'use client';\n\nimport Link from 'next/link';\nimport { useEffect } from 'react';\n\nexport default function Page() {\n  return (\n    <>\n${bodyContent}\n    </>\n  );\n}\n`;

const outDir = path.join(__dirname, 'src', 'app', 'teknoloji');
fs.writeFileSync(path.join(outDir, 'page.tsx'), output);
console.log('Regenerated teknoloji/page.tsx with PERFECT tags');
