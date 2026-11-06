/**
 * @description Configura el contador interactivo sobre el elemento indicado.
 * @param element - Boton donde se monta el contador.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function setupCounter(element: HTMLButtonElement): void {
  let counter = 0;

  const setCounter = (count: number): void => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  element.addEventListener("click", () => setCounter(counter + 1));

  setCounter(0);
}
