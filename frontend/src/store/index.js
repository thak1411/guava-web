import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        colorMode: 'light',
        modalType: '',
    },
    mutations: {
        setColorMode: function(state, payload) {
            state.colorMode = payload;
        },
        setModalType: function(state, payload) {
            state.modalType = payload;
        },
    },
    actions: {

    },
    modules: {

    },
});
