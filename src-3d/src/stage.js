// Shared product-shoot stage: renderer, studio environment, key/rim lights, glossy pedestal,
// mood-coloured backdrop glow, and a small post chain (side blur for the carousel, bloom, grain, vignette).
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { U } from './mats.js';
import { createBackdrop } from './backdrop.js';

const BLUR = (dir) => ({
  uniforms: { tDiffuse: { value: null }, uRes: { value: new THREE.Vector2(1, 1) }, uAmt: { value: 0 }, uSharp: { value: .22 }, uDir: { value: dir }, uDim: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 uRes, uDir; uniform float uAmt, uSharp, uDim; varying vec2 vUv;
    void main(){
      float b = uAmt * smoothstep(uSharp, uSharp + .2, abs(vUv.x - .5));
      if (b < .01) { gl_FragColor = texture2D(tDiffuse, vUv); return; }
      vec2 st = uDir / uRes * b * 2.2; vec4 acc = vec4(0.); float w = 0.;
      for (int i = -7; i <= 7; i++) { float fi = float(i); float k = exp(-fi * fi / 18.); acc += texture2D(tDiffuse, vUv + st * fi) * k; w += k; }
      gl_FragColor = acc / w; gl_FragColor.rgb *= 1. - uDim * b;
    }`
});
const FINISH = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uVig: { value: .35 }, uGrain: { value: .035 }, uFade: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uTime, uVig, uGrain, uFade; uniform vec2 uRes; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 q = vUv - .5; q.x *= uRes.x / uRes.y * .75;
      c.rgb *= 1. - uVig * smoothstep(.25, .95, length(q));
      c.rgb += (h(vUv * uRes + fract(uTime) * 91.) - .5) * uGrain * (.4 + c.rgb);
      c.rgb *= 1. - uFade;
      gl_FragColor = c;
    }`
};

// a dark product-photo studio for reflections: black room, warm softboxes (key, two strips, low back light)
export function studioEnv(pmrem) {
  const s = new THREE.Scene();
  s.add(new THREE.Mesh(new THREE.BoxGeometry(24, 14, 24), new THREE.MeshBasicMaterial({ color: '#070403', side: THREE.BackSide })));
  const box = (w, h, color, k, x, y, z) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), side: THREE.DoubleSide }));
    m.position.set(x, y, z); m.lookAt(0, 0, 0); s.add(m);
  };
  box(7, 3.5, '#fff4e8', 5, 1.5, 6.5, 3.5);
  box(1.6, 7, '#ffe0bc', 1.7, -7, 2.5, -1);
  box(1.6, 7, '#ffe0bc', 2.2, 7, 2.5, -1.5);
  box(10, 1.2, '#ffcf9e', 1.4, 0, 1.2, -9);
  box(3, 2, '#ffffff', 1.2, -2, 4, 7);
  return pmrem.fromScene(s, .02).texture;
}

export function createStage(canvas, opt = {}) {
  const phone = !!opt.phone;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance', preserveDrawingBuffer: !!opt.still });
  // resolution starts at 1.5x (sharp on retina, 44% fewer pixels than 2x) and adapts to the device: see quality()
  const dpr = window.devicePixelRatio || 1;
  const Q = { pr: opt.fixedPR || Math.min(dpr, 1.5), min: Math.min(dpr, .85), max: Math.min(dpr, phone ? 1.75 : 2), fixed: !!opt.fixedPR, acc: 0, n: 0, t: 0, good: 0, bloomOff: false };
  renderer.setPixelRatio(Q.pr);
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.setClearColor('#0c0705');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(28, 1, .1, 120);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = studioEnv(pmrem);
  scene.environmentIntensity = 1;

  // backdrop: espresso dark with a mood-coloured glow behind the product and a floor falloff
  const bgU = { uGlow: { value: new THREE.Color('#c46a28') }, uBase: { value: new THREE.Color('#0d0705') }, uGlowAmt: { value: 1 }, uGlowPos: { value: new THREE.Vector2(0, .12) } };
  const bg = new THREE.Mesh(new THREE.SphereGeometry(60, 48, 24), new THREE.ShaderMaterial({
    uniforms: bgU, side: THREE.BackSide, depthWrite: false,
    vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
    fragmentShader: `uniform vec3 uGlow, uBase; uniform float uGlowAmt; uniform vec2 uGlowPos; varying vec3 vD;
      void main(){
        vec2 p = vec2(atan(vD.x, -vD.z), vD.y);
        float g = exp(-pow(length((p - uGlowPos) * vec2(1.5, 2.3)), 2.) * 3.2);
        float floorF = smoothstep(.05, -.35, vD.y);
        vec3 c = uBase + uGlow * g * .34 * uGlowAmt;
        c = mix(c, uBase * .55, floorF);
        gl_FragColor = vec4(c, 1.);
      }`
  }));
  bg.renderOrder = -10;
  // the moving flavour backdrop replaces the plain glow sphere
  const backdrop = createBackdrop(renderer, { palette: opt.palette || 'caramel', zoom: opt.zoom, bokeh: .05, style: opt.bgStyle ?? 1 });
  scene.background = backdrop.texture; scene.backgroundIntensity = 1;

  // lights
  const key = new THREE.SpotLight('#ffeedd', 95, 0, .42, .9, 2);
  key.position.set(3.2, 6.2, 4.2); key.castShadow = true;
  key.shadow.mapSize.set(phone ? 768 : 1024, phone ? 768 : 1024); key.shadow.bias = -.0003; key.shadow.normalBias = .02;
  key.shadow.camera.near = 2; key.shadow.camera.far = 16; key.shadow.radius = 4; key.shadow.blurSamples = 12;
  scene.add(key, key.target);
  const rim = new THREE.SpotLight('#ffcf9a', 70, 0, .5, .8, 2); rim.position.set(-3.5, 3.4, -4.6); scene.add(rim, rim.target);
  const rim2 = new THREE.SpotLight('#ffcf9a', 30, 0, .55, .9, 2); rim2.position.set(3.8, 2.2, -4); scene.add(rim2, rim2.target);
  const fill = new THREE.HemisphereLight('#ffe8cf', '#1b0e07', .45); scene.add(fill);

  // pedestal: glossy dark disc with a thin glowing rim
  const ped = new THREE.Group();
  const pedMat = new THREE.MeshPhysicalMaterial({ color: '#0a0504', roughness: .35, metalness: 0, clearcoat: 1, clearcoatRoughness: .04, envMapIntensity: .8 });
  const pg = new THREE.LatheGeometry([[0, -.42], [1.86, -.42], [1.9, -.38], [1.9, -.06], [1.86, -.012], [1.8, 0], [0, 0]].map(p => new THREE.Vector2(p[0], p[1])), 128);
  const pm = new THREE.Mesh(pg, pedMat); pm.receiveShadow = true; ped.add(pm);
  const ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffb15c').multiplyScalar(.9), toneMapped: true });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.885, .011, 8, 200), ringMat); ring.rotation.x = Math.PI / 2; ring.position.y = -.035; ped.add(ring);
  // soft contact shadow so the food sits down
  const sc = document.createElement('canvas'); sc.width = sc.height = 256; const sx = sc.getContext('2d');
  const gr = sx.createRadialGradient(128, 128, 10, 128, 128, 128); gr.addColorStop(0, 'rgba(0,0,0,.6)'); gr.addColorStop(.55, 'rgba(0,0,0,.25)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  sx.fillStyle = gr; sx.fillRect(0, 0, 256, 256);
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 3.6), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = .003; ped.add(shadow);
  scene.add(ped);

  // post
  const size = new THREE.Vector2();
  const rt = new THREE.WebGLRenderTarget(2, 2, { type: THREE.HalfFloatType, samples: phone ? 2 : 4 });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  const blurH = new ShaderPass(BLUR(new THREE.Vector2(1, 0))), blurV = new ShaderPass(BLUR(new THREE.Vector2(0, 1))); blurV.uniforms.uDim.value = .45;
  composer.addPass(blurH); composer.addPass(blurV);
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), .22, .5, .9);
  if (!phone) composer.addPass(bloom);
  const finish = new ShaderPass(FINISH); composer.addPass(finish);
  composer.addPass(new OutputPass());

  const mood = { glow: new THREE.Color('#c46a28'), rim: new THREE.Color('#ffcf9a'), target: null, targetRim: null };
  function setMood(glow, rimC, instant) {
    mood.target = new THREE.Color(glow); mood.targetRim = new THREE.Color(rimC || glow);
    if (instant) { mood.glow.copy(mood.target); mood.rim.copy(mood.targetRim); }
  }
  let W = 0, H = 0; const fwd = new THREE.Vector3();
  function resize() {
    const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
    if (w === W && h === H) return false;
    W = w; H = h;
    renderer.setSize(w, h, false); composer.setSize(w, h); backdrop.resize(w, h);
    renderer.getDrawingBufferSize(size);
    blurH.uniforms.uRes.value.copy(size); blurV.uniforms.uRes.value.copy(size); finish.uniforms.uRes.value.copy(size);
    bloom.resolution.set(size.x / 2, size.y / 2);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    return true;
  }
  // adaptive quality: if frames run slow for a second, drop resolution a step (then bloom); creep back up when there is headroom
  function quality(dt) {
    if (Q.fixed) return;
    Q.acc += dt; Q.n++; Q.t += dt;
    if (Q.t < 1.1) return;
    const avg = Q.acc / Q.n; Q.acc = Q.n = Q.t = 0;
    if (avg > 1 / 46) {
      Q.good = 0;
      if (Q.pr > Q.min + .01) { Q.pr = Math.max(Q.min, Q.pr - .2); renderer.setPixelRatio(Q.pr); W = 0; resize(); }
      else if (!Q.bloomOff) { Q.bloomOff = true; bloom.enabled = false; }
    } else if (avg < 1 / 57) {
      if (++Q.good >= 4 && Q.pr < Q.max - .01) { Q.good = 0; Q.pr = Math.min(Q.max, Q.pr + .15); renderer.setPixelRatio(Q.pr); W = 0; resize(); }
    } else Q.good = 0;
  }
  function setPalette(name, instant) { backdrop.setPalette(name, instant); }
  const gp = new THREE.Vector3();
  function setGlowAt(world) { gp.copy(world).project(camera); backdrop.uniforms.uGlowPos.value.set(gp.x * .5 + .5, gp.y * .5 + .5); }
  function setBlur(a, sharp = .22) { blurH.uniforms.uAmt.value = blurV.uniforms.uAmt.value = a; blurH.uniforms.uSharp.value = blurV.uniforms.uSharp.value = sharp; blurH.enabled = blurV.enabled = a > .01; }
  setBlur(0);
  function render(dt = 1 / 60, t = 0) {
    if (mood.target) {
      const k = 1 - Math.exp(-dt * 3);
      mood.glow.lerp(mood.target, k); mood.rim.lerp(mood.targetRim, k);
      bgU.uGlow.value.copy(mood.glow); rim.color.copy(mood.rim); rim2.color.copy(mood.rim);
      ringMat.color.copy(mood.rim).multiplyScalar(.95);
    }
    // keep the backdrop glow just behind whatever the camera looks at
    camera.getWorldDirection(fwd); bgU.uGlowPos.value.set(Math.atan2(fwd.x, -fwd.z), fwd.y + .1);
    finish.uniforms.uTime.value = t; U.uTime.value = t;
    backdrop.update(dt, t);
    composer.render(dt);
    quality(dt);
  }
  return { renderer, scene, camera, key, rim, rim2, fill, ped, pedMat, ring, shadow, bgU, composer, bloom, finish, backdrop, resize, render, setBlur, setMood, setPalette, setGlowAt, size: () => [W, H], phone, Q };
}
