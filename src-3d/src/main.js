// Entry for the 3D layer (loaded with import() by app.js once the page is up).
// Owns the render loop: each sticky stage renders only while it is on screen.
import * as THREE from 'three';
import { createIntro } from './intro.js';
import { createMenu } from './menu3d.js';
import { setSticker } from './food.js';
import { ITEMS, CATS } from './menu.js';
import { seg, bell, clamp01, damp } from './anim.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

function sectionProgress(sec) {
  const top = sec.getBoundingClientRect().top, len = sec.offsetHeight - innerHeight;
  return len > 0 ? clamp01(-top / len) : 0;
}

export async function boot({ reduce = false } = {}) {
  const root = document.documentElement;
  const phone = matchMedia('(max-width: 760px), (pointer: coarse)').matches;
  const shot = /[?&]shot\b/.test(location.search);   // screenshots: no easing between scroll positions
  await new Promise(res => {
    const to = setTimeout(res, 2500);
    new THREE.TextureLoader().load('assets/media/sticker.webp', tx => { tx.colorSpace = THREE.SRGBColorSpace; setSticker(tx); clearTimeout(to); res(); }, undefined, () => { clearTimeout(to); res(); });
  });

  /* ---------------- intro ---------------- */
  const introSec = $('[data-intro]'), menuSec = $('[data-menu]');
  const caps = $$('.intro__caps li').map(li => ({ li, a: +li.dataset.from, b: +li.dataset.to }));
  const labels = Object.fromEntries($$('[data-label]').map(li => [li.dataset.label, li]));
  const kicker = $('[data-beat="hero"]'), brand = $('[data-brand]'), word = $('.wordmark');
  const brandRest = $$('[data-brand-rest]'), bar = $('[data-intro-bar]'), skip = $('[data-skip]');
  let wordRect = null;
  const introUI = {
    update(p, o) {
      kicker.style.opacity = 1 - seg(p, .025, .075);
      for (const c of caps) { const v = bell(p, c.a, c.b, .22); c.li.style.opacity = v; c.li.style.transform = `translateY(${((1 - v) * 14).toFixed(1)}px)`; }
      for (const k in labels) {
        const el = labels[k];
        if (o.labels && o.labels[k]) { el.style.opacity = o.labelAlpha; el.style.transform = `translate(${o.labels[k][0].toFixed(0)}px, ${o.labels[k][1].toFixed(0)}px)`; }
        else el.style.opacity = 0;
      }
      // the crepe's sweep drives the wipe that reveals the logo
      const b = seg(p, .8, .94);
      if (!wordRect || !wordRect.width) wordRect = word.getBoundingClientRect();
      const full = wordRect.width + 80;
      let wipe = 0;
      if (b >= .2 && b < .7) wipe = o.wipe - wordRect.left; else if (b >= .7) wipe = full;
      wipe = Math.max(0, Math.min(full, wipe));
      word.style.setProperty('--wipe', wipe.toFixed(1) + 'px');
      word.style.setProperty('--edge', wipe > 0 && wipe < wordRect.width + 30 ? 1 : 0);
      const rest = seg(p, .885, .93);
      brandRest.forEach(el => { el.style.opacity = rest; el.style.transform = `translateY(${((1 - rest) * 16).toFixed(1)}px)`; });
      brand.classList.toggle('is-live', rest > .5);
      skip.style.opacity = 1 - seg(p, .86, .9);
      bar.style.transform = `scaleX(${p.toFixed(4)})`;
    },
  };
  skip.addEventListener('click', e => { e.preventDefault(); scrollTo({ top: menuSec.offsetTop, behavior: 'auto' }); $('[data-m-next]').focus({ preventScroll: true }); });

  const intro = createIntro($('[data-intro-gl]'), introUI, { phone, reduce });
  let introP = sectionProgress(introSec);

  /* ---------------- menu ---------------- */
  const N = ITEMS.length;
  const ui = {
    cat: $('[data-m-cat]'), count: $('[data-m-count]'), name: $('[data-m-name]'), ing: $('[data-m-ing]'), price: $('[data-m-price]'),
    note: $('[data-m-note]'), item: $('[data-m-item]'), tabs: $$('[data-m-tab]'), order: $('[data-m-order]'),
  };
  const catStart = Object.fromEntries(CATS.map(c => [c.id, ITEMS.findIndex(i => i.cat === c.id)]));
  const catLen = Object.fromEntries(CATS.map(c => [c.id, ITEMS.filter(i => i.cat === c.id).length]));
  const indexTop = i => menuSec.offsetTop + (i + .02) / (N - 1) * (menuSec.offsetHeight - innerHeight);
  let curIndex = 0;
  const go = i => { i = Math.max(0, Math.min(N - 1, i)); scrollTo({ top: indexTop(i), behavior: reduce ? 'auto' : 'smooth' }); };
  const menuUI = {
    go,
    onItem(i, it, cat) {
      curIndex = i;
      const k = i - catStart[cat.id] + 1;
      ui.item.classList.remove('is-in'); void ui.item.offsetWidth;
      ui.cat.textContent = cat.name;
      ui.count.textContent = `${String(k).padStart(2, '0')} / ${String(catLen[cat.id]).padStart(2, '0')}`;
      ui.name.textContent = it.name; ui.ing.textContent = it.ing; ui.price.textContent = it.price; ui.note.textContent = cat.note;
      ui.order.setAttribute('aria-label', `Order ${it.name} online (opens in a new tab)`);
      ui.item.classList.add('is-in');
      ui.tabs.forEach(t => { const on = t.dataset.mTab === cat.id; t.classList.toggle('is-on', on); if (on) t.setAttribute('aria-current', 'true'); else t.removeAttribute('aria-current'); t.style.setProperty('--p', on ? (k / catLen[cat.id]).toFixed(3) : (CATS.findIndex(c => c.id === t.dataset.mTab) < CATS.findIndex(c => c.id === cat.id) ? 1 : 0)); });
      root.style.setProperty('--mood', cat.mood[1]);
    },
  };
  ui.tabs.forEach(t => t.addEventListener('click', () => go(catStart[t.dataset.mTab])));
  $('[data-m-prev]').addEventListener('click', () => go(curIndex - 1));
  $('[data-m-next]').addEventListener('click', () => go(curIndex + 1));
  let menuOn = false, introOn = true, menu = null;
  addEventListener('keydown', e => {
    if (!menuOn || e.altKey || e.metaKey || e.ctrlKey || /input|select|textarea/i.test((document.activeElement || {}).tagName || '')) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); go(curIndex + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(curIndex - 1); }
  });
  const makeMenu = () => { if (!menu) { menu = createMenu($('[data-menu-gl]'), menuUI, { phone, reduce, instant: shot }); } };

  /* ---------------- visibility + loop ---------------- */
  new IntersectionObserver(es => es.forEach(e => { introOn = e.isIntersecting; })).observe(introSec);
  new IntersectionObserver(es => es.forEach(e => { menuOn = e.isIntersecting; if (menuOn) makeMenu(); })).observe(menuSec);
  const near = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { makeMenu(); near.disconnect(); } }), { rootMargin: '120% 0px' });
  near.observe(menuSec);

  let lastT = performance.now(), hidden = false, first = true;
  document.addEventListener('visibilitychange', () => { hidden = document.hidden; lastT = performance.now(); });
  addEventListener('resize', () => { intro.resize(); if (menu) menu.resize(); wordRect = null; });
  const t0 = performance.now();
  function loop(now) {
    requestAnimationFrame(loop);
    if (hidden) return;
    const dt = Math.min(.05, (now - lastT) / 1000); lastT = now; const t = (now - t0) / 1000;
    if (introOn) {
      introP = shot ? sectionProgress(introSec) : damp(introP, sectionProgress(introSec), 6, dt);
      intro.resize(); intro.frame(dt, t, introP);
      if (first) { first = false; root.classList.add('gl-ready'); }
    }
    if (menu && menuOn) { menu.resize(); menu.frame(dt, t, sectionProgress(menuSec)); root.classList.add('menu-ready'); }
  }
  requestAnimationFrame(loop);
  // build the remaining menu items while the browser is idle
  const ric = window.requestIdleCallback || (f => setTimeout(f, 200));
  const idle = () => { makeMenu(); if (menu.warm()) ric(idle); };
  setTimeout(() => ric(idle), 2500);
  window.__cc = { intro, get menu() { return menu; }, go };
}
