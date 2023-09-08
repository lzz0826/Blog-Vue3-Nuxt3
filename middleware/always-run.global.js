
//中間件的檔名添加後綴 .global，如 auth.global.js
export default defineNuxtRouteMiddleware((to, from) => {
    console.log(`[全域中間件] to: ${to.path}, from: ${from.path}`)
  })



//   動態添加路由中間件
//addRouteMiddleware() 輔助函數來手動添加全域或命名路由中間件

//   export default defineNuxtPlugin(() => {
//     addRouteMiddleware('global-test', () => {
//       console.log('這個是由插件添加的全域中間件，並將在每次路由變更時執行')
//     }, { global: true })
  
//     addRouteMiddleware('named-test', () => {
//       console.log('這個是由插件添加的具名中間件，並將會覆蓋任何現有的同名中間件')
//     })
//   })