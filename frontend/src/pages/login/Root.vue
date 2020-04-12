<template lang="pug">
div.login-root
    guava-header
    login-section
    guava-footer
    global-components
</template>

<script>
import Util from '../../views/components/js/util.js';
import GuavaHeader from '../../views/header/header.vue';
import GuavaFooter from '../../views/footer/footer.vue';
import LoginSection from '../../views/section/login/section.vue';
import GlobalComponents from '../../views/components/global-components.vue';

export default {
    name: 'login-root',
    components: {
        GuavaHeader,
        GuavaFooter,
        LoginSection,
        GlobalComponents,
    },
}
</script>

<style lang="scss" scoped>
.login-root {
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>