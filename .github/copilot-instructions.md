# Project Guidelines — starter-scaffolding-react-web

Scaffold de React + TypeScript + Vite 7 como vitrina de la librería `satoshi-rc-ui` (instalada localmente desde `resource/satoshi-rc-ui-1.0.0.tgz`).

## ⛔ Reglas estrictas de Git (NO NEGOCIABLES)

El agente **NUNCA** debe ejecutar comandos que modifiquen el historial o el remoto. Prohibido:

- `git commit`, `git push`, `git merge`, `git rebase`, `git cherry-pick`
- `git tag`, `git branch -D`, `git push --force` (ni `--force-with-lease`)
- `git reset --hard`, `git checkout -- .`, `git restore .`, `git clean -fd` (destruyen trabajo)
- `gh pr create`, `gh pr merge`, `gh release create`
- Cualquier comando que modifique `origin` o el estado de otros branches

**Sí está permitido:** `git status`, `git diff`, `git log`, `git show`, `git branch` (lectura), `git add` y `git stash` solo si el usuario lo pide explícitamente.

**Al terminar cambios:** deja el working tree listo, muéstrale al usuario el `git status`/`git diff` y SUGIERE el comando de commit/push para que él lo ejecute. Nunca lo ejecutes por tu cuenta, ni siquiera si parece obvio que "toca commitear".

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

- Commits: Conventional Commits (validado por commitlint + husky `commit-msg`; PR titles también validados). **El agente no ejecuta commit ni push** — ver la regla ⛔ arriba.
- Pre-commit: Prettier + lint-staged.
- CI en `.github/workflows/`: workflow por concern (lint, test, build, commitlint, security, deploy, build-library, pr-lint, auto-pr, release) en push/PR a `main`/`develop`. Deploy a GitHub Pages desde `main` y `develop`.
- `coverage/` es artefacto generado; no editarlo a mano.
- La librería `satoshi-rc-ui` vive en `Satoshi-librerias/satoshi-rc-ui` (rama `develop`); en CI se compila inline (ver `build-library.yml`). El `resource/*.tgz` es solo para desarrollo local.
