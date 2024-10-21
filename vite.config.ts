import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
 import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:8010",
        changeOrigin: true,
      },
    },
    
  }
})