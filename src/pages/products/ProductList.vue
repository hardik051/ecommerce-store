<template>
  <div>
    <h1 class="text-3xl font-semibold text-[#1f2937]">Products</h1>
    <div
      class="grid gap-6 pt-6"
      style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))"
    >
      <ProductItem v-for="product in PRODUCTS" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PRODUCTS } from '../../data/products'
import { ProductItem } from '../../components'
</script>
