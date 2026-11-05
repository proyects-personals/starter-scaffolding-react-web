import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // Desarrollo con npm link de satoshi-rc-ui: permite a Vite servir archivos
  // del repo enlazado (fuera de la raiz) y usa una sola copia de React.
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      "@": path.resolve(__dirname, "src"),

      "@satoshi-rc-ui": "satoshi-rc-ui",

      "@domain": path.resolve(
        __dirname,
        "src/app/domain",
      ),

      "@application": path.resolve(
        __dirname,
        "src/app/application",
      ),

      "@infrastructure": path.resolve(
        __dirname,
        "src/app/infrastructure",
      ),

      "@presentation": path.resolve(
        __dirname,
        "src/app/presentation",
      ),

      "@shared": path.resolve(
        __dirname,
        "src/app/presentation/shared",
      ),

      "@assets": path.resolve(
        __dirname,
        "src/assets",
      ),

      "@i18n": path.resolve(
        __dirname,
        "src/assets/i18n",
      ),
    },
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    fs: {
      allow: [".."],
    },
  },
});