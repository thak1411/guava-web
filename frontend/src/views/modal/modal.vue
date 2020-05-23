<template lang="pug">
div.guava-modal(v-if="$store.state.modalType !== ''" @click.self="onClick")
    modal-lang(v-if="$store.state.modalType === 'lang'" :init_width="350" :init_height="200" @closeEvent="onClick")
</template>

<script>
import ModalLang from './lang.vue';

export default {
    name: 'guava-modal',
    components: {
        ModalLang,
    },
    methods: {
        onClick: function() {
            this.$store.commit('setModalType', '');
        },
    },
}
</script>

<style lang="scss" scoped>
.guava-modal {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>