import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: []
    },
    mutations: {
        addToCart(state, item) {
            state.cart.push(item);
        },
        removeFromCart(state, item) {
            const index = state.cart.indexOf(item);
            if (index != -1) {
                state.cart.splice(index, 1);
            }
        },
        clearCart(state) {
            state.cart = []
        }
    }
})