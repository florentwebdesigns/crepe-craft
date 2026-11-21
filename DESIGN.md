# DESIGN.md · Crepe Craft Cafe (demo preview, v6)

Concept: **a cinematic 3D product experience that sells.** The page opens on a
4.6 second automatic shot (a crepe is dressed on a plate and the cafe's 3D logo
drops in behind it) over a sleek dark background with faint golden batter-spiral
rings turning slowly behind the food, then every screen offers
Order now (Seamless) and Book a table. Each menu item is a live three.js object:
one big object, a short name in large type, a small caption. Premium but
friendly: a neighborhood crepe and waffle spot, not a luxury hotel.

Direction note: florent's brief names ciaoenergy.com as the reference for the
feel. The UXKIN reference library could not connect, so nothing here is copied
from compared sites; Crepe Craft's own palette and type carry over from v3/v4.

## 1. Color (dark only, tokens in `:root`)

| Token | Value | Role |
|---|---|---|
| `--stage` | `#0B0604` | Page base and the 3D stage clear colour (they must match) |
| `--cocoa-950` | `#140B07` | Section background below the stages |
| `--cocoa-900` | `#1E120C` | Panels, cards, form surface |
| `--cocoa-800` | `#2B1A11` | Inputs, hover |
| `--cocoa-700` | `#45301F` | Borders, dividers |
| `--cream-50`  | `#F7ECDD` | Headlines, item names |
| `--cream-300` | `#CDBBA6` | Body copy, ingredients |
| `--cream-500` | `#A08C77` | Captions, notes, labels |
| `--batter`    | `#EBB054` | **Primary accent**: Order buttons, prices, tab progress |
| `--batter-deep` | `#C98A2E` | Button hover |
| `--on-batter` | `#1A0F08` | Text on gold buttons |
| `--error` | `#FF9A9F` | Form errors |
| `--mood` | per category | Category label and rim light, set by the 3D layer |

Category moods (rim light): Sweet `#c2652a`/`#ffc58e`, Savory `#b98a22`/`#ffe2a2`,
Waffles `#cf8418`/`#ffd38a`, Drinks `#8a2748`/`#ffc9d6`.

Moving background palettes (`src-3d/src/backdrop.js`, deep / body / ribbon / cream / bokeh):
hero **caramel** `#3a1606` `#c26a1c` `#3d1a0c` `#f3d39a` `#ffb45e`; Sweet **chocolate**,
Savory **butter**, Waffles **maple**, Drinks **berry**. Colours cross-fade when the
category changes.

3D logo colours (from the cafe's sticker): chocolate face `#4b2416` with clearcoat,
cream border `#f3e4c8`.
Contrast floor: body ≥ 4.5:1, large text ≥ 3:1. Text that sits over the 3D
stage gets a soft shade behind it (a bottom gradient on the hero; bottom-left
radial on the desktop menu, a bottom gradient on phones).

## 2. Typography (Google Fonts)

- **Display:** Schibsted Grotesk 800. Tight: `line-height .92`,
  `letter-spacing -.045em` on item names.
- **Logo (3D only):** Leckerli One ("Crepe") over Titan One ("CRAFT"), baked into
  geometry; the page itself never uses these fonts.
- **Body/UI:** Instrument Sans 400/500/600. Labels 600, uppercase, tracked.

| Token | Size | Use |
|---|---|---|
| `--fs-name` | `clamp(2.7rem, 6.2vw, 6.6rem)` | Menu item name |
| `--fs-xl` | `clamp(2.5rem, 6vw, 5.6rem)` | Section titles |
| `--fs-lg` | `clamp(1.45rem, 2.6vw, 2.3rem)` | Prices, group titles |
| `--fs-md` | `clamp(1.1rem, 1.5vw, 1.3rem)` | Ingredients, lead copy |
| `--fs-base` | `1.0625rem` | Body |
| `--fs-sm` | `.9375rem` | Meta |
| `--fs-label` | `.8rem` | Tracked labels |

## 3. Spacing & layout

- 8px scale `--s1`…`--s7` (.5rem to 7rem). Content width 1320px; gutter 16px
  on phones, 40px from 760px.
- Hero: one 100svh screen, no scroll story. Menu: a sticky 100vh stage inside a
  tall scroll section (`26 × 34vh + 100vh`).
- Hero, desktop: logo top-centre, plate and crepe in front of the logo's lower
  edge, the line of copy bottom-left, Order now + Book a table bottom-right.
  Phones: logo and plate stacked in the top two thirds, copy then two buttons
  below, above the fixed action bar.
- Booking: big heading, then the form card (8 columns) beside a sticky "Hungry
  right now?" panel (4 columns); stacked on phones.
- Desktop menu: object right of centre, name/ingredients/price bottom-left,
  Order this + Call bottom-right, category tabs with progress lines along the
  bottom, arrows mid-left and mid-right.
- Phones: object in the top half, text in the bottom half, Order this under
  the price, tabs above the fixed Call / Order bar.

## 4. Shape & depth

- Radius: `--r-sm 10px` inputs, `--r-md 18px` panels, `--r-pill` buttons.
- Radius: `24px` for the booking card and side panel, `16px` booking type cards.
- Depth comes from the 3D light: a warm key spotlight, a studio environment
  map, the moving glossy backdrop with a glow behind the subject, a dark
  stoneware plate (hero) or a glossy pedestal with a rim-light ring (menu).
  Post: side blur and dimming for neighbours, light bloom on desktop, vignette
  and fine grain.

## 5. Components

- **Order now** (primary): gold pill, opens Seamless in a new tab. In the top
  bar, the hero (large), as "Order this" on every menu item, the booking side
  panel and success panel, Visit, the footer and the phone action bar.
- **Book a table** (secondary): outlined pill to `#book`, in the top bar
  (desktop), the hero, Visit, the footer and the phone action bar ("Book").
- **Call**: outlined pill, `tel:+19733907777`, in the top bar (icon on phones),
  next to Order this on desktop, the booking panel and the phone action bar.
- **Top bar:** brand left, Menu / Book / Visit (desktop), phone, Book a table and
  Order now right.
- **Hero:** sr-only h1, one display line ("Sweet and savory crepes, waffles,
  shakes and coffee."), address and hours, two large buttons, Replay intro chip
  (top right, after the shot). Words rise in as the logo lands.
- **Menu stage:** category label + "02 / 07" count, name, ingredients, price,
  category note, arrows, tabs. The full menu also exists as a real HTML list
  (visually hidden in 3D mode, shown in the no-WebGL page).
- **Booking request form:** type cards (A table / A party / A group order;
  radio inputs, gold border when chosen), date, time (30-minute slots within the
  posted hours; the label becomes Start time or Pickup time), guests stepper
  (− / +), name, phone, optional email, optional notes. Blur-first validation,
  errors under each field, cleared on focus; the submit button is never
  disabled. "Email my booking request" opens a ready email to the cafe, then a
  success panel repeats the request and offers Order now.
- **Visit:** address, hours, phone, rating, amenities, Order now + Book a table +
  Get directions, map embed.

## 6. Imagery & icons

- **Items are live 3D, never photos, videos or GIFs.** All food is procedural:
  lacy golden batter, cooked edges, powdered sugar, Nutella and syrup drizzles,
  sliced strawberries, bananas, berries, savory fillings, waffles with real
  square pockets, clear cups with layered drinks and the cafe's logo sticker.
- Look rules: photoreal materials (clearcoat, subsurface-ish tints, normal
  maps), natural irregularity, no cartoon colours.
- Toppings follow each item's board ingredients; powdered sugar only where the
  board lists it.
- Still fallbacks are renders of the same scene (`assets/media/stills/`): the
  hero still is the finished frame (landscape and portrait versions).
- Icons: inline SVG, 1.75px stroke, round caps. No emoji.

## 7. Motion

- three.js 0.187.0 bundled into `assets/scene.js`; no GSAP or Lenis.
- Hero timeline (seconds): fade in 0–.35, crepe falls .15–.82 and settles with
  a squash to 1.25, Nutella drizzle 1.2–2.05 (a stream follows the line's head),
  fruit 1.95–2.95 (one by one, one bounce), sugar 2.8–3.55, logo drops
  3.3–3.68 and settles on a damped spring to 4.3, camera eases back 2.9–4.25,
  words in at 4.15, done at 4.6. Afterwards: slow camera drift, a little mouse
  parallax, the logo floats.
- Menu scroll progress is damped (`progress += (target - progress) * (1 - exp(-dt*6))`).
- Menu: scroll index picks the item; a newcomer spins in a full turn with
  `outBack` easing and a small hop (1.05s); drag spins with inertia; mouse
  tilts the camera slightly; neighbours idle-spin slowly.
- Reduced motion: the hero opens on its finished frame with the words already
  shown; menu keeps the scroll story with no float, idle spin, steam or
  particles; text swaps fade only.
- Performance: one canvas per stage, paused off-screen and when the tab is
  hidden; adaptive resolution (starts 1.5×, range .85× to 2×, 1.75× phones),
  bloom on desktop only and the first thing dropped under load; backdrop at
  about a quarter resolution and 30 fps; shaders compiled before the hero
  starts; menu built after the hero and warmed while idle and not scrolling.
