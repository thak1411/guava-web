<template lang="pug">
extends ./template/section.pug
block content
    div.title-slot
        ctxt(:init_message="'asdf'" :init_fontSize="24" :init_fontWeight="700")
    div.content-slot
        |content
</template>

<script>
import ctxt from '../components/ctxt.vue';
import mixin_default from './template/mixin.default';

export default {
    name: 'modal-lang',
    mixins: [ mixin_default ],
    components: {
        ctxt,
    },
}
</script>

<style lang="scss" scoped>
@import "./template/style.scss";
</style>