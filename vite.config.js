import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1000 KB
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React and related libraries
          'react-vendor': ['react', 'react-dom'],
          // Split React Router if you're using it
          'router-vendor': ['react-router-dom'],
          // Split EmailJS
          'emailjs-vendor': ['@emailjs/browser'],
        }
      }
    }
  }
})