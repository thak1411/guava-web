<template lang="pug">
div.admin-root
    guava-header
    admin-section
    guava-footer
    guava-modal
</template>

<script>
import GuavaModal from '../../views/modal/modal.vue';
import GuavaHeader from '../../views/header/header.vue';
import GuavaFooter from '../../views/footer/footer.vue';
import AdminSection from '../../views/section/admin/section.vue';

export default {
    name: 'admin-root',
    components: {
        GuavaModal,
        GuavaHeader,
        GuavaFooter,
        AdminSection,
    },
}
</script>

<style lang="scss" scoped>
.admin-root {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>