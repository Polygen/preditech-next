const fs = require('fs');
const html = fs.readFileSync('../old_ekspertiz_utf8.html', 'utf8');
const start = html.indexOf('<!-- MASSIVE HERO -->');
const end = html.indexOf('<!-- WISHLIST & CTA SECTION -->');
const body = html.substring(start, end).replace(/`/g, '\\`').replace(/\$/g, '\\$');

const reactCode = `// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: \`${body}\` }} />
    </>
  );
}
`;

fs.mkdirSync('src/app/xper', {recursive: true});
fs.writeFileSync('src/app/xper/page.tsx', reactCode);
console.log('xper page created');
