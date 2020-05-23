<template lang="pug">
div.login-root
    guava-header
    login-section
    guava-footer
    guava-modal
</template>

<script>
import GuavaModal from '../../views/modal/modal.vue';
import GuavaHeader from '../../views/header/header.vue';
import GuavaFooter from '../../views/footer/footer.vue';
import LoginSection from '../../views/section/login/section.vue';

export default {
    name: 'login-root',
    components: {
        GuavaModal,
        GuavaHeader,
        GuavaFooter,
        LoginSection,
    },
}
</script>

<style lang="scss" scoped>
.login-root {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>