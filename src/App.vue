<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="text-essential space-essential font-essential">
    <header class="space-essential flex flex-wrap bg-golden-yellow text-davys-grey">
      <h1 class="space-essential flex flex-wrap"><span>Ivan</span><span>Radojevic</span></h1>

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
