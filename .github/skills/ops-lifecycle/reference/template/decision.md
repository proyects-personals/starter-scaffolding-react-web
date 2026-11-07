---
id: TEMPLATE-DEC
tipo: Template
type: Template
title: Plantilla de decision (DEC)
description: Modelo para decisions/DEC-NNN.md.
estado: vigente
dueno: rol:propietario
fecha: 2026-10-25T00:00:00Z
relaciona: [templates-base]
---

---

id: DEC-000 tipo: Decision type: Decision title: <Pregunta> description: <Una linea>
estado: abierta # abierta | tomada | rechazada dueno: rol:propietario fecha: <YYYY-MM-DDThh:mm:ssZ>
relaciona: [] # solo ids existentes status: draft sources: [{ id: rulebook,
resource: <ruta-al-rulebook-del-proyecto>, title: <Rulebook del proyecto> }]
---

## Pregunta

<La pregunta tal como surge de la fuente (reglas, backlog o revision); sin
opciones inventadas si la fuente no las trae.>

Fase en que se necesita: <fase.> Opciones con riesgos en maximo 6 lineas solo si
rol:propietario las pide. Resolucion: <vacia mientras estado = abierta; al
cerrar, decision + fecha + verified por human:propietario.>
