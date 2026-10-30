---
description: 'Sincronizar una clave de traducción nueva en los catálogos es/en/fr manteniendo paridad estructura'
---

Sincroniza los catálogos de traducción del proyecto:

1. Lee `src/assets/i18n/locales/es.json`, `en.json` y `fr.json`.
2. Detecta claves presentes en un idioma y ausentes en otro (compara recursivamente el árbol JSON).
3. Para cada clave faltante, propón una traducción coherente con el tono del idioma destino y añádela en la MISMA posición jerárquica que en el idioma de referencia (es).
4. Mantén el formato existente: indentación de 2 espacios, `ensure_ascii` desactivado para acentos, salto de línea final.
5. Verifica que las claves usadas en el código (`t("...")` en `src/`) existan en los tres catálogos; lista cualquier clave huérfana (usada en código pero sin entrada, o definida pero sin uso).

Muestra un resumen de claves añadidas por idioma y de inconsistencias detectadas.
