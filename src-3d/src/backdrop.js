// Moving backdrop, sleek on purpose: near-black espresso with a warm glow behind the subject and faint golden batter-spiral
// rings turning slowly out from it (style 1, used on the site), or two slow ribbons of satin light (style 0).
// Rendered at about a third of the screen size into its own target (it is soft by design, so it costs little)
// and used as the scene background. Each palette is a flavour: caramel, chocolate, maple, berry smoothie...
import * as THREE from 'three';

const FRAG = `
precision highp float;
uniform float uTime, uAspect, uZoom, uFlow;
uniform vec2 uRes, uGlowPos;
uniform vec3 uDeep, uMid, uRib, uCream, uSpec, uBokeh;
uniform float uGlow, uBokehAmt, uVig, uExpo, uRelief, uWarp, uDetail, uStyle;
varying vec2 vUv;

vec3 mod289(vec3 x){ return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(vec2 x){ return x - floor(x * (1. / 289.)) * 289.; }
vec3 permute(vec3 x){ return mod289(((x * 34.) + 1.) * x); }
float snoise(vec2 v){
  const vec4 C = vec4(.211324865405187, .366025403784439, -.577350269189626, .024390243902439);
  vec2 i = floor(v + dot(v, C.yy)); vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1., 0.) : vec2(0., 1.);
  vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));
  vec3 m = max(.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.); m = m * m; m = m * m;
  vec3 x = 2. * fract(p * C.www) - 1.; vec3 h = abs(x) - .5; vec3 ox = floor(x + .5); vec3 a0 = x - ox;
  m *= 1.79284291400159 - .85373472095314 * (a0 * a0 + h * h);
  vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130. * dot(m, g);
}
const mat2 R2 = mat2(1.6, 1.2, -1.2, 1.6);
float fbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 3; i++){ s += a * snoise(p); p = R2 * p; a *= .45; } return s; }

// domain-warped height: two layers of warp make the folded, ribbon-like flow of a thick sauce
float field(vec2 p, float t, out vec2 r){
  vec2 q = vec2(fbm(p + vec2(0., t * .05)), fbm(p + vec2(5.2, 1.3) - vec2(t * .04, 0.)));
  r = vec2(fbm(p + uWarp * q + vec2(1.7, 9.2) + t * .035), fbm(p + uWarp * q + vec2(8.3, 2.8) - t * .03));
  return fbm(p + uWarp * .85 * r);
}

void main(){
  vec2 uv = vUv;
  vec2 p = (uv - .5) * vec2(uAspect, 1.);
  float t = uTime * .06 * uFlow;
  // base: near-black espresso with a faint warm lift toward the middle
  vec3 c = uDeep * (.4 + .6 * smoothstep(1.1, 0., length(p * vec2(.6, 1.))));
  if (uStyle < .5) {
    // two slow ribbons of satin light drifting across the frame: soft body, one thin glossy edge
    for (int k = 0; k < 2; k++){
      float fk = float(k);
      float y0 = mix(-.22, .26, fk) + .14 * sin(p.x * (1.1 + .4 * fk) * 1.4 + t * (1. - .35 * fk) + fk * 2.1)
               + .06 * snoise(vec2(p.x * .7 + t * .5, fk * 4.3 + t * .2));
      float d = p.y - y0;
      float w = (.26 + .08 * fk) * (1. + .25 * sin(p.x * 2. - t * 1.3 + fk));
      float body = exp(-d * d / (w * w));
      float edge = exp(-pow((d - w * .55) / (w * .06), 2.));
      float fade = smoothstep(1.3, .1, abs(p.x));
      c += mix(uMid, uRib, .4 * fk) * body * uRelief * (1. - .45 * fk) * fade;
      c += uSpec * edge * uDetail * .12 * (1. - .5 * fk) * fade * (.5 + .5 * sin(p.x * 2.4 + t * 1.6 + fk * 5.));
    }
  } else {
    // the batter spiral: faint golden rings spun out from behind the subject, like a crepe spread on the griddle
    vec2 q = (uv - uGlowPos) * vec2(uAspect, 1.);
    float r = length(q), a = atan(q.y, q.x);
    float spiral = sin(r * 26. - a - uTime * .3);
    float ring = smoothstep(.93, 1., spiral) * smoothstep(1.25, .2, r) * smoothstep(.08, .3, r);
    float wobble = .6 + .4 * snoise(vec2(a * 1.5, r * 3. - uTime * .1));
    c += uMid * smoothstep(.85, 0., r) * uRelief * .7;
    c += uSpec * ring * wobble * uDetail * .07;
  }
  // glow behind the subject and a darker frame
  vec2 g = (uv - uGlowPos) * vec2(uAspect, 1.);
  c *= 1. + uGlow * exp(-dot(g, g) * 2.6);
  vec2 v = (uv - .5) * vec2(uAspect * .8, 1.);
  c *= 1. - uVig * smoothstep(.35, 1.05, length(v));
  // a few soft café lights, far away
  vec3 bk = vec3(0.);
  for (int i = 0; i < 6; i++){
    float fi = float(i);
    vec2 o = vec2(fract(sin(fi * 12.9898) * 43758.5), fract(sin(fi * 78.233) * 12345.6));
    vec2 cpos = vec2(o.x + .03 * sin(uTime * .15 + fi), fract(o.y + uTime * (.006 + .008 * fract(fi * .618))));
    float rad = .04 + .05 * fract(fi * .37);
    float ld = length((uv - cpos) * vec2(uAspect, 1.));
    bk += uBokeh * smoothstep(rad, rad * .6, ld) * sin(cpos.y * 3.14159) * (.3 + .7 * fract(fi * .73));
  }
  c += bk * uBokehAmt;
  gl_FragColor = vec4(c * uExpo, 1.);
}`;

export const PALETTES = {
  // hero: molten caramel with chocolate ribbons and cream veins
  caramel: { deep: '#1f0b04', mid: '#e08a2c', rib: '#3d1a0c', cream: '#f3d39a', spec: '#ffd9a0', bokeh: '#ffb45e' },
  chocolate: { deep: '#160805', mid: '#6b3418', rib: '#c27a2c', cream: '#e8b878', spec: '#ffd6a8', bokeh: '#ff9f4a' },
  butter: { deep: '#2c1a05', mid: '#b8862a', rib: '#5a3a10', cream: '#f6e2a8', spec: '#fff0c8', bokeh: '#ffd27a' },
  maple: { deep: '#2e1103', mid: '#b5601a', rib: '#5a2408', cream: '#f0c070', spec: '#ffdcae', bokeh: '#ffb04a' },
  berry: { deep: '#2a0512', mid: '#a01e44', rib: '#4a0a24', cream: '#f6c6d2', spec: '#ffe0e8', bokeh: '#ff8aa6' },
};

export function createBackdrop(renderer, opt = {}) {
  const scale = opt.scale ?? .26;
  const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, depthBuffer: false, magFilter: THREE.LinearFilter, minFilter: THREE.LinearFilter, generateMipmaps: false });
  const u = {
    uTime: { value: 0 }, uAspect: { value: 1.6 }, uZoom: { value: opt.zoom ?? 1 }, uFlow: { value: opt.flow ?? 1 }, uRes: { value: new THREE.Vector2(4, 4) },
    uGlowPos: { value: new THREE.Vector2(.5, .55) }, uGlow: { value: opt.glow ?? .7 }, uBokehAmt: { value: opt.bokeh ?? .05 }, uVig: { value: opt.vig ?? .6 }, uExpo: { value: opt.expo ?? 1 }, uRelief: { value: opt.relief ?? .2 }, uWarp: { value: opt.warp ?? 1 }, uDetail: { value: opt.detail ?? 1 }, uStyle: { value: opt.style ?? 0 },
    uDeep: { value: new THREE.Color() }, uMid: { value: new THREE.Color() }, uRib: { value: new THREE.Color() }, uCream: { value: new THREE.Color() }, uSpec: { value: new THREE.Color() }, uBokeh: { value: new THREE.Color() },
  };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }', fragmentShader: FRAG, depthTest: false, depthWrite: false });
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat); quad.frustumCulled = false;
  const scene = new THREE.Scene(); scene.add(quad);
  const cam = new THREE.Camera();
  const KEYS = ['deep', 'mid', 'rib', 'cream', 'spec', 'bokeh'], UK = { deep: 'uDeep', mid: 'uMid', rib: 'uRib', cream: 'uCream', spec: 'uSpec', bokeh: 'uBokeh' };
  const target = {};
  function setPalette(p, instant) {
    const pal = typeof p === 'string' ? PALETTES[p] : p;
    for (const k of KEYS) { target[k] = new THREE.Color(pal[k]); if (instant) u[UK[k]].value.copy(target[k]); }
  }
  setPalette(opt.palette || 'caramel', true);
  let W = 0, H = 0;
  function resize(w, h) {
    const rw = Math.max(64, Math.round(w * scale)), rh = Math.max(64, Math.round(h * scale));
    if (rw === W && rh === H) return;
    W = rw; H = rh; rt.setSize(rw, rh); u.uRes.value.set(rw, rh); u.uAspect.value = w / h;
  }
  let acc = 0;
  // draw at most ~30 times a second: the flow is slow, so nobody sees the difference
  function update(dt, t, force) {
    u.uTime.value = t;
    const k = 1 - Math.exp(-dt * 2.2);
    for (const key of KEYS) if (target[key]) u[UK[key]].value.lerp(target[key], k);
    acc += dt;
    if (!force && acc < 1 / 31) return;
    acc = 0;
    const prev = renderer.getRenderTarget();
    renderer.setRenderTarget(rt); renderer.render(scene, cam); renderer.setRenderTarget(prev);
  }
  return { texture: rt.texture, uniforms: u, setPalette, resize, update };
}
