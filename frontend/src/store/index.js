import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            name: null,
            login: false,
            created: null,
            nickname: null,
            student_id: null,
            permission_level: null,
        },
        cookie: {
            session: null,
            domain: null,
        },
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
        setUser: function (state, payload) {
            const { name, login, created, nickname, student_id, permission_level } = payload;
            state.user.name = name;
            state.user.login = login;
            state.user.created = created;
            state.user.nickname = nickname;
            state.user.student_id = student_id;
            state.user.permission_level = permission_level;
        },
        setCookie: function(state, payload) {
            const { session, domain } = payload;
            state.cookie.session = session;
            state.cookie.domain = domain;
        },
    },
    actions: {

    },
    modules: {

    },
});
