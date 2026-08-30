# Catalog First Minimal Redesign

**Date:** 2026-08-31
**Status:** Approved direction; awaiting spec review before implementation
**Scope:** Pallav's Kitchen static GitHub Pages site

## Brief

Make the website clean, minimal, and elegant while keeping the brand's blue/coral identity. The page's job is simple: let someone scan Monila Sharma's cakes, cookies, and cake bowls, open a detail, and submit an order request through WhatsApp without hunting through secondary content.

The brand hierarchy stays: **Pallav's Kitchen** is the mark; **Monila Sharma** is the maker. The verified 104-item catalog remains the main content and the only long-running section. The personal WhatsApp number and the supplied WhatsApp group invite are the primary conversion paths.

## What changes from the superseded direction

The Countertop Editorial hero, dark plum palette, story section, process steps, proof strip, animated/3D scene, bake-ticket motif, and embedded Google Form are removed. Their copy and decoration made the page feel busy and pushed the work below the fold. The redesign keeps only the hierarchy that helps a visitor choose and order.

## Direction

### Catalog First

The page opens with a short promise and an immediate row of real cake photography. The catalog begins in the first viewport on desktop and directly after the compact hero on mobile. Blue and coral are used for navigation, type emphasis, filters, and order actions; the surrounding surface stays light and quiet. There is one functional signature element: an **order dock** that keeps the WhatsApp group and personal chat actions available without competing with the catalog.

## Visual system

### Palette

- **Brand Blue** `#0E4693` — headings, navigation, primary order action
- **Brand Coral** `#FA6E6D` — active filters, secondary order action, focus accent
- **Vanilla** `#FDFAF3` — page surface
- **Biscuit** `#F5EDD8` — subtle section tint and card backing
- **Ink** `#1E2430` — body copy and utility text

Do not introduce a dark theme or a new plum/terracotta palette. Use hairline blue/coral rules and small, restrained corner radii. Avoid decorative gradients, emoji clusters, faux paper textures, random card rotation, and ornamental blobs.

### Type

- **Display:** `Fraunces` for the hero line, section heading, and card titles.
- **Body/UI:** `DM Sans` for navigation, descriptions, filters, counts, and order controls.

Use `clamp()` for the hero and section headings, keep body text at readable sizes, and load these fonts from Google Fonts with Georgia/Arial fallbacks. Remove Fredoka and Caveat from the document head; no handwritten or novelty face is needed for this minimal direction.

### Signature: the order dock

The order dock is a compact, high-contrast action group placed in the hero and repeated as a fixed bottom bar only on narrow screens. It contains exactly two actions:

1. **Join the WhatsApp order group** → `https://chat.whatsapp.com/Hf6RhlO98f93zcG5ide3Bo?s=cl&p=a&mlu=4`
2. **Chat with Monila** → `https://wa.me/918796312333`

The phone number `+91 87963 12333` remains visible as a plain `tel:` link in the footer. The group URL is supplied by the owner and must be used exactly; do not create a different invite URL.

## Page architecture

```text
┌─────────────────────────────────────────────────────┐
│ logo                         Gallery   Order on WA  │
├─────────────────────────────────────────────────────┤
│ short hero promise + two order actions | 3 real cakes│
├─────────────────────────────────────────────────────┤
│ catalog heading · result count · filter chips        │
│ 104-card responsive gallery                          │
│                                                     │
├─────────────────────────────────────────────────────┤
│ compact contact footer: phone · group · personal WA  │
└─────────────────────────────────────────────────────┘
             mobile: fixed WhatsApp order dock
```

### Header and hero

Use a slim light header with the logo, one `Gallery` anchor, and one coral `Order on WhatsApp` link. The hero contains the direct line **“Cakes made for your moments.”**, one sentence naming Monila and the made-to-order offering, and the two exact WhatsApp actions. Place three real catalog images in a quiet horizontal/stacked strip; do not use `3d_cozy_bakery_hero.png` or any generated illustration. The catalog heading should be visible without an additional narrative section.

### Catalog

Render all 104 entries from the existing catalog data. Use the existing categories and add a `Kids` chip because the catalog contains one Kids entry; the All view must always include it. The toolbar shows the current count and uses compact buttons with `aria-pressed`. Cards use a consistent image ratio, a small category label, the title, and a single `View details` button. No card gets random rotation or a decorative caption block. The detail modal remains, but is visually quiet and keyboard-accessible.

The initial ordering is the curated order already in `script.js`; do not sort alphabetically or by inferred popularity. Filters update the result count and an `aria-live` status. A no-results state offers one `Show all creations` action.

### Footer

Use a compact footer with the logo, `+91 87963 12333`, the exact group invite, and the personal WhatsApp link. Remove the Google Form iframe and the process/story copy from the page. The footer can repeat the two order actions but should not introduce additional marketing claims.

## Implementation boundaries

- **`index.html`:** replace the current redesign skeleton with the minimal header/hero/catalog/footer/modal structure; update the Google Fonts link to Fraunces + DM Sans; add the exact WhatsApp group and personal links; remove story/process/proof/form/3D markup.
- **`style.css`:** replace the previous editorial stylesheet with the light blue/coral token system, restrained grid/card/modal styles, responsive layout, fixed mobile order dock, focus states, and reduced-motion rules.
- **`script.js`:** preserve the 104-entry embedded data; render the three hero images and catalog cards; keep category filtering/count/status, missing-image fallback, and modal behavior; remove legacy visual effects; add any needed active-filter and dock hooks without inventing copy.
- **`cakes.json`:** no content changes.
- **Assets:** reuse only committed catalog WebPs and `images/logo.png`; do not add generated hero art or new dependencies.

## Data and failure behavior

The catalog remains embedded for offline-friendly loading. A missing image produces a labelled `Image unavailable` block for that card and a single concise console warning; other cards continue rendering. The order links are ordinary anchors, so they remain usable if JavaScript is disabled. External fonts are progressive enhancements with local fallbacks. WhatsApp links open in a new tab with `rel="noopener noreferrer"`; phone uses `tel:+918796312333`.

## Accessibility and performance

- Use a single descending heading hierarchy and semantic `header`, `main`, `section`, `footer`, and `dialog` landmarks.
- Give filters and menu/order controls visible `:focus-visible` rings and at least 44px hit areas.
- Keep modal focus transfer, Escape/backdrop close, focus trapping, and focus restoration intact.
- Use `prefers-reduced-motion: reduce` to disable reveals and image transforms.
- Lazy-load catalog images below the hero, keep intrinsic dimensions/aspect-ratio boxes, and avoid layout shift.
- Keep the fixed mobile order dock clear of safe-area insets and never cover the modal or filter controls.
- Maintain WCAG AA contrast for Brand Blue, Brand Coral, Vanilla, Biscuit, and Ink combinations.

## Verification plan

1. `node --check script.js`, JSON parse, and 104-entry asset existence/synchronization checks.
2. Serve locally and inspect fresh screenshots at 1440px, 1024px, 768px, and 390px; confirm the catalog begins early, no section feels padded with filler, and no horizontal overflow exists.
3. Verify hero group CTA, personal WhatsApp CTA, phone link, footer group link, every filter including Kids, All count, first/last card, image fallback, and modal keyboard behavior.
4. Scroll all 104 cards and confirm images load with an empty browser console.
5. Emulate reduced motion and no-network fonts; confirm content remains visible and readable.

## Decisions and constraints

- The exact WhatsApp group URL above is the only group destination. A personal `wa.me` link is retained as the direct-chat alternative.
- The Google Form is intentionally removed from the primary site flow because the owner asked for WhatsApp to be the order-request focus.
- The previous redesign's documentation remains in git history; this spec supersedes it for the implementation that follows.
