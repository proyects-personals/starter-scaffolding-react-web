---
id: decisions-readme
tipo: Guide
type: Guide
title: Decisions - registro de decisiones
description:
  Ciclo de vida de las decisiones del rulebook del proyecto; una DEC por
  archivo, abierta -> tomada/rechazada.
estado: vigente
dueno: rol:propietario
fecha: <YYYY-MM-DDThh:mm:ssZ>
relaciona: [ops-readme]
status: stable
---

- **Proposito:** registrar el ciclo de vida de las decisiones: abierta ->
  tomada/rechazada, con resolucion verificada por humano.
- **Escribe:** rol:agente (propone, documenta la resolucion) / **Aprueba:**
  rol:propietario (toma la decision; el agente nunca cierra una DEC por si
  mismo).
- **Cuando:** al abrir una decision antes de la fase que la requiera y al
  cerrarla con la respuesta del propietario.

## Indice

| DEC     | Pregunta   | Estado  |
| ------- | ---------- | ------- |
| DEC-000 | <pregunta> | abierta |

Regla: el indice refleja el frontmatter de cada DEC; la narrativa de cuando y
como se decidio vive en `PROGRESS.md`.
