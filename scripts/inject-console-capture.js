const fs = require('fs');
const path = require('path');

const SCRIPT_TAG = '<script src="/dashboard-console-capture.js"></script>';

function injectScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('dashboard-console-capture.js')) {
    console.log(`✓ ${filePath} already has console capture script`);
    return;
  }
  
  if (content.includes('</head>')) {
    content = content.replace('</head>', `  ${SCRIPT_TAG}\n</head>`);
  } else if (content.includes('<head>')) {
    content = content.replace('<head>', `<head>\n  ${SCRIPT_TAG}`);
  } else {
    console.log(`✗ ${filePath} - no <head> tag found`);
    return;
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Injected console capture script into ${filePath}`);
}

function findHTMLFiles(dir) {
  const files = [];
  
  function traverse(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.html')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

const outDir = path.join(process.cwd(), '.next');

if (!fs.existsSync(outDir)) {
  console.log('Build directory not found. Run build first.');
  process.exit(1);
}

const htmlFiles = findHTMLFiles(outDir);

if (htmlFiles.length === 0) {
  console.log('No HTML files found in build directory.');
  process.exit(0);
}

console.log(`Found ${htmlFiles.length} HTML files. Injecting console capture script...\n`);

htmlFiles.forEach(injectScript);

console.log('\n✓ Console capture script injection complete!');