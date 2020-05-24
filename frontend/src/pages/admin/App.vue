<template lang="pug">
div#app
    admin-root
</template>

<script>
import AdminRoot from './Root.vue';
import mixin_default from '../mixins/mixin_default.js';

export default {
    name: 'app',
    mixins: [mixin_default],
    components: {
        AdminRoot,
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