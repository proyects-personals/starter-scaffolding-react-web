---
id: security-readme
tipo: Guide
type: Guide
title: Security - seguridad de la plataforma
description:
  Vulnerabilidades, revisiones de MR y revisiones periodicas; complementa al
  modelo de amenazas de architecture/.
estado: vigente
dueno: rol:propietario
fecha: <YYYY-MM-DDThh:mm:ssZ>
relaciona: [ops-readme]
status: stable
---

- **Proposito:** gestion de hallazgos de seguridad del ciclo de vida:
  registramos, mitigamos y verificamos.
- **Escribe:** rol:agente (propone) / **Aprueba:** rol:propietario.
- **Cuando:** al detectar un hallazgo en un MR, revision periodica o incidente.
- **Plantilla:** vuln.md via skill ops-lifecycle.

## Documentos (se crean segun necesidad)

| Doc          | Contenido                                       |
| ------------ | ----------------------------------------------- |
| vulns.md     | registro de VULN-NNN con severidad y mitigacion |
| mr-review.md | checklist de revision de seguridad para MRs     |
| periodic.md  | revisiones periodicas: dependencias y secretos  |
