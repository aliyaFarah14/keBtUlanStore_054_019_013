import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/aliyaFarah14/keBtUlanStore_054_019_013',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
