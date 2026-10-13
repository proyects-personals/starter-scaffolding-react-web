import { useTheme } from "@application";

import type { IHeaderPreferenceOptionProps } from "@presentation";
import type { JSX } from "react";

/**
 * @description Renderiza una opción individual del selector.
 *
 * @template T Tipo del valor.
 *
 * @param {IHeaderPreferenceOptionProps<T}} props Propiedades de la opción.
 * @returns {JSX.Element} Opción del selector.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function HeaderPreferenceOption<T extends string>({
  option,
  selected,
  onSelect,
}: IHeaderPreferenceOptionProps<T>): JSX.Element {
  const { theme } = useTheme();

  /**
   * @description Selecciona la opción actual.
   *
   * @returns {void}
   */
  const handleSelect = (): void => {
    onSelect(option.value);
  };

  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      onClick={handleSelect}
      className="
        flex
        w-full
        items-center
        gap-3
        rounded-lg
        px-3
        py-2.5
        text-left
        text-sm
        transition-opacity
        duration-150
        hover:opacity-80
      "
      style={{
        backgroundColor: selected ? theme.colors.brand.primary : "transparent",
        color: selected
          ? theme.colors.brand.primaryContrast
          : theme.colors.text.primary,
      }}
    >
      {option.icon !== undefined && option.icon !== null && (
        <span className="shrink-0">{option.icon}</span>
      )}

      <span className="min-w-0 flex-1 truncate">{option.label}</span>

      {selected && (
        <span className="shrink-0" aria-hidden="true">
          ✓
        </span>
      )}
    </button>
  );
}
