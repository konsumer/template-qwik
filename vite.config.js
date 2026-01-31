/**
 * This is the base config for vite.
 * When building, the cloudflare adapter config is used which loads this file and extends it.
 */

import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import tailwindcss from '@tailwindcss/vite'

let platform = {}

if (process.env.NODE_ENV === 'development') {
  const { getPlatformProxy } = await import('wrangler')
  platform = await getPlatformProxy()
}

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [qwikCity({ platform }), qwikVite(), tailwindcss()],

    server: {
      headers: {
        'Cache-Control': 'public, max-age=0'
      }
    },
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600'
      }
    }
  }
})
