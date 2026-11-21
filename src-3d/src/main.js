// Entry for the 3D layer (loaded with import() by app.js once the page is up).
// Owns the render loop: the hero plays a 4.6 s automatic shot, the menu stage renders only while on screen.
import * as THREE from 'three';
import { createHero } from './hero.js';
import { createMenu } from './menu3d.js';
import { setSticker } from './food.js';
import { ITEMS, CATS } from './menu.js';
import { clamp01 } from './anim.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

function sectionProgress(sec) {
  const top = sec.getBoundingClientRect().top, len = sec.offsetHeight - innerHeight;
  return len > 0 ? clamp01(-top / len) : 0;
}
const frameWait = () => new Promise(r => requestAnimationFrame(() => r()));

export async function boot({ reduce = false } = {}) {
  const root = document.documentElement;
  const phone = matchMedia('(max-width: 760px), (pointer: coarse)').matches;
  const shot = /[?&]shot\b/.test(location.search);   // screenshots: fixed resolution, no easing between menu items
  const fixedPR = shot ? 1 : undefined;
  await new Promise(res => {
    const to = setTimeout(res, 2500);
    new THREE.TextureLoader().load('assets/media/sticker.webp', tx => { tx.colorSpace = THREE.SRGBColorSpace; setSticker(tx); clearTimeout(to); res(); }, undefined, () => { clearTimeout(to); res(); });
  });

  /* ---------------- hero: automatic, no scrolling ---------------- */
  const heroSec = $('[data-hero]'), menuSec = $('[data-menu]');
  const heroUI = {
    show() { root.classList.add('hero-live'); },
    done() { root.classList.add('hero-done'); },
  };
  const hero = createHero($('[data-hero-gl]'), heroUI, { phone, reduce, fixedPR });
  // warm-up: draw the finished frame once while the canvas is still invisible, so every shader and texture is ready
  // before the clock starts (no stutter in the first second), then rewind to the top of the shot
  hero.warm();
  await frameWait();
  hero.frame(0, 0);
  root.classList.add('gl-ready');
  hero.start();
  // any key, tap, wheel or scroll during the shot jumps to the end of it
  const ff = () => { if (hero.clock < hero.T.ui) hero.skip(); };
  ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(ev => addEventListener(ev, ff, { passive: true }));
  addEventListener('scroll', () => { if (scrollY > 40) ff(); }, { passive: true });
  const replay = $('[data-replay]');
  if (replay) replay.addEventListener('click', e => { e.stopPropagation(); root.classList.remove('hero-live', 'hero-done'); hero.restart(); });

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
      ui.order.setAttribute('aria-label', `Order ${it.name} now on Seamless (opens in a new tab)`);
      ui.item.classList.add('is-in');
      ui.tabs.forEach(t => { const on = t.dataset.mTab === cat.id; t.classList.toggle('is-on', on); if (on) t.setAttribute('aria-current', 'true'); else t.removeAttribute('aria-current'); t.style.setProperty('--p', on ? (k / catLen[cat.id]).toFixed(3) : (CATS.findIndex(c => c.id === t.dataset.mTab) < CATS.findIndex(c => c.id === cat.id) ? 1 : 0)); });
      root.style.setProperty('--mood', cat.mood[1]);
    },
  };
  ui.tabs.forEach(t => t.addEventListener('click', () => go(catStart[t.dataset.mTab])));
  $('[data-m-prev]').addEventListener('click', () => go(curIndex - 1));
  $('[data-m-next]').addEventListener('click', () => go(curIndex + 1));
  let menuOn = false, heroOn = true, menu = null, scrolling = 0;
  addEventListener('keydown', e => {
    if (!menuOn || e.altKey || e.metaKey || e.ctrlKey || /input|select|textarea/i.test((document.activeElement || {}).tagName || '')) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); go(curIndex + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(curIndex - 1); }
  });
  addEventListener('scroll', () => { scrolling = performance.now(); }, { passive: true });
  const makeMenu = () => { if (!menu) { menu = createMenu($('[data-menu-gl]'), menuUI, { phone, reduce, instant: shot, fixedPR }); } };

  /* ---------------- visibility + loop ---------------- */
  new IntersectionObserver(es => es.forEach(e => { heroOn = e.isIntersecting; })).observe(heroSec);
  new IntersectionObserver(es => es.forEach(e => { menuOn = e.isIntersecting; if (menuOn) makeMenu(); })).observe(menuSec);

  let lastT = performance.now(), hidden = false;
  document.addEventListener('visibilitychange', () => { hidden = document.hidden; lastT = performance.now(); });
  addEventListener('resize', () => { hero.resize(); if (menu) menu.resize(); });
  const t0 = performance.now();
  function loop(now) {
    requestAnimationFrame(loop);
    if (hidden) return;
    const dt = Math.min(.05, (now - lastT) / 1000); lastT = now; const t = (now - t0) / 1000;
    if (heroOn) { hero.resize(); hero.frame(dt, t); }
    else if (hero.clock < hero.T.end) hero.clock = hero.T.end;   // scrolled away mid-shot: finish it quietly
    if (menu && menuOn) { menu.resize(); menu.frame(dt, t, sectionProgress(menuSec)); root.classList.add('menu-ready'); }
  }
  requestAnimationFrame(loop);
  // the menu stage is built after the hero shot has played, then its items warm up a few at a time while the
  // browser is idle and the visitor is not scrolling, so nothing competes with the animation
  const ric = window.requestIdleCallback || (f => setTimeout(() => f({ timeRemaining: () => 8 }), 120));
  const idle = () => {
    if (performance.now() - scrolling < 400 || (heroOn && hero.clock < hero.T.end)) { setTimeout(() => ric(idle), 300); return; }
    makeMenu(); if (menu.warm()) ric(idle);
  };
  setTimeout(() => ric(idle), reduce ? 600 : (hero.T.end + .6) * 1000);
  window.__cc = { hero, get menu() { return menu; }, go };
}
