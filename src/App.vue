<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex flex-wrap space-x-2">
    <header class="bg-red-500 flex flex-wrap space-x-2">
      <h1 class="flex flex-wrap space-x-2"><span>Ivan</span><span>Radojevic</span></h1>

      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>
