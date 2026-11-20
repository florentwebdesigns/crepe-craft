// Generated textures (colour, normal, roughness, alpha), painted in code on canvases.
// Colours are sampled from the cafe's own photos (batter, waffle, fruit, drinks).
import * as THREE from 'three';
import { perlin, fbm, worley, clamp, smooth, mix, mix3, hex, rng } from './noise.js';

const cache = new Map();
export function cached(key, make) { if (!cache.has(key)) cache.set(key, make()); return cache.get(key); }

/* gen(size, f): f(u, v, out) fills out.c=[r,g,b] (0..255), out.h (height 0..1), out.r (roughness 0..1), out.a (0..1)
   returns { map, normalMap, roughnessMap, alphaMap } as needed */
export function gen(size, f, opt = {}) {
  const w = size, h = opt.h || size;
  const cv = mk(w, h), ctx = cv.getContext('2d'), img = ctx.createImageData(w, h), d = img.data;
  const H = opt.normal ? new Float32Array(w * h) : null;
  const R = opt.rough ? mk(w, h) : null, rimg = R ? R.getContext('2d').createImageData(w, h) : null;
  const A = opt.alpha ? mk(w, h) : null, aimg = A ? A.getContext('2d').createImageData(w, h) : null;
  const o = { c: [0, 0, 0], h: 0, r: .5, a: 1 };
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    o.h = 0; o.r = .5; o.a = 1;
    f((x + .5) / w, (y + .5) / h, o);
    const i = (y * w + x) * 4;
    d[i] = o.c[0]; d[i + 1] = o.c[1]; d[i + 2] = o.c[2]; d[i + 3] = opt.alphaInMap ? o.a * 255 : 255;
    if (H) H[y * w + x] = o.h;
    if (rimg) { const v = o.r * 255; rimg.data[i] = rimg.data[i + 1] = rimg.data[i + 2] = v; rimg.data[i + 3] = 255; }
    if (aimg) { const v = o.a * 255; aimg.data[i] = aimg.data[i + 1] = aimg.data[i + 2] = v; aimg.data[i + 3] = 255; }
  }
  ctx.putImageData(img, 0, 0);
  const out = { map: tex(cv, true, opt) };
  if (H) out.normalMap = normalFromHeight(H, w, h, opt.normal, opt);
  if (R) { R.getContext('2d').putImageData(rimg, 0, 0); out.roughnessMap = tex(R, false, opt); }
  if (A) { A.getContext('2d').putImageData(aimg, 0, 0); out.alphaMap = tex(A, false, opt); }
  out.canvas = cv;
  return out;
}
function mk(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
export function tex(cv, srgb, opt = {}) {
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 8;
  if (opt.repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.needsUpdate = true;
  return t;
}
function normalFromHeight(H, w, h, strength, opt) {
  const cv = mk(w, h), ctx = cv.getContext('2d'), img = ctx.createImageData(w, h), d = img.data;
  const wrap = !!opt.repeat;
  const at = (x, y) => {
    if (wrap) { x = (x + w) % w; y = (y + h) % h; } else { x = x < 0 ? 0 : x >= w ? w - 1 : x; y = y < 0 ? 0 : y >= h ? h - 1 : y; }
    return H[y * w + x];
  };
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (at(x + 1, y) - at(x - 1, y)) * strength, dy = (at(x, y + 1) - at(x, y - 1)) * strength;
    let nx = -dx, ny = dy, nz = 1; const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
    const i = (y * w + x) * 4;
    d[i] = (nx * .5 + .5) * 255; d[i + 1] = (ny * .5 + .5) * 255; d[i + 2] = (nz * .5 + .5) * 255; d[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return tex(cv, false, opt);
}

/* ---------------- Crepe batter (planar UV over the unfolded disc, radius .5 in UV) ---------------- */
export function batter(seed = 3, size = 1024) {
  return cached('batter' + seed + size, () => {
    const n1 = perlin(seed), n2 = perlin(seed + 7), n3 = perlin(seed + 13), n4 = perlin(seed + 21), W = worley(seed + 5), W2 = worley(seed + 9), W3 = worley(seed + 11);
    const pale = hex('#ECCB8E'), gold = hex('#DEA556'), amber = hex('#C47E37'), brown = hex('#98531F'), dark = hex('#5E2C0F');
    return gen(size, (u, v, o) => {
      const px = (u - .5) * 2, py = (v - .5) * 2, r = Math.hypot(px, py), ang = Math.atan2(py, px);
      // how cooked each area is: pan hot spots, browner toward the thin rim
      const heat = clamp(.48 + .6 * fbm(n3, px * 1.5, py * 1.5, 4) + .22 * smooth(.6, .98, r));
      // lace: warped cells, brown islands with paler lines between them (the griddle pattern)
      const wx = px * 8.5 + 1.3 * fbm(n1, px * 2.4, py * 2.4, 3), wy = py * 8.5 + 1.3 * fbm(n2, px * 2.4 + 3, py * 2.4, 3);
      const [d1, d2] = W(wx, wy);
      const spot = smooth(0, .24, d2 - d1) * smooth(.3, .78, heat + .22 * n4(px * 6, py * 6));
      const [f1, f2] = W3(wx * 2.6, wy * 2.6);
      const spot2 = smooth(0, .26, f2 - f1) * smooth(.4, .9, heat);
      let b = clamp(.12 + .38 * heat + .32 * spot + .14 * spot2 + .05 * n4(px * 48, py * 48));
      let c = b < .4 ? mix3(pale, gold, b / .4) : b < .64 ? mix3(gold, amber, (b - .4) / .24) : b < .84 ? mix3(amber, brown, (b - .64) / .2) : mix3(brown, dark, (b - .84) / .16);
      // tiny pores where bubbles popped
      const [e1] = W2(px * 26, py * 26);
      const pore = (1 - smooth(.035, .075, e1)) * smooth(.45, .85, heat);
      c = mix3(c, mix3(c, dark, .6), pore * .6);
      o.c = c;
      o.h = .45 * spot + .22 * spot2 + .1 * heat - pore * .35 + .05 * fbm(n2, px * 70, py * 70, 2);
      o.r = clamp(.74 - .22 * b + .05 * n1(px * 30, py * 30));
      // lacy, irregular edge with holes near the rim
      const edge = .955 + .03 * fbm(n1, Math.cos(ang) * 3, Math.sin(ang) * 3, 3) + .012 * n2(ang * 14, 1.3);
      const [h1] = W2(px * 14, py * 14);
      const hole = (1 - smooth(.05, .1, h1)) * smooth(.88, .95, r) * smooth(.55, .8, heat);
      o.a = r < edge && hole < .5 ? 1 : 0;
    }, { normal: 4, rough: true, alpha: true });
  });
}

/* ---------------- Waffle (top projection, uses the same pocket height field as the geometry) ---------------- */
export function waffleTex(hf, seed = 4, size = 1024) {
  return cached('waffle' + seed + size, () => {
    const n1 = perlin(seed), n2 = perlin(seed + 3);
    const floor = hex('#E6BE7A'), wall = hex('#CF9650'), top = hex('#B5773A'), crisp = hex('#80491D');
    return gen(size, (u, v, o) => {
      const x = (u - .5) * 2, z = (v - .5) * 2;
      const h = hf(x, z);             // 0 pocket floor .. 1 ridge top
      const m = fbm(n1, x * 3, z * 3, 4) * .5 + .5;
      let c = h < .5 ? mix3(floor, wall, h / .5) : mix3(wall, top, (h - .5) / .5);
      c = mix3(c, crisp, smooth(.55, .95, m) * smooth(.7, 1, h) * .7);
      c = mix3(c, mix3(c, hex('#F3D79A'), .5), (1 - smooth(.25, .6, m)) * (1 - h) * .5);
      const r = Math.hypot(x, z); c = mix3(c, crisp, smooth(.86, 1, r) * .5);
      o.c = c;
      o.h = .3 * fbm(n2, x * 36, z * 36, 3);
      o.r = clamp(.62 - .16 * h + .08 * n2(x * 20, z * 20));
    }, { normal: 1.4, rough: true });
  });
}

/* ---------------- Fruit ---------------- */
export function strawberrySkin(size = 512) {
  return cached('sskin' + size, () => {
    const n = perlin(31), n2 = perlin(32);
    const red = hex('#C8141E'), deep = hex('#8A0B12'), top = hex('#E85A4F'), seed = hex('#E9C463');
    return gen(size, (u, v, o) => {
      // seeds on a staggered grid, sitting in little pits
      const rows = 14, cols = 20, row = v * rows, ri = Math.floor(row), off = (ri % 2) * .5;
      const col = u * cols + off, fx = col - Math.floor(col) - .5, fy = row - ri - .5;
      const d = Math.hypot(fx * 1.1, fy * 1.4);
      const pit = 1 - smooth(.12, .3, d), sd = 1 - smooth(.06, .11, d);
      let c = mix3(red, deep, clamp(.5 + .5 * fbm(n, u * 8, v * 8, 4)) * .7);
      c = mix3(c, top, smooth(.05, 0, v) + smooth(.12, 0, v) * .4);
      c = mix3(c, deep, pit * .5);
      c = mix3(c, seed, sd * (v > .06 ? 1 : 0));
      o.c = c; o.h = -pit * .6 + sd * .5 + .05 * n2(u * 80, v * 80);
      o.r = clamp(.28 + pit * .2 + sd * .3);
    }, { normal: 4, rough: true });
  });
}
export function strawberryFace(size = 512) {
  return cached('sface' + size, () => {
    const n = perlin(41), n2 = perlin(43);
    const core = hex('#F2BFB2'), inner = hex('#E5746E'), flesh = hex('#CF2F36'), rim = hex('#9C0E18'), seedC = hex('#E3B85A');
    return gen(size, (u, v, o) => {
      const x = (u - .5) * 2, y = (v - .5) * 2.0, r = Math.hypot(x * 1.05, y * .82), a = Math.atan2(y, x);
      // pale core running down the middle, with fibres fanning out to the skin
      const coreD = Math.hypot(x * 3.2, (y + .08) * 1.15);
      const coreM = 1 - smooth(.12, .5, coreD);
      const stri = Math.pow(.5 + .5 * Math.sin(a * 26 + 4 * n(x * 2.5, y * 2.5)), 3);
      let c = mix3(flesh, inner, (1 - smooth(.2, .75, coreD)) * .7);
      c = mix3(c, core, coreM * .9);
      c = mix3(c, mix3(c, core, .55), stri * smooth(.25, .6, r) * (1 - smooth(.72, .86, r)) * .45);
      c = mix3(c, mix3(flesh, rim, .5), .25 * (fbm(n2, x * 5, y * 5, 3) * .5 + .5));
      c = mix3(c, rim, smooth(.8, .95, r));
      // seeds just under the skin
      const sa = a * 9, sd = Math.hypot((sa - Math.round(sa)) * .35, (r - .9) * 6);
      c = mix3(c, seedC, (1 - smooth(.05, .12, sd)) * .8);
      o.c = c; o.h = stri * .25 * smooth(.3, .8, r) + .12 * fbm(n, x * 14, y * 14, 3) - coreM * .05;
      o.r = .18 + .12 * coreM + .06 * n2(x * 20, y * 20);
    }, { normal: 3.5, rough: true });
  });
}
export function bananaFace(size = 256) {
  return cached('bface' + size, () => {
    const n = perlin(51);
    const flesh = hex('#F1DC9C'), ring = hex('#DDBF6E'), seed = hex('#6B4A22');
    return gen(size, (u, v, o) => {
      const x = (u - .5) * 2, y = (v - .5) * 2, r = Math.hypot(x, y), a = Math.atan2(y, x);
      let c = mix3(flesh, ring, smooth(.75, .98, r) * .8);
      c = mix3(c, hex('#F7E8B8'), (1 - smooth(0, .35, r)) * .4);
      // three-lobed seed star
      const lobe = Math.cos(a * 3) * .5 + .5, star = (1 - smooth(.04, .09, Math.abs(r - .16 - .05 * lobe))) * (r < .3 ? 1 : 0);
      const dots = (1 - smooth(.012, .03, Math.abs(r - .2))) * (Math.sin(a * 18) > .6 ? 1 : 0);
      c = mix3(c, mix3(c, seed, .35), star * .6);
      c = mix3(c, seed, dots * .7);
      c = mix3(c, mix3(c, ring, .5), (.5 + .5 * Math.sin(a * 40 + n(x * 5, y * 5) * 4)) * smooth(.3, .9, r) * .25);
      o.c = c; o.h = .15 * fbm(n, x * 10, y * 10, 3) - star * .1; o.r = .42;
    }, { normal: 2, rough: true });
  });
}
export function berryTex(kind, size = 256) {  // blueberry / raspberry skins
  return cached('berry' + kind + size, () => {
    const n = perlin(kind === 'blue' ? 61 : 62);
    const a = hex(kind === 'blue' ? '#2B3768' : '#B4123A'), b = hex(kind === 'blue' ? '#141B3A' : '#7A0A27'), bloom = hex(kind === 'blue' ? '#7C88B5' : '#E0506E');
    return gen(size, (u, v, o) => {
      const m = fbm(n, u * 6, v * 6, 4) * .5 + .5;
      let c = mix3(a, b, m);
      if (kind === 'blue') c = mix3(c, bloom, smooth(.5, .9, fbm(n, u * 12 + 3, v * 12, 3) * .5 + .5) * .45);
      else { const dr = Math.hypot(((u * 9) % 1) - .5, ((v * 7) % 1) - .5); c = mix3(c, bloom, (1 - smooth(.1, .45, dr)) * .35); o.h = 1 - smooth(.1, .5, dr); }
      o.c = c; o.r = kind === 'blue' ? .55 : .3;
    }, { normal: 3, rough: true });
  });
}

/* ---------------- Wood serving board with the engraved name (like the cafe's boards) ---------------- */
export function woodTex(size = 1024) {
  return cached('wood' + size, () => {
    const n = perlin(71), n2 = perlin(72);
    const light = hex('#6E4426'), dark = hex('#331B0C'), mid = hex('#573219');
    const out = gen(size, (u, v, o) => {
      const x = (u - .5) * 2, y = (v - .5) * 2;
      const g = y * 11 + 1.6 * fbm(n, x * .9, y * 2.2, 4) + .35 * n2(x * 5, y * 24);
      const line = .5 + .5 * Math.sin(g * Math.PI);
      const fine = .5 + .5 * Math.sin((y * 260 + 8 * n(x * 4, y * 14)) * Math.PI);
      const blot = fbm(n2, x * 2, y * 6, 3) * .5 + .5;
      let c = mix3(light, mid, line * .35 + blot * .25);
      c = mix3(c, dark, smooth(.9, 1, line) * .18 + fine * .07);
      const r = Math.hypot(x, y); c = mix3(c, dark, smooth(.88, 1, r) * .45);
      o.c = c; o.h = line * .2 + fine * .2; o.r = .55 + .12 * line + .1 * blot;
    }, { normal: 2, rough: true });
    // engraved "Crepe Craft" script near the rim, like the boards in the menu photos
    const ctx = out.canvas.getContext('2d');
    ctx.save(); ctx.translate(size / 2, size / 2); ctx.rotate(-.42);
    ctx.font = `italic 700 ${size * .07}px Georgia, serif`; ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(60,30,12,.55)'; ctx.fillText('Crepe Craft', 0, -size * .36);
    ctx.restore(); out.map.needsUpdate = true;
    return out;
  });
}

/* ---------------- Savory ---------------- */
export function leafTex(kind = 'spinach', size = 256) {
  return cached('leaf' + kind + size, () => {
    const n = perlin(kind === 'basil' ? 81 : 82);
    const base = hex(kind === 'basil' ? '#3E8E2C' : '#1F4A1A'), vein = hex(kind === 'basil' ? '#8CC46A' : '#4E7A35'), dark = hex(kind === 'basil' ? '#24561A' : '#10260D');
    return gen(size, (u, v, o) => {
      const x = (u - .5) * 2, y = v;             // leaf along v, tip at v=1
      const wdt = Math.sin(Math.PI * Math.pow(y, .8)) * (kind === 'basil' ? .62 : .78) * (1 + .05 * n(y * 9, 1));
      const inside = Math.abs(x) < wdt ? 1 : 0;
      const mid = 1 - smooth(.01, .05, Math.abs(x));
      const side = 1 - smooth(.01, .035, Math.abs(((Math.abs(x) * 3 - y * 2.2) % .5 + .5) % .5 - .25));
      let c = mix3(base, dark, clamp(.5 + .6 * fbm(n, x * 4, y * 6, 4)) * .6);
      c = mix3(c, vein, Math.max(mid, side * .6) * .8);
      o.c = c; o.a = inside; o.h = Math.max(mid, side) * .5 + .2 * fbm(n, x * 10, y * 10, 3); o.r = kind === 'basil' ? .35 : .45;
    }, { normal: 3, rough: true, alpha: true });
  });
}
export function tomatoFace(size = 256) {
  return cached('tomato' + size, () => {
    const n = perlin(91);
    const red = hex('#D3261C'), gel = hex('#E8714A'), seed = hex('#F2D58A'), skin = hex('#B3140F');
    return gen(size, (u, v, o) => {
      const x = (u - .5) * 2, y = (v - .5) * 2, r = Math.hypot(x, y), a = Math.atan2(y, x);
      const k = ((a / (Math.PI * 2) * 5) % 1 + 1) % 1, chamber = (1 - smooth(.28, .42, Math.abs(k - .5))) * smooth(.25, .35, r) * (1 - smooth(.72, .8, r));
      let c = mix3(red, gel, chamber * .8);
      const sd = (Math.sin(a * 40) > .7 && Math.abs(r - .55) < .06) ? 1 : 0;
      c = mix3(c, seed, sd * chamber);
      c = mix3(c, skin, smooth(.9, .98, r));
      o.c = c; o.h = chamber * -.3 + sd * .2; o.r = .2 + .2 * (1 - chamber);
    }, { normal: 2, rough: true });
  });
}
export function grillTex(size = 256) {
  return cached('grill' + size, () => {
    const n = perlin(101);
    const meat = hex('#D9B07A'), sear = hex('#9A5E2A'), mark = hex('#3C2010');
    return gen(size, (u, v, o) => {
      const m = fbm(n, u * 6, v * 6, 4) * .5 + .5;
      let c = mix3(meat, sear, m * .8);
      const st = 1 - smooth(.06, .14, Math.abs(((u + v * .4) * 5) % 1 - .5));
      c = mix3(c, mark, st * .8);
      o.c = c; o.h = -st * .3 + .2 * m; o.r = .5 - st * .15;
    }, { normal: 3, rough: true });
  });
}
export function mushroomFace(size = 256) {
  return cached('mush' + size, () => {
    const n = perlin(111);
    const flesh = hex('#D8C6A4'), cap = hex('#7A5638'), gill = hex('#9C8466');
    return gen(size, (u, v, o) => {
      const x = (u - .5) * 2, y = (v - .5) * 2;
      // classic sliced-mushroom silhouette: cap dome on top, stem below
      const capIn = (x * x / .9 + Math.pow(Math.max(0, -y + .05), 2) / .55) < 1 && y < .15;
      const stemIn = Math.abs(x) < .22 + .05 * y && y >= .05 && y < .85;
      const inside = capIn || stemIn ? 1 : 0;
      let c = mix3(flesh, gill, (1 - smooth(.0, .12, Math.abs(y - .12))) * .7);
      const edgeD = capIn ? 1 - (x * x / .9 + Math.pow(Math.max(0, -y + .05), 2) / .55) : 1;
      c = mix3(c, cap, (1 - smooth(0, .12, edgeD)) * (y < .1 ? 1 : 0));
      c = mix3(c, mix3(c, cap, .4), .3 * (fbm(n, x * 8, y * 8, 3) * .5 + .5));
      o.c = c; o.a = inside; o.h = .2 * fbm(n, x * 12, y * 12, 3); o.r = .5;
    }, { normal: 2, rough: true, alpha: true });
  });
}
export function speckleTex(base, spec, seed, size = 256, density = .9) {   // ice cream, cheese, crumbs
  return cached('spk' + base + spec + seed + size, () => {
    const n = perlin(seed), W = worley(seed + 1);
    const b = hex(base), s = hex(spec);
    return gen(size, (u, v, o) => {
      const m = fbm(n, u * 5, v * 5, 4) * .5 + .5;
      const [d1] = W(u * 60, v * 60);
      const dot = (1 - smooth(.05, .12, d1)) * (n(u * 9 + 7, v * 9) > density - 1 ? 1 : 0);
      let c = mix3(b, mix3(b, [255, 255, 255], .3), m * .4);
      c = mix3(c, s, dot * .85);
      o.c = c; o.h = m * .6 - dot * .2; o.r = .5;
    }, { normal: 2, rough: true, repeat: true });
  });
}

/* ---------------- Drinks: condensation normals, cream ---------------- */
export function condensation(size = 512) {
  return cached('cond' + size, () => {
    const W = worley(121), W2 = worley(122), n = perlin(123);
    return gen(size, (u, v, o) => {
      const [d1] = W(u * 26, v * 40), [e1] = W2(u * 70, v * 110);
      const drop = 1 - smooth(.18, .36, d1), mist = 1 - smooth(.1, .3, e1);
      o.c = [255, 255, 255]; o.h = drop * .9 + mist * .25 + .03 * n(u * 50, v * 50);
      o.r = clamp(.05 + .25 * mist * (1 - drop));
    }, { normal: 6, rough: true, repeat: true });
  });
}
export function liquidTex(stops, seed = 131, size = 256, opts = {}) {  // vertical colour layers (bottom->top) with marbling
  return cached('liq' + JSON.stringify(stops) + seed + JSON.stringify(opts), () => {
    const n = perlin(seed), cs = stops.map(s => [s[0], hex(s[1])]);
    const drip = opts.drip ? hex(opts.drip) : null;
    return gen(size, (u, v, o) => {
      const y = 1 - v;
      const yy = clamp(y + .04 * fbm(n, u * 6, y * 3, 3));
      let c = cs[0][1];
      for (let i = 1; i < cs.length; i++) { const t = smooth(cs[i - 1][0], cs[i][0], yy); c = mix3(c, cs[i][1], t); }
      c = mix3(c, mix3(c, [255, 255, 255], .25), (fbm(n, u * 10, y * 14, 4) * .5 + .5) * (opts.marble || .2));
      if (drip) {  // chocolate/caramel streaks down the inside of the cup
        const k = u * (opts.drips || 7) + .25 * n(u * 3, y * 1.5), f = Math.abs((k % 1) - .5);
        const len = .3 + .5 * (.5 + .5 * n(Math.floor(k) * 3.1, 2)), wdt = .035 + .03 * (.5 + .5 * n(Math.floor(k) * 1.7, y * 4));
        const tip = 1 - len, bead = Math.exp(-Math.pow((y - tip) / .025, 2)) * .03;
        const s = (1 - smooth(wdt + bead, wdt + bead + .02, f)) * smooth(tip - .012, tip + .004, y);
        c = mix3(c, drip, s * .92);
      }
      o.c = c; o.r = .35;
    }, { h: size * 2 });
  });
}
