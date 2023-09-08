import { defineStore } from 'pinia'


// 建議將回傳的函數命名為 use...，例如 useCounterStore，
// use 作為開頭是組合式函數命名的約定，來符合使用上的習慣。


// 在不同的元件間，你也可以使用 useCounterStore 取得已經建立好的 store 來共享這些狀態或進行操作。

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  },
  //Pinia Plugin Persistedstate插件 persist持久化
  //可以使用 localStorage
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'counter',
        storage: process.client ? localStorage : null
      }
    ]
  }
})

//清localStorage
// localStorage.removeItem('counter');



//不同寫法
// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0)
  
//     const increment = () => {
//       count.value += 1
//     }
//     const decrement = () => {
//       count.value -= 1
//     }
  
//     const doubleCount = computed(() => count.value * 2)
  
//     return {
//       count,
//       increment,
//       decrement,
//       doubleCount
//     },
//     {
//       persist: {
//         enabled: true,
//         strategies: [
//           {
//             key: 'counter',
//             storage: process.client ? localStorage : null
//           }
//         ]
//       }
//     }
//   })


// 在 store 內你可以組合多個 getter，在 Option 物件下，可以透過使用 this 來呼叫使用其他的 getter。
// export const useStore = defineStore('main', {
//   state: () => ({
//     counter: 0,
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2,
//     doubleCountPlusOne() {
//       return this.doubleCount + 1
//     },
//   }
// })


// 在 store 內你也可以組合其他 store 的 getter，只要建立出其他 store 實例就可以呼叫使用了。

// import { useOtherStore } from './other-store'

// export const useStore = defineStore('main', {
//   state: () => ({
//     // ...
//   }),
//   getters: {
//     otherGetter(state) {
//       const otherStore = useOtherStore()
//       return state.localData + otherStore.data
//     },
//   },
// })



// 有些情況，你可能需要將 Store 中的屬性或方法獨立的提取出來，但為了保持屬性的響應性，你需要使用 storeToRefs 來建立屬性的參考，就像使用 toRefs 來建立 props 的參考一樣。

// import { storeToRefs } from 'pinia'
// import { useCounterStore } from '@/stores/counter'

// const counterStore = useCounterStore()

// const { count } = storeToRefs(counterStore)
// const { increment, decrement } = counterStore
