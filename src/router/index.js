import Vue from 'vue'
import Router from 'vue-router'
import Device from '../utils/device'

import mobile from './mobile'
import desktop from './desktop'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            redirect() {
                if (Device.isMobile) return '/mobile';
                else return '/desktop';
            }
        },
        mobile,
        desktop
    ]
})
