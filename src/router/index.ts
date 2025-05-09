import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '@/pages/NotFound.vue'
import { ProductDetail, ProductList } from '@/pages/products'
import { CategoryDetails, CategoryList } from '@/pages/categories'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: CategoryList,
    },
    {
      name: 'categories',
      path: '/categories',
      component: CategoryList,
      // children: [
      //   {
      //     path: ':categoryId',
      //     name: 'category',
      //     component: CategoryDetails,
      //     // props: true,
      //   },
      // ],
    },
    {
      path: '/category/:categoryId',
      name: 'category',
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
    { path: '/:notFound(.*)', component: NotFound },
  ],
})

export default router
