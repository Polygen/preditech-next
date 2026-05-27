const fs = require('fs');

let tPath = 'src/app/teknoloji/page.tsx';
let content = fs.readFileSync(tPath, 'utf8');

// The first section ends right before <script dangerouslySetInnerHTML={{ __html: `// Cinematic
// Let's find </section> before the second script.
content = content.replace(/<\/section>\r?\n\r?\n<script dangerouslySetInnerHTML={{ __html: `\r?\n\/\/ Cinematic/, '</div>\n</section>\n\n<script dangerouslySetInnerHTML={{ __html: `\n// Cinematic');

fs.writeFileSync(tPath, content);
console.log('Fixed teknoloji/page.tsx');
