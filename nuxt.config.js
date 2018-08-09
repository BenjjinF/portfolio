const pkg = require('./package')
const axios = require('axios')
const credentials = require('./credentials.js')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Benjamin Frost | Full Stack Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'msapplication-TileColor', content: '#1c3144' },
      { name: 'theme-color', content: '#1c3144' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com/css?family=Montserrat:400|Open+Sans:400' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#1c3144' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#4f7cac' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/styles.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~plugins/marked',
      ssr: true
    },
    {
      src: '~plugins/nav',
      ssr: false
    },
    {
      src: '~plugins/fontawesome',
      ssr: true
    },
    {
      src: '~plugins/firebaseInit',
      ssr: false
    },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['storyblok-nuxt', {
      accessToken: process.env.NODE_ENV == 'production' ? credentials.storyblok.production : credentials.storyblok.development,
      cacheProvider: 'memory'}
    ],
    ['@nuxtjs/google-analytics', {
      id: 'UA-117111458-1'
    }],
    ['nuxt-sass-resources-loader', '~/assets/styles/1-helpers/_1-helpers.scss'],
    ['@nuxtjs/pwa', {
      onesignal: false,
      icon: false
    }]
  ],

  generate: {
    routes: function () {
      return axios.get(
        "https://api.storyblok.com/v1/cdn/stories?version=published&token=" + credentials.storyblok.production + "&starts_with=projects&cv=" +
          Math.floor(Date.now() / 1e3)
      )
      .then(res => {
        const projects = res.data.stories.map(p => p.full_slug)
        return [
          '/',
          '/projects',
          '/contact',
          ...projects
        ]
      })
    }
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    extractCSS: true,
    vendor: [
      'babel-polyfill',
      'marked',
      'axios'
    ]
    // postcss: {
    //   plugins: {
    //     'autoprefixer': {},
    //     'postcss-csso': {}
    //   }
    // }
    //
    // [
    //   require('autoprefixer')({
    //     browsers: [
    //       '> 5%',
    //       'ie >= 11'
    //     ]
    //   }),
    //   require('postcss-csso')()
    // ]
  }
}
