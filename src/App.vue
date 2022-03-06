<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'vue3-tailwind3-website-starter',
  meta: [
    { name: 'description', content: 'vue3-tailwind3-website-starter' },
  ],
})
</script>

<template>
  <router-view />
</template>
