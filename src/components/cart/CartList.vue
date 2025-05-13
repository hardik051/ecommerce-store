<template>
  <div class="w-full overflow-y-auto h-full flex flex-col justify-start gap-6">
    <div class="w-full flex items-center justify-between text-lg font-medium text-gray-400">
      <div class="w-[45%] px-4 flex">Item</div>
      <div class="w-[20%] px-4 flex justify-center">Quantity</div>
      <div class="w-[14%] px-4 flex justify-center">Price</div>
      <div class="w-[14%] px-4 flex justify-end">Total</div>
    </div>

    <div class="w-full flex flex-col gap-6">
      <CartItem v-for="cartItem in cartItems" :key="cartItem.id" :cart-item="cartItem" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '@/store/cart'

import CartItem from './CartItem.vue'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()

const { cartItems } = storeToRefs(cartStore)
</script>
