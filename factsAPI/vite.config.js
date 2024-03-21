import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Your API server address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite paths if necessary
      },
    },
  },
})
