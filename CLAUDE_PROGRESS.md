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
- **`app/components/Toolkit.tsx`** — white background, mixed italic Playfair heading, centered vertical timeline with 3 items (FRONT END / TOOLS / BACKEND), outlined terracotta circles with Playfair numbers, uppercase Inter labels, comma-separated skills in terracotta, `Connector` sub-component (120px vertical line + chevron arrow) between items
- **`app/components/Contact.tsx`** — `<footer>` with full-bleed terracotta bg, two-column grid (left: Playfair heading + Inter body + portrait photo; right: Name/Email/Message form fields + SEND MESSAGE button), all white text, bottom-border-only inputs; Client Component using `useActionState` for pending/success/error states, wired to `sendMessage` Server Action

---

## Still To Do

### Sections
- [x] **Landmarks** — alternating row backgrounds (`#F5F5F0` / white), 3 project rows each with screenshot thumbnail (left) and title, description, tech stack (right); `id="work"` for Hero CTA scroll; project URLs are `#` placeholders
- [x] **Technical Toolkit** — centered vertical timeline, outlined terracotta circles (01/02/03), thin terracotta connecting lines with downward chevron arrows, uppercase category labels (FRONT END / TOOLS / BACKEND), comma-separated skills in terracotta; `Connector` sub-component for line+arrow between items
- [x] **Contact / Footer** — full-bleed terracotta background (`#D88C5A`), two-column grid layout (heading + body + portrait photo left, contact form right), bottom-border-only form fields (white/60 border, transparent bg, white placeholder text), "SEND MESSAGE" uppercase button with diagonal SVG arrow and bottom border underline; portrait photo placeholder at `/images/portrait.jpg`

### Functionality
- [x] **Contact form** — Server Action at `app/actions/sendMessage.ts` using Resend; sandbox mode (sends to `RESEND_TO_EMAIL` via `onboarding@resend.dev`); `RESEND_API_KEY` + `RESEND_TO_EMAIL` in `.env.local`; upgrade to custom domain sender when domain is verified in Resend

### Assets
- [x] Portrait photo — `/public/images/portrait.jpg` added

### Polish
- [ ] Page metadata — title and description still set to "Create Next App" in `app/layout.tsx`
- [x] Mobile / responsive layout — Hero, Neighbourhoods, Landmarks all responsive at `md` breakpoint (768px). Container gutters responsive. Cards stack on mobile.
