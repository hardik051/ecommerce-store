import type { ICartItem } from '@/types'
import { loadFromLocalStorage, saveToLocalStorage } from '@/utils'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({ cartItems: [] as ICartItem[] }),

  getters: {
    itemCount: (state) => state.cartItems.reduce((sum, item) => sum + item.quantity, 0),
    totalItems: (state) => state.cartItems.length,
  },

  actions: {
    loadCart() {
      const data = loadFromLocalStorage<ICartItem[]>('cart')
      if (data) this.cartItems = data
    },

    saveCart() {
      saveToLocalStorage('cart', this.cartItems)
    },

    addToCart(productId: string) {
      const item = this.cartItems.find((i) => i.id === productId)
      if (item) item.quantity++
      else this.cartItems.push({ id: productId, quantity: 1 })
      this.saveCart()
    },

    decrementItem(productId: string) {
      const index = this.cartItems.findIndex((item) => item.id === productId)
      if (index !== -1) {
        const item = this.cartItems[index]
        if (item.quantity > 1) item.quantity--
        else this.cartItems.splice(index, 1)

        this.saveCart()
      }
    },

    removeFromCart(productId: string) {
      this.cartItems = this.cartItems.filter((i) => i.id !== productId)
      this.saveCart()
    },
  },
})
