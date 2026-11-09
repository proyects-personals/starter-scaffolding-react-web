# Guia de `.github`

Este directorio centraliza la configuracion del repositorio: automatizacion (CI/CD), instruccion del agente de IA, gobierno del ciclo de vida (`ops-lifecycle`), utilidades de validacion y el pipeline de calidad local.

## Requisitos del proyecto

| Herramienta | Version | Uso |
|---|---|---|
| Node.js | 20+ | Runtime de build, tests y CI. |
| npm | 10+ | Gestion de dependencias (sin lockfile commiteado). |
| Docker + Compose | 24+ / v2 | Desarrollo y preview contenedorizados (ver Dockerfile y compose.yaml en la raiz). |
| GitHub | Actions + Pages | CI/CD y deploy automatico. |

## Estructura

```
.github/
├── README.md                  # Esta guia
├── LICENSE                    # Licencia MIT de este directorio
├── copilot-instructions.md    # Instrucciones globales del agente (siempre activas)
├── workflows/                 # GitHub Actions (CI/CD)
│   ├── lint.yml               # ESLint + Prettier (incluye reglas JSDoc)
│   ├── test.yml               # Type-check + Jest
│   ├── build.yml              # Build de produccion
│   ├── security.yml           # npm audit (no bloquea, reporta)
│   ├── deploy-main.yml        # GitHub Pages desde main (produccion en /)
│   ├── deploy-develop.yml     # GitHub Pages desde develop (staging en /preview/)
│   ├── commitlint.yml         # Valida mensajes de commit
│   ├── pr-lint.yml            # Valida titulo del PR
│   ├── auto-pr.yml            # Actualiza titulo y descripcion del PR
│   ├── version-bump.yml       # Auto-SemVer en main segun commits
│   ├── validate-kit.yml       # Valida el kit .github al modificarlo
│   └── release.yml            # Semantic release en push a main
├── skills/                    # Habilidades invocables del agente
│   └── ops-lifecycle/
│       ├── SKILL.md           # Gobierno del ciclo de vida (formato OKF 0.2, arboles .ops)
│       └── reference/
│           ├── template/      # Plantillas de skills instalables + sus referencias
│           │   ├── SKILL.md          # Plantilla: skill new-feature
│           │   ├── SKILL-theme.md    # Plantilla: skill new-theme
│           │   ├── new-feature/patterns.md       # Plantillas de codigo
│           │   └── new-theme/theme-contract.md   # Contrato completo de tema
│           └── tree/          # Esqueletos de documentacion por arbol (.ops)
├── prompts/                   # Prompts reutilizables (invocables con /)
│   ├── quality-check.prompt.md     # Pipeline de calidad local completo
│   └── sync-translations.prompt.md # Sincroniza i18n es/en/fr
└── tools/
    └── validate-kit.mjs       # Validador del kit (enlaces, frontmatter, tokens)
```

## Workflows: triggers y condiciones

| Workflow | Disparador | Que hace |
|---|---|---|
| `lint` | push/PR a `main`, `develop` | ESLint (con reglas JSDoc) y Prettier check. |
| `test` | push/PR a `main`, `develop` | `tsc --noEmit` + Jest. |
| `build` | push/PR a `main`, `develop` | Build de produccion y artifact de `dist/`. |
| `security` | push/PR a `main`, `develop` | `npm audit`; reporta sin bloquear. |
| `deploy-main` | push a `main`, manual | Despliega main en `/` (produccion) y republisha develop en `/preview/` para no perderlo. |
| `deploy-develop` | push a `develop`, manual | Despliega develop en `/preview/` (staging con banner) y republisha main en `/`. |
| `commitlint` | PR | Valida mensajes Conventional Commits. |
| `pr-lint` | PR (opened/edited/synchronize) | Valida el titulo del PR. |
| `auto-pr` | PR (opened/synchronize/reopened) | Genera titulo y descripcion del PR. |
| `version-bump` | push a `main` | Bump automatico de version segun tipos de commit (feat/fix/breaking). |
| `validate-kit` | push/PR que toca `.github/**` | Ejecuta `tools/validate-kit.mjs`. |
| `release` | push a `main` | Semantic release (requiere config; revisar antes de usar). |

## Secretos requeridos

| Secreto | Usado por | Proposito |
|---|---|---|
| `LIBRARY_ACCESS_TOKEN` | build, test, lint, deploy-main, deploy-develop | PAT (fine-grained) con permiso Contents: read sobre `Satoshi-librerias/satoshi-rc-ui` para compilar la libreria en CI. |

## Despliegues a GitHub Pages

Pages solo admite un sitio por repositorio: cada deployment reemplaza al anterior. Para que los
despliegues sean independientes por rama sin perder contenido, ambos workflows llaman a un
workflow reutilizado (`pages-reusable.yml`) que construye las DOS ramas y las publica juntas:

| Ruta | Rama | Libreria desde | Rol |
|---|---|---|---|
| `/starter-scaffolding-react-web/` | `main` | rama `main` de la libreria | Produccion. |
| `/starter-scaffolding-react-web/preview/` | `develop` | rama `develop` de la libreria | Staging con banner naranja "develop". |

- Push a `main` dispara `deploy-main.yml`: build de main (primario) + republish de develop.
- Push a `develop` dispara `deploy-develop.yml`: build de develop (primario, banner) + republish de main.
- Ambos comparten el concurrency group `pages` para que los deployments no se pisen.

Requisito de configuracion (una sola vez): Settings → Pages → Source: **GitHub Actions**. Cada build usa `--base` alineado a su ruta final para que los assets resuelvan correctamente.

## Convenciones dentro de `.github`

- **Idioma**: toda la documentacion y comentarios en espanol.
- **Sin caracteres especiales** en documentacion generada: solo letras (con acentos espanoles), numeros, espacios y puntuacion basica (`. , ; : ( ) -`). Sin emojis, flechas ni simbolos decorativos.
- **Skills**: la skill activa (`ops-lifecycle`) vive en su carpeta con `SKILL.md` (flujo conciso) y `reference/` (detalle largo). El `SKILL.md` enlaza a su `reference/` y nunca duplica contenido.
- **Plantillas de skills**: `new-feature` y `new-theme` NO son skills activas; viven en `ops-lifecycle/reference/template/` y se instalan copiandolas cuando el proyecto las necesita.
- **Workflows**: un workflow por concern, con nombre descriptivo y `concurrency` para cancelar runs redundantes.
- **Regla de Git**: el agente nunca ejecuta `git commit` ni `git push`; deja el working tree listo y sugiere los comandos.
- **Documentacion de codigo**: JSDoc obligatorio en exports publicos, sin caracteres especiales, enforceado por ESLint (`eslint-plugin-jsdoc`).
- **Version de la libreria en CI**: los workflows alinean la dependencia `satoshi-rc-ui` del scaffold con la version real de la rama de la libreria que se compila.

## Como usar las skills

La unica skill activa es `ops-lifecycle`; invocala mencionandola por nombre (ej. "usa la skill ops-lifecycle para...") o describiendo la tarea que cubre. El agente la detecta por su `description` en el frontmatter del `SKILL.md`.

| Skill / plantilla | Cuando usarla |
|---|---|
| `ops-lifecycle` (activa) | Gobernanza: planes, especificaciones, decisiones (DEC), releases, handoff de sesion |
| `new-feature` (plantilla) | Instalar como skill al adoptar el flujo de features completas |
| `new-theme` (plantilla) | Instalar como skill al adoptar el flujo de temas DaisyUI |

Para instalar una plantilla como skill activa: copia `reference/template/SKILL.md` a `.github/skills/new-feature/SKILL.md` (o `SKILL-theme.md` a `.github/skills/new-theme/SKILL.md`) junto con su carpeta de referencia.

## Como usar los prompts

Ejecutalos con el comando `/` del chat (ej. `/quality-check`) o pidiendo al agente que siga el archivo `.md` correspondiente.

| Prompt | Cuando usarlo |
|---|---|
| `quality-check` | Antes de abrir PR: pipeline completo local (lint, prettier, tipos, tests, build) con correccion de fallos. |
| `sync-translations` | Al agregar o modificar claves i18n: sincroniza es/en/fr y detecta claves huerfanas. |

## Validacion del kit

Tras editar skills, prompts o su documentacion, ejecuta el validador:

```bash
npm run validate:kit
```

Comprueba: frontmatter de las skills (spec Agent Skills), ids unicos, enlaces internos rotos, tokens de proyectos ajenos, tamano del nucleo y formato del frontmatter. Debe terminar con `validacion del kit OK`. El workflow `validate-kit.yml` lo ejecuta automaticamente cuando un push o PR toca `.github/**`.

## Mantenimiento

- Al agregar un workflow nuevo: actualizalo en la tabla de workflows y en el arbol de esta guia.
- Al agregar una plantilla de skill: colocala en `ops-lifecycle/reference/template/` con frontmatter OKF, enlazala desde el `SKILL.md` de `ops-lifecycle` y corre `npm run validate:kit`.
- Al cambiar secretos o triggers: documenta el cambio en las tablas de arriba.
- La libreria `satoshi-rc-ui` vive en `Satoshi-librerias/satoshi-rc-ui`; este repo nunca commitea sus artefactos (`resource/` esta en `.gitignore`).

## Licencia

El contenido de este directorio se rige por la [Licencia MIT](./LICENSE); el repositorio completo tambien ([LICENSE](../LICENSE) en la raiz).
