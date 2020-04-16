<template lang="pug">
div#app
    join-root
</template>

<script>
import JoinRoot from './Root.vue';

export default {
    name: 'app',
    components: {
        JoinRoot,
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