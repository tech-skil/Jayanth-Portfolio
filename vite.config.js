import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { qrcode } from "vite-plugin-qrcode";

export default defineConfig({
  plugins: [react(), qrcode()],
  base: "/",
  build: {
    outDir: "dist",
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
