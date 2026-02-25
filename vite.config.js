import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  
  // 🔥 GitHub Pages के लिए जरूरी
  base: '/personal-portfolio-website/',
  
  // Path aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/data": path.resolve(__dirname, "./src/data")
    }
  },
  
  // Dev server
  server: {
    port: 5173,
    host: true,
    open: true,
    watch: {
      usePolling: true,
    },
  },
  
  // 🔥 CLEAN BUILD CONFIG (manualChunks FULLY REMOVED)
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    target: 'esnext'
  },
  
  preview: {
    port: 4173,
    open: true
  },
  
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  
  optimizeDeps: {
    include: ['react-icons/fi']
  },
  
  esbuild: {
    target: 'es2020'
  }
})
