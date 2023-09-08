
// 頁面間的導航守衛
// 只允許已登入使用者新增文章
import { useUserStore } from '@/stores/user'

export default defineNuxtRouteMiddleware(() => {

  if (process.client) {
    const userStore = useUserStore()
    if (!userStore.profile?.id) {
      alert('這功能需要登入')
      return navigateTo('/login')
    }
  } else {
    return navigateTo('/')
  }
})