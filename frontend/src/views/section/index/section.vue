<template lang="pug">
extends ../template/section.pug
block content
    div.title-slot
        | 개발하기 너무 힘들어요
    div.content-slot
        | 저좀 살려주세요
        br
        | 여기 개발자가 죽어나가고있어요 !!
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
</style>