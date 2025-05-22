import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

import ui from '@nuxt/ui/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ui({
      autoImport: {
        imports: [
          'vue',
          'vue-router',
          {
            from: 'pinia',
            imports: ['defineStore', 'storeToRefs'],
          },
        ],
        dirs: [
          './src/stores',
          './src/composables',
        ],
        dts: 'src/auto-imports.d.ts',
      },
    }),

    Pages(),
    Layouts({
      defaultLayout: 'default',
    }),

    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
