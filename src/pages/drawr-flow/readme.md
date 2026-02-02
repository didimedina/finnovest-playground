# Drawr Flow

Two-layer navigation prototype with a draggable curtain that reveals a tool hub underneath.

## Interaction

- **Drag**: Pull the curtain up/down from anywhere on the surface
- **Tap handle**: Toggle between open/closed states
- **Physics**: Velocity-based animation with natural deceleration

## States

- **Closed**: Curtain covers full screen (home/portfolio view)
- **Open**: Curtain at peek position showing header, hub tools visible

## Structure

- **Curtain**: Portfolio overview with skeleton content
- **Hub**: 4 tabs (trades, holdings, AI, search) with skeleton content
- **Tab bar**: Fixed at bottom, switches between hub sections

## Tech

Uses GSAP (Draggable + InertiaPlugin) via CDN for physics-based drag animations.
