import { acceptHMRUpdate, defineStore } from "pinia";
import { ref } from "vue";
import { useIntervalFn } from "@vueuse/core";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  useIntervalFn(() => {
    increment();
  }, 1000);

  return {
    count,
    increment,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
