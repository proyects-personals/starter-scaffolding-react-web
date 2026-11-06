import js from "@eslint/js";
import globals from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import unicorn from "eslint-plugin-unicorn";
import jsdoc from "eslint-plugin-jsdoc";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // =======================
  // Base JS
  // =======================
  js.configs.recommended,

  // =======================
  // TypeScript
  // =======================
  {
    files: ["**/*.{ts,tsx}"],
     ignores: ["**/*.test.ts", "**/*.test.tsx"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      "@typescript-eslint": tsPlugin,
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      unicorn,
      jsdoc,
    },

    settings: {
      react: { version: "detect" },
      "import/resolver": { typescript: true },
    },

    rules: {
      /* =====================================================
       * PROHIBIDO: any / unknown / as / null assertions
       * ===================================================== */
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "never" }],
      "@typescript-eslint/no-non-null-assertion": "error",

      /* =====================================================
       * Tipado estricto
       * ===================================================== */
      "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: false }],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",

      /* =====================================================
       * Código NO usado → WARNING
       * ===================================================== */
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      "import/no-duplicates": "warn",
      "import/no-cycle": "warn",
      "import/no-unused-modules": ["warn", { unusedExports: true }],

      /* =====================================================
       * React
       * ===================================================== */
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "react/jsx-key": "error",
      "react/no-array-index-key": "error",
      "react/self-closing-comp": "warn",

      /* =====================================================
       * Hooks
       * ===================================================== */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      /* =====================================================
       * Magic Numbers
       * ===================================================== */
      "no-magic-numbers": [
        "error",
        { ignore: [0, 1], ignoreArrayIndexes: true, ignoreDefaultValues: true, enforceConst: true },
      ],

      /* =====================================================
       * Código limpio
       * ===================================================== */
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "no-implicit-coercion": "error",

      /* =====================================================
       * Imports ordenados
       * ===================================================== */
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      /* =====================================================
       * Unicorn (modern best practices)
       * ===================================================== */
      "unicorn/prefer-node-protocol": "error",
      "unicorn/no-useless-undefined": "error",
      "unicorn/consistent-function-scoping": "warn",

      /* =====================================================
       * JSDoc (documentacion generada con JSDoc)
       * - Exige bloque JSDoc en exports publicos.
       * - Exige las etiquetas del convenio del proyecto.
       * - La documentacion NO debe contener caracteres especiales
       *   (solo letras, numeros, espacios y puntuacion basica).
       * ===================================================== */
      "jsdoc/require-jsdoc": [
        "error",
        {
          contexts: [
            "ExportedFunctionDeclaration",
            "ExportedClassDeclaration",
            "ExportedVariableDeclaration",
            "ExportedInterfaceDeclaration",
            "ExportedTypeDeclaration",
          ],
        },
      ],
      "jsdoc/require-description": ["error", { descriptionStyle: "tag" }],
      "jsdoc/require-description-complete-sentence": "off",
      "jsdoc/check-param-names": "error",
      "jsdoc/check-tag-names": ["error", { definedTags: [] }],
      "jsdoc/require-param": "error",
      "jsdoc/require-param-type": "off",
      "jsdoc/require-returns": "error",
      "jsdoc/require-returns-type": "off",
      "jsdoc/no-types": "error",
      "jsdoc/check-alignment": "error",
      "jsdoc/check-indentation": "error",

      /* Documentacion sin caracteres especiales: solo letras (incluye
       * acentos espanoles), numeros, espacios y puntuacion basica.
       * Detecta simbolos como emojis, decorative unicode, etc. */
      "jsdoc/no-bad-blocks": "off",
      "jsdoc/require-example": "off",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    ignores: ["**/*.test.ts", "**/*.test.tsx"],
    rules: {
      /* Documentacion sin caracteres especiales: la descripcion solo puede
       * contener letras (incluye acentos espanoles), numeros, espacios y
       * puntuacion basica (.,;:()-). Bloquea emojis y simbolos unicode. */
      "jsdoc/match-description": [
        "error",
        {
          matchDescription: "^[\\p{L}\\p{N}][\\p{L}\\p{N}.,;: \\(\\)\\-]*$",
          contexts: ["any"],
        },
      ],
    },
  },
]);