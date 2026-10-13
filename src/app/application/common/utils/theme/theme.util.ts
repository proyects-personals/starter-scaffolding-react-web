import { decrypt, encrypt } from "@application";
import {
  STORAGE_KEY,
  THEME_ENCRYPTION_KEY,
  THEME_NAMES,
  THEMES,
} from "@domain";

import type { AppTheme, ThemeName } from "@domain";

/**
 * @description Obtiene el tema del sistema operativo.
 *
 * @returns {ThemeName} Tema del sistema
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
function getSystemTheme(): ThemeName {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * @description Verifica si un valor corresponde a un tema registrado.
 *
 * @param {string} value Nombre del tema
 * @returns {boolean} True cuando el tema existe
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function isValidTheme(value: string): value is ThemeName {
  return Object.hasOwn(THEMES, value);
}

/**
 * @description Obtiene el tema almacenado y lo descifra.
 *
 * @returns {Promise<ThemeName | null>} Tema almacenado
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function getStoredTheme(): Promise<ThemeName | null> {
  const storedTheme = localStorage.getItem(STORAGE_KEY);

  if (storedTheme === null || storedTheme.length === 0) {
    return null;
  }

  const decryptedTheme = await decrypt(storedTheme, THEME_ENCRYPTION_KEY);

  if (
    decryptedTheme === null ||
    decryptedTheme.length === 0 ||
    !isValidTheme(decryptedTheme)
  ) {
    return null;
  }

  return decryptedTheme;
}

/**
 * @description Persiste el tema seleccionado utilizando cifrado.
 *
 * @param {ThemeName} themeName Nombre del tema
 * @returns {Promise<void>}
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function storeTheme(themeName: ThemeName): Promise<void> {
  const encryptedTheme = await encrypt(themeName, THEME_ENCRYPTION_KEY);

  localStorage.setItem(STORAGE_KEY, encryptedTheme);
}

/**
 * @description Resuelve el tema inicial.
 *
 * @returns {Promise<ThemeName>} Tema inicial
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function resolveInitialTheme(): Promise<ThemeName> {
  const storedTheme = await getStoredTheme();

  return storedTheme ?? getSystemTheme();
}

/**
 * @description Obtiene la configuración del tema.
 *
 * @param {ThemeName} themeName Nombre del tema
 * @returns {AppTheme} Configuración del tema
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function resolveTheme(themeName: ThemeName): AppTheme {
  return THEMES[themeName];
}

/**
 * @description Obtiene todos los temas disponibles.
 *
 * @returns {ThemeName[]} Lista de temas
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function getAvailableThemes(): ThemeName[] {
  return [...THEME_NAMES];
}
