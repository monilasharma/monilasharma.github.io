# Countertop Editorial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Pallav's Kitchen as a story-led, Countertop Editorial storefront that presents Monila Sharma's home-bakery work beautifully and gives visitors a clear, accessible path to order.

**Architecture:** Keep the site framework-free and progressively enhanced. `index.html` owns the semantic page sections and accessible controls, `style.css` owns the visual system and responsive layout, and `script.js` owns the embedded catalog, deterministic featured selection, filtering, navigation state, reveals, and dialog behavior. The existing Google Form, phone/WhatsApp links, optimized WebP catalog, and offline-friendly embedded data remain intact.

**Tech Stack:** Semantic HTML5, vanilla JavaScript, CSS custom properties/grid, Google Fonts with local fallbacks, existing WebP/PNG assets, GitHub Pages static hosting.

**Spec:** `docs/superpowers/specs/2026-08-30-countertop-editorial-redesign-design.md`

## Global Constraints

- Keep Pallav's Kitchen as the mark and Monila Sharma as the maker/story.
- Keep all 104 verified catalog entries and the existing category names.
- Preserve the Google Form URL, phone number, and WhatsApp destination.
- Use Kitchen Ink `#24171B`, Butter Paper `#F4EAD6`, Cherry Glaze `#C84C3B`, Pistachio Frost `#B6C7A6`, Blueberry Slate `#314C71`, and Apricot Crust `#D89A63`.
- Use Bodoni Moda for display, DM Sans for body/utility, and Caveat only for short kitchen notes.
- Remove Three.js, the wireframe canvas, randomized full-screen floating imagery, and unbounded animation loops.
- Use the existing committed assets only; do not add a framework or image-generation dependency.
- Keep focus-visible states, keyboard operation, reduced-motion behavior, lazy loading, intrinsic image sizing, and WCAG AA contrast.
- Do not invent location, dates, awards, prices, delivery promises, lead times, or ingredient claims.

---

### Task 1: Replace the page skeleton with the editorial content model

**Files:**
- Modify: `index.html`
- Test: `index.html` structural smoke check via a Node assertion script

**Interfaces:**
- Produces the IDs and data attributes consumed by Tasks 3–5: `site-nav`, `menu-toggle`, `nav-menu`, `featured-grid`, `gallery-container`, `gallery-count`, `filter-status`, `postcard-modal`, `modal-close`, `postcard-image`, `postcard-title`, `postcard-description`, `postcard-category`, and `contact`.
- Preserves the exact Google Form URL and `tel:+918796312333` / `https://wa.me/918796312333` destinations.

- [ ] **Step 1: Write the failing structural check**

Create a temporary shell heredoc only for the check (do not commit it) and run a Node assertion against `index.html`:

```bash
node <<'NODE'
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
for (const id of ['site-nav', 'menu-toggle', 'nav-menu', 'featured-grid', 'gallery-container', 'gallery-count', 'filter-status', 'postcard-modal', 'modal-close', 'contact']) {
  if (!html.includes(`id="${id}"`)) throw new Error(`missing #${id}`);
}
if (html.includes('wireframe-cake') || html.includes('three.min.js')) throw new Error('legacy hero dependency still present');
console.log('structural check passed');
NODE
```

Expected before the markup replacement: FAIL because the current page does not have the new IDs and still contains the Three.js script.

- [ ] **Step 2: Replace the markup with semantic sections**

Keep the existing document head metadata and logo path, then implement:

```html
<nav class="site-nav" id="site-nav" aria-label="Primary navigation">
  <a class="brand-lockup" href="#home" aria-label="Pallav's Kitchen home">...</a>
  <button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-menu">Menu</button>
  <div class="nav-menu" id="nav-menu">
    <a href="#gallery">Gallery</a><a href="#story">Her story</a><a href="#contact">Order</a>
    <a class="nav-order-link" href="#contact">Start an order <span aria-hidden="true">↗</span></a>
  </div>
</nav>
<main>
  <header class="hero" id="home">...</header>
  <section class="proof-strip" aria-label="Pallav's Kitchen at a glance">...</section>
  <section class="featured-section" id="featured" aria-labelledby="featured-heading"><div id="featured-grid"></div>...</section>
  <section class="story-section" id="story" aria-labelledby="story-heading">...</section>
  <section class="gallery-section" id="gallery" aria-labelledby="gallery-heading">
    <div class="gallery-toolbar">...<span id="gallery-count"></span></div>
    <div class="gallery-filters" role="group" aria-label="Filter creations">...</div>
    <p id="filter-status" class="sr-only" aria-live="polite"></p>
    <div class="gallery-grid" id="gallery-container"></div>
  </section>
  <section class="process-section" id="process" aria-labelledby="process-heading">...</section>
</main>
<footer id="contact">...</footer>
<div class="postcard-modal" id="postcard-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="postcard-title">...</div>
```

The hero uses `images/3d_cozy_bakery_hero.png` as an atmosphere panel plus two real catalog-image slots with `data-featured-slot` attributes. The copy must use “From her kitchen to your celebration,” name Monila, and avoid unsupported location claims. The proof strip uses “104 creations,” “made to order,” and “baked in Monila's kitchen.” The footer keeps the existing form iframe and new-tab fallback.

Remove the `animated-bg` container, `wireframe-cake` canvas, Three.js script tag, random emoji title decorations, and obsolete `postcard-file` references. Give the dialog close button `type="button"`; keep an empty image `alt` that JavaScript fills from the selected entry.

- [ ] **Step 3: Run the structural check again**

Run the Node assertion from Step 1. Expected: PASS, with no `wireframe-cake` or `three.min.js` references.

- [ ] **Step 4: Commit the markup slice**

```bash
git add index.html
git commit -m "Reshape bakery page into editorial storefront"
```

### Task 2: Build the Countertop Editorial visual system

**Files:**
- Modify: `style.css`
- Test: browser screenshot inspection at 1440px, 1024px, and 390px

**Interfaces:**
- Consumes the semantic classes/IDs from Task 1.
- Produces stable layout hooks for the script: `.reveal`, `.is-visible`, `.nav-scrolled`, `.menu-open`, `.is-active`, `.is-hidden`, and `.modal-open`.

- [ ] **Step 1: Replace the token and reset layer**

Start `style.css` with the exact design tokens from the spec:

```css
:root {
  --ink: #24171B;
  --paper: #F4EAD6;
  --cherry: #C84C3B;
  --pistachio: #B6C7A6;
  --slate: #314C71;
  --apricot: #D89A63;
  --font-display: "Bodoni Moda", Georgia, serif;
  --font-body: "DM Sans", Arial, sans-serif;
  --font-note: "Caveat", cursive;
  --page-gutter: clamp(1.25rem, 4vw, 5rem);
  --section-space: clamp(5rem, 11vw, 10rem);
  --shadow-soft: 0 24px 70px rgba(36, 23, 27, .12);
}
```

Add `box-sizing`, smooth anchor scrolling, a readable body fallback, a `.sr-only` utility, and `:focus-visible` outlines using `var(--cherry)`. Keep the page background paper with a low-opacity CSS grain/radial treatment only.

- [ ] **Step 2: Implement desktop layout and signature components**

Style the transparent-to-paper `.site-nav`, dark `.hero`, perforated `.bake-ticket`, `.proof-strip`, asymmetric `.featured-grid`, `.story-section`, `.gallery-grid`, `.process-section`, and dark footer. The hero must use a two-column grid; the featured grid must intentionally span one lead item and three supporting items; gallery cards must use consistent image aspect ratios with no random rotation. Use CSS pseudo-elements for ticket perforations and rules rather than new assets.

Use transitions only for opacity/transform/color and define the visible state explicitly:

```css
.reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
.reveal.is-visible { opacity: 1; transform: none; }
```

Style `.menu-toggle` and `.nav-menu` so the mobile menu can be toggled without layout hacks; style `.postcard-modal` as a centered dialog with a dark scrim, readable paper panel, and contained image.

- [ ] **Step 3: Add responsive and reduced-motion rules**

At `max-width: 900px`, collapse the hero and story to one column and reduce featured spans. At `max-width: 640px`, switch the nav to the menu button, stack the hero ticket, use a two-column gallery, make the dialog nearly full width, and keep CTA hit areas at least 44px. Add:

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
  .reveal { opacity: 1; transform: none; }
}
```

- [ ] **Step 4: Capture baseline screenshots for review**

Serve the site with `python3 -m http.server 4173` and capture/inspect fresh screenshots at 1440px, 1024px, and 390px. Confirm no overflow, no unreadable overlay text, and a visible focus ring before behavior is added.

- [ ] **Step 5: Commit the visual system**

```bash
git add style.css
git commit -m "Add countertop editorial visual system"
```

### Task 3: Refactor the gallery and featured rendering

**Files:**
- Modify: `script.js`
- Test: `node --check script.js` plus a browser catalog/filter smoke test

**Interfaces:**
- Consumes the embedded `images`, `cakeCatalog`, and `imageToCakeTitle` data already synchronized with `cakes.json`.
- Produces `renderFeatured()`, `renderGallery(category)`, `openPostcard({ trigger, note, src })`, `closePostcard()`, `updateFilterStatus(category, count)`, and `getCakeNote(imageName)` behavior for the markup from Tasks 1–2.

- [ ] **Step 1: Write the failing runtime contract check**

Run:

```bash
node --check script.js
node <<'NODE'
const fs = require('fs');
const source = fs.readFileSync('script.js', 'utf8');
for (const name of ['renderFeatured', 'renderGallery', 'openPostcard', 'closePostcard', 'updateFilterStatus']) {
  if (!source.includes(`function ${name}`) && !source.includes(`const ${name}`)) throw new Error(`missing ${name}`);
}
if (source.includes('THREE.') || source.includes('wireframe-cake')) throw new Error('legacy Three.js behavior remains');
console.log('runtime contract passed');
NODE
```

Expected before refactor: FAIL because the current script has no featured renderer/status function and still initializes Three.js.

- [ ] **Step 2: Remove legacy visual behavior without changing catalog data**

Delete the `animated-bg` generation, theme listener, random floating assets, `initWireframeCake`, Three.js assumptions, and `imageToCakeTitle` fallback that references removed dialog fields. Leave `images`, `cakeCatalog`, and `imageToCakeTitle` synchronized with the 104-entry catalog.

- [ ] **Step 3: Implement deterministic featured cards**

Define:

```js
const FEATURED_FILES = [
  'romantic-red-roses-love-anniversary-cake.webp',
  'classic-oreo-chocolate-cake-bowl.webp',
  'nutty-butter-cookies.webp',
  'pink-purple-floral-butterfly-cake.webp'
];
```

Implement `renderFeatured()` to resolve each filename through the catalog map, create an image with `loading="eager"` for the lead and `loading="lazy"` for supporting cards, render the category/title, and attach the same click/keyboard handler used by gallery cards. If a selected file is missing, log `console.warn('[gallery] missing featured asset', fileName)` and skip only that card.

- [ ] **Step 4: Implement gallery cards, filters, counts, and fallback**

Implement `renderGallery(category = 'all')` to clear `#gallery-container`, filter `images` through `getCakeNote`, and create semantic `<article>` cards containing an image, category label, title, and `<button class="card-action">View details</button>`. Set `img.loading = 'lazy'`, `img.width`/`img.height` from a stable `aspect-ratio` CSS box, and add `img.onerror` to replace the card media with a labelled “Image unavailable” block while warning once. Update `#gallery-count` and `#filter-status` with the filtered count; when zero results occur, render a recovery action that resets the All filter.

Use one `setActiveFilter(button)` helper so filter buttons update `aria-pressed` and `.is-active` consistently. Preserve all five category filters plus All.

- [ ] **Step 5: Run the runtime contract and syntax checks**

Run the checks from Step 1. Expected: PASS with no `THREE` or `wireframe-cake` references. Parse `cakes.json` and verify all 104 `fileName` values still exist under `images/`.

- [ ] **Step 6: Commit the catalog behavior slice**

```bash
git add script.js
git commit -m "Refine gallery rendering and featured work"
```

### Task 4: Add accessible navigation, dialog focus, and guarded motion

**Files:**
- Modify: `script.js`
- Test: keyboard/browser interaction smoke test

**Interfaces:**
- Consumes `#menu-toggle`, `#nav-menu`, `#site-nav`, the dialog IDs, `.reveal`, and filter controls from Tasks 1–3.
- Produces focus-safe menu and dialog behavior that remains usable without pointer input.

- [ ] **Step 1: Implement mobile menu state**

Add `setMenu(open)` that toggles `.menu-open` on `#site-nav`, sets `aria-expanded`, traps body scroll only while open, and focuses the first nav link when opening. Close on Escape, on an internal anchor click, and when the viewport returns above 640px. Keep anchor navigation functional if JavaScript is unavailable.

- [ ] **Step 2: Implement scroll-aware nav state**

Add one passive scroll listener (or an `IntersectionObserver` on the hero) that toggles `.nav-scrolled` after the hero threshold. Do not animate layout-affecting properties; only background, border, and color may transition.

- [ ] **Step 3: Implement dialog focus management**

`openPostcard({ trigger, note, src })` must store `trigger`, fill title/description/category/alt, add `.modal-open`, set `aria-hidden="false"`, focus `#modal-close`, and lock body scroll. `closePostcard()` must reverse those states and return focus to the trigger if it is still connected. Close on Escape and backdrop click. Use a small keydown guard to keep Tab inside the dialog while open.

- [ ] **Step 4: Add guarded reveal observer**

Create one `IntersectionObserver` for `.reveal` elements; if `prefers-reduced-motion: reduce` matches, immediately add `.is-visible` without observing. Observe newly rendered featured/gallery cards after each render, but never create an animation loop.

- [ ] **Step 5: Run interaction checks**

In a browser at 390px, use only the keyboard to open/close the menu, navigate to Gallery and Order, open the first card, cycle Tab within the dialog, press Escape, and confirm focus returns to the card action. At desktop width, confirm the menu is visible without the toggle and the nav changes state after scrolling.

- [ ] **Step 6: Commit the interaction slice**

```bash
git add script.js
git commit -m "Add accessible bakery navigation and dialog behavior"
```

### Task 5: Full verification and visual polish pass

**Files:**
- Modify: `index.html`, `style.css`, `script.js` only if verification exposes a defect
- Test: fresh browser QA and source checks

**Interfaces:**
- Validates the complete page against the spec's acceptance criteria and the exact implementation commits from Tasks 1–4.

- [ ] **Step 1: Run source/data gates**

```bash
node --check script.js
node -e "const fs=require('fs'); const items=JSON.parse(fs.readFileSync('cakes.json')); if(items.length!==104) throw new Error('catalog count mismatch'); for(const item of items){if(!fs.existsSync('images/'+item.fileName)) throw new Error('missing '+item.fileName)} console.log('catalog assets verified:', items.length)"
git diff --check "$(git merge-base main HEAD)..HEAD"
```

Record the actual output; do not report a pass without it.

- [ ] **Step 2: Run responsive browser QA**

Serve with `python3 -m http.server 4173`. Inspect fresh screenshots at 1440px, 1280px, 1024px, 768px, and 390px. Confirm the hero thesis, ticket, featured cards, story, gallery, process, and order footer are all visible and aligned, with no horizontal scrolling.

- [ ] **Step 3: Run functional browser QA**

Verify: hero order CTA, featured-to-gallery anchor, every category filter and count, first and last catalog card, missing-image fallback path using DevTools request blocking, dialog keyboard focus/escape/backdrop close/focus restore, mobile menu, phone link, WhatsApp link, form iframe, and new-tab fallback. Scroll through all 104 cards and confirm every image loads with an empty console.

- [ ] **Step 4: Run reduced-motion and no-font checks**

Emulate `prefers-reduced-motion: reduce` and verify no reveal/hover movement blocks content. Disable Google Fonts in DevTools and verify fallback typography remains readable and no layout becomes unusable.

- [ ] **Step 5: Remove any polish regressions found by fresh screenshots**

Fix only issues evidenced by the new captures (overflow, contrast, clipped copy, focus visibility, or broken interactions), rerun the relevant checks, and capture final desktop/mobile screenshots tied to the final commit.

- [ ] **Step 6: Commit and push the redesign**

```bash
git add index.html style.css script.js docs/superpowers/plans/2026-08-30-countertop-editorial-redesign.md
git commit -m "Redesign bakery site with countertop editorial experience"
git push origin aug30
git rev-parse HEAD
git ls-remote origin refs/heads/aug30
```

The local and remote SHA must match before reporting completion.
