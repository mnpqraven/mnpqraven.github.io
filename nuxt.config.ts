import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss'
    ],
    css: ['@/assets/css/main.css'],
    tailwindcss: {
        cssPath: '~/assets/tailwind.css'
    },
    buildModules: [
        '@nuxtjs/color-mode'
    ],
    build: { },
    content: {
        navigation: {
            fields: ['publishedAt']
        }
    }
})
