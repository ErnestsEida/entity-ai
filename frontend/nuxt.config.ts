import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  modules: ['@pinia/nuxt'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEGUG': false,
    },
  },
})
