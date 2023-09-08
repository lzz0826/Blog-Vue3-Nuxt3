
//Nuxt 提供了一個 vue:error 的 hook，如果 Vue 中發生的錯誤冒泡傳播到頂層，
//就會呼叫這個 hook，若有使用錯誤處理或回報的框架，我們可以自訂一個插件來接收 Vue 所有的錯誤。

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error) => {
      console.error('[由 vueErrorHandle 插件捕獲的錯誤]', error)
    }
  })