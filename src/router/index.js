import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    alias:'/index',
    component: () => import('@/views/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
