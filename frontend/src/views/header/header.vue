<template lang="pug">
header.guava-header(:style="style")
    | logo
</template>

<script>
import Util from '../components/js/util.js';

export default {
    name: 'guava-header',
    props: {
        init_height: {
            default: 62,
        },
    },
    computed: {
        style: function() {
            return {
                height: Util.mU(this.init_height),
            };
        },
    },
}
</script>

<style lang="scss" scoped>
.guava-header {
    width: 100%;
    background-color: #2060ff;
}
</style>