const axios = require('axios');

const mixin = {
    created: function() {
        this.initCookie();
        this.getUserInfo();
    },
    methods: {
        initCookie: function() {
            axios.get('/api/cookie')
            .then(res => {
                switch (res.status) {
                case 200: default:
                    this.$store.commit('setCookie', res.data.cookie);
                    break;
                }
            })
            .then(() => {
                if (!this.$cookie.get('lang')) {
                    this.$cookie.set('lang', 'ko', {
                        domain: this.$store.state.cookie.domain,
                    });
                }
                this.$i18n.locale = this.$cookie.get('lang');
                let html_dom = document.querySelector('html');
                html_dom.lang = this.$cookie.get('lang');
            })
            .catch(err => {
            });
        },
        getUserInfo: function() {
            const setData = res => {
                switch (res.status) {
                case 200:
                    res.data.login = true;
                    this.$store.commit('setUser', res.data);
                    break;
                }
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