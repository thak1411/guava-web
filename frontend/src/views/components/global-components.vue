<template lang="pug">
div.global-components
    guava-modal
</template>

<script>
import GuavaModal from '../modal/modal.vue';

export default {
    name: 'global-components',
    components: {
        GuavaModal,
    },
}
</script>

<style lang="scss" scoped>
.global-components {
    width: 0;
    height: 0;
    position: absolute;
}
</style>