import {
  HeaderActions,
  HeaderBrand,
  HeaderLanguage,
  HeaderNavigation,
  HeaderTheme,
} from "@presentation";

import type { JSX } from "react";

/**
 * @description Header principal responsive del portfolio.
 *
 * @returns {JSX.Element} Header responsive
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function Header(): JSX.Element {
  return (
    <header
      className="
        col-span-4
        min-w-0
        py-4
        md:col-span-8
        md:py-5
        lg:col-span-12
        lg:py-6
      "
    >
      <div
        className="
          flex
          min-h-12
          w-full
          min-w-0
          items-center
          gap-3
          md:min-h-14
          md:gap-4
        "
      >
        <div className="min-w-0 shrink-0">
          <HeaderBrand />
        </div>

        <div className="min-w-0 flex-1">
          <HeaderNavigation />
        </div>

        <div
          className="
            flex
            shrink-0
            items-center
            gap-1.5
            md:gap-2
          "
        >
          <HeaderLanguage />
          <HeaderTheme />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
}
