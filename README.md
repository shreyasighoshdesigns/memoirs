# Memoirs: case study

A product design case study by **Shreyasi Ghosh** for **Memoirs**, an AI photo memory assistant for iOS.

It's built with React 18 and Vite 5. This is a static one-page site: there's no backend and no environment variables.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

Node 18 or newer is needed.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repo.
3. Vercel detects **Vite** on its own:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Nothing else needs configuring.

To deploy from the CLI instead, run `npx vercel` in this folder, then `npx vercel --prod`.

## Project structure

```
index.html                  Page shell: title, meta, Google Fonts (Roboto)
public/
  favicon.svg
  images/
    hero-phones.webp        Hero mockup (Home + Splash)
    memoirs-logo.png        Wordmark (shown white on dark sections via CSS)
    avatars/                Persona avatars
    ask/  share/  edge/     Phone screens for the Design and Edge-case rails
src/
  main.jsx                  Entry point
  App.jsx                   Page layout, sticky-nav scroll-spy, header tone, rail buttons
  theme.js                  Brand accent (#4A3FA2) and the tints/glows derived from it
  styles.css                All styles
  data/screens.js           Content for every screen card (title, goal, decisions, image)
  components/ScreenCard.jsx One screen card
  sections/                 One component per page section, in page order:
    Header, Hero, Problem, Benchmark, CoreProblem, Personas, Journey,
    AskFlow, ShareFlow, EdgeCases, Tradeoffs, HowIUsedAI, Footer
```

## Common edits

- **Swap a screen:** put the new image in `public/images/<rail>/` and update its `image` path in `src/data/screens.js`. Screens are 393×852 at 2x (786×1704 JPG works well).
- **Edit a screen's goal or decisions:** change it in `src/data/screens.js`. The "N screens" counts update on their own.
- **Change the brand colour:** edit `ACCENT` in `src/theme.js`.
- **Edit section copy:** change it in the matching file in `src/sections/`.
- **Add a nav chapter:** give the section an `id`, then add it to `SECTIONS` and `CHAPTER_OF` in `App.jsx`, and add a link in `Header.jsx`.
