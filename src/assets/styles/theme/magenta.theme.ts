import type { CustomThemeDefinition } from "@satoshi-rc-ui";

/**
 * @file magenta.theme
 * @description Tema magenta profesional orientado a una identidad creativa y tecnológica.
 *
 * @author Steveen Cues
 * @version 2.0.0
 */

export const magentaTheme: CustomThemeDefinition = {
  name: "magenta",
  manifest: {
    id: "magenta",
    name: "themes.magenta.name",
    description: "themes.magenta.description",
    version: "1.0.0",
    author: "Steveen Cues",
    tags: ["dark", "creative", "magenta", "violet"],
    supportedFeatures: [
      "gradients",
      "animations",
      "glassmorphism",
      "responsive",
    ],
    isDefault: false,
    isExperimental: true,
  },
  daisyUI: {
    colorScheme: "dark",
    primary: "#EC4899",
    primaryContent: "#FFFFFF",
    secondary: "#A855F7",
    secondaryContent: "#FFFFFF",
    accent: "#F0ABFC",
    accentContent: "#3B0764",
    neutral: "#3B1D4A",
    neutralContent: "#FDF4FF",
    base100: "#1D1026",
    base200: "#120817",
    base300: "#2A1636",
    baseContent: "#FDF4FF",
    info: "#C084FC",
    infoContent: "#2E1065",
    success: "#4ADE80",
    successContent: "#052E16",
    warning: "#FBBF24",
    warningContent: "#422006",
    error: "#FB7185",
    errorContent: "#4C0519",
  },
};
