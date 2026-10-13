import type { ThemeName } from "@domain";

/**
 * @description Estado y acciones disponibles para gestionar el tema.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeState {
  themeName: ThemeName;
  setThemeName: (theme: ThemeName) => void;
  setTheme: (theme: ThemeName) => void;
}
