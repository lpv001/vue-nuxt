<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <header class="w-screen h-[70px] bg-black flex justify-between items-center pl-5 pr-5">
    <RouterLink to="/">
      <div class="cursor-pointer flex items-center gap-5">
        <a href="https://vuejs.org/" target="_blank" class="w-[40px] bg-white rounded-full p-2">
          <img src="./assets/vue.svg" class="w-full" alt="Vue logo" />
        </a>
        <h1 class="text-xl text-white tracking-wide">Vuex Authentication</h1>
      </div>
    </RouterLink>
    <nav class="flex items-center gap-5">
      <RouterLink to="/login" class="text-white">Login</RouterLink>
      <RouterLink to="/register" class="text-white">Register</RouterLink>
    </nav>
  </header>
  <body class="w-screen h-full subtract-8">
    <RouterView />
  </body>
</template>
