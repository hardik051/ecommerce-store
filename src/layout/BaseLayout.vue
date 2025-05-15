<template>
  <div
    id="app"
    class="flex flex-col min-h-dvh overflow-hidden bg-[#f9fafb] text-[#111827] font-[Poppins]"
  >
    <TheHeader />
    <main class="w-full max-w-[1280px] p-8 mx-auto mt-20">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './TheHeader.vue'
</script>
