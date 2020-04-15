import Vue from 'vue';
import App from './App.vue';
import i18n from '../../vi18n';
import store from '../../store';
import router from 'vue-router';
import VueCookie from 'vue-cookie';

Vue.use(VueCookie);

let vue = new Vue({
    i18n,
    store,
    router,
    render: function(h) {
        return h(App);
    },
}).$mount('#app');

export default vue;