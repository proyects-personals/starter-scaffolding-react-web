---
id: tpl-new-theme
tipo: Plantilla
title: Plantilla de skill para temas
description: Esqueleto completo de la skill new-theme; copiar a .github/skills/new-theme/SKILL.md al adoptarla.
estado: vigente
relaciona: [ops-readme]
status: stable
---

# Plantilla: skill `new-theme`

## Proposito

Definir el flujo estandarizado para crear o modificar temas visuales (`CustomThemeDefinition` de `satoshi-rc-ui`) con paleta DaisyUI, manifiesto, registro y traducciones. Esta plantilla se copia a `.github/skills/new-theme/SKILL.md` cuando el repo la adopta.

## Advertencia critica

El tipo `AppTheme` de `satoshi-rc-ui@1.0.0` SOLO acepta `{ name, manifest }`; los colores van en el bloque `daisyUI`. Usar la propiedad `colors` produce el error `TS2353: 'colors' does not exist in type 'AppTheme'`.

## Contrato de un tema

```ts
import type { CustomThemeDefinition } from "@satoshi-rc-ui";

export const miTema: CustomThemeDefinition = {
  name: "mi-tema",                // identificador unico, sin espacios
  manifest: {
    id: "mi-tema",                // igual que name
    name: "themes.miTema.name",   // clave i18n
    description: "themes.miTema.description",
    version: "1.0.0",
    author: "Steveen Cues",
    tags: ["dark", "corporativo"],
    supportedFeatures: ["gradients", "animations", "responsive"],
    isDefault: false,
    isExperimental: true,
  },
  daisyUI: {
    colorScheme: "dark",          // "light" | "dark"
    // 20 tokens obligatorios (ver tabla de abajo)
  },
};
```

## Los 20 tokens obligatorios del bloque daisyUI

| Grupo | Tokens | Uso |
|---|---|---|
| Base | `base100`, `base200`, `base300` | Superficies: 100 principal, 200 fondo de pagina, 300 elevada. |
| Base | `baseContent` | Texto sobre superficies base. |
| Marca | `primary`, `primaryContent` | Color de marca y contraste encima (botones primarios). |
| Marca | `secondary`, `secondaryContent` | Color secundario y contraste. |
| Marca | `accent`, `accentContent` | Acentos y contraste. |
| Neutro | `neutral`, `neutralContent` | Headers, footers, elementos neutros. |
| Estado | `info` / `success` / `warning` / `error` + su `Content` | Contraste sobre cada color de estado. |

Regla de accesibilidad: cada `*Content` debe leerse legiblemente sobre su token par (contraste AA minimo).

## Checklist de alta de tema nuevo

| # | Paso |
|---|---|
| 1 | Crear `src/assets/styles/theme/<nombre>.theme.ts` con el contrato de arriba. |
| 2 | Exportarlo en `src/assets/styles/theme/index.ts`. |
| 3 | Registrarlo en `CUSTOM_THEMES` en `theme.ts` (alimenta el `ThemeProvider` en `main.tsx`). |
| 4 | Anadir `themes.<nombre>.name` y `themes.<nombre>.description` a los TRES locales (`es.json`, `en.json`, `fr.json`), dentro de `"themes"` y antes de `"native"`. |
| 5 | Nombres sin espacios; `ThemeName` acepta strings por fallback (`"light" \| "dark" \| "magenta" \| "semi-dark" \| (string & {})`). |
| 6 | Anadir pruebas unitarias: registro en `CUSTOM_THEMES`, los 20 tokens presentes y claves i18n en los 3 locales. |
| 7 | Documentar con JSDoc: `@description`, `@author Steveen Cues`, `@version`; sin caracteres especiales (regla `jsdoc/match-description`). |
| 8 | Validar: `npm run type-check && npm run lint:check && npm test -- --ci && npm run build`. |

## Regla de Git (obligatoria)

El agente NUNCA ejecuta `git commit`, `git push` ni comandos que modifiquen el historial o el remoto. Al terminar, deja los cambios en el working tree, muestra `git status` y sugiere el comando de commit (ej. `git commit -m "feat(temas): agregar tema magenta"`).

## Referencias

| Recurso | Ruta |
|---|---|
| Contrato completo con plantilla comentada y test | [theme-contract.md](./new-theme/theme-contract.md) |
| Instrucciones globales del agente | `.github/copilot-instructions.md` del repo que adopta |
| Plantillas reales | `src/assets/styles/theme/light.theme.ts` y `dark.theme.ts` |
