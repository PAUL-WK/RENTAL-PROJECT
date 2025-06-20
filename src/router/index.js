// import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../pages/Home.vue'
// import Admin from '../pages/Admin.vue'

// const routes = [
//   { path: '/', component: Home },
//   { path: '/admin', component: Admin }
// ]

// export default createRouter({
//   history: createWebHistory(),
//   routes
// })

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import MapPage from '../pages/MapPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'MapPage',
    component: MapPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

