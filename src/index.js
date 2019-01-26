import VueFlag from "./components/VueFlag.vue";

export default {
  install(Vue, options) {
    Vue.component("vue-flag", VueFlag);
  }
};
