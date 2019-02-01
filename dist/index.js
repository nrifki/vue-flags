/*!
 * vue-flags v0.0.4
 * (c) Nada Rifki
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styleInject = _interopDefault(require('../node_modules/style-inject/dist/style-inject.es.js'));
var __vue_normalize__ = _interopDefault(require('vue-runtime-helpers/dist/normalize-component.js'));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  props: {
    border: {
      type: Boolean,
      default: false
    },
    circular: {
      type: Boolean,
      default: true
    },
    clickable: {
      type: Boolean,
      default: true
    },
    flag: {
      type: String,
      default: "france"
    },
    size: {
      type: String,
      default: "small",
      validator: function validator(x) {
        return ["small", "large"].indexOf(x) !== -1;
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      if (this.clickable) {
        this.$emit("click", this.flag, event);
      }
    }
  }
};

var css = ".vue-flag{display:inline-block;background-size:cover;background-position:center center;background-repeat:no-repeat;overflow:hidden}.vue-flag--small{width:40px;height:25px}.vue-flag--small.vue-flag--circular{width:25px;height:25px}.vue-flag--large{width:80px;height:50px}.vue-flag--large.vue-flag--circular{width:50px;height:50px}.vue-flag--border{border:1px solid #fff}.vue-flag--circular{border-radius:100px}.vue-flag--clickable{cursor:pointer}.vue-flag--clickable:focus{-webkit-box-shadow:0 0 0 2px #1c2532,0 0 0 3px #0194ef;box-shadow:0 0 0 2px #1c2532,0 0 0 3px #0194ef;-webkit-transition:-webkit-box-shadow ease-in-out 0s;transition:-webkit-box-shadow ease-in-out 0s;transition:box-shadow ease-in-out 0s;transition:box-shadow ease-in-out 0s, -webkit-box-shadow ease-in-out 0s}";
styleInject(css);

/* script */
const __vue_script__ = script;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script.__file = "VueFlag.vue";
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:[
    "vue-flag",
    "vue-flag--" + _vm.flag,
    "vue-flag--" + _vm.size,
    {
      "vue-flag--border": _vm.border,
      "vue-flag--circular": _vm.circular,
      "vue-flag--clickable": _vm.clickable
    }
  ],on:{"click":_vm.onClick}})};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VueFlag = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var index = {
  install: function install(Vue, options) {
    Vue.component("vue-flag", VueFlag);
  }
};

module.exports = index;
