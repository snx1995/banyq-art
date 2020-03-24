import Vue from 'vue'
import Router from 'vue-router'
import Device from '../utils/device'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component() {
			if (Device.isMobile) {
				return import('../components/mobile/index.vue');
			} else return import('../components/desktop');
        }
    }]
})
