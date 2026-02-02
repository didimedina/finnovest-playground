# Prototype Skill

Use this skill when the user asks to prototype, mock up, or quickly explore a UI concept.

## Rules

- Each prototype is a single file with inline CSS and JS
- No external dependencies aside from Astro
- Use vanilla HTML, CSS, and JavaScript only
- Optimize for speed, not maintainability
- Use modern CSS (grid, flexbox, custom properties)
- Google Fonts via CDN is acceptable
- GSAP via CDN is acceptable for animation-heavy prototypes

## Structure

```
src/
  layouts/
    Config.astro       # Shared resources (CSS variables, fonts, phone frame)
  pages/
    feature-name/
      index.astro      # The prototype
      readme.md        # Summary doc
```

The folder name becomes the URL path (e.g. `localhost:4321/feature-name`).

## Config.astro

The `Config` component holds all shared resources so each page stays as vanilla as possible:

- CSS variables (colors, radii, typography)
- Font imports
- Phone frame wrapper (for mobile prototypes)

**Usage:**
```astro
---
import Config from '../../layouts/Config.astro';
---

<Config title="Feature Name">
  <!-- Your vanilla HTML here -->
</Config>

<style>
  /* Use CSS variables from Config */
  .card {
    background: var(--base-10);
    color: var(--base-1);
    border-radius: var(--radius-lg);
  }

  .button {
    background: var(--brand-7);
  }
</style>
```

Pages should use `var(--*)` for colors and radii to stay consistent. Prototype-specific colors (like semantic green/red) can be hardcoded inline.

## Documentation

After significant changes to a feature, update its `readme.md` with:
- What the feature does
- Key interactions or states
- Any assumptions made

Keep it brief.

## Creating a new prototype

1. Create folder `src/pages/feature-name/`
2. Add `index.astro` wrapped in `<Config>`
3. Add `readme.md` with a brief summary
4. Run `npm run dev` to preview at `localhost:4321/feature-name`

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Testing

Playwright MCP is installed for browser automation testing.
