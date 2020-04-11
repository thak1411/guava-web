<template lang="pug">
div.header-dropdown(:class="show ? '' : 'header-dropdown-hide'")
    ul
        li
            button
                ctxt(:init_message="$t('menu1')" :init_fontSize="14" init_color="#000000")
        li
            button
                ctxt(:init_message="$t('menu2')" :init_fontSize="14" init_color="#000000")
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
}
</script>

<style lang="scss" scoped>
.header-dropdown {
    width: 100%;
    height: 90px;
    position: absolute;
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
</style>