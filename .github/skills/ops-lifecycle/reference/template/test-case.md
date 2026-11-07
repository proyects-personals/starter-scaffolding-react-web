---
id: TEMPLATE-QT
tipo: Template
type: Template
title: Plantilla de caso de prueba (QT)
description: Modelo para qa/test-cases/QT-NNN.md.
estado: vigente
dueno: rol:propietario
fecha: 2026-10-25T00:00:00Z
relaciona: [templates-base]
---

---

id: QT-000 tipo: TestCase type: TestCase title: <Nombre de la prueba>
description: <Una linea> estado: pendiente # pendiente | aprobada | fallida
dueno: rol:propietario fecha: <YYYY-MM-DDThh:mm:ssZ> relaciona: [REQ-000] #
regla de trazabilidad: todo QT enlaza un REQ status: draft fase: <0-5>
---

## Objetivo

<Que verifica; cita la seccion del REQ de origen. Precondiciones si aplica.>

## Caso que debe pasar

<Pasos y resultado esperado.>

## Caso que debe ser rechazado

<Toda prueba incluye un caso adversarial; cita la regla del rulebook que lo
exige, si existe.>
