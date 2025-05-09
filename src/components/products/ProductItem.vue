<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <div class="product-details">
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <span class="product-price">${{ product.price.toFixed(2) }}</span>

      <div class="product-footer">
        <button class="btn" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IProduct } from '../../types'
import { defineProps, type PropType } from 'vue'

const props = defineProps({
  product: {
    type: Object as PropType<IProduct>,
    required: true,
  },
})

const { product } = props

function addToCart() {
  alert(`Added "${product.name}" to cart`) // Replace with actual cart logic later
}
</script>

<style>
.product-card {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease;
}

.product-card:hover {
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
}

.product-image {
  width: 100%;
  height: 180px;
  object-fit: contain;
}

.product-details {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-name {
  font-size: 1.1rem;
  font-weight: bold;
  color: #111;
  margin: 0;
}

.product-description {
  font-size: 0.95rem;
  color: #555;
  margin: 0;
}

.product-price {
  font-weight: bold;
  color: #10b981;
}

.product-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
}

.btn {
  background-color: #10b981;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #0e9e6e;
}

.btn.secondary {
  background-color: transparent;
  border: 1px solid #10b981;
  color: #10b981;
}

.btn.secondary:hover {
  background-color: #e6f7f1;
}
</style>
