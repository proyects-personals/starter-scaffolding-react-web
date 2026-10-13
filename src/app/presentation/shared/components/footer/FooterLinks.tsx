import { useLanguage, useTheme } from "@application";

import type { JSX } from "react";

/**
 * @description Enlaces principales del footer.
 *
 * @returns {JSX.Element} Enlaces del footer
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function FooterLinks(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const links = [
    {
      href: "#services",
      label: t("navigation.services"),
    },
    {
      href: "#cases",
      label: t("navigation.caseStudies"),
    },
    {
      href: "#stack",
      label: t("navigation.stack"),
    },
    {
      href: "#about",
      label: t("navigation.about"),
    },
    {
      href: "#contact",
      label: t("navigation.contact"),
    },
  ];

  return (
    <div>
      <h2
        className="text-sm font-semibold"
        style={{
          color: theme.colors.typography.heading.primary,
        }}
      >
        {t("footer.navigation")}
      </h2>

      <nav className="mt-4 flex flex-col gap-3">
        {links.map((link): JSX.Element => (
          <a
            key={link.href}
            href={link.href}
            className="w-fit text-sm transition-opacity duration-200 hover:opacity-70"
            style={{
              color: theme.colors.text.secondary,
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
