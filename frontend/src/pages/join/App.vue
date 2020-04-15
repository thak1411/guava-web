<template lang="pug">
div#app
    login-root
</template>

<script>
import LoginRoot from './Root.vue';

export default {
    name: 'app',
    components: {
        LoginRoot,
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