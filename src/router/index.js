import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/test',
            name: 'test',
            component: () => import('components/test')
        },
        {
            path: '/',
            name: 'index',
            component: () => import('components/Index')
        },
        {
            path: '/detail',
            name: 'detail',
            component: () => import('home/Detail')
        }
    ]
})
