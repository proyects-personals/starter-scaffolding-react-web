import { useEffect, type RefObject } from "react";

/**
 * @description Detecta clics realizados fuera del elemento referenciado.
 *
 * @param ref Referencia del elemento.
 * @param onOutsideClick Callback ejecutado al hacer clic fuera.
 *
 * @returns void
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  onOutsideClick: () => void,
): void {
  useEffect((): (() => void) => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const target = event.target;

      if (
        target instanceof Node &&
        ref.current !== null &&
        !ref.current.contains(target)
      ) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return (): void => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onOutsideClick, ref]);
}
