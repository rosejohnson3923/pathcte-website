# pathcte-website

Marketing site for **pathcte.com** — the career-technical education product in the
**Pathfinity** suite (an Esposure product line).

CTE-first funnel: career exploration → industry certifications (Cert Quest) → PathKeys →
a living Career CV, with Pathfinity positioned as the K-12 foundation (better-together).
Login routes to the unified app at `app.pathfinity.ai/app/login`.

## Stack

- Vite + React + TypeScript + Tailwind (dark theme)
- React Router (BrowserRouter)
- Shares the shell with `pathfinity-website` (BrandMark, MarketingLayout, ScrollToTop,
  brand tokens). The suite is unified on the purple `BrandMark`.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploy

Netlify (SPA). `netlify.toml` handles the SPA redirect. Production branch = `master`.

## Structure

- `src/pages/marketing/` — Homepage (CTE-first), Products, Solutions, Pricing, About, Contact, Privacy
- `src/components/marketing/MarketingLayout.tsx` — header/nav/footer
- `src/components/BrandMark.tsx` — unified suite logo (purple "P")
- `public/Pathcte_*.webp` — product screenshots used on the homepage

Content claims are limited to shipped features (see the Pathfinity product capabilities audit).
