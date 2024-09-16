<template>
  <div class="buttons">
    <button @click="$store.commit('decreaseCounter')">-</button>
    <button @click="$store.dispatch('increaseCounter')">+</button>
  </div>
</template>
