const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk(path.join(__dirname, 'src', 'app'), (filePath) => {
  if (!filePath.endsWith('.tsx')) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Fix `<script>` -> `useEffect` or `dangerouslySetInnerHTML`
  // A simple way is to replace <script> with <script dangerouslySetInnerHTML={{ __html: `
  // But backticks inside might break. Since we know teknoloji uses let d = '...', we can use backticks.
  content = content.replace(/<script>([\s\S]*?)<\/script>/gi, (match, code) => {
    // escape backticks and ${}
    const safeCode = code.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
    return `<script dangerouslySetInnerHTML={{ __html: \`${safeCode}\` }} />`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
  }
});
