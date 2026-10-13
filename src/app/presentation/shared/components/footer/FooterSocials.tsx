import { useLanguage, useTheme } from "@application";

import type { JSX } from "react";

/**
 * @description Enlaces sociales del footer.
 *
 * @returns {JSX.Element} Redes sociales
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function FooterSocials(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div>
      <h2
        className="text-sm font-semibold"
        style={{
          color: theme.colors.typography.heading.primary,
        }}
      >
        {t("footer.connect")}
      </h2>

      <div className="mt-4 flex gap-3">
        <a
          href="https://github.com/steveencues"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: theme.colors.surface.surfaceElevated,
            borderColor: theme.colors.border.default,
            color: theme.colors.text.primary,
          }}
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.335-.012 2.411-.012 2.739 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
          </svg>
        </a>

        <a
          href="#contact"
          aria-label={t("navigation.contact")}
          className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: theme.colors.surface.surfaceElevated,
            borderColor: theme.colors.border.default,
            color: theme.colors.text.primary,
          }}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l9 6 9-6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
