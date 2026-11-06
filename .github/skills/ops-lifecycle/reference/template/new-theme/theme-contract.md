---
id: tpl-new-theme-contract
tipo: Plantilla
title: Contrato completo de un tema
description: Plantilla comentada de CustomThemeDefinition, tabla de tokens y test de ejemplo; acompana a la plantilla de skill new-theme.
estado: vigente
relaciona: [tpl-new-theme]
status: stable
---

# Contrato: skill `new-theme`

## Proposito

Contrato completo de un tema con plantilla comentada, tabla de tokens DaisyUI y test de ejemplo. Complementa la plantilla de flujo ([SKILL-theme.md](../SKILL-theme.md)); aqui solo vive el detalle tecnico.

## Contrato completo de un tema

```ts
import type { CustomThemeDefinition } from "@satoshi-rc-ui";

/**
 * @description Define un tema corporativo azul para la aplicacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const blueTheme: CustomThemeDefinition = {
  name: "blue",
  manifest: {
    id: "blue",
    name: "themes.blue.name",
    description: "themes.blue.description",
    version: "1.0.0",
    author: "Steveen Cues",
    tags: ["light", "corporate"],
    supportedFeatures: ["gradients", "animations", "responsive"],
    isDefault: false,
    isExperimental: false,
  },
  daisyUI: {
    colorScheme: "light",
    primary: "#2563eb",
    primaryContent: "#ffffff",
    secondary: "#0ea5e9",
    secondaryContent: "#ffffff",
    accent: "#22d3ee",
    accentContent: "#083344",
    neutral: "#1e293b",
    neutralContent: "#f8fafc",
    base100: "#ffffff",
    base200: "#f1f5f9",
    base300: "#e2e8f0",
    baseContent: "#0f172a",
    info: "#0284c7",
    infoContent: "#ffffff",
    success: "#16a34a",
    successContent: "#ffffff",
    warning: "#d97706",
    warningContent: "#ffffff",
    error: "#dc2626",
    errorContent: "#ffffff",
  },
};
```

## Los 20 tokens obligatorios del bloque daisyUI

| Grupo | Tokens |
|---|---|
| Base | `base100`, `base200`, `base300`, `baseContent` |
| Marca | `primary`, `primaryContent`, `secondary`, `secondaryContent`, `accent`, `accentContent` |
| Neutro | `neutral`, `neutralContent` |
| Estado | `info`, `infoContent`, `success`, `successContent`, `warning`, `warningContent`, `error`, `errorContent` |

Regla de accesibilidad: cada `*Content` debe leerse legiblemente sobre su token par (contraste AA minimo).

## Plantilla de entradas i18n (los 3 locales)

```json
{
  "themes": {
    "blue": {
      "name": "Azul corporativo",
      "description": "Tema claro con acentos azules corporativos."
    }
  }
}
```

- `es.json`, `en.json` y `fr.json` deben tener exactamente la misma estructura.
- La clave va dentro de `"themes"`, antes de `"native"`.
- Sin caracteres especiales en las descripciones (solo letras, numeros, espacios y `. , ; : ( ) -`).

## Plantilla de test del tema

```ts
import { blueTheme } from "./blue.theme";
import { CUSTOM_THEMES } from "./theme";

/**
 * @description Pruebas del tema corporativo azul.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("blueTheme", () => {
  it("esta registrado en CUSTOM_THEMES", () => {
    expect(CUSTOM_THEMES).toContainEqual(blueTheme);
  });

  it("define los 20 tokens daisyUI", () => {
    const tokens = Object.keys(blueTheme.daisyUI);
    expect(tokens).toHaveLength(21); // colorScheme + 20 tokens
  });
});
```

Ver tambien los tests existentes en `src/assets/styles/theme/` como referencia de estilo.

## Referencias

| Recurso | Ruta |
|---|---|
| Flujo completo del tema | [SKILL-theme.md](../SKILL-theme.md) |
| Plantillas reales | `src/assets/styles/theme/light.theme.ts` y `dark.theme.ts` |
