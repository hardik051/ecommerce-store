<template>
  <div class="w-full h-full flex flex-col justify-start gap-6">
    <div class="w-full flex items-center justify-between text-lg font-medium text-gray-400">
      <div class="w-[44%] px-4 flex">Product</div>
      <div class="w-[18%] px-4 flex justify-center">Quantity</div>
      <div class="w-[16%] px-4 flex justify-center">Price</div>
      <div class="w-[15%] px-3 flex justify-end">Subtotal</div>
    </div>

    <div
      class="w-full flex flex-col gap-6 overflow-y-auto scrollbar-hide"
      style="height: calc(100dvh - 357px)"
    >
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
