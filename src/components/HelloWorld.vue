<template>
  <div class="text-center">
    <h2 class="!mt-0">{{ props.msg }}</h2>
    <button
      class="px-3 py-2 bg-white border border-gray-300 rounded-md shadow"
      @click="counter.increment"
    >count is: {{ counter.count }}</button>
    also used as dynamic route
    <p>
      Edit
      <code>src/components/HelloWorld.vue</code> to test hot module
      replacement.
    </p>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

import { useIntervalFn } from '@vueuse/core'

const counter = useCounterStore()

useIntervalFn(() => {
  counter.increment()
}, 1000)

const props = defineProps<{
  msg: string
  optionalProp?: number
}>()

</script>
