# Finnovest Playground

A collection of throwaway prototypes and experiments for Finnovest.

## Structure

Each prototype lives as a single `.astro` file in `src/pages/`. The filename becomes the URL path.

```
src/pages/
  index.astro        → /
  dashboard.astro    → /dashboard
  onboarding.astro   → /onboarding
```

## Creating a prototype

1. Create a new file in `src/pages/`, e.g. `my-idea.astro`
2. Write all HTML, CSS, and JS inline in that file
3. Run `npm run dev` to preview at `localhost:4321/my-idea`

## Commands

| Command           | Action                              |
| :---------------- | :---------------------------------- |
| `npm install`     | Install dependencies                |
| `npm run dev`     | Start dev server at localhost:4321  |
| `npm run build`   | Build for production                |
| `npm run preview` | Preview production build            |

## Deployment

Configured for Netlify. Push to main and it builds automatically.
