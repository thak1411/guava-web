import axios from 'axios';

const mixin = {
    created: function() {
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
};


module.exports = mixin;