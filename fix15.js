const fs = require('fs');
const files = ['src/app/teknoloji/page.tsx', 'src/app/ekspertiz/page.tsx', 'src/app/profil/page.tsx'];

files.forEach(f => {
  if(fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    // We can safely replace &lt; with < inside the useEffect block or globally, because in TSX files outside of string literals, < is fine for JS code (as long as it's not ambiguous JSX, but for `i < length` it's fine).
    // Actually, in TSX, `<` inside code can sometimes be confused for JSX if not spaced properly, but usually TS handles it.
    // Let's replace &lt; with < and &gt; with > globally, since it was only replaced to avoid JSX parsing errors, but inside the component body, TS parses it correctly.
    content = content.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    fs.writeFileSync(f, content);
  }
});
console.log('Fixed escaped chars in scripts');
