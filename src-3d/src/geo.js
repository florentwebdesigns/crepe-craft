// Procedural food geometry: a crepe disc that really folds, a round waffle with a pocket grid,
// lathe shapes for cups and berries, piped cream, scoops, drizzle that follows a surface.
import * as THREE from 'three';
import { perlin, fbm, smooth, clamp, rng } from './noise.js';

/* ================= Crepe: a lacy disc folded in half, then into the triangle ================= */
export class CrepeGeo {
  constructor({ R = 1, seg = 150, seed = 3 } = {}) {
    const g = new THREE.PlaneGeometry(2 * R, 2 * R, seg, seg);
    g.rotateX(-Math.PI / 2);
    this.g = g; this.R = R;
    const p = g.attributes.position, n = p.count, nz = perlin(seed + 40);
    this.x0 = new Float32Array(n); this.z0 = new Float32Array(n); this.y0 = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const x = p.getX(i), z = p.getZ(i), r = Math.hypot(x, z) / R, a = Math.atan2(z, x);
      this.x0[i] = x; this.z0[i] = z;
      // a crepe is never perfectly flat: soft waves, wavier at the lacy rim
      this.y0[i] = R * (.004 * fbm(nz, x * 1.5, z * 1.5, 3) + .007 * smooth(.72, 1, r) * nz(Math.cos(a) * 2.5 + 9, Math.sin(a) * 2.5));
    }
    this.rho1 = .016 * R; this.gap2 = .03 * R;
    this.fold(0, 0, 0);
  }
  // a1: first fold 0..PI (x>0 half over), a2: second fold 0..PI (z>0 half over), puff: filling bulge 0..1
  fold(a1, a2, puff = 0, spread = 1) {
    const p = this.g.attributes.position, R = this.R, r1 = this.rho1, H2 = 2 * r1 + this.gap2;
    for (let i = 0; i < p.count; i++) {
      let x = this.x0[i] * spread, z = this.z0[i] * spread, y = this.y0[i];
      const ox = x, oz = z;
      if (x > 0 && a1 > 0) {
        const rr = r1 - y, arc = rr * a1;
        if (x <= arc) { const f = x / rr; x = rr * Math.sin(f); y = r1 - rr * Math.cos(f); }
        else { const ex = rr * Math.sin(a1), ey = r1 - rr * Math.cos(a1), d = x - arc; x = ex + d * Math.cos(a1); y = ey + d * Math.sin(a1); }
      }
      if (z > 0 && a2 > 0) {
        const rr = H2 - y, arc = rr * a2;
        if (z <= arc) { const f = z / rr; z = rr * Math.sin(f); y = H2 - rr * Math.cos(f); }
        else { const ez = rr * Math.sin(a2), ey = H2 - rr * Math.cos(a2), d = z - arc; z = ez + d * Math.cos(a2); y = ey + d * Math.sin(a2); }
      }
      if (puff > 0) {
        // layers from bottom: (-,-) 0, (+,-) 1, (+,+) 2, (-,+) 3. Upper layers bulge over the filling.
        const L = (ox < 0 && oz < 0) ? 0 : (ox > 0 && oz < 0) ? 1 : (ox > 0) ? 2 : 3;
        const rr = Math.hypot(x, z) / R, th = Math.atan2(-z, -x) / (Math.PI / 2);   // 0..1 across the quarter
        const f = Math.pow(clamp(Math.sin(Math.PI * clamp(th))), .7) * smooth(.04, .35, rr) * (1 - .35 * smooth(.6, 1, rr));
        y += puff * f * [0, .045, .09, .12][L] * R;
      }
      p.setXYZ(i, x, y, z);
    }
    p.needsUpdate = true;
    this.g.computeVertexNormals();
    this.g.computeBoundingSphere(); this.g.computeBoundingBox();
  }
}

/* ================= Waffle: round Belgian waffle, deep square pockets, optional wedge cut ================= */
export function waffleHeight(pitch = .165, ridge = .2) {
  // returns h(x,z) in -1..1 space: 0 pocket floor .. 1 ridge top
  return (x, z) => {
    const gx = Math.abs(((x / pitch) % 1 + 1.5) % 1 - .5), gz = Math.abs(((z / pitch) % 1 + 1.5) % 1 - .5);
    const d = Math.pow(Math.pow(gx, 6) + Math.pow(gz, 6), 1 / 6);
    const ph = .5 - ridge;
    let h = smooth(ph - .1, ph + .03, d);
    const r = Math.hypot(x, z);
    return Math.max(h, smooth(.86, .9, r));   // solid outer rim like a real iron
  };
}
export function waffleGeo({ R = 1, T = .17, D = .075, t0 = 0, t1 = Math.PI * 2, res = 160, segs = 420, hf } = {}) {
  // Top is a Cartesian grid aligned with the pocket grid (crisp square pockets); vertices outside the
  // round (or wedge) outline are snapped onto it. Then a rounded side, a flat bottom and crumb cut faces.
  hf = hf || waffleHeight();
  const pos = [], uv = [], idx = [];
  const rho = T / 2, Rt = R - rho, full = Math.abs(t1 - t0) >= Math.PI * 2 - 1e-4;
  const S = Math.max(8, Math.round(segs * Math.abs(t1 - t0) / (Math.PI * 2)));
  const nz = perlin(9);
  const topY = (x, z) => T - D * (1 - hf(x / R, z / R)) + .003 * nz(x * 9, z * 9);
  const add = (x, y, z) => { pos.push(x, y, z); uv.push(x / (2 * R) + .5, .5 - z / (2 * R)); return pos.length / 3 - 1; };
  // bounding box of the sector
  let x0 = -Rt, x1 = Rt, z0 = -Rt, z1 = Rt;
  if (!full) {
    const xs = [0], zs = [0];
    for (let k = 0; k <= 32; k++) { const a = t0 + (t1 - t0) * k / 32; xs.push(Rt * Math.cos(a)); zs.push(Rt * Math.sin(a)); }
    x0 = Math.min(...xs); x1 = Math.max(...xs); z0 = Math.min(...zs); z1 = Math.max(...zs);
  }
  const step = 2 * R / res, nx = Math.max(2, Math.ceil((x1 - x0) / step)), nzc = Math.max(2, Math.ceil((z1 - z0) / step));
  const mid = (t0 + t1) / 2, half = (t1 - t0) / 2;
  const snap = (x, z) => {
    let r = Math.hypot(x, z);
    if (!full) {
      let a = Math.atan2(z, x), d = a - mid; d = Math.atan2(Math.sin(d), Math.cos(d));
      if (Math.abs(d) > half) {   // project onto the nearer cut line
        const ea = mid + Math.sign(d) * half, ca = Math.cos(ea), sa = Math.sin(ea), t = Math.max(0, x * ca + z * sa);
        x = ca * t; z = sa * t; r = t;
      }
    }
    if (r > Rt) { x *= Rt / r; z *= Rt / r; }
    return [x, z];
  };
  const grid = [];
  for (let j = 0; j <= nzc; j++) {
    const row = [];
    for (let i = 0; i <= nx; i++) {
      const [x, z] = snap(x0 + (x1 - x0) * i / nx, z0 + (z1 - z0) * j / nzc);
      row.push(add(x, topY(x, z), z));
    }
    grid.push(row);
  }
  const P = (k) => [pos[k * 3], pos[k * 3 + 2]];
  const area = (a, b, c) => { const A = P(a), B = P(b), C = P(c); return (B[0] - A[0]) * (C[1] - A[1]) - (B[1] - A[1]) * (C[0] - A[0]); };
  for (let j = 0; j < nzc; j++) for (let i = 0; i < nx; i++) {
    const a = grid[j][i], b = grid[j + 1][i], c = grid[j + 1][i + 1], d = grid[j][i + 1];
    if (Math.abs(area(a, b, d)) > 1e-9) idx.push(a, b, d);
    if (Math.abs(area(b, c, d)) > 1e-9) idx.push(b, c, d);
  }
  const nTopOnly = idx.length;
  // rounded outer side
  const K = 10; let prev = null;
  for (let k = 0; k <= K; k++) {
    const f = Math.PI * k / K, rr = Rt + rho * Math.sin(f), yy = rho + rho * Math.cos(f), row = [];
    for (let j = 0; j <= S; j++) {
      const a = t0 + (t1 - t0) * j / S, vi = add(rr * Math.cos(a), yy, rr * Math.sin(a));
      row.push(vi);
    }
    if (prev) for (let j = 0; j < S; j++) idx.push(prev[j], prev[j + 1], row[j], row[j], prev[j + 1], row[j + 1]);
    prev = row;
  }
  // flat bottom
  const c0 = add(0, 0, 0);
  for (let j = 0; j < S; j++) idx.push(c0, prev[j], prev[j + 1]);
  const nTop = idx.length;
  // cut faces of a wedge show the soft crumb inside
  if (!full) {
    for (const a of [t0, t1]) {
      const ca = Math.cos(a), sa = Math.sin(a), rowT = [], rowB = [];
      const N = Math.round(res * .7);
      for (let i = 0; i <= N; i++) {
        const r = Rt * i / N, x = r * ca, z = r * sa;
        const it = add(x, topY(x, z), z), ib = add(x, 0, z);
        uv[it * 2] = r / R; uv[it * 2 + 1] = topY(x, z) / T; uv[ib * 2] = r / R; uv[ib * 2 + 1] = 0;
        rowT.push(it); rowB.push(ib);
      }
      for (let i = 0; i < N; i++) {
        if (a === t0) idx.push(rowB[i], rowT[i], rowB[i + 1], rowT[i], rowT[i + 1], rowB[i + 1]);
        else idx.push(rowB[i], rowB[i + 1], rowT[i], rowT[i], rowB[i + 1], rowT[i + 1]);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.addGroup(0, nTopOnly, 0);
  g.addGroup(nTopOnly, nTop - nTopOnly, 2);   // side + bottom: crust material, no tangent-space normal map
  if (!full) g.addGroup(nTop, idx.length - nTop, 1);
  g.computeVertexNormals();
  g.userData = { topY, R, T };
  return g;
}

/* ================= Lathe helpers ================= */
export function lathe(profile, segs = 64, phiStart = 0, phiLen = Math.PI * 2) {
  return new THREE.LatheGeometry(profile.map(p => new THREE.Vector2(p[0], p[1])), segs, phiStart, phiLen);
}
// plastic cup: bottom radius rb, top radius rt, height h, with a rolled lip
export function cupProfile(rb, rt, h, lip = .012) {
  const pts = [[0, .004], [rb - .02, 0], [rb, .012]];
  for (let i = 1; i <= 24; i++) { const t = i / 24; pts.push([rb + (rt - rb) * t, .012 + (h - .012) * t]); }
  pts.push([rt + lip, h + lip * .4], [rt + lip * .6, h + lip * 1.2], [rt - .004, h + lip * .6]);
  return pts;
}
export function domeProfile(r, h, hole = .07) {
  const pts = [[r + .012, 0], [r + .014, .02], [r * .99, .03]];
  for (let i = 1; i <= 20; i++) { const f = i / 20 * Math.PI / 2; const rr = r * Math.cos(f), yy = .03 + h * Math.sin(f); if (rr < hole) break; pts.push([rr, yy]); }
  pts.push([hole, .03 + h * .985], [hole - .006, .03 + h * .96]);
  return pts;
}
export function strawberryProfile(len = .5, w = .2) {
  const pts = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;                               // 0 tip .. 1 shoulders
    const r = w * Math.pow(Math.sin(Math.PI * .5 * Math.pow(t, .75)), 1.1) * (1 - .25 * smooth(.85, 1, t));
    pts.push([Math.max(.001, r), t * len]);
  }
  pts.push([w * .5, len * 1.02], [.001, len * 1.03]);
  return pts;
}

/* ================= Organic shapes ================= */
export function blob(radius = .3, detail = 5, amp = .08, seed = 1, squash = 1, opts = {}) {
  const g = new THREE.IcosahedronGeometry(radius, detail), p = g.attributes.position, n = perlin(seed), v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i); const d = v.clone().normalize();
    let k = 1 + amp * fbm(n, d.x * 2.2 + d.z, d.y * 2.2 - d.z * .7, 4);
    if (opts.scoop) {   // ice cream scoop: ruffled lip where the scoop was dragged
      const lip = smooth(-.15, -.45, d.y);
      k += lip * (.07 + .05 * Math.sin(Math.atan2(d.z, d.x) * 9 + 3 * n(d.x * 3, d.z * 3)));
      if (d.y < -.55) k *= .85 + .15 * smooth(-1, -.55, d.y);
    }
    v.copy(d).multiplyScalar(radius * k); v.y *= squash;
    if (opts.flatBottom && v.y < -radius * opts.flatBottom) v.y = -radius * opts.flatBottom;
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}
// piped whipped cream: star-tip profile spiralling up to a peak
export function creamSwirl({ R0 = .3, H = .34, turns = 2.4, s0 = .11, ridges = 8, seg = 260, rad = 18 } = {}) {
  const pos = [], idx = [], uv = [];
  const C = t => new THREE.Vector3(R0 * Math.pow(1 - t, .85) * Math.cos(t * turns * Math.PI * 2), H * Math.pow(t, 1.05), R0 * Math.pow(1 - t, .85) * Math.sin(t * turns * Math.PI * 2));
  const up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i <= seg; i++) {
    const t = i / seg, c = C(t), tg = C(Math.min(1, t + .002)).sub(C(Math.max(0, t - .002))).normalize();
    const nrm = new THREE.Vector3().crossVectors(tg, up).normalize(), bin = new THREE.Vector3().crossVectors(nrm, tg).normalize();
    const s = (s0 * (1 - .72 * t) + .01) * smooth(0, .04, t + .02) * (1 - smooth(.9, 1, t) * .8);
    for (let j = 0; j <= rad; j++) {
      const f = j / rad * Math.PI * 2, k = s * (1 + .2 * Math.cos(f * ridges));
      const p = c.clone().addScaledVector(nrm, Math.cos(f) * k).addScaledVector(bin, Math.sin(f) * k * .9);
      pos.push(p.x, p.y, p.z); uv.push(j / rad, t);
    }
  }
  for (let i = 0; i < seg; i++) for (let j = 0; j < rad; j++) {
    const a = i * (rad + 1) + j, b = a + rad + 1;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  // peak
  const tip = C(1); pos.push(tip.x, tip.y + .035, tip.z); uv.push(.5, 1); const ti = pos.length / 3 - 1, last = seg * (rad + 1);
  for (let j = 0; j < rad; j++) idx.push(last + j, ti, last + j + 1);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}
// a small dollop (rosette) of piped cream
export function rosette(r = .12, seed = 2) { return creamSwirl({ R0: r * .55, H: r * 1.1, turns: 1.6, s0: r * .55, ridges: 8, seg: 120, rad: 16 }); }

/* ================= Drizzle that follows a surface ================= */
// Height of the top surface under (x, z). Instead of raycasting every sample (slow: it walks every triangle),
// the targets are rasterised once into a max-height grid and sampled bilinearly. Same answer as a ray from above.
const HF = new WeakMap();
function heightField(targets) {
  const first = targets[0];
  let sig = targets.length + ':';
  for (const t of targets) { t.updateWorldMatrix(true, false); const e = t.matrixWorld.elements; sig += t.uuid + (t.geometry ? t.geometry.attributes.position.version : 0) + ',' + (e[0] + e[5] * 3 + e[10] * 5 + e[12] * 7 + e[13] * 11 + e[14] * 13).toFixed(5) + ';'; }
  const hit = HF.get(first);
  if (hit && hit.sig === sig) return hit;
  const tris = [], v = new THREE.Vector3();
  let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  const meshes = []; for (const t of targets) t.traverse(o => { if (o.isMesh && o.geometry) meshes.push(o); });
  for (const m of meshes) {
    m.updateWorldMatrix(true, false);
    const pa = m.geometry.attributes.position, idx = m.geometry.index, n = pa.count, w = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { v.fromBufferAttribute(pa, i).applyMatrix4(m.matrixWorld); w[i * 3] = v.x; w[i * 3 + 1] = v.y; w[i * 3 + 2] = v.z; if (v.x < x0) x0 = v.x; if (v.x > x1) x1 = v.x; if (v.z < z0) z0 = v.z; if (v.z > z1) z1 = v.z; }
    tris.push({ w, idx: idx ? idx.array : null, count: idx ? idx.count : n });
  }
  const N = 224, pad = .02; x0 -= pad; z0 -= pad; x1 += pad; z1 += pad;
  const sx = (N - 1) / (x1 - x0), sz = (N - 1) / (z1 - z0), grid = new Float32Array(N * N).fill(-Infinity);
  for (const { w, idx, count } of tris) {
    for (let k = 0; k < count; k += 3) {
      const a = (idx ? idx[k] : k) * 3, b = (idx ? idx[k + 1] : k + 1) * 3, c = (idx ? idx[k + 2] : k + 2) * 3;
      const ax = (w[a] - x0) * sx, az = (w[a + 2] - z0) * sz, bx = (w[b] - x0) * sx, bz = (w[b + 2] - z0) * sz, cx = (w[c] - x0) * sx, cz = (w[c + 2] - z0) * sz;
      const det = (bz - cz) * (ax - cx) + (cx - bx) * (az - cz); if (Math.abs(det) < 1e-9) continue;
      const i0 = Math.max(0, Math.ceil(Math.min(ax, bx, cx))), i1 = Math.min(N - 1, Math.floor(Math.max(ax, bx, cx)));
      const j0 = Math.max(0, Math.ceil(Math.min(az, bz, cz))), j1 = Math.min(N - 1, Math.floor(Math.max(az, bz, cz)));
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
        const l1 = ((bz - cz) * (i - cx) + (cx - bx) * (j - cz)) / det, l2 = ((cz - az) * (i - cx) + (ax - cx) * (j - cz)) / det, l3 = 1 - l1 - l2;
        if (l1 < -1e-4 || l2 < -1e-4 || l3 < -1e-4) continue;
        const y = l1 * w[a + 1] + l2 * w[b + 1] + l3 * w[c + 1], g = j * N + i;
        if (y > grid[g]) grid[g] = y;
      }
    }
  }
  const out = { sig, grid, N, x0, z0, sx, sz };
  HF.set(first, out);
  return out;
}
export function surfaceY(targets, x, z, fallback = 0) {
  const { grid, N, x0, z0, sx, sz } = heightField(targets);
  const fx = (x - x0) * sx, fz = (z - z0) * sz;
  if (fx < 0 || fz < 0 || fx > N - 1 || fz > N - 1) return fallback;
  const i = Math.min(N - 2, Math.floor(fx)), j = Math.min(N - 2, Math.floor(fz)), tx = fx - i, tz = fz - j;
  let acc = 0, wsum = 0, best = -Infinity;
  const corners = [[i, j, (1 - tx) * (1 - tz)], [i + 1, j, tx * (1 - tz)], [i, j + 1, (1 - tx) * tz], [i + 1, j + 1, tx * tz]];
  for (const [ci, cj, wt] of corners) { const y = grid[cj * N + ci]; if (y > -Infinity) { acc += y * wt; wsum += wt; if (y > best) best = y; } }
  if (wsum < .25) return best > -Infinity && wsum > 0 ? acc / wsum : fallback;
  return acc / wsum;
}
// path: array of [x,z] in the parent's space; targets: meshes to sit on (world space == parent space here)
export function drizzle(targets, path, { radius = .012, lift = .42, floorY = 0, samples = 8, wobble = .25, seed = 5 } = {}) {
  const n = perlin(seed), pts = [];
  for (let i = 0; i < path.length - 1; i++) for (let k = 0; k < samples; k++) {
    const t = k / samples, x = path[i][0] + (path[i + 1][0] - path[i][0]) * t, z = path[i][1] + (path[i + 1][1] - path[i][1]) * t;
    pts.push([x, z]);
  }
  pts.push(path[path.length - 1]);
  const v = pts.map(([x, z]) => new THREE.Vector3(x, surfaceY(targets, x, z, floorY) + radius * lift, z));
  // relax heights a little so the line drapes instead of zig-zagging over bumps
  for (let it = 0; it < 2; it++) for (let i = 1; i < v.length - 1; i++) v[i].y = Math.max(v[i].y, (v[i - 1].y + v[i + 1].y) / 2 - radius * .3);
  const curve = new THREE.CatmullRomCurve3(v, false, 'centripetal');
  const segs = Math.max(20, Math.min(600, v.length * 3));
  const g = new THREE.TubeGeometry(curve, segs, radius, 10, false);
  // vary thickness along the line (thin where the hand moved fast)
  const p = g.attributes.position, nrm = g.attributes.normal, ring = 11;
  for (let i = 0; i <= segs; i++) {
    const s = .65 + .45 * (.5 + .5 * n(i * .15, 3.3));
    const c = curve.getPointAt(i / segs);
    for (let j = 0; j < ring; j++) {
      const k = i * ring + j; if (k >= p.count) break;
      const px = p.getX(k) - c.x, py = p.getY(k) - c.y, pz = p.getZ(k) - c.z;
      p.setXYZ(k, c.x + px * s, c.y + py * s * .5, c.z + pz * s);
    }
  }
  g.computeVertexNormals();
  g.userData.curve = curve; g.userData.segs = segs;
  return g;
}
// smooth back-and-forth line with rounded turns inside a circle of radius R (a squeeze-bottle drizzle)
export function swirlZig(R, loops = 8, angle = 0, seed = 1, N = 220) {
  const r = rng(seed), ph = r() * 6, pts = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N, x = (t - .5) * 2 * R * .82 + .03 * Math.sin(t * 19 + ph);
    const sn = Math.sin(t * Math.PI * loops + ph), lim = Math.sqrt(Math.max(0, R * R - x * x)) * .86;
    const z = lim * Math.sign(sn) * Math.pow(Math.abs(sn), .55);
    const ca = Math.cos(angle), sa = Math.sin(angle);
    pts.push([x * ca - z * sa, x * sa + z * ca]);
  }
  return pts;
}
// zig-zag path across a rectangle-ish area
export function zigzag(cx, cz, w, d, n, angle = 0, jitter = .04, seed = 1) {
  const r = rng(seed), pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, x = (t - .5) * w + (r() - .5) * jitter, z = (i % 2 ? .5 : -.5) * d + (r() - .5) * jitter;
    const ca = Math.cos(angle), sa = Math.sin(angle);
    pts.push([cx + x * ca - z * sa, cz + x * sa + z * ca]);
  }
  return pts;
}
