import { useMemo, type JSX } from "react";

import {
  resolveTheme,
  useThemeInitializer,
  useThemePersistence,
  useThemeState,
} from "@application";
import {
  ThemeContext,
  type ThemeContextValue,
  type ThemeProviderProps,
} from "@domain";

/**
 * @description Proveedor global del sistema de temas.
 *
 * @param {ThemeProviderProps} props Propiedades del proveedor
 * @returns {JSX.Element} Proveedor del contexto
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const { themeName, setThemeName, setTheme } = useThemeState();

  useThemeInitializer(setThemeName);
  useThemePersistence(themeName);

  const theme = useMemo(() => resolveTheme(themeName), [themeName]);

  const contextValue = useMemo<ThemeContextValue>(
    () => ({
      theme,
      themeName,
      setTheme,
    }),
    [theme, themeName, setTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
