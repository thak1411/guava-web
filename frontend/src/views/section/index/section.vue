<template lang="pug">
extends ../template/section.pug
block content
    div.main-slot
        div.vertical-frame
            span main img
</template>

<script>
import mixin_default from '../template/mixin.default.js';

export default {
    name: 'index-section',
    mixins: [mixin_default],
}
</script>

<style lang="scss" scoped>
@import '../template/style.scss';
.main-slot {
    width: 100%;
    height: 450px;
    text-align: center;
    background-color: #4f4f4f;
}
.vertical-frame {
    width: 100%;
    height: 100%;
    display: table;
    span {
        display: table-cell;
        vertical-align: middle;
    }
}
</style>