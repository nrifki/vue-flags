<template lang="pug">
  span(
    @click="onClick"
    :class=`[
      "vue-flag",
      "vue-flag--" + size,
      {
        "vue-flag--": border,
        "vue-flag--": circular,
        "vue-flag--": clickable
      }
    ]`
    :style=`{
      backgroundImage: "url(/static/" + flag + ".svg)"
    }`
  )
</template>

<script>
export default {
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
      default: null,
      required: true
    },
    size: {
      type: String,
      default: "small",
      validator(x) {
        return ["small", "large"].indexOf(x) !== -1;
      }
    }
  },

  methods: {
    onClick(event) {
      if (this.clickable) {
        this.$emit("click", this.flag, event);
      }
    }
  }
};
</script>

<style lang="scss">
$c: "vue-flag";

#{$c} {
  // --> SIZES <--

  &--small {
    width: 40px;
    height: 25px;

    &#{$c}--circular {
      width: 25px;
      height: 25px;
    }
  }

  &--large {
    width: 80px;
    height: 50px;

    &#{$c}--circular {
      width: 50px;
      height: 50px;
    }
  }
}
</style>