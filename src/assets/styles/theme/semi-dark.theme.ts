import type { CustomThemeDefinition } from "@satoshi-rc-ui";

/**
 * @file semi-dark.theme
 * @description Tema semi oscuro profesional.
 *
 * @author Steveen Cues
 * @version 2.0.0
 */

export const semiDarkTheme: CustomThemeDefinition = {
  name: "semi-dark",
  manifest: {
    id: "semi-dark",
    name: "themes.semiDark.name",
    description: "themes.semiDark.description",
    version: "1.0.0",
    author: "Steveen Cues",
    tags: ["dark", "modern", "blue", "slate"],
    supportedFeatures: ["gradients", "animations", "responsive"],
    isDefault: false,
    isExperimental: true,
  },
  daisyUI: {
    colorScheme: "dark",
    primary: "#60A5FA",
    primaryContent: "#111827",
    secondary: "#818CF8",
    secondaryContent: "#FFFFFF",
    accent: "#22D3EE",
    accentContent: "#111827",
    neutral: "#374151",
    neutralContent: "#F9FAFB",
    base100: "#1F2937",
    base200: "#111827",
    base300: "#0B1220",
    baseContent: "#F9FAFB",
    info: "#38BDF8",
    infoContent: "#082F49",
    success: "#4ADE80",
    successContent: "#052E16",
    warning: "#FBBF24",
    warningContent: "#422006",
    error: "#F87171",
    errorContent: "#450A0A",
  },
};
