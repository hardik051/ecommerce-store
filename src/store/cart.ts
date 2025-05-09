import { ref } from 'vue'
import type { ICart, ICartItem } from '@/types'

const defaultCart: ICart = {
  quantities: 0,
  items: [],
  totalPrice: 0,
  totalItems: 0,
}

const cart = ref<ICart>(defaultCart)

const isCartExist = localStorage.getItem('cart')

if (isCartExist) {
  const cartData = JSON.parse(isCartExist)
  cart.value = cartData
}

function updateCartSummary() {
  cart.value.totalItems = cart.value.items.length
  cart.value.quantities = cart.value.items.reduce((sum, item) => sum + item.quantity, 0)
  cart.value.totalPrice = cart.value.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )
}

function addToCart(item: ICartItem) {
  const existingItem = cart?.value?.items.find((cartItem: ICartItem) => cartItem.id === item.id)
  if (existingItem) {
    existingItem.quantity += 1
    cart.value.quantities += 1
    cart.value.totalPrice += item.price
    cart.value.totalItems += 1
  } else {
    cart.value.items.push(item)
  }

  updateCartSummary()
}

function clearCart() {
  localStorage.removeItem('cart')
  cart.value = defaultCart
}

export const useCart = () => {
  return {
    cart,
    addToCart,
    clearCart,
  }
}
