<template lang="pug">
div#app
    index-root
</template>

<script>
import IndexRoot from './Root.vue';

export default {
    name: 'app',
    components: {
        IndexRoot,
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
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
}
</style>