# Fravity Clone Page Topology

Target URL: https://www.fravity.ai/

## Sections

1. Announcement banner
   - Full-width blue bar, centered text, static link.
2. Sticky header
   - Logo left, nav center, CTA right. Header compresses and gains shadow on scroll.
3. Hero
   - Centered headline, short body copy, two CTA actions, four metric cards.
4. Ops use-case grid
   - Alternating text and product mockup images, large vertical spacing.
5. Agentic workflow panel
   - Soft radial gradient block with workflow copy and card-like process pills.
6. Operations
   - Centered heading followed by two rows: copilot and studio.
7. Process
   - Large pastel radial band with process cards low in the section.
8. Results
   - Three cards: blue quote, metric card, white quote.
9. CTA
   - Pastel radial band with centered action buttons.
10. Footer
   - Logo and grouped links.

## Interaction Model

- Header: scroll-driven, adds compact/shadow state after roughly 40px scroll.
- Cards/buttons: hover lift.
- Operations rows: hover-driven active item treatment.
- Copilot visual: time-driven crossfade between layered mockups.
- No modal, form submission, or backend behavior was implemented.

## Responsive Behavior

- Desktop: 1280px content rail, two-column feature and operations rows.
- Tablet: nav hides, main content stacks, metrics become one column.
- Mobile: reduced spacing, single-column workflow/process/results/footer.
