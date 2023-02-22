// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
      ],
    tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: './config/tailwind.config.js',
    exposeConfig: true,
    injectPosition: 0,
    viewer: true,
    },

    // vite: {
    //     server: {
    //       watch: {
    //         usePolling: true
    //       }
    //     }
    //   }
})
