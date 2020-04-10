<template lang="pug">
header.guava-header(:style="style")
    div.logo-slot
        img(src="../../assets/img/logo.png" alt="logo" height="40")
    div.nav-slot
        button.mr15.nav-btn
            ctxt(:init_fontSize="14" init_color="#000000" :init_message="$t('header.menu.0')")
        button.nav-btn
            ctxt(:init_fontSize="14" init_color="#000000" :init_message="$t('header.menu.1')")
    div.nav-btn-slot
        button.nav-user-btn(@click="() => { toggle = !toggle; }") 메뉴바
        navigation(:init_show="toggle" @click="() => { toggle = false; }")
</template>

<script>
import navigation from './navigation.vue';
import ctxt from '../components/ctxt.vue';
import Util from '../components/js/util.js';

export default {
    name: 'guava-header',
    components: {
        ctxt,
        navigation,
    },
    props: {
        init_height: {
            default: 60,
        },
    },
    data: function() {
        return {
            color: [ '#ffffff', '#ffffff' ],
            toggle: false,
        };
    },
    computed: {
        style: function() {
            return {
                height: Util.mU(this.init_height),
                backgroundColor: '#ffffff',
            };
        },
    },
}
</script>

<style lang="scss" scoped>
.guava-header {
    width: 100%;
    border-bottom: 1px solid #ececec;
}
.logo-slot, .nav-slot {
    float: left;
    height: 100%;
    padding: 10px 0;
    box-sizing: border-box;
}
.logo-slot {
    margin-left: 15px;
    margin-right: 30px;
}
button {
    padding: 0;
}
.nav-slot {
    display: flex;
    .nav-btn {
        width: 90px;
        height: 40px;
        border: none;
        outline: none;
        transition: .3s;
        background: none;
        &:hover {
            cursor: pointer;
            background: #ececec;
        }
    }
}
.nav-btn-slot {
    width: 80px;
    height: 100%;
    display: flex;
    margin-left: auto;
    border-left: 1px solid #ececec;
    .nav-user-btn {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: none;
    }
}
.mr15 {
    margin-right: 15px;
}
</style>