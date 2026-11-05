# starter-scaffolding-react-web

Scaffold de **React + TypeScript + Vite 7** como vitrina de la librería [`satoshi-rc-ui`](https://github.com/Satoshi-librerias/satoshi-rc-ui), con arquitectura en capas, i18n (es/en/fr), theming DaisyUI, tests (Jest) y CI completo.

## Requisitos

- Node.js 20+ y npm 10+
- Docker + Docker Compose (opcional, para el entorno contenedorizado)

## Arquitectura

```
src/
├── app/
│   ├── presentation/   # Componentes React (App.tsx)
│   ├── application/    # Casos de uso / orquestación (reservada)
│   ├── domain/         # Reglas de negocio (reservada)
│   └── infrastructure/ # Adaptadores externos (reservada)
└── assets/
    ├── i18n/           # Catálogos es/en/fr + translations.ts
    └── styles/theme/   # Temas CustomThemeDefinition de satoshi-rc-ui
```

Alias de TS/Vite: `@presentation`, `@domain`, `@application`, `@infrastructure`, `@assets`, `@i18n`, `@satoshi-rc-ui`, `@`.

## La librería `satoshi-rc-ui`

La app consume la librería desde un tarball local (`resource/satoshi-rc-ui-*.tgz`, declarado en `dependencies` como `file:...`). Los componentes UI (Button, Header, Container, ThemeSelector, providers) vienen de la librería; **no recrearlos**.

### Instalar / reinstalar la librería

```bash
npm run ui:install:local     # instala ./resource/satoshi-rc-ui-1.0.0.tgz
```

### Modo desarrollo con `npm link` (recomendado para desarrollar la librería en paralelo)

Permite editar el código de la librería (repo `Satoshi-librerias/satoshi-rc-ui`, rama `develop`) y ver los cambios al instante en el scaffold:

```bash
# 1. En el repo de la librería: compilar y exponer el paquete
cd Satoshi-librerias/satoshi-rc-ui
npm install && npm run build:lib
npm link

# 2. En el scaffold: enlazar y arrancar
cd ../../starter-scaffolding-react-web
npm run ui:link:dev          # npm link satoshi-rc-ui
npm run dev
```

Para volver al tarball local:

```bash
npm run ui:unlink:dev        # desvincula y reinstala el tgz
```

> `vite.config.ts` ya está preparado para el link: `resolve.dedupe` de React y `server.fs.allow: [".."]`.

### Instalar la versión publicada en npm (cuando exista)

```bash
npm run ui:install:published
```

### Desinstalar

```bash
npm run ui:uninstall
```

## Comandos

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor Vite en `:5173` (strictPort) |
| `npm run build` | Type-check (`tsc --noEmit`) + build de producción a `dist/` |
| `npm run preview` | Sirve `dist/` localmente |
| `npm test` | Jest + ts-jest (jsdom); tests junto al código (`*.test.ts`) |
| `npm run test:watch` | Tests en modo watch |
| `npm run test:coverage` | Tests con cobertura (reporte en `coverage/`) |
| `npm run lint` | ESLint con auto-fix |
| `npm run lint:check` | ESLint sin modificar archivos (CI usa este) |
| `npm run format` | Prettier sobre `src/` |
| `npm run type-check` | Solo `tsc --noEmit` |
| `npm run ui:*` | Gestión de la librería (ver sección anterior) |

## Docker

El `Dockerfile` define tres etapas: `deps` (instalación), `build` (compilación) y `runtime` (nginx con los estáticos) además de un target `dev` para desarrollo con hot reload. El `compose.yaml` orquesta ambos.

### Desarrollo con hot reload

```bash
docker compose up app        # http://localhost:5173
```

El código del host se monta en el contenedor (volumen `.:/app`); los cambios se reflejan al instante. Las `node_modules` viven en un volumen dedicado para no pisar las del host.

### Preview del build de producción

```bash
docker compose up preview    # build + nginx en http://localhost:8080
```

### Build manual de imágenes

```bash
docker build --target dev -t starter-scaffold:dev .       # imagen de desarrollo
docker build --target runtime -t starter-scaffold:prod .  # imagen de producción (nginx)
docker run --rm -p 8080:80 starter-scaffold:prod          # servir el build
```

> El `resource/satoshi-rc-ui-*.tgz` se copia dentro de la imagen (ver `Dockerfile`, etapa `deps`); no necesitas nada más en el contenedor.

## i18n

Toda cadena visible pasa por `t()` de `useLanguage()`. Si añades texto, agrégalo a los **tres** catálogos:

- `src/assets/i18n/locales/es.json`
- `src/assets/i18n/locales/en.json`
- `src/assets/i18n/locales/fr.json`

## Theming

Los temas son `CustomThemeDefinition` (`{ name, manifest, daisyUI }`) de `satoshi-rc-ui@1.0.0`. **No usar la propiedad `colors`** (no soportada en 1.0.0). Plantillas: `src/assets/styles/theme/light.theme.ts` y `dark.theme.ts`. Registrar temas nuevos en `CUSTOM_THEMES` (`theme.ts`) y exportarlos desde `index.ts`.

## CI

Workflows por concern en `.github/workflows/` (push/PR a `main`/`develop`): lint, test, build, security, deploy (GitHub Pages), commitlint, pr-lint, auto-pr, version-bump. La librería se descarga y compila en CI usando el secreto `LIBRARY_ACCESS_TOKEN`.

## Convenciones

- Commits: [Conventional Commits](https://www.conventionalcommits.org/) (validados por commitlint + husky). Para CI/librería: `ci(referencia): commit`.
- Pre-commit: Prettier + lint-staged.
- TypeScript estricto; componentes con retorno tipado `(): JSX.Element`.
