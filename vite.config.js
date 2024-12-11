import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/gbo_react/",
  plugins: [react()],
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
});
