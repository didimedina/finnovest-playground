type PaletteInput = (string | number)[];
type Palette = Record<string, string>;

/**
 * Generates a color palette using CSS color-mix().
 *
 * @param name - Prefix for the output keys (e.g., "brand" → "brand-1", "brand-2", ...)
 * @param input - Array of colors (anchors) and numbers (blend percentages 0-1)
 *
 * Colors can be any CSS color format: hex, rgb(), hsl(), oklch(), named colors, etc.
 * Numbers represent blend percentages toward the next anchor.
 *
 * If the input starts with a number, "white" is used as the implicit first anchor.
 * If the input ends with a number, "black" is used as the implicit last anchor.
 *
 * @example
 * // Basic usage with 4 anchors (16-stop S-curve)
 * generatePalette("brand", [
 *   "#E8E4FF",                           // A1: lightest
 *   0.12, 0.24, 0.36, 0.50, 0.65, 0.80,  // stops 2-7
 *   "#7B6EF6",                           // A8: vibrant zone start
 *   0.40, 0.75,                          // stops 9-10
 *   "#5E5CE6",                           // A11: peak saturation
 *   0.25, 0.45, 0.65,                    // stops 12-14
 *   "#2D2A6E",                           // A15: dark anchor
 *   0.60,                                // stop 16 (toward black)
 * ])
 */
export function generatePalette(name: string, input: PaletteInput): Palette {
  // Normalize input: add implicit white/black anchors if needed
  const normalized = [...input];

  if (typeof normalized[0] === "number") {
    normalized.unshift("white");
  }

  if (typeof normalized[normalized.length - 1] === "number") {
    normalized.push("black");
  }

  const result: Palette = {};
  let stopIndex = 1;
  let currentAnchor: string | null = null;

  // Find next anchor after current position
  const findNextAnchor = (startIdx: number): string | null => {
    for (let i = startIdx; i < normalized.length; i++) {
      if (typeof normalized[i] === "string") {
        return normalized[i] as string;
      }
    }
    return null;
  };

  for (let i = 0; i < normalized.length; i++) {
    const item = normalized[i];

    if (typeof item === "string") {
      // Anchor color - output directly
      currentAnchor = item;
      result[`${name}-${stopIndex}`] = item;
      stopIndex++;
    } else if (typeof item === "number") {
      // Percentage - blend current anchor toward next anchor
      const nextAnchor = findNextAnchor(i);
      if (currentAnchor && nextAnchor) {
        const percent = Math.round(item * 100);
        result[`${name}-${stopIndex}`] = `color-mix(in oklab, ${currentAnchor}, ${nextAnchor} ${percent}%)`;
        stopIndex++;
      }
    }
  }

  return result;
}
