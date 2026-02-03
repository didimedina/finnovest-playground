# Theming System Design

White-label theming system for fintech apps. Generates accessible, cohesive color palettes at SSR time using Tailwind colors as anchors and Radix's semantic structure.

## Config Interface

```ts
type ThemeConfig = {
  accentColor?:
    | "red" | "orange" | "amber" | "yellow" | "lime" | "green"
    | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo"
    | "violet" | "purple" | "fuchsia" | "pink" | "rose";
  neutralColor?: "slate" | "gray" | "zinc" | "neutral" | "stone";
  contrast?: "hard" | "soft";
  headingFont?: "serif" | "sans" | "mono";
  radius?: "none" | "sm" | "md" | "lg";
}
```

## Color System

### Source: Tailwind Colors (OKLCH)

Use Tailwind's color palette as anchor sources. Already defined in OKLCH for perceptually uniform blending.

### Structure: Radix 12-Step Semantics

| Step | Purpose | Use Cases |
|------|---------|-----------|
| 1 | App background | Main bg, canvas |
| 2 | Subtle background | Cards, sidebars, striped tables |
| 3 | Component background | Normal state |
| 4 | Component hover | Hover state |
| 5 | Component pressed | Pressed/selected state |
| 6 | Subtle border | Non-interactive borders |
| 7 | Border | Interactive component borders |
| 8 | Focus ring | Strong borders, focus states |
| 9 | Solid background | Buttons, headers (peak chroma) |
| 10 | Solid hover | Hover on solid backgrounds |
| 11 | Low-contrast text | Secondary text, labels |
| 12 | High-contrast text | Primary text, headings |

### Anchor Selection

**Hard mode** (full range, peak chroma):
```ts
{
  light: tailwind[50],   // ~0.97 lightness
  mid:   tailwind[500],  // peak chroma
  dark:  tailwind[950],  // ~0.28 lightness
}
```

**Soft mode** (compressed range, reduced chroma):
```ts
{
  light: tailwind[50],   // same light
  mid:   tailwind[400],  // lower chroma
  dark:  tailwind[800],  // lighter dark
}
```

### Universal Blend Curve

Derived from averaging Radix orange and violet lightness progressions:

```ts
generatePalette("accent", [
  anchor.light,                    // 1: app bg
  0.03, 0.09, 0.19, 0.28, 0.37,   // 2-6: subtle bg → borders
  0.52, 0.70,                      // 7-8: border → focus ring
  anchor.mid,                      // 9: solid bg (peak chroma)
  0.12, 0.23,                      // 10-11: solid hover → text
  anchor.dark,                     // 12: high-contrast text
]);
```

Blending uses `color-mix(in oklab, ...)` for perceptually uniform interpolation.

## Anchor Definitions

### Accent Colors (Hard/Soft)

Each accent color has hard and soft variants with OKLCH values sampled from Tailwind:

```ts
const accentAnchors = {
  red: {
    hard: {
      light: "oklch(0.971 0.013 17.38)",   // red-50
      mid:   "oklch(0.637 0.237 25.331)",  // red-500
      dark:  "oklch(0.258 0.092 26.042)"   // red-950
    },
    soft: {
      light: "oklch(0.971 0.013 17.38)",   // red-50
      mid:   "oklch(0.704 0.191 22.216)",  // red-400
      dark:  "oklch(0.444 0.177 26.899)"   // red-800
    },
  },
  // ... remaining 16 accent colors
};
```

### Neutral Colors (Hard/Soft)

```ts
const neutralAnchors = {
  slate: {
    hard: {
      light: "oklch(0.984 0.003 247.858)",  // slate-50
      mid:   "oklch(0.554 0.046 257.417)",  // slate-500
      dark:  "oklch(0.208 0.042 265.755)"   // slate-950
    },
    soft: {
      light: "oklch(0.984 0.003 247.858)",  // slate-50
      mid:   "oklch(0.704 0.04 256.788)",   // slate-400
      dark:  "oklch(0.372 0.044 257.287)"   // slate-800
    },
  },
  // ... remaining 4 neutral colors
};
```

## Output

CSS custom properties injected via Astro's `define:vars`:

```css
:root {
  --accent-1: oklch(0.971 0.013 17.38);
  --accent-2: color-mix(in oklab, oklch(0.971 0.013 17.38), oklch(0.637 0.237 25.331) 3%);
  --accent-3: color-mix(in oklab, oklch(0.971 0.013 17.38), oklch(0.637 0.237 25.331) 9%);
  /* ... steps 4-12 */

  --neutral-1: oklch(0.984 0.003 247.858);
  --neutral-2: color-mix(in oklab, ...);
  /* ... steps 3-12 */

  --font-heading: 'Source Serif 4', serif;
  --radius-sm: 4px;
  --radius-md: 8px;
  /* ... */
}
```

## Escape Hatch

When authors need a step that doesn't exist, use `color-mix()` directly:

```css
.custom-element {
  /* Blend between two existing steps */
  background: color-mix(in oklab, var(--accent-3), var(--accent-4) 50%);

  /* Or blend with transparent for alpha */
  border-color: color-mix(in oklab, var(--accent-7), transparent 30%);
}
```

## Implementation

### Files to Create/Modify

1. **`src/utils/tailwindAnchors.ts`** - All accent and neutral anchor definitions
2. **`src/layouts/Config.astro`** - Update to use new config interface and anchors

### generatePalette Function

Existing function at `src/utils/generatePalette.ts` - no changes needed. Already outputs `color-mix(in oklab, ...)` expressions.

## Testing

After implementation:
1. Render sample UI with each accent color (hard mode)
2. Render sample UI with each accent color (soft mode)
3. Verify contrast ratios meet WCAG AA for text steps (11, 12) on background steps (1, 2)
4. Visual check that soft mode feels "calmer" than hard mode
