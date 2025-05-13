<template>
  <div class="w-[30%] h-full flex flex-col gap-6 bg-gray-100 py-10 px-6">
    <div class="w-full flex justify-between">
      <h1 class="text-2xl font-medium text-[#1f2937]">Order Summary</h1>
    </div>
    <div class="w-full border border-gray-200"></div>

    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between">
        <h1 class="text-base font-medium text-[#1f2937]">Total Product Price</h1>
        <p class="text-lg font-medium text-gray-800">${{ totalAmount }}</p>
      </div>

      <div class="flex items-center justify-between">
        <h1 class="text-base font-medium text-[#1f2937]">Total Discounts</h1>
        <p class="text-lg font-medium text-gray-800">${{ 0 }}</p>
      </div>

      <div class="flex items-center justify-between">
        <h1 class="text-base font-medium text-[#1f2937]">Additional Services</h1>
        <p class="text-lg font-medium text-gray-800">${{ 0 }}</p>
      </div>

      <div class="flex items-center justify-between">
        <h1 class="text-base font-medium text-[#1f2937]">Shipping Fee</h1>
        <p class="text-lg font-medium text-gray-800">${{ 0 }}</p>
      </div>
    </div>

    <div class="w-full border border-gray-200"></div>

    <div class="flex items-center justify-between">
      <h1 class="text-xl font-semibold text-[#1f2937]">Total</h1>
      <p class="text-xl font-bold text-gray-800">${{ totalAmount }}</p>
    </div>
    <n-button type="primary" ghost class="w-full">Check out</n-button>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '@/store/cart'
import { NButton } from 'naive-ui'
import { computed } from 'vue'

/*
|------------------------------------------------------|
| Initialize Store                                     |
|------------------------------------------------------|
*/
const cartStore = useCartStore()
const totalAmount = computed(() => cartStore.totalAmount)

/*
|------------------------------------------------------|
| Declare Computed Properties                          |
|------------------------------------------------------|
*/
// const totalAmount = computed(() => {
//   return `${totalAmount.value} Items`
// })
</script>
