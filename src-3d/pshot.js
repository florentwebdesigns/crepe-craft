// Page screenshots: node pshot.js <outdir> <w> <h> '<steps json>' [query]
// step: { name, sec: 'intro'|'menu'|selector, p: 0..1 } or { name, index: n } (menu item) or { name, y: px }
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const V5 = __dirname, SITE = path.join(V5, '..');   // fonts: put a Google Fonts css + woff2 files in ./fontcache
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
(async () => {
  const [outdir, w = '1440', h = '900', stepsJson = '[]', query = 'shot'] = process.argv.slice(2);
  const steps = JSON.parse(stepsJson);
  fs.mkdirSync(outdir, { recursive: true });
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const mobile = +w < 600;
  const ctx = await b.newContext({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1, isMobile: mobile, hasTouch: mobile, reducedMotion: /reduce/.test(query) ? 'reduce' : 'no-preference' });
  const p = await ctx.newPage();
  const logs = [];
  p.on('pageerror', e => logs.push('PAGEERROR ' + e.message));
  p.on('console', m => { if ((m.type() === 'error' || m.type() === 'warning') && !/GPU stall|GL Driver/.test(m.text())) logs.push(m.type() + ' ' + m.text().slice(0, 300)); });
  await p.route('**/*', async route => {
    const u = new URL(route.request().url());
    if (u.hostname === 'cc.test') {
      const f = u.pathname.startsWith('/fontcache/') ? path.join(V5, u.pathname) : path.join(SITE, decodeURIComponent(u.pathname));
      if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) return route.fulfill({ status: 404, body: 'nf' });
      return route.fulfill({ status: 200, body: fs.readFileSync(f), headers: { 'content-type': types[path.extname(f)] || 'application/octet-stream' } });
    }
    if (u.hostname === 'fonts.googleapis.com') return route.fulfill({ status: 200, body: fs.readFileSync(path.join(V5, 'fontcache/fonts.css')), headers: { 'content-type': 'text/css' } });
    return route.fulfill({ status: 204, body: '' });   // block maps etc. in screenshots
  });
  const t = Date.now();
  await p.goto('http://cc.test/index.html?' + query, { waitUntil: 'load' });
  const gl = await p.evaluate(() => document.documentElement.className);
  if (/\bgl\b/.test(gl)) await p.waitForFunction(() => document.documentElement.classList.contains('gl-ready') || document.documentElement.classList.contains('no-gl'), null, { timeout: 120000 });
  logs.push('ready ms ' + (Date.now() - t) + ' classes: ' + await p.evaluate(() => document.documentElement.className));
  for (const s of steps) {
    await p.evaluate(async (s) => {
      let y = 0;
      if (s.y != null) y = s.y;
      else if (s.index != null) { const m = document.querySelector('[data-menu]'); const N = +getComputedStyle(m).getPropertyValue('--n'); y = m.offsetTop + (s.index + .02) / (N - 1) * (m.offsetHeight - innerHeight); }
      else { const sec = s.sec === 'intro' ? document.querySelector('[data-intro]') : s.sec === 'menu' ? document.querySelector('[data-menu]') : document.querySelector(s.sec); y = sec.offsetTop + (s.p || 0) * Math.max(0, sec.offsetHeight - innerHeight); }
      window.scrollTo(0, y);
    }, s);
    await p.waitForTimeout(s.wait || 300);
    await p.evaluate(() => new Promise(r => { let n = 0; const f = () => (++n > 6 ? r() : requestAnimationFrame(f)); requestAnimationFrame(f); }));
    if (s.after) await p.waitForTimeout(s.after);
    await p.screenshot({ path: path.join(outdir, s.name + '.png') });
  }
  console.log(logs.join('\n'));
  await b.close();
})();
