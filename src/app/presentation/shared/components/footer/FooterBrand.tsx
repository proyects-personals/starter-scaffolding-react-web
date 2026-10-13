import { useLanguage, useTheme } from "@application";

import type { JSX } from "react";

/**
 * @description Identidad visual del footer.
 *
 * @returns {JSX.Element} Marca del footer
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function FooterBrand(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="max-w-sm">
      <a
        href="#home"
        className="inline-flex items-center gap-3"
        aria-label={t("navigation.home")}
      >
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full"
          style={{
            backgroundColor: theme.colors.brand.primary,
            boxShadow: theme.colors.shadow.small,
          }}
        >
          <svg
            className="h-4 w-4"
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
          className="text-lg font-bold tracking-tight"
          style={{
            color: theme.colors.typography.heading.primary,
          }}
        >
          INNOVATECH
        </span>
      </a>

      <p
        className="mt-4 text-sm leading-6"
        style={{
          color: theme.colors.text.secondary,
        }}
      >
        {t("footer.description")}
      </p>
    </div>
  );
}
