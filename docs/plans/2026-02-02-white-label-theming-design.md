# White-Label Theming System

## Overview

A theming system for the white-label financial app that allows firms to customize brand color and heading font with minimal configuration overhead.

## Configuration

Clients edit two values at the top of `ThemedPhoneLayout.astro`:

```astro
---
const brandColor = "#5E5CE6";
const headingFont: "source-serif" | "inter" | "geist" = "inter";
---
```

## File Structure

```
src/
  utils/
    generatePalette.ts       # Palette generation utility
  layouts/
    ThemedPhoneLayout.astro  # Config + rendering
  pages/
    white-label-demo/
      index.astro            # Demo page
```

## Palette System

### Two Palettes

- **Base palette**: Neutrals for UI (backgrounds, text, borders)
- **Brand palette**: Accent color used sparingly (~10%) for key elements

Both generated via `generatePalette()` but separately.

### 16-Stop S-Curve

Each palette has 16 stops with 4 explicit hex anchors:

```
Stop:   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
        ├───────────────────────────┼───────────┼───────────────────┤
        │      Light UI (slow)      │ Vibrant   │    Dark (slow)    │
        │                           │  (fast)   │                   │
       [A1]                        [A8]       [A11]               [A15]→black
```

- **1-7**: Slow ramp through light UI colors
- **8-11**: Mid range where color vibrance/saturation shows
- **11-16**: Dark range slowing down

### Input Format

```typescript
generatePalette("brand", [
  "#E8E4FF",                           // A1: lightest tint
  0.12, 0.24, 0.36, 0.50, 0.65, 0.80,  // stops 2-7 (slow ramp)
  "#7B6EF6",                           // A8: entering vibrant zone
  0.40, 0.75,                          // stops 9-10 (faster)
  "#5E5CE6",                           // A11: peak saturation
  0.25, 0.45, 0.65,                    // stops 12-14 (slowing down)
  "#2D2A6E",                           // A15: dark anchor
  0.60,                                // stop 16 (toward black)
]);
```

### Naming Convention

Non-semantic numeric naming:
- `--base-1` through `--base-16`
- `--brand-1` through `--brand-16`
- `--white`, `--black`, `--transparent` (utility values)

## generatePalette.ts

Adapted from fairylight project. Changes:

- Remove React types (`CSSProperties`)
- Remove Panda CSS output format
- Takes name prefix as first argument
- Returns spreadable object for `define:vars`

```typescript
type PaletteInput = (string | number)[];
type Palette = Record<string, string>;

export function generatePalette(name: string, input: PaletteInput): Palette {
  // Returns: { "name-1": "color-mix(...)", "name-2": "...", ... }
}
```

Core logic unchanged: uses CSS `color-mix(in oklab, ...)` with implicit white/black anchors.

## Heading Fonts

Three options loaded via Google Fonts / Vercel CDN:

| Key | Font | Character |
|-----|------|-----------|
| `source-serif` | Source Serif Pro | Traditional, premium |
| `inter` | Inter | Clean, matches body |
| `geist` | Geist | Modern, technical |

Body text always Inter. Heading font exposed as `--font-heading`.

## CSS Variable Output

```astro
<style define:vars={{
  ...basePalette,
  ...brandPalette,
  "white": "#ffffff",
  "black": "#000000",
  "transparent": "transparent",
  "font-heading": headingFontFamily,
}}>
```

## Usage in Pages

```css
h1, h2, h3 {
  font-family: var(--font-heading);
}

.action-button {
  background: var(--brand-10);
}

.card {
  background: var(--base-4);
}
```

## Migration

1. Create `src/utils/generatePalette.ts`
2. Create `src/layouts/ThemedPhoneLayout.astro`
3. Create `src/pages/white-label-demo/index.astro` as demo
