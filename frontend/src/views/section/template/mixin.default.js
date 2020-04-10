import Util from '../../components/js/util.js';

let mixin = {
    computed: {
        style: function() {
            return {
                height: `calc(100% - ${Util.mU(this.init_headerHeight)})`,
                // backgroundColor: this.$color('background', 'management', this.$store.state.color_mode),
            };
        },
    },
    props: {
        init_headerHeight: {
            default: 60,
        },
    },
};

export default mixin;