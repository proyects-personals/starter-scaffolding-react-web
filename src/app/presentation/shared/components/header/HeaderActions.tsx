import { useLanguage, useTheme } from "@application";

import type { JSX } from "react";

/**
 * @description Acciones principales del header.
 * Botón responsive para contacto y agendamiento de consulta.
 *
 * @returns {JSX.Element} Acciones del header
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function HeaderActions(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="flex shrink-0 items-center">
      <a
        href="#contact"
        className="
          rounded-full
          px-3 py-2
          text-xs font-semibold
          shadow-sm
          transition-all duration-200
          hover:scale-[1.02]
          hover:shadow-md
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          sm:px-5 sm:py-2.5
          sm:text-sm
        "
        style={{
          backgroundColor: theme.colors.brand.primary,
          color: theme.colors.brand.primaryContrast,
          boxShadow: theme.colors.shadow.small,
          outlineColor: theme.colors.border.focus,
        }}
        onMouseEnter={(event): void => {
          event.currentTarget.style.backgroundColor =
            theme.colors.brand.primaryHover;
        }}
        onMouseLeave={(event): void => {
          event.currentTarget.style.backgroundColor =
            theme.colors.brand.primary;
        }}
      >
        <span className="hidden sm:inline">{t("navigation.consultation")}</span>

        <span className="sm:inline md:hidden">{t("navigation.contact")}</span>

        <span className="hidden md:inline">{t("navigation.consultation")}</span>
      </a>
    </div>
  );
}
