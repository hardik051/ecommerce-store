<template>
  <div class="flex flex-col gap-6">
    <CategoryList />
    <ProductList />
  </div>
</template>

<script setup lang="ts">
import CategoryList from '../categories/CategoryList.vue'
import ProductList from '../products/ProductList.vue'
</script>
