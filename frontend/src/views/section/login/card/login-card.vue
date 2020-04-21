<template lang="pug">
div.login-card
    ctxt.card-title(:init_message="$t('login.title')" init_color="#000000" :init_fontSize="18")
    div.seperate-line
    input.card-input(type="text" v-model="username" :placeholder="$t('login.username')" @keypress.enter="onSubmit" maxlength="16")
    input.card-input(type="password" v-model="password" :placeholder="$t('login.password')" @keypress.enter="onSubmit" maxlength="16")
    button.card-login(@click="onSubmit")
        ctxt(:init_message="$t('login.submit')" init_color="#ffffff" :init_fontSize="16")
    div.seperate-line.mtb10
    ctxt(init_message="비밀번호 잊어버리면 알아서 찾으세요" init_color="#000000" :init_fontSize="16")
</template>

<script>
import axios from 'axios';
import ctxt from '../../../components/ctxt.vue';

export default {
    name: 'login-card',
    components: {
        ctxt,
    },
    data: function() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        onSubmit: function() {
            axios.post('/api/user/login', {
                username: this.username,
                password: this.password,
            })
            .then(res => {
                window.location.href = '/';
            })
            .catch(e => {
                switch (e.response.status) {
                case 401: default:
                    alert('로그인 실패');
                    break;
                }
            });
        },
    },
}
</script>

<style lang="scss" scoped>
.login-card {
    width: 300px;
    height: 300px;
    display: flex;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid #ececec;
}
.card-title {
    text-align: center;
    margin-bottom: 5px;
}
.card-input {
    width: 100%;
    height: 26px;
    outline: none;
    font-size: 14px;
    margin-top: 10px;
    text-indent: 15px;
    border-radius: 8px;
    display: inline-block;
    border: 1px solid #ececec;
}
.card-login {
    width: 100%;
    height: 26px;
    border: none;
    outline: none;
    margin-top: 10px;
    border-radius: 20px;
    background: linear-gradient(90deg, rgb(31, 202, 74) 0%, rgb(255, 121, 121) 100%);
}
.seperate-line {
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #ececec;
}
.mtb10 {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>