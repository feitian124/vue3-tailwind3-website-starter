<template>
  <h2 class="!mt-0">{{ props.msg }}</h2>
  <button
    class="px-3 py-2 bg-white border border-gray-300 rounded-md shadow"
    @click="increment()"
  >count is: {{ count }}</button>
  <p>
    Edit
    <code>src/components/HelloWorld.vue</code> to test hot module
    replacement.
  </p>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { computed } from 'vue'

const store = useCounterStore()
const count = computed(() => store.count)
const props = defineProps<{
  msg: string
  optionalProp?: number
}>()

function increment() {
  store.increment()
}
</script>
