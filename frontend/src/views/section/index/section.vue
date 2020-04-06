<template lang="pug">
extends ../template/section.pug
block content
    | content test
</template>

<script>
import mixin_default from '../template/mixin.default.js';

export default {
    name: 'index-section',
    mixins: [mixin_default],
    props: {
        init_headerHeight: {
            default: 62,
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../template/style.scss';
</style>