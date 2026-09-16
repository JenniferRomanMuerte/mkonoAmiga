import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import paginas from './scripts/vite-plugin-paginas.js'

export default defineConfig({
  plugins: [react(), paginas()],
  test: {
    include: ['src/**/*.test.{js,jsx}'],
  },
})
