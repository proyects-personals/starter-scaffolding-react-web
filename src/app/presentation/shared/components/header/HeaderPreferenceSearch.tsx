import { useLanguage, useTheme } from "@application";

import type { IHeaderPreferenceSearchProps } from "@presentation";
import type { CSSProperties, JSX } from "react";

/**
 * @description Campo de búsqueda del selector de preferencias.
 *
 * @param props Propiedades del buscador.
 * @returns Campo de búsqueda.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function HeaderPreferenceSearch({
  value,
  inputRef,
  ariaLabel,
  onChange,
}: IHeaderPreferenceSearchProps): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const containerStyle: CSSProperties = {
    borderColor: theme.colors.border.subtle,
  };

  const inputStyle: CSSProperties = {
    borderColor: theme.colors.border.default,
    color: theme.colors.text.primary,
  };

  return (
    <div className="border-b p-2" style={containerStyle}>
      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={onChange}
        placeholder={t("header.preferences.search.placeholder")}
        className="
          w-full rounded-lg border bg-transparent px-3 py-2
          text-sm outline-none transition-colors
        "
        style={inputStyle}
        aria-label={t("header.preferences.search.ariaLabel", {
          preference: ariaLabel,
        })}
      />
    </div>
  );
}
