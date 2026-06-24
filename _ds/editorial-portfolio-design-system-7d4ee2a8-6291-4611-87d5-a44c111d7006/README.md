# Editorial Portfolio Design System

A design system distilled from **Xinge Zhang's data-analytics portfolio** — a personal site built on the open-source [*Editorial* template by HTML5 UP](https://html5up.net/editorial). It captures the template's clean, editorial, text-forward aesthetic: a quiet cool-grey palette, a single coral accent, slab-serif headings over a humanist sans body, and a fixed-sidebar / scrolling-content layout.

This system lets a design agent produce on-brand interfaces, portfolio pages, and project write-ups in that voice.

## Sources
- **GitHub:** [`zhaxinge/portfolio-n`](https://github.com/zhaxinge/portfolio-n) — the live portfolio. Tokens were lifted verbatim from `assets/sass/libs/_vars.scss`; component behavior from `assets/sass/components/*` and `assets/sass/layout/*`. Explore this repo to recreate any screen with higher fidelity.
- **Template lineage:** [Editorial by HTML5 UP](https://html5up.net/editorial), CCA 3.0. The original ships jQuery + a SASS pipeline; this system re-expresses the foundations as CSS custom properties and the primitives as React.
- **Imagery:** the analyst's own project outputs — GIS maps, model diagnostics, network graphs, and the *Super Finder* parking-app mockups — imported under `assets/img/`.

## Product context
Xinge Zhang is a **data analyst (MUSA, University of Pennsylvania)** working in urban spatial analytics, GIS and machine learning. The site is a **portfolio**: a homepage of "Selected works", per-project pages, an about page, and an embedded interactive data tool. Content skews academic and civic — transportation, housing, land cover, parking — so the brand reads as **credible, calm and analytical**, never flashy.

---

## CONTENT FUNDAMENTALS

**Voice.** First-person, modest, and matter-of-fact. The analyst speaks as "I"; the reader is "you" only in calls to action ("If you're interested in my work, I'd be glad to hear from you"). Copy leads with the *problem and data*, then the *method*, then the *use* — e.g. "From 2021–2022 alone, Chicago's bike-share stations grew from 828 to 1,481… the purpose of this study is to test the reasonableness of site selection."

**Tone.** Informative and grounded. Sentences are declarative and often quantified (years, counts, percentages). No hype words, no exclamation marks, no marketing superlatives. Technical terms (hedonic model, kernel density, TOD, confusion matrix) are used plainly and assumed familiar to a professional reader.

**Casing.**
- Headings & body: **sentence case** ("Selected works", "Geospatial Risk Prediction" titles are Title Case but section headers are sentence case).
- Navigation, buttons, eyebrows: **UPPERCASE** with slab tracking ("LEARN MORE", "SPATIAL ANALYSIS").
- Project titles: Title Case.

**Vibe.** Editorial and academic — closer to a research portfolio than a startup landing page. Whitespace-rich, figure-driven, restrained.

**Emoji.** None. Never used. Iconography is FontAwesome line/brand glyphs only.

**Examples (real copy):**
- Banner: *"Hi, I'm Xinge Zhang"* → one-paragraph bio → "Learn More".
- Section header: *"Selected works"*.
- Contact: *"If you are interested in my work, I am willing to hearing from you."* (kept gentle and personal.)
- Project blurbs run 2–4 sentences, problem-first.

---

## VISUAL FOUNDATIONS

**Color.** A near-monochrome cool-grey system with **one** accent. Text is `--fg #7f888f` (body) / `--fg-bold #3d4449` (headings) / `--fg-light #9fa3a6` (muted). Surfaces are `--bg #ffffff` and `--bg-alt #f5f6f7` (the sidebar). The sole brand color is **coral `--accent #f56a6a`**, used for links, the primary button, active nav, eyebrows, and focus rings — sparingly, as punctuation. No secondary palette, no semantic success/warn/error colors in the source.

**Type.** Headings in **Roboto Slab** (slab serif; 700 for titles, 400 for nav), body in **Open Sans** (400 / 600), code in **Courier New**. Display scale is large and confident — `h1` is 4em. Uppercase elements (nav, buttons, eyebrows) carry **0.075em tracking**. Body line-height is generous at **1.65**; headings 1.5.

**Spacing & layout.** Em-relative rhythm built on `--element-margin: 2em` and `--gutter: 3em`. The signature layout is a **fixed ~24–26em sidebar** (`--bg-alt`) beside a **scrolling, max-width, centered content column**. Sidebar sections are separated by **2px** rules; content dividers are **1px** hairlines. Generous outer padding (≈3em). The works grid is 2–3 columns with `--gutter` spacing and thin connecting hairlines in the original.

**Backgrounds.** Flat white and flat `--bg-alt` only. **No gradients, no textures, no patterns, no full-bleed photo heroes.** Figures (maps, charts) float directly on white with no frame or fill — the data viz *is* the imagery.

**Imagery vibe.** Analytical, not photographic: kernel-density maps, OD network graphs, model diagnostics, app mockups. Palettes are scientific (viridis / magma / coral point clouds) on **white** backgrounds — light, airy, cool-to-warm scientific ramps. Crop with `object-fit: contain` on `--bg-alt` so nothing is clipped; cards may use `cover` at 16:10.

**Corners & cards.** A single small radius — `--radius: 0.375em` (~6px) — on fields, buttons, chips and image crops. Cards are **borderless and shadowless**: a card is just an image + slab title + grey body + outlined button, separated from siblings by whitespace and hairlines, not by a container box. Avoid drop-shadowed, rounded, left-accent-border cards — they are not in this brand.

**Borders.** `--border rgba(210,215,217,0.75)` hairlines everywhere; 1px on fields and dividers, 2px for the button stroke and sidebar section rules.

**Shadows.** Essentially none in normal layout. The only shadow in the source is the **off-canvas sidebar** drop shadow on small screens (`0 0 5em rgba(0,0,0,0.175)`). Treat shadow as a rare, functional tool — not decoration.

**Buttons.** Default is **outlined**: transparent fill, `inset 0 0 0 2px` accent stroke, accent uppercase slab label. Primary is **filled** accent with white label. Hover *lightens* (primary → `--accent-hover`) or adds a **5% accent wash** (default); active deepens to `--accent-active` or a 15% wash. No scale/transform on press — only color transitions.

**Hover & press states.** Links and nav turn **accent** on hover; social icons go grey→accent. Buttons shift background color only. Transitions are short and soft: **0.2s ease-in-out** for color/background; **0.5s ease** for the sidebar slide. No bounces, no springy motion, no decorative looping animation. The aesthetic is *still and editorial*.

**Transparency & blur.** Used only in token values (semi-transparent borders, accent washes). **No backdrop blur, no glassmorphism.**

**Focus.** Accessible accent focus ring — `box-shadow: 0 0 0 1px var(--accent)` plus accent border on fields.

---

## ICONOGRAPHY

The source uses **Font Awesome** (the `fontawesome-all.min.css` shipped with Editorial) — both **solid** UI glyphs and **brand** glyphs. There is no custom icon font, no SVG sprite, and **no emoji or unicode used as icons**.

- **Where icons appear:** social row in the header & sidebar (brand glyphs — Twitter, Instagram, Medium, etc.), the search magnifier (`fa-magnifying-glass`, flipped horizontally), the menu chevron (`fa-chevron-down`), contact list (`fa-envelope`, `fa-phone`), checkbox checks (`fa-check`), and the diamond-framed "features" icons on richer pages.
- **Style:** thin, single-weight line/solid icons; never multicolor. Brand icons resting in `--fg-light`, hovering to `--accent`.
- **How to load (consumers):** the project's Font Awesome isn't redistributed here; link the matching version from CDN —
  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  ```
  Use `fa-solid …` for UI, `fa-brands …` for social. ⚠️ **Substitution flag:** the original ships Font Awesome 5.15-era classes; this system standardizes on **Font Awesome 6** from CDN. Class names are largely compatible (`fa-solid`/`fa-brands` instead of legacy `fas`/`fab`). Swap in the licensed local copy if exact-version fidelity is required.

---

## VISUAL ASSETS

Under `assets/img/` — the analyst's own project figures, safe to reuse as on-brand imagery:
`risk.png` (Chicago bike-risk kernel density) · `scooter.jpg` (OD network graph) · `tod.jpg` (TOD change map) · `houseprice.jpg` · `bike.jpg` · `app.png` (Super Finder parking-app mockups) · `predict.png` · `mapsample.png` (land-cover frames) · `cover.jpg` (model diagnostics) · `pic01–04.jpg` (small generic thumbnails). There is **no logo file** — the brand mark is the **text wordmark** "**Xinge Zhang** | Portfolio" (see the Wordmark card).

---

## INDEX / MANIFEST

**Root**
- `styles.css` — the single entry point consumers link (`@import`s the tokens + fonts).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `README.md` — this guide. · `SKILL.md` — Agent-Skills-compatible entry.

**Foundation cards** (`guidelines/*.card.html`, shown in the Design System tab)
- Colors — Accent · Neutrals · Text on surfaces
- Type — Display & headings · Body & mono · Slab caps & eyebrow
- Spacing — Radius & dividers · Spacing scale
- Brand — Wordmark · Imagery vibe

**Components** (React; import from `window.EditorialPortfolioDesignSystem_7d4ee2`)
- `components/core/` — **Button** (outlined / primary, sizes, icon, disabled)
- `components/forms/` — **Input** (input/textarea), **Select**, **Checkbox** (checkbox/radio)
- `components/content/` — **ProjectCard**, **Tag**
- `components/navigation/` — **SocialIcons**

**UI kit**
- `ui_kits/portfolio/` — full interactive portfolio: sidebar + works grid, project pages, about + contact. See its `README.md`. This `index.html` is also a **starting point**.

> Consumers: link `styles.css` and load `_ds_bundle.js` (auto-compiled), then read components via `const { Button } = window.EditorialPortfolioDesignSystem_7d4ee2`. Explore the source repo above to push fidelity further.
