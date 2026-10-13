import type { AppTheme } from "@domain";

/**
 * @file semi-dark.theme
 * @description Tema semi oscuro profesional.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */

export const semiDarkTheme: AppTheme = {
  name: "semidark",
  colors: {
    surface: {
      background: "#111827",
      surface: "#1F2937",
      surfaceElevated: "#374151",
      surfaceHover: "#374151",
      surfaceActive: "#4B5563",
      surfaceDisabled: "#1F2937",
    },

    text: {
      primary: "#F9FAFB",
      secondary: "#D1D5DB",
      muted: "#9CA3AF",
      disabled: "#6B7280",
      inverse: "#111827",
      link: "#60A5FA",
      linkHover: "#93C5FD",
    },

    brand: {
      primary: "#60A5FA",
      primaryHover: "#93C5FD",
      primaryActive: "#3B82F6",
      primaryContrast: "#111827",
      secondary: "#818CF8",
      secondaryHover: "#A5B4FC",
      secondaryActive: "#6366F1",
      secondaryContrast: "#FFFFFF",
      accent: "#22D3EE",
      accentHover: "#67E8F9",
      accentContrast: "#111827",
    },

    state: {
      success: "#4ADE80",
      successBackground: "#052E16",
      warning: "#FBBF24",
      warningBackground: "#422006",
      error: "#F87171",
      errorBackground: "#450A0A",
      info: "#38BDF8",
      infoBackground: "#082F49",
    },

    border: {
      default: "#374151",
      subtle: "#1F2937",
      strong: "#4B5563",
      focus: "#60A5FA",
      hover: "#6B7280",
      active: "#60A5FA",
      disabled: "#374151",
    },

    shadow: {
      color: "rgba(0, 0, 0, 0.28)",
      subtle: "0 1px 2px rgba(0, 0, 0, 0.16)",
      small: "0 2px 8px rgba(0, 0, 0, 0.20)",
      medium: "0 8px 24px rgba(0, 0, 0, 0.28)",
      large: "0 20px 50px rgba(0, 0, 0, 0.35)",
      glow: "0 0 30px rgba(96, 165, 250, 0.20)",
    },

    effects: {
      overlay: "rgba(17, 24, 39, 0.72)",
      backdrop: "rgba(31, 41, 55, 0.70)",
      blur: "blur(12px)",
      blurStrong: "blur(24px)",
      glassBackground: "rgba(31, 41, 55, 0.68)",
      glassBorder: "rgba(156, 163, 175, 0.16)",
    },

    typography: {
      heading: {
        primary: "#F9FAFB",
        secondary: "#E5E7EB",
        muted: "#9CA3AF",
      },
      body: {
        primary: "#E5E7EB",
        secondary: "#D1D5DB",
        muted: "#9CA3AF",
      },
      label: {
        primary: "#D1D5DB",
        secondary: "#9CA3AF",
        muted: "#6B7280",
      },
      button: {
        primary: "#111827",
        secondary: "#F9FAFB",
      },
    },
  },
};
