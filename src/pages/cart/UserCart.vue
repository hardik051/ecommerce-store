<template>
  <n-card embedded class="w-full h-[80dvh] rounded-2xl" :content-style="{ padding: '0' }">
    <div class="w-full h-full flex">
      <div class="h-full w-[70%] flex flex-col gap-6 p-10">
        <div class="w-full flex justify-between">
          <h1 class="text-2xl font-medium text-[#1f2937]">Shopping Cart</h1>
          <span class="text-xl font-medium text-gray-700">{{ cartItemsLabel }}</span>
        </div>
        <div class="w-full border border-gray-200"></div>

        <div class="flex h-full justify-center items-center">
          <EmptyCart v-if="isCartEmpty" />
          <CartList v-else />
        </div>
      </div>
      <OrderSummary />
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CartList, OrderSummary, EmptyCart } from '@/components'
import { useCartStore } from '@/store/cart'
import { NCard } from 'naive-ui'
import { storeToRefs } from 'pinia'

/*
|------------------------------------------------------|
| Initialize Store                                     |
|------------------------------------------------------|
*/
const cartStore = useCartStore()
const { totalItems } = storeToRefs(cartStore)

/*
|------------------------------------------------------|
| Declare Computed Properties                          |
|------------------------------------------------------|
*/
const cartItemsLabel = computed(() => {
  return `${totalItems.value} Items`
})

const isCartEmpty = computed(() => totalItems.value === 0)
</script>
