import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Index from '@component'

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
            component: () => import('@component/test')
        }
    ],
    mode: 'hash'
})