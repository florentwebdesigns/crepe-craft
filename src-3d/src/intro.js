// Intro: one sticky stage, scrubbed by scroll (scrolling up plays it backwards).
// A finished crepe floats in front of the faint wordmark and spins in; then one is made on the griddle
// (pour, spread, golden edges, two folds, Nutella, strawberries, sugar); a close look at the texture;
// the crepe comes apart into its parts and snaps back; finally it sweeps across and wipes in the logo.
import * as THREE from 'three';
import { createStage } from './stage.js';
import { buildCrepe } from './food.js';
import { ITEMS } from './menu.js';
import { seg, bell, ease, lerp, clamp01, track } from './anim.js';
import { perlin, fbm } from './noise.js';

// timeline (0..1 of the intro's scroll length)
const P = {
  heroOut: [.05, .1], spin: [.1, .2], dip: [.19, .25], pour: [.23, .33], cook: [.3, .37],
  fold1: [.37, .42], fold2: [.42, .47], peek: [.455, .49], drizzle: [.47, .53], tops: [.5, .555], sugar: [.52, .585],
  lift: [.56, .62], explode: [.67, .8], brand: [.8, .94],
};
const CAM = [
  [0, [0, 2.05, 5.3]], [.1, [0, 2.05, 5.3]], [.2, [.75, 1.35, 3.9]], [.214, [.75, 1.35, 3.9]],
  [.228, [0, 4.6, 4.3]], [.37, [0, 4.0, 3.8]], [.47, [.9, 3.5, 3.7]], [.56, [.3, 3.0, 4.7]],
  [.62, [1.9, 1.55, 2.5]], [.67, [.9, 1.25, 2.6]], [.72, [0, 2.0, 8.4]], [.8, [0, 2.0, 8.4]],
  [.83, [0, 1.2, 6.4]], [1, [0, 1.2, 6.4]],
];
const TGT = [
  [0, [0, .42, 0]], [.1, [0, .42, 0]], [.2, [0, .45, 0]], [.214, [0, .45, 0]], [.228, [0, 0, 0]], [.56, [0, .12, 0]],
  [.62, [-.35, .38, -.25]], [.67, [-.45, .4, -.1]], [.72, [0, 1.2, 0]], [.8, [0, 1.2, 0]], [.83, [0, .6, 0]], [1, [0, .6, 0]],
];

function smokeTexture() {
  const S = 128, c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d'), im = x.createImageData(S, S);
  const n = perlin(77);
  for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) {
    const u = i / S - .5, v = j / S - .5, r = Math.hypot(u, v) * 2;
    const f = fbm(n, u * 4 + 3, v * 4, 4) * .5 + .5;
    const a = Math.max(0, 1 - r) ** 1.6 * Math.max(0, f * 1.6 - .45);
    const k = (j * S + i) * 4; im.data[k] = im.data[k + 1] = im.data[k + 2] = 255; im.data[k + 3] = Math.min(255, a * 255);
  }
  x.putImageData(im, 0, 0); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function dotTexture(soft = .5) {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(soft, 'rgba(255,255,255,.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function wordTexture(text) {
  const c = document.createElement('canvas'); c.width = 2048; c.height = 512; const x = c.getContext('2d');
  x.font = 'italic 800 330px "Schibsted Grotesk", "Helvetica Neue", Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillStyle = '#F7ECDD'; x.fillText(text, 1024, 270);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

export function createIntro(canvas, ui, opt = {}) {
  const phone = !!opt.phone, reduce = !!opt.reduce;
  const S = createStage(canvas, { phone });
  const { scene, camera } = S;
  S.ped.visible = false;
  S.setMood('#c2652a', '#ffc58e', true);
  S.key.position.set(2.6, 6.4, 3.6);

  // the hero crepe: Strawberryfic's toppings plus a dusting of sugar (the intro's own crepe, not a menu claim)
  const dust = { value: 0, cook: { value: 1 } };
  const rc = { ...ITEMS.find(i => i.id === 'strawberryfic').r, sugar: .5 };
  const hero = buildCrepe(rc, { board: false, lite: phone, dust });
  const H = hero.userData, base = H.base, crepe = H.crepe, geo = H.geo, R = H.CR;
  scene.add(hero);
  for (const pt of H.parts) pt.p0 = pt.obj.position.clone();
  const tops = H.parts.filter(pt => pt.obj !== H.cg && !H.drizzles.includes(pt.obj));
  const peekParts = tops.filter(pt => pt.dir.y === .5), topParts = tops.filter(pt => pt.dir.y !== .5);
  const drizzleInfo = H.drizzles.map(m => ({ m, total: m.geometry.index.count, ring: 10 * 6 }));

  // faint giant wordmark behind the hero
  const wordMat = new THREE.MeshBasicMaterial({ map: wordTexture('Crepe Craft'), transparent: true, opacity: 0, depthWrite: false, toneMapped: false });
  const word = new THREE.Mesh(new THREE.PlaneGeometry(1, .25), wordMat); word.position.set(0, -.25, -3.8); scene.add(word);
  const fitWord = () => { const d = camera.position.distanceTo(word.position), hw = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * d * camera.aspect; const w = Math.min(hw * 2 * .97, 12); word.scale.set(w, w, 1); };
  if (document.fonts && document.fonts.load) document.fonts.load('italic 800 100px "Schibsted Grotesk"').then(() => { wordMat.map.dispose(); wordMat.map = wordTexture('Crepe Craft'); wordMat.needsUpdate = true; }).catch(() => {});

  // griddle: dark seasoned steel with heat glowing underneath
  const griddle = new THREE.Group(); scene.add(griddle);
  const gMat = new THREE.MeshPhysicalMaterial({ color: '#191513', metalness: .65, roughness: .36, clearcoat: .35, clearcoatRoughness: .3 });
  const gBody = new THREE.Mesh(new THREE.CylinderGeometry(1.9, 1.86, .14, 96), gMat); gBody.position.y = -.074; gBody.receiveShadow = true; griddle.add(gBody);
  const rimMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ff7a2a'), transparent: true, opacity: 0, toneMapped: false });
  const rimG = new THREE.Mesh(new THREE.TorusGeometry(1.885, .012, 6, 160), rimMat); rimG.rotation.x = Math.PI / 2; rimG.position.y = -.13; griddle.add(rimG);
  const glowC = document.createElement('canvas'); glowC.width = glowC.height = 256; { const x = glowC.getContext('2d'), g = x.createRadialGradient(128, 128, 60, 128, 128, 128); g.addColorStop(0, 'rgba(255,120,40,.9)'); g.addColorStop(.5, 'rgba(255,90,20,.35)'); g.addColorStop(1, 'rgba(255,60,10,0)'); x.fillStyle = g; x.fillRect(0, 0, 256, 256); }
  const glowMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(glowC), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(5.6, 5.6), glowMat); glow.rotation.x = -Math.PI / 2; glow.position.y = -.2; griddle.add(glow);

  // batter stream from the ladle
  const pourCurve = new THREE.CatmullRomCurve3([new THREE.Vector3(.35, 3.6, -.2), new THREE.Vector3(.18, 2.2, -.08), new THREE.Vector3(.04, 1, -.02), new THREE.Vector3(0, .01, 0)]);
  const pourGeo = new THREE.TubeGeometry(pourCurve, 80, .042, 12, false);
  const pourMat = new THREE.MeshPhysicalMaterial({ color: '#EBD3A0', roughness: .22, clearcoat: .6, clearcoatRoughness: .2, sheen: .4, sheenColor: new THREE.Color('#fff2d0') });
  const pour = new THREE.Mesh(pourGeo, pourMat); pour.castShadow = true; scene.add(pour);
  const pourTotal = pourGeo.index.count, pourRing = 12 * 6;

  // steam (skipped with reduced motion): soft wisps that rise and turn
  const STEAM = reduce ? 0 : phone ? 9 : 16, smoke = STEAM ? smokeTexture() : null;
  const steam = new THREE.Group(); scene.add(steam);
  const wisps = Array.from({ length: STEAM }, (_, i) => {
    const m = new THREE.SpriteMaterial({ map: smoke, transparent: true, depthWrite: false, opacity: 0, color: '#fff1e2', blending: THREE.AdditiveBlending });
    const sp = new THREE.Sprite(m); steam.add(sp); return { sp, m, o: i / STEAM + Math.random() * .05, a: Math.random() * 6.28, r: Math.random() };
  });

  // sugar grains: fall onto the crepe, then lift into a cloud for the exploded view
  const SUG = reduce ? 0 : phone ? 260 : 520;
  const sPos = new Float32Array(SUG * 3), sFrom = [], sTo = [], sCloud = [], sDelay = [];
  for (let i = 0; i < SUG; i++) {
    const u = .06 + .88 * Math.random(), v = .1 + .85 * Math.sqrt(Math.random()), t = H.sample(u, v);
    sTo.push(new THREE.Vector3(t.x, t.y + .008, t.z));
    const a = Math.random() * 6.283, rr = Math.random() * 1.1;
    sFrom.push(new THREE.Vector3(t.x * .5 + Math.cos(a) * rr * .4, 1.6 + Math.random() * 1.2, t.z * .5 + Math.sin(a) * rr * .4));
    const ca = Math.random() * 6.283, cr = Math.cbrt(Math.random()) * .55;
    sCloud.push(new THREE.Vector3(Math.cos(ca) * cr * 1.5, 2.05 + (Math.random() - .5) * .4, Math.sin(ca) * cr));
    sDelay.push(Math.random());
  }
  const sGeo = new THREE.BufferGeometry(); sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  const sMat = new THREE.PointsMaterial({ size: phone ? .03 : .022, map: dotTexture(.6), transparent: true, opacity: 0, depthWrite: false, color: '#fbf7f0' });
  const sugar = new THREE.Points(sGeo, sMat); sugar.frustumCulled = false; base.add(sugar);

  // state
  let prog = 0, last = { s: -1, a1: -1, a2: -1, puff: -1 };
  const v3 = new THREE.Vector3(), v4 = new THREE.Vector3(), camT = new THREE.Vector3();
  const ndc = new THREE.Vector3(), plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), ray = new THREE.Ray();
  function ndcToWorld(nx, ny, out) { ndc.set(nx, ny, .5).unproject(camera); ray.origin.copy(camera.position); ray.direction.copy(ndc).sub(camera.position).normalize(); return ray.intersectPlane(plane, out) || out.set(0, 0, 0); }
  function toScreen(p) { v4.copy(p).project(camera); return [(v4.x * .5 + .5) * S.size()[0], (-v4.y * .5 + .5) * S.size()[1]]; }

  function setFold(spread, a1, a2, puff) {
    if (Math.abs(spread - last.s) + Math.abs(a1 - last.a1) + Math.abs(a2 - last.a2) + Math.abs(puff - last.puff) < 1e-4) return;
    geo.fold(a1, a2, puff, spread); last = { s: spread, a1, a2, puff };
  }

  function frame(dt, t, target) {
    prog = target;            // damping is done by the caller
    const p = prog;
    const making = p >= .214, finished = p < .214 || p >= P.lift[0];

    // ---------- crepe state ----------
    if (!making) {
      setFold(1, Math.PI, Math.PI, .8); crepe.position.set(.62, H.Y0 + .002, .62); crepe.rotation.y = 0; dust.cook.value = 1;
    } else {
      const sp = ease.out(seg(p, P.pour[0] + .005, P.pour[1]));
      const f1 = ease.inOut(seg(p, ...P.fold1)), f2 = ease.inOut(seg(p, ...P.fold2));
      setFold(lerp(.05, 1, sp), Math.PI * f1, Math.PI * f2, .8 * ease.out(seg(p, P.fold2[0], P.fold2[1] + .01)));
      crepe.position.set(.62 * f1, H.Y0 + .002, .62 * f2);
      crepe.rotation.y = (1 - sp) * 2.4;      // the spreader turns the batter out in a circle
      dust.cook.value = ease.inOut(seg(p, P.pour[0] + .03, P.cook[1]));
    }
    // fillings and toppings
    peekParts.forEach((pt, i) => { const k = making ? ease.outBack(seg(p, P.peek[0] + i * .005, P.peek[1])) : 1; pt.obj.visible = k > .001; pt.obj.scale.setScalar(Math.max(k, .001)); });
    topParts.forEach((pt, i) => {
      const k = making ? seg(p, P.tops[0] + i * .006, P.tops[0] + .03 + i * .006) : 1;
      pt.obj.visible = k > 0; pt.drop = (1 - (k < 1 ? 1 - Math.pow(1 - k, 2) * (1 - .3 * Math.sin(k * 9)) : 1)) * 1.6;
    });
    drizzleInfo.forEach(({ m, total, ring }) => {
      const f = making ? seg(p, ...P.drizzle) : 1; const n = Math.floor(f * total / ring) * ring;
      m.visible = n > 0; m.geometry.setDrawRange(0, n);
    });
    // sugar: grains fall, dust settles; lifts into a cloud while the parts are apart
    const fall = making ? seg(p, ...P.sugar) : 1;
    const ex = ease.inOut(bell(p, P.explode[0], P.explode[1], .32));
    dust.value = .5 * (making ? seg(p, P.sugar[0] + .03, P.sugar[1] + .02) : 1) * (1 - ex);
    if (SUG) {
      for (let i = 0; i < SUG; i++) {
        const k = clamp01((fall - sDelay[i] * .55) / .45), y = ease.in(k);
        v3.lerpVectors(sFrom[i], sTo[i], k); v3.y = lerp(sFrom[i].y, sTo[i].y, y);
        if (ex > 0) v3.lerp(sCloud[i], ease.inOut(clamp01(ex * 1.2 - sDelay[i] * .2)));
        sPos[i * 3] = v3.x; sPos[i * 3 + 1] = v3.y; sPos[i * 3 + 2] = v3.z;
      }
      sGeo.attributes.position.needsUpdate = true;
      sMat.opacity = making ? Math.max(bell(p, P.sugar[0], P.sugar[1] + .03, .2), ex) : ex;
    }

    // ---------- hero placement ----------
    const idle = reduce ? 0 : 1;
    const float = Math.sin(t * 1.3) * .045 * idle;
    hero.scale.setScalar(1);
    if (!making) {
      const sp = ease.inOut(seg(p, ...P.spin));
      hero.position.set(0, .45 + float, 0);
      hero.rotation.set(.32 * (1 - sp) + .1, t * .2 * idle + sp * Math.PI * 2 - .5, .05 * (1 - sp));
    } else if (p < P.lift[0]) {
      hero.position.set(0, 0, 0); hero.rotation.set(0, .25 + (p - .23) * .8, 0);
    } else if (p < P.brand[0]) {
      const l = ease.inOut(seg(p, ...P.lift));
      hero.position.set(0, lerp(0, .5, l) + float * l, 0);
      hero.rotation.set(0, .25 + (P.lift[0] - .23) * .8 + l * .6 + (p - P.lift[0]) * 1.4, 0);
    } else {
      // sweep: out to the left, across behind the wordmark, then land beside it
      const b = seg(p, ...P.brand), wide = S.size()[0] > S.size()[1];
      const A = [0, .05], Lft = wide ? [-1.45, -.05] : [-1.6, -.3], End = wide ? [.44, .02] : [0, .4], Mid = wide ? [-.2, .0] : [1.05, -.28];
      let nx, ny;
      if (b < .2) { const f = ease.in(b / .2); nx = lerp(A[0], Lft[0], f); ny = lerp(A[1], Lft[1], f); }
      else if (wide) { const f = ease.out((b - .2) / .8); nx = lerp(Lft[0], End[0], f); ny = lerp(Lft[1], End[1], f) + .06 * Math.sin(f * Math.PI); }
      else if (b < .65) { const f = ease.inOut((b - .2) / .45); nx = lerp(Lft[0], Mid[0], f); ny = lerp(Lft[1], Mid[1], f); }
      else { const f = ease.inOut((b - .65) / .35); nx = lerp(Mid[0], End[0], f); ny = lerp(Mid[1], End[1], f); }
      ndcToWorld(nx, ny, v3);
      hero.position.copy(v3); hero.position.y += float * b;
      const sc = b < .2 ? lerp(1, .8, b / .2) : lerp(.8, wide ? 1.12 : .82, ease.inOut(seg(b, .55, 1)));
      hero.scale.setScalar(sc);
      hero.rotation.set(.32 * seg(b, .6, 1) + .1 * Math.sin(b * Math.PI), -.5 + b * Math.PI * 2 + t * .15 * idle * seg(b, .9, 1), -.1 * Math.sin(b * Math.PI * 2));
    }
    // exploded view offsets
    for (const pt of H.parts) {
      const d = pt.drop || 0;
      pt.obj.position.copy(pt.p0).addScaledVector(pt.dir, ex * (pt.obj === H.cg ? 1 : H.drizzles.includes(pt.obj) ? .8 : .78));
      if (d) pt.obj.position.y += d;
    }

    // ---------- griddle, stream, steam ----------
    const gIn = making && p < P.lift[1];
    griddle.visible = gIn;
    if (gIn) {
      const down = ease.in(seg(p, P.lift[0], P.lift[1]));
      griddle.position.y = -down * 2.2;
      const heat = Math.max(bell(p, .225, P.fold2[1], .15), .35 * (1 - down));
      rimMat.opacity = heat * .9; glowMat.opacity = heat * .55;
    }
    const pr = seg(p, P.pour[0] - .005, P.pour[0] + .02), pe = seg(p, P.pour[1] - .035, P.pour[1]);
    const segs = 80; const a0 = Math.floor(pe * segs), a1n = Math.floor(pr * segs);
    pour.visible = making && pr > 0 && pe < 1;
    if (pour.visible) pourGeo.setDrawRange(a0 * pourRing, Math.max(0, a1n - a0) * pourRing);
    if (STEAM) {
      const amt = .5 * bell(p, .09, .22, .3) + bell(p, .26, .5, .2);
      steam.visible = amt > .01;
      if (steam.visible) {
        const cy = making ? 0 : hero.position.y;
        for (const w of wisps) {
          const life = (t * .09 + w.o) % 1, rr = .2 + w.r * .9;
          w.sp.position.set(Math.cos(w.a + life) * rr, cy + .15 + life * 2.1, Math.sin(w.a + life) * rr * .6);
          w.sp.scale.setScalar(.7 + life * 1.8);
          w.m.rotation = w.a + life * 1.2;
          w.m.opacity = amt * .22 * Math.sin(Math.PI * life);
        }
      }
    }
    // ---------- camera, mood, wordmark ----------
    track(CAM, p, camera.position); track(TGT, p, camT);
    // narrow (portrait) screens: pull the camera back so the crepe fits the width
    const asp = S.size()[0] / Math.max(1, S.size()[1]), back = Math.max(1, Math.min(2.3, 1.02 / asp));
    if (back > 1) camera.position.sub(camT).multiplyScalar(back).add(camT);
    if (opt.tilt) { camera.position.x += opt.tilt.x * .25; camera.position.y += opt.tilt.y * .15; }
    camera.lookAt(camT);
    S.key.target.position.set(0, making && p < P.lift[0] ? 0 : .4, 0);
    S.finish.uniforms.uFade.value = ease.smooth(bell(p, ...P.dip, .45));
    S.bgU.uGlowAmt.value = 1 + .7 * bell(p, .08, .22, .4) + .4 * bell(p, .25, .5, .2);
    wordMat.opacity = .024 * (1 - seg(p, ...P.heroOut));
    word.visible = wordMat.opacity > .0005;
    if (word.visible) fitWord();

    // ---------- HTML overlays ----------
    if (ui.update) {
      const labels = ex > .55 ? {
        crepe: toScreen(base.localToWorld(v3.set(-.2, .12 - .1 * ex, -.2))),
        fruit: toScreen(base.localToWorld(v3.copy(topParts[0] ? topParts[0].obj.position : v3.set(0, 1, 0)))),
        drizzle: toScreen(base.localToWorld(v3.set(.3, .38 + 1.6 * ex * .8, .3))),
        sugar: toScreen(base.localToWorld(v3.set(.7, 2.05, 0))),
      } : null;
      let wipe = 0;
      if (p >= P.brand[0]) { wipe = toScreen(hero.getWorldPosition(new THREE.Vector3()))[0]; }
      ui.update(p, { labels, labelAlpha: seg(ex, .55, .9), wipe });
    }
    S.render(dt, t);
  }

  function resize() { if (S.resize()) fitWord(); }
  resize();
  return { frame, resize, stage: S, P, setProgress: v => { prog = v; } };
}
