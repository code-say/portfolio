import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      // Bootstrap 4's SCSS triggers Dart Sass deprecation warnings; they're harmless
      scss: { quietDeps: true },
    },
  },
})
