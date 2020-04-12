<template lang="pug">
div.guava-modal(v-if="$store.state.modalType !== ''")
    modal-lang(v-if="$store.state.ModalType === 'lang'")
</template>

<script>
import ModalLang from './lang.vue';

export default {
    name: 'guava-modal',
    components: {
        ModalLang,
    },
}
</script>

<style lang="scss" scoped>
.guava-modal {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>