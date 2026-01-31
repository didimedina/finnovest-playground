# Prototype Skill

Use this skill when the user asks to prototype, mock up, or quickly explore a UI concept.

## Rules

- Create a single monolithic HTML file with inline CSS and JS
- No external dependencies aside from astro
- Use vanilla HTML, CSS, and JavaScript only
- Each prototype is throwaway — optimize for speed, not maintainability
- Use modern CSS (grid, flexbox, custom properties)
- Google Fonts via CDN is acceptable
- Keep it self-contained: one file, can open directly in browser if astro frontmatter was removed.

## Stack

- Astro (vanilla, no frameworks)
- Plain HTML/CSS/JS only
- Deployable to Netlify

## Structure

Each prototype is a single monolithic `.astro` file in `src/pages/`.
The filename becomes the URL path.

## Creating a new prototype

1. Create `src/pages/prototype-name.astro`
2. Write all HTML, CSS, and JS inline in that single file
3. Run `npm run dev` to preview at `localhost:4321/prototype-name`

## Example prototype structure

```astro
---
// Any server-side logic here (optional)
const title = "My Prototype"
---

<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>{title}</title>
</head>
<body>
  <main>
    <!-- Your prototype HTML -->
  </main>

  <style>
    /* All CSS inline */
  </style>

  <script>
    // All JS inline
  </script>
</body>
</html>
```

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Testing

Playwriter MCP is installed for browser automation testing.
