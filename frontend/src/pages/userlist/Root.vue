<template lang="pug">
div.join-root
    guava-header
    user-list-section
    guava-footer
    guava-modal
</template>

<script>
import GuavaModal from '../../views/modal/modal.vue';
import GuavaHeader from '../../views/header/header.vue';
import GuavaFooter from '../../views/footer/footer.vue';
import UserListSection from '../../views/section/userlist/section.vue';

export default {
    name: 'user-list-root',
    components: {
        GuavaModal,
        GuavaHeader,
        GuavaFooter,
        UserListSection,
    },
}
</script>

<style lang="scss" scoped>
.user-list-root {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>