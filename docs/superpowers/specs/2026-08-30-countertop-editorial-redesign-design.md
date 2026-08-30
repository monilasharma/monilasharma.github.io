# Countertop Editorial Redesign

**Date:** 2026-08-30
**Status:** Approved direction; awaiting spec review before implementation
**Scope:** Pallav's Kitchen static GitHub Pages site

## Brief

Turn the existing bakery gallery into an editorial, story-led storefront that makes a visitor feel the warmth of Monila Sharma's home kitchen and gives them a clear path to order. The site should feel authored and premium—Awwwards-level art direction without sacrificing the approachable, homemade character that makes the business special.

The brand hierarchy stays: **Pallav's Kitchen** is the mark; **Monila Sharma** is the maker and the story. The verified 104-item catalog remains the source of gallery content. The Google Form, phone number, and WhatsApp contact path remain in scope.

## Direction

### Countertop Editorial

The page reads like a beautifully photographed recipe journal laid across a kitchen counter. A dark opening frame creates a strong first impression; warm paper sections then reveal the work, process, and invitation to order. Real cake photography is the proof. Generated kitchen artwork is used only as atmosphere, not as a substitute for the maker's work.

This direction is intentionally distinct from a generic pastel bakery template: the contrast comes from a plum/ink hero, asymmetrical editorial composition, narrow utility labels, and a tactile paper-and-ink system. Motion is concentrated in the page entrance, image hover, and section reveals so the page feels considered rather than busy.

## Visual system

### Palette

- **Kitchen Ink** `#24171B` — hero, footer, and high-contrast type
- **Butter Paper** `#F4EAD6` — primary page surface
- **Cherry Glaze** `#C84C3B` — order actions, active states, and small emphasis
- **Pistachio Frost** `#B6C7A6` — process accents and soft panels
- **Blueberry Slate** `#314C71` — secondary ink and links
- **Apricot Crust** `#D89A63` — stamps, rules, and warm metadata

The dark hero and footer are solid fields, not gradients. Paper sections use a restrained grain/noise treatment created with CSS so no additional image asset is required.

### Type

- **Display:** `Bodoni Moda`, used for the large thesis and section titles. Its high contrast gives the page an editorial voice.
- **Body:** `DM Sans`, used for readable copy, navigation, controls, and form framing.
- **Kitchen notes:** `Caveat`, reserved for short maker notes and the signature “baked by Monila” annotation.
- **Utility:** uppercase `DM Sans` with tracking for category labels, counts, and eyebrow copy.

The type scale is fluid with `clamp()`. No text is placed over an image without a solid or translucent backing that maintains contrast.

### Signature element

The signature is a **bake ticket**: a small, perforated order slip that travels through the page. In the hero it carries the maker line and the primary order action; in the process section it becomes the visual bridge between “tell us the occasion” and “Monila bakes it.” It is a single repeated motif, not a collection of unrelated decorations.

## Page architecture

```text
┌─────────────────────────────────────────────────────────────┐
│ slim nav: mark · gallery · story · order · persistent CTA    │
├─────────────────────────────────────────────────────────────┤
│ dark hero: thesis + bake ticket        kitchen/cake collage  │
│              ↓ “scroll the counter”                        │
├─────────────────────────────────────────────────────────────┤
│ proof strip: 104 creations · made to order · home kitchen   │
├─────────────────────────────────────────────────────────────┤
│ featured table: 3–4 art-directed cards + “see all work”     │
├─────────────────────────────────────────────────────────────┤
│ maker story: Monila's kitchen image + short origin copy     │
├─────────────────────────────────────────────────────────────┤
│ full gallery: category chips, count, responsive masonry     │
├─────────────────────────────────────────────────────────────┤
│ bake ticket process: choose · share · collect               │
├─────────────────────────────────────────────────────────────┤
│ dark order footer: phone · WhatsApp · Google form           │
└─────────────────────────────────────────────────────────────┘
```

### Navigation

Replace the floating pill nav with a compact, high-contrast bar that starts transparent over the hero and becomes paper-backed after scrolling. The desktop nav has links for Gallery, Her Story, and Order plus a compact “Start an order” CTA. On mobile, links collapse into an accessible menu button; opening the menu locks scroll and exposes a labelled close action.

### Hero

Use a two-column editorial composition on desktop and a stacked composition on mobile. The thesis is direct: **“From her kitchen to your celebration.”** Supporting copy names Monila and the made-to-order promise. The bake ticket contains the order CTA and a small handwritten maker note. The visual side layers the existing `3d_cozy_bakery_hero.png` atmosphere with one or two real catalog images in clipped frames; the real cakes remain the focal proof.

Remove the Three.js wireframe cake and randomized full-screen floating images. The hero should be art-directed with ordinary HTML/CSS and real image assets, which reduces dependency cost, improves determinism, and makes reduced-motion behavior straightforward.

### Proof strip

Use three concise facts that are true of the current offering: `104` catalogued creations, `made to order`, and `home-baked in Pune` only if the existing copy/source confirms the location. If the location is not confirmed, use `made in Monila's kitchen` instead. The number is sourced from the catalog at runtime rather than hard-coded in multiple places.

### Featured table

Select four existing catalog entries across the strongest visual range (celebration cake, anniversary cake, cake bowl, and cookies). Render them from the same catalog data used by the full gallery, with a “View the full table” link that moves focus to the gallery. Cards use varied but deliberate aspect ratios; no random rotation is used.

### Maker story

Tell the home-bakery journey in first person or close third person without inventing dates, awards, or credentials. Use available copy such as “small kitchen, big celebrations” and frame Monila as the person who listens to an occasion, sketches a finish, and bakes it fresh. If no portrait exists, use the kitchen still-life asset and clearly label it as the kitchen atmosphere rather than implying it is a portrait.

### Full gallery

Keep all 104 verified entries and the existing categories. Replace the polaroid treatment with a responsive CSS grid that supports intentional spans for featured items and a consistent card system for the rest. Each card has a visible category label, title, image, and a keyboard-accessible “View details” action. Category chips update the result count and preserve focus. Empty filters show a short recovery message and a “Show all creations” action.

The detail modal remains, but becomes a true accessible dialog: focus moves to the close button when opened, `Escape` and backdrop close it, focus is restored to the triggering card, and the dialog has a visible title, category, description, and image alt text. Body scroll is locked only while the dialog is open.

### Bake ticket process

Show the actual ordering path in three steps: `Choose an idea`, `Share the occasion`, `Collect a fresh bake`. Each step links to the relevant action (gallery or order form) and uses the bake-ticket perforation motif. Avoid claims about delivery, pricing, lead times, or ingredients unless they are already confirmed in the repo.

### Order footer

Keep the phone and WhatsApp links prominent. Frame the existing Google Form as the primary enquiry path with a short expectation-setting line and a new-tab fallback. The footer stays dark for a strong close and repeats the maker signature without duplicating the entire hero copy.

## Implementation boundaries

- **`index.html`:** replace the page skeleton with the sections above, semantic landmarks, nav toggle, featured slots, and accessible dialog markup. Preserve the Google Form URL and contact destinations.
- **`style.css`:** replace the current cottagecore token system with the palette/type/layout system above; add responsive grid rules, focus states, reduced-motion overrides, and the bake-ticket motif.
- **`script.js`:** keep the catalog data and image mapping synchronized; add nav state, featured rendering, category filtering/counts, dialog focus management, scroll-aware nav styling, and guarded reveal motion. Remove Three.js initialization, random floating assets, and any dependency on `wireframe-cake`.
- **`cakes.json`:** no content changes during the redesign.
- **Assets:** reuse the committed optimized WebPs, the existing logo, and the existing kitchen still-life image. Do not add a new image-generation dependency for the redesign.

## Data and failure behavior

The catalog remains the single content model for cards, counts, and featured selections. Rendering must tolerate a missing image by showing a labelled fallback card and logging a concise warning; one bad asset must not prevent the rest of the gallery from rendering. Filter state is URL-independent and resets to “All” on reload. The nav menu and dialog must work with JavaScript disabled as far as normal anchor navigation allows; the catalog itself is progressively enhanced by the existing embedded data.

External Google Fonts and the embedded Google Form are non-blocking enhancements. The page must retain readable local fallbacks if either external resource is unavailable.

## Accessibility and performance

- Use semantic headings in one descending hierarchy, landmark regions, labelled controls, and visible `:focus-visible` rings.
- Ensure text and controls meet WCAG AA contrast against both dark and paper surfaces.
- Respect `prefers-reduced-motion: reduce` by disabling reveal, hover transforms, and any marquee-like movement.
- Keep images lazy-loaded below the fold, use intrinsic dimensions/aspect-ratio to avoid layout shift, and preserve WebP assets at their verified dimensions.
- Avoid Three.js and unbounded animation loops; use CSS transitions and one `IntersectionObserver` for reveals.
- Test keyboard-only navigation, dialog focus/escape behavior, filter announcements, mobile menu behavior, and a no-network-font fallback.

## Verification plan

1. `node --check script.js` and a JSON parse plus catalog/image existence check.
2. Serve the site locally and inspect desktop widths around 1440px, 1280px, 1024px, 768px, and 390px.
3. Fresh browser QA: hero CTA, nav/menu, featured-to-gallery jump, every filter, result counts, first and last gallery card, dialog open/close/focus restore, phone/WhatsApp links, and Google Form fallback link.
4. Scroll the full gallery and confirm every image loads without console errors.
5. Capture fresh screenshots at desktop and mobile widths for visual inspection; do not reuse pre-redesign captures as acceptance evidence.

## Risks and decisions

- The existing page embeds the catalog in `script.js` as well as `cakes.json`; the redesign should preserve that offline-friendly behavior rather than introduce a fetch-only dependency.
- “Pune” is not currently confirmed in the visible source; use the neutral “Monila's kitchen” proof label unless a repo source verifies the location.
- Awwwards-level polish comes from art direction, typography, spacing, and a focused motion system—not from adding a heavy framework or unverified marketing claims.
