<template lang="pug">
div.header-dropdown(:class="($store.state.user.login ? 'h90' : 'h135') + (show ? ' ' : ' header-dropdown-hide')")
    ul
        li
            button(@click="onClickLang")
                ctxt(:init_message="$t('header.dropdown.lang')" :init_fontSize="14" init_color="#000000")
        li(v-if="!$store.state.user.login")
            button(@click="onClickLogin")
                ctxt(:init_message="$t('header.dropdown.login')" :init_fontSize="14" init_color="#000000")
        li(v-if="!$store.state.user.login")
            button(@click="onClickJoin")
                ctxt(:init_message="$t('header.dropdown.join')" :init_fontSize="14" init_color="#000000")
        li(v-if="$store.state.user.login")
            button(@click="onClickLogout")
                ctxt(:init_message="$t('header.dropdown.logout')" :init_fontSize="14" init_color="#000000")
</template>

<script>
import ctxt from '../components/ctxt.vue';

export default {
    name: 'header-dropdown',
    components: {
        ctxt,
    },
    props: {
        init_show: {
            default: false,
        },
    },
    watch: {
        init_show: function() {
            this.show = this.init_show;
        },
    },
    data: function() {
        return {
            show: this.init_show,
        };
    },
    methods: {
        onClick: function() {
            this.$emit('click');
        },
        onClickLang: function() {
            this.onClick();
            this.$store.commit('setModalType', 'lang');
        },
        onClickLogin: function() {
            this.onClick();
            window.location.href = '/login';
        },
        onClickJoin: function() {
            this.onClick();
            window.location.href = '/join';
        },
        onClickLogout: function() {
            this.onClick();
            this.$store.commit('setUser', { login: false });
            window.location.href = '/logout';
        },
    },
}
</script>

<style lang="scss" scoped>
.header-dropdown {
    width: 100%;
    // height: 180px;
    position: absolute;
    box-sizing: border-box;
    border: 1px solid #dedede;
    background-color: #ffffff;
    -webkit-transition: all .5s;
            transition: all .5s;
    &.header-dropdown-hide {
        height: 0px;
        visibility: hidden;
        * {
            display: none;
        }
    }
}
ul {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    list-style: none;
    li {
        width: 100%;
        height: 45px;
        button {
            padding: 0;
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            background: none;
            -webkit-transition: all .5s;
                    transition: all .5s;
            &:hover {
                cursor: pointer;
                background: #ececec;
            }
        }
    }
}
.h90 {
    height: 90px;
}
.h135 {
    height: 135px;
}
</style>