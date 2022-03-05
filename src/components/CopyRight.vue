<template>
    <div class="mx-auto max-w-screen-xl lg:flex lg:items-center lg:justify-between">
        <p>
            vue3-tailwind3-website-starter v{{ VERSION }} by
            <a
                class="underline"
                href="https://twitter.com/feitian124"
            >@feitian124</a>
            &copy; 2021-{{ thisYear }}.
            <template
                v-if="BUILD_DATE"
            >Site built {{ BUILD_DATE.toLocaleDateString() }}.</template>
            <template v-else>Development mode.</template>
        </p>
    </div>
</template>

<script setup lang="ts">
const VERSION = import.meta.env.VITE_APP_VERSION
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
    ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
    : undefined
const thisYear = new Date().getFullYear()
</script>
