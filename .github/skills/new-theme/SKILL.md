---
name: new-theme
description: 'Crear o modificar temas visuales (CustomThemeDefinition de satoshi-rc-ui) con paleta DaisyUI, manifiesto, registro y traducciones. Use when: crear tema, nuevo theme, cambiar colores, tema personalizado, magenta, dark, daisyUI.'
argument-hint: 'nombre y paleta del tema'
---

# Crear / Modificar un Tema

Los temas de esta app son `CustomThemeDefinition` de `satoshi-rc-ui@1.0.0`. El tipo `AppTheme` de esta versión SOLO tiene `{ name, manifest }`; los colores van en el bloque `daisyUI`. Usar la propiedad `colors` produce el error `TS2353: 'colors' does not exist in type 'AppTheme'`.

## ⛔ Regla de Git (obligatoria)

**NUNCA ejecutes `git commit`, `git push` ni comandos que modifiquen el historial o el remoto.** Al terminar, deja los cambios en el working tree, muestra `git status` y SUGIERE el comando de commit para que el usuario lo ejecute.

Al sugerir el comando de commit usa Conventional Commits; para cambios de CI, workflows o integración con la librería usa `ci(referencia): commit`; para temas y UI usa el tipo apropiado (`feat`, `fix`, `docs`, `refactor`, `test`, `style`, `perf`, `chore`, `build`, `revert`). Ejemplo: `git commit -m "feat(temas): agregar tema magenta"`.

## Contrato obligatorio

```ts
import type { CustomThemeDefinition } from "@satoshi-rc-ui";

export const miTema: CustomThemeDefinition = {
  name: "mi-tema",
  manifest: {
    id: "mi-tema",                    // igual que name
    name: "themes.miTema.name",       // clave i18n
    description: "themes.miTema.description",
    version: "1.0.0",
    author: "Steveen Cues",
    tags: ["dark", "..."],
    supportedFeatures: ["gradients", "animations", "responsive"],
    isDefault: false,
    isExperimental: true,
  },
  daisyUI: {
    colorScheme: "dark",              // "light" | "dark"
    // 20 tokens obligatorios: primary, primaryContent, secondary,
    // secondaryContent, accent, accentContent, neutral, neutralContent,
    // base100, base200, base300, baseContent, info, infoContent,
    // success, successContent, warning, warningContent, error, errorContent
  },
};
```

Plantillas reales: `src/assets/styles/theme/light.theme.ts` (claro) y `dark.theme.ts` (oscuro).

## Checklist de alta de tema nuevo

1. Crear `src/assets/styles/theme/<nombre>.theme.ts` con el contrato de arriba.
2. Exportarlo en `src/assets/styles/theme/index.ts`.
3. Registrarlo en `CUSTOM_THEMES` en `src/assets/styles/theme/theme.ts` (los `CUSTOM_THEMES` alimentan `appThemes` que consume el `ThemeProvider` en `main.tsx`).
4. Añadir `themes.<nombre>.name` y `themes.<nombre>.description` a los TRES locales: `es.json`, `en.json`, `fr.json` (dentro de `"themes"`, antes de `"native"`).
5. Si el nombre no está en `ThemeName` (`"light" | "dark" | "magenta" | "semi-dark" | (string & {})`), no pasa nada: acepta strings por el fallback. Evitar nombres con espacios.
6. Validar: `npm run type-check && npm run build`.

## Guía de mapeo de paleta → tokens DaisyUI

- `base100/200/300`: superficies de fondo (100 = superficie principal, 200 = fondo de página, 300 = elevada).
- `baseContent`: texto sobre superficies base.
- `primary` + `primaryContent`: color de marca y color de texto/contraste encima (botones primarios).
- `neutral` + `neutralContent`: encabezados, footers, elementos neutros.
- `info/success/warning/error` + sus `*Content`: contraste sobre cada color de estado.
- Regla de oro: cada `*Content` debe leerse legiblemente sobre su token par (ratio AA mínimo).
