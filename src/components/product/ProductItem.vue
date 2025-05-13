<template>
  <n-card hoverable embedded class="w-full max-w-sm mx-auto rounded-2xl shadow-md">
    <div
      class="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden rounded-md"
    >
      <n-image
        v-if="product.image"
        :src="product.image"
        :alt="product.name"
        object-fit="contain"
        width="100%"
        height="100%"
        class="w-full h-full object-contain"
        preview-disabled
      />
      <div v-else class="text-4xl font-bold text-gray-600">
        {{ productName }}
      </div>
    </div>

    <div class="w-full mt-4 space-y-2">
      <h2 class="text-lg font-semibold text-gray-800 line-clamp-1">{{ product.name }}</h2>
      <p class="text-base text-gray-600 line-clamp-2">{{ product.description }}</p>
      <div class="text-xl font-bold text-gray-900">{{ productAmount }}</div>

      <div class="w-full mt-3">
        <div v-if="!cartItem" class="flex justify-start w-full">
          <n-button @click="addToCart" type="primary" ghost class="w-full">Add to Cart</n-button>
        </div>

        <div v-else class="flex items-center gap-2">
          <n-button @click="decrementCartItem" type="primary" ghost>-</n-button>
          <span class="text-lg font-medium text-gray-700">{{ cartItem.quantity }}</span>
          <n-button @click="incrementCartItem" type="primary" ghost>+</n-button>
        </div>
      </div>
    </div>
  </n-card>
</template>

<script lang="ts" setup>
import { computed, defineProps, type PropType } from 'vue'
import { NButton, NImage, NCard } from 'naive-ui'
import { useCartStore } from '../../store/cart'
import type { ICartItem, IProduct } from '../../types'

const props = defineProps({
  product: {
    type: Object as PropType<IProduct>,
    required: true,
  },
})
const cartStore = useCartStore()

const { product } = props

/*
|------------------------------------------------------|
| Declare Methods                                      |
|------------------------------------------------------|
*/
const cartItem = computed(() => {
  return cartStore.cartItems.find((item: ICartItem) => item.id === props.product.id)
})

const productName = computed(() => {
  return product.name.charAt(0).toUpperCase()
})

const productAmount = computed(() => {
  return `$ ${product.price.toFixed(2)}`
})

const addToCart = () => {
  cartStore.addToCart(product)
}

const incrementCartItem = () => {
  cartStore.incrementItem(product.id)
}

const decrementCartItem = () => {
  cartStore.decrementItem(product.id)
}
</script>
