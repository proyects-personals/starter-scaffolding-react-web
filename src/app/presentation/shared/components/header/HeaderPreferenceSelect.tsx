import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type JSX,
  type ChangeEvent,
} from "react";

import { useClickOutside, useEscapeKey, useLanguage } from "@application";
import {
  HeaderPreferenceDropdown,
  HeaderPreferenceTrigger,
  type IHeaderPreferenceSelectProps,
} from "@presentation";

/**
 * @description Selector genérico de preferencias para el header.
 *
 * Permite seleccionar cualquier conjunto de opciones tipadas,
 * incluyendo idiomas, temas u otras preferencias futuras.
 *
 * @template T Tipo del valor seleccionado.
 *
 * @param {HeaderPreferenceSelectProps<T>} props Propiedades del selector.
 * @returns {JSX.Element} Selector de preferencias.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function HeaderPreferenceSelect<T extends string>({
  value,
  options,
  onChange,
  ariaLabel,
  compact = false,
}: IHeaderPreferenceSelectProps<T>): JSX.Element {
  const { t } = useLanguage();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedOption = useMemo(
    () => options.find((option): boolean => option.value === value),
    [options, value],
  );

  const filteredOptions = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    if (normalizedSearch.length === 0) {
      return options;
    }

    return options.filter(
      (option): boolean =>
        option.label.toLowerCase().includes(normalizedSearch) ||
        option.value.toLowerCase().includes(normalizedSearch),
    );
  }, [options, search]);

  const closeSelector = useCallback((): void => {
    setIsOpen(false);
    setSearch("");
  }, []);

  const toggleSelector = (): void => {
    if (isOpen) {
      closeSelector();
      return;
    }

    setIsOpen(true);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const handleSelect = (optionValue: T): void => {
    onChange(optionValue);
    closeSelector();
  };

  const searchAriaLabel = t("header.preferences.search.ariaLabel", {
    preference: ariaLabel,
  });

  useClickOutside(containerRef, closeSelector);
  useEscapeKey(closeSelector);

  return (
    <div ref={containerRef} className="relative min-w-0">
      <HeaderPreferenceTrigger
        value={value}
        selectedOption={selectedOption}
        ariaLabel={ariaLabel}
        isOpen={isOpen}
        compact={compact}
        onToggle={toggleSelector}
      />

      {isOpen && (
        <HeaderPreferenceDropdown
          options={options}
          filteredOptions={filteredOptions}
          value={value}
          search={search}
          inputRef={searchInputRef}
          ariaLabel={searchAriaLabel}
          onSearchChange={handleSearchChange}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}
