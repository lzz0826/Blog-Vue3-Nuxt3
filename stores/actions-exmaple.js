import { defineStore } from 'pinia'


// Actions 相當於元件中的方法，也是修改狀態的商業邏輯定義的位置，action 可以是同步也可以是異步的，因此，我們也能在 action 中打後端 API 來取得資料後更新狀態。

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: {
      name: '',
      gender: '',
      email: ''
    }
  }),
  actions: {
    async getUserProfile() {
      try {
        const { data } = await useFetch('/api/profile')
        this.profile = data
      } catch (error) {
        return error
      }
    }
  }
})