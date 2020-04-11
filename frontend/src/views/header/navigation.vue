<template lang="pug">
div.navigation(:class="show ? '' : 'hide-navigation'" @click.self="onClick")
    div.navigation-tab(:class="show ? '' : 'hide-navigation-tab'")
        div.nav-header
            button.close-btn(@click="onClick") X
        div.nav-content
            button.nav-content-btn
                ctxt(:init_message="$t('header.menu.0')" :init_fontSize="14" init_color="#000000")
            button.nav-content-btn
                ctxt(:init_message="$t('header.menu.1')" :init_fontSize="14" init_color="#000000")
</template>

<script>
import ctxt from '../components/ctxt.vue';

export default {
    name: 'navigation',
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
    }
}
</script>

<style lang="scss" scoped>
.navigation {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-transition: all .5s;
            transition: all .5s;
    background: rgba(0, 0, 0, 0.5);
    &.hide-navigation {
        width: 0;
        height: 100%;
        background: none;
    }
}
.navigation-tab {
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    position: fixed;
    background: #ffffff;
    border-left: 1px solid #ececec;
    -webkit-transition: all .5s cubic-bezier(0.2, 1, 0.2, 1);
            transition: all .5s cubic-bezier(0.2, 1, 0.2, 1);
    &.hide-navigation-tab {
        width: 0;
        height: 100%;
        visibility: hidden;
        * {
            display: none;
        }
    }
}
.nav-header {
    width: 100%;
    height: 60px;
    display: flex;
    border-bottom: 2px solid #000000;
}
.close-btn {
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    display: flex;
    color: #ffffff;
    border-radius: 14px;
    justify-content: center;
    background-color: #0f0f0f;
    margin: 10px 10px 10px auto;
}
.nav-content-btn {
    width: 100%;
    margin-top: 8px;
}
</style>