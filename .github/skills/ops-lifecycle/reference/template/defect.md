---
id: TEMPLATE-BUG
tipo: Template
type: Template
title: Plantilla de defecto (BUG)
description: Modelo para qa/defects/BUG-NNN.md.
estado: vigente
dueno: rol:propietario
fecha: 2026-10-25T00:00:00Z
relaciona: [templates-base]
---

---

id: BUG-000 tipo: Defect type: Defect title: <Fallo observado> description: <Una linea>
estado: abierto # abierto | corregido | verificado dueno: rol:propietario fecha: <YYYY-MM-DDThh:mm:ssZ>
relaciona: [QT-000] # QT que lo detecto status: draft
---

## Evidencia

<Salida real de la prueba o comando; nunca afirmar sin ejecutar.>

## Causa

<Analisis; si revela una contradiccion en el rulebook o los requisitos, reportar
y no adaptarse en silencio.>

## Fix y verificacion

<Que cambio y que prueba lo confirma; rollback si aplica.>
