import { createRouter, createWebHashHistory } from 'vue-router'



const routes = [
   {
      path: '/',
      name: 'home',
      props: true,
      component: () => import ('@/views/Home.vue'),
   },
   {
      path: '/map/',
      name: 'map',
      props: true,
      component: () => import ('@/views/Map.vue'),
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router