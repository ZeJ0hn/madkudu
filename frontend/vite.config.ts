import path from 'path'
import {defineConfig, splitVendorChunkPlugin} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  server:{
    host: true
  },
  plugins: [react()],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  }
})
