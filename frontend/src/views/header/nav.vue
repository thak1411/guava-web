<template lang="pug">
div.nav
    | nav
</template>

<script>
export default {
    name: 'nav',
}
</script>

<style lang="scss" scoped>
.nav {
    top: 0;
    right: 0;
    width: 200px;
    position: absolute;
    -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
    -webkit-transition: all .5s cubic-bezier(0.2, 1, 0.2, 1);
            transition: all .5s cubic-bezier(0.2, 1, 0.2, 1);
}
</style>