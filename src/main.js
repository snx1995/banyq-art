// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import axios from 'axios'
import Vant from 'vant'
import { Toast } from 'vant'
import 'vant/lib/index.css'

import CommonUI from './components/common';

import 'style/index.less';

Vue.config.productionTip = false

Toast.setDefaultOptions('loading', {
    forbidClick: true,
    duration: 0
})

Vue.use(Vant);
Vue.use(CommonUI);

Vue.prototype.$net = axios;
Vue.prototype.$Toast = Toast;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})

axios.interceptors.request.use(config => {
    config.url = '/rest' + config.url;
    return config;
})

axios.interceptors.response.use(response => {
    return response.data;
})