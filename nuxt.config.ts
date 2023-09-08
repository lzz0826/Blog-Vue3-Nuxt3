// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['@/assets/css/tailwind.css','element-plus/dist/index.css'],
  
  // npm install -D nuxt-icon
  // nuxt-icon https://icon-sets.iconify.design/material-symbols/avg-time/
  modules: ['nuxt-icon', '@pinia/nuxt','@nuxtjs/i18n'],//模組
  i18n: {
    defaultLocale: 'zh',
    langDir: 'locales',
    locales: [
      { code: 'en', file: 'en.json', iso: 'en-US', name: 'English' },
      { code: 'zh', file: 'zh.json', iso: 'zh-TW', name: '繁體中文' }
    ],
    strategy: 'no_prefix',
    
    // vueI18n: {
    //   legacy: false
    // }
  },


    //  https://nitro.unjs.io/config
    // nitro: {}

  
  // 防止将这些配置信息暴露给客户端 useRuntimeConfig()
  runtimeConfig: {
    //自訂的jwtSignSecret (有點像stping boot 的 yml)
    jwtSignSecret: 'dsv2e2ece', //自訂密鑰
     public: {
      googleClientId: '863853593439-qui611j88s92af8c07ck54ha72vq9odb.apps.googleusercontent.com'
    },
    
  },

  //可以公開的配置 useAppConfig() 如果專案裡有app.config.ts 會以app.config.ts 為優先
  appConfig: {
    theme: {
      primaryColor: '#0ea5e9'
    }
  },


  build: {
    // headless UI
    transpile: ['@headlessui/vue']
  },

  // DOTO 無法使用
  // routes: {
  //   '/': { prerender: true },         // 每一次建構時，都重新預渲染頁面 (透過 Builder)
  //   '/blog/*': { static: true },      // 接收到一個請求時，頁面依照需求重新渲染頁面 (透過 Lambda)
  //   '/stats/*': { swr: '10 min' },    // 接收到一個請求時，10 分鐘的快取緩衝過期後，將會再次的重新取得資料進行渲染 (透過 Lambda)
  //   '/admin/*': { ssr: false },       // 僅在客戶端渲染
  //   '/react/*': { redirect: '/vue' }, // 路由重新導向規則
  // }


})



