import { createContext } from "react";

import type { TranslateContextType, Language } from "@domain";

/**
 * @description Cantidad de caracteres utilizada para obtener
 * el código principal del idioma del navegador.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LANGUAGE_CODE_LENGTH = 2;

/**
 * @description Idioma utilizado cuando no existe una preferencia válida.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DEFAULT_LANGUAGE = "es";

/**
 * @description Lista de idiomas soportados por la aplicación.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SUPPORTED_LANGUAGES: Language[] = [
  "es",
  "en",
  "fr",
  "de",
  "it",
  "pt",
];

export const TranslateContext = createContext<TranslateContextType | undefined>(
  undefined,
);

export const LANGUAGE_OPTIONS = [
  {
    value: "es",
    label: "Español",
    icon: "🇪🇸",
  },
  {
    value: "en",
    label: "English",
    icon: "🇺🇸",
  },
  {
    value: "fr",
    label: "Français",
    icon: "🇫🇷",
  },
] as const;
