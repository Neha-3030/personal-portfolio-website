import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  
  // GitHub Pages base path
  base: '/personal-portfolio-website/',
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/data": path.resolve(__dirname, "./src/data")
    }
  },
  
  server: {
    port: 5173,
    host: true,
    open: true,
    watch: { usePolling: true }
  },
  
  // 🔥 PERFECT BUILD CONFIG (NO ERRORS)
  build: {
    outDir: 'dist',
    sourcemap: true
    // terser हटाया + manualChunks हटाया
  },
  
  preview: {
    port: 4173,
    open: true
  }
})
