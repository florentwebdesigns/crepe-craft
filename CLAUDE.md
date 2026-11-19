# CLAUDE.md · Crepe Craft Cafe demo site

Demo preview built by **FD Web Designs** to show the owner of Crepe Craft Cafe.
Static site, no build step needed to deploy. Status: **demo, `noindex` on**.

## Business facts (use only these, never invent)

| Fact | Value |
|---|---|
| Name | Crepe Craft Cafe |
| Type | Dessert and brunch spot |
| Address | 245 Morris Ave, Springfield, NJ 07081 |
| Phone | (973) 390-7777 (`tel:+19733907777`) |
| Hours | Monday–Sunday, 12:30 PM – 10:30 PM. **CONFIRM WITH OWNER**: some listings say 12:00–10:00 PM |
| Online ordering | https://www.seamless.com/menu/crepe-craft-245-morris-ave-springfield/9233840 |
| Existing site | https://crepecraft.org/ |
| Prices | Crepes $10.25–$13.25; Waffles $10.25–$11.49; Specialty $5.99–$10.99; Milkshakes $8.99; Smoothies $8.99–$9.99; Iced coffee $6.49; Coffee $4.99–$5.99; Tea $3.49. Typical spend $10–$20 per person |
| Google rating | 4.8 from 377 reviews, shown as "4.8 ★ on Google". **VERIFY BEFORE LAUNCH**. No review quotes |
| Sweet crepes | Strawberrific, S'morelicious, Oreo Breaker, Banana Berry, Lotus Fusion |
| Savory & specialty | Spinach mushroom crepe, Sushi Crepe, Fettuccine Crepe (vegetarian), waffles |
| Drinks | Milkshakes, smoothies, coffee, iced coffee, tea |
| The spot | Cozy, casual, trendy; dine-in, takeout, curbside pickup, delivery; good for families, groups, late-night treats; wheelchair-accessible parking and restrooms; dog-friendly seating |

Hours appear in three places: hero meta, Visit section, footer, plus the
JSON-LD `openingHoursSpecification`. Update all four together.

## Files

- `index.html`: all content as real HTML, JSON-LD, meta tags.
- `assets/style.css`: tokens and styles (see `DESIGN.md`).
- `assets/intro.js`: intro film controller (captions, skip, wordmark reveal, the film flying into the hero) and the frame-sequence player.
- `assets/app.js`: Lenis smooth scroll, section progress (`window.CC`), chapter sidebar, stage switching (`html[data-stage]`), craft and smoothie frame scrubbing, sweet-menu crossfade, booking form validation, reduced-motion path.
- `assets/media/`: all pre-rendered visuals. `intro.webm`/`intro.mp4` + `intro-poster.webp`; `hero-720/1200.webp` (= last film frame) and `hero-1200.jpg` (social image); `sweet-0…4-720/1200.webp`; `craft/c000…c047.webp`; `smoothie/s000…s035.webp` (transparent).
- Renders come from Blender 5.1 Cycles scripts kept outside the site (scene library `cc.py`, `intro.py`, `craft.py`, `sweet.py`, `smoothie.py`). To change a visual, re-render and replace the files 1:1 (same names and sizes).
- `_archive-v2/`: the retired Three.js version (excluded from deploys by `.vercelignore`). Safe to delete.
- `assets/vendor/`: GSAP 3.12.5, ScrollTrigger, Lenis 1.1.13 (self-hosted, pinned).
- `DESIGN.md`: design system. Follow it for any change.

## Design decisions

- v3 concept "crafted, layer by layer", photoreal: a 4.4s rendered intro film (crepe drops, chocolate pour, powdered sugar, bananas) ends on a gold "Crepe Craft" wordmark, then the film lands in the hero. Chapter 02 scrubs a rendered spread-and-fold sequence; 03 crossfades a render per sweet crepe; 05 scrubs a Ciao-style smoothie turntable on a brown spotlight gradient. The intro plays once per browser session (`?nointro` skips it for testing).
- Topping looks are **visual interpretations of the crepe names** (Strawberrific = strawberries + chocolate, S'morelicious = marshmallows + graham + chocolate, Oreo Breaker = cookie chunks + cream, Banana Berry = banana + strawberry + blueberry, Lotus Fusion = biscoff + caramel). Confirm real recipes with the owner.
- Dark espresso palette (`#140B07`), cream text, golden batter accent `#EBB054`, strawberry red `#E8414F` used sparingly.
- Schibsted Grotesk (display, italic accent words) + Instrument Sans (body, tracked uppercase labels).
- Chapters 00–07 with the right-side chapter sidebar (desktop) and a top progress bar.
- Phone + Order online are always visible: fixed top bar (above the intro loader) and a fixed bottom action bar on phones.
- Performance: no WebGL. Film is 0.8 MB WebM / 1.6 MB MP4; craft frames load coarse-to-fine after the intro; smoothie frames load when the drinks section is near.
- Reduced motion, Save-Data, slow connections, low memory: no intro, no Lenis, still images and gentle fades.

## Open items before launch

1. **Confirm hours** with the owner (12:30–10:30 PM vs 12:00–10:00 PM).
2. **Verify the Google rating** (4.8, 377 reviews) at launch time.
3. **Owner photos**: replace every dashed "Owner photo: …" placeholder (5 sweet crepes, savory, dining room) with the owner's real photos. No stock images.
4. **Menu descriptions**: get a one-line description for each named crepe from the owner (none written, so nothing is invented).
5. Replace the JSON-LD/OG `image` with a real photo (currently the rendered hero crepe).
6. Remove `<meta name="robots" content="noindex, nofollow">` and the footer "Preview by FD Web Designs" note when going live; confirm the final domain (canonical/JSON-LD assume `https://crepecraft.org/`).
7. Check the Google Maps embed loads on the final domain.
8. **Booking form is not connected.** It validates and shows a success panel but sends nothing. First confirm the cafe actually takes table requests; then wire it to the owner's phone (SMS/email service such as Twilio, Formspree or a serverless function) and update the success text.
9. Confirm the topping looks for the five sweet crepes (see Design decisions).
