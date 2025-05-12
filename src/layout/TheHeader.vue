<template>
  <header class="flex items-center justify-between p-6 bg-[#1f2937]">
    <h1 class="text-2xl font-bold text-[white]">E-Commerce Store</h1>

    <nav class="flex-1 flex justify-center space-x-6 text-[#d1d5db]font-medium text-lg">
      <RouterLink
        to="/"
        class="hover:text-[#ffffff] transition-colors text-[#d1d5db]"
        active-class="text-[#ffffff] font-semibold"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/categories"
        class="hover:text-[#ffffff] transition-colors text-[#d1d5db]"
        active-class="text-[#ffffff] font-semibold"
      >
        Categories
      </RouterLink>
      <RouterLink
        to="/products"
        class="hover:text-[#ffffff] transition-colors text-[#d1d5db]"
        active-class="text-[#ffffff] font-semibold"
      >
        Products
      </RouterLink>
    </nav>

    <button class="text-2xl text-[#ffffff] transition-colors">🛒</button>
  </header>
</template>

<script setup lang="ts"></script>
