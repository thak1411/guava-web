<template lang="pug">
div.navigation(:class="show ? '' : 'hide-navigation'" @click.self="onClick")
    div.navigation-tab(:class="show ? '' : 'hide-navigation-tab'")
        div.nav-header
            button.close-btn(@click="onClick") X
</template>

<script>
export default {
    name: 'navigation',
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
    right: 0;
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
    right: 0;
    opacity: 1;
    width: 200px;
    height: 100%;
    position: fixed;
    background: #ffffff;
    border-left: 1px solid #ececec;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    -webkit-transition: all .5s cubic-bezier(0.2, 1, 0.2, 1);
            transition: all .5s cubic-bezier(0.2, 1, 0.2, 1);
    &.hide-navigation-tab {
        width: 0;
        height: 100%;
        -webkit-transform: translate3d(100%, 0, 0);
                transform: translate3d(100%, 0, 0);
    }
}
.nav-header {
    width: 100%;
    height: 60px;
    display: flex;
    border-bottom: 1px solid #ececec;
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
</style>