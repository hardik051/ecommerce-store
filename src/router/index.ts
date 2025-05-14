import { createRouter, createWebHistory } from 'vue-router'

import {
  Cart,
  CategoryDetails,
  CategoryList,
  CheckoutPage,
  HomePage,
  NotFound,
  ProductDetail,
  ProductList,
} from '@/pages'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomePage,
    },
    {
      name: 'categories',
      path: '/categories',
      component: CategoryList,
    },
    {
      name: 'category',
      path: '/categories/:categoryId',
      component: CategoryDetails,
    },
    {
      name: 'products',
      path: '/products',
      component: ProductList,
      children: [
        {
          path: ':productId',
          name: 'product',
          component: ProductDetail,
          props: true,
        },
      ],
    },
    {
      name: 'cart',
      path: '/cart',
      component: Cart,
    },
    {
      name: 'checkout',
      path: '/checkout',
      component: CheckoutPage,
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active-link',
})

export default router
