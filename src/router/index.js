import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'auth',
            component: Auth
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('@/components/Index')
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('@/components/test/test')
        },
        {
            path: '/cart',
            component: () => import('@/components/test/Cart')
        }
    ]
})
