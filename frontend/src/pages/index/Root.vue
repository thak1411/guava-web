<template lang="pug">
div.index-root
    guava-header
    guava-section
    guava-footer
</template>

<script>
import Util from '../../views/components/js/util.js';
import GuavaHeader from '../../views/header/header.vue';
import GuavaFooter from '../../views/footer/footer.vue';
import GuavaSection from '../../views/section/index/section.vue';

export default {
    name: 'index-root',
    components: {
        GuavaHeader,
        GuavaFooter,
        GuavaSection,
    },
}
</script>

<style lang="scss" scoped>
.index-root {
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>