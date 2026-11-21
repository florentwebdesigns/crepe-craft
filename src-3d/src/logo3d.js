// The cafe's logo in 3D: glossy chocolate letters ("Crepe" script over "CRAFT") on a thick cream outline,
// the way the sticker on their cups looks. Outlines are baked by logo_build.py into logo-data.js.
import * as THREE from 'three';
import { LOGO } from './logo-data.js';

function toShapes(list) {
  return list.map(s => {
    const pts = []; for (let i = 0; i < s.o.length; i += 2) pts.push(new THREE.Vector2(s.o[i], s.o[i + 1]));
    const sh = new THREE.Shape(pts);
    for (const h of s.h) { const hp = []; for (let i = 0; i < h.length; i += 2) hp.push(new THREE.Vector2(h[i], h[i + 1])); sh.holes.push(new THREE.Path(hp)); }
    return sh;
  });
}

export function buildLogo(opt = {}) {
  const grp = new THREE.Group();
  const curve = opt.lite ? 2 : 4;
  const choc = new THREE.MeshPhysicalMaterial({ color: '#4b2416', roughness: .26, clearcoat: 1, clearcoatRoughness: .12, sheen: .4, sheenColor: new THREE.Color('#a8603a'), sheenRoughness: .4 });
  const cream = new THREE.MeshPhysicalMaterial({ color: '#f3e4c8', roughness: .5, clearcoat: .35, clearcoatRoughness: .4, sheen: .6, sheenColor: new THREE.Color('#fff2dc') });
  const faceGeo = new THREE.ExtrudeGeometry(toShapes([...LOGO.crepe, ...LOGO.craft]), { depth: .16, bevelEnabled: true, bevelThickness: .05, bevelSize: .028, bevelSegments: curve, curveSegments: curve });
  const borderGeo = new THREE.ExtrudeGeometry(toShapes(LOGO.border), { depth: .14, bevelEnabled: true, bevelThickness: .035, bevelSize: .03, bevelSegments: curve, curveSegments: curve });
  const face = new THREE.Mesh(faceGeo, choc), border = new THREE.Mesh(borderGeo, cream);
  face.position.z = .02; border.position.z = -.16;
  face.castShadow = border.castShadow = true; face.receiveShadow = border.receiveShadow = true;
  grp.add(border, face);
  grp.userData = { face, border, w: LOGO.w, h: LOGO.h, mats: { choc, cream } };
  return grp;
}
