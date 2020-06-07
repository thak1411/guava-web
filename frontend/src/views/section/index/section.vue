<template lang="pug">
section.index-section
    div.main-slot(v-if="status == 0")
        ctxtb.fade-in(:init_message="$t('index.sub-title1')" :init_fontSize="50" init_fontFamily="NanumBarunGothic" :key="1")
    div.main-slot(v-else-if="status == 1")
        ctxtb.fade-in(:init_message="$t('index.sub-title2')" :init_fontSize="50" init_fontFamily="NanumBarunGothicLight" :key="2")
    div.main-slot(v-else)
        ctxtb.fade-in(:init_message="$t('index.sub-title1')" :init_fontSize="50" init_fontFamily="NanumBarunGothic" :key="3")
        ctxtb.fade-in.mt20(:init_message="$t('index.sub-title2')" :init_fontSize="50" init_fontFamily="NanumBarunGothicLight" :key="4")
</template>

<script>
import ctxtb from '../../components/ctxtb.vue';

export default {
    name: 'index-section',
    components: {
        ctxtb,
    },
    data: function() {
        return {
            status: 0,
        };
    },
    mounted: function() {
        setTimeout(() => {
            this.status += 1;
        }, 2100);
        setTimeout(() => {
            this.status += 1;
        }, 4200);
    },
}
</script>

<style lang="scss" scoped>
.index-section {
    width: 100%;
}
.main-slot {
    width: 100%;
    height: 550px;
    padding-top: 200px;
    text-align: center;
    box-sizing: border-box;
    background-color: #ececec;
}
.mt20 {
    margin-top: 20px;
}
.fade-in {
    animation: fade-in 2s;
}
@keyframes fade-in {
    from {
        opacity: 0;
        padding-top: 50px;
    }
    to {
        opacity: 1;
        padding-top: 0px;
    }
}
</style>