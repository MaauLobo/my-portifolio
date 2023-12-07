import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Screen.vue'),
    },
    {
      path: '/projects',
      component: () => import('../views/Projects.vue'),
    },
    {
      path: '/about',
      component: () => import('../views/About.vue'),
    },
    
  ],
})