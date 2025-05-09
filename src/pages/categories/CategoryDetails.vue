<template>
  <di class="category-page" v>
    <nav class="breadcrumb">
      <router-link to="/">Home</router-link>
      <span> / </span>
      <router-link to="/categories">Categories</router-link>
      <span> /</span>
      <span class="current">{{ categoryName }}</span>
    </nav>
    <h1 class="category-title">{{ categoryName }}</h1>

    <ProductGrid :products="filteredProducts" />
  </di>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { PRODUCTS } from '../../data/products'
import type { IProduct } from '../../types'
import { ProductGrid } from '@/components'

const route = useRoute()
const categoryId = route.params.categoryId as string
const categoryName = route.query.name as string

const filteredProducts = computed(() => {
  return PRODUCTS.filter((product: IProduct) => product.categoryId === categoryId)
})
</script>

<style scoped>
.category-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.breadcrumb {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
}

.breadcrumb a {
  text-decoration: none;
  color: #10b981;
}

.breadcrumb .current {
  color: #111;
  margin-left: 4px;
}

.category-title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #111;
}
</style>
