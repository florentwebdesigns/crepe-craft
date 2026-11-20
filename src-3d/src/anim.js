// Tiny timeline helpers shared by the intro and the menu.
export const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;
export const lerp = (a, b, t) => a + (b - a) * t;
export const seg = (p, a, b) => clamp01((p - a) / (b - a));
export const ease = {
  inOut: t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  out: t => 1 - Math.pow(1 - t, 3),
  in: t => t * t * t,
  outBack: (t, s = 1.70158) => 1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2),
  outExpo: t => t >= 1 ? 1 : 1 - Math.pow(2, -10 * t),
  smooth: t => t * t * (3 - 2 * t),
};
// 0 -> 1 -> 0 over [a, b]; f is the share of the range used to fade in and out
export const bell = (p, a, b, f = .25) => { const w = (b - a) * f; return Math.min(seg(p, a, a + w), 1 - seg(p, b - w, b)); };
// keyframed vectors: keys = [[p, [x,y,z]], ...], eased between neighbours
export function track(keys, p, out) {
  if (p <= keys[0][0]) return out.fromArray(keys[0][1]);
  for (let i = 1; i < keys.length; i++) {
    if (p <= keys[i][0]) {
      const t = ease.inOut(seg(p, keys[i - 1][0], keys[i][0])), a = keys[i - 1][1], b = keys[i][1];
      return out.set(lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t));
    }
  }
  return out.fromArray(keys[keys.length - 1][1]);
}
export const damp = (cur, target, rate, dt) => cur + (target - cur) * (1 - Math.exp(-dt * rate));
