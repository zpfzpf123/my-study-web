import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        alias: '/index',
        component: () => import('@/views/index')
    },
    {path: '/page-not-found', name: 'PageNotFound', component: ()=>import('@/views/404.vue'), props: true},
    {
        path: '*', redirect(to) {
            return {
                name: 'PageNotFound',
                params: {pageName: to.path}
            }
        }
    }
]

const router = new VueRouter({
    routes
})

export default router