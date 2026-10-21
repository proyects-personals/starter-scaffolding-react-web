import type { CustomThemeDefinition } from "@steveencues/starter-react-ui";

/**
 * @description Define un tema oscuro personalizado con DaisyUI.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const darkTheme: CustomThemeDefinition = {
  name: "dark",
  manifest: {
    id: "dark",
    name: "themes.dark.name",
    description: "themes.dark.description",
    version: "1.0.0",
    author: "Steveen Cues",
    tags: ["dark", "modern", "violet"],
    supportedFeatures: ["gradients", "animations", "responsive"],
    isDefault: false,
    isExperimental: false,
  },
  daisyUI: {
    colorScheme: "dark",
    primary: "#A78BFA",
    primaryContent: "#1E1B2E",
    secondary: "#F472B6",
    secondaryContent: "#2A1020",
    accent: "#22D3EE",
    accentContent: "#083344",
    neutral: "#27272A",
    neutralContent: "#E4E4E7",
    base100: "#18181B",
    base200: "#27272A",
    base300: "#3F3F46",
    baseContent: "#F4F4F5",
    info: "#38BDF8",
    infoContent: "#082F49",
    success: "#4ADE80",
    successContent: "#052E16",
    warning: "#FACC15",
    warningContent: "#422006",
    error: "#FB7185",
    errorContent: "#4C0519",
  },
};
