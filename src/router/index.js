import { createRouter, createWebHistory } from 'vue-router'
import Home from '../links/Home.vue'
import PageNotFoundVue from '@/links/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/repos',
    name: 'repos',
    component: () => import('../links/ReposView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error-page',
    component: PageNotFoundVue
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
