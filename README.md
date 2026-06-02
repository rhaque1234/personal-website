# Personal website — Raiyan Haque

Single-page personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy

Targeted at [Vercel](https://vercel.com).

1. Push this repo to GitHub.
2. Import it in Vercel — framework auto-detects as Next.js.
3. Accept defaults and deploy. No environment variables required.

To deploy from the CLI instead:

```bash
npx vercel
```

## Notes

- Dark theme is the default. The toggle in the top-right persists the visitor's choice in `localStorage`. An inline script in `<head>` applies the stored preference before paint to avoid a flash of wrong theme.
- Theme tokens live as CSS custom properties in [`app/globals.css`](app/globals.css) and are switched via a `data-theme` attribute on `<html>`.
- All content (mission line, About, Experience, Projects, Contact) lives in [`app/page.tsx`](app/page.tsx).
