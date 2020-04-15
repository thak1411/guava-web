<template lang="pug">
div.join-root
    guava-header
    join-section
    guava-footer
    global-components
</template>

<script>
import Util from '../../views/components/js/util.js';
import GuavaHeader from '../../views/header/header.vue';
import GuavaFooter from '../../views/footer/footer.vue';
import JoinSection from '../../views/section/join/section.vue';
import GlobalComponents from '../../views/components/global-components.vue';

export default {
    name: 'join-root',
    components: {
        GuavaHeader,
        GuavaFooter,
        JoinSection,
        GlobalComponents,
    },
}
</script>

<style lang="scss" scoped>
.join-root {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>