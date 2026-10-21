import type {
  AppTheme,
  CustomThemeDefinition,
  ThemeName,
} from "@steveencues/starter-react-ui";

import { darkTheme } from "./dark.theme";
import { lightTheme } from "./light.theme";

/**
 * @description Define los temas nativos habilitados de DaisyUI.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const DAISY_UI_THEMES = [
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
] as const satisfies readonly ThemeName[];

/**
 * @description Define los temas personalizados de la aplicacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CUSTOM_THEMES: readonly CustomThemeDefinition[] = [
  lightTheme,
  darkTheme,
];

/**
 * @description Convierte un nombre nativo de DaisyUI en un tema seleccionable.
 * @author Steveen Cues
 * @version 1.0.0
 */
const createDaisyUITheme = (name: ThemeName): AppTheme => ({
  name,
  manifest: {
    ...lightTheme.manifest,
    id: name,
    name: name.charAt(0).toUpperCase() + name.slice(1),
    description: `Tema nativo de DaisyUI: ${name}.`,
    tags: ["daisyui", "native"],
    isDefault: false,
    isExperimental: false,
  },
});

/**
 * @description Define los temas nativos disponibles de DaisyUI.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const NATIVE_THEMES: readonly AppTheme[] =
  DAISY_UI_THEMES.map(createDaisyUITheme);

/**
 * @description Define todos los temas disponibles para el proveedor.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const appThemes: readonly AppTheme[] = [
  ...CUSTOM_THEMES,
  ...NATIVE_THEMES,
];
