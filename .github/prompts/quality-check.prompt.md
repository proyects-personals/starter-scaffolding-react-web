---
description: 'Ejecutar el pipeline completo de calidad local (lint, prettier, tipos, tests, build) y corregir lo que falle'
---

Ejecuta el pipeline de calidad del proyecto en orden y corrige cualquier fallo antes de continuar al siguiente paso:

1. `npm run lint:check` — si falla, aplica `npm run lint` y corrige los problemas restantes manualmente (sin desactivar reglas).
2. `npx prettier --check "src/**/*.{ts,tsx,js,jsx,json,css,scss,md}"` — si falla, ejecuta `npm run format`.
3. `npm run type-check` — corrige los errores de tipos sin usar `any` ni suprimir con `@ts-ignore`.
4. `npm test -- --ci` — corrige tests rotos; si un cambio de comportamiento lo justifica, actualiza el test y explícalo.
5. `npm run build` — debe terminar en verde.

Reporta al final un resumen de qué fallaba y qué corregiste. No hagas cambios no relacionados con los fallos encontrados. **No ejecutes `git commit` ni `git push`**: deja los cambios en el working tree y muestra el `git status` final para que el usuario decida.
