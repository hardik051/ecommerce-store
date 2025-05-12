import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import ui from '@nuxt/ui/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),ui({
    prefix: "U"
  }), vueJsx(), vueDevTools(), ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
