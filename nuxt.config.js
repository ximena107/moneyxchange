export default {
  ssr: false,

  head: {
    title: 'moneyxchange',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap'
      }
    ]
  },

  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss', 'vue-currency-input/nuxt', 'moment'],
  modules: ['@nuxtjs/svg'],
  build: {}
};
