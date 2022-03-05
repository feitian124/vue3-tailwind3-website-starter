import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('user', () => {

  const count = ref(0)
  
  function increment() {
    count.value++
  }

  return {
    count,
    increment,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
