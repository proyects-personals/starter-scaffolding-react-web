---
id: tpl-new-feature
tipo: Plantilla
title: Plantilla de skill para features
description: Esqueleto completo de la skill new-feature; copiar a .github/skills/new-feature/SKILL.md al adoptarla.
estado: vigente
relaciona: [ops-readme]
status: stable
---

# Plantilla: skill `new-feature`

## Proposito

Definir el flujo estandarizado para implementar una feature de punta a punta sin romper la arquitectura del proyecto. Esta plantilla se copia a `.github/skills/new-feature/SKILL.md` cuando el repo la adopta; no se usa directamente desde aqui.

## Reglas transversales

| # | Regla | Detalle |
|---|---|---|
| 1 | Responsive con Tailwind | Toda la UI usa breakpoints (`sm:`, `md:`, `lg:`, `xl:`) y se verifica en movil, tablet y desktop. |
| 2 | Estructura en capas | La UI en `presentation/`; la logica en `domain/`, `application/`, `infrastructure/`. Nunca saltarse capas. |
| 3 | Pruebas unitarias | Todo lo agregado lleva su test junto al codigo; una feature sin tests esta incompleta. |
| 4 | Documentacion JSDoc | Todo export publico con bloque JSDoc; sin caracteres especiales en la descripcion. |

## Flujo de trabajo

### Paso 1. Ubicar la logica segun su capa

| Capa | Ruta | Contenido |
|---|---|---|
| domain | `src/app/domain/` | Reglas de negocio y entidades (crear `index.ts` barrel si no existe). |
| application | `src/app/application/` | Casos de uso y orquestacion. |
| infrastructure | `src/app/infrastructure/` | Adaptadores externos (API, storage). |
| presentation | `src/app/presentation/` | Componentes React y paginas (UI reutilizable en `shared/`). |

Regla de dependencias: presentation consume application; application consume domain. Nunca al reves.

### Paso 2. Implementar la UI

- Consumir componentes de `satoshi-rc-ui` (Button, Container, Header, Card); no recrearlos.
- Tipar cada componente: `export default function X(): JSX.Element`.
- Clases Tailwind 4 + tokens de DaisyUI (`bg-base-100`, `text-base-content`).
- Responsive obligatorio: `flex flex-col md:flex-row`, `grid grid-cols-1 lg:grid-cols-3`, tipografia escalonada (`text-base lg:text-lg`).

### Paso 3. Internacionalizar

1. Anadir las claves nuevas a los TRES catalogos con el mismo anidamiento: `src/assets/i18n/locales/es.json`, `en.json`, `fr.json`.
2. Consumir con `const { t } = useLanguage()` y `t("mi.seccion.clave")`.
3. Si el catalogo tipado lo exige, actualizar `translations.ts`.

### Paso 4. Theming (solo si la feature introduce colores propios)

1. Crear o ajustar el tema como `CustomThemeDefinition` con `{ name, manifest, daisyUI }`; plantilla en `src/assets/styles/theme/light.theme.ts`.
2. Registrar en `CUSTOM_THEMES` (`theme.ts`) y exportar en `index.ts`.
3. Anadir `themes.<tema>.name` y `themes.<tema>.description` a los 3 locales.
4. NO usar la propiedad `colors`: la version 1.0.0 de la libreria no la soporta (error `TS2353`).

### Paso 5. Tests (obligatorios)

- Test junto al codigo: `src/<ruta>/<nombre>.test.ts(x)` (Jest + Testing Library, jsdom).
- Cubrir: renderizado, logica de negocio y casos limite relevantes.
- El test respeta la misma estructura en capas del codigo que prueba.
- Ejecutar solo lo afectado: `npm test -- <patron>`.

### Paso 6. Documentar con JSDoc

- Bloque JSDoc en todo export publico: `@description`, `@author Steveen Cues`, `@version`, y `@param` / `@returns` cuando aplique (sin tipos inline).
- La descripcion solo admite letras (con acentos espanoles), numeros, espacios y puntuacion basica (`. , ; : ( ) -`); sin emojis ni simbolos (regla `jsdoc/match-description`).

### Paso 7. Validar antes de terminar

```bash
npm run lint:check && npm run type-check && npm test -- --ci && npm run build
```

## Regla de Git (obligatoria)

El agente NUNCA ejecuta `git commit`, `git push`, `git merge`, `git rebase` ni comandos que modifiquen el historial o el remoto. Al terminar, deja los cambios en el working tree, muestra `git status` y sugiere el comando de commit.

## Convencion de commit sugerida

| Tipo de cambio | Formato | Ejemplo |
|---|---|---|
| CI, workflows, libreria | `ci(referencia): commit` | `ci(build): ajustar checkout de la libreria` |
| Funcionalidad nueva | `feat(ambito): commit` | `feat(temas): agregar selector de temas` |

## Referencias

| Recurso | Ruta |
|---|---|
| Plantillas de componente, test y caso de uso | [patterns.md](./new-feature/patterns.md) |
| Instrucciones globales del agente | `.github/copilot-instructions.md` del repo que adopta |
| Ejemplo de feature completa | `src/app/presentation/App.tsx` |
| Ejemplo de tema | `src/assets/styles/theme/dark.theme.ts` |
