<template>
  <div>
    <h1 class="text-3xl font-semibold text-[#1f2937]">Shop by Category</h1>
    <div
      class="grid gap-3 pt-6"
      style="grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))"
    >
      <CategoryItem v-for="category in CATEGORIES" :key="category.id" :category="category" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CATEGORIES } from '../../data/categories'
import { CategoryItem } from '../../components'
</script>
