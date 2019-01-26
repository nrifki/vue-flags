<template lang="pug">
  #app
    vue-flag(
      flag="france"
    )
</template>

<script>
import VueFlag from "./components/VueFlag.vue";

export default {
  name: "app",
  components: {
    VueFlag
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
