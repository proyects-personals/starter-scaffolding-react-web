import { useContext } from "react";

import { ThemeContext, type ThemeContextValue } from "@domain";

/**
 * @description Hook que expone el contexto de tema.
 * @throws {Error} Si se usa fuera de ThemeProvider
 *
 * @returns {ThemeContextValue} Contexto del tema actual
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
