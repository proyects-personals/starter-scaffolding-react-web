import { useLanguage, useTheme } from "@application";
import {
  HeaderPreferenceOption,
  HeaderPreferenceSearch,
  type IHeaderPreferenceDropdownProps,
} from "@presentation";

import type { JSX } from "react";

/**
 * @description Cantidad máxima de opciones antes de habilitar búsqueda.
 */
const MAX_VISIBLE_OPTIONS = 5;

/**
 * @description Dropdown reutilizable para seleccionar preferencias.
 *
 * @template T Tipo del valor.
 *
 * @param {IHeaderPreferenceDropdownProps<T>} props Propiedades del dropdown.
 * @returns {JSX.Element} Dropdown de preferencias.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function HeaderPreferenceDropdown<T extends string>({
  options,
  filteredOptions,
  value,
  search,
  inputRef,
  ariaLabel,
  onSearchChange,
  onSelect,
}: IHeaderPreferenceDropdownProps<T>): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const hasManyOptions = options.length > MAX_VISIBLE_OPTIONS;

  return (
    <div
      className="
        absolute
        right-0
        top-full
        z-50
        mt-2
        w-56
        overflow-hidden
        rounded-xl
        border
      "
      style={{
        backgroundColor: theme.colors.surface.surfaceElevated,
        borderColor: theme.colors.border.default,
        boxShadow: theme.colors.shadow.medium,
      }}
    >
      {hasManyOptions && (
        <HeaderPreferenceSearch
          value={search}
          inputRef={inputRef}
          ariaLabel={ariaLabel}
          onChange={onSearchChange}
        />
      )}

      <div
        className={hasManyOptions ? "max-h-60 overflow-y-auto p-1" : "p-1"}
        role="listbox"
      >
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option): JSX.Element => (
            <HeaderPreferenceOption
              key={option.value}
              option={option}
              selected={option.value === value}
              onSelect={onSelect}
            />
          ))
        ) : (
          <p
            className="px-3 py-6 text-center text-sm"
            style={{
              color: theme.colors.text.muted,
            }}
          >
            {t("header.preferences.search.noResults")}
          </p>
        )}
      </div>
    </div>
  );
}
