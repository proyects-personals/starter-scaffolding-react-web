import type { ChangeEvent, ReactNode, RefObject } from "react";

/**
 * @description Propiedades de una opción del selector.
 *
 * @template T Tipo del valor.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface IHeaderPreferenceOptionProps<T extends string> {
  option: IHeaderPreferenceOption<T>;
  selected: boolean;
  onSelect: (value: T) => void;
}

/**
 * @description Opción disponible para un selector de preferencias.
 *
 * @template T Tipo del valor de la opción.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface IHeaderPreferenceOption<T extends string> {
  value: T;
  label: string;
  icon?: ReactNode;
}

/**
 * @description Propiedades del selector genérico de preferencias.
 *
 * @template T Tipo del valor seleccionado.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface IHeaderPreferenceSelectProps<T extends string> {
  value: T;
  options: IHeaderPreferenceOption<T>[];
  onChange: (value: T) => void;
  ariaLabel: string;
  compact?: boolean;
}

/**
 * @description Propiedades del trigger del selector.
 *
 * @template T Tipo del valor.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface IHeaderPreferenceTriggerProps<T extends string> {
  value: T;
  selectedOption: IHeaderPreferenceOption<T> | undefined;
  ariaLabel: string;
  isOpen: boolean;
  compact: boolean;
  onToggle: () => void;
}

/**
 * @description Propiedades del buscador de preferencias.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface IHeaderPreferenceSearchProps {
  value: string;
  inputRef: RefObject<HTMLInputElement | null>;
  ariaLabel: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @description Propiedades del dropdown de preferencias.
 *
 * @template T Tipo del valor.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface IHeaderPreferenceDropdownProps<T extends string> {
  options: IHeaderPreferenceOption<T>[];
  filteredOptions: IHeaderPreferenceOption<T>[];
  value: T;
  search: string;
  inputRef: RefObject<HTMLInputElement | null>;
  ariaLabel: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (value: T) => void;
}
