---
name: new-feature
description: 'Crear una feature completa en este scaffold respetando la arquitectura en capas (domain/application/infrastructure/presentation), i18n en 3 idiomas y theming de satoshi-rc-ui. Use when: agregar feature, nueva pantalla, nuevo componente, añadir funcionalidad.'
argument-hint: 'descripción de la feature'
---

# Nueva Feature en el Scaffold

Flujo para implementar una feature de punta a punta sin romper la arquitectura.

## Pasos

### 1. Ubicar la lógica según su capa

- Reglas de negocio y entidades → `src/app/domain/` (crear `index.ts` barrel si no existe).
- Casos de uso / orquestación → `src/app/application/`.
- Adaptadores externos (API, storage) → `src/app/infrastructure/`.
- Componentes React y páginas → `src/app/presentation/` (o `presentation/shared/` para UI reutilizable, alias `@shared`).

Nunca importar de una capa superior a una inferior. Presentation consume application; application consume domain.

### 2. Implementar la UI

- Consumir componentes de `satoshi-rc-ui` (Button, Container, Header, Card, etc.); no recrearlos.
- Tipar cada componente: `export default function X(): JSX.Element`.
- Usar clases utilitarias de Tailwind 4 + tokens de DaisyUI (`bg-base-100`, `text-base-content`, etc.) como en `App.tsx`.

### 3. Internacionalizar

1. Añadir las claves nuevas a los TRES catálogos: `src/assets/i18n/locales/es.json`, `en.json`, `fr.json` (mismo nivel de anidamiento).
2. Consumir con `const { t } = useLanguage()` y `t("mi.seccion.clave")`.
3. Si el catálogo tipado lo exige, actualizar `translations.ts`.

### 4. Theming (solo si la feature introduce colores propios)

1. Crear/ajustar el tema como `CustomThemeDefinition` con `{ name, manifest, daisyUI }` — ver `src/assets/styles/theme/light.theme.ts` como plantilla.
2. Registrar en `CUSTOM_THEMES` dentro de `src/assets/styles/theme/theme.ts` y exportar en `index.ts`.
3. Añadir `themes.<tema>.name` y `themes.<tema>.description` a los 3 locales.
4. NO usar la propiedad `colors`: la versión instalada de la librería (1.0.0) no la soporta.

### 5. Tests

- Test junto al código: `src/<ruta>/<nombre>.test.ts(x)` (Jest + Testing Library, jsdom).
- Setup global en `jest.setup.ts` (`@testing-library/jest-dom` ya disponible).
- Ejecutar solo lo afectado: `npm test -- <patron>`.

### 6. Validar antes de terminar

```bash
npm run lint:check && npm run type-check && npm test -- --ci && npm run build
```

Todo debe pasar en verde; `build` incluye `tsc --noEmit`.

## Referencias

- Arquitectura y convenciones: `.github/copilot-instructions.md`
- Ejemplo de feature completa (UI + i18n): `src/app/presentation/App.tsx`
- Ejemplo de tema: `src/assets/styles/theme/dark.theme.ts`
