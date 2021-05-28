export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Radio Ital — Listen to free reggae music radio online 24/7',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Select your songs from Dub, Ska and Roots Reggae. Breaking news headlines about Reggae music. Enjoy making your own Jamaican Ital food at home.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-SWB91XC8YB',
        async: true
      },
      {
        src: '/ga.js'
      },
      {
        src: '/gtm.js'
      }
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
          iso: 'en-US',
          name: 'en'
        },
        {
          code: 'es',
          iso: 'es-ES',
          name: 'es'
        },
        {
          code: 'pt',
          iso: 'pt-BR',
          name: 'pt'
        }
      ],
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: {
            uvp: {
              first: 'Think Ital',
              second: 'Live Ital',
              third: 'Listen Ital'
            }
          },
          es: {
            uvp: {
              first: 'Piensas Ital',
              second: 'Vives Ital',
              third: 'Escuchas Ital'
            }
          },
          pt: {
            uvp: {
              first: 'Pense Ital',
              second: 'Vives Ital',
              third: 'Ouça Ital'
            }
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
