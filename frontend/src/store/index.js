import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        colorMode: 'light',
    },
    mutations: {
        setColorMode: function (state, payload) {
            state.colorMode = payload;
        },
    },
    actions: {

    },
    modules: {

    },
});
