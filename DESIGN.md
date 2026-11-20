# DESIGN.md · Crepe Craft Cafe (demo preview, v5)

Concept: **a cinematic 3D product experience.** Each menu item is a live
three.js object on a dark, moody studio stage: one big object, a short name in
large type, a small caption. Scroll drives everything and every move reverses.
Premium but friendly: a neighborhood crepe and waffle spot, not a luxury hotel.

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

Category moods (backdrop glow, rim light): Sweet `#c2652a`/`#ffc58e`,
Savory `#b98a22`/`#ffe2a2`, Waffles `#cf8418`/`#ffd38a`, Drinks `#8a2748`/`#ffc9d6`.
Contrast floor: body ≥ 4.5:1, large text ≥ 3:1. Text that sits over the 3D
stage gets a soft shade behind it (bottom-left radial on desktop, a bottom
gradient on phones).

## 2. Typography (Google Fonts)

- **Display:** Schibsted Grotesk 800 (+ italic for the wordmark). Tight:
  `line-height .92`, `letter-spacing -.045em` on item names.
- **Body/UI:** Instrument Sans 400/500/600. Labels 600, uppercase, tracked.

| Token | Size | Use |
|---|---|---|
| `--fs-word` | `clamp(4.2rem, 13vw, 12.5rem)` | "Crepe Craft" wordmark at the brand reveal |
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
- Stages are sticky 100vh panels inside tall scroll sections (intro 640vh, menu
  `26 × 34vh + 100vh`).
- Desktop menu: object right of centre, name/ingredients/price bottom-left,
  Order this + Call bottom-right, category tabs with progress lines along the
  bottom, arrows mid-left and mid-right.
- Phones: object in the top half, text in the bottom half, Order this under
  the price, tabs above the fixed Call / Order bar.

## 4. Shape & depth

- Radius: `--r-sm 10px` inputs, `--r-md 18px` panels, `--r-pill` buttons.
- Depth comes from the 3D light: a warm key spotlight, a studio environment
  map, a glowing backdrop that follows the camera, and a glossy pedestal with a
  rim-light ring. Post: side blur and dimming for neighbours, light bloom on
  desktop, vignette and fine grain.

## 5. Components

- **Order online** (primary): gold pill, always in the top bar, on the brand
  reveal, as "Order this" on every menu item, in Visit, the footer and the
  phone action bar. Opens Seamless in a new tab.
- **Call** (secondary): outlined pill, `tel:+19733907777`, in the top bar
  (icon on phones), next to Order this on desktop, and in the phone action bar.
- **Top bar:** brand left, Menu / Parties / Visit (desktop), phone and Order right.
- **Intro:** kicker "Crepes & Waffles · Springfield, NJ", Scroll cue, five
  captions that fade on their beats, exploded-view labels with leader dots,
  Skip intro, a thin progress bar.
- **Menu stage:** category label + "02 / 07" count, name, ingredients, price,
  category note, arrows, tabs. The full menu also exists as a real HTML list
  (visually hidden in 3D mode, shown in the no-WebGL page).
- **Party inquiry form:** name, phone, date, guests. Blur-first validation,
  errors under each field, "Email my request" opens a ready email to the cafe,
  then a success panel with the email address and phone as fallbacks.
- **Visit:** address, hours, phone, rating, amenities, Order + Get directions,
  map embed.

## 6. Imagery & icons

- **Items are live 3D, never photos, videos or GIFs.** All food is procedural:
  lacy golden batter, cooked edges, powdered sugar, Nutella and syrup drizzles,
  sliced strawberries, bananas, berries, savory fillings, waffles with real
  square pockets, clear cups with layered drinks and the cafe's logo sticker.
- Look rules: photoreal materials (clearcoat, subsurface-ish tints, normal
  maps), natural irregularity, no cartoon colours.
- Toppings follow each item's board ingredients; powdered sugar only where the
  board lists it.
- Still fallbacks are renders of the same scene (`assets/media/stills/`).
- Icons: inline SVG, 1.75px stroke, round caps. No emoji.

## 7. Motion

- three.js 0.187.0 bundled into `assets/scene.js`; no GSAP or Lenis.
- Scroll progress is damped (`progress += (target - progress) * (1 - exp(-dt*6))`).
- Intro beats (progress 0–1): hero 0–.1, spin-in .1–.2, pour and spread
  .23–.33, cook .3–.37, folds .37–.47, drizzle/toppings/sugar .47–.585,
  close-up .56–.62, exploded view .67–.8, brand sweep and logo wipe .8–.94,
  then the address and buttons.
- Menu: scroll index picks the item; a newcomer spins in a full turn with
  `outBack` easing and a small hop (1.05s); drag spins with inertia; mouse
  tilts the camera slightly; neighbours idle-spin slowly.
- Reduced motion: same scroll story, no float, idle spin, steam or particles;
  text swaps fade only.
- Performance: one canvas per stage, paused off-screen and when the tab is
  hidden; DPR cap 2 (1.75 phones); MSAA 4 (2 phones); bloom on desktop only;
  menu items built lazily, then warmed during idle time.
