import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import astroCSV from 'astro-csv'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? 'https://cheli.dev'
    : 'http://localhost:4321',
  integrations: [
    astroCSV({}),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
