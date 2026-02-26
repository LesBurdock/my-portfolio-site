# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured yet.

## Architecture

This is a **Next.js 16 App Router** portfolio site using **React 19** and **TypeScript** (strict mode).

- `app/` — App Router directory. `layout.tsx` is the root layout; `page.tsx` is the home route.
- `app/globals.css` — Global styles. Uses **Tailwind CSS v4** (`@import "tailwindcss"` syntax, not v3's `@tailwind` directives). Theme colors (`--background`, `--foreground`) are defined here as CSS custom properties with a `prefers-color-scheme: dark` override.
- `public/` — Static assets served at the root path.

**Path alias:** `@/*` resolves to the repo root (e.g. `@/app/...`, `@/components/...`).

**Layout components:** `app/components/Container.tsx` is a shared wrapper that enforces consistent gutters across all sections — `max-w-[1440px]` with `px-20` (80px) horizontal padding. Every section wraps its content in `<Container>`. Section backgrounds bleed full-width; only the content inside is constrained.

**Fonts:** Playfair Display (`--font-playfair`) and Inter (`--font-inter`) are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables. Use `var(--font-playfair)` for headings and `var(--font-inter)` for everything else.

**Styling:** Tailwind v4 is configured via PostCSS (`postcss.config.mjs`). Theme extensions go in `globals.css` under `@theme inline { ... }`. Prettier is available for formatting.

## Design Tokens

### Colors

| Token | Hex | Usage |
|---|---|---|
| `color-terracotta` | `#D88C5A` | Hero grid lines, hero CTA button, pull quote text, timeline circles/arrows/lines, skills text, footer background |
| `color-background` | `#F5F5F0` | Hero background, alternating project row backgrounds |
| `color-white` | `#FFFFFF` | Pure white section backgrounds (Neighbourhoods, Toolkit), footer text, form inputs/placeholders |
| `color-ellipse` | `#D0CECE` | Hero ellipse/blur overlay |
| `color-text-primary` | `#000000` | All headings, card titles, section titles |
| `color-text-secondary` | `#9D9D9D` | Body/paragraph text, project descriptions, tech stack text |
| `color-text-muted` | `#D9D9D9` | Card body text |

### Typography

| Token | Value | Usage |
|---|---|---|
| `font-heading` | Playfair Display | All headings — upright and italic variants |
| `font-body` | Inter | Paragraphs, subheadings, labels, form fields, buttons, everything else |

- Italic within headings is always Playfair Display italic — applied to select words only, not full headings
- Uppercase tracked labels (e.g. `FRONT END`, `SEND MESSAGE`) use Inter
