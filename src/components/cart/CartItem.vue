<template>
  <div class="w-full flex items-start justify-between text-lg font-medium text-gray-400 relative">
    <div class="w-[45%] h-30 flex gap-5">
      <div
        class="w-[130px] min-w-[130px] p-3 bg-gray-100 flex items-center justify-center rounded-md"
      >
        <n-image
          v-if="image"
          :src="image"
          :alt="name"
          object-fit="contain"
          class="object-contain"
          preview-disabled
        />
      </div>

      <div class="flex py-2">
        <p class="text-lg font-medium text-gray-800 line-clamp-1">{{ name }}</p>
      </div>
    </div>
    <div class="w-[20%] py-2 flex justify-center items-center gap-2">
      <n-button @click="decrementCartItem" type="primary" ghost>-</n-button>
      <span class="text-lg font-medium text-gray-700">{{ cartItem.quantity }}</span>
      <n-button @click="incrementCartItem" type="primary" ghost>+</n-button>
    </div>
    <div class="w-[14%] py-2 flex justify-center text-base font-medium text-gray-800">
      {{ itemPrice }}
    </div>
    <div class="w-[14%] h-full py-2 flex justify-end text-base font-medium text-gray-800">
      <p>
        {{ itemTotal }}
      </p>
    </div>

    <div class="absolute bottom-0 right-0 py-4">
      <n-button @click="removeCartItem" strong secondary round type="error">Remove</n-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ICartItem } from '@/types'
import { computed, type PropType } from 'vue'
import { NImage, NButton } from 'naive-ui'
import { useCartStore } from '@/store/cart'

const props = defineProps({
  cartItem: {
    type: Object as PropType<ICartItem>,
    required: true,
  },
})

const cartStore = useCartStore()

const { id, name, image, price } = props.cartItem

const itemPrice = computed(() => {
  return `$ ${price}`
})

const itemTotal = computed(() => {
  const totalAmount = (props.cartItem.price * props.cartItem.quantity).toFixed(2)
  return `$ ${totalAmount}`
})

const incrementCartItem = () => {
  cartStore.incrementItem(id)
}

const decrementCartItem = () => {
  cartStore.decrementItem(id)
}

const removeCartItem = () => {
  cartStore.removeFromCart(id)
}
</script>
