---
id: TEMPLATE-RUN
tipo: Template
type: Template
title: Plantilla de runbook (RUN)
description:
  Modelo para operations/runbooks.md o procedimientos operativos propios.
estado: vigente
dueno: rol:propietario
fecha: 2026-10-26T00:00:00Z
relaciona: [templates-base]
---

Los runbooks corrientes viven como filas de la tabla en runbooks.md del arbol
operations/ (columnas: id, runbook, disparador, estado). Solo un procedimiento
con pasos propios merece archivo:

---

id: RUN-000 tipo: Runbook type: Runbook title: <Operacion> description: <Una linea>
estado: borrador # borrador | probado | vigente | obsoleto dueno: rol:ops fecha: <YYYY-MM-DDThh:mm:ssZ>
relaciona: [] # RUN, RSK, VULN o DEC asociados status: draft
---

## Disparador y objetivo

<Cuando se ejecuta, que logra y en cuanto tiempo debe terminar.>

## Procedimiento

1. <Paso con comando exacto; ningun paso sin comando o sin criterio de exito.>
2. <Ordenado de lo mas seguro a lo mas destructivo; el rollback se enlaza, no se
   repite.>

## Verificacion y cierre

<Como se confirma que la operacion logro su objetivo; quien marca `probado` y
`vigente`. Un RUN `probado` exige al menos una ejecucion real registrada en
PROGRESS.md.>
