import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,json,png,svg,woff2}'],
      },
      manifest: {
        name: 'StudyQuiz - Test de Estudio',
        short_name: 'StudyQuiz',
        description: 'Aplicación para estudiar con exámenes tipo test',
        theme_color: '#4F46E5',
        background_color: '#F8F9FC',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'assets/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
