<template lang="pug">
div.index-root
    div index root
    div {{ $t('title') }}
</template>

<script>
export default {
    name: 'index-root',
}
</script>

<style lang="scss" scoped>
.index-root {
    width: 100%;
    height: 100%;
}
</style>