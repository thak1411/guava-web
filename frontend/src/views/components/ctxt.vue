<template lang="pug">
span.ctxt(:style="style")
    |{{ message }}
</template>

<script>
import Util from './js/util.js';

/**
 * <b>문자열을 편하게 쓰려고 만든 컴포넌트</b>
 * <pre>
 * 
 * </pre>
 */
export default {
    name: 'ctxt',
    props: {
        init_color: {
            default: '#000000',
        },
        init_message: {
            default: '',
        },
        init_fontSize: {
            default: 12,
        },
        init_fontFamily: {
            default: '',
        },
        init_fontWeight: {
            default: 400,
        },
    },
    watch: {
        init_color: function() {
            this.color = this.init_color;
        },
        init_message: function() {
            this.message = this.init_message;
        },
        init_fontSize: function() {
            this.fontSize = this.init_fontSize;
        },
        init_fontFamily: function() {
            this.fontFamily = this.init_fontFamily;
        },
        init_fontWeight: function() {
            this.fontWeight = this.init_fontWeight;
        },
    },
    computed: {
        style: function() {
            return {
                color: this.color,
                fontSize: Util.mU(this.fontSize),
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
            };
        },
    },
    data: function() {
        return {
            color: this.init_color,
            message: this.init_message,
            fontSize: this.init_fontSize,
            fontFamily: this.init_fontFamily,
            fontWeight: this.init_fontWeight,
        };
    },
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: NanumBarunGothicBold;
    src: url(../../assets/fonts/NanumBarunGothicBold.ttf);
}
@font-face {
    font-family: NanumBarunGothic;
    src: url(../../assets/fonts/NanumBarunGothic.ttf);
}
@font-face {
    font-family: NanumBarunGothicLight;
    src: url(../../assets/fonts/NanumBarunGothicLight.ttf);
}
.ctxt {
    word-break: keep-all;
}
</style>