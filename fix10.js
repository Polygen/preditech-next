const fs = require('fs');

let tPath = 'src/app/teknoloji/page.tsx';
let content = fs.readFileSync(tPath, 'utf8');

// The original generator outputs:
// ...
// </section>
// 
// <script dangerouslySetInnerHTML={{ __html: `
// 
// We want to replace the first occurrence of:
// </section>\n\n<script dangerouslySetInnerHTML={{ __html: `
// with:
// </div>\n</section>\n\n<script dangerouslySetInnerHTML={{ __html: `

content = content.replace(/<\/section>\r?\n\r?\n<script dangerouslySetInnerHTML={{ __html: `/, '</div>\n</section>\n\n<script dangerouslySetInnerHTML={{ __html: `');

// And at the end of the file, we have:
// </div>\n</div>\n</div>\n</section>\n\n    </>\n  );\n}
// We want to remove one </div> so it is:
// </div>\n</div>\n</section>\n\n    </>\n  );\n}

content = content.replace(/<\/div>\r?\n<\/div>\r?\n<\/div>\r?\n<\/section>\r?\n\r?\n    <\/>\r?\n  \);\r?\n}/, '</div>\n</div>\n</section>\n\n    </>\n  );\n}');

fs.writeFileSync(tPath, content);
console.log('Fixed teknoloji/page.tsx using exact JS string replacement');
