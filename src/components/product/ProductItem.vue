<template>
  <div class="product-card">
    <div class="product-image-wrapper">
      <img v-if="product.image" :src="product.image" :alt="product.name" class="product-image" />
      <div v-else class="product-fallback">
        {{ product.name.charAt(0).toUpperCase() }}
      </div>
    </div>
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
  alert(`Added "${product.name}" to cart`)
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

.product-image-wrapper {
  width: 100%;
  height: 180px;
  background-color: #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  /* font-weight: bold; */
  color: #10b981;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  /* font-weight: bold; */
  color: #10b981;
  background-color: #d1d5db;
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
  display: -webkit-box;
  -webkit-line-clamp: 1; /* show only 1 line */
  line-clamp: 1; /* standard property for compatibility */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 1.4em; /* tweak for visual balance */
}

.product-description {
  font-size: 0.95rem;
  color: #555;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* show only 2 lines */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.8em; /* based on line height */
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
