<template>
  <div class="text-center">
    <h2 class="!mt-0">{{ props.msg }}</h2>
    <button
      class="px-3 py-2 bg-white border border-gray-300 rounded-md shadow"
      @click="inc()"
    >count is: {{ count }}</button>
    <p>
      Edit
      <code>src/components/HelloWorld.vue</code> to test hot module
      replacement.
    </p>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '@vueuse/core'

const { count, inc } = useCounter(0)

const props = defineProps<{
  msg: string
  optionalProp?: number
}>()

</script>
