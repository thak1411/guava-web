<template lang="pug">
extends ../template/section.pug
block content
    div.title-slot
        | title
    div.content-slot
        | content
</template>

<script>
import mixin_default from '../template/mixin.default.js';

export default {
    name: 'index-section',
    mixins: [mixin_default],
    props: {
        init_headerHeight: {
            default: 60,
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../template/style.scss';
</style>