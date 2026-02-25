import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  
  // 🔥 DEV = '/' | PRODUCTION = '/personal-portfolio-website/'
  base: mode === 'production' ? '/personal-portfolio-website/' : '/',
  
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
  
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  
  preview: {
    port: 4173,
    open: true
  }
}))
