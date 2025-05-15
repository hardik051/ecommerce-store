<script lang="ts" setup>
import { type PropType } from 'vue'
import type { IProduct } from '../../types'
import { ProductItem } from '../../components'

defineProps({
  products: {
    type: Array as PropType<IProduct[]>,
    required: true,
  },
})
</script>

<template>
  <div class="product-grid">
    <div class="product-list">
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
  /* padding: 20px 0; */
}
</style>
