# Site Specification

## Overview

- Target files: `index.html`, `styles.css`, `script.js`
- Screenshots:
  - `docs/design-references/fravity-desktop-full.png`
  - `docs/design-references/fravity-mobile-full.png`
- Interaction model: scroll-driven header, hover-driven controls, time-driven mockup swap.

## Global Styles

- Background: `rgb(255, 255, 255)`
- Primary blue: `rgb(42, 101, 229)`
- Text: `rgb(17, 17, 17)`
- Muted text: `rgb(118, 118, 118)`
- Borders: `rgba(17, 17, 17, 0.08)`
- Primary font from source: `"Open Sauce One", "Open Sauce One Placeholder", sans-serif`
- Fallback implemented: `"Open Sauce One", Inter, ui-sans-serif, system-ui, sans-serif`

## Typography

- Hero headline source: 60px desktop, weight 600, line-height 72px.
- Section headings source: 48px desktop, weight 600, line-height 60px.
- Feature headings source: 36px desktop, weight 600, line-height 48px.
- Body copy: 14-16px, muted gray, generous line-height.

## Layout

- Desktop content rail: approximately 1280px.
- Header: sticky, three-column layout.
- Hero metrics: four equal cards with hairline dividers.
- Main features: alternating two-column rows with 600px-style mockup images.
- Gradient panels: radial gradients using lilac, pale blue, and pale green/cream tones.

## Assets

- Local assets copied to `public/assets/` from the browser-bundled Fravity page assets.
- Source asset bundle and failures are documented in `docs/research/page-assets-bundle.json`.

## Responsive

- At max-width 900px, sections stack to one column.
- At max-width 520px, spacing and headings reduce for mobile.
