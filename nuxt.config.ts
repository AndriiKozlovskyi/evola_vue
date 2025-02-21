// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true },
//   modules: [
//     '@nuxtjs/tailwindcss',
//     '@storyblok/nuxt',
//       {
//         accessToken: '<your-access-token>',
//       },
//   ],
//   tailwindcss: {
//     exposeConfig: true,
//     viewer: true,
//     // and more...
//   },
//   head: {
//     title: process.env.npm_package_name || '',
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/evola.jpg' }
//     ]
//   },
// })

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

  compatibilityDate: '2025-02-21',
})