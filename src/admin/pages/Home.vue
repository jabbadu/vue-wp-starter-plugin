<template>
  <div id="vue-demo-site">
    <h1>Hello Vue</h1>
    <h2>Counter: {{ count }}</h2>
    <button @click="increment">Click Me</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0);

function increment() {
  count.value++;
}
</script>

<style scoped>
  #vue-demo-site {
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 5rem;
    color: purple;
    margin: 0;
  }
  h2 {
    font-size: 2rem;
    margin: 0;
  }
  button {
    padding: 10px 25px;
    background: purple;
    color: #fff;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 50px;
  }
</style>