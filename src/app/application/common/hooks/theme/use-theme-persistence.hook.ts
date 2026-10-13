import { useEffect } from "react";

import { storeTheme } from "@application";
import { type ThemeName } from "@domain";

/**
 * @description Persiste el tema seleccionado.
 *
 * @param {ThemeName} themeName Tema actual
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useThemePersistence(themeName: ThemeName): void {
  useEffect(() => {
    void storeTheme(themeName);
  }, [themeName]);
}
