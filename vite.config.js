import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  
  // Path aliases for clean imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/data": path.resolve(__dirname, "./src/data")
    }
  },
  
  // Development server settings
  server: {
    port: 5173,           // Avoid port 3000 conflicts
    host: true,           // Network access
    open: true,           // Auto open browser
    watch: {
      usePolling: true,   // Fix for WSL/Docker
    },
  },
  
  // Production build optimization
  build: {
    outDir: 'dist',
    sourcemap: true,      // Debug builds
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion']
        }
      }
    },
    minify: 'terser',
    target: 'esnext'
  },
  
  // Preview settings
  preview: {
    port: 4173,
    open: true
  },
  
  // CSS optimization
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  
  // Optimize deps for faster HMR
  optimizeDeps: {
    include: ['react-icons/fi']
  },
  
  // ESBuild settings
  esbuild: {
    target: 'es2020'
  }
})
