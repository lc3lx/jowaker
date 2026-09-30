import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 3002,
    allowedHosts: [
      "www.ordaly-system.com",
      "ordaly-system.com",
      "76.13.14.1",
      "localhost",
    ],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: [
      "www.ordaly-system.com",
      "ordaly-system.com",
      "76.13.14.1",
      "localhost",
    ],
  },
});
