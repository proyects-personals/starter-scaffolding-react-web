---
id: operations-readme
tipo: Guide
type: Guide
title: Operations - operacion y releases
description:
  Runbooks, releases, objetivos de servicio e incidentes; cubre devops y
  sre-observabilidad.
estado: vigente
dueno: rol:propietario
fecha: <YYYY-MM-DDThh:mm:ssZ>
relaciona: [ops-readme]
status: stable
---

- **Proposito:** como se opera la plataforma: runbooks, releases y la vista de
  servicio (objetivos e incidentes).
- **Escribe:** rol:agente (propone) / **Aprueba:** rol:propietario.
- **Cuando:** al ejecutar una operacion recurrente, desplegar o revisar
  objetivos de servicio.
- **Plantillas:** run.md y release.md via skill ops-lifecycle.

## Documentos (se crean segun necesidad)

| Doc         | Contenido                                                         |
| ----------- | ----------------------------------------------------------------- |
| runbooks.md | registro de RUN-NNN: respaldo, restauracion, rotacion de secretos |
| releases.md | registro de REL-NNN por entorno con verificacion post-despliegue  |
| service.md  | objetivos de servicio y vista de incidentes                       |
