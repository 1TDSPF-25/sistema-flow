// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      
      '/api-produtos': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-produtos/, ''),
      },
     
      '/api-hgbrasil': {
        target: 'https://api.hgbrasil.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-hgbrasil/, ''),
      }
    }
  }
})
