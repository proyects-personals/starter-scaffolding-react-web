import { useEffect, useState, type JSX } from "react";

import { resolveInitialLanguage, storeLanguage } from "@application";
import i18n from "@assets/i18n";
import {
  TranslateContext,
  type Language,
  type TranslateProviderProps,
} from "@domain";

/**
 * @description Proveedor global del sistema de traducción.
 * Sincroniza el idioma con i18next y persiste la preferencia
 * utilizando almacenamiento cifrado.
 *
 * @param {TranslateProviderProps} props Propiedades del proveedor
 * @returns {JSX.Element} Proveedor del contexto
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function TranslateProvider({
  children,
}: TranslateProviderProps): JSX.Element {
  const [language, setLanguage] = useState<Language>("es");

  useEffect((): (() => void) => {
    let isMounted = true;

    const initializeLanguage = async (): Promise<void> => {
      const initialLanguage = await resolveInitialLanguage();

      if (isMounted) {
        setLanguage(initialLanguage);
      }
    };

    void initializeLanguage();

    return (): void => {
      isMounted = false;
    };
  }, []);

  useEffect((): void => {
    void i18n.changeLanguage(language);
    void storeLanguage(language);
  }, [language]);

  const changeTranslate = (newLanguage: Language): void => {
    setLanguage(newLanguage);
  };

  return (
    <TranslateContext.Provider
      value={{
        language,
        changeTranslate,
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
}
