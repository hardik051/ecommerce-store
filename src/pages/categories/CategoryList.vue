<template>
  <div class="categories-page">
    <h1 class="page-title">Shop by Category</h1>

    <div class="category-list">
      <CategoryItem v-for="category in CATEGORIES" :key="category.id" :category="category" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CategoryItem from '../../components/category/CategoryItem.vue'
import { CATEGORIES } from '../../data/categories'
</script>

<style scoped>
.categories-page {
  /* border: 1px solid #e0e0e0; */
  padding: 20px;
}

.page-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.category-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
