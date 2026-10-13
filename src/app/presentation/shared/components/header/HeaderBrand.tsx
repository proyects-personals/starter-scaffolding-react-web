import { useLanguage, useTheme } from "@application";

import type { JSX } from "react";

/**
 * @description Marca principal del header con identidad visual adaptable al tema.
 *
 * @returns {JSX.Element} Marca del portfolio
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function HeaderBrand(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <a
      href="#home"
      className="group flex shrink-0 items-center gap-3"
      aria-label={t("navigation.home")}
    >
      <div
        className="
          flex h-8 w-8 items-center justify-center
          rounded-full
          transition-all duration-200
          group-hover:scale-105
          group-hover:shadow-lg
        "
        style={{
          backgroundColor: theme.colors.brand.primary,
          boxShadow: theme.colors.shadow.small,
        }}
      >
        <svg
          className="h-4 w-4 transition-transform duration-200 group-hover:scale-110"
          style={{
            color: theme.colors.brand.primaryContrast,
          }}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </div>

      <span
        className="
          text-base font-bold
          tracking-tight
          transition-colors duration-200
          sm:text-lg
          md:text-xl
        "
        style={{
          color: theme.colors.typography.heading.primary,
        }}
      >
        INNOVATECH
      </span>
    </a>
  );
}
