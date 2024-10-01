import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

import "vitest/config";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@features": "/src/client/features",
      "@components": "/src/client/components",
      "@schemas": "/src/client/schemas",
      "@utils": "/src/client/utils",
      "@styles": "/src/client/styles",
      "@assets": "/src/client/assets",
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vite.setup.ts",
  },
});
