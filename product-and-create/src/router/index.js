import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import PastOrdersView from '../views/PastOrdersView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/products',
    name: 'ProductsView',
    component: ProductsView
  },
  {
    path: '/past-orders',
    name: 'PastOrdersView',
    component: PastOrdersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
