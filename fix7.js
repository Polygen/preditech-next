const fs = require('fs');
const content = fs.readFileSync('src/app/teknoloji/page.tsx', 'utf8');

const divStarts = (content.match(/<div\b/g) || []).length;
const divEnds = (content.match(/<\/div>/g) || []).length;
const secStarts = (content.match(/<section\b/g) || []).length;
const secEnds = (content.match(/<\/section>/g) || []).length;

console.log('divs:', divStarts, 'end divs:', divEnds);
console.log('sections:', secStarts, 'end sections:', secEnds);
