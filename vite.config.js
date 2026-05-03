import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Verifica que esta línea esté

export default defineConfig({
  plugins: [
    tailwindcss(), // Debe ir ANTES o después de react()
    react(),
  ],
})