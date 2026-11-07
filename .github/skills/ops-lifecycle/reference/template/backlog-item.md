---
id: TEMPLATE-BL
tipo: Template
type: Template
title: Plantilla de item de backlog (BL)
description: Modelo para project/backlog/BL-NNN.md.
estado: vigente
dueno: rol:propietario
fecha: 2026-10-25T00:00:00Z
relaciona: [templates-base]
---

---

id: BL-000 tipo: BacklogItem type: BacklogItem title: <Titulo corto>
description: <Una linea> estado: idea # idea | listo | en-curso | en-qa | en-uat
| hecho dueno: rol:propietario fecha: <YYYY-MM-DDThh:mm:ssZ> relaciona:
[REQ-000] # regla de trazabilidad: todo BL enlaza un REQ status: draft
---

## Descripcion

<Que se hara; cita la fuente de donde deriva (REQ y su seccion, si la tiene).>

## Criterio de salida

<Textual del REQ de origen o derivado directo de el.>

## IMPL

<Ids IMPL-NNN que ejecutan este BL; vacio hasta que existan.>
