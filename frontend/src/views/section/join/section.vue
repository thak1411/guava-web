<template lang="pug">
section.join-section
    div.title-slot
        ctxt(:init_message="$t('join.title')" :init_fontSize="26" init_fontColor="#000000" :init_fontWeight="800")
    div.content-slot
        join-card
</template>

<script>
import ctxt from '../../components/ctxt.vue';
import JoinCard from './card/join-card.vue';

export default {
    name: 'join-section',
    components: {
        ctxt,
        JoinCard,
    },
}
</script>

<style lang="scss" scoped>
.join-section {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.title-slot {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 20px 0 0 15px;
}
.content-slot {
    width: 100%;
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    flex-direction: row;
}
</style>