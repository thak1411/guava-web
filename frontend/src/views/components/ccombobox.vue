<template lang="pug">
div.ccombobox(:style="style" :class="disable ? 'disabled' : ''")
    a.dropdown-toggle(@click="toggleDropdown" :style="{'background-color': color}")
        div.vertical-text-frame
            span(:style="{'height': Util.mU(height)}")
                ctxt(:init_message="title" :init_fontSize="14" init_color="#000000")
    div.dropdown-menu(v-if="dropdownShow" :style="{'max-height': Util.mU(maxHeight)}")
        ul.dropdown-list
            li.dropdown-item(v-for="(item, key) in items" :key="key" :style="{'height': Util.mU(height)}")
                a(@click="selectItem(item)")
                    div.vertical-text-frame
                        span
                            ctxt(:init_message="item.label" :init_fontSize="14" init_color="#000000")
</template>

<script>
import ctxt from './ctxt.vue';
import Util from './js/util.js';

export default {
    name: 'ccombobox',
    components: {
        ctxt,
    },
    props: {
        init_width: {
            default: '100%',
        },
        init_height: {
            default: 40,
        },
        init_color: {
            default: '#ffffff',
        },
        init_title: {
            default: '(default)',
        },
        init_items: {
            default: function() {
                return [
                    { key: 'default', label: '(default)' },
                ];
            },
        },
        init_disable: {
            default: false,
        },
        init_maxHeight: {
            default: 240,
        },
    },
    watch: {
        init_width: function() {
            this.width = this.init_width;
        },
        init_height: function() {
            this.height = this.init_height;
        },
        init_color: function() {
            this.color = this.init_color;
        },
        init_title: function() {
            this.title = this.init_title;
        },
        init_items: function() {
            this.items = this.init_items;
        },
        init_disable: function() {
            this.disable = this.init_disable;
        },
        init_maxHeight: function() {
            this.maxHeight = this.init_maxHeight;
        },
    },
    computed: {
        style: function() {
            return {
                width: this.width,
                height: this.height,
            };
        },
    },
    data: function() {
        return {
            Util,
            dropdownShow: false,
            color: this.init_color,
            width: this.init_width,
            title: this.init_title,
            items: this.init_items,
            height: this.init_height,
            disable: this.init_disable,
            maxHeight: this.init_maxHeight,
        };
    },
    methods: {
        toggleDropdown: function() {
            this.dropdownShow = !this.dropdownShow;
        },
        selectItem: function(item) {
            this.$emit('selectItem', item);
            this.dropdownShow = false;
        },
    },
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
    margin: 0;
    z-index: 1;
    width: 100%;
    overflow: auto;
    color: #000000;
    padding: 7px 6px;
    position: relative;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 #bbc8e5;
}
.dropdown-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.dropdown-item {
    width: 100%;
    border-radius: 10px;
    box-sizing: border-box;
    &:hover {
        background-color: #f1f1f1;
    }
}
a {
    width: 100%;
    height: 100%;
    padding: 0 14px;
    font-size: 14px;
    display: inline-block;
    box-sizing: border-box;
}
.ctxt {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    box-sizing: border-box;
    text-overflow: ellipsis;
}
.dropdown-toggle {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: inline-block;
    box-shadow: 0 2px 4px 0 #a6b7cd;
    // background: url("../../assets/img/arrow-version-select-w.svg") no-repeat 94% 50%;
    .ctxt {
        white-space: nowrap;
    }
}
.vertical-text-frame {
    height: 100%;
    display: table;
    span {
        width: 100%;
        display: table-cell;
        vertical-align: middle;
    }
}
.disabled {
    opacity: 0.5;
    pointer-events: none;
}
</style>