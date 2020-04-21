<template lang="pug">
header.guava-header(:style="style")
    div.nav-btn-slot
        button.nav-user-btn(@click="() => { nToggle = !nToggle; }") 메뉴바
        navigation(:init_show="nToggle" @click="() => { nToggle = false; }")
    div.logo-slot
        img.logo(src="../../assets/img/logo.png" height="40" @click="onClick")
    div.nav-slot
        button.mr15.nav-btn
            ctxt(:init_fontSize="14" init_color="#000000" :init_message="$t('header.menu.introduction')")
        button.nav-btn
            ctxt(:init_fontSize="14" init_color="#000000" :init_message="$t('header.menu.join')")
    div.user-slot
        button.user-btn(@click="() => { dToggle = !dToggle }")
            ctxt(v-if="$store.state.user.login" :init_message="$store.state.user.nickname" init_color="#000000" :init_fontSize="14")
            ctxt(v-else :init_message="$t('header.dropdown.login')" init_color="#000000" :init_fontSize="14")
        dropdown(:init_show="dToggle")
</template>

<script>
import dropdown from './dropdown.vue';
import navigation from './navigation.vue';
import ctxt from '../components/ctxt.vue';
import Util from '../components/js/util.js';

export default {
    name: 'guava-header',
    components: {
        ctxt,
        dropdown,
        navigation,
    },
    data: function() {
        return {
            color: [ '#ffffff', '#ffffff' ],
            nToggle: false,
            dToggle: false,
        };
    },
    computed: {
        style: function() {
            return {
                // height: Util.mU(this.init_height),
                backgroundColor: '#ffffff',
            };
        },
    },
    methods: {
        onClick: function() {
            window.location.href = '/';
        },
    },
}
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
    .nav-slot {
        display: none;
    }
    .nav-btn-slot {
        display:  block;
    }
}
@media (min-width: 768px) {
    .nav-slot {
        display: flex;
    }
    .nav-btn-slot {
        display: none;
    }
}
.logo {
    &:hover {
        cursor: pointer;
    }
}
.guava-header {
    width: 100%;
    height: 60px;
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
    // display: flex;
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
    float: left;
    width: 45px;
    height: 100%;
    border-right: 1px solid #ececec;
    .nav-user-btn {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: none;
    }
}
.user-slot {
    width: 150px;
    height: 100%;
    // display: flex;
    margin-left: auto;
    position: relative;
    border-left: 1px solid #ececec;
    .user-btn {
        padding: 0;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: none;
        -webkit-transition: all .3s;
                transition: all .3s;
        &:hover {
            cursor: pointer;
            background-color: #ececec;
        }
    }
}
.mr15 {
    margin-right: 15px;
}
</style>