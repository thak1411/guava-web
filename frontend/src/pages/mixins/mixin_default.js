const axios = require('axios');

const mixin = {
    created: function() {
        this.getLang();
        this.getUserInfo();
    },
    methods: {
        getLang: function() {
            this.$i18n.locale = this.$cookie.get('lang') || 'ko';
            let html_dom = document.querySelector('html');
            html_dom.lang = this.$cookie.get('lang') || 'ko';
        },
        getUserInfo: function() {
            const setData = res => {
                res.data.login = true;
                this.$store.commit('setUser', res.data);
            };
            const onError = error => {
                // Not Login //
            };
            axios.get('/api/user/info')
            .then(setData)
            .catch(onError);
        },
    },
};


module.exports = mixin;