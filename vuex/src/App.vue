<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="topbar">
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <h1>Vuex State Management</h1>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <body>
    <RouterView />
  </body>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #747bff;
  padding: 0 20px;
}
.topbar {
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.topbar a {
  width: 50px;
}
.topbar a img {
  width: 100%;
}
.topbar h1 {
  color: #fff;
  font-size: 22px;
  letter-spacing: 1em;
}
nav{
  display: flex;
  gap: 18px;
  color: #fff;
  cursor: pointer;
}

nav a{
  color: #fff;
}
</style>
