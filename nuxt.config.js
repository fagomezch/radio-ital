export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'radio-ital',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    // your settings here
    scss: [
      '@/assets/styles/settings/variables/*.scss',
      '@/assets/styles/tools/mixins/*.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // i18n.nuxtjs.org
    ['nuxt-i18n', {
      detectBrowserLanguage: {
        alwaysRedirect: true,
        cookieKey: 'i18n_redirected',
        onlyOnRoot: true,
        skipSettingLocaleOnNavigate: true,
        useCookie: true
      },
      locales: [
        {
          code: 'en',
          name: 'en',
          iso: 'en-US'
        },
        {
          code: 'es',
          name: 'es',
          iso: 'es-ES'
        },
        {
          code: 'pt',
          name: 'pt',
          iso: 'pt-BR'
        }
      ],
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: {
            welcome: 'Welcome'
          },
          pt: {
            welcome: 'Bienvenue'
          },
          es: {
            welcome: 'Bienvenido'
          }
        }
      }
    }]
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { loaders }) {
      loaders.scss.additionalData = '@use "sass:math";'
    }
  }
}
