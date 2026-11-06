---
id: qa-readme
tipo: Guide
type: Guide
title: QA - calidad y trazabilidad
description: Estrategia de pruebas, matriz de trazabilidad y defectos.
estado: vigente
dueno: rol:propietario
fecha: <YYYY-MM-DDThh:mm:ssZ>
relaciona: [ops-readme]
status: stable
---

- **Proposito:** definir que se prueba y como, mantener la trazabilidad
  REQ-BL-IMPL-QT y registrar defectos.
- **Escribe:** rol:agente (ejecuta y registra) / **Aprueba:** rol:propietario
  (estados verificados).
- **Cuando:** al escribir las pruebas de una fase (antes de implementar) y al
  cerrar fase.

## Documentos (se crean en bootstrap)

- `strategy.md` - alcance, reglas de ejecucion y cuadro de mando por fase.
- `traceability.md` - matriz de cobertura con evidencia de ejecucion.

## Defectos

Los BUG se abren como archivos `BUG-NNN.md` con la plantilla defect.md (via
skill ops-lifecycle) y se listan aqui; cada BUG exige evidencia real de
ejecucion.
