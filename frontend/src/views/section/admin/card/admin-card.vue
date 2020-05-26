<template lang="pug">
div.admin-card
    table
        thead
            tr
                th(v-for="(field, key) in userField" :key="key")
                    ctxt(:init_message="field" init_color="#000000" :init_fontSize="18" :init_fontWeight="800")
                th(v-if="userList.length > 0")
                    ctxt(init_message="edit" init_color="#000000" :init_fontSize="18" :init_fontWeight="800")
        tbody
            tr(v-for="(user, key) in userList" :key="key")
                td(v-for="(field, fkey) in userField" :key="fkey")
                    ctxt(:init_message="user[field]" init_color="#000000" :init_fontSize="16")
                td(v-if="userList.length > 0")
                    button.mr10(@click="onClickSelect(user)")
                        ctxt(init_message="EDIT" init_color="#ffffff" :init_fontSize="16")
                    button(@click="onClickDelete(key)")
                        ctxt(init_message="DELETE" init_color="#ffffff" :init_fontSize="16")
    span.seperate-line.mt40
    table.mt40
        thead
            tr
                th
                    ctxt(init_message="id" init_color="#000000" :init_fontSize="18" :init_fontWeight="800")
                th(v-for="(field, key) in userEditField" :key="key")
                    ctxt(:init_message="field" init_color="#000000" :init_fontSize="18" :init_fontWeight="800")
                th
                    ctxt(init_message="edit" init_color="#000000" :init_fontSize="18" :init_fontWeight="800")
        tbody
            tr
                td(v-if="userList.length > 0")
                    ctxt(:init_message="selectedUser['id']" init_color="#000000" :init_fontSize="16")
                td(v-if="userList.length > 0" v-for="(field, fkey) in userEditField" :key="fkey")
                    input(:placeholder="field" v-model="selectedUser[field]")
                td(v-if="userList.length > 0")
                    button.mr10(@click="onClickEdit")
                        ctxt(init_message="SAVE" init_color="#ffffff" :init_fontSize="16")
                    button(@click="onClickDelete(-1)")
                        ctxt(init_message="DELETE" init_color="#ffffff" :init_fontSize="16")
    
</template>

<script>
import axios from 'axios';
import ctxt from '../../../components/ctxt.vue';

export default {
    name: 'admin-card',
    components: {
        ctxt,
    },
    data: function() {
        return {
            userList: [],
            selectedUser: {},
            userEditField: [ 'name', 'student_id', 'nickname', 'permission_level' ],
            userField: [ 'id', 'name', 'student_id', 'nickname', 'permission_level', 'created' ],
        };
    },
    created: function() {
        this.setData();
    },
    methods: {
        setData: function() {
            setTimeout(() => {
                axios.get('/api/user/list')
                .then(res => {
                    switch(res.data.code) {
                    case 200:
                        this.userList = res.data.userList;
                        this.onClickSelect(this.userList[0]);
                        break;
                    }
                })
                .catch(err => {
                    window.location.href = '/';
                });
            });
        },
        onClickSelect: function(user) {
            this.selectedUser = {
                id: user.id,
                name: user.name,
                nickname: user.nickname,
                student_id: user.student_id,
                permission_level: user.permission_level,
            };
        },
        onClickEdit: function() {

        },
        onClickDelete: function(idx) {
            const user = idx != -1 ? this.userList[idx] : this.selectedUser;
            if (!confirm(user.name + ' ' + this.$t('admin.delete_confirm'))) {
                return;
            }
            setTimeout(() => {
                const params = {
                    id: user.id,
                };
                axios.get('/api/user/delete', {
                    params,
                })
                .then(res => {
                    switch (res.data.code) {
                    case 200:
                        alert(this.$t('admin.delete_success'));
                        this.setData();
                        break;
                    }
                })
                .catch(err => {
                    switch (err.response.data.code) {
                    case 400: default:
                        alert(this.$t('admin.delete_fail'));
                        break;
                    }
                });
            }, 0);
        },
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
    table {
        thead {
            tr {
                height: 45px;
                th {
                    border-bottom: 1px solid #000000;
                }
            }
        }
        tbody {
            tr {
                height: 40px;
                text-align: center;
            }
            tr:nth-child(odd) {
                background-color: #ececec;
            }
            button {
                border: none;
                outline: none;
                cursor: pointer;
                border-radius: 12px;
                background: #1fca4a;
            }
            input {
                height: 30px;
                border: none;
                outline: none;
                text-indent: 15px;
                border-radius: 12px;
                border: 1px solid #000000;
            }
        }
    }
}
.seperate-line {
    border: .5px solid #ececec;
}
.mt40 {
    margin-top: 40px;
}
.mr10 {
    margin-right: 10px;
}
</style>