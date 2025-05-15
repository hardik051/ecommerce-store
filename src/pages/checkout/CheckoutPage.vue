<template>
  <n-card
    embedded
    class="w-full h-144 rounded-2xl"
    :content-style="{ padding: '0' }"
    style="height: calc(100dvh - 144px)"
  >
    <div class="w-full h-full flex">
      <div class="h-full w-[70%] flex flex-col gap-3 px-12 py-8">
        <div class="w-full flex justify-between">
          <h1 class="text-2xl font-medium text-[#1f2937]">Checkout</h1>
        </div>
        <div class="w-full border border-gray-200"></div>

        <div class="flex h-full mt-4">
          <CheckoutForm />
        </div>
      </div>
      <OrderSummary @btnClicked="gotoCheckout" btn-label="Place Order" />
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { CheckoutForm, OrderSummary } from '@/components'
import { NCard } from 'naive-ui'
import { useRouter } from 'vue-router'

/*
|------------------------------|
| Initialize Store             |
|------------------------------|
*/
const router = useRouter()

/*
|------------------------------|
| Declare Computed Properties  |
|------------------------------|
*/

const gotoCheckout = () => {
  router.push('/checkout')
}
</script>
