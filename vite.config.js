import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allow access via localhost and LAN IP
    port: 5173,
    strictPort: false, // if 5173 is busy, pick the next free port
    open: true, // auto-open browser on start
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: false,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
