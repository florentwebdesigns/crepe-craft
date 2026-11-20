// Builds each menu item from a recipe: crepes (folded disc), waffles (pocket grid), drinks (cups).
// Every item is a THREE.Group sitting on y = 0, roughly 2.4 units wide, with userData.parts for the exploded view.
import * as THREE from 'three';
import * as G from './geo.js';
import { mats, U } from './mats.js';
import { rng, perlin } from './noise.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
function mesh(g, m, cast = true, recv = true) { const o = new THREE.Mesh(g, m); o.castShadow = cast; o.receiveShadow = recv; return o; }

/* ---------------- toppings ---------------- */
const geoCache = new Map();
const GC = (k, f) => { if (!geoCache.has(k)) geoCache.set(k, f()); return geoCache.get(k); };

export const top = {
  strawberrySlice(r) {   // a slice through a strawberry: red edge, pale heart, glossy
    const g = GC('sslice', () => {
      const sh = new THREE.Shape(), pr = G.strawberryProfile(.34, .15);
      sh.moveTo(0, 0); pr.forEach(p => sh.lineTo(p[0], p[1])); for (let i = pr.length - 1; i >= 0; i--) sh.lineTo(-pr[i][0], pr[i][1]);
      const eg = new THREE.ExtrudeGeometry(sh, { depth: .022, bevelEnabled: true, bevelThickness: .008, bevelSize: .008, bevelSegments: 3, curveSegments: 28 });
      eg.translate(0, -.17, -.011);
      // planar uv for faces over the slice outline
      const p = eg.attributes.position, uv = eg.attributes.uv;
      for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) / .36 + .5, p.getY(i) / .4 + .5);
      return eg;
    });
    const o = new THREE.Mesh(g, [mats.sface(), mats.sskin()]); o.castShadow = o.receiveShadow = true;
    o.scale.setScalar(1.05 + r() * .2);
    return o;
  },
  strawberryHalf(r) {
    const g = GC('shalf', () => G.lathe(G.strawberryProfile(.36, .16), 40, 0, Math.PI));
    const face = GC('shalfFace', () => {
      const sh = new THREE.Shape(), pr = G.strawberryProfile(.36, .16);
      sh.moveTo(0, 0); pr.forEach(p => sh.lineTo(p[0], p[1])); for (let i = pr.length - 1; i >= 0; i--) sh.lineTo(-pr[i][0], pr[i][1]);
      const sg = new THREE.ShapeGeometry(sh, 24); const p = sg.attributes.position, uv = sg.attributes.uv;
      for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) / .34 + .5, (p.getY(i) - .18) / .38 + .5);
      return sg;
    });
    const grp = new THREE.Group();
    grp.add(mesh(g, mats.sskin()));
    const f = mesh(face, mats.sface()); f.rotation.y = -Math.PI / 2; grp.add(f);
    // lathe axis is y: lay the half down, cut face up so the pale heart shows
    grp.rotation.set(0, 0, -Math.PI / 2); grp.position.x = -.18; const w = new THREE.Group(); w.add(grp);
    w.scale.setScalar(.85 + r() * .25);
    return w;
  },
  banana(r) {
    const g = GC('banana', () => new THREE.CylinderGeometry(.13, .13, .055, 40, 1));
    const o = new THREE.Mesh(g, [mats.bside(), mats.bface(), mats.bface()]); o.castShadow = o.receiveShadow = true;
    o.scale.set(1 + r() * .1, 1, 1 - r() * .12);
    return o;
  },
  blueberry(r) {
    const g = GC('bb', () => G.blob(.075, 3, .04, 7, .88));
    const o = mesh(g, mats.blueberry()); o.rotation.set(r() * 6, r() * 6, 0); return o;
  },
  raspberry(r) {
    const g = GC('rasp', () => {
      const parts = []; const base = new THREE.SphereGeometry(.026, 10, 8);
      for (let i = 0; i < 42; i++) {
        const t = i / 42, y = .02 + t * .13, rr = .075 * Math.sin(Math.PI * (.15 + t * .8)), a = i * 2.4;
        const s = base.clone(); s.translate(Math.cos(a) * rr, y, Math.sin(a) * rr); parts.push(s);
      }
      return merge(parts);
    });
    const o = mesh(g, mats.raspberry()); o.rotation.set((r() - .5) * .6, r() * 6, (r() - .5) * .6); return o;
  },
  marshmallow(r) {
    const g = GC('mallow', () => G.lathe([[0, 0], [.07, 0], [.085, .012], [.09, .04], [.085, .085], [.07, .098], [0, .1]], 28));
    const o = mesh(g, mats.marshmallow()); o.rotation.set((r() - .5) * 1.2, r() * 6, (r() - .5) * 1.2); o.scale.setScalar(.85 + r() * .3); return o;
  },
  graham(r) {
    const g = GC('graham', () => { const b = new THREE.BoxGeometry(.2, .03, .14, 4, 1, 3); return b; });
    const o = mesh(g, mats.graham()); o.rotation.set((r() - .5) * .5, r() * 6, (r() - .5) * .5); o.scale.set(.6 + r() * .6, 1, .6 + r() * .5); return o;
  },
  chip(r) {
    const g = GC('chip', () => G.lathe([[0, 0], [.03, 0], [.022, .02], [.004, .045], [0, .05]], 14));
    const o = mesh(g, mats.chip()); o.rotation.set((r() - .5) * .8, r() * 6, (r() - .5) * .8); return o;
  },
  crumb(r, kind = 'oreo') {
    const g = GC('crumb' + kind + ((r() * 4) | 0), () => G.blob(.045, 1, .5, (r() * 100) | 0, .6));
    const m = kind === 'oreo' ? (r() < .22 ? mats.oreoCream() : mats.oreo()) : mats.biscoff();
    const o = mesh(g, m); o.rotation.set(r() * 6, r() * 6, r() * 6); o.scale.setScalar(.6 + r() * .9); return o;
  },
  scoop(r, flavor = 'vanilla') {
    const g = GC('scoop' + flavor, () => G.blob(.3, 6, .07, flavor === 'vanilla' ? 3 : 4, .92, { scoop: true, flatBottom: .62 }));
    const o = mesh(g, flavor === 'vanilla' ? mats.vanilla() : mats.strawberryIce()); o.rotation.y = r() * 6; return o;
  },
  cream(r, s = 1) {
    const g = GC('rosette', () => G.rosette(.16));
    const o = mesh(g, mats.cream()); o.scale.setScalar(s * (.85 + r() * .3)); o.rotation.y = r() * 6; return o;
  },
  leaf(r, kind = 'spinach') {
    const g = GC('leaf', () => { const pg = new THREE.PlaneGeometry(.22, .34, 6, 8); pg.translate(0, .17, 0); const p = pg.attributes.position;
      for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i); p.setZ(i, -Math.abs(x) * .35 + Math.sin(y * 9) * .012 + y * y * .25); } pg.computeVertexNormals(); return pg; });
    const o = mesh(g, kind === 'basil' ? mats.basil() : mats.spinach()); o.scale.setScalar(kind === 'basil' ? .7 + r() * .3 : .9 + r() * .4); return o;
  },
  tomato(r) {
    const g = GC('tomato', () => new THREE.CylinderGeometry(.16, .16, .045, 40));
    const o = new THREE.Mesh(g, [mats.tomatoSkin(), mats.tomato(), mats.tomato()]); o.castShadow = o.receiveShadow = true; o.rotation.y = r() * 6; return o;
  },
  mozzarella(r) { const g = GC('mozz', () => G.blob(.12, 3, .12, 11, .45)); const o = mesh(g, mats.mozzarella()); o.scale.setScalar(.8 + r() * .4); return o; },
  feta(r) { const g = GC('feta' + ((r() * 3) | 0), () => G.blob(.04, 0, .35, (r() * 50) | 0, .8)); const o = mesh(g, mats.feta()); o.rotation.set(r() * 6, r() * 6, r() * 6); o.scale.setScalar(.7 + r() * .8); return o; },
  chicken(r, kind) { const g = GC('chick', () => { const b = new THREE.CapsuleGeometry(.065, .36, 6, 14); b.rotateZ(Math.PI / 2); b.scale(1, .62, 1.15); const p = b.attributes.position; for (let i = 0; i < p.count; i++) p.setY(i, p.getY(i) + .012 * Math.sin(p.getX(i) * 18)); b.computeVertexNormals(); return b; });
    const o = mesh(g, kind === 'pesto' ? mats.chickenPesto() : mats.chicken()); o.rotation.y = r() * 6; o.scale.setScalar(.9 + r() * .25); return o; },
  cheese(r) { const g = GC('cheeseMelt', () => G.blob(.12, 3, .25, 21, .18)); const o = mesh(g, mats.cheese()); o.scale.set(1.3, 1, .8); o.rotation.y = r() * 6; return o; },
  mushroom(r) { const g = GC('mushp', () => new THREE.PlaneGeometry(.2, .2)); const o = mesh(g, mats.mushroom()); o.rotation.x = -Math.PI / 2 + (r() - .5) * .4; o.rotation.z = r() * 6; return o; },
  egg(r) { const g = GC('egg' + ((r() * 3) | 0), () => G.blob(.12, 3, .42, (r() * 40) | 0, .5)); const o = mesh(g, mats.egg()); o.rotation.y = r() * 6; o.scale.setScalar(.85 + r() * .35); return o; },
  cheesecake(r) {
    const g = GC('cheese', () => { const b = new THREE.BoxGeometry(.13, .1, .11, 3, 3, 3); const p = b.attributes.position, v = new THREE.Vector3();
      for (let k = 0; k < p.count; k++) { v.fromBufferAttribute(p, k); v.multiplyScalar(1 - .1 * (v.length() - .06) / .06); p.setXYZ(k, v.x, v.y, v.z); } b.computeVertexNormals(); return b; });
    const o = mesh(g, mats.cheesecake()); o.rotation.set((r() - .5) * .6, r() * 6, (r() - .5) * .6); o.scale.setScalar(.8 + r() * .4); return o;
  },
  parm(r) { const g = GC('parm', () => new THREE.BoxGeometry(.03, .006, .012)); const o = mesh(g, mats.parmesan(), false); o.rotation.set(r() * .3, r() * 6, 0); return o; },
};
function merge(geos) {
  // tiny merge for non-indexed + indexed mixes
  const pos = [], nrm = [], idx = []; let off = 0;
  for (const g of geos) {
    const p = g.attributes.position, n = g.attributes.normal;
    for (let i = 0; i < p.count; i++) { pos.push(p.getX(i), p.getY(i), p.getZ(i)); nrm.push(n.getX(i), n.getY(i), n.getZ(i)); }
    if (g.index) for (let i = 0; i < g.index.count; i++) idx.push(g.index.getX(i) + off); else for (let i = 0; i < p.count; i++) idx.push(i + off);
    off += p.count;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); out.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3)); out.setIndex(idx);
  return out;
}

const DRIZZLE = { maple: () => mats.maple(), nutella: () => mats.nutella(), chocolate: () => mats.chocolate(), caramel: () => mats.caramel(), cookiebutter: () => mats.cookiebutter(), balsamic: () => mats.balsamic(), pesto: () => mats.pesto() };

/* ---------------- board ---------------- */
function board(R = 1.38) {
  const g = GC('board' + R, () => {
    const lg = G.lathe([[0, 0], [R - .03, 0], [R, .025], [R, .065], [R - .03, .085], [0, .085]], 96);
    // planar uv across the top
    const p = lg.attributes.position, uv = lg.attributes.uv;
    for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) / (2 * R) + .5, .5 - p.getZ(i) / (2 * R));
    return lg;
  });
  return mesh(g, mats.wood(), false, true);
}

/* ---------------- crepe ---------------- */
export function buildCrepe(rc, opts = {}) {
  const r = rng(rc.seed || 7), grp = new THREE.Group(), parts = [];
  const base = new THREE.Group(); grp.add(base);
  const B = opts.board === false ? null : board(); if (B) base.add(B);
  const Y0 = B ? .085 : 0;
  const CR = 1.5;
  const geo = new G.CrepeGeo({ R: CR, seg: opts.lite ? 100 : 170, seed: rc.seed || 3 });
  geo.fold(Math.PI, Math.PI, rc.puff ?? .8);
  const dust = opts.dust || (rc.sugar ? { value: rc.sugar } : null);
  const crepe = mesh(geo.g, mats.batter(rc.batterSeed || 3, opts.lite ? 512 : 1024, dust));
  // centre the triangle and turn it so the folds face the camera nicely
  const cg = new THREE.Group(); cg.add(crepe);
  crepe.position.set(.62, Y0 + .002, .62);
  cg.rotation.y = rc.turn ?? .78;
  base.add(cg);
  parts.push({ obj: cg, dir: V(0, -.1, 0) });
  cg.updateMatrixWorld(true);

  // sample points in the crepe's own frame (quarter in -x,-z before centring), returned in base space
  const toBase = (u, v) => {   // u: 0..1 across the quarter angle, v: 0..1 radius -> board space
    const a = Math.PI + (Math.PI / 2) * u, rr = CR * v;
    return V(Math.cos(a) * rr + .62, 0, Math.sin(a) * rr + .62).applyAxisAngle(V(0, 1, 0), cg.rotation.y);
  };
  const onTop = (u, v) => { const lp = toBase(u, v); lp.y = G.surfaceY([crepe], lp.x, lp.z, Y0); return lp; };
  // fillings peeking out of the open (curved) edge: tucked between the layers, tilted up a little
  for (const f of rc.peek || []) {
    const n = f.n || 4;
    for (let i = 0; i < n; i++) {
      const u = .14 + .72 * (i + .2 + r() * .6) / n, p = toBase(u, (f.t === 'strawberrySlice' || f.t === 'banana' ? .86 : .93) + r() * .05);
      const o = top[f.t](r, f.kind);
      const a = Math.PI + (Math.PI / 2) * u + cg.rotation.y;   // outward direction angle in board space
      const lay = new THREE.Group(); lay.add(o);
      o.rotation.set(0, 0, 0);
      if (f.t === 'strawberrySlice') { o.rotation.set(-Math.PI / 2, 0, Math.PI / 2 + (r() - .5) * .6); }
      else if (f.t === 'banana' || f.t === 'tomato') { o.rotation.set(0, 0, 0); }
      else if (f.t === 'leaf') { o.rotation.set(-Math.PI / 2 + .2, 0, -Math.PI / 2); }
      lay.position.set(p.x, Y0 + (f.t === 'chicken' || f.t === 'egg' || f.t === 'mushroom' || f.t === 'feta' || f.t === 'cheese' ? .2 : .11) + r() * .04, p.z);
      // face outward, then tip up so the filling shows at the opening
      lay.rotation.order = 'YZX'; lay.rotation.y = -a; lay.rotation.z = .35 + r() * .25;
      base.add(lay); parts.push({ obj: lay, dir: V(p.x, .5, p.z) });
    }
  }
  // toppings laid on top: slices shingle along the ridge of the crepe, leaning toward the camera; others scatter
  const ridgeA = toBase(.5, .2), ridgeB = toBase(.5, .9), ridge = ridgeB.clone().sub(ridgeA), yaw = Math.atan2(ridge.x, ridge.z);
  for (const f of rc.top || []) {
    const n = f.n || 4;
    for (let i = 0; i < n; i++) {
      const fan = f.t === 'strawberrySlice' || f.t === 'banana';
      const u = fan ? .5 + (i % 2 ? .1 : -.1) + (r() - .5) * .08 : .22 + .56 * r();
      const v = fan ? .24 + .6 * (i + .5) / n + (r() - .5) * .03 : .3 + .5 * r();
      const p = onTop(u, v);
      const o = top[f.t](r, f.kind);
      if (f.t === 'strawberrySlice') {
        const w = new THREE.Group(); o.rotation.set(-Math.PI / 2, 0, (r() - .5) * .5); w.add(o);
        w.rotation.order = 'YXZ'; w.rotation.y = yaw + (r() - .5) * .5 + (i % 2 ? .35 : -.35); w.rotation.x = -.55 - r() * .2;
        w.position.copy(p); w.position.y += .045 + .012 * i;
        base.add(w); parts.push({ obj: w, dir: V(p.x * .6, 1 + r() * .4, p.z * .6) }); continue;
      }
      o.position.copy(p);
      if (f.t === 'banana' || f.t === 'tomato') { o.position.y += .04; o.rotation.order = 'YXZ'; o.rotation.set(-.5 - r() * .2, yaw + (r() - .5) * .6, 0); }
      else if (f.t === 'strawberryHalf') { o.rotation.y = r() * 6; }
      else if (f.t === 'leaf') { o.rotation.set(-Math.PI / 2 + .3, r() * 6, 0); o.position.y += .01; }
      else o.position.y += .02;
      base.add(o); parts.push({ obj: o, dir: V(o.position.x * .6, 1 + r() * .4, o.position.z * .6) });
    }
  }
  // drizzle across the top and over the edges
  const targets = B ? [crepe, B] : [crepe];
  const drz = [];
  (rc.drizzle ? [].concat(rc.drizzle) : []).forEach((kind, k) => {
    // zig-zag across the triangle (angle u), working out from the tip (radius v), draping just past the folds
    // one continuous back-and-forth line with rounded turns, the way it leaves a squeeze bottle
    const pts = [], loops = 9 + k * 2, N = 200, ph = r() * 6;
    for (let i = 0; i <= N; i++) {
      const t = i / N, sn = Math.sin(t * Math.PI * loops + ph);
      const u = .5 + .43 * Math.sign(sn) * Math.pow(Math.abs(sn), .55) + .03 * Math.sin(t * 23 + k);
      const v = .13 + .8 * t + .025 * Math.sin(t * 17 + ph);
      const p = toBase(u, Math.min(.93, v)); pts.push([p.x, p.z]);
    }
    const gd = G.drizzle(targets, pts, { radius: kind === 'balsamic' || kind === 'pesto' ? .011 : .015, floorY: Y0, seed: k + 3, samples: 1, lift: .25 });
    const d = mesh(gd, DRIZZLE[kind](), true, false); base.add(d); drz.push(d);
    parts.push({ obj: d, dir: V(0, 1.6, 0) });
  });
  // sides on the board
  for (const s of rc.side || []) {
    const o = top[s.t](r, s.kind);
    o.position.set(s.at[0], Y0 + (s.t === 'scoop' ? .17 : 0), s.at[1]);
    base.add(o); parts.push({ obj: o, dir: V(s.at[0] * 1.2, .8, s.at[1] * 1.2) });
  }
  grp.userData = { parts, crepe, cg, base, geo, drizzles: drz, kind: 'crepe', sugar: rc.sugar ?? 0, H: .9, sample: onTop, Y0, CR, dust };
  return grp;
}

/* ---------------- waffle ---------------- */
export function buildWaffle(rc, opts = {}) {
  const r = rng(rc.seed || 11), grp = new THREE.Group(), parts = [];
  const base = new THREE.Group(); grp.add(base);
  const B = board(); base.add(B);
  const Y0 = .085, R = 1.12;
  const hf = G.waffleHeight();
  const wm = mats.waffle(hf);
  const ws = new THREE.Group(); base.add(ws);
  const wedges = rc.wedges ?? 4;
  const meshes = [];
  if (wedges === 1) {
    const g = GC('wfull' + (opts.lite ? 1 : 0), () => G.waffleGeo({ R, res: opts.lite ? 120 : 190, segs: opts.lite ? 240 : 420, hf }));
    const m = mesh(g, wm); m.position.y = Y0; ws.add(m); meshes.push(m);
  } else {
    for (let i = 0; i < wedges; i++) {
      const t0 = i * Math.PI * 2 / wedges, t1 = t0 + Math.PI * 2 / wedges;
      const g = GC('wedge' + wedges + i + (opts.lite ? 1 : 0), () => G.waffleGeo({ R, t0, t1, res: opts.lite ? 120 : 190, segs: opts.lite ? 240 : 420, hf }));
      const m = mesh(g, wm); const mid = (t0 + t1) / 2;
      m.position.set(Math.cos(mid) * .045, Y0, Math.sin(mid) * .045);
      ws.add(m); meshes.push(m);
    }
  }
  ws.rotation.y = rc.turn ?? .4;
  parts.push({ obj: ws, dir: V(0, -.1, 0) });
  ws.updateMatrixWorld(true);
  const targets = meshes;
  const at = (x, z) => V(x, G.surfaceY(targets, x, z, Y0) , z);
  for (const f of rc.top || []) {
    const n = f.n || 5;
    for (let i = 0; i < n; i++) {
      const a = r() * Math.PI * 2, rr = Math.sqrt(r()) * (f.spread || .75), x = Math.cos(a) * rr, z = Math.sin(a) * rr;
      const o = top[f.t](r, f.kind), p = at(x, z);
      o.position.copy(p);
      if (f.t === 'strawberrySlice') { o.rotation.order = 'YXZ'; o.rotation.set(-Math.PI / 2 + .12 + r() * .18, r() * 6, 0); o.position.y += .03; }
      else if (f.t === 'banana') { o.position.y += .03; o.rotation.set((r() - .5) * .4, 0, (r() - .5) * .4); }
      else if (f.t === 'strawberryHalf') { o.rotation.y = r() * 6; }
      else o.position.y += .03;
      base.add(o); parts.push({ obj: o, dir: V(x * .6, 1 + r() * .5, z * .6) });
    }
  }
  const drz = [];
  (rc.drizzle ? [].concat(rc.drizzle) : []).forEach((kind, k) => {
    const pts = G.swirlZig(R * .92, 9 + k * 2, .5 + k * 1.1, (rc.seed || 11) + k);
    const gd = G.drizzle([...targets, B], pts, { radius: .015, floorY: Y0, seed: k + 5, samples: 1, lift: .3 });
    const d = mesh(gd, DRIZZLE[kind](), true, false); base.add(d); drz.push(d); parts.push({ obj: d, dir: V(0, 1.7, 0) });
  });
  for (const s of rc.side || []) {
    const o = top[s.t](r, s.kind); const p = at(s.at[0], s.at[1]);
    o.position.set(s.at[0], p.y + (s.t === 'scoop' ? .16 : 0), s.at[1]);
    base.add(o); parts.push({ obj: o, dir: V(s.at[0], 1, s.at[1]) });
  }
  grp.userData = { parts, drizzles: drz, kind: 'waffle', sugar: rc.sugar ?? 0, H: .8 };
  return grp;
}

/* ---------------- drinks ---------------- */
let stickerTex = null;
export function setSticker(t) { stickerTex = t; }
export function buildDrink(rc, opts = {}) {
  const r = rng(rc.seed || 21), grp = new THREE.Group(), parts = [];
  const rb = .34, rt = .5, h = 1.5;
  const radiusAt = y => rb + (rt - rb) * (y / h);
  // liquid first (inside), then the clear cup over it
  const fill = rc.fill ?? .86;
  const liq = G.lathe([[0, .02], [rb - .018, .02], ...Array.from({ length: 12 }, (_, i) => { const y = .02 + (h * fill - .02) * (i + 1) / 12; return [radiusAt(y) - .018, y]; }), [0, h * fill]], 64);
  // uv.v along height for the layered liquid texture
  { const p = liq.attributes.position, uv = liq.attributes.uv; for (let i = 0; i < p.count; i++) uv.setY(i, p.getY(i) / (h * fill)); }
  const lm = mats.liquid(rc.liquid, { drip: rc.drip, drips: 7, marble: rc.marble ?? .18 });
  const L = mesh(liq, lm, true, true); grp.add(L); parts.push({ obj: L, dir: V(0, 0, 0) });
  const cupG = G.lathe(G.cupProfile(rb, rt, h), 72);
  const cup = mesh(cupG, mats.glass(), false, false); cup.renderOrder = 2; grp.add(cup); parts.push({ obj: cup, dir: V(0, 0, 0) });
  // ice cubes near the top for iced drinks
  for (let i = 0; i < (rc.ice || 0); i++) {
    const g = GC('ice', () => { const b = new THREE.BoxGeometry(.2, .18, .2, 3, 3, 3); const p = b.attributes.position, v = new THREE.Vector3();
      for (let k = 0; k < p.count; k++) { v.fromBufferAttribute(p, k); const l = v.length(); v.multiplyScalar(1 - .12 * (l - .1) / .1); p.setXYZ(k, v.x, v.y, v.z); } b.computeVertexNormals(); return b; });
    const o = mesh(g, mats.ice(), false, false); const a = r() * 6, rr = .15 + r() * .12;
    o.position.set(Math.cos(a) * rr, h * fill - .08 - r() * .12, Math.sin(a) * rr); o.rotation.set(r() * 2, r() * 6, r() * 2); grp.add(o);
  }
  // sticker with the cafe's logo, wrapped on the cup front
  if (rc.sticker !== false && stickerTex) {
    const sy = h * .48, sh = .5;
    const sg = new THREE.CylinderGeometry(radiusAt(sy + sh / 2) + .007, radiusAt(sy - sh / 2) + .007, sh, 48, 1, true, -.55, 1.1);
    const sm = new THREE.MeshPhysicalMaterial({ map: stickerTex, alphaTest: .4, roughness: .35, clearcoat: .6, side: THREE.FrontSide });
    const s = mesh(sg, sm, false, false); s.position.y = sy; s.renderOrder = 4; grp.add(s); parts.push({ obj: s, dir: V(0, 0, .6) });
  }
  // what sits on top
  let topY = h * fill;
  if (rc.heap) {  // frozen smoothie heaped above the rim
    const g = G.blob(rt * .92, 5, .14, (rc.seed || 3) + 2, .45, { flatBottom: .1 });
    const o = mesh(g, mats.flat(rc.heap, .55)); o.position.y = h * fill + .02; grp.add(o); topY = h * fill + .2; parts.push({ obj: o, dir: V(0, .6, 0) });
  }
  if (rc.cream) {
    const c = mesh(GC('swirlBig', () => G.creamSwirl({ R0: .34, H: .42, turns: 2.6, s0: .13 })), mats.cream());
    c.position.y = h * fill + (rc.dome ? .02 : .04); c.rotation.y = r() * 6; grp.add(c); topY = c.position.y + .45; parts.push({ obj: c, dir: V(0, 1.1, 0) });
    if (rc.creamDrizzle) {
      const pts = []; for (let i = 0; i <= 40; i++) { const t = i / 40, a = t * Math.PI * 7, rr = .3 * (1 - t * .8); pts.push(new THREE.Vector3(Math.cos(a) * rr, c.position.y + .07 + t * .34 + .02 * Math.sin(a * 3), Math.sin(a) * rr)); }
      const g = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 160, .014, 8, false);
      const d = mesh(g, DRIZZLE[rc.creamDrizzle](), false, false); grp.add(d); parts.push({ obj: d, dir: V(0, 1.4, 0) });
    }
  }
  if (rc.dome) {
    const dg = G.lathe(G.domeProfile(rt, .42, .075), 72);
    const d = mesh(dg, mats.lid(), false, false); d.position.y = h - .005; d.renderOrder = 3; grp.add(d); parts.push({ obj: d, dir: V(0, 1.8, 0) });
    topY = h + .45;
  }
  if (rc.straw) {
    const g = GC('straw', () => new THREE.CylinderGeometry(.034, .034, 1.9, 20, 1, true));
    const s = mesh(g, mats.straw(rc.straw), true, false); s.position.set(.08, h * .82, -.04); s.rotation.z = -.16; s.rotation.x = .05; grp.add(s); parts.push({ obj: s, dir: V(.4, 1.6, 0) });
  }
  for (const gname of rc.garnish || []) {
    if (gname === 'umbrella') {
      const u = new THREE.Group();
      const cone = mesh(new THREE.ConeGeometry(.3, .12, 12, 1, true), mats.paper(rc.umbrella || '#5fc9c4')); cone.position.y = .62; u.add(cone);
      const stick = mesh(new THREE.CylinderGeometry(.008, .008, .7, 6), mats.pick()); stick.position.y = .3; u.add(stick);
      u.position.set(.18, topY - .05, .05); u.rotation.z = -.35; u.rotation.x = .15; grp.add(u); parts.push({ obj: u, dir: V(.8, 1.6, 0) });
    } else if (gname === 'strawberry') {
      const s = new THREE.Group(); const b = mesh(GC('swhole', () => G.lathe(G.strawberryProfile(.3, .14), 32)), mats.sskin()); b.rotation.x = Math.PI; b.position.y = .3; s.add(b);
      const leaves = mesh(new THREE.ConeGeometry(.12, .05, 7, 1, true), mats.paper('#3f7a2a')); leaves.position.y = .31; s.add(leaves);
      s.position.set(.12, topY - .02, .1); s.rotation.z = -.3; grp.add(s); parts.push({ obj: s, dir: V(.5, 1.3, .3) });
    } else if (gname === 'pineapple') {
      const sh = new THREE.Shape(); sh.moveTo(0, 0); sh.lineTo(.26, 0); sh.lineTo(.13, .2); sh.closePath();
      const g = new THREE.ExtrudeGeometry(sh, { depth: .1, bevelEnabled: true, bevelThickness: .01, bevelSize: .01, bevelSegments: 2 });
      const p = mesh(g, [mats.pineapple(), mats.rind()]); p.position.set(-.05, topY - .08, .18); p.rotation.set(0, .4, -.2); grp.add(p); parts.push({ obj: p, dir: V(-.4, 1.2, .5) });
    }
  }
  grp.userData = { parts, kind: 'drink', sugar: 0, H: topY };
  return grp;
}

export function buildItem(rc, opts) {
  if (rc.type === 'crepe') return buildCrepe(rc, opts);
  if (rc.type === 'waffle') return buildWaffle(rc, opts);
  return buildDrink(rc, opts);
}
