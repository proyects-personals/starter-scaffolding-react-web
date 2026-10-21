import { ThemeSelector, LanguageSelector } from "@steveencues/starter-react-ui";
import type { JSX } from "react";

export default function App(): JSX.Element {
  return (
    <main className="min-h-screen bg-base-200 p-6 text-base-content">
      <div className="mx-auto max-w-md">
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
          }}
        />
        <LanguageSelector />
      </div>
    </main>
  );
}
