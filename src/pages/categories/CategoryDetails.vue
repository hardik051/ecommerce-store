<template>
  <div class="flex flex-col gap-5">
    <n-breadcrumb separator=" / ">
      <n-breadcrumb-item>
        <router-link to="/">Home</router-link>
      </n-breadcrumb-item>
      <n-breadcrumb-item>
        <router-link to="/categories">Categories</router-link>
      </n-breadcrumb-item>
      <n-breadcrumb-item>
        {{ categoryName }}
      </n-breadcrumb-item>
    </n-breadcrumb>

    <h1 class="text-3xl font-medium text-[#1f2937]">{{ categoryName }}</h1>

    <ProductGrid :products="filteredProducts" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui'
import { PRODUCTS } from '../../data/products'
import type { IProduct } from '../../types'
import { ProductGrid } from '../../components'

const route = useRoute()
const categoryId = route.params.categoryId as string
const categoryName = route.query.name as string

const filteredProducts = computed(() => {
  return PRODUCTS.filter((product: IProduct) => product.categoryId === categoryId)
})
</script>
