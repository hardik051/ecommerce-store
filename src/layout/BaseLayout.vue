<template>
  <UApp>
    <div id="app">
      <TheHeader />
      <main>
        <RouterView />
      </main>
    </div>
  </UApp>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './TheHeader.vue'
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9fafb;
  color: #111827;
}

main {
  flex: 1;
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  /* border: 1px solid #e0e0e0; */
}
</style>
