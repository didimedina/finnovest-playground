# Drawr-Flow Prototype Design

## Overview

A two-layer navigation prototype with a draggable curtain that reveals a tool hub underneath.

## Architecture

```
┌─────────────────────────┐
│  Curtain (z-index: 2)   │  ← Home/portfolio (draggable)
│  ┌───────────────────┐  │
│  │ Logo | Port | Ava │  │  ← Top bar (always visible in peek)
│  │ ──────────────────│  │  ← Drag handle
│  │                   │  │
│  │   Skeleton cards  │  │  ← Portfolio content
│  │                   │  │
│  └───────────────────┘  │
├─────────────────────────┤
│  Hub (z-index: 1)       │  ← Hidden underneath
│  ┌───────────────────┐  │
│  │   Tab content     │  │  ← Trades/Holdings/AI/Search
│  │   (skeletons)     │  │
│  │                   │  │
│  │ ■  ▲  ◆  ●       │  │  ← Tab bar (fixed bottom)
│  └───────────────────┘  │
└─────────────────────────┘
```

## States

- **Closed**: Curtain covers full screen (default)
- **Open**: Curtain at peek position (~100px header), hub visible

## Interaction Model

### Drag behavior
- Grab anywhere on curtain (or handle) to drag
- Curtain Y position follows finger with 1:1 tracking
- Minimum position: 0 (fully closed)
- Maximum position: screen height - peek header height (~100px)

### Physics-based release
- Velocity-aware animation using GSAP InertiaPlugin
- Natural deceleration following finger momentum
- Snaps to nearest position (open or closed)

### Snap points
- **Closed**: `y: 0` - curtain fills screen
- **Open**: `y: maxY` - only header + handle visible

### Tap behavior
- Tap on handle: toggle between open/closed states
- Uses same smooth animation

### Edge cases
- Dragging beyond bounds: rubber-band resistance
- While animating: new touch interrupts and takes over

## File Structure

```
src/pages/drawr-flow/
├── index.astro    # Single file (HTML + CSS + JS)
└── readme.md      # Brief summary
```

## HTML Structure

```html
<Config title="Drawr Flow">
  <!-- Hub layer (underneath) -->
  <div class="hub">
    <div class="tab-panel active" data-tab="trades">...</div>
    <div class="tab-panel" data-tab="holdings">...</div>
    <div class="tab-panel" data-tab="ai">...</div>
    <div class="tab-panel" data-tab="search">...</div>
    <div class="tab-bar">...</div>
  </div>

  <!-- Curtain layer (on top, draggable) -->
  <div class="curtain">
    <div class="top-bar">...</div>
    <div class="drag-handle"></div>
    <div class="curtain-content">...</div>
  </div>
</Config>
```

## GSAP Animation Setup

### CDN imports
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/Draggable.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/InertiaPlugin.min.js"></script>
```

### Draggable configuration
```javascript
Draggable.create(".curtain", {
  type: "y",
  bounds: { minY: 0, maxY: maxY },
  inertia: true,
  snap: [0, maxY],
  onDrag: updateHandle,
  onThrowComplete: onSnapComplete
});
```

### Tap toggle
```javascript
handle.addEventListener("click", () => {
  const isOpen = curtain.getBoundingClientRect().top > 50;
  gsap.to(".curtain", {
    y: isOpen ? 0 : maxY,
    duration: 0.4,
    ease: "power2.out"
  });
});
```

## Content (Skeletons)

### Curtain content
- Top bar: firm logo, portfolio selector, user avatar (skeleton shapes)
- Drag handle: small centered bar
- 3-4 skeleton cards representing portfolio items

### Hub tabs
1. **Trades** (square icon): skeleton list of recent trades
2. **Holdings** (triangle icon): skeleton grid of positions
3. **AI** (diamond icon): skeleton chat interface
4. **Search** (circle icon): skeleton search with results

### Skeleton styles
- Subtle pulse animation (opacity 0.3 → 0.6)
- Rounded rectangles using `var(--base-9)` on dark background
- Different layouts per tab to suggest varied content

## CSS Variables (from Config)

- Backgrounds: `var(--base-9)` to `var(--base-12)`
- Text: `var(--base-1)` to `var(--base-4)`
- Borders: `var(--base-7)`, `var(--base-8)`
- Radius: `var(--radius-lg)`, `var(--radius-md)`

## Files to Modify

1. `.claude/skill.md` - Add GSAP CDN as accepted exception
