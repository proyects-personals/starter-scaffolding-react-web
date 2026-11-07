---
id: templates-readme
tipo: Guide
type: Guide
title: Plantillas de .ops
description: Una plantilla por tipo de documento; el contrato vive en base.md.
estado: vigente
dueno: rol:propietario
fecha: 2026-06-15T00:00:00Z
relaciona: [templates-base]
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

- **Proposito:** modelos de frontmatter y cuerpo por tipo de documento.
- **Escribe:** rol:agente / **Aprueba:** rol:propietario.
- **Cuando:** al crear cualquier documento de .ops.

| Plantilla                              | Para                                                    |
| -------------------------------------- | ------------------------------------------------------- |
| [base.md](base.md)                     | contrato OKF 0.2 y vocabulario de estados               |
| [readme-model.md](readme-model.md)     | README de carpeta (maximo 15 lineas)                    |
| [decision.md](decision.md)             | DEC en decisions/                                       |
| [requirement.md](requirement.md)       | REQ en product/requirements/                            |
| [backlog-item.md](backlog-item.md)     | BL en project/backlog/                                  |
| [implementation.md](implementation.md) | especificaciones de implementations/                    |
| [test-case.md](test-case.md)           | QT de qa/                                               |
| [defect.md](defect.md)                 | BUG de qa/                                              |
| [risk.md](risk.md)                     | RSK con plan propio                                     |
| [vuln.md](vuln.md)                     | VULN en security/vulns.md                               |
| [run.md](run.md)                       | RUN en operations/runbooks.md                           |
| [migration.md](migration.md)           | MIG en data/migrations.md                               |
| [release.md](release.md)               | REL en operations/releases.md                           |
| [guide.md](guide.md)                   | guias sin numeracion en development/                    |
| PROGRESS.md (raiz del repo)            | log de avance; se crea en bootstrap, no tiene plantilla |
