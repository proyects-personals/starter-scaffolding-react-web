import { decrypt, encrypt } from "@application";
import {
  SUPPORTED_LANGUAGES,
  LANGUAGE_STORAGE_KEY,
  LANGUAGE_CODE_LENGTH,
  DEFAULT_LANGUAGE,
  LANGUAGE_ENCRYPTION_KEY,
  type Language,
} from "@domain";

/**
 * @description Verifica si un valor corresponde a un idioma soportado.
 *
 * @param {string} value Código del idioma
 * @returns {boolean} True cuando el idioma está soportado
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function isValidLanguage(value: string): value is Language {
  return SUPPORTED_LANGUAGES.some(
    (language: Language): boolean => language === value,
  );
}

/**
 * @description Obtiene y descifra el idioma almacenado.
 *
 * @returns {Promise<Language | null>} Idioma almacenado
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function getStoredLanguage(): Promise<Language | null> {
  const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedLanguage === null || storedLanguage.length === 0) {
    return null;
  }

  const decryptedLanguage = await decrypt(
    storedLanguage,
    LANGUAGE_ENCRYPTION_KEY,
  );

  if (
    decryptedLanguage === null ||
    decryptedLanguage.length === 0 ||
    !isValidLanguage(decryptedLanguage)
  ) {
    return null;
  }

  return decryptedLanguage;
}

/**
 * @description Obtiene el idioma configurado en el navegador.
 *
 * @returns {Language | null} Idioma del navegador
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getBrowserLanguage(): Language | null {
  const browserLanguage = navigator.language.slice(0, LANGUAGE_CODE_LENGTH);

  return isValidLanguage(browserLanguage) ? browserLanguage : null;
}

/**
 * @description Resuelve el idioma inicial de la aplicación.
 *
 * @returns {Promise<Language>} Idioma inicial
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function resolveInitialLanguage(): Promise<Language> {
  const storedLanguage = await getStoredLanguage();

  return storedLanguage ?? getBrowserLanguage() ?? DEFAULT_LANGUAGE;
}

/**
 * @description Persiste el idioma seleccionado utilizando cifrado.
 *
 * @param {Language} language Idioma seleccionado
 * @returns {Promise<void>}
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function storeLanguage(language: Language): Promise<void> {
  const encryptedLanguage = await encrypt(language, LANGUAGE_ENCRYPTION_KEY);

  localStorage.setItem(LANGUAGE_STORAGE_KEY, encryptedLanguage);
}
