import {
  Button,
  Container,
  Header,
  LanguageSelector,
  ThemeSelector,
  useLanguage,
} from "@steveencues/starter-react-ui";
import { useState } from "react";

import type { JSX } from "react";

export default function App(): JSX.Element {
  const { t } = useLanguage();
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <>
      <Header
        logo={{
          src: "/vite.svg",
          alt: t("showcase.brand"),
          href: "#top",
          width: 36,
          height: 36,
        }}
        navigationItems={[
          { label: t("navigation.home"), href: "#top" },
          { label: t("showcase.components"), href: "#components" },
          { label: t("showcase.preferences"), href: "#preferences" },
        ]}
        showThemeSelector={false}
        showLanguageSelector={false}
        translations={{
          menuOpen: "menu.open",
          menuClose: "menu.close",
          navigationLabel: "navigation.main",
        }}
      />
      <main className="min-h-screen bg-base-200 text-base-content" id="top">
        <Container
          as="section"
          className="py-10"
          direction="column"
          gap="lg"
          maxWidth="xl"
          padding="md"
          align="start"
        >
          <div className="space-y-3">
            <p className="badge badge-primary badge-outline">
              {t("showcase.eyebrow")}
            </p>
            <h1 className="text-4xl font-bold tracking-tight">
              {t("showcase.title")}
            </h1>
            <p className="max-w-2xl text-base-content/70">
              {t("showcase.description")}
            </p>
          </div>

          <section className="w-full space-y-4" id="components">
            <h2 className="text-2xl font-semibold">
              {t("showcase.components")}
            </h2>
            <div className="grid gap-4 lg:grid-cols-2">
              <article className="card border border-base-300 bg-base-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">{t("showcase.buttons.title")}</h3>
                  <p className="text-base-content/70">
                    {t("showcase.buttons.description")}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <Button
                      onClick={() => setShowFeedback(true)}
                      variant="primary"
                    >
                      {t("showcase.buttons.primary")}
                    </Button>
                    <Button isOutlined={true} variant="secondary">
                      {t("showcase.buttons.outlined")}
                    </Button>
                    <Button disabled={true} variant="ghost">
                      {t("showcase.buttons.disabled")}
                    </Button>
                  </div>
                  {showFeedback && (
                    <p aria-live="polite" className="text-sm text-success">
                      {t("showcase.buttons.feedback")}
                    </p>
                  )}
                </div>
              </article>

              <article className="card border border-base-300 bg-base-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">
                    {t("showcase.navigation.title")}
                  </h3>
                  <p className="text-base-content/70">
                    {t("showcase.navigation.description")}
                  </p>
                  <p className="text-sm text-base-content/70">
                    {t("showcase.navigation.hint")}
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className="w-full space-y-4" id="preferences">
            <h2 className="text-2xl font-semibold">
              {t("showcase.preferences")}
            </h2>
            <div className="grid gap-4 lg:grid-cols-2">
              <article className="card border border-base-300 bg-base-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">{t("showcase.theme.title")}</h3>
                  <p className="text-base-content/70">
                    {t("showcase.theme.description")}
                  </p>
                  <ThemeSelector
                    className="w-full"
                    showDescriptions={true}
                    translations={{
                      title: "preferences.appearance.theme.title",
                      selected: "preferences.appearance.theme.selected",
                      searchPlaceholder: "preferences.appearance.theme.search",
                      empty: "preferences.appearance.theme.empty",
                      of: "common.results.of",
                      results: "preferences.appearance.theme.results",
                      close: "preferences.appearance.theme.close",
                    }}
                  />
                </div>
              </article>

              <article className="card border border-base-300 bg-base-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">{t("showcase.language.title")}</h3>
                  <p className="text-base-content/70">
                    {t("showcase.language.description")}
                  </p>
                  <LanguageSelector />
                </div>
              </article>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}

