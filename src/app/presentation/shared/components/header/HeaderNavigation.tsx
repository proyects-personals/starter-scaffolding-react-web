import { useLanguage, useTheme } from "@application";
import { ChevronIcon } from "@presentation";

import type { JSX } from "react";

/**
 * @description Navegación principal responsive del header.
 *
 * @returns {JSX.Element} Navegación principal
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function HeaderNavigation(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const linkStyle = {
    color: theme.colors.text.primary,
  };

  return (
    <nav
      className="hidden items-center gap-5 text-sm font-medium md:flex lg:gap-7"
      aria-label={t("navigation.main")}
    >
      <a
        href="#services"
        className="
          flex items-center gap-1
          transition-all duration-200
          hover:opacity-70
          focus:outline-none
          focus-visible:opacity-70
        "
        style={linkStyle}
      >
        {t("navigation.services")}
        <ChevronIcon />
      </a>

      <a
        href="#cases"
        className="
          flex items-center gap-1
          transition-all duration-200
          hover:opacity-70
          focus:outline-none
          focus-visible:opacity-70
        "
        style={linkStyle}
      >
        {t("navigation.caseStudies")}
        <ChevronIcon />
      </a>

      <a
        href="#stack"
        className="
          flex items-center gap-1
          transition-all duration-200
          hover:opacity-70
          focus:outline-none
          focus-visible:opacity-70
        "
        style={linkStyle}
      >
        {t("navigation.stack")}
        <ChevronIcon />
      </a>

      <a
        href="#about"
        className="
          transition-all duration-200
          hover:opacity-70
          focus:outline-none
          focus-visible:opacity-70
        "
        style={linkStyle}
      >
        {t("navigation.about")}
      </a>
    </nav>
  );
}
