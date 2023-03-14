import { createRouter, createWebHistory } from 'vue-router'
import Home from '../links/Home.vue'

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
  // {
  //   path: '*',
   
  //   component: () => import('../links/PageNotFound.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
