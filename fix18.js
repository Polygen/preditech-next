const fs = require('fs');

const f = 'src/app/teknoloji/page.tsx';
let content = fs.readFileSync(f, 'utf8');

// The file ends with:
// </div>
// </div>
// </div>
// </section>
// We need to find the last </section> and remove the </div> right before it.
let lastSec = content.lastIndexOf('</section>');
let before = content.substring(0, lastSec);
let after = content.substring(lastSec);

let lastDiv = before.lastIndexOf('</div>');
if(lastDiv !== -1) {
  content = before.substring(0, lastDiv) + before.substring(lastDiv + 6) + after;
  fs.writeFileSync(f, content);
  console.log("Removed extra </div>");
}
