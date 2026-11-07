---
id: TEMPLATE-REL
tipo: Template
type: Template
title: Plantilla de release (REL)
description:
  Modelo para operations/releases.md (registro en una tabla) o releases con plan
  propio.
estado: vigente
dueno: rol:propietario
fecha: 2026-10-26T00:00:00Z
relaciona: [templates-base]
---

Los releases ordinarios viven como filas de la tabla en releases.md del arbol
operations/ (columnas: id, release, contenido, estado). Solo un release con plan
propio merece archivo:

---

id: REL-000 tipo: Release type: Release title: <Release> description: <Una linea>
estado: borrador # borrador | aprobado | ejecutado dueno: rol:ops fecha: <YYYY-MM-DDThh:mm:ssZ>
relaciona: [] # BL, BUG y VULN incluidos en el release status: draft
---

## Contenido y orden

<Que BL y BUG incluye, con su estado de QA; se bloquea si queda un QT `fallida`
sin decidir.>

## Despliegue

<Entornos, orden de componentes y comando o RUN-NNN que ejecuta el despliegue.>

## Verificacion post-despliegue

<Checks de salud, senal de exito y rollback; cierra con `ejecutado` solo tras
verificar en produccion.>
