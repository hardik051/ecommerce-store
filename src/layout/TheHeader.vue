<template>
  <header class="w-full h-20 p-6 flex items-center justify-between bg-[#1f2937] fixed z-50">
    <h1 class="text-2xl font-bold text-[white]">E-Commerce Store</h1>

    <nav class="flex-1 flex justify-center space-x-6 text-[#d1d5db]font-medium text-lg">
      <RouterLink
        to="/"
        class="hover:text-[#ffffff] transition-colors text-[#d1d5db]"
        active-class="text-[#ffffff] font-semibold after:w-full"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/categories"
        class="hover:text-[#ffffff] transition-colors text-[#d1d5db]"
        active-class="text-[#ffffff] font-semibold after:w-full"
      >
        Categories
      </RouterLink>
      <RouterLink
        to="/products"
        class="hover:text-[#ffffff] transition-colors text-[#d1d5db]"
        active-class="text-[#ffffff] font-semibold after:w-full"
      >
        Products
      </RouterLink>
    </nav>

    <n-badge :value="totalAmount" class="mr-6">
      <BaseIcon
        icon="bi:cart2"
        class="text-[#10b981]"
        width="2rem"
        height="2rem"
        @iconClicked="gotoCart"
      />
    </n-badge>
  </header>
</template>

<script setup lang="ts">
import { BaseIcon } from '@/components'
import { useRouter } from 'vue-router'
import { NBadge } from 'naive-ui'
import { computed } from 'vue'

import { useCartStore } from '@/store/cart'

/*
|------------------------------------------------------|
| Initialize Store                                     |
|------------------------------------------------------|
*/
const cartStore = useCartStore()
const router = useRouter()

const totalAmount = computed(() => cartStore.totalItems)

const gotoCart = () => {
  router.push('/cart')
}
</script>
