import type { AppTheme } from "@domain";

/**
 * @file dark.theme
 * @description Tema oscuro profesional para interfaces tecnológicas.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */

export const darkTheme: AppTheme = {
  name: "dark",
  colors: {
    surface: {
      background: "#020617",
      surface: "#0F172A",
      surfaceElevated: "#1E293B",
      surfaceHover: "#1E293B",
      surfaceActive: "#334155",
      surfaceDisabled: "#111827",
    },

    text: {
      primary: "#F8FAFC",
      secondary: "#CBD5E1",
      muted: "#94A3B8",
      disabled: "#64748B",
      inverse: "#020617",
      link: "#38BDF8",
      linkHover: "#7DD3FC",
    },

    brand: {
      primary: "#38BDF8",
      primaryHover: "#7DD3FC",
      primaryActive: "#0EA5E9",
      primaryContrast: "#020617",
      secondary: "#818CF8",
      secondaryHover: "#A5B4FC",
      secondaryActive: "#6366F1",
      secondaryContrast: "#FFFFFF",
      accent: "#22D3EE",
      accentHover: "#67E8F9",
      accentContrast: "#020617",
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
      default: "#1E293B",
      subtle: "#0F172A",
      strong: "#334155",
      focus: "#38BDF8",
      hover: "#475569",
      active: "#38BDF8",
      disabled: "#1E293B",
    },

    shadow: {
      color: "rgba(0, 0, 0, 0.35)",
      subtle: "0 1px 2px rgba(0, 0, 0, 0.20)",
      small: "0 2px 8px rgba(0, 0, 0, 0.25)",
      medium: "0 8px 24px rgba(0, 0, 0, 0.35)",
      large: "0 20px 50px rgba(0, 0, 0, 0.45)",
      glow: "0 0 30px rgba(56, 189, 248, 0.20)",
    },

    effects: {
      overlay: "rgba(2, 6, 23, 0.75)",
      backdrop: "rgba(15, 23, 42, 0.70)",
      blur: "blur(12px)",
      blurStrong: "blur(24px)",
      glassBackground: "rgba(15, 23, 42, 0.65)",
      glassBorder: "rgba(148, 163, 184, 0.15)",
    },

    typography: {
      heading: {
        primary: "#F8FAFC",
        secondary: "#E2E8F0",
        muted: "#94A3B8",
      },
      body: {
        primary: "#E2E8F0",
        secondary: "#CBD5E1",
        muted: "#94A3B8",
      },
      label: {
        primary: "#CBD5E1",
        secondary: "#94A3B8",
        muted: "#64748B",
      },
      button: {
        primary: "#020617",
        secondary: "#F8FAFC",
      },
    },
  },
};
