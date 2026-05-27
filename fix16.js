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
    
    // Remove DOMContentLoaded wrappers using robust replace
    // Matches the start exactly
    if (scriptContent.match(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{/)) {
        scriptContent = scriptContent.replace(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{/, '');
        // Remove the last });
        let lastIndex = scriptContent.lastIndexOf('});');
        if (lastIndex !== -1) {
            scriptContent = scriptContent.substring(0, lastIndex) + scriptContent.substring(lastIndex + 3);
        }
    } else if (scriptContent.match(/document\.addEventListener\('DOMContentLoaded',\s*function\s*\(\)\s*\{/)) {
        scriptContent = scriptContent.replace(/document\.addEventListener\('DOMContentLoaded',\s*function\s*\(\)\s*\{/, '');
        let lastIndex = scriptContent.lastIndexOf('});');
        if (lastIndex !== -1) {
            scriptContent = scriptContent.substring(0, lastIndex) + scriptContent.substring(lastIndex + 3);
        }
    }

    // Unescape html entities that might break JS now that they are outside the string literal
    scriptContent = scriptContent.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    
    // Unescape the template literal values
    scriptContent = scriptContent.replace(/\\\$/g, '$').replace(/\\`/g, '\`');
    
    extractedScripts.push(scriptContent);
  }

  if (extractedScripts.length > 0) {
    // Remove the script tags from JSX
    content = content.replace(scriptRegex, '');
    
    // Find the start of the component body
    // Wait, the component might be "export default function Page() {" or "export default function EkspertizPage() {"
    const componentRegex = /export default function\s+\w*\s*\([^)]*\)\s*\{/;
    const componentMatch = content.match(componentRegex);
    
    if (componentMatch) {
      const injectionPoint = componentMatch.index + componentMatch[0].length;
      
      let useEffectBlock = `\n  useEffect(() => {\n`;
      extractedScripts.forEach(script => {
         useEffectBlock += script + '\n';
      });
      useEffectBlock += `  }, []);\n`;
      
      content = content.slice(0, injectionPoint) + useEffectBlock + content.slice(injectionPoint);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Robustly extracted scripts in:', file);
  }
});
