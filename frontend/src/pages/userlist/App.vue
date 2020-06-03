<template lang="pug">
div#app
    user-list-root
</template>

<script>
import UserListRoot from './Root.vue';
import mixin_default from '../mixins/mixin_default.js';

export default {
    name: 'app',
    mixins: [mixin_default],
    components: {
        UserListRoot,
    },
}
</script>

<style lang="scss">
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
}
</style>