import { useContext } from "react";

import { TranslateContext, type TranslateContextType } from "@domain";

/**
 * @description Hook para acceder al contexto de traducción.
 *
 * @returns {TranslateContextType} Contexto de traducción
 *
 * @throws {Error} Si se utiliza fuera de TranslateProvider
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useTranslateContext(): TranslateContextType {
  const context = useContext(TranslateContext);

  if (context === undefined) {
    throw new Error(
      "useTranslateContext must be used within TranslateProvider",
    );
  }

  return context;
}
