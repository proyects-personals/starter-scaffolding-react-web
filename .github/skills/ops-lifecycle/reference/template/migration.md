---
id: TEMPLATE-MIG
tipo: Template
type: Template
title: Plantilla de migracion (MIG)
description:
  Modelo para data/migrations.md (registro en una tabla) o migraciones con plan
  propio.
estado: vigente
dueno: rol:propietario
fecha: 2026-10-26T00:00:00Z
relaciona: [templates-base]
---

Las migraciones ordinarias viven como filas de la tabla en migrations.md del
arbol data/ (columnas: id, migracion, origen, estado). Solo una migracion con
plan propio merece archivo:

---

id: MIG-000 tipo: Migration type: Migration title: <Cambio de esquema o datos>
description: <Una linea> estado: borrador # borrador | aprobado | aplicada
dueno: rol:db fecha: <YYYY-MM-DDThh:mm:ssZ> relaciona: [] # REQ, BL, DEC o
RUN-NNN (rollback) asociados status: draft
---

## Cambio

<Tabla o columna afectada, tipo de cambio y compatibilidad con el modelo logico
vigente.>

## Aplicar y verificar

<Script y orden de ejecucion; criterio de verificacion posterior.>

## Revertir

<Script inverso o camino de no retorno; si no existe rollback, se dice explicitamente y se enlaza el respaldo previo.>
