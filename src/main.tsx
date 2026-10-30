import { ThemeProvider, TranslateProvider } from "@satoshi-rc-ui";
import React from "react";
import ReactDOM from "react-dom/client";

import { translations, appThemes } from "@assets";
import "@assets/i18n";
import { App } from "@presentation";

import "./style.css";
import "@satoshi-rc-ui/style.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

const INITIAL_THEME = "light";

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <TranslateProvider
      translations={translations}
      initialLanguage="es"
      fallbackLanguage="en"
      languageEncryptionKey="your-language-encryption-key"
    >
      <ThemeProvider themes={appThemes} initialTheme={INITIAL_THEME}>
        <App />
      </ThemeProvider>
    </TranslateProvider>
  </React.StrictMode>,
);
