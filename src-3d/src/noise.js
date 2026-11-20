// Small seeded noise kit for generated textures and organic geometry.
export function rng(seed) {
  let s = (seed >>> 0) || 1;
  return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
}

// 2D gradient (Perlin) noise, range about -1..1
export function perlin(seed = 1) {
  const r = rng(seed), p = new Uint8Array(512), gx = new Float32Array(256), gy = new Float32Array(256);
  for (let i = 0; i < 256; i++) { p[i] = i; const a = r() * Math.PI * 2; gx[i] = Math.cos(a); gy[i] = Math.sin(a); }
  for (let i = 255; i > 0; i--) { const j = (r() * (i + 1)) | 0; const t = p[i]; p[i] = p[j]; p[j] = t; }
  for (let i = 0; i < 256; i++) p[i + 256] = p[i];
  const fade = t => t * t * t * (t * (t * 6 - 15) + 10);
  return function (x, y) {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const X = xi & 255, Y = yi & 255;
    const a = p[p[X] + Y], b = p[p[X + 1] + Y], c = p[p[X] + Y + 1], d = p[p[X + 1] + Y + 1];
    const n00 = gx[a] * xf + gy[a] * yf, n10 = gx[b] * (xf - 1) + gy[b] * yf;
    const n01 = gx[c] * xf + gy[c] * (yf - 1), n11 = gx[d] * (xf - 1) + gy[d] * (yf - 1);
    const u = fade(xf), v = fade(yf);
    return 1.414 * ((n00 + u * (n10 - n00)) + v * ((n01 + u * (n11 - n01)) - (n00 + u * (n10 - n00))));
  };
}

export function fbm(n, x, y, oct = 5, lac = 2.02, gain = .5) {
  let s = 0, a = .5, f = 1, norm = 0;
  for (let i = 0; i < oct; i++) { s += a * n(x * f, y * f); norm += a; a *= gain; f *= lac; }
  return s / norm;
}

// Worley / cellular noise: distance to nearest and second nearest feature point
export function worley(seed = 1) {
  const r = rng(seed), J = new Float32Array(512);
  for (let i = 0; i < 512; i++) J[i] = r();
  const h = (x, y) => ((Math.imul(x, 374761393) + Math.imul(y, 668265263)) >>> 0) % 256;
  return function (x, y) {
    const xi = Math.floor(x), yi = Math.floor(y);
    let d1 = 9, d2 = 9;
    for (let j = -1; j <= 1; j++) for (let i = -1; i <= 1; i++) {
      const k = h(xi + i, yi + j);
      const px = xi + i + J[k], py = yi + j + J[k + 256];
      const d = (px - x) * (px - x) + (py - y) * (py - y);
      if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
    }
    return [Math.sqrt(d1), Math.sqrt(d2)];
  };
}

export const clamp = (v, a = 0, b = 1) => v < a ? a : v > b ? b : v;
export const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
export const mix = (a, b, t) => a + (b - a) * t;
export function mix3(c1, c2, t) { return [mix(c1[0], c2[0], t), mix(c1[1], c2[1], t), mix(c1[2], c2[2], t)]; }
export function hex(h) { const n = parseInt(h.replace('#', ''), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
