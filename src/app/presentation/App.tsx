import { useLanguage, useTheme } from "@application";

import type { JSX } from "react";

export default function App(): JSX.Element {
  const { t, changeTranslate } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      <div
        className="w-full max-w-md rounded-xl p-6 shadow"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <h1 className="text-2xl font-bold mb-4">
          {t("scaffolding.page.title")}
        </h1>

        <p className="mb-6">{t("scaffolding.page.description")}</p>

        {/* Idioma */}
        <div className="flex gap-3 justify-center mb-4">
          <button
            onClick={() => changeTranslate("es")}
            className="px-4 py-2 rounded bg-white/20"
          >
            ES
          </button>

          <button
            onClick={() => changeTranslate("en")}
            className="px-4 py-2 rounded bg-white/20"
          >
            EN
          </button>
        </div>

        {/* Tema */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setTheme("light")}
            className="px-4 py-2 rounded bg-white/20"
          >
            Lightsssssssssssssssssssssssssss
          </button>

          <button
            onClick={() => setTheme("dark")}
            className="px-4 py-2 rounded bg-white/20"
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
}
