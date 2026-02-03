type PaletteAnchors = {
  light: string;
  mid: string;
  dark: string;
};

type ContrastModes = {
  hard: PaletteAnchors;
  soft: PaletteAnchors;
};

export const accentAnchors: Record<string, ContrastModes> = {
  red: {
    hard: {
      light: "oklch(0.971 0.013 17.38)",
      mid: "oklch(0.637 0.237 25.331)",
      dark: "oklch(0.258 0.092 26.042)",
    },
    soft: {
      light: "oklch(0.971 0.013 17.38)",
      mid: "oklch(0.704 0.191 22.216)",
      dark: "oklch(0.444 0.177 26.899)",
    },
  },
  orange: {
    hard: {
      light: "oklch(0.98 0.016 73.684)",
      mid: "oklch(0.705 0.213 47.604)",
      dark: "oklch(0.266 0.079 36.259)",
    },
    soft: {
      light: "oklch(0.98 0.016 73.684)",
      mid: "oklch(0.75 0.183 55.934)",
      dark: "oklch(0.47 0.157 37.304)",
    },
  },
  amber: {
    hard: {
      light: "oklch(0.987 0.022 95.277)",
      mid: "oklch(0.769 0.188 70.08)",
      dark: "oklch(0.279 0.077 45.635)",
    },
    soft: {
      light: "oklch(0.987 0.022 95.277)",
      mid: "oklch(0.828 0.189 84.429)",
      dark: "oklch(0.473 0.137 46.201)",
    },
  },
  yellow: {
    hard: {
      light: "oklch(0.987 0.026 102.212)",
      mid: "oklch(0.795 0.184 86.047)",
      dark: "oklch(0.286 0.066 53.813)",
    },
    soft: {
      light: "oklch(0.987 0.026 102.212)",
      mid: "oklch(0.852 0.199 91.936)",
      dark: "oklch(0.476 0.114 61.907)",
    },
  },
  lime: {
    hard: {
      light: "oklch(0.986 0.031 120.757)",
      mid: "oklch(0.768 0.233 130.85)",
      dark: "oklch(0.274 0.072 132.109)",
    },
    soft: {
      light: "oklch(0.986 0.031 120.757)",
      mid: "oklch(0.841 0.238 128.85)",
      dark: "oklch(0.453 0.124 130.933)",
    },
  },
  green: {
    hard: {
      light: "oklch(0.982 0.018 155.826)",
      mid: "oklch(0.723 0.219 149.579)",
      dark: "oklch(0.266 0.065 152.934)",
    },
    soft: {
      light: "oklch(0.982 0.018 155.826)",
      mid: "oklch(0.792 0.209 151.711)",
      dark: "oklch(0.448 0.119 151.328)",
    },
  },
  emerald: {
    hard: {
      light: "oklch(0.979 0.021 166.113)",
      mid: "oklch(0.696 0.17 162.48)",
      dark: "oklch(0.262 0.051 172.552)",
    },
    soft: {
      light: "oklch(0.979 0.021 166.113)",
      mid: "oklch(0.765 0.177 163.223)",
      dark: "oklch(0.432 0.095 166.913)",
    },
  },
  teal: {
    hard: {
      light: "oklch(0.984 0.014 180.72)",
      mid: "oklch(0.704 0.14 182.503)",
      dark: "oklch(0.277 0.046 192.524)",
    },
    soft: {
      light: "oklch(0.984 0.014 180.72)",
      mid: "oklch(0.777 0.152 181.912)",
      dark: "oklch(0.437 0.078 188.216)",
    },
  },
  cyan: {
    hard: {
      light: "oklch(0.984 0.019 200.873)",
      mid: "oklch(0.715 0.143 215.221)",
      dark: "oklch(0.302 0.056 229.695)",
    },
    soft: {
      light: "oklch(0.984 0.019 200.873)",
      mid: "oklch(0.789 0.154 211.53)",
      dark: "oklch(0.45 0.085 224.283)",
    },
  },
  sky: {
    hard: {
      light: "oklch(0.977 0.013 236.62)",
      mid: "oklch(0.685 0.169 237.323)",
      dark: "oklch(0.293 0.066 243.157)",
    },
    soft: {
      light: "oklch(0.977 0.013 236.62)",
      mid: "oklch(0.746 0.16 232.661)",
      dark: "oklch(0.443 0.11 240.79)",
    },
  },
  blue: {
    hard: {
      light: "oklch(0.97 0.014 254.604)",
      mid: "oklch(0.623 0.214 259.815)",
      dark: "oklch(0.282 0.091 267.935)",
    },
    soft: {
      light: "oklch(0.97 0.014 254.604)",
      mid: "oklch(0.707 0.165 254.624)",
      dark: "oklch(0.424 0.199 265.638)",
    },
  },
  indigo: {
    hard: {
      light: "oklch(0.962 0.018 272.314)",
      mid: "oklch(0.585 0.233 277.117)",
      dark: "oklch(0.257 0.09 281.288)",
    },
    soft: {
      light: "oklch(0.962 0.018 272.314)",
      mid: "oklch(0.673 0.182 276.935)",
      dark: "oklch(0.398 0.195 277.366)",
    },
  },
  violet: {
    hard: {
      light: "oklch(0.969 0.016 293.756)",
      mid: "oklch(0.606 0.25 292.717)",
      dark: "oklch(0.283 0.141 291.089)",
    },
    soft: {
      light: "oklch(0.969 0.016 293.756)",
      mid: "oklch(0.702 0.183 293.541)",
      dark: "oklch(0.432 0.232 292.759)",
    },
  },
  purple: {
    hard: {
      light: "oklch(0.977 0.014 308.299)",
      mid: "oklch(0.627 0.265 303.9)",
      dark: "oklch(0.291 0.149 302.717)",
    },
    soft: {
      light: "oklch(0.977 0.014 308.299)",
      mid: "oklch(0.714 0.203 305.504)",
      dark: "oklch(0.438 0.218 303.724)",
    },
  },
  fuchsia: {
    hard: {
      light: "oklch(0.977 0.017 320.058)",
      mid: "oklch(0.667 0.295 322.15)",
      dark: "oklch(0.293 0.136 325.661)",
    },
    soft: {
      light: "oklch(0.977 0.017 320.058)",
      mid: "oklch(0.74 0.238 322.16)",
      dark: "oklch(0.452 0.211 324.591)",
    },
  },
  pink: {
    hard: {
      light: "oklch(0.971 0.014 343.198)",
      mid: "oklch(0.656 0.241 354.308)",
      dark: "oklch(0.284 0.109 3.907)",
    },
    soft: {
      light: "oklch(0.971 0.014 343.198)",
      mid: "oklch(0.718 0.202 349.761)",
      dark: "oklch(0.459 0.187 3.815)",
    },
  },
  rose: {
    hard: {
      light: "oklch(0.969 0.015 12.422)",
      mid: "oklch(0.645 0.246 16.439)",
      dark: "oklch(0.271 0.105 12.094)",
    },
    soft: {
      light: "oklch(0.969 0.015 12.422)",
      mid: "oklch(0.712 0.194 13.428)",
      dark: "oklch(0.455 0.188 13.697)",
    },
  },
};

export const baseAnchors: Record<string, ContrastModes> = {
  slate: {
    hard: {
      light: "oklch(0.984 0.003 247.858)",
      mid: "oklch(0.554 0.046 257.417)",
      dark: "oklch(0.129 0.042 264.695)",
    },
    soft: {
      light: "oklch(0.984 0.003 247.858)",
      mid: "oklch(0.704 0.04 256.788)",
      dark: "oklch(0.279 0.041 260.031)",
    },
  },
  gray: {
    hard: {
      light: "oklch(0.985 0.002 247.839)",
      mid: "oklch(0.551 0.027 264.364)",
      dark: "oklch(0.13 0.028 261.692)",
    },
    soft: {
      light: "oklch(0.985 0.002 247.839)",
      mid: "oklch(0.707 0.022 261.325)",
      dark: "oklch(0.278 0.033 256.848)",
    },
  },
  zinc: {
    hard: {
      light: "oklch(0.985 0 0)",
      mid: "oklch(0.552 0.016 285.938)",
      dark: "oklch(0.141 0.005 285.823)",
    },
    soft: {
      light: "oklch(0.985 0 0)",
      mid: "oklch(0.705 0.015 286.067)",
      dark: "oklch(0.274 0.006 286.033)",
    },
  },
  neutral: {
    hard: {
      light: "oklch(0.985 0 0)",
      mid: "oklch(0.556 0 0)",
      dark: "oklch(0.145 0 0)",
    },
    soft: {
      light: "oklch(0.985 0 0)",
      mid: "oklch(0.708 0 0)",
      dark: "oklch(0.269 0 0)",
    },
  },
  stone: {
    hard: {
      light: "oklch(0.985 0.001 106.423)",
      mid: "oklch(0.553 0.013 58.071)",
      dark: "oklch(0.147 0.004 49.25)",
    },
    soft: {
      light: "oklch(0.985 0.001 106.423)",
      mid: "oklch(0.709 0.01 56.259)",
      dark: "oklch(0.268 0.007 34.298)",
    },
  },
};

export type AccentColor = keyof typeof accentAnchors;
export type BaseColor = keyof typeof baseAnchors;
export type Contrast = "hard" | "soft";
