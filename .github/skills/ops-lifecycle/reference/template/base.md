---
id: templates-base
tipo: Template
type: Template
title: Contrato de frontmatter de .ops
description: Base OKF 0.2 mas familia .ops; todo documento parte de aqui.
estado: vigente
dueno: rol:propietario
fecha: 2026-06-15T00:00:00Z
relaciona: [ops-readme]
status: stable
verified: 2026-06-15T00:00:00Z
sources:
  [
    {
      id: rulebook,
      resource: <ruta-al-rulebook-del-proyecto>,
      title: <Rulebook del proyecto>,
    },
  ]
---

Todo `.md` de .ops lleva frontmatter YAML con:

1. OKF 0.2 requerido: `type` (no vacio). Recomendado: `title`, `description`,
   `tags`.
2. Familia .ops: `id`, `tipo` (espejo exacto de `type`), `estado`, `dueno` (un
   rol), `fecha`, `relaciona` (solo ids existentes).
3. OKF opcional: `sources` (el contenido sembrado cita el rulebook del proyecto:
   AGENTS.md, README u otro documento de reglas; si no existe, la fuente real de
   donde deriva), `generated` (quien redacta), `verified` (solo el humano al
   aprobar), `status` (mapea de `estado`), `stale_after`.

Vocabulario de `estado` por tipo de id:

- DEC: abierta | tomada | rechazada
- BL: idea | listo | en-curso | en-qa | en-uat | hecho
- QT: pendiente | aprobada | fallida
- REQ: propuesto | aprobado
- RSK: abierto | mitigado | cerrado
- BUG: abierto | corregido | verificado
- IMPL: borrador | aprobado | ejecutado
- REL: borrador | aprobado | ejecutado
- VULN: abierto | mitigado | cerrado | falso-positivo
- RUN: borrador | probado | vigente | obsoleto
- MIG: borrador | aprobado | aplicada

Mapeo `estado` -> `status` (OKF 0.2): idea, listo, en-curso, en-qa, en-uat,
abierta, pendiente, propuesto, borrador, corregido, mitigado, probado, fallida =
`draft`; hecho, vigente, aprobado, tomada, cerrado, verificado, ejecutado,
aplicada = `stable`; obsoleto, reemplazada, rechazada, falso-positivo =
`deprecated`.

Actores (OKF 0.2 seccion 7): agente `copilot-agent/<version>`, humano
`human:<rol>`, proceso `process:<id>`. Roles: `rol:propietario`,
`rol:funcional`, `rol:agente` y los tecnicos (`rol:db`, `rol:sec`, `rol:ops`)
son funciones del ciclo de vida, no puestos de plantilla: el rol tecnico lo
cubre quien tenga esa funcion en el equipo. El detalle vive en
`governance/roles-raci.md` del repo (se crea si no existe). Confianza (OKF 0.2
seccion 5.3): sin `verified` el documento es `unverified`;
`verified: <fecha ISO>` lo anade rol:propietario al aprobar. Los agentes nunca
escriben `verified` por si mismos.

Reglas duras: ids unicos en todo .ops; el contenido sembrado cita en el cuerpo
la seccion del rulebook del proyecto (AGENTS.md, README u otro documento de
reglas; si no hay, la fuente real) de la que deriva; sin secretos ni datos
reales; archivos menores a 40 lineas de contenido; README de carpeta de maximo
15 lineas (el indice raiz puede pasarlas).
