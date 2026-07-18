# Fravity Behavior Notes

## Observed

- Sticky navigation remains visible during scroll.
- Primary CTA color is `rgb(42, 101, 229)`.
- Major content blocks animate visually through spacing and layered mockup images rather than heavy app-like interactions.
- The original page uses large static Framer sections, soft radial gradient bands, image mockups, and link/button hover affordances.

## Implemented

- Sticky header with scroll threshold at 40px.
- Button hover lift.
- Accordion-like hover state for operations options.
- Time-based visual swap for the first operations mockup.
- Native smooth scrolling for anchor links.

## Known Differences

- This version adapts the content to VeloAI AI consulting rather than copying Fravity's exact business copy.
- Font files from Framer failed to bundle, so the site uses the closest system/Inter-style fallback stack.
- Some lower-page Fravity images failed to export; locally available mockup assets are reused where useful.
