<template>
  <header class="navbar bg-base-100">
    <div class="flex-none">
      <a class="btn btn-ghost text-xl normal-case">Company Name</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/not-found">NotFound</router-link>
        </li>
        <li>
          <router-link :to="`/hi/${counter.count}`" replace>DynamicRoute:{{ counter.count }}</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
    <div class="flex-1">
      <slot></slot>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>
