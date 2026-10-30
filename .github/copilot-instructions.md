# Project Guidelines — starter-scaffolding-react-web

Scaffold de React + TypeScript + Vite 7 como vitrina de la librería `satoshi-rc-ui` (instalada localmente desde `resource/satoshi-rc-ui-1.0.0.tgz`).

## Code Style

- TypeScript estricto (`strict`, `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`: usa `import type` para tipos).
- Componentes con retorno tipado explícito: `(): JSX.Element`.
- Comentarios JSDoc en español con `@description`, `@author Steveen Cues`, `@version` siguiendo el patrón de los archivos existentes.
- Formato con Prettier y ESLint flat config (`eslint.config.js`); runner: `npm run lint` (fix) / `npm run lint:check`.

## Architecture

Estructura en `src/` con alias definidos en `tsconfig.json` y `vite.config.ts`:

- `@presentation` → `src/app/presentation/`: componentes React (`App.tsx`).
- `@domain`, `@application`, `@infrastructure` → capas reservadas en `src/app/` (crear allí la lógica de negocio, no en presentation).
- `@assets` → `src/assets/`: i18n y estilos.
- `@i18n` → `src/assets/i18n/`: catálogos en `locales/{es,en,fr}.json` + `translations.ts` (`TranslationCatalog` de la librería). Toda cadena visible pasa por `t()` de `useLanguage()`; si agregas texto nuevo, añádelo a los 3 idiomas.
- `@assets/styles/theme/`: temas como `CustomThemeDefinition` (`{ name, manifest, daisyUI }`) de `satoshi-rc-ui`. NO uses `colors` — la versión 1.0.0 no lo soporta. Registra todo tema nuevo en `CUSTOM_THEMES` (theme.ts) y exporta desde `index.ts`. `ThemeName` admite `"light" | "dark" | "magenta" | "semi-dark" | (string & {})`.

Los componentes UI (Button, Header, Container, ThemeSelector, providers) vienen de `satoshi-rc-ui`; no recrearlos, consumirlos en `App.tsx`.

## Build and Test

```bash
npm run dev          # Vite en :5173 (strictPort)
npm run build        # tsc --noEmit && vite build
npm test             # Jest + ts-jest (jsdom), tests en *.test.ts / *.spec.ts junto al código
npm run test:coverage
npm run lint:check
npm run type-check
npm run ui:install:local   # reinstalar la librería desde el tgz de resource/
```

## Conventions

- Commits: Conventional Commits (validado por commitlint + husky `commit-msg`; PR titles también validados).
- Pre-commit: Prettier + lint-staged.
- CI en `.github/workflows/ci.yml` valida commitlint, lint, prettier, type-check, tests y build en push/PR a `main`/`develop`. Deploy a GitHub Pages solo desde `main` (`.github/workflows/deploy.yml`).
- `coverage/` está committeado pero es artefacto generado; no editarlo a mano.
- La librería se resuelve por paths en tsconfig hacia `node_modules/satoshi-rc-ui/dist/`; si cambian los tipos, revisar `dist/libs/domain/interface/theme.interface.d.ts`.
