import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { qrcode } from 'vite-plugin-qrcode';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(),qrcode()],
  plugins: [react()],
  server: {
    host: "0.0.0.0",  // Allows access from network devices
    port: 3000,
  }
})
