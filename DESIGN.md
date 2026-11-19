# DESIGN.md · Crepe Craft Cafe (demo preview)

Concept: **"Crafted, layer by layer."** A dark, warm, editorial site where one
live 3D crepe is the star and each chapter (00–07) peels back one layer of the
craft. Premium but friendly: a neighborhood dessert spot, not a luxury hotel.

Direction note: the UXKIN reference library could not connect in this session,
so this direction is built from the brief (morphowater-style feel: staged intro
counter, chapter numbering, scroll progress, bold sans with italic accents,
tracked labels) and the rules below, not from compared reference sites.

## 1. Color (dark only, tokens in `:root`)

| Token | Value | Role |
|---|---|---|
| `--cocoa-950` | `#140B07` | Page background (deep espresso, never navy) |
| `--cocoa-900` | `#1E120C` | Section surface, cards |
| `--cocoa-800` | `#2B1A11` | Raised surface, hover, inputs |
| `--cocoa-700` | `#45301F` | Borders, dividers, progress track |
| `--cream-50`  | `#F7ECDD` | Primary text, headlines (≈16:1 on bg) |
| `--cream-300` | `#CDBBA6` | Secondary text, body copy (≈10:1) |
| `--cream-500` | `#A08C77` | Tertiary, captions, labels (≈6:1) |
| `--batter`    | `#EBB054` | **Primary accent**: buttons, links, italic accent words, progress bar |
| `--batter-deep` | `#C98A2E` | Button hover/pressed, gradients on the 3D crepe |
| `--berry`     | `#E8414F` | **Sparing pop**: strawberry particles, one "live" dot, rating star. Max 1 use per view. Never body text |
| `--on-batter` | `#1A0F08` | Text on gold buttons (≈10:1) |

Contrast floor: body ≥ 4.5:1, large text ≥ 3:1. Placeholder panels use a
dashed `--cocoa-700` border on `--cocoa-900` with `--cream-500` labels.

## 2. Typography (Google Fonts)

- **Display:** Schibsted Grotesk 700/800 + 700 italic. Headlines are big, tight
  (`line-height: .92`, `letter-spacing: -0.035em`), with one or two **key words
  in italic, colored `--batter`**.
- **Body/UI:** Instrument Sans 400/500/600.
- **Labels:** Instrument Sans 600, uppercase, `letter-spacing: .18em`, 12–13px,
  `--cream-500`. Chapter numbers set in labels as `01 — The craft`.

| Step | Size (clamp) | LH | Use |
|---|---|---|---|
| `--fs-mega` | `clamp(3.2rem, 11vw, 10.5rem)` | .9 | Hero headline |
| `--fs-xl` | `clamp(2.4rem, 6.5vw, 6rem)` | .95 | Chapter titles |
| `--fs-lg` | `clamp(1.6rem, 3.2vw, 2.6rem)` | 1.05 | Card titles, step titles |
| `--fs-md` | `clamp(1.125rem, 1.6vw, 1.35rem)` | 1.5 | Lead paragraphs |
| `--fs-base` | `1.0625rem` (17px) | 1.6 | Body |
| `--fs-sm` | `0.9375rem` | 1.5 | Meta, prices |
| `--fs-label` | `0.78rem` | 1.2 | Tracked labels |

Body measure ≤ 62ch.

## 3. Spacing & layout

- 8px scale: `--s1 .5rem` `--s2 1rem` `--s3 1.5rem` `--s4 2rem` `--s5 3rem`
  `--s6 4.5rem` `--s7 7rem` `--s8 10rem`.
- Section padding: `--s7` desktop, `--s6` phone. Content width 1320px, 16px
  gutter on phones, 40px on desktop.
- Layouts are **asymmetric**: headline left, detail right; never three equal
  centered cards in a row. Menu uses a horizontal rail of cards.

## 4. Shape & depth

- Radius: `--r-sm 10px` (chips, inputs), `--r-md 18px` (cards), `--r-pill 999px`
  (buttons). The crepe is round; cards echo it with soft corners.
- Depth from light, not shadows: one warm glow (`radial-gradient` of
  `--batter` at 12% opacity) behind the hero object; one card shadow
  `0 30px 60px -30px rgba(0,0,0,.7)`.
- Film grain overlay at 5% opacity, fixed, pointer-events none.

## 5. Components

- **Primary button** (Order online): pill, `--batter` bg, `--on-batter` text,
  600 weight, min-height 52px, arrow icon. Hover `--batter-deep` + 2px lift.
  Focus: 3px `--cream-50` outline, 3px offset.
- **Secondary button** (Call): pill, 1.5px `--cream-50`@40% border, cream text,
  phone icon. Hover fills `--cocoa-800`.
- **Quiet link:** cream text, `--batter` underline 1px, offset 4px.
- **Top bar:** fixed, logo wordmark left, chapter nav center (desktop), phone +
  Order button right. Always visible. Becomes `--cocoa-950`@85% with blur after
  scroll. On phones a fixed bottom action bar holds Call + Order.
- **Chapter sidebar:** fixed right rail (desktop, 1100px+): big active number
  "03 /07" with the chapter name, then a numbered list (01–07) whose names
  reveal on hover/active, a track that fills in `--batter`, and done/active
  dots. Click jumps to the chapter. On phones a 2px `--batter` bar across the
  top replaces it.
- **Sweet menu stage (03):** one centered 3D crepe; the name (huge display
  type), "02 / 05" index and an owner-photo thumb sit left; pill dots for the
  five crepes below. Scrolling swaps the toppings with a full spin. Without
  WebGL it becomes a plain list of still renders.
- **Booking form (07):** `--cocoa-900` panel, 16px+ inputs with visible labels,
  inline errors under each field, one primary "Send request" button and a
  success panel. Not connected yet (see CLAUDE.md).
- **Info list:** label/value rows divided by `--cocoa-700` hairlines.

## 6. Imagery & icons

- No stock or copyrighted food photos. Every food visual is a **photoreal
  pre-render** (Blender Cycles path tracing, real-world scale, Poly Haven CC0
  HDRI and PBR textures plus a scanned banana bunch). Sources live outside the
  site; outputs are in `assets/media/`.
- Real photos go in **clearly labeled placeholders**: dashed frame with
  "Owner photo: Strawberrific" so they can be swapped 1:1. Renders are labeled
  as preview renders on the page.
- Icons: inline SVG, 1.75px stroke, round caps (Lucide-style, drawn inline).
  No emoji as icons.

## 7. Motion

- Libraries: GSAP 3.12.5 + ScrollTrigger, Lenis 1.1.13 (self-hosted in
  `assets/vendor`). No WebGL.
- 00 Intro film (4.4s, once per visit, skippable by button, Esc, scroll or
  swipe): the crepe drops onto the plate, chocolate is poured, powdered sugar
  sifts down, banana slices land, the camera cranes up. Captions 01–04 follow
  the film. Then the gold "Crepe Craft" wordmark wipes in over the dimmed last
  frame, and the film itself flies into the hero's media box, where the hero
  image (the same last frame) takes over without a cut.
- 02 Craft: 48 rendered frames scrubbed 1:1 with scroll (spread, fold, fold,
  drizzle, fruit, sugar). 03 Sweet: one render per crepe, crossfaded.
  05 Drinks: 36-frame smoothie turntable scrubbed with scroll, floating with
  a slow bob over a Ciao-style brown spotlight gradient. 04 line reveal,
  06 marquee. Everything else is static.
- Ease: `expo.out` / `power3.out` for reveals; scrubbed frames tie 1:1 to scroll.
- `prefers-reduced-motion`, Save-Data, 2G/3G or low-memory devices: no intro,
  no Lenis, no pins, still images only, gentle opacity fades.

## 8. Render look (one style for every visual)

- "Dark food studio": stoneware plate on dark walnut, warm key from front-left,
  orange rim from behind, shallow depth of field (85mm look), Khronos PBR
  Neutral view transform so food colors stay true.
- Food reads real: lacy golden crepe with steam-bubble browning, glossy
  chocolate (`#3A190A`, coat), translucent banana with a seed star, strawberry
  slices with pale core, dusty blueberries, toasted marshmallows, crumbly
  cookie and biscoff pieces, piped cream, amber caramel, powdered sugar as
  ~45k real particles plus a fine dust layer.
- Media box: square renders feathered into the stage with one shared radial
  mask, so the film, hero, craft frames and sweet renders all sit in the same
  spot (right half on desktop, between headline and copy on phones).
- Smoothie: rendered on transparent film so the CSS gradient is the backdrop
  (spotlight `#5E3B28` fading to `#0D0704`), condensation droplets on the glass.
- Formats: WebM (VP9) + MP4 (H.264) with a poster for the film; WebP for
  frames and stills (720 and 1200 px); a JPEG for social previews.
