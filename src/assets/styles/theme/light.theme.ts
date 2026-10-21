import type { CustomThemeDefinition } from "@steveencues/starter-react-ui";

/**
 * @description Define un tema claro personalizado con DaisyUI.
 * @author Steveen Cues
 * @version 2.1.0
 */
export const lightTheme: CustomThemeDefinition = {
  name: "light",
  manifest: {
    id: "light",
    name: "themes.light.name",
    description: "themes.light.description",
    version: "2.0.0",
    author: "Steveen Cues",
    tags: ["light", "modern", "accessible"],
    supportedFeatures: [
      "gradients",
      "animations",
      "glassmorphism",
      "responsive",
    ],
    isDefault: true,
    isExperimental: false,
  },
  daisyUI: {
    colorScheme: "light",
    primary: "#7C3AED",
    primaryContent: "#FFFFFF",
    secondary: "#DB2777",
    secondaryContent: "#FFFFFF",
    accent: "#0891B2",
    accentContent: "#FFFFFF",
    neutral: "#E5E7EB",
    neutralContent: "#1F2937",
    base100: "#FFFFFF",
    base200: "#F9FAFB",
    base300: "#E5E7EB",
    baseContent: "#1F2937",
    info: "#0284C7",
    infoContent: "#FFFFFF",
    success: "#15803D",
    successContent: "#FFFFFF",
    warning: "#D97706",
    warningContent: "#FFFFFF",
    error: "#DC2626",
    errorContent: "#FFFFFF",
  },
};
