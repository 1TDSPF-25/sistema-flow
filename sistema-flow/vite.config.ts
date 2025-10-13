<<<<<<< HEAD
=======
// vite.config.ts
>>>>>>> feature/adicionando-api-bolsa
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

<<<<<<< HEAD
// https://vite.dev/config/
=======
>>>>>>> feature/adicionando-api-bolsa
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
<<<<<<< HEAD
})
=======
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
>>>>>>> feature/adicionando-api-bolsa
