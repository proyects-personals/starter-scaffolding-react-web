---
id: TEMPLATE-VULN
tipo: Template
type: Template
title: Plantilla de vulnerabilidad (VULN)
description:
  Modelo para security/vulns.md (registro en una tabla) o hallazgos con plan.
estado: vigente
dueno: rol:propietario
fecha: 2026-10-26T00:00:00Z
relaciona: [templates-base]
---

Los hallazgos ordinarios viven como filas de la tabla en vulns.md del arbol
security/ (columnas: id, hallazgo, severidad, estado, mitigacion). Solo un
hallazgo con plan propio merece archivo:

---

id: VULN-000 tipo: Vulnerability type: Vulnerability title: <Hallazgo>
description: <Una linea> estado: abierto # abierto | mitigado | cerrado |
falso-positivo dueno: rol:sec fecha: <YYYY-MM-DDThh:mm:ssZ> relaciona: [] #
RSK-NNN, REQ, BL o DEC asociados status: draft
---

## Hallazgo

<Que es, donde se encontro y como se reproduciria. Sin datos reales ni
secretos.>

## Impacto y severidad

<Superficie afectada (RLS, tenancy, MCP, web) y por que el nivel asignado.>

## Mitigacion

<Cambio propuesto, BL que lo ejecuta y senal de cierre. Un VULN cerrado exige
mitigacion aplicada o descarte razonado.>
