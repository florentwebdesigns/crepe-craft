// Menu stage: one item centred on the glossy pedestal, neighbours smaller, dimmer and blurred in a curved row.
// The page's scroll picks the item; arrows, keys and swipes scroll for you. Drag spins the item with inertia.
import * as THREE from 'three';
import { createStage } from './stage.js';
import { buildItem } from './food.js';
import { ITEMS, CATS } from './menu.js';
import { ease, lerp, clamp01, damp } from './anim.js';

export function createMenu(canvas, ui, opt = {}) {
  const phone = !!opt.phone, reduce = !!opt.reduce;
  const S = createStage(canvas, { phone });
  const { scene, camera } = S;
  const N = ITEMS.length;
  const holders = ITEMS.map(() => { const h = new THREE.Group(); h.visible = false; scene.add(h); return h; });
  const models = new Array(N), spin = new Array(N).fill(0);
  function ensure(i) {
    if (i < 0 || i >= N || models[i]) return;
    const m = buildItem(ITEMS[i].r, { lite: phone });
    const k = ITEMS[i].r.type === 'drink' ? 1.22 : 1;
    m.scale.setScalar(k);
    models[i] = m; holders[i].add(m);
  }
  let cur = 0, ti = 0, prevTi = -1, catId = null, yaw = 0, vel = 0, drag = null, enterT = -9, enterFrom = 0;
  const camPos = new THREE.Vector3(0, 2, 6.4), camT = new THREE.Vector3(0, .4, 0), tmp = new THREE.Vector3();
  let kindY = .35;

  function layout(aspect) {
    const wide = aspect > 1.05;
    return wide ? { th: .42, R: 7.2, s: .5, y: .15 } : { th: .36, R: 4.2, s: .46, y: .3 };
  }

  // pointer: drag to spin (with inertia), quick flick to change item
  const el = canvas;
  el.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY, t: performance.now(), lx: e.clientX, moved: 0 }; vel = 0; });
  window.addEventListener('pointermove', e => {
    if (!drag) { if (e.pointerType === 'mouse') { const r = el.getBoundingClientRect(); tilt.x = ((e.clientX - r.left) / r.width - .5) * 2; tilt.y = ((e.clientY - r.top) / r.height - .5) * 2; } return; }
    const dx = e.clientX - drag.lx; drag.lx = e.clientX; drag.moved += Math.abs(dx);
    yaw += dx * .012; vel = dx * .012 * 60;
  });
  const end = e => {
    if (!drag) return;
    const dt = performance.now() - drag.t, dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (dt < 380 && Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4 && ui.go) { ui.go(ti + (dx < 0 ? 1 : -1)); vel = 0; }
    drag = null;
  };
  window.addEventListener('pointerup', end); window.addEventListener('pointercancel', end);
  const tilt = { x: 0, y: 0 }, tiltS = { x: 0, y: 0 };

  function frame(dt, t, prog) {
    const [W, Hh] = S.size(), aspect = W / Math.max(1, Hh), L = layout(aspect);
    ti = Math.round(clamp01(prog) * (N - 1));
    for (let k = -2; k <= 2; k++) ensure(ti + k);
    if (ti !== prevTi) {
      if (prevTi >= 0 && !reduce && !opt.instant) { enterT = t; enterFrom = Math.sign(ti - prevTi); }
      prevTi = ti; yaw = 0; vel = 0;
      const it = ITEMS[ti], cat = CATS.find(c => c.id === it.cat);
      if (cat.id !== catId) { const first = catId === null; catId = cat.id; S.setMood(cat.mood[0], cat.mood[1], first); }
      if (ui.onItem) ui.onItem(ti, it, cat);
    }
    cur = opt.instant ? ti : reduce ? damp(cur, ti, 14, dt) : damp(cur, ti, 6.5, dt);
    if (!drag) { yaw += vel * dt; vel *= Math.exp(-dt * 2.6); }

    // place items along the curved row
    for (let i = 0; i < N; i++) {
      const h = holders[i], o = i - cur, ao = Math.abs(o);
      h.visible = !!models[i] && ao < 2.6;
      if (!h.visible) continue;
      const near = clamp01(ao);
      const a = o * L.th;
      h.position.set(Math.sin(a) * L.R, lerp(0, L.y, near) + (reduce ? 0 : Math.sin(t * 1.1 + i) * .03 * near), (Math.cos(a) - 1) * L.R - near * .4);
      h.scale.setScalar(lerp(1, L.s, near));
      h.rotation.set(lerp(0, .22, near), -o * .35, -o * .05);
      // spin: centre item idles and follows the drag; a newcomer spins in a full turn with a bounce
      let ry = 0;
      if (i === ti) {
        const k = clamp01((t - enterT) / 1.05);
        ry = yaw + (reduce ? 0 : t * .22) - (1 - ease.outBack(k, 1.3)) * Math.PI * 2 * enterFrom;
        h.position.y += reduce ? 0 : Math.sin(k * Math.PI) * .28 * (1 - k);
      } else ry = (reduce ? 0 : t * .1) + i;
      models[i].rotation.y = ry;
    }
    // pedestal + shadow sit under the centre slot; the shadow follows the item's footprint
    const it = ITEMS[ti], drink = it.r.type === 'drink';
    S.shadow.scale.setScalar(drink ? .55 : 1);
    kindY = damp(kindY, drink ? 1.05 : .32, 4, dt);
    // camera: closer framing for the flat plates, a little lower for tall cups
    tiltS.x = damp(tiltS.x, tilt.x, 3, dt); tiltS.y = damp(tiltS.y, tilt.y, 3, dt);
    const wide = aspect > 1.05;
    const dist = wide ? (drink ? 9.4 : 9.0) : Math.min(15, (drink ? 6.4 : 6.6) / Math.max(.4, aspect)), elev = drink ? .18 : .42;
    camPos.set(tiltS.x * .35, kindY + Math.sin(elev) * dist + tiltS.y * -.15, Math.cos(elev) * dist);
    camera.position.copy(camPos); camT.set(0, kindY, 0); camera.lookAt(camT);
    S.key.target.position.set(0, kindY * .5, 0);
    S.render(dt, t);
  }

  // build the rest of the menu quietly so later items appear without a hitch
  let warmI = 0;
  function warm() { while (warmI < N && models[warmI]) warmI++; if (warmI < N) { ensure(warmI); return true; } return false; }

  function resize() {
    if (S.resize()) {
      const [W, Hh] = S.size(), portrait = Hh > W;
      // phones: push the object into the top half so the text can sit below it
      // desktop: nudge the object right and up so the name, price and buttons sit clear of the pedestal
      if (portrait) camera.setViewOffset(W, Hh, 0, Hh * .17, W, Hh); else camera.setViewOffset(W, Hh, -W * (W / Hh > 1.25 ? .11 : .06), Hh * .1, W, Hh);
      S.setBlur(1, portrait ? .3 : .2);
    }
  }
  resize();
  return { frame, resize, warm, stage: S, count: N };
}
