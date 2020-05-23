<template lang="pug">
extends ./template/section.pug
block content
    div.title-slot
        ctxt(:init_message="$t('modal.lang.title')" :init_fontSize="24" :init_fontWeight="700")
    div.content-slot
        ccombobox(:init_width="'100%'" init_height="43px" :init_title="langTitle" :init_items="langList" @selectItem="langClickEvent" :style="{ 'height': Util.mU(43) }")
    div.btn-slot
        button.modal-btn.modal-submit(@click="onSubmit")
            ctxt(:init_message="$t('common.save')" :init_fontSize="14" :init_fontWeight="700" init_color="#ffffff")
        button.modal-btn.modal-cancel(@click="onCancel")
            ctxt(:init_message="$t('common.cancel')" :init_fontSize="14" :init_fontWeight="700" init_color="#ffffff")
</template>

<script>
import ctxt from '../components/ctxt.vue';
import Util from '../components/js/util.js';
import ccombobox from '../components/ccombobox.vue';
import mixin_default from './template/mixin.default';

export default {
    name: 'modal-lang',
    mixins: [ mixin_default ],
    components: {
        ctxt,
        ccombobox,
    },
    data: function() {
        return {
            Util,
            langTitle: '',
            selectedLang: '',
            langList: [],
        };
    },
    created: function() {
        const obj = this.$t('lang');
        this.langList = [];
        this.selectedLang = this.langTitle = obj[this.$cookie.get('lang') || 'ko'];
        for (let i in obj) {
            this.langList.push({
                key: i,
                label: obj[i],
            });
        }
    },
    methods: {
        onClick: function() {
            this.$emit('closeEvent');
        },
        onSubmit: function() {
            this.$cookie.set('lang', this.selectedLang, {
                domain: this.$store.state.cookie.domain,
            });
            this.$i18n.locale = this.$cookie.get('lang');
            this.onClick();
        },
        onCancel: function() {
            this.onClick();
        },
        langClickEvent: function(value) {
            this.selectedLang = value.key;
            this.langTitle = value.label;
        },
    },
}
</script>

<style lang="scss" scoped>
@import "./template/style.scss";
</style>