<template>
  <router-link
    :to="{ name: 'category', params: { categoryId: category.id }, query: { name: category.name } }"
    class="block transition-shadow hover:shadow-lg rounded-lg"
  >
    <n-card hoverable class="category-card shadow-sm border border-gray-200 rounded-2xl">
      <h2 class="text-xl font-semibold text-[#1f2937]">
        {{ category.name }}
      </h2>
      <p class="text-gray-600 mt-2">
        {{ category.description }}
      </p>
    </n-card>
  </router-link>
</template>

<script setup lang="ts">
import { NCard } from 'naive-ui'
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
