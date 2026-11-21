# Bake the 3D logo outlines: "Crepe" (Leckerli One) over "CRAFT" (Titan One), like the cafe's sticker.
# Output: src/logo-data.js with face polygons (letters) and a border silhouette (cream outline), y up, Crepe x-height ~ 1.
import json, math, uharfbuzz as hb, pyclipper
from fontTools.ttLib import TTFont
from fontTools.pens.basePen import BasePen

class Flat(BasePen):
    def __init__(self, gs, steps=10):
        super().__init__(gs); self.contours = []; self.cur = None; self.steps = steps
    def _moveTo(self, p): self.cur = [p]; self.contours.append(self.cur)
    def _lineTo(self, p): self.cur.append(p)
    def _qCurveToOne(self, p1, p2):
        p0 = self.cur[-1]
        for i in range(1, self.steps + 1):
            t = i / self.steps; a = (1 - t) ** 2; b = 2 * (1 - t) * t; c = t * t
            self.cur.append((a * p0[0] + b * p1[0] + c * p2[0], a * p0[1] + b * p1[1] + c * p2[1]))
    def _curveToOne(self, p1, p2, p3):
        p0 = self.cur[-1]
        for i in range(1, self.steps + 1):
            t = i / self.steps; mt = 1 - t
            self.cur.append((mt**3 * p0[0] + 3 * mt * mt * t * p1[0] + 3 * mt * t * t * p2[0] + t**3 * p3[0], mt**3 * p0[1] + 3 * mt * mt * t * p1[1] + 3 * mt * t * t * p2[1] + t**3 * p3[1]))
    def _closePath(self): pass
    def _endPath(self): pass

def word(path, text, scale, dx, dy, rot=0, track=0):
    blob = hb.Blob.from_file_path(path); face = hb.Face(blob); font = hb.Font(face)
    buf = hb.Buffer(); buf.add_str(text); buf.guess_segment_properties(); hb.shape(font, buf, {'kern': True, 'liga': True})
    tt = TTFont(path); gs = tt.getGlyphSet(); order = tt.getGlyphOrder(); upm = tt['head'].unitsPerEm
    polys = []; x = 0
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        pen = Flat(gs); gs[order[info.codepoint]].draw(pen)
        for c in pen.contours:
            pts = []
            for (px, py) in c:
                X = (x + pos.x_offset + px) / upm * scale; Y = (pos.y_offset + py) / upm * scale
                cr, sr = math.cos(rot), math.sin(rot)
                pts.append((X * cr - Y * sr + dx, X * sr + Y * cr + dy))
            if len(pts) > 2: polys.append(pts)
        x += pos.x_advance + track * upm
    return polys

S = 1000.0  # clipper works in integers
def to_c(polys): return [[(int(round(x * S)), int(round(y * S))) for x, y in p] for p in polys]
def union(polys):
    pc = pyclipper.Pyclipper(); pc.AddPaths(to_c(polys), pyclipper.PT_SUBJECT, True)
    return pc.Execute2(pyclipper.CT_UNION, pyclipper.PFT_NONZERO, pyclipper.PFT_NONZERO)
def shapes(tree):
    out = []
    def walk(node):
        for ch in node.Childs:
            if not ch.IsHole:
                outer = ch.Contour; holes = [h.Contour for h in ch.Childs]
                out.append({'o': simp(outer), 'h': [simp(h) for h in holes]})
                for h in ch.Childs: walk(h)
    walk(tree); return out
def simp(c):
    c = pyclipper.CleanPolygon(c, 1.2)
    return [round(v / S, 4) for p in c for v in p]

tilt = math.radians(6)
crepe = word('leckerlione.ttf', 'Crepe', 1.9, 0, 0, tilt)
craft = word('titanone.ttf', 'CRAFT', 1.25, .62, -1.02, tilt, track=.02)
faceA = shapes(union(crepe)); faceB = shapes(union(craft))
# border: one silhouette around both words, then a second soft offset to round it
pco = pyclipper.PyclipperOffset(); pco.AddPaths(to_c(crepe + craft), pyclipper.JT_ROUND, pyclipper.ET_CLOSEDPOLYGON)
pco.ArcTolerance = 4
grown = pco.Execute2(.11 * S)
border = shapes(grown)
# bounds and centring
xs = [v for s in faceA + faceB + border for v in s['o'][0::2]]; ys = [v for s in faceA + faceB + border for v in s['o'][1::2]]
cx, cy = (min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2
def shift(sh):
    for s in sh:
        s['o'] = [round(v - (cx if i % 2 == 0 else cy), 4) for i, v in enumerate(s['o'])]
        s['h'] = [[round(v - (cx if i % 2 == 0 else cy), 4) for i, v in enumerate(h)] for h in s['h']]
    return sh
data = {'crepe': shift(faceA), 'craft': shift(faceB), 'border': shift(border), 'w': round(max(xs) - min(xs), 3), 'h': round(max(ys) - min(ys), 3)}
open('src/logo-data.js', 'w').write('// Baked outlines for the 3D logo (logo_build.py): "Crepe" in Leckerli One over "CRAFT" in Titan One, like the cafe\'s sticker.\nexport const LOGO = ' + json.dumps(data, separators=(',', ':')) + ';\n')
n = sum(len(s['o']) // 2 + sum(len(h) // 2 for h in s['h']) for s in faceA + faceB + border)
print('w', data['w'], 'h', data['h'], 'shapes', len(faceA), len(faceB), len(border), 'points', n)
