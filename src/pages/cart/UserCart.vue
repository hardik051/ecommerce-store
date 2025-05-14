<script setup lang="ts">
import { computed } from 'vue'
import { CartItemList, OrderSummary } from '@/components'
import { useCartStore } from '@/store/cart'
import { NCard } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

/*
|------------------------------|
| Initialize Store             |
|------------------------------|
*/
const cartStore = useCartStore()
const { totalItems } = storeToRefs(cartStore)
const router = useRouter()

/*
|------------------------------|
| Declare Computed Properties  |
|------------------------------|
*/
const cartItemsLabel = computed(() => `${totalItems.value} Items`)
const isCartEmpty = computed(() => !totalItems.value)

/*
|------------------------------|
| Define Functions              |
|------------------------------|
*/
const gotoCheckout = () => {
  router.push('/checkout')
}
</script>

<template>
  <n-card
    embedded
    class="w-full h-144 rounded-2xl"
    :content-style="{ padding: '0' }"
    style="height: calc(100dvh - 144px)"
  >
    <div class="w-full h-full flex">
      <div class="h-full w-[70%] flex flex-col gap-6 p-10">
        <div class="w-full flex justify-between">
          <h1 class="text-2xl font-medium text-[#1f2937]">Shopping Cart</h1>
          <span class="text-xl font-medium text-gray-700">{{ cartItemsLabel }}</span>
        </div>
        <div class="w-full border border-gray-200"></div>

        <div class="flex h-full justify-center items-center">
          <EmptyCart v-if="isCartEmpty" />
          <CartItemList v-else />
        </div>
      </div>
      <OrderSummary @btnClicked="gotoCheckout" />
    </div>
  </n-card>
</template>
