---
id: project-readme
tipo: Guide
type: Guide
title: Project - plan, backlog y avance
description:
  Plan de fases, backlog de epicas y contexto de continuidad; el log dia a dia
  vive en PROGRESS.md.
estado: vigente
dueno: rol:propietario
fecha: <YYYY-MM-DDThh:mm:ssZ>
relaciona: [ops-readme, project-handoff]
status: stable
---

- **Proposito:** planificar las fases, mantener el backlog de epicas y pasar
  contexto entre sesiones.
- **Escribe:** rol:agente / **Aprueba:** rol:propietario (cambios de plan o
  alcance).
- **Cuando:** al iniciar una fase, al desglosar una epica y al cerrar una fase
  (checklist del DoD).

## Documentos (se crean en bootstrap)

- `plan.md` - fases con alcance y estado.
- `backlog/index.md` - epicas por fase; los BL se desglosan al entrar en la
  fase.
- `handoff.md` - contexto de arranque para nuevas sesiones.
- Avance: `PROGRESS.md` en la raiz del repositorio; este arbol no lo duplica.
