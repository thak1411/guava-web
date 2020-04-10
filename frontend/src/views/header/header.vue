<template lang="pug">
header.guava-header(:style="style")
    div.logo-slot
        img(src="../../assets/img/logo.png" alt="logo" height="40")
    div.nav-slot
        cbtn.mr15(init_message="menu1" :init_fontSize="14" :init_backgroundColor="color" @mouseover="() => { color = '#ececec' }" @mouseleave="() => { color = '#ffffff' }")
        cbtn(init_message="menu2" :init_fontSize="14" :init_backgroundColor="color2" @mouseover="() => { color2 = '#ececec' }" @mouseleave="() => { color2 = '#ffffff' }")
    div.nav-btn-slot
        cbtn(init_message="slot" :init_fontSize="14" @click="() => { toggle = !toggle; }")
        cnav(v-if="toggle")
</template>

<script>
import cbtn from '../components/cbtn.vue';
import Util from '../components/js/util.js';
import cnav from './nav';

export default {
    name: 'guava-header',
    components: {
        cnav,
        cbtn,
    },
    props: {
        init_height: {
            default: 60,
        },
    },
    computed: {
        style: function() {
            return {
                height: Util.mU(this.init_height),
                backgroundColor: '#ffffff',
            };
        },
    },
    data: function() {
        return {
            color: '#ffffff',
            color2: '#ffffff',
            toggle: false,
        };
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
    margin-left: 10px;
    margin-right: 30px;
}
.nav-slot {
    display: flex;
}
.nav-item {
    margin-right: 15px;
}
.nav-btn-slot {
    width: 100px;
    display: flex;
    padding: 10px 0;
    margin-left: auto;
}
.mr15 {
    margin-right: 15px;
}
</style>