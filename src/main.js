import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from './App';
import router from './router';

import axiosInstance from './lib/http';

Vue.use(Vuetify);

Vue.prototype.$axios = axiosInstance;


new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App />',
    router,
    vuetify: new Vuetify({})
})