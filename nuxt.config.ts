export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@storyblok/nuxt',
      {
        accessToken: 'E4OKfXbcKctTQs3gxpQCxgtt',
      },
    ],
 
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  app: {

  head: {
    title: 'Evola E-bicycles', // Set the page title
    link: [
      { rel: 'icon', type: 'image/png', href: '/evola1.png' }, // Set the favicon
    ],
  },
},

  compatibilityDate: '2025-02-21',
})