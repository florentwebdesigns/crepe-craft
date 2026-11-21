// Hero: a 4.6 second automatic shot, no scrolling needed.
// A crepe drops onto a plate and settles, Nutella is drizzled from above, strawberries and banana fall onto it,
// powdered sugar snows down, then the cafe's logo drops in behind with a heavy bounce. Then the page takes over.
import * as THREE from 'three';
import { createStage } from './stage.js';
import { buildCrepe } from './food.js';
import { buildLogo } from './logo3d.js';
import { ease, lerp, clamp01, seg } from './anim.js';

// seconds
export const T = { fade: [0, .35], fall: [.15, .82], settle: [.82, 1.25], drizzle: [1.2, 2.05], fruit: [1.95, 2.95], sugar: [2.8, 3.55], logoFall: [3.3, 3.68], logoSettle: [3.68, 4.3], ui: 4.15, end: 4.6 };

function dotTexture(soft = .5) {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(soft, 'rgba(255,255,255,.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function speckle() {   // stoneware glaze: dark with pale flecks
  const S = 512, c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d');
  x.fillStyle = '#181412'; x.fillRect(0, 0, S, S);
  for (let i = 0; i < 1800; i++) { const r = Math.random() * 1.1 + .25; x.fillStyle = `rgba(${200 + Math.random() * 40},${180 + Math.random() * 40},${150 + Math.random() * 40},${.05 + Math.random() * .14})`; x.beginPath(); x.arc(Math.random() * S, Math.random() * S, r, 0, 6.283); x.fill(); }
  for (let i = 0; i < 900; i++) { x.fillStyle = `rgba(0,0,0,${Math.random() * .25})`; x.fillRect(Math.random() * S, Math.random() * S, 2, 2); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; return t;
}

export function createHero(canvas, ui, opt = {}) {
  const phone = !!opt.phone, reduce = !!opt.reduce;
  const S = createStage(canvas, { phone, palette: 'caramel', fixedPR: opt.fixedPR });
  const { scene, camera } = S;
  S.ped.visible = false;
  S.setBlur(0);
  S.setMood('#c2652a', '#ffc58e', true);
  S.key.position.set(3.4, 7.2, 5.2); S.key.angle = .5; S.key.intensity = 120;
  S.rim.position.set(-4.5, 4.2, -5.5); S.rim.intensity = 90;
  S.rim2.position.set(4.6, 3, -4.5); S.rim2.intensity = 45;
  S.finish.uniforms.uVig.value = .42;
  // a soft front light for the logo standing behind the plate
  const logoLight = new THREE.SpotLight('#fff0dc', 160, 0, .6, .9, 2); logoLight.position.set(-2.5, 6, 7); scene.add(logoLight, logoLight.target);

  /* ---------- plate ---------- */
  const plateProfile = [[0, -.12], [1.15, -.12], [1.45, -.1], [1.7, -.045], [1.86, .04], [1.95, .105], [1.99, .115], [2.0, .1], [1.97, .08], [1.84, .02], [1.5, -.012], [0, -.012]];
  const pg = new THREE.LatheGeometry(plateProfile.map(p => new THREE.Vector2(p[0], p[1])), phone ? 96 : 160);
  { const p = pg.attributes.position, uv = pg.attributes.uv; for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) / 4 + .5, p.getZ(i) / 4 + .5); }
  const plateMat = new THREE.MeshPhysicalMaterial({ map: speckle(), color: '#ffffff', roughness: .42, clearcoat: .9, clearcoatRoughness: .12 });
  const plate = new THREE.Mesh(pg, plateMat); plate.receiveShadow = true; plate.castShadow = true;
  const plateG = new THREE.Group(); plateG.add(plate); plateG.scale.setScalar(.82); scene.add(plateG);

  /* ---------- crepe ---------- */
  // Florent's brief for the hero: Nutella, then fruit, then powdered sugar (banana and strawberry, as on Banana Berry)
  const dust = { value: 0, cook: { value: 1 } };
  const rc = { type: 'crepe', seed: 11, turn: .78, drizzle: ['nutella'], sugar: .5,
    top: [{ t: 'strawberrySlice', n: 4 }, { t: 'banana', n: 4 }, { t: 'strawberryHalf', n: 2 }] };
  const C = buildCrepe(rc, { board: false, lite: phone, dust });
  const H = C.userData;
  scene.add(C);
  const tops = H.parts.filter(pt => pt.obj !== H.cg && !H.drizzles.includes(pt.obj));
  const r = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
  const fruit = tops.map((pt, i) => ({
    obj: pt.obj, p0: pt.obj.position.clone(), q0: pt.obj.quaternion.clone(),
    from: pt.obj.position.clone().add(new THREE.Vector3((r() - .5) * .6, 4.6 + r() * 1.4, (r() - .5) * .6)),
    qFrom: pt.obj.quaternion.clone().multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler((r() - .5) * 5, (r() - .5) * 5, (r() - .5) * 5))),
    t0: T.fruit[0] + (T.fruit[1] - T.fruit[0] - .62) * (i / Math.max(1, tops.length - 1)) + r() * .06,
  }));
  const drz = H.drizzles.map(m => ({ m, total: m.geometry.index.count, ring: 10 * 6, curve: m.geometry.userData.curve }));

  // the Nutella stream from above (a squeeze bottle out of shot)
  const streamGeo = new THREE.CylinderGeometry(.016, .02, 1, 10, 1, true); streamGeo.translate(0, .5, 0);
  const stream = new THREE.Mesh(streamGeo, drz[0] ? drz[0].m.material : new THREE.MeshStandardMaterial()); stream.visible = false; scene.add(stream);

  // powdered sugar grains
  const SUG = reduce ? 0 : phone ? 260 : 560;
  const sPos = new Float32Array(SUG * 3), sFrom = [], sTo = [], sT0 = [];
  for (let i = 0; i < SUG; i++) {
    const u = .04 + .92 * Math.random(), v = .08 + .88 * Math.sqrt(Math.random()), p = H.sample(u, v);
    sTo.push(new THREE.Vector3(p.x, p.y + .01, p.z));
    sFrom.push(new THREE.Vector3(p.x * .55 + (Math.random() - .5) * .5, 2.6 + Math.random() * 1.6, p.z * .55 + (Math.random() - .5) * .5));
    sT0.push(T.sugar[0] + Math.random() * (T.sugar[1] - T.sugar[0] - .45));
  }
  const sGeo = new THREE.BufferGeometry(); sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  const sMat = new THREE.PointsMaterial({ size: phone ? .034 : .026, map: dotTexture(.55), transparent: true, opacity: 0, depthWrite: false, color: '#fbf7f0' });
  const sugar = new THREE.Points(sGeo, sMat); sugar.frustumCulled = false; C.add(sugar);

  /* ---------- logo ---------- */
  const L = buildLogo({ lite: phone }); scene.add(L);
  const LG = { y: 0, z: -2.4, s: 1.15 };
  const CS = 1.5;   // crepe scale
  let yaw = opt.yaw ?? -.75;
  let PF = 1.4;   // how far the plate comes forward at the end   // turns the crepe so the fruit faces the camera

  /* ---------- camera ---------- */
  const camPos = new THREE.Vector3(), camTgt = new THREE.Vector3(), tmp = new THREE.Vector3(), head = new THREE.Vector3();
  const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
  addEventListener('pointermove', e => { if (e.pointerType !== 'mouse') return; mouse.x = e.clientX / innerWidth - .5; mouse.y = e.clientY / innerHeight - .5; }, { passive: true });

  let clock = reduce ? T.end : 0, started = false, uiShown = false, done = false;
  let silent = false;
  const skip = () => { if (clock < T.ui) clock = T.ui; };
  const start = () => { started = true; };
  const restart = () => { clock = reduce ? T.end : 0; uiShown = false; done = false; };
  // draw a frame from each phase once (canvas still hidden) so every shader and texture is compiled before the clock starts
  function warm() { silent = true; for (const c of [1.6, 3.2, T.end]) { clock = c; frame(0, 0); } silent = false; restart(); }

  function layout() {
    const [W, Hh] = S.size(), aspect = W / Math.max(1, Hh), portrait = aspect < .9;
    // portrait screens: stack the logo above the plate and pull back just enough for each phase to fit the width
    LG.y = portrait ? 2.3 : 1.8; LG.s = portrait ? .95 : 1.02;
    if (!portrait) { const p = aspect < 1.3 ? 1.2 : 1; return { pullB: p, pullF: p, tgy: 0, portrait }; }
    const vis = .4986 * aspect;                       // visible width per unit of distance (fov 28)
    const pullB = Math.max(1, 3.9 / (vis * 6.27));    // the plate fits during the build
    const pullF = Math.max(1, ((LG.s * 4.94 + .35) / vis - 2.4) / 10.0);   // the logo fits at the end
    return { pullB, pullF, tgy: -.4, portrait };
  }

  function frame(dt, t) {
    if (started) clock = Math.min(T.end + 1e3, clock + dt);
    const c = clock, lay = layout();

    /* crepe: fall, land with a soft squash, settle */
    const kf = seg(c, ...T.fall), fallE = kf * kf;
    const yFall = lerp(6.2, 0, fallE);
    const ks = seg(c, ...T.settle);
    const squash = c < T.settle[0] ? 0 : Math.exp(-ks * 5) * Math.cos(ks * 15) * .22;
    // as the camera pulls back for the logo, the plate glides forward so the crepe stays the hero of the frame
    const fwdZ = PF * ease.inOut(seg(c, 2.9, 4.25));
    C.position.set(0, c < T.fall[1] ? yFall : Math.max(0, Math.sin(ks * Math.PI) * .05 * (1 - ks)), fwdZ);
    plateG.position.z = fwdZ;
    C.scale.set(CS * (1 + squash * .35), CS * (1 - squash), CS * (1 + squash * .35));
    const rot = 1 - ease.out(kf);
    C.rotation.set(.45 * rot, yaw - .7 * rot, .3 * rot);
    C.visible = c > T.fall[0] - .01;

    /* drizzle: the line grows along its path while a thin stream falls onto its head */
    const kd = seg(c, ...T.drizzle);
    stream.visible = false;
    for (const d of drz) {
      const segs = d.total / d.ring, n = Math.floor(segs * ease.inOut(kd));
      d.m.geometry.setDrawRange(0, n * d.ring); d.m.visible = n > 0;
      if (d === drz[0] && kd > 0 && c < T.drizzle[1] + .2) {
        head.copy(d.curve.getPointAt(Math.min(1, ease.inOut(kd)))); C.localToWorld(head);
        const tail = clamp01((c - T.drizzle[1]) / .2);          // the last of the stream drops after the line ends
        const topY = head.y + 7.5 * (1 - tail), botY = head.y + .01;
        stream.visible = topY - botY > .02;
        stream.position.set(head.x, botY, head.z); stream.scale.set(1, Math.max(.001, topY - botY), 1);
      }
    }

    /* fruit falls in one by one and bounces once */
    for (const f of fruit) {
      const k = clamp01((c - f.t0) / .46), b = clamp01((c - f.t0 - .46) / .24);
      f.obj.visible = k > 0;
      f.obj.position.lerpVectors(f.from, f.p0, k * k);
      if (k >= 1) f.obj.position.y = f.p0.y + Math.sin(b * Math.PI) * .07 * (1 - b);
      f.obj.quaternion.slerpQuaternions(f.qFrom, f.q0, ease.out(k));
    }

    /* powdered sugar snows down and settles into the dusting */
    if (SUG) {
      let any = false;
      for (let i = 0; i < SUG; i++) {
        const k = clamp01((c - sT0[i]) / .5);
        tmp.lerpVectors(sFrom[i], sTo[i], k * k);
        if (k <= 0) tmp.y = 99;
        if (k > 0 && k < 1) any = true;
        sPos[i * 3] = tmp.x; sPos[i * 3 + 1] = tmp.y; sPos[i * 3 + 2] = tmp.z;
      }
      sGeo.attributes.position.needsUpdate = true;
      sMat.opacity = c < T.sugar[0] ? 0 : Math.min(1, (c - T.sugar[0]) / .15) * (1 - clamp01((c - T.sugar[1] - .05) / .35));
      sugar.visible = sMat.opacity > .01;
    }
    dust.value = .5 * ease.smooth(seg(c, T.sugar[0] + .25, T.sugar[1] + .2));

    /* logo drops in behind and bounces */
    const kl = seg(c, ...T.logoFall), ul = Math.max(0, c - T.logoFall[1]);
    let ly = LG.y + 9 * (1 - kl * kl), rx = 0, sy = 1;
    if (c >= T.logoFall[1]) { ly = LG.y - .34 * Math.exp(-ul * 6.5) * Math.sin(ul * 15); rx = .1 * Math.exp(-ul * 5) * Math.sin(ul * 12); sy = 1 - .05 * Math.exp(-ul * 9) * Math.cos(ul * 20); }
    L.visible = c > T.logoFall[0] - .02;
    L.position.set(0, ly + (done && !reduce ? Math.sin(t * .8) * .025 : 0), LG.z);
    L.scale.set(LG.s, LG.s * sy, LG.s);
    L.rotation.set(-.06 + rx, 0, 0);

    /* camera: close on the plate for the build, then ease back to show the logo; a little shake on impact */
    const kc = ease.inOut(seg(c, 2.9, 4.25));
    const pos0 = [0, 2.3, 5.9], pos1 = [0, 1.45, 10.0], tg0 = [0, .2, 0], tg1 = [0, 1.1, 0];
    camPos.set(lerp(pos0[0], pos1[0], kc), lerp(pos0[1], pos1[1], kc), lerp(pos0[2], pos1[2], kc));
    camTgt.set(lerp(tg0[0], tg1[0], kc), lerp(tg0[1], tg1[1], kc), lerp(tg0[2], tg1[2], kc));
    // slow push during the build
    camPos.z -= seg(c, 0, 2.9) * .5 * (1 - kc);
    camTgt.y += lay.tgy * kc;
    camPos.sub(camTgt).multiplyScalar(lerp(lay.pullB, lay.pullF, kc)).add(camTgt);
    const shake = c > T.logoFall[1] ? .05 * Math.exp(-ul * 7) * Math.sin(ul * 42) : c > T.fall[1] && c < T.fall[1] + .4 ? .02 * Math.exp(-(c - T.fall[1]) * 9) * Math.sin((c - T.fall[1]) * 50) : 0;
    camPos.y += shake;
    // idle: slow drift and a touch of mouse parallax
    if (!reduce) {
      mouse.sx += (mouse.x - mouse.sx) * Math.min(1, dt * 3); mouse.sy += (mouse.y - mouse.sy) * Math.min(1, dt * 3);
      const idle = clamp01((c - T.end + .4) / 1.5);
      camPos.x += (Math.sin(t * .17) * (lay.portrait ? .12 : .35) + mouse.sx * 1.0) * idle; camPos.y += (Math.sin(t * .13) * .15 - mouse.sy * .5) * idle;
    }
    camera.position.copy(camPos); camera.lookAt(camTgt);
    S.key.target.position.set(0, .2, 0); logoLight.target.position.set(0, LG.y, LG.z);
    tmp.set(0, .3, 0); S.setGlowAt(tmp);

    S.finish.uniforms.uFade.value = 1 - ease.out(seg(c, ...T.fade));
    if (!silent && !uiShown && c >= T.ui) { uiShown = true; ui.show && ui.show(); }
    if (!silent && !done && c >= T.end) { done = true; ui.done && ui.done(); }
    S.render(dt, t);
  }

  function resize() {
    if (S.resize()) {
      const [W, Hh] = S.size(), portrait = Hh > W;
      if (portrait) camera.setViewOffset(W, Hh, 0, -Hh * .02, W, Hh); else camera.setViewOffset(W, Hh, 0, Hh * .03, W, Hh);
    }
  }
  resize();
  return { frame, resize, stage: S, start, skip, restart, warm, get clock() { return clock; }, set clock(v) { clock = v; }, set yaw(v) { yaw = v; }, set pf(v) { PF = v; }, T };
}
