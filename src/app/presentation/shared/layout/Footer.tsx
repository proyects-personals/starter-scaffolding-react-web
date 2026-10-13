import { useLanguage, useTheme } from "@application";
import { FooterBrand, FooterLinks, FooterSocials } from "@presentation";

import type { JSX } from "react";

/**
 * @description Footer principal responsive del portfolio.
 * Organiza marca, navegación y redes sociales adaptándose
 * progresivamente a mobile, tablet y desktop.
 *
 * @returns {JSX.Element} Footer principal
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function Footer(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer
      className="
        col-span-4
        w-full
        border-t
        md:col-span-8
        lg:col-span-12
      "
      style={{
        borderColor: theme.colors.border.default,
        backgroundColor: theme.colors.surface.background,
      }}
    >
      <div
        className="
          w-full
          py-8
          sm:py-10
          md:py-12
          lg:py-14
        "
      >
        <div
          className="
            grid
            grid-cols-4
            gap-x-4
            gap-y-8
            sm:gap-x-6
            md:grid-cols-8
            md:gap-x-6
            md:gap-y-10
            lg:grid-cols-12
            lg:gap-x-8
            lg:gap-y-12
          "
        >
          <div
            className="
              col-span-4
              min-w-0
              md:col-span-4
              lg:col-span-5
            "
          >
            <FooterBrand />
          </div>

          <div
            className="
              col-span-4
              min-w-0
              md:col-span-4
              lg:col-span-3
            "
          >
            <FooterLinks />
          </div>

          <div
            className="
              col-span-4
              min-w-0
              md:col-span-8
              lg:col-span-4
              lg:flex
              lg:justify-end
            "
          >
            <FooterSocials />
          </div>
        </div>

        <div
          className="
            mt-8
            border-t
            pt-5
            sm:mt-10
            sm:pt-6
            md:mt-12
            lg:mt-14
          "
          style={{
            borderColor: theme.colors.border.subtle,
          }}
        >
          <p
            className="
              text-center
              text-xs
              leading-relaxed
              sm:text-sm
            "
            style={{
              color: theme.colors.text.muted,
            }}
          >
            © {new Date().getFullYear()} INNOVATECH. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
