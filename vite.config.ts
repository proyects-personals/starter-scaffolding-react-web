import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),

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
  },
});