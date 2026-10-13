import { createContext } from "react";

import { darkTheme, lightTheme, magentaTheme, semiDarkTheme } from "@assets";

import type { AppTheme, ThemeContextValue, ThemeName } from "@domain";

/**
 * @file theme.constant
 * @description Constantes relacionadas con la gestión de temas en la aplicación.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * @description Clave utilizada para almacenar la configuración del tema.
 */
export const STORAGE_KEY = "app_theme";

/**
 * @description Nombres de los temas disponibles en la aplicación.
 */
export const THEME_NAMES: ThemeName[] = [
  "light",
  "dark",
  "magenta",
  "semidark",
];

/**
 * @description Mapa de temas disponibles en la aplicación.
 */
export const THEMES: Record<ThemeName, AppTheme> = {
  light: lightTheme,
  dark: darkTheme,
  magenta: magentaTheme,
  semidark: semiDarkTheme,
};

/**
 * @description Opciones de temas disponibles en la aplicación.
 */
export const THEME_OPTIONS = [
  {
    value: "light",
    label: "Light",
    icon: "☀️",
  },
  {
    value: "dark",
    label: "Dark",
    icon: "🌙",
  },
  {
    value: "magenta",
    label: "Magenta",
    icon: "💗",
  },
  {
    value: "semidark",
    label: "Semi Dark",
    icon: "◐",
  },
] satisfies ReadonlyArray<{
  value: ThemeName;
  label: string;
  icon: string;
}>;
