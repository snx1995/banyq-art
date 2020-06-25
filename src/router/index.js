import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     name: 'auth',
        //     component: Auth
        // },
        {
            path: '/',
            name: 'index',
            component: () => import('@/components/Index')
        },
        {
            path: '/detail',
            name: 'detail',
            component: () => import('home/Detail')
        }
    ]
})
