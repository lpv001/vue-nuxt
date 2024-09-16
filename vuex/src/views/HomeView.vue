<template>
  <div class="wrapper">
    <Counter />
    <Button />
    <CounterSquare />
    <Input />
    <!-- <p :style="{ color: $store.state.colorCode }">{{ $store.state.counter }}</p> -->
    <!-- <div class="buttons">
      <button @click="$store.commit('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div> -->
    <!-- <div>{{ $store.state.counter }}<sup>2</sup> = {{ $store.getters.counterSquare }}</div> -->
    <!-- <div>
      <input v-model="colorCode" placeholder="Enter color code" type="text" />
    </div> -->
  </div>
</template>

<script>

import Counter from '../components/Counter.vue'
import CounterSquare from '../components/CounterSquare.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'

export default {
  name: "HomeView",
//   computed: {
//     colorCode: {
//         get(){
//             return this.$store.state.colorCode
//         },
//         set(newValue){
//             this.$store.dispatch('setColorCode', newValue)
//         }
//     }
//   },
  components: {
    Counter,
    CounterSquare,
    Button,
    Input
  }
};
</script>

<style>
p {
  font-size: 80px;
  font-family: "Arial";
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: calc(90vh - 80px);
}

.buttons {
  display: flex;
  gap: 20px;
}

button {
  padding: 5px 30px;
}
</style>
