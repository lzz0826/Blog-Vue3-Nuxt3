import { defineStore } from 'pinia'

// #pinia
// 定义一个名为 'user' 的 store
export const useUserStore = defineStore('user', {
  // 定义 store 的状态
  state: () => ({
    profile: {
      id: null,
      provider: {
        name: null,
        userId: null
      },
      nickname: null,
      avatar: null,
      email: null
    }
  }),

  // 定义 store 的 actions
  actions: {
    // 定义一个异步的 action，用于刷新用户的个人资料
    async refreshUserProfile() {
      // 发起一个 HTTP 请求到 '/api/user/profile'
      const { data, error } = await useFetch('/api/user/profile', { initialCache: false })

      // 如果请求成功，将返回的数据赋值给 store 的状态 'profile'
      if (data.value) {
        this.profile = data.value
      } else {
        // 如果请求失败，返回错误信息或默认消息
        return error.value?.data?.message ?? '未知錯誤'
      }
    }
  },

  // 定义 store 的持久化配置
  persist: {
    enabled: true, // 启用持久化
    strategies: [
      {
        key: 'user', // 指定持久化的键名
        storage: process.client ? localStorage : null // 在客户端使用 localStorage 进行持久化，服务器端不进行持久化
      }
    ]
  }
})
