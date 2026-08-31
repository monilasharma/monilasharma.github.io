# Catalog First Minimal Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the superseded editorial redesign with a clean, elegant catalog-first page whose primary actions are the supplied WhatsApp order group and Monila's direct WhatsApp number.

**Architecture:** Keep the site framework-free and progressively enhanced. `index.html` owns a compact header, short hero, catalog shell, footer, and accessible detail dialog; `style.css` owns the light blue/coral brand system and responsive card layout; `script.js` keeps the embedded 104-entry catalog and owns rendering, filtering, fallback media, dialog focus, and the mobile order dock. No story/process/form/3D layer remains in the primary page flow.

**Tech Stack:** Semantic HTML5, vanilla JavaScript, CSS custom properties/grid, Fraunces + DM Sans with local fallbacks, existing WebP/PNG assets, GitHub Pages static hosting.

**Spec:** `docs/superpowers/specs/2026-08-31-catalog-first-minimal-redesign-design.md`

## Global Constraints

- Keep Pallav's Kitchen as the mark and Monila Sharma as the maker.
- Keep all 104 verified catalog entries, their curated order, and the actual `Kids` category.
- Use Brand Blue `#0E4693`, Brand Coral `#FA6E6D`, Vanilla `#FDFAF3`, Biscuit `#F5EDD8`, and Ink `#1E2430`; do not introduce the superseded plum palette or a dark theme.
- Use Fraunces for display and DM Sans for body/UI; remove Fredoka and Caveat imports.
- Use the exact group URL `https://chat.whatsapp.com/Hf6RhlO98f93zcG5ide3Bo?s=cl&p=a&mlu=4` for group order actions.
- Use the exact personal WhatsApp URL `https://wa.me/918796312333` and `tel:+918796312333` for direct contact.
- Make the catalog and WhatsApp actions the visual focus; remove story/process/proof sections, the embedded Google Form, generated 3D hero art, emoji decoration, and unbounded animation.
- Keep the detail dialog, semantic cards, visible focus rings, keyboard operation, reduced-motion behavior, lazy media, intrinsic aspect ratios, and WCAG AA contrast.
- Do not add frameworks, new image assets, or unverified claims about place, pricing, delivery, timing, awards, or ingredients.

---

### Task 1: Replace the page markup and contact destinations

**Files:**
- Modify: `index.html`
- Test: structural/link/font smoke check via Node

**Interfaces:**
- Produces `site-nav`, `gallery`, `gallery-container`, `gallery-count`, `filter-status`, `postcard-modal`, `modal-close`, `postcard-image`, `postcard-title`, `postcard-description`, `postcard-category`, `order-dock`, and `contact` IDs/classes for Tasks 2–4.
- Preserves the existing logo path and catalog image paths used in the hero strip.

- [ ] **Step 1: Write the failing structural check**

```bash
node <<'NODE'
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
for (const id of ['site-nav', 'gallery-container', 'gallery-count', 'filter-status', 'postcard-modal', 'modal-close', 'order-dock', 'contact']) {
  if (!html.includes(`id="${id}"`)) throw new Error(`missing #${id}`);
}
for (const href of [
  'https://chat.whatsapp.com/Hf6RhlO98f93zcG5ide3Bo?s=cl&p=a&mlu=4',
  'https://wa.me/918796312333',
  'tel:+918796312333'
]) if (!html.includes(href)) throw new Error(`missing ${href}`);
if (!html.includes('family=Fraunces') || !html.includes('family=DM+Sans')) throw new Error('approved fonts are not loaded');
if (html.includes('google.com/forms') || html.includes('three.min.js') || html.includes('wireframe-cake') || html.includes('3d_cozy_bakery_hero')) throw new Error('superseded content remains');
console.log('catalog-first markup contract passed');
NODE
```

Expected before replacement: FAIL because the current page still has the editorial sections, form, old font imports, and no order dock.

- [ ] **Step 2: Replace the body with the minimal semantic page**

Keep the document metadata and logo, update the font link to Fraunces + DM Sans, and use:

```html
<nav class="site-nav" id="site-nav" aria-label="Primary navigation">
  <a class="brand-lockup" href="#home" aria-label="Pallav's Kitchen home">...</a>
  <div class="nav-links"><a href="#gallery">Gallery</a><a class="nav-order-link" href="#contact">Order on WhatsApp ↗</a></div>
</nav>
<main>
  <header class="hero" id="home" aria-labelledby="hero-heading">
    <div class="hero-copy">...</div>
    <div class="hero-image-strip" aria-label="Selected creations">three real catalog images...</div>
  </header>
  <section class="catalog-section" id="gallery" aria-labelledby="gallery-heading">
    <div class="catalog-heading">...<span id="gallery-count">104 creations</span></div>
    <div class="gallery-filters" role="group" aria-label="Filter creations">All, Birthday, Anniversary, Festive, Specialty, Cake Bowls, Kids</div>
    <p id="filter-status" class="sr-only" aria-live="polite">Showing all 104 creations.</p>
    <div class="gallery-grid" id="gallery-container"></div>
  </section>
</main>
<footer id="contact" aria-labelledby="contact-heading">logo, phone, group link, personal WhatsApp link</footer>
<div class="order-dock" id="order-dock" aria-label="WhatsApp order actions">group + personal links</div>
<div class="postcard-modal" id="postcard-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="postcard-title" aria-describedby="postcard-description">...</div>
```

Hero copy must use “Cakes made for your moments.”, name Monila, and say the work is made to order without extra narrative. The primary hero CTA is labelled “Join the WhatsApp order group” and points to the exact group URL; the secondary is “Chat with Monila.” The image strip uses real committed catalog WebPs and no generated kitchen art. The footer repeats the group, personal WhatsApp, and phone links without a form iframe.

Cards and dialog markup should be empty render targets where JavaScript owns the catalog. The modal close button is `type="button"`; the dialog image starts with an empty `alt` for JavaScript to fill. All external WhatsApp links use `target="_blank" rel="noopener noreferrer"`.

- [ ] **Step 3: Run the structural check again**

Run the Node command from Step 1. Expected: PASS with no form, Three.js, old hero-art, or old font references.

- [ ] **Step 4: Commit the markup slice**

```bash
git add index.html
git commit -m "Simplify page around catalog and WhatsApp ordering"
```

### Task 2: Replace the stylesheet with the minimal brand system

**Files:**
- Modify: `style.css`
- Test: CSS source check and fresh screenshots at 1440px, 1024px, and 390px

**Interfaces:**
- Consumes the markup classes/IDs from Task 1.
- Produces `.reveal`, `.is-visible`, `.is-active`, `.modal-open`, and `.order-dock` presentation hooks for Task 3.

- [ ] **Step 1: Replace tokens and global rules**

Start with:

```css
:root {
  --brand-blue: #0E4693;
  --brand-coral: #FA6E6D;
  --vanilla: #FDFAF3;
  --biscuit: #F5EDD8;
  --ink: #1E2430;
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "DM Sans", Arial, sans-serif;
  --gutter: clamp(1rem, 4vw, 4.5rem);
  --content-width: 90rem;
  --radius: .75rem;
}
```

Add box sizing, smooth anchor scroll, readable fallbacks, an `.sr-only` utility, and a 3px coral `:focus-visible` ring. Keep the page vanilla with a subtle flat background—no gradients, grain, blobs, emoji decorations, or dark-theme variables.

- [ ] **Step 2: Style the compact header, hero, catalog, cards, footer, dialog, and dock**

Use a light header with a blue wordmark and coral order link. Give the hero a two-column desktop layout with a short copy block and a three-image strip; the catalog begins immediately after it. Style filters as compact outlined buttons with coral active state. Cards use one consistent `4 / 3` media box, a small blue category label, Fraunces title, and one coral/blue `View details` button. The footer is compact and the fixed order dock is hidden on wide screens but visible at narrow widths.

Use only opacity/transform/color transitions and define reveal states explicitly:

```css
.reveal { opacity: 0; transform: translateY(16px); transition: opacity .45s ease, transform .45s ease; }
.reveal.is-visible { opacity: 1; transform: none; }
```

Closed dialog state must not expose controls to keyboard focus; style the open state with a restrained scrim and a contained image.

- [ ] **Step 3: Add responsive and reduced-motion rules**

At `max-width: 900px`, stack the hero and compress catalog gutters. At `max-width: 640px`, make the nav links wrap cleanly, show `.order-dock` as a fixed bottom two-action bar with safe-area padding, switch the gallery to two columns, and make the dialog nearly full width. Add:

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
  .reveal { opacity: 1; transform: none; }
}
```

- [ ] **Step 4: Run CSS source and screenshot checks**

Verify the exact tokens, breakpoints, `.order-dock`, focus ring, reduced-motion override, and absence of old plum/dark-theme/Three.js/rotation/`transition: all` strings. Serve with `python3 -m http.server 4173` and capture fresh 1440/1024/390 screenshots; confirm no overflow and that the catalog starts early.

- [ ] **Step 5: Commit the visual slice**

```bash
git add style.css
git commit -m "Apply clean blue coral catalog styling"
```

### Task 3: Implement catalog rendering and WhatsApp/dialog behavior

**Files:**
- Modify: `script.js`
- Test: syntax/runtime contract plus browser catalog/order smoke

**Interfaces:**
- Consumes the embedded `images`, `cakeCatalog`, and `imageToCakeTitle` data and DOM IDs from Tasks 1–2.
- Produces `renderGallery(category)`, `openPostcard({ trigger, note, src })`, `closePostcard()`, `updateFilterStatus(category, count)`, `getCakeNote(imageName)`, `setActiveFilter(button)`, and dock/link behavior.

- [ ] **Step 1: Write the failing runtime contract check**

```bash
node --check script.js
node <<'NODE'
const source = require('fs').readFileSync('script.js', 'utf8');
for (const name of ['renderGallery', 'openPostcard', 'closePostcard', 'updateFilterStatus', 'getCakeNote', 'setActiveFilter']) {
  if (!source.includes(`function ${name}`) && !source.includes(`const ${name}`)) throw new Error(`missing ${name}`);
}
if (source.includes('THREE.') || source.includes('wireframe-cake') || source.includes('animated-bg') || source.includes('floating-item')) throw new Error('legacy visual runtime remains');
console.log('catalog-first runtime contract passed');
NODE
```

Expected before refactor: FAIL on legacy visual runtime and the missing `setActiveFilter`/new catalog contract.

- [ ] **Step 2: Preserve data and remove superseded runtime**

Leave the three embedded datasets byte-for-byte synchronized with `cakes.json`. Remove system-theme mutation, animated backgrounds, random card rotation, Three.js, and story/process hooks. Keep catalog initialization deterministic and offline-friendly.

- [ ] **Step 3: Render cards and filters**

Create semantic `<article class="gallery-card">` cards with a media box, category, title, and `View details` button. Set `loading="lazy"`, stable dimensions/aspect ratio, one-warning image fallback, and click/Enter/Space activation. Render all seven filter options (All, Birthday, Anniversary, Festive, Specialty, Cake Bowls, Kids), update `gallery-count`/`filter-status`, keep `aria-pressed` and `.is-active` in sync, and provide a `Show all creations` recovery state for zero results.

- [ ] **Step 4: Keep the order dock and implement the dialog contract**

Do not rewrite the exact WhatsApp hrefs in JavaScript; the anchors from Task 1 are the primary order path. For the dialog, transfer focus to the close button on open, set `aria-hidden="false"`, add `body.modal-open`, keep Tab inside while open, close on Escape/backdrop/close button, set `hidden` or `inert` while closed, and restore focus to the triggering card action. Preserve the image alt/title/category/description updates.

- [ ] **Step 5: Add guarded reveal behavior**

Observe `.reveal` elements once, add `.is-visible` when they enter view, and immediately reveal everything when reduced motion is active or `IntersectionObserver` is unavailable. Do not add an animation loop.

- [ ] **Step 6: Run runtime and browser smoke checks**

Run `node --check script.js`, the contract command, a JSON/asset synchronization check, and a browser smoke at 1440px/390px verifying 104 cards, all seven filters (including Kids), counts, missing-image fallback, both WhatsApp links, modal focus/escape/backdrop close/focus restore, and no console errors. Commit:

```bash
git add script.js
git commit -m "Wire catalog filters and WhatsApp order actions"
```

### Task 4: Final responsive, accessibility, and repository verification

**Files:**
- Modify: `index.html`, `style.css`, `script.js` only for defects found by fresh verification
- Test: source gates, browser screenshots/interactions, reduced-motion and no-font checks

**Interfaces:**
- Validates the complete Catalog First page at the exact final commit.

- [ ] **Step 1: Run source/data gates**

```bash
node --check script.js
node -e "const fs=require('fs'); const items=JSON.parse(fs.readFileSync('cakes.json')); if(items.length!==104) throw new Error('catalog count mismatch'); for(const item of items){if(!fs.existsSync('images/'+item.fileName)) throw new Error('missing '+item.fileName)} console.log('catalog assets verified:', items.length)"
git diff --check "$(git merge-base main HEAD)..HEAD"
```

- [ ] **Step 2: Inspect fresh responsive screenshots**

Serve with `python3 -m http.server 4173` and inspect 1440px, 1280px, 1024px, 768px, and 390px. Confirm the catalog is the dominant content, the hero is short, the group CTA is obvious, the mobile dock does not cover cards or modal controls, and there is no horizontal overflow.

- [ ] **Step 3: Run functional/accessibility checks**

Verify keyboard navigation through header, filters, first/last card, modal focus trap/restore, footer links, and mobile order dock. Verify every filter including Kids, all 104 images after full scroll, image fallback, exact group/personal/phone destinations, and an empty console. Confirm no Google Form/old hero asset loads.

- [ ] **Step 4: Run reduced-motion and no-font checks**

Emulate reduced motion and disable Google Fonts; confirm all content is visible/readable, focus rings remain visible, and no interaction depends on animation.

- [ ] **Step 5: Remove generated QA artifacts and commit any polish fixes**

Delete only task-generated artifacts such as `.playwright-mcp/`, `screenshot.png`, and `.DS_Store` after inspection; preserve `.serena/` if it is a user/tooling directory. Rerun the relevant checks after any code fix. Commit any polish fix with a focused message.

- [ ] **Step 6: Commit/push the final redesign and verify remote**

```bash
git add index.html style.css script.js docs/superpowers/specs/2026-08-31-catalog-first-minimal-redesign-design.md docs/superpowers/plans/2026-08-31-catalog-first-minimal-redesign.md
git commit -m "Ship catalog-first minimal bakery redesign"
git push origin aug30
printf 'local='; git rev-parse HEAD
printf 'remote='; git ls-remote origin refs/heads/aug30 | awk '{print $1}'
```

The local and remote SHA must match before reporting completion.
