// Materials: physically based, with two shader additions: powdered sugar that settles on upward faces,
// and crepe batter that cooks from raw (pale, glossy) to golden from the edge in.
import * as THREE from 'three';
import * as T from './tex.js';

const GLSL_NOISE = `
float h13(vec3 p){ p = fract(p * .1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vn3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(mix(h13(i), h13(i + vec3(1,0,0)), f.x), mix(h13(i + vec3(0,1,0)), h13(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h13(i + vec3(0,0,1)), h13(i + vec3(1,0,1)), f.x), mix(h13(i + vec3(0,1,1)), h13(i + vec3(1,1,1)), f.x), f.y), f.z); }
`;

// shared uniforms so one slider drives every dusted surface
export const U = { uDust: { value: 0 }, uCook: { value: 1 }, uTime: { value: 0 } };

export function dusted(mat, { scale = 3, amount = null, batter = false, uniform = null, cook = null } = {}) {
  const own = uniform || (amount == null ? U.uDust : { value: amount });
  mat.userData.dust = own;
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uDust = own; sh.uniforms.uCook = cook || U.uCook; sh.uniforms.uDustScale = { value: scale };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vLPos;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvLPos = position;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vLPos; uniform float uDust; uniform float uCook; uniform float uDustScale;\n' + GLSL_NOISE)
      .replace('#include <map_fragment>', '#include <map_fragment>\n' + (batter ? `
        float rr = length(vMapUv - .5) * 2.;
        float ck = smoothstep(0., 1., uCook * 1.5 - (1. - rr) * .55);
        vec3 rawC = vec3(.80, .62, .34);
        diffuseColor.rgb = mix(rawC, diffuseColor.rgb, ck);
        if (gl_FrontFacing) diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.86, .66, .36), .42 * ck);
      ` : ''))
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\n' + (batter ? 'roughnessFactor = mix(.16, roughnessFactor, ck);' : ''))
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        {
          vec3 upV = normalize((viewMatrix * vec4(0., 1., 0., 0.)).xyz);
          float facing = smoothstep(.2, .8, dot(normal, upV));
          float patchN = vn3(vLPos * uDustScale);
          float cover = uDust * (.3 + .7 * patchN);
          float fine = h13(floor(vLPos * uDustScale * 240.));
          float haze = vn3(vLPos * uDustScale * 22.) * patchN;
          float grain = smoothstep(1. - cover * .55, 1. - cover * .55 + .06, fine);
          float d = facing * clamp(grain * .55 + smoothstep(.25, .8, haze + cover * .25) * cover * .55, 0., .92);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.93, .92, .9), d);
          roughnessFactor = mix(roughnessFactor, .9, d);
        }`);
  };
  mat.customProgramCacheKey = () => 'dust' + (batter ? 'b' : '') + scale;
  return mat;
}

const memo = new Map();
const M = (k, f) => { if (!memo.has(k)) memo.set(k, f()); return memo.get(k); };

export const mats = {
  // dust: optional uniform {value} so one crepe can carry powdered sugar without dusting every crepe
  batter: (seed = 3, size = 1024, dust = null) => M('batter' + seed + size + (dust ? (dust.id ??= Math.random().toString(36).slice(2)) : ''), () => {
    const t = T.batter(seed, size);
    const m = new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, normalScale: new THREE.Vector2(.9, .9), roughnessMap: t.roughnessMap, roughness: 1,
      alphaMap: t.alphaMap, alphaTest: .5, side: THREE.DoubleSide, sheen: .35, sheenRoughness: .6, sheenColor: new THREE.Color('#ffd9a0') });
    return dusted(m, { scale: 2.6, batter: true, uniform: dust, cook: dust && dust.cook });
  }),
  waffle: (hf) => M('waffle', () => {
    const t = T.waffleTex(hf);
    const crumb = T.speckleTex('#E8C27E', '#B98444', 141, 256, .7);
    const top = dusted(new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, roughnessMap: t.roughnessMap, roughness: 1, sheen: .3, sheenColor: new THREE.Color('#ffcf8a'), sheenRoughness: .5 }), { scale: 2.4 });
    const cut = new THREE.MeshStandardMaterial({ map: crumb.map, normalMap: crumb.normalMap, roughness: .85 });
    crumb.map.repeat.set(3, 1); crumb.normalMap.repeat.set(3, 1);
    const crust = new THREE.MeshPhysicalMaterial({ color: '#a8652c', roughness: .62, sheen: .3, sheenColor: new THREE.Color('#ffcf8a'), sheenRoughness: .5 });
    return [top, cut, crust];
  }),
  nutella: () => M('nutella', () => new THREE.MeshPhysicalMaterial({ color: '#3b1a0b', roughness: .3, clearcoat: .9, clearcoatRoughness: .12, sheen: .2 })),
  chocolate: () => M('choc', () => new THREE.MeshPhysicalMaterial({ color: '#2a1208', roughness: .26, clearcoat: 1, clearcoatRoughness: .08 })),
  caramel: () => M('caramel', () => new THREE.MeshPhysicalMaterial({ color: '#b5621c', roughness: .18, clearcoat: 1, clearcoatRoughness: .05, sheen: .3, sheenColor: new THREE.Color('#ffb060') })),
  cookiebutter: () => M('cbutter', () => new THREE.MeshPhysicalMaterial({ color: '#a8642b', roughness: .35, clearcoat: .6, clearcoatRoughness: .2 })),
  maple: () => M('maple', () => new THREE.MeshPhysicalMaterial({ color: '#8c420b', roughness: .06, clearcoat: 1, clearcoatRoughness: .03, sheen: .4, sheenColor: new THREE.Color('#ffae55') })),
  balsamic: () => M('balsamic', () => new THREE.MeshPhysicalMaterial({ color: '#1a0805', roughness: .12, clearcoat: 1, clearcoatRoughness: .05 })),
  pesto: () => M('pesto', () => new THREE.MeshPhysicalMaterial({ color: '#4d6a1c', roughness: .45, clearcoat: .5, clearcoatRoughness: .3 })),
  cream: () => M('cream', () => dusted(new THREE.MeshPhysicalMaterial({ color: '#fbf6ec', roughness: .52, sheen: .7, sheenColor: new THREE.Color('#ffffff'), sheenRoughness: .45 }), { scale: 3, amount: 0 })),
  vanilla: () => M('vanilla', () => { const t = T.speckleTex('#F4E7CB', '#3d2a17', 151, 256, .82); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, normalScale: new THREE.Vector2(.5, .5), roughness: .6, sheen: .5, sheenColor: new THREE.Color('#fff3dc'), sheenRoughness: .5 }); }),
  strawberryIce: () => M('sice', () => { const t = T.speckleTex('#EBA1A6', '#C0303C', 152, 256, .75); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, normalScale: new THREE.Vector2(.5, .5), roughness: .6, sheen: .5, sheenColor: new THREE.Color('#ffd8dc') }); }),
  sskin: () => M('sskin', () => { const t = T.strawberrySkin(); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, roughnessMap: t.roughnessMap, roughness: 1, clearcoat: .5, clearcoatRoughness: .25, sheen: .3, sheenColor: new THREE.Color('#ff6a6a') }); }),
  sface: () => M('sface', () => { const t = T.strawberryFace(); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, roughnessMap: t.roughnessMap, roughness: 1, clearcoat: .45, clearcoatRoughness: .28, sheen: .35, sheenColor: new THREE.Color('#ff8a80'), sheenRoughness: .5, emissive: new THREE.Color('#5a0408'), emissiveIntensity: .2 }); }),
  bface: () => M('bface', () => { const t = T.bananaFace(); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, color: '#ddd2b8', roughness: .5, clearcoat: .3, clearcoatRoughness: .3, sheen: .25, sheenColor: new THREE.Color('#f2dfa8') }); }),
  bside: () => M('bside', () => new THREE.MeshPhysicalMaterial({ color: '#e6cc80', roughness: .45, sheen: .4, sheenColor: new THREE.Color('#fff0b0') })),
  blueberry: () => M('blue', () => { const t = T.berryTex('blue'); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, roughness: .5, sheen: .6, sheenColor: new THREE.Color('#9aa6d6') }); }),
  raspberry: () => M('rasp', () => { const t = T.berryTex('rasp'); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, roughness: .3, clearcoat: .6, clearcoatRoughness: .2, sheen: .5, sheenColor: new THREE.Color('#ff7a9a') }); }),
  marshmallow: () => M('mallow', () => dusted(new THREE.MeshPhysicalMaterial({ color: '#fbf8f2', roughness: .78, sheen: .8, sheenColor: new THREE.Color('#ffffff'), sheenRoughness: .6 }), { scale: 4, amount: .35 })),
  graham: () => M('graham', () => { const t = T.speckleTex('#C88B4E', '#8A5426', 161, 256, .6); return new THREE.MeshStandardMaterial({ map: t.map, normalMap: t.normalMap, roughness: .85 }); }),
  oreo: () => M('oreo', () => new THREE.MeshStandardMaterial({ color: '#1c1210', roughness: .7 })),
  oreoCream: () => M('oreoc', () => new THREE.MeshStandardMaterial({ color: '#f1ece4', roughness: .6 })),
  biscoff: () => M('biscoff', () => { const t = T.speckleTex('#B0692F', '#7A4019', 171, 256, .6); return new THREE.MeshStandardMaterial({ map: t.map, normalMap: t.normalMap, roughness: .8 }); }),
  chip: () => M('chip', () => new THREE.MeshPhysicalMaterial({ color: '#2b150a', roughness: .35, clearcoat: .5 })),
  wood: () => M('wood', () => { const t = T.woodTex(); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, roughnessMap: t.roughnessMap, roughness: 1, clearcoat: .15, clearcoatRoughness: .5 }); }),
  plate: () => M('plate', () => new THREE.MeshPhysicalMaterial({ color: '#f4f1ec', roughness: .18, clearcoat: 1, clearcoatRoughness: .05 })),
  // savory
  spinach: () => M('spinach', () => { const t = T.leafTex('spinach'); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, alphaMap: t.alphaMap, alphaTest: .5, side: THREE.DoubleSide, roughness: .45, clearcoat: .4, clearcoatRoughness: .3 }); }),
  basil: () => M('basil', () => { const t = T.leafTex('basil'); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, alphaMap: t.alphaMap, alphaTest: .5, side: THREE.DoubleSide, roughness: .35, clearcoat: .5, sheen: .3 }); }),
  tomato: () => M('tomato', () => { const t = T.tomatoFace(); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, roughnessMap: t.roughnessMap, roughness: 1, clearcoat: .9, clearcoatRoughness: .1 }); }),
  tomatoSkin: () => M('tskin', () => new THREE.MeshPhysicalMaterial({ color: '#b5160f', roughness: .2, clearcoat: 1 })),
  mozzarella: () => M('mozz', () => new THREE.MeshPhysicalMaterial({ color: '#f6f2e8', roughness: .4, sheen: .6, sheenColor: new THREE.Color('#ffffff'), clearcoat: .3 })),
  feta: () => M('feta', () => { const t = T.speckleTex('#F3F0E6', '#DCD5C2', 181, 128, .7); return new THREE.MeshStandardMaterial({ map: t.map, normalMap: t.normalMap, roughness: .9 }); }),
  chicken: () => M('chicken', () => { const t = T.grillTex(); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, roughness: .55, clearcoat: .3, clearcoatRoughness: .4 }); }),
  chickenPesto: () => M('chickp', () => { const t = T.speckleTex('#C99A5C', '#3E6E1E', 185, 256, .55); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, roughness: .5, clearcoat: .45, clearcoatRoughness: .35 }); }),
  mushroom: () => M('mush', () => { const t = T.mushroomFace(); return new THREE.MeshStandardMaterial({ map: t.map, normalMap: t.normalMap, alphaMap: t.alphaMap, alphaTest: .5, side: THREE.DoubleSide, roughness: .55 }); }),
  egg: () => M('egg', () => { const t = T.speckleTex('#F4CF4A', '#FBE9A0', 191, 128, .6); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, normalScale: new THREE.Vector2(1.4, 1.4), roughness: .55, sheen: .5, sheenColor: new THREE.Color('#fff2a0') }); }),
  cheese: () => M('cheese', () => new THREE.MeshPhysicalMaterial({ color: '#F0A92C', roughness: .28, clearcoat: .7, clearcoatRoughness: .2, sheen: .4, sheenColor: new THREE.Color('#ffd27a') })),
  cheesecake: () => M('ckake', () => { const t = T.speckleTex('#F3E2C0', '#E8CFA0', 195, 128, .6); return new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normalMap, roughness: .7, sheen: .3 }); }),
  parmesan: () => M('parm', () => new THREE.MeshStandardMaterial({ color: '#f1e6c4', roughness: .8 })),
  // drinks
  glass: () => M('glass', () => {
    const c = T.condensation();
    c.normalMap.repeat.set(3, 4); c.roughnessMap.repeat.set(3, 4);
    return new THREE.MeshPhysicalMaterial({ color: '#ffffff', metalness: 0, roughness: .06, transmission: 1, thickness: .02, ior: 1.46,
      normalMap: c.normalMap, normalScale: new THREE.Vector2(.35, .35), roughnessMap: c.roughnessMap, specularIntensity: 1,
      side: THREE.DoubleSide, transparent: true, envMapIntensity: 1.3 });
  }),
  lid: () => M('lid', () => new THREE.MeshPhysicalMaterial({ color: '#ffffff', metalness: 0, roughness: .04, transmission: 1, thickness: .01, ior: 1.45, side: THREE.DoubleSide, transparent: true, envMapIntensity: 1.4 })),
  ice: () => M('ice', () => new THREE.MeshPhysicalMaterial({ color: '#f4fbff', roughness: .08, transmission: .95, thickness: .15, ior: 1.31, transparent: true })),
  straw: (color = '#f3efe6') => M('straw' + color, () => new THREE.MeshPhysicalMaterial({ color, roughness: .35, clearcoat: .5, side: THREE.DoubleSide })),
  pineapple: () => M('pine', () => new THREE.MeshPhysicalMaterial({ color: '#f5c63c', roughness: .35, clearcoat: .6, sheen: .4, sheenColor: new THREE.Color('#fff0a0') })),
  rind: () => M('rind', () => new THREE.MeshStandardMaterial({ color: '#8a7a2a', roughness: .7 })),
  paper: (color) => M('paper' + color, () => new THREE.MeshStandardMaterial({ color, roughness: .8, side: THREE.DoubleSide })),
  pick: () => M('pick', () => new THREE.MeshStandardMaterial({ color: '#d9b98a', roughness: .7 })),
  liquid: (stops, opts = {}) => M('liq' + JSON.stringify(stops) + JSON.stringify(opts), () => {
    const t = T.liquidTex(stops, 131, 256, opts);
    return new THREE.MeshPhysicalMaterial({ map: t.map, roughness: opts.rough ?? .38, sheen: .5, sheenColor: new THREE.Color('#ffffff'), sheenRoughness: .6, clearcoat: .2 });
  }),
  flat: (color, rough = .5) => M('flat' + color + rough, () => new THREE.MeshPhysicalMaterial({ color, roughness: rough, sheen: .3 })),
};
