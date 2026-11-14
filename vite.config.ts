import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The site is published at https://<user>.github.io/kids-of-zion/
// so every asset and route lives under this base path.
export default defineConfig({
  base: '/kids-of-zion/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
})
