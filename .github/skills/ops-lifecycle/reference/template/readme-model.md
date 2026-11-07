---
id: README-000
tipo: Guide
type: Guide
title: Plantilla de README de carpeta
description: Modelo de maximo 15 lineas para el README.md de cada carpeta.
estado: vigente
dueno: rol:propietario
fecha: 2026-06-15T00:00:00Z
relaciona: [templates-base]
status: stable
verified: 2026-06-15T00:00:00Z
sources:
  [
    {
      id: rulebook,
      resource: <ruta-al-rulebook-del-proyecto>,
      title: <Rulebook del proyecto>,
    },
  ]
---

Copiar como `README.md` de la carpeta con `id` = `<carpeta>-readme` (p. ej.
`qa-defects-readme`).

Frontmatter minimo: `id`, `tipo: Guide`, `type: Guide`, `title`, `description`
(una linea), `estado: vigente`, `dueno: rol:propietario`, `fecha` (timestamp
completo ISO 8601: `YYYY-MM-DDThh:mm:ssZ`), `relaciona`, `status: stable`. El
frontmatter se copia de la plantilla y se ajustan solo los campos propios;
`status` se deriva de `estado` (mapeo en base.md).

Cuerpo de 4 lineas:

- **Proposito:** que guarda la carpeta y cuando se usa.
- **Escribe:** rol:agente (propone) / **Aprueba:** rol:propietario.
- **Cuando se usa:** momento del ciclo de vida.
- **Plantilla:** /templates/<archivo>.md
