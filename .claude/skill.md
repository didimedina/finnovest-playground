# Prototype Skill

Use this skill when the user asks to prototype, mock up, or quickly explore a UI concept.

## Rules

- Create a single monolithic HTML file with inline CSS and JS
- No external dependencies aside from astro
- Use vanilla HTML, CSS, and JavaScript only
- Each prototype is throwaway — optimize for speed, not maintainability
- Use modern CSS (grid, flexbox, custom properties)
- Google Fonts via CDN is acceptable
- Keep it self-contained: one file, can open directly in browser if astro frontmatter was removed
- Use the feature name as the page title in the `<title>` tag

## Structure

Each feature lives in its own folder under `src/pages/`:

```
src/pages/
  feature-name/
    index.astro    # the prototype
    readme.md      # summary doc
```

The folder name becomes the URL path (e.g. `localhost:4321/feature-name`).

## Documentation

After significant changes to a feature, update its `readme.md` with a short summary:
- What the feature does
- Key interactions or states
- Any assumptions made

Keep it brief — this is for future viewers to quickly understand the prototype.

## Creating a new prototype

1. Create folder `src/pages/feature-name/`
2. Add `index.astro` with all HTML, CSS, and JS inline
3. Add `readme.md` with a brief summary
4. Run `npm run dev` to preview at `localhost:4321/feature-name`

## Example prototype structure

```astro
---
const title = "Feature Name"
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
