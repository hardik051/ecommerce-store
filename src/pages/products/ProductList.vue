<template>
  <div class="products-page">
    <h1>Products</h1>
    <div class="product-list">
      <ProductItem v-for="product in PRODUCTS" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PRODUCTS } from '../../data/products'

import ProductItem from '../../components/products/ProductItem.vue'
</script>

<style scoped>
.products-page {
  padding: 20px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
  padding: 20px 0;
}
</style>
