---
id: TEMPLATE-RSK
tipo: Template
type: Template
title: Plantilla de riesgo (RSK)
description:
  Modelo para governance/risks.md (registro en una tabla) o riesgos mayores.
estado: vigente
dueno: rol:propietario
fecha: 2026-10-25T00:00:00Z
relaciona: [templates-base]
---

Los riesgos ordinarios viven como filas de la tabla en risks.md del arbol
governance/ (columnas: id, riesgo, limite, estado, mitigacion). Solo un riesgo
con plan propio merece archivo:

---

id: RSK-000 tipo: Risk type: Risk title: <Riesgo> description: <Una linea>
estado: abierto # abierto | mitigado | cerrado dueno: rol:propietario fecha: <YYYY-MM-DDThh:mm:ssZ>
relaciona: [] # REQ, BL o DEC asociados status: draft sources: [{ id: rulebook,
resource: <ruta-al-rulebook-del-proyecto>, title: <Rulebook del proyecto> }]
---

## Riesgo

<Condicion y consecuencia; cita la seccion de la fuente de donde deriva, si
aplica.>

## Mitigacion y senal de disparo

<Que se hace y que lo activa. No construir mitigacion antes de que duela
(principio 10).>
