<template lang="pug">
div.index-root
    guava-header
    guava-section
    guava-footer
    guava-modal
</template>

<script>
import GuavaModal from '../../views/modal/modal.vue';
import GuavaHeader from '../../views/header/header.vue';
import GuavaFooter from '../../views/footer/footer.vue';
import GuavaSection from '../../views/section/index/section.vue';

export default {
    name: 'index-root',
    components: {
        GuavaModal,
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
    overflow-y: auto;
    overflow-x: hidden;
}
</style>