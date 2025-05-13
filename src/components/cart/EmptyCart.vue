<template>
  <div class="flex flex-col items-center">
    <div class="w-[210px] p-3 flex items-center justify-center rounded-md">
      <n-image :src="emptyCartImg" object-fit="contain" class="object-contain" preview-disabled />
    </div>
    <h2 class="text-2xl font-semibold mb-2">Your cart is empty</h2>
    <p class="text-gray-500 mb-4">Looks like you haven’t added anything to your cart yet.</p>
    <n-button type="primary" ghost @click="gotoProducts">Start Shopping</n-button>
  </div>
</template>

<script setup lang="ts">
import { NImage, NButton } from 'naive-ui'
import { emptyCartImg } from '@/assets/images'
import { useRouter } from 'vue-router'

const router = useRouter()

const gotoProducts = () => {
  router.push('/products')
}
</script>
