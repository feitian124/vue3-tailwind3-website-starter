<template>
  <div class="bg-gray-50">
    <div
      class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
    >
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >About Page With About Layout</h2>
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
          use another layout, see
          <code>src/layouts/about.vue</code>
        </li>
        <li>use predefined and fully typed global variables, see the bottom line of this page</li>
        <li>
          see
          <code>src/pages/about.vue</code>
        </li>
      </ul>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: about
</route>