# Phone Layout Design

## Overview

Create a shared Astro layout component that provides an iPhone mockup frame, reducing duplication across prototype pages.

## What the layout provides

- **Outer frame**: 390x844px rounded rectangle with iPhone-like bezel styling and shadow
- **Dynamic Island**: Pill shape at top (purely visual)
- **Screen area**: Full-height container where page content slots in via `<slot />`
- **Base styles**: CSS reset, Inter font loading, dark background outside phone

## What pages control

Each page controls everything inside the screen:
- Headers, navigation
- Scrolling behavior
- Bottom bars/footers
- All styling and scripts

## Usage

```astro
---
import PhoneLayout from '../layouts/PhoneLayout.astro';
---

<PhoneLayout title="Page Title">
  <!-- All page content goes here -->
</PhoneLayout>
```

## Shared CSS variables

The layout provides these variables for pages to use:

```css
:root {
  /* Colors */
  --bg-primary: #000000;
  --bg-surface: #161618;
  --bg-card: #252528;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --text-primary: #ffffff;
  --text-secondary: #8e8e93;
  --text-muted: #636366;

  /* Radii */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-xl: 32px;
}
```

Pages can override or extend these.

## Migration

1. Create `src/layouts/PhoneLayout.astro`
2. Update `recommendation-flow/index.astro` to use the layout
3. Update `purchase-flow/index.astro` to use the layout (adapts from 375x780 to 390x844)

## File structure after migration

```
src/
  layouts/
    PhoneLayout.astro
  pages/
    index.astro
    purchase-flow/
      index.astro
      readme.md
    recommendation-flow/
      index.astro
```
