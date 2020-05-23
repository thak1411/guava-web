import Util from '../../components/js/util.js';

let mixin = {
    props: {
        init_width: {
            default: 200,
        },
        init_height: {
            default: 200,
        },
    },
    data: function() {
        return {
            width: this.init_width,
            height: this.init_height,
        };
    },
    watch: {
        init_width: function() {
            this.width = this.init_width;
        },
        init_height: function() {
            this.height = this.init_height;
        },
    },
    computed: {
        style: function() {
            return {
                width: Util.mU(this.width),
                height: Util.mU(this.height),
            };
        },
    },
};

export default mixin;