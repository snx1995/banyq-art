import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('@/components/test')
        },
        {
            path: '/cart',
            component: () => import('@/components/test/Cart')
        }
    ]
})
