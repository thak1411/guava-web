<template lang="pug">
footer.guava-footer
    div.vertical-frame
        span guava footer
</template>

<script>
export default {
    name: 'guava-footer',
}
</script>

<style lang="scss" scoped>
.guava-footer {
    width: 100%;
    height: 200px;
    background-color: #4f4f4f;
}
.vertical-frame {
    width: 100%;
    height: 100%;
    display: table;
    color: #ececec;
    text-align: center;
    span {
        display: table-cell;
        vertical-align: middle;
    }
}
</style>