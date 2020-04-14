<template lang="pug">
section.login-section
    div.title-slot
        ctxt(:init_message="$t('login.title')" :init_fontSize="26" init_fontColor="#000000" :init_fontWeight="800")
    div.content-slot
        login-card
</template>

<script>
import ctxt from '../../components/ctxt.vue';
import LoginCard from './card/login-card.vue';

export default {
    name: 'login-section',
    components: {
        ctxt,
        LoginCard,
    },
}
</script>

<style lang="scss" scoped>
.login-section {
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