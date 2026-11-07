---
id: TEMPLATE-GUIDE
tipo: Template
type: Template
title: Plantilla de guia (sin prefijo de id)
description:
  Modelo para guias de development/ y documentos de practica sin numeracion.
estado: vigente
dueno: rol:propietario
fecha: 2026-10-26T00:00:00Z
relaciona: [templates-base]
---

Las guias no llevan numeracion global: su `id` es `<nombre>-<tema>` (p. ej.
`dev-code-review`). Un documento de guia completo es:

---

id: <carpeta>-<tema> tipo: Guide type: Guide title: <Tema> description: <Una linea>
estado: vigente # vigente | obsoleto dueno: rol:<disciplina> fecha: <YYYY-MM-DDThh:mm:ssZ>
relaciona: [] # REQ, BL, DEC o CONV asociados status: stable
---

## Reglas

<Reglas cortas y accionables; cada regla dice que se espera y como se verifica.>

## Checklist

- [ ] <Item verificable de la guia.>

Las guias son practice: si una regla no se puede verificar con un checklist, es
aspiracion y sobra. La revision humana asigna `verified`; el agente nunca lo
escribe.
