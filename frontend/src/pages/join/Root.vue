<template lang="pug">
div.join-root
    guava-header
    join-section
    guava-footer
    guava-modal
</template>

<script>
import GuavaModal from '../../views/modal/modal.vue';
import GuavaHeader from '../../views/header/header.vue';
import GuavaFooter from '../../views/footer/footer.vue';
import JoinSection from '../../views/section/join/section.vue';

export default {
    name: 'join-root',
    components: {
        GuavaModal,
        GuavaHeader,
        GuavaFooter,
        JoinSection,
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