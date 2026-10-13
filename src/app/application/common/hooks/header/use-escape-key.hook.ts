import { useEffect } from "react";

/**
 * @description Detecta la tecla Escape y ejecuta un callback.
 *
 * @param {() => void} onEscape Callback ejecutado al presionar Escape.
 *
 * @returns {void}
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useEscapeKey(onEscape: () => void): void {
  useEffect((): (() => void) => {
    const handleEscape = (event: globalThis.KeyboardEvent): void => {
      if (event.key === "Escape") {
        onEscape();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return (): void => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onEscape]);
}
