<template lang="pug">
div.join-card
    ctxt.card-title(:init_message="$t('join.title')" init_color="#000000" :init_fontSize="18")
    div.seperate-line
    input.card-input(type="text" v-model="username" :placeholder="$t('join.username')" @keypress.enter="onSubmit" maxlength="16")
    input.card-input(type="password" v-model="password" :placeholder="$t('join.password')" @keypress.enter="onSubmit" maxlength="16")
    input.card-input(type="password" v-model="cfmPassword" :placeholder="$t('join.confirm-password')" @keypress.enter="onSubmit" maxlength="16")
    div.seperate-line.mt10
    input.card-input(type="text" v-model="name" :placeholder="$t('join.name')" @keypress.enter="onSubmit" maxlength="16")
    input.card-input(type="text" v-model="studentId" :placeholder="$t('join.student-id')" @keypress.enter="onSubmit" maxlength="10")
    input.card-input(type="text" v-model="nickname" :placeholder="$t('join.nickname')" @keypress.enter="onSubmit" maxlength="16")
    button.card-join(@click="onSubmit")
        ctxt(:init_message="$t('join.submit')" init_color="#ffffff" :init_fontSize="16")
    div.seperate-line.mtb10
    ctxt(init_message="비밀번호 잊어버리면 알아서 찾으세요" init_color="#000000" :init_fontSize="16")
</template>

<script>
import axios from 'axios';
import ctxt from '../../../components/ctxt.vue';

export default {
    name: 'join-card',
    components: {
        ctxt,
    },
    data: function() {
        return {
            name: '',
            username: '',
            password: '',
            nickname: '',
            studentId: '',
            cfmPassword: '',
        };
    },
    methods: {
        lengthCheck: function(item, l, r) {
            item = String(item);
            return item.length >= l && item.length <= r;
        },
        onSubmit: function() {
            const validateItems  = [ this.username, this.password, this.name, this.studentId, this.nickname ];
            const validateLength = [ [ 4, 16 ],     [ 8, 16 ],     [ 2, 16 ], [ 10, 10 ],     [4, 16]       ];
            const invalidMessage = [ 'username',    'password',    'name',    'student-id',   'nickname'    ];
            for (let i = 0; i < validateItems.length; ++i) {
                const item = validateItems[i];
                const length = validateLength[i];
                const message = invalidMessage[i];
                if (!this.lengthCheck(item, length[0], length[1])) {
                    alert(this.$t([ 'join.', message, '_invalid' ].join('')));
                    return;
                }
            }
            if (this.password != this.cfmPassword) {
                alert(this.$t('join.password_different'))
                return;
            }
            axios.post('/api/user/join', {
                name: this.name,
                username: this.username,
                password: this.password,
                nickname: this.nickname,
                student_id: this.studentId,
            })
            .then(res => {
                switch(res.data.code) {
                case 200:
                    alert(this.$t('join.success'));
                    window.location.href = '/';
                    break;
                default:
                    alert(this.$t('join.fail'));
                    break;
                }
            })
            .catch(e => {
                switch (e.response.data.code) {
                case 1000:
                    alert(this.$t('join.exist-username'));
                    break;
                case 1001:
                    alert(this.$t('join.exist-nickname'));
                    break;
                case 1002:
                    alert(this.$t('join.exist-student-id'));
                    break;
                default:
                    alert(this.$t('join.fail'));
                    break;
                }
            });
        },
    },
}
</script>

<style lang="scss" scoped>
.join-card {
    width: 300px;
    height: 400px;
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
.card-join {
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
.mt10 {
    margin-top: 10px;
}
</style>