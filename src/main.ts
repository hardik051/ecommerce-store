import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import ui from '@nuxt/ui/vue-plugin'

import './assets/main.css'
import App from './App.vue'
import { useCartStore } from './store/cart'

/*
|------------------------------------------------------|
| App Initialization                                   |
|------------------------------------------------------|
*/
const app = createApp(App)
const pinia = createPinia()

// Register global plugins
app.use(router)
app.use(ui)
app.use(pinia)

// Fetch cart data from Local storage
const cartStore = useCartStore()
cartStore.loadCart()

// Mount to DOM
app.mount('#app')
