module.exports = {
  head: {
    title: '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS
  css: [
    '~/assets/styles/main.css'
  ],

  // Plugins to run before rendering page
  plugins: [
    '~/plugins/element-ui.js',
    '~/plugins/axios.js',
    '~/plugins/api.js',
    '~/plugins/mock.js',
    '~/components/globals.js'
  ],

  // Auto import components
  components: false,

  // Modules for dev and build
  buildModules: [
  ],

  // Modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Build Configuration
  build: {
    corejs: 3,
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    extend(config, { isClient }) {
      if (isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    transpile: ['jsencrypt']
  },

  telemetry: false,

  dev: process.env.NODE_ENV !== 'production',

  server: {
    host: '0.0.0.0',
    port: 3000
  },

  axios: {
    proxy: true,
    baseURL: 'http://192.168.20.134:8087'
  },

  serverMiddleware: [
    '~/server-middleware/logger'
  ],

  router: {
    middleware: ['auth']
  }
}
