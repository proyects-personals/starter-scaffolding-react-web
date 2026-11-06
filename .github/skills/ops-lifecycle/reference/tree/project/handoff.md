---
id: project-handoff
tipo: Guide
type: Guide
title: Handoff - contexto de continuidad entre sesiones
description:
  Documento de soporte para pasar contexto completo a una sesion nueva; el
  agente lo actualiza al cierre de cada tarea.
estado: vigente
dueno: rol:agente
fecha: <YYYY-MM-DDThh:mm:ssZ>
relaciona: [ops-readme, project-readme]
status: stable
---

Documento de soporte (no es codigo): condensa el estado del producto, el entorno
local, los comandos de verificacion y el trabajo pendiente para que una sesion
nueva retome el desarrollo sin reexplorar el repositorio. La politica de
mantenimiento vive en las instrucciones del agente del repo (seccion "Session
handoff policy").

Regla: `.ops` organiza y enlaza; la fuente de verdad del avance es
`PROGRESS.md`. Este handoff resume, no duplica el detalle.

## Secciones (orden fijo, mantener al rellenar)

1. Header (blockquote): fecha real de hoy, rama activa y estado del arbol con
   hashes de commits relevantes.
2. Estado del producto: que es el sistema, fase/release actual, logros
   recientes.
3. Como usarlo: orden de lectura handoff -> PROGRESS.md -> especificacion de la
   fase activa.
4. Entorno local: servicios, puertos, env, credenciales demo, limitaciones del
   entorno (no defectos del producto).
5. Como levantar y verificar: comandos compose/test/E2E, que exige rebuild vs
   hot reload.
6. Mapa de documentos: tabla de documentos de soporte y cuando se actualiza cada
   uno.
7. Trabajo en curso y pendiente: lista priorizada; cada item indica si necesita
   codigo.
8. Historial de sesiones: una fila por sesion (alcance y resultado).

Bootstrap: copiar este archivo a `.ops/project/` del nuevo repo y rellenar las
secciones 2-8; la estructura y las reglas son reutilizables tal cual.
