<template lang="pug">
div.index-root
    guava-header(:init_height="headerHeight")
    guava-section(:init_headerHeight="headerHeight")
</template>

<script>
import Util from '../../views/components/js/util.js';
import GuavaHeader from '../../views/header/header.vue';
import GuavaSection from '../../views/section/index/section.vue';

export default {
    name: 'index-root',
    components: {
        GuavaHeader,
        GuavaSection,
    },
    data: function() {
        return {
            headerHeight: 62,
        };
    },
}
</script>

<style lang="scss" scoped>
.index-root {
    width: 100%;
    height: 100%;
}
</style>