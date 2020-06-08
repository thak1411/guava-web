<template lang="pug">
div.user-list-card
    table
        thead
            tr
                th(v-for="(fuild, key) in fuilds" :key="key")
                    ctxt(:init_message="$t('userlist.' + fuild)" init_color="#000000" :init_fontSize="18" :init_fontWeight="800")
        tbody
            tr(v-for="(item, key) in items" :key="key")
                td(v-for="(fuild, key) in fuilds" :key="key")
                    ctxt(:init_message="item[fuild]" init_color="#000000" :init_fontSize="16")
</template>

<script>
import axios from 'axios';
import ctxt from '../../../components/ctxt.vue';

export default {
    name: 'user-list-card',
    components: {
        ctxt,
    },
    data: function() {
        return {
            items: [],
            fuilds: [ 'permission_level', 'name', 'nickname', 'student_id' ],
        };
    },
    mounted: function() {
        this.setData();
    },
    methods: {
        setData: function() {
            setTimeout(() => {
                axios.get('api/user/list')
                .then(res => {
                    switch (res.data.code) {
                    case 200: default:
                        this.items = res.data.userList;
                        break;
                    }
                })
                .catch(err => {
                    switch (err.response.data.code) {
                    default:
                        break;
                    }
                });
            }, 0);
        },
    },
}
</script>

<style lang="scss" scoped>
.user-list-card {
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
        border-collapse: collapse;
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
                td {
                    border-bottom: 1px solid #bbb9b9;
                }
                &:nth-last-child(1) {
                    td {
                        border-bottom: none;
                    }
                }
            }
        }
    }
}
</style>