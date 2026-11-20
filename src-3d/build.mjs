// Build: bundle the 3D layer and write index.html with the menu (tabs + full list) from src/menu.js.
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
const here = path.dirname(new URL(import.meta.url).pathname);
const out = path.join(here, '..');   // writes ../index.html and ../assets/scene.js

await build({ entryPoints: [path.join(here, 'src/main.js')], bundle: true, format: 'esm', minify: true, target: 'es2020', outfile: path.join(out, 'assets/scene.js'), legalComments: 'none', logLevel: 'warning' });

const src = fs.readFileSync(path.join(here, 'src/menu.js'), 'utf8');
const { ITEMS, CATS } = await import('data:text/javascript,' + encodeURIComponent(src));
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tabs = CATS.map(c => `            <button type="button" data-m-tab="${c.id}"><span>${esc(c.name)}</span></button>`).join('\n');
const list = CATS.map(c => {
  const rows = ITEMS.filter(i => i.cat === c.id).map(i => `                <li><span class="n">${esc(i.name)}</span><span class="p">${esc(i.price)}</span><span class="i">${esc(i.ing)}</span></li>`).join('\n');
  return `          <div class="menu__group">
            <img src="assets/media/stills/${c.id}.webp" alt="" width="800" height="600" loading="lazy" decoding="async">
            <div>
              <h3>${esc(c.name)}</h3>
              <p class="menu__group-note">${esc(c.note)}</p>
              <ul class="menu__rows">
${rows}
              </ul>
            </div>
          </div>`;
}).join('\n');
let html = fs.readFileSync(path.join(here, 'index.src.html'), 'utf8');
html = html.replace('__N__', String(ITEMS.length)).replace('__TABS__', tabs).replace('__LIST__', list);
fs.writeFileSync(path.join(out, 'index.html'), html);
const kb = f => (fs.statSync(path.join(out, f)).size / 1024).toFixed(0) + ' KB';
console.log('built', ITEMS.length, 'items; scene.js', kb('assets/scene.js'));
