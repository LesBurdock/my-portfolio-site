# CLAUDE_PROGRESS.md

This file tracks build progress for the portfolio site.

## Completed

### Project Setup
- Next.js 16, React 19, TypeScript, Tailwind CSS v4
- Fonts swapped from Geist to Playfair Display (headings) and Inter (everything else), loaded via `next/font/google`
- Full design token color palette defined in `app/globals.css`
- Working on branch `claude_project_test`

### Components Built
- **`app/components/Container.tsx`** — shared layout wrapper, `max-w-[1440px]` with responsive gutters (`px-10` mobile, `px-20` desktop), used by all sections
- **`app/components/Hero.tsx`** — greige background (`#F5F5F0`), terracotta grid pattern overlay, blurred ellipse bleeding into next section, white city skyline SVG (`md:w-[75%]`, very faded + smaller on mobile), mixed italic/upright Playfair heading (scales `text-4xl` → `md:text-6xl`), Inter subtitle, terracotta pill CTA button
- **`app/components/Neighbourhoods.tsx`** — white background, mixed italic/upright Playfair heading, right-aligned terracotta pull quote, three cards centred as a group on desktop (`md:w-[320px]`, height by content); on mobile cards stack full-width, `max-w-[400px]`, `aspect-[2/1]`, centred
- **`app/components/Landmarks.tsx`** — alternating greige/white row backgrounds, mixed italic Playfair section heading, 3 project rows (screenshot left, text right on desktop; stacked column on mobile), rounded screenshot thumbnails, Playfair project titles, Inter description + tech stack in secondary gray, terracotta "View Project →" link

---

## Still To Do

### Sections
- [x] **Landmarks** — alternating row backgrounds (`#F5F5F0` / white), 3 project rows each with screenshot thumbnail (left) and title, description, tech stack (right); `id="work"` for Hero CTA scroll; project URLs are `#` placeholders
- [ ] **Technical Toolkit** — centered vertical timeline, outlined terracotta circles (01/02/03), thin terracotta connecting lines with downward arrows, uppercase category labels, comma-separated skills in terracotta
- [ ] **Contact / Footer** — full-bleed terracotta background (`#D88C5A`), two-column layout (heading + body + portrait photo left, contact form right), bottom-border-only form fields, "SEND MESSAGE" text button with diagonal arrow

### Functionality
- [ ] **Contact form** — form submission handling (provider TBD)

### Assets
- [ ] Portrait photo needed for the footer left column

### Polish
- [ ] Page metadata — title and description still set to "Create Next App" in `app/layout.tsx`
- [x] Mobile / responsive layout — Hero, Neighbourhoods, Landmarks all responsive at `md` breakpoint (768px). Container gutters responsive. Cards stack on mobile.
