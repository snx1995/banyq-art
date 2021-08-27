import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Index from '@components'

export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            name: 'index',
            path: '/',
            component: Index
        },
        {
            name: 'test',
            path: '/test',
            component: () => import('@components/test')
        },
        {
            name: 'systemLogs',
            path: '/systemLogs',
            component: () => import('@components/logs')
        }
    ],
    mode: 'hash'
})