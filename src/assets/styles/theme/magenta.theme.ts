import type { AppTheme } from "@domain";

/**
 * @file magenta.theme
 * @description Tema magenta profesional orientado a una identidad creativa y tecnológica.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */

export const magentaTheme: AppTheme = {
  name: "magenta",
  colors: {
    surface: {
      background: "#120817",
      surface: "#1D1026",
      surfaceElevated: "#2A1636",
      surfaceHover: "#321B40",
      surfaceActive: "#452454",
      surfaceDisabled: "#24132D",
    },

    text: {
      primary: "#FDF4FF",
      secondary: "#F5D0FE",
      muted: "#D8B4FE",
      disabled: "#A78BFA",
      inverse: "#120817",
      link: "#F472B6",
      linkHover: "#F9A8D4",
    },

    brand: {
      primary: "#EC4899",
      primaryHover: "#F472B6",
      primaryActive: "#DB2777",
      primaryContrast: "#FFFFFF",
      secondary: "#A855F7",
      secondaryHover: "#C084FC",
      secondaryActive: "#9333EA",
      secondaryContrast: "#FFFFFF",
      accent: "#F0ABFC",
      accentHover: "#F5D0FE",
      accentContrast: "#3B0764",
    },

    state: {
      success: "#4ADE80",
      successBackground: "#052E16",
      warning: "#FBBF24",
      warningBackground: "#422006",
      error: "#FB7185",
      errorBackground: "#4C0519",
      info: "#C084FC",
      infoBackground: "#2E1065",
    },

    border: {
      default: "#3B1D4A",
      subtle: "#291334",
      strong: "#5B2A70",
      focus: "#EC4899",
      hover: "#7E3F95",
      active: "#EC4899",
      disabled: "#321B40",
    },

    shadow: {
      color: "rgba(236, 72, 153, 0.18)",
      subtle: "0 1px 2px rgba(236, 72, 153, 0.08)",
      small: "0 2px 8px rgba(236, 72, 153, 0.12)",
      medium: "0 8px 24px rgba(236, 72, 153, 0.18)",
      large: "0 20px 50px rgba(168, 85, 247, 0.20)",
      glow: "0 0 35px rgba(236, 72, 153, 0.28)",
    },

    effects: {
      overlay: "rgba(18, 8, 23, 0.78)",
      backdrop: "rgba(29, 16, 38, 0.70)",
      blur: "blur(12px)",
      blurStrong: "blur(24px)",
      glassBackground: "rgba(29, 16, 38, 0.68)",
      glassBorder: "rgba(244, 114, 182, 0.18)",
    },

    typography: {
      heading: {
        primary: "#FDF4FF",
        secondary: "#F5D0FE",
        muted: "#D8B4FE",
      },
      body: {
        primary: "#F5D0FE",
        secondary: "#E9D5FF",
        muted: "#C4B5FD",
      },
      label: {
        primary: "#F0ABFC",
        secondary: "#D8B4FE",
        muted: "#A78BFA",
      },
      button: {
        primary: "#FFFFFF",
        secondary: "#FDF4FF",
      },
    },
  },
};
