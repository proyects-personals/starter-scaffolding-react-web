import { useEffect } from "react";

import { resolveInitialTheme } from "@application";
import { type ThemeName } from "@domain";

/**
 * @description Inicializa el tema desde el almacenamiento
 * o desde la configuración del sistema.
 *
 * @param {(theme: ThemeName) => void} setThemeName Actualizador del tema
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useThemeInitializer(
  setThemeName: (theme: ThemeName) => void,
): void {
  useEffect((): (() => void) => {
    let isMounted = true;

    const initialize = async (): Promise<void> => {
      const initialTheme = await resolveInitialTheme();

      if (isMounted) {
        setThemeName(initialTheme);
      }
    };

    void initialize();

    return (): void => {
      isMounted = false;
    };
  }, [setThemeName]);
}
