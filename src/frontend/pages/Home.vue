<template>
  <div class="hello">
    <span>Hello Frontend!</span>
    <span v-html="generalStore.count"></span>
    <button @click="generalStore.increment">Hochzählen</button>
  </div>
</template>

<script setup>
  import { inject } from 'vue';

  const generalStore = inject('generalStore');
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>