<template lang="pug">
section.user-list-section
    div.title-slot
        ctxt(:init_message="$t('userlist.title')" :init_fontSize="26" init_fontColor="#000000" :init_fontWeight="800")
    div.content-slot
        user-list-card
</template>

<script>
import ctxt from '../../components/ctxt.vue';
import UserListCard from './card/userlist-card.vue';

export default {
    name: 'user-list-section',
    components: {
        ctxt,
        UserListCard,
    },
}
</script>

<style lang="scss" scoped>
.user-list-section {
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