<template lang="pug">
div.admin-card
    div(v-for="(user, key) in userList" :key="key")
        | {{ user }}
</template>

<script>
import axios from 'axios';

export default {
    name: 'admin-card',
    data: function() {
        return {
            userList: [],
        };
    },
    created: function() {
        axios.get('/api/user/list')
        .then(res => {
            switch(res.data.code) {
            case 200:
                this.userList = res.data.userList;
                break;
            }
        })
        .catch(err => {
            
        });
    },
}
</script>

<style lang="scss" scoped>
.admin-card {
    height: auto;
    display: flex;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
    flex-direction: column;
    box-sizing: border-box;
    width: calc(100% - 100px);
    border: 1px solid #ececec;
}
</style>