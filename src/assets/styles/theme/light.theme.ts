import type { AppTheme } from "@domain";

/**
 * @file light.theme
 * @description Tema claro profesional.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */

export const lightTheme: AppTheme = {
  name: "light",
  colors: {
    surface: {
      background: "#F8FAFC",
      surface: "#FFFFFF",
      surfaceElevated: "#FFFFFF",
      surfaceHover: "#F1F5F9",
      surfaceActive: "#E2E8F0",
      surfaceDisabled: "#F1F5F9",
    },

    text: {
      primary: "#0F172A",
      secondary: "#334155",
      muted: "#64748B",
      disabled: "#94A3B8",
      inverse: "#FFFFFF",
      link: "#2563EB",
      linkHover: "#1D4ED8",
    },

    brand: {
      primary: "#2563EB",
      primaryHover: "#1D4ED8",
      primaryActive: "#1E40AF",
      primaryContrast: "#FFFFFF",
      secondary: "#4F46E5",
      secondaryHover: "#4338CA",
      secondaryActive: "#3730A3",
      secondaryContrast: "#FFFFFF",
      accent: "#06B6D4",
      accentHover: "#0891B2",
      accentContrast: "#FFFFFF",
    },

    state: {
      success: "#16A34A",
      successBackground: "#DCFCE7",
      warning: "#D97706",
      warningBackground: "#FEF3C7",
      error: "#DC2626",
      errorBackground: "#FEE2E2",
      info: "#0284C7",
      infoBackground: "#E0F2FE",
    },

    border: {
      default: "#E2E8F0",
      subtle: "#F1F5F9",
      strong: "#CBD5E1",
      focus: "#2563EB",
      hover: "#94A3B8",
      active: "#2563EB",
      disabled: "#E2E8F0",
    },

    shadow: {
      color: "rgba(15, 23, 42, 0.12)",
      subtle: "0 1px 2px rgba(15, 23, 42, 0.05)",
      small: "0 2px 8px rgba(15, 23, 42, 0.08)",
      medium: "0 8px 24px rgba(15, 23, 42, 0.12)",
      large: "0 20px 50px rgba(15, 23, 42, 0.16)",
      glow: "0 0 30px rgba(37, 99, 235, 0.20)",
    },

    effects: {
      overlay: "rgba(15, 23, 42, 0.45)",
      backdrop: "rgba(255, 255, 255, 0.70)",
      blur: "blur(12px)",
      blurStrong: "blur(24px)",
      glassBackground: "rgba(255, 255, 255, 0.70)",
      glassBorder: "rgba(255, 255, 255, 0.45)",
    },

    typography: {
      heading: {
        primary: "#0F172A",
        secondary: "#334155",
        muted: "#64748B",
      },
      body: {
        primary: "#1E293B",
        secondary: "#475569",
        muted: "#64748B",
      },
      label: {
        primary: "#334155",
        secondary: "#64748B",
        muted: "#94A3B8",
      },
      button: {
        primary: "#FFFFFF",
        secondary: "#0F172A",
      },
    },
  },
};
