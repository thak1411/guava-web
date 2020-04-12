<template lang="pug">
section.index-section
    div.main-slot
        div.vertical-frame
            span main img
</template>

<script>
export default {
    name: 'index-section',
}
</script>

<style lang="scss" scoped>
.index-section {
    width: 100%;
}
.main-slot {
    width: 100%;
    height: 450px;
    background-color: #ececec;
}
.vertical-frame {
    width: 100%;
    height: 100%;
    display: table;
    text-align: center;
    span {
        display: table-cell;
        vertical-align: middle;
    }
}
</style>