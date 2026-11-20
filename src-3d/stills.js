// Render the no-WebGL fallback stills from the live 3D scene (canvas only, no UI).
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const V5 = __dirname, SITE = path.join(V5, '..');   // fonts: put a Google Fonts css + woff2 files in ./fontcache
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2' };
(async () => {
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const shoot = async (w, h, jobs) => {
    const ctx = await b.newContext({ viewport: { width: w, height: h } }); const p = await ctx.newPage();
    await p.route('**/*', async route => {
      const u = new URL(route.request().url());
      if (u.hostname === 'cc.test') { const f = u.pathname.startsWith('/fontcache/') ? path.join(V5, u.pathname) : path.join(SITE, decodeURIComponent(u.pathname)); if (!fs.existsSync(f)) return route.fulfill({ status: 404, body: '' }); return route.fulfill({ status: 200, body: fs.readFileSync(f), headers: { 'content-type': types[path.extname(f)] || 'application/octet-stream' } }); }
      if (u.hostname === 'fonts.googleapis.com') return route.fulfill({ status: 200, body: fs.readFileSync(path.join(V5, 'fontcache/fonts.css')), headers: { 'content-type': 'text/css' } });
      return route.fulfill({ status: 204, body: '' });
    });
    await p.goto('http://cc.test/index.html?shot');
    await p.waitForFunction(() => document.documentElement.classList.contains('gl-ready'), null, { timeout: 120000 });
    await p.addStyleTag({ content: '.topbar,.actionbar,.intro__hero,.intro__skip,.intro__bar,.menu__ui,.intro__stage::after,.menu__stage::before{display:none!important} .intro__stage::after,.menu__stage::before{content:none!important}' });
    // the fallback hero shows the HTML wordmark, so leave the faint 3D one out of the still
    await p.evaluate(() => window.__cc.intro.stage.scene.traverse(o => { if (o.isMesh && o.geometry.parameters && o.geometry.parameters.height === .25 && o.material.depthWrite === false) o.material.visible = false; }));
    for (const j of jobs) {
      await p.evaluate(j => { let y; if (j.index != null) { const m = document.querySelector('[data-menu]'); const N = +getComputedStyle(m).getPropertyValue('--n'); y = m.offsetTop + (j.index + .02) / (N - 1) * (m.offsetHeight - innerHeight); } else y = 0; scrollTo(0, y); }, j);
      await p.waitForTimeout(500);
      await p.evaluate(() => new Promise(r => { let n = 0; const f = () => (++n > 8 ? r() : requestAnimationFrame(f)); requestAnimationFrame(f); }));
      await p.screenshot({ path: path.join(V5, 'stills_raw', j.name + '.png') });
    }
    await ctx.close();
  };
  fs.mkdirSync(path.join(V5, 'stills_raw'), { recursive: true });
  const which = process.argv[2] || 'all';
  if (which !== 'menu') await shoot(1600, 1000, [{ name: 'hero' }]);
  if (which !== 'hero') await shoot(1200, 900, [{ name: 'sweet', index: 2 }, { name: 'savory', index: 10 }, { name: 'waffles', index: 17 }, { name: 'drinks', index: 20 }]);
  await b.close();
})();
