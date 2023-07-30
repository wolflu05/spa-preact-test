import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/react-app/": {
        target: "http://localhost:4444",
        changeOrigin: true,
        secure: true
      },
      "/my-ts-app/": {
        target: "http://localhost:4444",
        changeOrigin: true,
        secure: true
      },
      "/preact-app/": {
        target: "http://localhost:4444",
        changeOrigin: true,
        secure: true
      }
    }
  }
})
