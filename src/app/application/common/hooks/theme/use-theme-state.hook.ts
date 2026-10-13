import { useCallback, useState } from "react";

import type { ThemeName, ThemeState } from "@domain";

/**
 * @description Gestiona el estado del tema actual.
 *
 * @returns {ThemeState} Estado y acciones del tema
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useThemeState(): ThemeState {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  const setTheme = useCallback((newTheme: ThemeName): void => {
    setThemeName(newTheme);
  }, []);

  return {
    themeName,
    setThemeName,
    setTheme,
  };
}
