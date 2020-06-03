<template lang="pug">
ctxt.ctxtb(:init_color="init_color" :init_message="init_message" :init_fontSize="init_fontSize" :init_fontFamily="init_fontFamily" :init_fontWeight="init_fontWeight")
</template>

<script>
import ctxt from './ctxt.vue';

export default {
    name: 'ctxtb',
    components: {
        ctxt,
    },
    props: {
        init_color: {
            default: '#000000',
        },
        init_message: {
            default: '',
        },
        init_fontSize: {
            default: 12,
        },
        init_fontFamily: {
            default: '',
        },
        init_fontWeight: {
            default: 400,
        },
    },
}
</script>

<style lang="scss" scoped>
.ctxtb {
    display: block;
}
</style>