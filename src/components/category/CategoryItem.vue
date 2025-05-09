<template>
  <router-link
    :to="{ name: 'category', params: { categoryId: category.id }, query: { name: category.name } }"
    class="category-card"
  >
    <h2 class="category-title">{{ category.name }}</h2>
    <p class="category-description">{{ category.description }}</p>
  </router-link>
</template>

<script setup lang="ts">
import type { ICategory } from '../../types'
import { defineProps, type PropType } from 'vue'

const props = defineProps({
  category: {
    type: Object as PropType<ICategory>,
    required: true,
  },
})

const { category } = props
</script>

<style scoped>
.category-card {
  display: block;
  padding: 16px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s ease;
}

.category-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.category-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 8px;
  /* color: #555; */
}

.category-description {
  font-size: 0.95rem;
  color: #555;
}
</style>
