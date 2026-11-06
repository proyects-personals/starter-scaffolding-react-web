---
id: ops-readme
tipo: Guide
type: Guide
title: .ops - gobierno del ciclo de vida
description:
  Metadatos de gestion y gobernanza del proyecto; el conocimiento de la
  plataforma vive en el codigo del producto.
estado: vigente
dueno: rol:propietario
fecha: <YYYY-MM-DDThh:mm:ssZ>
relaciona: []
status: stable
---

Contrato OKF 0.2 (plantillas, vocabulario de estados, actores y confianza): el
archivo `base.md` original del kit no esta incluido en este repo; el vocabulario
de estados vigente vive en el SKILL.md de la skill `ops-lifecycle`. Fuente de
verdad del avance: `PROGRESS.md` en la raiz del repositorio; `.ops` lo organiza
y enlaza, nunca lo duplica ni lo sustituye.

## Areas y arboles

| Arbol              | Contenido                                                 | README                                                             |
| ------------------ | --------------------------------------------------------- | ------------------------------------------------------------------ |
| product/           | REQ y vision de producto                                  | [product/README.md](product/README.md)                             |
| project/           | plan de fases, backlog, handoff y avance                  | [project/README.md](project/README.md)                             |
| architecture/      | overview, NFR y modelo de amenazas                        | [architecture/README.md](architecture/README.md)                   |
| decisions/         | registro de decisiones abiertas y cerradas                | [decisions/README.md](decisions/README.md)                         |
| governance/        | carta, RACI, DoR/DoD, control de cambios y riesgos        | [governance/README.md](governance/README.md)                       |
| qa/                | estrategia, trazabilidad REQ-BL-IMPL-QT y defectos        | [qa/README.md](qa/README.md)                                       |
| implementations/   | especificaciones y verificacion por fase                  | [implementations/README.md](implementations/README.md)             |
| ux-and-interfaces/ | CLI, salidas y usabilidad                                 | [ux-and-interfaces/README.md](ux-and-interfaces/README.md)         |
| security/          | vulnerabilidades, revision de MRs y revisiones periodicas | [security/README.md](security/README.md)                           |
| operations/        | runbooks, releases, objetivos de servicio e incidentes    | [operations/README.md](operations/README.md)                       |
| data/              | migraciones, modelo logico y mapa de tenancy              | [data/README.md](data/README.md)                                   |
| development/       | guias de codigo, revision, ramas y onboarding             | [development/README.md](development/README.md)                     |
| templates/         | plantilla base y plantillas por tipo de documento         | templates/README.md (se genera en bootstrap desde readme-model.md) |

## Reglas del arbol

Las reglas duras del formato (estados, ids, confianza, enlaces) viven solo en el
`SKILL.md` de la skill `ops-lifecycle`; este arbol las aplica y no las repite.
Los cambios al rulebook del proyecto requieren aprobacion humana
(governance/change-control.md del repo).
