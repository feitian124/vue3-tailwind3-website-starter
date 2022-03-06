<template>
  <div class="bg-gray-50">
    <div
      class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
    >
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >{{ t('intro.hi', { name: props.name }) }}</h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
          >Back Home</router-link>
        </div>
        <ButtonRepo />
      </div>
    </div>
    <div class="mx-auto max-w-screen-xl">
      <ul class="list-disc">
        <li>
          the route is nested and dynamic:
          <code>/hi/{{ props.name }}</code>, click the menu multi times to see change
        </li>
        <li>uses i18n: {{ t('intro.dynamic-route') }}</li>
        <li>
          see
          <code>src/pages/hi/[name].vue</code>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const props = defineProps<{ name: string }>()
const { t } = useI18n()
</script>
