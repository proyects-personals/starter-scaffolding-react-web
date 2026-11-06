---
id: data-readme
tipo: Guide
type: Guide
title: Data - datos y migraciones
description:
  Registro de migraciones MIG-NNN y mapa del modelo logico; cubre la disciplina
  DBA.
estado: vigente
dueno: rol:propietario
fecha: <YYYY-MM-DDThh:mm:ssZ>
relaciona: [ops-readme]
status: stable
---

- **Proposito:** cambios de esquema y datos con apply/revert/verify, y el mapa
  del modelo logico compartido.
- **Escribe:** rol:agente (propone) / **Aprueba:** rol:propietario.
- **Cuando:** al tocar el esquema (tablas, columnas, RLS) o migrar datos entre
  entornos.
- **Plantilla:** migration.md via skill ops-lifecycle.

## Documentos (se crean segun necesidad)

| Doc           | Contenido                                                 |
| ------------- | --------------------------------------------------------- |
| migrations.md | registro de MIG-NNN con apply/revert/verify y rollback    |
| data-model.md | mapa de tablas logicas, claves de tenancy y politicas RLS |
