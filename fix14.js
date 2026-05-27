const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(srcDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const scriptRegex = /<script\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*`([\s\S]*?)`\s*\}\}\s*\/>/g;
  let match;
  let extractedScripts = [];

  while ((match = scriptRegex.exec(content)) !== null) {
    let scriptContent = match[1];
    
    // Remove DOMContentLoaded wrappers which block execution in React SPA
    scriptContent = scriptContent.replace(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{([\s\S]*?)\}\);/g, '$1');
    scriptContent = scriptContent.replace(/document\.addEventListener\('DOMContentLoaded',\s*function\s*\(\)\s*\{([\s\S]*?)\}\);/g, '$1');
    
    extractedScripts.push(scriptContent);
  }

  if (extractedScripts.length > 0) {
    // Remove the script tags from JSX
    content = content.replace(scriptRegex, '');
    
    // Find the start of the component body
    const componentRegex = /export default function\s+\w*\s*\([^)]*\)\s*\{/;
    const componentMatch = content.match(componentRegex);
    
    if (componentMatch) {
      const injectionPoint = componentMatch.index + componentMatch[0].length;
      
      let useEffectBlock = `\n  useEffect(() => {\n`;
      extractedScripts.forEach(script => {
         // Escape template literal variables that we had escaped back to normal since we are now inside actual JS code, NOT inside a string literal
         // Wait, the converter escaped \`${ to \\${ and \` to \\\` inside the string literal!
         // Now we need to unescape them because we are putting it back into raw JS file.
         let unescaped = script.replace(/\\\$/g, '$').replace(/\\`/g, '\`');
         useEffectBlock += unescaped + '\n';
      });
      useEffectBlock += `  }, []);\n`;
      
      content = content.slice(0, injectionPoint) + useEffectBlock + content.slice(injectionPoint);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed scripts in:', file);
  }
});
