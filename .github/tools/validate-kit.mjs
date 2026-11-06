#!/usr/bin/env node
// Validador del kit de personalizacion. Node >= 18, sin dependencias.
// Comprueba: frontmatter de SKILL.md (spec Agent Skills), ids unicos, enlaces
// internos, tokens de proyectos ajenos, tamano del nucleo, dependencia dura de
// AGENTS.md (el kit funciona sin el), citas fragiles a reglas por numero y
// formato estandarizado de `fecha`.
// Limitacion conocida: los checks de frontmatter (id, fecha) y dependencias son
// regex sobre texto plano, no parseo YAML completo; si cambia la estructura del
// frontmatter, revisalos a mano.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, resolve, basename, relative } from "node:path";
import { fileURLToPath } from "node:url";

const kitRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const PROJECT_TOKENS = [
  "digitalme",
  "danilo",
  "usfq",
  "3ea12c7",
  "bge-m3",
  "multilingual-e5",
  "pgvector",
  "fastapi",
  "langgraph",
  "13000",
  "18000",
  "15432",
  "8100",
  "18081",
];
const CORE_MAX_LINES = 80;
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const errors = [];

const rel = (p) => relative(kitRoot, p).split("\\").join("/");
const read = (p) => readFileSync(p, "utf8");

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function frontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  if (!m) return {};
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z_-]+):\s*(.*)$/.exec(line);
    if (kv) fm[kv[1]] = kv[2].trim();
  }
  return fm;
}

// 1. SKILL.md conforme a la especificacion de Agent Skills
const skillPath = join(kitRoot, "skills", "ops-lifecycle", "SKILL.md");
if (!existsSync(skillPath)) {
  errors.push("falta skills/ops-lifecycle/SKILL.md");
} else {
  const fm = frontmatter(read(skillPath));
  const dirName = basename(dirname(skillPath));
  if (!fm.name || !NAME_RE.test(fm.name)) {
    errors.push(
      `SKILL.md: name invalido ("${fm.name ?? ""}"); debe cumplir ${NAME_RE}`,
    );
  } else if (fm.name.length > 64) {
    errors.push(`SKILL.md: name excede 64 caracteres (${fm.name.length})`);
  } else if (fm.name !== dirName) {
    errors.push(
      `SKILL.md: name "${fm.name}" no coincide con el directorio "${dirName}"`,
    );
  }
  const desc = (fm.description ?? "").replace(/^["']|["']$/g, "");
  if (!desc) errors.push("SKILL.md: falta description");
  else if (desc.length > 1024)
    errors.push(
      `SKILL.md: description excede 1024 caracteres (${desc.length})`,
    );
}

// 2. Ids unicos en todos los .md
const mdFiles = walk(kitRoot).filter((f) => f.endsWith(".md"));
const seenIds = new Map();
for (const f of mdFiles) {
  const id = frontmatter(read(f)).id;
  if (!id) continue;
  if (seenIds.has(id))
    errors.push(`id duplicado "${id}": ${rel(seenIds.get(id))} y ${rel(f)}`);
  else seenIds.set(id, f);
}

// 3. Enlaces relativos internos no rotos
for (const f of mdFiles) {
  const dir = dirname(f);
  for (const m of read(f).matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
    let target = m[1];
    if (/^(https?:|mailto:|#)/i.test(target)) continue;
    target = target.split("#")[0];
    if (!target || target.includes("<")) continue;
    if (!existsSync(resolve(dir, target)))
      errors.push(`${rel(f)}: enlace roto -> ${target}`);
  }
}

// 4. Sin tokens de proyecto (el propio validador queda excluido)
const tokenFiles = walk(kitRoot).filter(
  (f) =>
    !f.startsWith(join(kitRoot, "tools")) &&
    (f.endsWith(".md") ||
      f.endsWith(".yml") ||
      f.endsWith(".yaml") ||
      basename(f) === "LICENSE"),
);
for (const f of tokenFiles) {
  const text = read(f).toLowerCase();
  for (const token of PROJECT_TOKENS) {
    if (text.includes(token))
      errors.push(`${rel(f)}: token de proyecto "${token}"`);
  }
}

// 5. Nucleo de instrucciones dentro del limite
const corePath = join(kitRoot, "copilot-instructions.md");
if (!existsSync(corePath)) {
  errors.push("falta copilot-instructions.md");
} else {
  const lines = read(corePath).split(/\r?\n/).length;
  if (lines > CORE_MAX_LINES) {
    errors.push(
      `copilot-instructions.md: ${lines} lineas (maximo ${CORE_MAX_LINES})`,
    );
  }
}

// 6. Sin dependencia dura del rulebook: el kit funciona sin AGENTS.md
const AGENTS_HARD_DEPS = [
  /resource:\s*\.\.\/\.\.\/AGENTS\.md/i,
  /seccion\s+\d+\s+de\s+AGENTS\.md/i,
  /AGENTS\.md\s+seccion\s+\d+/i,
  /regla\s+\d+\s+de\s+la\s+seccion\s+0/i,
  /secciones?\s+\d+\s+(u|y)\s+\d+/i,
];
// 7. Auto-referencias fragiles: las plantillas citan reglas por su texto corto,
// nunca por numero (la numeracion de "Reglas duras" puede reordenarse).
const FRAGILE_RULE_REFS = [
  /regla\s+\d+/i,
  /reglas?\s+\d+\s+y\s+\d+/i,
  /\(regla\s+\d+\)/i,
];
for (const f of mdFiles) {
  const text = read(f);
  for (const pattern of AGENTS_HARD_DEPS) {
    if (pattern.test(text)) {
      errors.push(
        `${rel(f)}: dependencia dura de AGENTS.md -> ${pattern.source}`,
      );
    }
  }
  for (const pattern of FRAGILE_RULE_REFS) {
    if (pattern.test(text)) {
      errors.push(
        `${rel(f)}: cita fragil de regla por numero -> "${pattern.exec(text)[0]}"`,
      );
    }
  }
  const fmText = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  if (fmText) {
    const fecha = /^fecha:\s*(.+)$/m.exec(fmText[1]);
    if (fecha) {
      const v = fecha[1].trim();
      const ts = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(v);
      const ph = /^<YYYY-MM-DDThh:mm:ssZ>$/.test(v);
      if (!ts && !ph)
        errors.push(`${rel(f)}: fecha no estandarizada -> "${v}"`);
    }
  }
}

if (errors.length) {
  console.error(`validacion del kit: ${errors.length} error(es)`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`validacion del kit OK: ${mdFiles.length} archivos .md revisados`);
